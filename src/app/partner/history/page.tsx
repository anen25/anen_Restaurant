"use client";

import Link from "next/link";

export default function PartnerHistoryPage() {
    const records = [
        {
            id: "bil-101",
            orgName: "삼우 고양 경영자 연합회",
            date: "2026-08-05",
            headcount: 12,
            amount: "12,000원",
            status: "결제 완료",
            receiptUrl: "#",
        },
        {
            id: "bil-102",
            orgName: "고양시 로타리클럽 3지역",
            date: "2026-07-22",
            headcount: 10,
            amount: "10,000원",
            status: "결제 완료",
            receiptUrl: "#",
        },
        {
            id: "bil-103",
            orgName: "일산 백석 소상공인 포럼",
            date: "2026-07-10",
            headcount: 15,
            amount: "15,000원",
            status: "결제 완료",
            receiptUrl: "#",
        },
    ];

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-5xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/partner" className="text-xs text-secondary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 파트너 대시보드
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">receipt_long</span>
                        유지관리비 결제 & 매출전표 이력
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        PRD 7.4절 기준 — 신용카드 매출전표는 부가가치세법상 적격 증빙으로 즉시 활용 가능합니다.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/partner/billing"
                        className="bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">credit_card</span>
                        결제수단 관리
                    </Link>
                </div>
            </div>

            {/* Monthly Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">이번 달 누적 결제액</span>
                    <span className="text-2xl font-bold text-on-surface">12,000원</span>
                    <span className="text-xs text-emerald-600 font-medium block mt-1">1건 (12명 확정)</span>
                </div>
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">올해 누적 유치 매출</span>
                    <span className="text-2xl font-bold text-on-surface">37,000원</span>
                    <span className="text-xs text-on-surface-variant block mt-1">총 37명 단체 고객 수용</span>
                </div>
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                    <span className="text-xs font-semibold text-on-surface-variant block mb-1">증빙 발급 상태</span>
                    <span className="text-2xl font-bold text-emerald-600">100% 자동완결</span>
                    <span className="text-xs text-on-surface-variant block mt-1">토스페이먼츠 카드 전표</span>
                </div>
            </div>

            {/* Records Table */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 md:p-6 border-b border-outline-variant flex items-center justify-between">
                    <h2 className="text-base font-bold text-on-surface">결제 내역 및 매출전표 조회</h2>
                    <span className="text-xs text-on-surface-variant">최근 90일 이력</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant font-semibold">
                                <th className="p-3.5 pl-6">결제일 (T+1)</th>
                                <th className="p-3.5">모임명</th>
                                <th className="p-3.5">확정 인원</th>
                                <th className="p-3.5">결제 금액</th>
                                <th className="p-3.5">상태</th>
                                <th className="p-3.5 pr-6 text-right">매출전표</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 text-on-surface">
                            {records.map((rec) => (
                                <tr key={rec.id} className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="p-3.5 pl-6 font-mono font-medium">{rec.date}</td>
                                    <td className="p-3.5 font-bold">{rec.orgName}</td>
                                    <td className="p-3.5 font-medium">{rec.headcount}명</td>
                                    <td className="p-3.5 font-bold text-primary">{rec.amount}</td>
                                    <td className="p-3.5">
                                        <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                                            {rec.status}
                                        </span>
                                    </td>
                                    <td className="p-3.5 pr-6 text-right">
                                        <button
                                            onClick={() => alert(`[매출전표 영수증]\n건명: ${rec.orgName} 유치비\n금액: ${rec.amount}\n발행처: 토스페이먼츠`)}
                                            className="text-xs text-secondary font-bold hover:underline flex items-center justify-end gap-1 ml-auto"
                                        >
                                            <span className="material-symbols-outlined text-sm">print</span>
                                            전표 보기
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
