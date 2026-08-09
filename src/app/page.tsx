import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";

export default function HomePage() {
  const allScreens = [
    { title: "멀티모임 허브", desc: "총무 대시보드 및 N개 모임 Quick-Switch", href: "/hub", badge: "Screen #14", icon: "grid_view" },
    { title: "정기회식 추천 리스트", desc: "D-14/D-7 공정 명분 근거 3곳 카드", href: "/recommendations", badge: "Screen #12", icon: "auto_awesome" },
    { title: "예약 확정 & 공지 생성", desc: "클립보드 복사 + 복귀 확인 UX", href: "/reservations/confirm", badge: "Screen #13", icon: "task_alt" },
    { title: "모임 프로필/설정", desc: "인원·예산·편의시설 & 반복 일정 규칙", href: "/group/settings", badge: "Screen #8", icon: "settings" },
    { title: "가입 신청서 작성", desc: "4개 항목 이내 가벼운 신청서 (소개 경로)", href: "/apply", badge: "Screen #10", icon: "assignment" },
    { title: "가입 심사 대기", desc: "연결자/운영자 위임 승인 대기 안내", href: "/apply/pending", badge: "Screen #4", icon: "hourglass_top" },
    { title: "참석자 명단 상세", desc: "실시간 출결 응답 및 미응답자 리마인드", href: "/attendance", badge: "Screen #3", icon: "checklist" },
    { title: "월간 재무 보고서", desc: "T+1 자동생성 영수증 증빙 리포트", href: "/finance", badge: "Screen #7", icon: "payments" },
    { title: "출결 및 재무 대시보드", desc: "회식 당일~익일 실시간 통합 모니터링", href: "/dashboard", badge: "Screen #11", icon: "analytics" },
    { title: "총무 인계 관리", desc: "인계 코드 생성 & 2주 과도기 동시 접근", href: "/handover", badge: "Screen #1", icon: "key" },
    { title: "총무 개인 성과 프로필", desc: "누적 예약, 참석률 94%, 개인 자산", href: "/profile", badge: "Screen #9", icon: "military_tech" },
    { title: "운영 관리 허브", desc: "대표님/운영자 전용 Admin Shield", href: "/admin", badge: "Screen #6", icon: "shield" },
    { title: "식당 파트너 랜딩", desc: "식당 사장님 정액 1,000원 유치비 안내", href: "/partner", badge: "Screen #2", icon: "store" },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body flex flex-col pb-16">
      <Navigation />

      <main className="w-full">
        {/* Redesigned Premium Responsive Hero Section */}
        <section className="relative bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low pt-8 md:pt-16 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/60">
          <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 border border-secondary/20 text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-mono text-xs font-bold tracking-wide uppercase">
                  PREMIUM SECRETARY SERVICE
                </span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-[1.2] tracking-tight">
                총무님의 선택에 <span className="text-secondary font-black">&apos;명분&apos;</span>을,<br />
                모임 운영에는 <span className="text-primary font-black">&apos;자유&apos;</span>를
              </h1>

              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                번거로운 단체 회식 예약부터 실시간 출결, T+1 재무 리포트까지. <br className="hidden sm:inline" />
                AI가 검증한 객관적인 추천 데이터로 총무님의 품격을 지켜드립니다.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/hub"
                  className="bg-secondary text-on-secondary font-headline text-sm md:text-base font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-secondary/95 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  지금 바로 시작하기 (대시보드)
                </Link>
                <Link
                  href="/apply"
                  className="bg-surface-container-lowest border-2 border-primary text-primary font-headline text-sm md:text-base font-bold py-4 px-6 rounded-xl hover:bg-surface-container-low transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">assignment</span>
                  멤버십 가입 신청
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-outline-variant/60 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="font-headline text-xl sm:text-2xl font-extrabold text-primary">94%</p>
                  <p className="font-body text-[11px] text-on-surface-variant">평균 참석률</p>
                </div>
                <div>
                  <p className="font-headline text-xl sm:text-2xl font-extrabold text-secondary">0건</p>
                  <p className="font-body text-[11px] text-on-surface-variant">노쇼 방지률</p>
                </div>
                <div>
                  <p className="font-headline text-xl sm:text-2xl font-extrabold text-primary">10,000+</p>
                  <p className="font-body text-[11px] text-on-surface-variant">누적 회원 예약</p>
                </div>
              </div>
            </div>

            {/* Right UI Preview Card (Mockup Visual) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary/30 to-primary/20 rounded-2xl blur-xl opacity-70"></div>

                {/* Visual Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant bg-surface-container-lowest">
                  <div className="relative h-56 sm:h-64 w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                      alt="정담 한정식 서초점"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-premium-gold text-white px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md tracking-wider">
                      MEMBER-ONLY
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="bg-secondary text-on-secondary font-label-mono text-[10px] font-bold px-2 py-0.5 rounded mb-1.5 inline-block">
                        AI BEST MATCH #1
                      </span>
                      <h3 className="font-headline text-xl font-bold">정담 한정식 서초점</h3>
                      <p className="text-gray-200 text-xs flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-sm">location_on</span> 서울 서초구 반포대로 122
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div>
                      <span className="font-label-mono text-[11px] text-on-surface-variant block mb-2 font-bold uppercase tracking-wider">
                        MATCH REASON (추천 객관적 근거)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-member-tag-bg text-member-tag-text px-3 py-1 rounded-lg text-xs font-bold border border-member-tag-text/10">
                          #회원 선호도 1위
                        </span>
                        <span className="bg-member-tag-bg text-member-tag-text px-3 py-1 rounded-lg text-xs font-bold border border-member-tag-text/10">
                          #30인 룸 단독 확보
                        </span>
                        <span className="bg-member-tag-bg text-member-tag-text px-3 py-1 rounded-lg text-xs font-bold border border-member-tag-text/10">
                          #예산 5.2% 절감
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-outline-variant flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-xs">
                          AI
                        </div>
                        <div>
                          <p className="font-body text-xs font-bold">자동 공지문 생성 준비완료</p>
                          <p className="font-body text-[10px] text-on-surface-variant">투표 및 확인 UX 연동</p>
                        </div>
                      </div>
                      <Link href="/hub" className="text-secondary font-bold text-xs hover:underline flex items-center">
                        미리보기 <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Core Values Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-low">
          <div className="max-w-max-width mx-auto">
            <h2 className="font-headline text-headline-md md:text-2xl font-bold text-primary mb-8 text-center sm:text-left">
              아는 식당이 제공하는 세 가지 핵심 가치
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm hover:border-secondary transition-colors">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">balance</span>
                </div>
                <h3 className="font-headline text-base font-bold text-primary mb-2">공정한 명분</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  광고와 협찬을 배제한 철저한 데이터 기반 시스템으로 모든 구성원이 납득할 수 있는 최적의 식당을 추천합니다.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm hover:border-secondary transition-colors">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                </div>
                <h3 className="font-headline text-base font-bold text-primary mb-2">업무 자동화</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  단순 공지문 생성부터 T+1 재무 리포트까지, 총무님의 귀한 시간을 업무 대신 모임의 즐거움에 쓰게 합니다.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm hover:border-secondary transition-colors">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <h3 className="font-headline text-base font-bold text-primary mb-2">멀티 모임 관리</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  여러 개의 소모임과 프로젝트 팀을 하나의 허브에서 편리하게 전환하며 관리할 수 있는 최적화된 대시보드를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 max-w-max-width mx-auto">
          <h2 className="font-headline text-headline-md md:text-2xl font-bold text-primary mb-10 text-center">
            총무를 위한 스마트 운영 프로세스 (4-Steps)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="font-headline text-base font-bold text-primary mb-2">모임 조건 등록</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                인원, 희망 지역, 모임 성격, 1인당 예산을 간편하게 입력하세요.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="font-headline text-base font-bold text-primary mb-2">AI 최적 후보 추천</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                D-14, D-7 주기에 맞춰 가장 &apos;명분&apos; 있는 후보지 3곳을 알림으로 제안합니다.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="font-headline text-base font-bold text-primary mb-2">원클릭 공지 및 확정</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                선택된 장소를 기반으로 세련된 공지문이 자동 생성되며, 참석 투표를 즉시 시작합니다.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant relative shadow-sm">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary font-bold flex items-center justify-center mb-4">
                4
              </div>
              <h4 className="font-headline text-base font-bold text-primary mb-2">자동 재무 보고서 수신</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                모임 종료 후 익일 오전, 영수증 증빙이 포함된 완벽한 재무 보고서가 전달됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-margin-mobile py-20 bg-secondary text-on-secondary text-center">
          <div className="max-w-max-width mx-auto">
            <h2 className="font-headline text-headline-lg md:text-3xl font-bold mb-4">
              더 이상 회식 예약 때문에 고민하지 마세요.
            </h2>
            <p className="text-body text-body-lg mb-10 opacity-90">
              지금 신청하시면 첫 달 프리미엄 리포트를 무료로 제공합니다.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white text-secondary font-headline text-base font-bold py-4 px-10 rounded-xl shadow-xl active:scale-95 transition-transform"
            >
              모임 가입 신청하기
            </Link>
          </div>
        </section>

        {/* 14 Screens Quick Navigation Portal Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-low border-t border-outline-variant">
          <div className="max-w-max-width mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-secondary font-label-mono text-xs font-bold uppercase tracking-wide">
                  Interactive Screen Prototypes Portal
                </span>
                <h2 className="font-headline text-headline-md text-primary font-bold mt-1">
                  전체 14개 전용 화면 마이그레이션 포털
                </h2>
              </div>
              <span className="text-xs text-on-surface-variant font-label-mono">
                Total 14 Screens
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allScreens.map((screen) => (
                <Link
                  key={screen.href}
                  href={screen.href}
                  className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                        <span className="material-symbols-outlined text-xl">{screen.icon}</span>
                      </div>
                      <span className="font-label-mono text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                        {screen.badge}
                      </span>
                    </div>
                    <h3 className="font-headline text-base font-bold text-primary group-hover:text-secondary transition-colors">
                      {screen.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant mt-1">
                      {screen.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant flex justify-between items-center text-xs font-semibold text-secondary">
                    <span>화면 이동</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-highest text-on-surface-variant border-t border-outline-variant">
        <div className="font-headline text-headline-md font-bold text-primary">아는 식당</div>
        <div className="flex gap-6 text-xs font-body">
          <a className="hover:text-primary transition-colors" href="#">이용약관</a>
          <a className="hover:text-primary transition-colors" href="#">개인정보처리방침</a>
          <a className="hover:text-primary transition-colors" href="#">문의하기</a>
        </div>
        <p className="text-xs font-body">© 2026 아는 식당 (Justified Prestige). All rights reserved.</p>
      </footer>
    </div>
  );
}
