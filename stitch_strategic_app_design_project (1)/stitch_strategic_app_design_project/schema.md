# 모임예약플랫폼 DB 스키마 (schema.ts)

아래 코드를 복사해서 프로젝트의 schema.ts 파일로 저장하세요.

```typescript
// ============================================================================
// 모임예약플랫폼 DB 스키마 (Drizzle ORM / PostgreSQL, Neon)
// 기획서 v0.5 기준 — 각 테이블 위에 관련 PRD 장절을 주석으로 표기
// 인증 관련 테이블(user, session, account, verification)은
// Better Auth CLI(`npx auth@latest generate`)가 별도 생성하므로 여기서는 제외.
// 이 파일의 usersProfile.userId는 Better Auth의 user.id를 참조한다고 가정.
// ============================================================================

import {
  pgTable,
  pgEnum,
  uuid,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
  jsonb,
  numeric,
  primaryKey,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ----------------------------------------------------------------------------
// Enums
// ----------------------------------------------------------------------------

export const orgStatusEnum = pgEnum("org_status", [
  "pending", // 심사 대기 (4.8, 12.1)
  "approved",
  "rejected",
]);

export const memberRoleEnum = pgEnum("member_role", [
  "총무",
  "재무",
  "회장", // 옵저버 (5.1)
  "일반회원",
]);

export const restaurantStatusEnum = pgEnum("restaurant_status", [
  "pending",
  "approved",
  "suspended", // 관리자 조치 (12.4)
]);

export const reservationStatusEnum = pgEnum("reservation_status", [
  "requested", // 총무가 후보 선택, 연결자에게 요청 (12.1)
  "confirmed", // 연결자가 식당과 확정
  "cancelled",
  "completed", // 예약일 경과
]);

export const billingStatusEnum = pgEnum("billing_status", [
  "pending", // 예약일 익일 도래 전
  "paid",
  "retrying", // 1차 실패, 재시도 중 (7.5)
  "failed", // 유예기간 내 미해결
]);

export const partnerTypeEnum = pgEnum("partner_type", ["협력사", "협회"]);

export const attendanceStatusEnum = pgEnum("attendance_status", [
  "attending",
  "not_attending",
  "no_response",
]);

// ----------------------------------------------------------------------------
// 사용자 프로필 (5.1, 5.2 — Better Auth user 테이블 확장)
// ----------------------------------------------------------------------------

export const userProfiles = pgTable("user_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  authUserId: text("auth_user_id").notNull().unique(), // Better Auth user.id 참조
  name: varchar("name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  managesMultipleOrgs: boolean("manages_multiple_orgs").default(false), // 멀티모임 온보딩 질문 (12.1)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ----------------------------------------------------------------------------
// 협력사 / 협회 (3.2, 5.2, 9장)
// ----------------------------------------------------------------------------

export const partners = pgTable("partners", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  type: partnerTypeEnum("type").notNull(),
  adminUserProfileId: uuid("admin_user_profile_id").references(() => userProfiles.id), // 운영자가 직접 생성 (12.4)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 연결자 (영업사원 / 협회 담당자) — 5.2, 12.3
export const connectors = pgTable("connectors", {
  id: uuid("id").defaultRandom().primaryKey(),
  userProfileId: uuid("user_profile_id").notNull().references(() => userProfiles.id),
  partnerId: uuid("partner_id").notNull().references(() => partners.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ----------------------------------------------------------------------------
// 모임 (조직) — 4.1, 4.8, 6장, 12.1
// 계정 소유 주체는 "모임"이며 총무는 역할일 뿐이라는 원칙(6장) 반영
// ----------------------------------------------------------------------------

export const organizations = pgTable("organizations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  status: orgStatusEnum("status").default("pending").notNull(),

  // 가입 신청서 항목 (4.8, 12.1) — 승인 전 최소 정보
  applicantHeadcountRange: varchar("applicant_headcount_range", { length: 50 }),
  applicantRegion: varchar("applicant_region", { length: 100 }),
  referralConnectorId: uuid("referral_connector_id").references(() => connectors.id), // 소개 경로 → 자동 위임 심사
  approvedByUserProfileId: uuid("approved_by_user_profile_id").references(() => userProfiles.id), // 연결자 없으면 운영자 폴백

  // 승인 후 상세 프로필 (4.1) — 인원·지역 필수, 나머지 선택
  headcountMin: integer("headcount_min"),
  headcountMax: integer("headcount_max"),
  region: varchar("region", { length: 100 }),
  budgetRange: varchar("budget_range", { length: 50 }),
  requiredAmenities: jsonb("required_amenities").$type<string[]>(), // 예: ["주차장"]

  // 반복 일정 (4.1) — 비정기 모임은 null 허용
  recurrenceRule: varchar("recurrence_rule", { length: 100 }), // 예: "매월 둘째주 화요일 18:00"

  trustScore: integer("trust_score").default(100), // 5.1 자동 정화 메커니즘

  createdAt: timestamp("created_at").defaultNow().notNull(),
  approvedAt: timestamp("approved_at"),
});

// 모임-회원 관계 (5.1 4역할 체계)
export const organizationMembers = pgTable(
  "organization_members",
  {
    organizationId: uuid("organization_id").notNull().references(() => organizations.id),
    userProfileId: uuid("user_profile_id").notNull().references(() => userProfiles.id),
    role: memberRoleEnum("role").notNull(),
    joinedAt: timestamp("joined_at").defaultNow().notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.organizationId, t.userProfileId] }),
  })
);

// 총무 인계 이력 (6장)
export const handovers = pgTable("handovers", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: uuid("organization_id").notNull().references(() => organizations.id),
  fromUserProfileId: uuid("from_user_profile_id").references(() => userProfiles.id),
  toUserProfileId: uuid("to_user_profile_id").references(() => userProfiles.id),
  termEndAt: timestamp("term_end_at"),
  transitionStartAt: timestamp("transition_start_at"), // 과도기 시작 (2주)
  transitionEndAt: timestamp("transition_end_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ----------------------------------------------------------------------------
// 식당 — 4.7, 7장, 9장, 12.2
// ----------------------------------------------------------------------------

export const restaurants = pgTable("restaurants", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  status: restaurantStatusEnum("status").default("pending").notNull(),

  invitedByConnectorId: uuid("invited_by_connector_id").references(() => connectors.id), // 초대만, 등록대행 아님 (5.2, 12.3)

  region: varchar("region", { length: 100 }),
  capacityMax: integer("capacity_max"),
  hasParking: boolean("has_parking").default(false),
  cuisineTags: jsonb("cuisine_tags").$type<string[]>(),
  imageKey: text("image_key"), // Cloudflare R2 오브젝트 키

  isVerifiedBadge: boolean("is_verified_badge").default(false), // 9.1 인증 식당 배지
  billingKeyId: text("billing_key_id"), // 토스페이먼츠 빌링키 참조 (7.3)

  trustScore: integer("trust_score").default(100), // 5.1

  createdAt: timestamp("created_at").defaultNow().notNull(),
  approvedAt: timestamp("approved_at"),
});

// 모임 단위 방문 이력 — 최근 3개월 미방문 필터 (1.4, 4.1)
export const visitHistory = pgTable(
  "visit_history",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id").notNull().references(() => organizations.id),
    restaurantId: uuid("restaurant_id").notNull().references(() => restaurants.id),
    visitedAt: timestamp("visited_at").notNull(),
    menuTags: jsonb("menu_tags").$type<string[]>(),
  },
  (t) => ({
    orgVisitIdx: index("visit_org_idx").on(t.organizationId, t.visitedAt),
  })
);

// 회원사 운영 매장 태그 — 4.7, 1.4 공정성 원칙(필터 통과 후에만 가점)
export const memberOwnedStores = pgTable("member_owned_stores", {
  id: uuid("id").defaultRandom().primaryKey(),
  userProfileId: uuid("user_profile_id").notNull().references(() => userProfiles.id),
  restaurantId: uuid("restaurant_id").notNull().references(() => restaurants.id),
  organizationId: uuid("organization_id").references(() => organizations.id), // 이 회원이 속한 모임 (우선노출 대상 범위)
});

// ----------------------------------------------------------------------------
// 추천 및 예약 — 4.2, 4.3, 12.1, 12.3
// ----------------------------------------------------------------------------

export const recommendationRequests = pgTable("recommendation_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: uuid("organization_id").notNull().references(() => organizations.id),
  connectorId: uuid("connector_id").references(() => connectors.id),
  requestedAt: timestamp("requested_at").defaultNow().notNull(),
  isPrivateRequest: boolean("is_private_request").default(false), // 소수인원 프라이빗 요청 (3.2)
});

// 추천 후보 — 1.4 필터/정렬 2단계 로직의 결과 저장
export const recommendationCandidates = pgTable("recommendation_candidates", {
  id: uuid("id").defaultRandom().primaryKey(),
  requestId: uuid("request_id").notNull().references(() => recommendationRequests.id),
  restaurantId: uuid("restaurant_id").notNull().references(() => restaurants.id),
  matchReason: jsonb("match_reason").$type<string[]>(), // 예: ["최근 3개월 미방문", "주차 가능"]
  isMemberOwned: boolean("is_member_owned").default(false), // 회원사 태그 (1.4 유일한 의도적 가점)
  rank: integer("rank").notNull(),
});

export const reservations = pgTable("reservations", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: uuid("organization_id").notNull().references(() => organizations.id),
  restaurantId: uuid("restaurant_id").notNull().references(() => restaurants.id),
  connectorId: uuid("connector_id").references(() => connectors.id),
  status: reservationStatusEnum("status").default("requested").notNull(),
  scheduledAt: timestamp("scheduled_at").notNull(),
  confirmedHeadcount: integer("confirmed_headcount"), // 7.2 청구 기준
  isPrivateReservation: boolean("is_private_reservation").default(false), // 우대예약 표시 (4.2)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ----------------------------------------------------------------------------
// 공지 및 출결 — 4.4, 12.1
// ----------------------------------------------------------------------------

export const notices = pgTable("notices", {
  id: uuid("id").defaultRandom().primaryKey(),
  reservationId: uuid("reservation_id").notNull().references(() => reservations.id),
  content: text("content").notNull(), // 자동 생성된 공지문
  copiedAt: timestamp("copied_at"), // 복사 버튼 클릭 시점
  returnConfirmedAt: timestamp("return_confirmed_at"), // "복귀 확인" 버튼, 자동전환 배제 (12.1)
});

export const attendanceResponses = pgTable(
  "attendance_responses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    reservationId: uuid("reservation_id").notNull().references(() => reservations.id),
    userProfileId: uuid("user_profile_id").references(() => userProfiles.id), // 비회원 응답 대비 nullable
    status: attendanceStatusEnum("status").default("no_response").notNull(),
    respondedAt: timestamp("responded_at"),
  },
  (t) => ({
    reservationIdx: index("attendance_reservation_idx").on(t.reservationId),
  })
);

// ----------------------------------------------------------------------------
// 결제 — 7장 (식당 대상 인당 유지관리비, T+1 자동결제)
// ----------------------------------------------------------------------------

export const restaurantBilling = pgTable("restaurant_billing", {
  id: uuid("id").defaultRandom().primaryKey(),
  restaurantId: uuid("restaurant_id").notNull().references(() => restaurants.id),
  reservationId: uuid("reservation_id").notNull().references(() => reservations.id),
  amount: numeric("amount", { precision: 10, scale: 0 }).notNull(), // 확정인원 x 1,000원 (7.2)
  status: billingStatusEnum("status").default("pending").notNull(),
  scheduledChargeAt: timestamp("scheduled_charge_at").notNull(), // 예약일 익일 (T+1)
  chargedAt: timestamp("charged_at"),
  retryCount: integer("retry_count").default(0), // 7.5 재시도 로직
  receiptUrl: text("receipt_url"), // 카드 매출전표 (7.4)
  failureGraceUntil: timestamp("failure_grace_until"), // 유예기간 만료 시점
});

// ----------------------------------------------------------------------------
// 이상징후 / 관리자 조치 — 12.4
// ----------------------------------------------------------------------------

export const adminActions = pgTable("admin_actions", {
  id: uuid("id").defaultRandom().primaryKey(),
  targetType: varchar("target_type", { length: 20 }).notNull(), // "organization" | "restaurant" | "connector"
  targetId: uuid("target_id").notNull(),
  actionType: varchar("action_type", { length: 20 }).notNull(), // "warning" | "delist" | "suspend"
  reason: text("reason"),
  actedByUserProfileId: uuid("acted_by_user_profile_id").references(() => userProfiles.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ----------------------------------------------------------------------------
// Relations (조회 편의를 위한 관계 정의)
// ----------------------------------------------------------------------------

export const organizationsRelations = relations(organizations, ({ many }) => ({
  members: many(organizationMembers),
  reservations: many(reservations),
  visitHistory: many(visitHistory),
}));

export const restaurantsRelations = relations(restaurants, ({ many }) => ({
  reservations: many(reservations),
  billingRecords: many(restaurantBilling),
}));

export const reservationsRelations = relations(reservations, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [reservations.organizationId],
    references: [organizations.id],
  }),
  restaurant: one(restaurants, {
    fields: [reservations.restaurantId],
    references: [restaurants.id],
  }),
  notice: one(notices),
  attendance: many(attendanceResponses),
  billing: one(restaurantBilling),
}));

```
