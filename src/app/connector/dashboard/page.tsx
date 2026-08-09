"use client";

import Link from "next/link";

export default function ConnectorDashboardPage() {
    const requests = [
        {
            id: "req-1",
            orgName: "삼우 고양 경영자 연합회",
            date: "2026-08-18 (화) 18:30",
            headcount: "12명",
            budget: "인당 5~7만원",
            region: "일산 백석역 1km 이내",
            amenities: ["주차 6대 이상", "룸 완비"],
            status: "큐레이션 대기",
            dDay: "D-8",
        },
        {
            id: "req-2",
            orgName: "연세 87 동문 금융인 포럼",
            date: "2026-08-22 (토) 12:30",
            headcount: "8명",
            budget: "인당 8~10만원",
            region: "마두역/정발산역 인근",
            amenities: ["코스 요리", "와인 콜키지"],
            status: "큐레이션 진행중",
            dDay: "D-12",
        },
    ];

    const myStores = [
        { name: "백석 한우명가", category: "한식·구이", region: "고양시 백석동", status: "인증 완료", trustScore: 98 },
        { name: "경복궁 일산점", category: "한정식·코스", region: "고양시 마두동", status: "인증 완료", trustScore: 95 },
        { name: "스시 잇쇼", category: "일식·오마카세", region: "고양시 장항동", status: "인증 완료", trustScore: 92 },
    ];

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-7xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">hub</span> 연결자 파트너 포털
                        </span>
                        <span className="text-xs text-on-surface-variant">소속: 롯데칠성 유통사업본부</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                        추천 요청함 & 거래처 관리
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        총무들의 조건에 맞는 식당 3~5곳을 큐레이션하고 예약을 확정 처리하세요.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/connector/curation"
                        className="bg-secondary text-on-secondary hover:bg-secondary/90 font-bold px-4 py-2.5 rounded-xl shadow-sm text-sm flex items-center gap-2 transition-all"
                    >
                        <span className="material-symbols-outlined text-lg">auto_awesome</span>
                        신규 큐레이션 작성
                    </Link>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <div className="flex justify-between items-start text-on-surface-variant mb-2">
                        <span className="text-xs font-semibold">이번 달 큐레이션 요청</span>
                        <span className="material-symbols-outlined text-primary text-xl">inbox</span>
                    </div>
                    <div className="text-2xl font-bold text-on-surface">14건</div>
                    <p className="text-xs text-secondary font-medium mt-1">전월 대비 +3건 증가</p>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <div className="flex justify-between items-start text-on-surface-variant mb-2">
                        <span className="text-xs font-semibold">예약 성사율</span>
                        <span className="material-symbols-outlined text-emerald-600 text-xl">task_alt</span>
                    </div>
                    <div className="text-2xl font-bold text-on-surface">92.8%</div>
                    <p className="text-xs text-emerald-600 font-medium mt-1">우수 매칭 등급</p>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <div className="flex justify-between items-start text-on-surface-variant mb-2">
                        <span className="text-xs font-semibold">담당 지정 식당</span>
                        <span className="material-symbols-outlined text-secondary text-xl">storefront</span>
                    </div>
                    <div className="text-2xl font-bold text-on-surface">18개소</div>
                    <p className="text-xs text-on-surface-variant mt-1">고양/파주 지역 납품처</p>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <div className="flex justify-between items-start text-on-surface-variant mb-2">
                        <span className="text-xs font-semibold">누적 연결 모임</span>
                        <span className="material-symbols-outlined text-indigo-600 text-xl">groups</span>
                    </div>
                    <div className="text-2xl font-bold text-on-surface">42개 모임</div>
                    <p className="text-xs text-on-surface-variant mt-1">정기 모임 35개 관리</p>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 Cols: Incoming Requests */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">mark_chat_unread</span>
                            처리 대기 중인 추천 요청 ({requests.length})
                        </h2>
                        <span className="text-xs text-on-surface-variant">D-7 이내 신속 처리 권장</span>
                    </div>

                    <div className="space-y-4">
                        {requests.map((req) => (
                            <div key={req.id} className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:border-secondary/50 transition-all">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div>
                                        <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-md inline-block mb-1">
                                            {req.dDay} 마감
                                        </span>
                                        <h3 className="text-base font-bold text-on-surface">{req.orgName}</h3>
                                    </div>
                                    <span className="bg-secondary-container text-on-secondary-container text-xs font-semibold px-2.5 py-1 rounded-lg">
                                        {req.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-surface-container-low p-3.5 rounded-xl mb-4 text-on-surface-variant">
                                    <div>
                                        <span className="block text-on-surface-variant/70 text-[11px]">일시</span>
                                        <span className="font-semibold text-on-surface">{req.date}</span>
                                    </div>
                                    <div>
                                        <span className="block text-on-surface-variant/70 text-[11px]">인원 및 예산</span>
                                        <span className="font-semibold text-on-surface">{req.headcount} / {req.budget}</span>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <span className="block text-on-surface-variant/70 text-[11px]">희망 지역</span>
                                        <span className="font-semibold text-on-surface">{req.region}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {req.amenities.map((amenity, idx) => (
                                        <span key={idx} className="bg-surface-container text-on-surface text-[11px] px-2.5 py-1 rounded-md border border-outline-variant">
                                            ✓ {amenity}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-end gap-2 border-t border-outline-variant pt-4">
                                    <Link
                                        href="/connector/curation"
                                        className="bg-primary text-on-primary hover:bg-primary/90 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors"
                                    >
                                        후보 큐레이션 작성하기
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Col: Managed Vendor Restaurants */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">storefront</span>
                            담당 거래처 식당 ({myStores.length})
                        </h2>
                        <Link href="/partner" className="text-xs text-secondary font-semibold hover:underline">
                            전체보기
                        </Link>
                    </div>

                    <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 space-y-4">
                        {myStores.map((store, i) => (
                            <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-3.5 flex items-center justify-between gap-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-bold text-on-surface">{store.name}</h4>
                                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                                            {store.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant mt-0.5">
                                        {store.category} · {store.region}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-on-surface-variant block">신뢰점수</span>
                                    <span className="text-xs font-bold text-secondary">{store.trustScore}점</span>
                                </div>
                            </div>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="/partner"
                                className="w-full bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm">add_business</span>
                                신규 식당 거래처 초대 링크 발송
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
