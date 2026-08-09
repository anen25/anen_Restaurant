"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AttendancePage() {
    const [remindedList, setRemindedList] = useState<Record<string, boolean>>({});

    const handleRemind = (id: string) => {
        setRemindedList((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setRemindedList((prev) => ({ ...prev, [id]: false }));
        }, 2000);
    };

    return (
        <div className="bg-background text-on-surface min-h-screen pb-32">
            {/* TopAppBar with Desktop GNB */}
            <header className="bg-surface-container-lowest w-full top-0 sticky z-50 border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 transition-colors duration-200">
                <div className="flex items-center gap-4">
                    <Link href="/hub" className="p-2 hover:bg-surface-container-low rounded-full transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                        <h1 className="font-headline text-headline-md font-bold text-primary">
                            참석자 명단 상세
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
                    <Link href="/attendance" className="text-secondary border-b-2 border-secondary pb-1">
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

                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant relative">
                        <Image
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                            alt="프로필 이미지"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-gutter-lg">
                {/* Summary Stats Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md mb-gutter-lg">
                    {/* Attending */}
                    <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl shadow-sm flex flex-col justify-between h-32">
                        <div className="flex items-center justify-between">
                            <span className="font-label-mono text-[11px] text-on-surface-variant">
                                참석 확정
                            </span>
                            <span className="material-symbols-outlined text-success-green">
                                check_circle
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="font-headline text-3xl font-bold">12</span>
                            <span className="font-body text-xs text-on-surface-variant">명</span>
                        </div>
                    </div>
                    {/* Not Attending */}
                    <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl shadow-sm flex flex-col justify-between h-32">
                        <div className="flex items-center justify-between">
                            <span className="font-label-mono text-[11px] text-on-surface-variant">
                                불참
                            </span>
                            <span className="material-symbols-outlined text-error-red">
                                cancel
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="font-headline text-3xl font-bold">3</span>
                            <span className="font-body text-xs text-on-surface-variant">명</span>
                        </div>
                    </div>
                    {/* No Response */}
                    <div className="bg-surface-container-lowest border border-outline-variant p-gutter-md rounded-xl shadow-sm flex flex-col justify-between h-32">
                        <div className="flex items-center justify-between">
                            <span className="font-label-mono text-[11px] text-on-surface-variant">
                                미응답
                            </span>
                            <span className="material-symbols-outlined text-outline">
                                help
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="font-headline text-3xl font-bold">5</span>
                            <span className="font-body text-xs text-on-surface-variant">명</span>
                        </div>
                    </div>
                </section>

                {/* Attendance List Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-gutter-md">
                    <div>
                        <h2 className="font-headline text-lg font-bold text-primary">상세 명단</h2>
                        <p className="font-body text-xs text-on-surface-variant mt-1">
                            총 20명의 멤버 중 15명이 응답했습니다.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest font-body text-xs hover:bg-surface-container-low transition-colors">
                            <span className="material-symbols-outlined text-sm">filter_list</span>
                            필터링
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest font-body text-xs hover:bg-surface-container-low transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span>
                            내보내기
                        </button>
                    </div>
                </div>

                {/* Attendance Table/List */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-surface-container-low border-b border-outline-variant">
                                <tr>
                                    <th className="px-6 py-4 font-label-mono text-[11px] text-on-surface-variant">
                                        멤버 정보
                                    </th>
                                    <th className="px-6 py-4 font-label-mono text-[11px] text-on-surface-variant">
                                        상태
                                    </th>
                                    <th className="px-6 py-4 font-label-mono text-[11px] text-on-surface-variant">
                                        응답 일시
                                    </th>
                                    <th className="px-6 py-4 font-label-mono text-[11px] text-on-surface-variant text-right">
                                        관리
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant">
                                {/* Attending Row */}
                                <tr className="hover:bg-surface-container-lowest transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center font-bold text-secondary">
                                                김
                                            </div>
                                            <div>
                                                <div className="font-body text-xs font-bold">김철수 상무</div>
                                                <div className="font-body text-[11px] text-on-surface-variant">영업본부</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full font-body text-[11px] font-semibold bg-emerald-50 text-success-green">
                                            참석 확정
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-body text-xs text-on-surface-variant">
                                        2023.10.24 14:30
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* Declined Row */}
                                <tr className="hover:bg-surface-container-lowest transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">
                                                이
                                            </div>
                                            <div>
                                                <div className="font-body text-xs font-bold">이영희 팀장</div>
                                                <div className="font-body text-[11px] text-on-surface-variant">마케팅부</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full font-body text-[11px] font-semibold bg-rose-50 text-error-red">
                                            불참
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-body text-xs text-on-surface-variant">
                                        2023.10.24 16:45
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* Pending Row 1 */}
                                <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-outline-variant flex items-center justify-center font-bold text-on-surface-variant">
                                                박
                                            </div>
                                            <div>
                                                <div className="font-body text-xs font-bold">박민수 과장</div>
                                                <div className="font-body text-[11px] text-on-surface-variant">개발팀</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full font-body text-[11px] font-semibold bg-slate-100 text-slate-600">
                                            미응답
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-body text-xs text-on-surface-variant italic">
                                        -
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => handleRemind("p1")}
                                                className={`px-3 py-1.5 border font-body text-[11px] font-semibold rounded-md transition-colors flex items-center gap-1 ${remindedList["p1"]
                                                    ? "border-success-green text-success-green"
                                                    : "border-secondary text-secondary hover:bg-secondary/5"
                                                    }`}
                                            >
                                                <span className="material-symbols-outlined text-[14px]">
                                                    {remindedList["p1"] ? "check" : "notifications"}
                                                </span>
                                                {remindedList["p1"] ? "전송 완료" : "리마인드"}
                                            </button>
                                            <button className="px-3 py-1.5 border border-outline text-on-surface-variant font-body text-[11px] font-semibold rounded-md hover:bg-surface-container-high transition-colors flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">call</span>
                                                전화하기
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Justification Notice */}
                <div className="mt-gutter-lg p-gutter-md bg-member-tag-bg border border-member-tag-bg rounded-xl flex items-start gap-4">
                    <span className="material-symbols-outlined text-member-tag-text mt-1">info</span>
                    <div>
                        <h4 className="font-body text-xs font-bold text-member-tag-text">
                            인원 확정 안내
                        </h4>
                        <p className="font-body text-[11px] text-member-tag-text mt-1 leading-relaxed">
                            예약 부도(No-Show) 방지 및 객관적인 비용 정산을 위해 실제 참석 인원을 정확히 입력해주세요. 확정된 인원 정보는 정산 명분의 기초 데이터로 활용됩니다.
                        </p>
                    </div>
                </div>
            </main>

            {/* Bottom Actions Container (Sticky Mobile & Desktop) */}
            <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant p-4 z-40 shadow-lg">
                <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                    <button
                        onClick={() => alert("최종 인원이 확정되었습니다.")}
                        className="w-full h-14 bg-primary text-white font-headline text-base font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98]"
                    >
                        최종 인원 확정하기
                        <span className="material-symbols-outlined">how_to_reg</span>
                    </button>
                </div>
            </div>

            {/* Bottom Navigation Bar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm h-16 flex justify-around items-center px-gutter-md">
                <Link href="/hub" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-label-mono text-[11px]">홈</span>
                </Link>
                <Link href="/reservations/confirm" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-label-mono text-[11px]">예약</span>
                </Link>
                <Link href="/recommendations" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="font-label-mono text-[11px]">탐색</span>
                </Link>
                <Link href="/attendance" className="flex flex-col items-center justify-center text-secondary font-bold">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="font-label-mono text-[11px]">참석자</span>
                </Link>
            </nav>
        </div>
    );
}
