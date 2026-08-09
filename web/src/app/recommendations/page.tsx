"use client";

import Link from "next/link";
import Image from "next/image";

export default function RecommendationsPage() {
    return (
        <div className="bg-surface text-on-surface min-h-screen pb-24">
            {/* Top Navigation Shell with Desktop GNB */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
                <div className="flex items-center gap-2">
                    <Link href="/hub" className="flex items-center gap-2 cursor-pointer">
                        <span className="material-symbols-outlined text-primary">
                            keyboard_arrow_down
                        </span>
                        <h1 className="font-headline text-headline-md font-bold text-on-surface">
                            고양시 소상공인연합회
                        </h1>
                    </Link>
                </div>

                {/* Desktop Global Navigation Bar */}
                <nav className="hidden md:flex items-center gap-8 font-headline text-sm font-semibold">
                    <Link href="/hub" className="text-on-surface-variant hover:text-primary transition-colors">
                        허브 홈
                    </Link>
                    <Link href="/recommendations" className="text-secondary border-b-2 border-secondary pb-1">
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
                    <span className="material-symbols-outlined text-primary cursor-pointer">
                        notifications
                    </span>
                </div>
            </header>

            <main className="pt-24 pb-24 px-4 max-w-[1200px] mx-auto min-h-screen">
                {/* Context & Filters Section */}
                <section className="mb-gutter-lg">
                    <div className="flex flex-col gap-2">
                        <span className="font-label-mono text-xs text-secondary tracking-widest uppercase">
                            AUGUST DINING RECOMMENDATIONS
                        </span>
                        <h2 className="font-headline text-2xl font-bold text-on-surface leading-tight">
                            8월 정기회식 추천 리스트
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant">
                                <span className="material-symbols-outlined text-[18px]">group</span>
                                <span className="font-body text-xs">12명</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant">
                                <span className="material-symbols-outlined text-[18px]">location_on</span>
                                <span className="font-body text-xs">백석역 인근</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant text-secondary">
                                <span className="material-symbols-outlined text-[18px]">local_parking</span>
                                <span className="font-body text-xs font-semibold">주차 필수</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Restaurant Recommendation List */}
                <div className="space-y-4">
                    {/* Card 1: 평창갈비 */}
                    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-[320px] h-48 md:h-auto overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
                                    alt="평창갈비"
                                    width={320}
                                    height={200}
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="px-2.5 py-1 rounded bg-premium-gold text-white font-body text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-[14px]">stars</span>
                                        회원사 운영
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-gutter-md flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-headline text-lg font-bold">평창갈비</h3>
                                        <span className="text-secondary font-label-mono text-xs">D-7</span>
                                    </div>
                                    {/* Match Reasons */}
                                    <div className="bg-surface-container-low p-3 rounded-lg mb-4">
                                        <p className="font-label-mono text-[10px] text-on-surface-variant mb-2">
                                            MATCH REASON (아는 식당)
                                        </p>
                                        <ul className="space-y-1.5">
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>최근 3개월 미방문으로 새로운 분위기</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>최대 20인 수용 가능한 대형 프라이빗 룸 보유</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>전용 주차장 20대 이상 주차 가능</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href="/reservations/confirm"
                                        className="flex-1 bg-primary text-white font-body text-xs h-12 rounded-lg transition-all font-semibold flex items-center justify-center"
                                    >
                                        선택하기
                                    </Link>
                                    <button className="px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
                                        <span className="material-symbols-outlined text-on-surface-variant">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Card 2: 일산횟집 */}
                    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-[320px] h-48 md:h-auto overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop"
                                    alt="일산횟집"
                                    width={320}
                                    height={200}
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-1 rounded bg-secondary-container/20 text-secondary font-body text-[11px] font-semibold">
                                        우대 예약
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-gutter-md flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-headline text-lg font-bold">일산횟집</h3>
                                            <div className="flex items-center text-premium-gold">
                                                <span className="material-symbols-outlined text-[16px]">star</span>
                                                <span className="font-label-mono text-xs font-bold ml-0.5">4.8</span>
                                            </div>
                                        </div>
                                        <span className="text-on-surface-variant font-label-mono text-[10px]">RECOMMENDED</span>
                                    </div>
                                    <div className="bg-surface-container-low p-3 rounded-lg mb-4">
                                        <p className="font-label-mono text-[10px] text-on-surface-variant mb-2">
                                            MATCH REASON (아는 식당)
                                        </p>
                                        <ul className="space-y-1.5">
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>1인당 예산 범위(5만원) 내 최적의 구성</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>연합회 연결자 우대 서비스 제공 (주류 서비스)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href="/reservations/confirm"
                                        className="flex-1 bg-primary text-white font-body text-xs h-12 rounded-lg transition-all font-semibold flex items-center justify-center"
                                    >
                                        선택하기
                                    </Link>
                                    <button className="px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
                                        <span className="material-symbols-outlined text-on-surface-variant">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Card 3: 진수성찬 */}
                    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-[320px] h-48 md:h-auto overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop"
                                    alt="진수성찬"
                                    width={320}
                                    height={200}
                                />
                            </div>
                            <div className="flex-1 p-gutter-md flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-headline text-lg font-bold">진수성찬</h3>
                                        <span className="text-on-surface-variant font-label-mono text-[10px]">HISTORY CLEAN</span>
                                    </div>
                                    <div className="bg-surface-container-low p-3 rounded-lg mb-4">
                                        <p className="font-label-mono text-[10px] text-on-surface-variant mb-2">
                                            MATCH REASON (아는 식당)
                                        </p>
                                        <ul className="space-y-1.5">
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>최근 방문 5곳 제외 필터 통과</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-xs">
                                                <span className="material-symbols-outlined text-success-green text-[18px]">
                                                    check_circle
                                                </span>
                                                <span>건물 내 지하 주차장 이용 용이</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href="/reservations/confirm"
                                        className="flex-1 bg-primary text-white font-body text-xs h-12 rounded-lg transition-all font-semibold flex items-center justify-center"
                                    >
                                        선택하기
                                    </Link>
                                    <button className="px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
                                        <span className="material-symbols-outlined text-on-surface-variant">favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Request More Button */}
                <div className="mt-8 mb-12">
                    <button className="w-full py-4 border-2 border-dashed border-outline text-on-surface-variant font-body text-sm rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-2 active:scale-95">
                        <span className="material-symbols-outlined">refresh</span>
                        다른 후보 요청하기
                    </button>
                </div>
            </main>

            {/* Bottom Navigation Bar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe px-4 bg-surface-container-lowest border-t border-outline-variant shadow-lg h-16">
                <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary" href="/hub">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-body text-[11px]">홈</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary" href="/reservations/confirm">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-body text-[11px]">예약</span>
                </Link>
                <Link className="flex flex-col items-center justify-center text-secondary font-bold" href="/recommendations">
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
