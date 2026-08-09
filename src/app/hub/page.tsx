"use client";

import Link from "next/link";
import Image from "next/image";

export default function HubPage() {
    return (
        <div className="bg-surface text-on-surface min-h-screen pb-32">
            {/* TopAppBar with GNB for Desktop */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/hub" className="flex items-center gap-2 cursor-pointer transition-all duration-150 active:scale-98">
                        <h1 className="font-headline text-headline-md text-on-surface font-bold">
                            고양시 소상공인연합회
                        </h1>
                        <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
                    </Link>
                </div>

                {/* Desktop Global Navigation Bar (GNB) */}
                <nav className="hidden md:flex items-center gap-8 font-headline text-sm font-semibold">
                    <Link href="/hub" className="text-secondary border-b-2 border-secondary pb-1">
                        허브 홈
                    </Link>
                    <Link href="/recommendations" className="text-on-surface-variant hover:text-primary transition-colors">
                        식당 추천
                    </Link>
                    <Link href="/reservations/confirm" className="text-on-surface-variant hover:text-primary transition-colors">
                        예약 관리
                    </Link>
                    <Link href="/attendance" className="text-on-surface-variant hover:text-primary transition-colors">
                        참석자 명단
                    </Link>
                    <Link href="/group/settings" className="text-on-surface-variant hover:text-primary transition-colors">
                        모임 설정
                    </Link>
                    <Link href="/finance" className="text-on-surface-variant hover:text-primary transition-colors">
                        재무보고
                    </Link>
                    <Link href="/partner" className="text-on-surface-variant hover:text-primary transition-colors">
                        파트너 안내
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                    </button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant relative">
                        <Image
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                            alt="김총무 프로필"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
            </header>

            <main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                {/* Section 1: Urgent Alert / Progress (Bento Row 1) */}
                <section className="mb-gutter-lg">
                    <div className="relative overflow-hidden rounded-xl bg-primary-container p-gutter-lg text-on-primary">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-[120px]">restaurant</span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-premium-gold rounded-full mb-4">
                                    <span className="material-symbols-outlined text-[14px] text-white">stars</span>
                                    <span className="font-label-mono text-white text-xs font-semibold">
                                        D-14 차기 모임 식당 추천
                                    </span>
                                </div>
                                <h2 className="font-headline text-headline-lg text-white mb-2 font-bold">
                                    총무님, 최적의 후보지가 도착했습니다.
                                </h2>
                                <p className="font-body text-xs text-on-primary-container max-w-xl opacity-90">
                                    AI가 연합회 회원들의 최근 선호도와 예산을 분석하여 3곳의 식당을 엄선했습니다. 지금 바로 확인하고 투표를 시작하세요.
                                </p>
                            </div>
                            <Link
                                href="/recommendations"
                                className="bg-secondary text-white px-8 py-4 rounded-xl font-headline text-sm font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
                            >
                                후보 확인하기
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex-1 h-1 rounded-full bg-secondary"></div>
                            <div className="flex-1 h-1 rounded-full bg-secondary"></div>
                            <div className="flex-1 h-1 rounded-full bg-surface-container-highest opacity-30"></div>
                            <div className="flex-1 h-1 rounded-full bg-surface-container-highest opacity-30"></div>
                            <span className="font-label-mono text-on-primary-container text-[10px]">
                                예약 프로세스 50% 진행 중
                            </span>
                        </div>
                    </div>
                </section>

                {/* Section 2: Performance Summary (Bento Grid) */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg mb-gutter-lg">
                    {/* Summary Profile */}
                    <div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant p-gutter-lg rounded-xl flex flex-col justify-between shadow-sm">
                        <div>
                            <h3 className="font-label-mono text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
                                GENERAL MANAGER STATS
                            </h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                                </div>
                                <div>
                                    <p className="font-headline text-base font-bold text-on-surface">김총무 성과 분석</p>
                                    <p className="font-body text-xs text-on-surface-variant">플래티넘 등급 매니저</p>
                                </div>
                            </div>
                        </div>
                        <Link
                            className="inline-flex items-center text-secondary font-body text-xs font-semibold hover:underline group"
                            href="/profile"
                        >
                            총무 성과 프로필 보기
                            <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
                                open_in_new
                            </span>
                        </Link>
                    </div>

                    {/* Key Metrics */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
                        <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl text-center shadow-sm">
                            <p className="font-body text-xs text-on-surface-variant mb-1">누적 예약 성사</p>
                            <p className="font-headline text-3xl font-bold text-primary">
                                12<span className="text-sm ml-1 font-body">건</span>
                            </p>
                            <div className="mt-2 text-success-green flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span className="font-label-mono text-[10px]">전월 대비 +2</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl text-center border-l-4 border-l-secondary shadow-sm">
                            <p className="font-body text-xs text-on-surface-variant mb-1">평균 참석률</p>
                            <p className="font-headline text-3xl font-bold text-secondary">
                                92<span className="text-sm ml-1 font-body">%</span>
                            </p>
                            <div className="mt-2 text-on-surface-variant flex items-center justify-center gap-1">
                                <span className="font-label-mono text-[10px]">상위 5% 관리자</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl text-center shadow-sm">
                            <p className="font-body text-xs text-on-surface-variant mb-1">노쇼 발생 건수</p>
                            <p className="font-headline text-3xl font-bold text-error-red">
                                0<span className="text-sm ml-1 font-body">건</span>
                            </p>
                            <div className="mt-2 text-success-green flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                <span className="font-label-mono text-[10px]">클린 신뢰도 유지</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Group Management List */}
                <section>
                    <div className="flex items-center justify-between mb-gutter-md">
                        <h3 className="font-headline text-headline-md font-bold text-on-surface flex items-center gap-2">
                            관리 모임 목록
                            <span className="bg-surface-container-high px-2 py-0.5 rounded text-xs font-label-mono">
                                3
                            </span>
                        </h3>
                        <Link
                            href="/group/settings"
                            className="text-on-surface-variant font-body text-xs flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            전체보기 <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
                        {/* Group Card 1 */}
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all border border-outline-variant border-l-4 border-l-primary">
                            <div className="p-gutter-md">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="font-headline text-base font-bold text-primary truncate">
                                        고양시 소상공인연합회
                                    </h4>
                                    <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-container font-label-mono rounded text-[10px] font-bold">
                                        D-14
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            event
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                다음 일정
                                            </p>
                                            <p className="font-body text-xs text-on-surface font-semibold mt-0.5">
                                                11월 24일 (금) 19:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            location_on
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                장소
                                            </p>
                                            <p className="font-body text-xs text-on-surface font-semibold mt-0.5">
                                                후보지 선정 중...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto p-gutter-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full border border-white bg-slate-200"></div>
                                    <div className="w-6 h-6 rounded-full border border-white bg-slate-300"></div>
                                    <div className="w-6 h-6 rounded-full border border-white bg-slate-400"></div>
                                    <div className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold">
                                        +24
                                    </div>
                                </div>
                                <Link href="/group/settings" className="text-secondary font-body text-xs font-semibold">
                                    관리하기
                                </Link>
                            </div>
                        </div>

                        {/* Group Card 2 */}
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all border border-outline-variant">
                            <div className="p-gutter-md">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="font-headline text-base font-bold text-on-surface truncate">
                                        88동창회
                                    </h4>
                                    <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant font-label-mono rounded text-[10px]">
                                        D-45
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            event
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                다음 일정
                                            </p>
                                            <p className="font-body text-xs text-on-surface font-semibold mt-0.5">
                                                12월 25일 (월) 18:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            payments
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                회비 정산
                                            </p>
                                            <p className="font-body text-xs text-success-green font-semibold mt-0.5">
                                                정산 완료 (100%)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto p-gutter-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
                                <span className="font-body text-xs text-on-surface-variant">참석 예정 18명</span>
                                <Link href="/group/settings" className="text-secondary font-body text-xs font-semibold">
                                    상세보기
                                </Link>
                            </div>
                        </div>

                        {/* Group Card 3 */}
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all border border-outline-variant">
                            <div className="p-gutter-md">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="font-headline text-base font-bold text-on-surface truncate">
                                        일산 조기축구회
                                    </h4>
                                    <span className="px-2 py-1 bg-error-container text-on-error-container font-label-mono rounded text-[10px]">
                                        D-2
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            event
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                다음 일정
                                            </p>
                                            <p className="font-body text-xs text-on-surface font-semibold mt-0.5">
                                                내일 모레 오전 07:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                                            restaurant
                                        </span>
                                        <div>
                                            <p className="font-label-mono text-[10px] text-on-surface-variant leading-none">
                                                예약 장소
                                            </p>
                                            <p className="font-body text-xs text-on-surface font-semibold mt-0.5">
                                                일산 갈비천국
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto p-gutter-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
                                <span className="font-body text-xs text-on-surface-variant">예약 확인됨</span>
                                <Link href="/reservations/confirm" className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                                    예약 관리
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* BottomNavBar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe px-4 bg-surface-container-lowest border-t border-outline-variant shadow-lg h-20">
                <Link className="flex flex-col items-center justify-center text-secondary font-bold" href="/hub">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-body text-[11px]">홈</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary" href="/reservations/confirm">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-body text-[11px]">예약</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary" href="/recommendations">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="font-body text-[11px]">탐색</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary" href="/attendance">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="font-body text-[11px]">참석자</span>
                </Link>
            </nav>
        </div>
    );
}
