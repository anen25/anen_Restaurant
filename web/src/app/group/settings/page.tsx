"use client";

import { useState } from "react";
import Link from "next/link";

export default function GroupSettingsPage() {
    const [minCount, setMinCount] = useState(4);
    const [maxCount, setMaxCount] = useState(12);
    const [autoRepeat, setAutoRepeat] = useState(true);

    return (
        <div className="bg-background font-body text-on-surface min-h-screen pb-24">
            {/* Top AppBar with Desktop GNB */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
                <div className="flex items-center gap-2">
                    <Link
                        href="/hub"
                        className="p-2 hover:bg-surface-container-low rounded-full transition-all active:scale-95 flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        <h1 className="font-headline text-headline-md font-bold text-on-surface">
                            기획팀 정기 회식
                        </h1>
                    </Link>
                </div>

                {/* Desktop Global Navigation Bar */}
                <nav className="hidden md:flex items-center gap-8 font-headline text-sm font-semibold">
                    <Link href="/hub" className="text-on-surface-variant hover:text-primary transition-colors">
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
                    <Link href="/group/settings" className="text-secondary border-b-2 border-secondary pb-1">
                        모임 설정
                    </Link>
                    <Link href="/finance" className="text-on-surface-variant hover:text-primary transition-colors">
                        재무보고
                    </Link>
                    <Link href="/partner" className="text-on-surface-variant hover:text-primary transition-colors">
                        파트너 안내
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-surface-container-low rounded-full transition-all active:scale-95">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </div>
            </header>

            <main className="pt-24 px-margin-mobile max-w-screen-md mx-auto space-y-gutter-lg">
                {/* Header Info */}
                <section className="py-4">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary text-on-primary font-label-mono text-[10px] px-2 py-0.5 rounded font-bold">
                            D-14
                        </span>
                        <span className="text-on-surface-variant font-body text-xs">
                            자동 최적화 모드 활성화됨
                        </span>
                    </div>
                    <h2 className="font-headline text-2xl font-bold tracking-tight">모임 설정 관리</h2>
                    <p className="text-on-surface-variant mt-2 font-body text-xs">
                        GM의 의사결정을 지원하기 위한 근거 데이터를 설정합니다.
                    </p>
                </section>

                {/* Bento Grid Configuration Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 인원수 설정 Card */}
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl space-y-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">group</span>
                                <h3 className="font-headline text-base font-bold">참가 인원</h3>
                            </div>
                            <span className="font-label-mono text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded">
                                최종 근거
                            </span>
                        </div>
                        <div className="space-y-4 pt-2">
                            <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                                <span className="text-on-surface-variant font-body text-xs font-semibold">
                                    최소 인원
                                </span>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setMinCount(Math.max(1, minCount - 1))}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container font-bold"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold text-base min-w-[20px] text-center">
                                        {minCount}
                                    </span>
                                    <button
                                        onClick={() => setMinCount(minCount + 1)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                                <span className="text-on-surface-variant font-body text-xs font-semibold">
                                    최대 인원
                                </span>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setMaxCount(Math.max(minCount, maxCount - 1))}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container font-bold"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold text-base min-w-[20px] text-center">
                                        {maxCount}
                                    </span>
                                    <button
                                        onClick={() => setMaxCount(maxCount + 1)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant hover:bg-surface-container font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 예산 범위 Card */}
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl space-y-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">payments</span>
                                <h3 className="font-headline text-base font-bold">선호 예산 (인당)</h3>
                            </div>
                        </div>
                        <div className="space-y-6 pt-4">
                            <div className="relative h-2 bg-surface-container-high rounded-full px-2">
                                <div className="absolute left-1/4 right-1/4 h-2 bg-secondary rounded-full"></div>
                                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-on-surface rounded-full border-2 border-white shadow-md cursor-pointer"></div>
                                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-on-surface rounded-full border-2 border-white shadow-md cursor-pointer"></div>
                            </div>
                            <div className="flex justify-between font-label-mono text-on-surface-variant">
                                <div className="text-left">
                                    <p className="text-[10px] uppercase opacity-60">Minimum</p>
                                    <p className="text-secondary font-bold text-xs">35,000원</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase opacity-60">Maximum</p>
                                    <p className="text-secondary font-bold text-xs">80,000원</p>
                                </div>
                            </div>
                            <div className="p-3 bg-surface-container rounded-lg flex items-start gap-3">
                                <span className="material-symbols-outlined text-[18px] mt-0.5 text-on-tertiary-container">
                                    info
                                </span>
                                <p className="text-body text-[11px] text-on-surface-variant leading-tight">
                                    직전 3회 모임의 평균 지출액(52,000원)을 기반으로 권장 범위가 설정되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 필수 편의시설 Card */}
                    <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl space-y-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">checklist</span>
                                <h3 className="font-headline text-base font-bold">
                                    필수 요구 사항 및 편의시설
                                </h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-secondary bg-secondary-container/20 text-secondary transition-all">
                                <span className="material-symbols-outlined mb-2">local_parking</span>
                                <span className="font-body text-xs font-bold">주차 가능</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-outline-variant hover:border-secondary hover:bg-surface-container transition-all">
                                <span className="material-symbols-outlined mb-2">meeting_room</span>
                                <span className="font-body text-xs">단독 룸</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-secondary bg-secondary-container/20 text-secondary transition-all">
                                <span className="material-symbols-outlined mb-2">wine_bar</span>
                                <span className="font-body text-xs font-bold">콜키지 가능</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-outline-variant hover:border-secondary hover:bg-surface-container transition-all">
                                <span className="material-symbols-outlined mb-2">accessible</span>
                                <span className="font-body text-xs">장애인 편의</span>
                            </button>
                        </div>
                    </div>

                    {/* 반복 일정 관리 Card */}
                    <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant p-0 overflow-hidden rounded-xl shadow-sm">
                        <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-container-low/50">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">update</span>
                                <h3 className="font-headline text-base font-bold">
                                    반복 일정 설정 (기획서 4.1 반영)
                                </h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-body text-xs text-on-surface-variant">자동 반복</span>
                                <div
                                    onClick={() => setAutoRepeat(!autoRepeat)}
                                    className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${autoRepeat ? "bg-secondary" : "bg-outline-variant"
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${autoRepeat ? "right-1" : "left-1"
                                            }`}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[240px] space-y-2">
                                    <label className="text-body text-xs font-bold text-on-surface">
                                        반복 주기
                                    </label>
                                    <div className="relative">
                                        <select className="w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 appearance-none focus:ring-2 focus:ring-secondary focus:outline-none font-body text-xs">
                                            <option>매월 둘째 주 화요일</option>
                                            <option>매주 금요일</option>
                                            <option>매월 마지막 주 목요일</option>
                                            <option>직접 설정</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full sm:w-48 space-y-2">
                                    <label className="text-body text-xs font-bold text-on-surface">
                                        시작 시간
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            defaultValue="18:00"
                                            className="w-full h-12 bg-surface border border-outline-variant rounded-lg px-4 focus:ring-2 focus:ring-secondary focus:outline-none font-body text-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GM Authority Handoff Action */}
                    <div className="md:col-span-2 py-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => alert("설정이 저장되었습니다.")}
                                className="flex-1 bg-primary text-white h-14 rounded-xl font-bold text-base hover:shadow-lg transition-all active:scale-[0.98]"
                            >
                                설정 저장 및 아는 식당 생성
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation Bar Mobile */}
            <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant px-4 pt-2 pb-safe flex justify-around items-center h-20 shadow-lg md:hidden">
                <Link href="/hub" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="text-body text-[11px]">홈</span>
                </Link>
                <Link href="/reservations/confirm" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="text-body text-[11px]">예약</span>
                </Link>
                <Link href="/recommendations" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="text-body text-[11px]">탐색</span>
                </Link>
                <Link href="/attendance" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="text-body text-[11px]">참석자</span>
                </Link>
            </nav>
        </div>
    );
}
