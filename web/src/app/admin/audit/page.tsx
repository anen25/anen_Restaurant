"use client";

import Link from "next/link";

export default function AdminAuditPage() {
    const pendingApprovalItems = [
        {
            id: "audit-1",
            type: "총무 가입 (폴백)",
            name: "파주 교하 중소기업 협의회",
            applicant: "김태호 총무",
            headcount: "15~20명",
            region: "파주시 교하동",
            connectorStatus: "연결자 미배정 (운영자 폴백)",
            date: "2026-08-09",
        },
        {
            id: "audit-2",
            type: "식당 입점",
            name: "마두 참숯 갈비",
            applicant: "박영진 사장",
            headcount: "수용인원 30명",
            region: "고양시 마두동",
            connectorStatus: "연결자 추천 (롯데칠성 이영훈)",
            date: "2026-08-08",
        },
    ];

    const anomalyCases = [
        {
            id: "anom-1",
            target: "일산 서구 풍동 OO식당",
            reason: "2회 연속 자동결제 실패 (카드 유예기간 D-3)",
            severity: "경고",
            action: "유예기간 후 자동 노출 제외 예정",
        },
        {
            id: "anom-2",
            target: "OO동문회 B팀",
            reason: "당일 무단 노쇼 1건 접수",
            severity: "주의",
            action: "신뢰 점수 -20점 차감 반영",
        },
    ];

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-6xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/admin" className="text-xs text-secondary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 운영자 대시보드
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">gavel</span>
                        심사 대기함 & 이상징후 케이스 검토
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        PRD 12.4절 기준 — 연결자 미배정 가입건 승인/거절 및 신뢰점수/결제 이상징후 처리 센터
                    </p>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pending Approvals */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-600">pending_actions</span>
                            폴백 심사 대기함 ({pendingApprovalItems.length})
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {pendingApprovalItems.map((item) => (
                            <div key={item.id} className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2.5 py-0.5 rounded-full">
                                        {item.type}
                                    </span>
                                    <span className="text-xs text-on-surface-variant font-mono">{item.date}</span>
                                </div>

                                <h3 className="text-base font-bold text-on-surface mb-1">{item.name}</h3>
                                <p className="text-xs text-on-surface-variant mb-3">
                                    신청자: {item.applicant} · {item.headcount} · {item.region}
                                </p>

                                <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant text-xs text-on-surface-variant mb-4">
                                    📌 {item.connectorStatus}
                                </div>

                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => alert(`${item.name} 신청 건이 거절 처리되었습니다.`)}
                                        className="px-3 py-1.5 border border-outline-variant rounded-xl text-xs font-semibold hover:bg-surface-container transition-colors"
                                    >
                                        거절 (사유 입력)
                                    </button>
                                    <button
                                        onClick={() => alert(`${item.name} 신청 건이 승인 처리되었습니다.`)}
                                        className="bg-primary text-on-primary hover:bg-primary/90 text-xs font-bold px-4 py-1.5 rounded-xl transition-colors"
                                    >
                                        최종 승인
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Anomaly Detection Cases */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-red-600">warning</span>
                            이상징후 모니터링 ({anomalyCases.length})
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {anomalyCases.map((anom) => (
                            <div key={anom.id} className="bg-surface-container-lowest border border-red-200/80 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                                        {anom.severity} 발생
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-on-surface mb-1">{anom.target}</h3>
                                <p className="text-xs text-red-700 font-semibold mb-3">사유: {anom.reason}</p>

                                <div className="bg-surface-container-low p-2.5 rounded-xl border border-outline-variant text-xs text-on-surface-variant mb-4">
                                    ⚡ 시스템 조치: {anom.action}
                                </div>

                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => alert("로그 조회가 실행되었습니다.")}
                                        className="px-3 py-1.5 border border-outline-variant rounded-xl text-xs font-semibold hover:bg-surface-container transition-colors"
                                    >
                                        상세 로그 확인
                                    </button>
                                    <button
                                        onClick={() => alert("운영자 특별 조치가 반영되었습니다.")}
                                        className="bg-red-700 text-white hover:bg-red-800 text-xs font-bold px-4 py-1.5 rounded-xl transition-colors"
                                    >
                                        조치 결정 적용
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
