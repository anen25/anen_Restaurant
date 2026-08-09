"use client";

import Link from "next/link";

export default function PresidentPage() {
    const monthlyReports = [
        {
            month: "2026년 7월월간 리포트",
            date: "2026-08-01 발송",
            summary: "정기모임 2회 진행 (참석률 94%), 장소: 백석 한우명가, 회원사 매장 이용 1회",
            downloadUrl: "#",
        },
        {
            month: "2026년 2분기 종합 리포트",
            date: "2026-07-01 발송",
            summary: "분기 총 지출 3,420,000원 (회비 집행률 98%), 노쇼 0건 달성",
            downloadUrl: "#",
        },
    ];

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-5xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">visibility</span> 회장 (옵저버 전용 뷰)
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                        모임 운영 현황 & 월간 리포트 수신함
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        PRD 5.1절 기준 — 실무 개입 없이 모임의 투명성과 이력을 한눈에 확인하는 조회 전용 홈입니다.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/hub" className="text-xs text-secondary font-semibold hover:underline">
                        모임 허브로 이동 →
                    </Link>
                </div>
            </div>

            {/* Read-Only Status Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">모임 관리 상태</span>
                    <span className="text-xl font-bold text-emerald-600 flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">verified</span> 정상 운영 (총무·재무 2인)
                    </span>
                    <span className="text-xs text-on-surface-variant block mt-1">총무: 김경민 / 재무: 이민재</span>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">평균 참석률</span>
                    <span className="text-2xl font-bold text-on-surface">94.2%</span>
                    <span className="text-xs text-secondary font-medium block mt-1">최근 6개월 연속 노쇼 0건</span>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">올해 회원사 매장 이용</span>
                    <span className="text-2xl font-bold text-primary">4회</span>
                    <span className="text-xs text-on-surface-variant block mt-1">골목상권 상호소비 실적</span>
                </div>
            </div>

            {/* Monthly Reports Received Inbox */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-4">
                    <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">mark_as_unread</span>
                        자동 발송 리포트 수신함
                    </h2>
                    <span className="text-xs text-on-surface-variant">매월 1일 자동 집계 발송</span>
                </div>

                <div className="space-y-4">
                    {monthlyReports.map((report, idx) => (
                        <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-sm font-bold text-on-surface">{report.month}</h3>
                                    <span className="text-xs text-on-surface-variant font-mono">{report.date}</span>
                                </div>
                                <p className="text-xs text-on-surface-variant">{report.summary}</p>
                            </div>
                            <button
                                onClick={() => alert(`${report.month} 상세 PDF 다운로드가 실행되었습니다.`)}
                                className="bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors self-start sm:self-auto"
                            >
                                <span className="material-symbols-outlined text-sm">download</span>
                                리포트 다운로드
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
