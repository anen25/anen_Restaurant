"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function FinancePage() {
    const [activeTab, setActiveTab] = useState<"report" | "handover">("report");
    const [showModal, setShowModal] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("HX-928-SKL").then(() => {
            alert("인계 코드가 클립보드에 복사되었습니다.");
        });
    };

    const financeRecords = [
        {
            id: "fin-1",
            date: "2026-08-05",
            orgName: "삼우 고양 경영자 연합회",
            restaurant: "백석 한우명가",
            headcount: "12명",
            totalBudget: "₩720,000",
            feePerPerson: "₩0 (식당 부담)",
            status: "T+1 리포트 발행 완료",
        },
        {
            id: "fin-2",
            date: "2026-07-20",
            orgName: "삼우 고양 경영자 연합회",
            restaurant: "경복궁 일산점",
            headcount: "10명",
            totalBudget: "₩650,000",
            feePerPerson: "₩0 (식당 부담)",
            status: "정산 완료",
        },
        {
            id: "fin-3",
            date: "2026-07-02",
            orgName: "삼우 고양 경영자 연합회",
            restaurant: "스시 잇쇼",
            headcount: "8명",
            totalBudget: "₩560,000",
            feePerPerson: "₩0 (식당 부담)",
            status: "정산 완료",
        },
    ];

    return (
        <div className="bg-surface-container-lowest text-on-surface min-h-screen pb-24">
            <Navigation />

            <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">payments</span> 재무 관리 & 리포트
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                            재무보고서 & 권한 인계 관리
                        </h1>
                        <p className="text-sm text-on-surface-variant mt-1">
                            PRD 4.4절 기준 — 예약일 익일(T+1) 자동 생성되는 회비/정산 리포트 및 총무/재무 승계 관리센터
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex bg-surface-container-low border border-outline-variant p-1 rounded-xl self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab("report")}
                            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === "report"
                                ? "bg-secondary text-on-secondary shadow-sm"
                                : "text-on-surface-variant hover:text-on-surface"
                                }`}
                        >
                            <span className="material-symbols-outlined text-base">summarize</span>
                            재무보고서 (T+1)
                        </button>
                        <button
                            onClick={() => setActiveTab("handover")}
                            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === "handover"
                                ? "bg-secondary text-on-secondary shadow-sm"
                                : "text-on-surface-variant hover:text-on-surface"
                                }`}
                        >
                            <span className="material-symbols-outlined text-base">key</span>
                            총무 인계 관리
                        </button>
                    </div>
                </div>

                {/* TAB 1: Financial Report */}
                {activeTab === "report" && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        {/* Summary Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                                <span className="text-xs font-semibold text-on-surface-variant block mb-1">이번 달 회비 집행액</span>
                                <span className="text-2xl font-bold text-on-surface">720,000원</span>
                                <span className="text-xs text-emerald-600 font-medium block mt-1">12명 참석 완료 (T+1 리포트)</span>
                            </div>
                            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                                <span className="text-xs font-semibold text-on-surface-variant block mb-1">총무 결제 비용</span>
                                <span className="text-2xl font-bold text-emerald-600">0원 (전액 무료)</span>
                                <span className="text-xs text-on-surface-variant block mt-1">유지관리비는 식당에서 정액 부담</span>
                            </div>
                            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5">
                                <span className="text-xs font-semibold text-on-surface-variant block mb-1">올해 누적 지출 예산</span>
                                <span className="text-2xl font-bold text-on-surface">1,930,000원</span>
                                <span className="text-xs text-on-surface-variant block mt-1">총 3회 정기모임 집행 완료</span>
                            </div>
                        </div>

                        {/* Financial Reports Table */}
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
                            <div className="p-4 md:p-6 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h2 className="text-base font-bold text-on-surface">모임별 재무보고서 (T+1 자동생성)</h2>
                                    <p className="text-xs text-on-surface-variant">모임원이 확인할 수 있는 투명한 회비 결산 리포트입니다.</p>
                                </div>
                                <button
                                    onClick={() => alert("2026년 3분기 종합 재무보고서 엑셀 다운로드가 시작되었습니다.")}
                                    className="bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold px-3 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors self-start sm:self-auto"
                                >
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    엑셀 다운로드
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant font-semibold">
                                            <th className="p-3.5 pl-6">일시</th>
                                            <th className="p-3.5">모임명</th>
                                            <th className="p-3.5">이용 식당</th>
                                            <th className="p-3.5">참석 인원</th>
                                            <th className="p-3.5">총 결제예산</th>
                                            <th className="p-3.5">플랫폼 수수료</th>
                                            <th className="p-3.5">상태</th>
                                            <th className="p-3.5 pr-6 text-right">리포트</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/60 text-on-surface">
                                        {financeRecords.map((rec) => (
                                            <tr key={rec.id} className="hover:bg-surface-container-low/50 transition-colors">
                                                <td className="p-3.5 pl-6 font-mono font-medium">{rec.date}</td>
                                                <td className="p-3.5 font-bold">{rec.orgName}</td>
                                                <td className="p-3.5 font-medium">{rec.restaurant}</td>
                                                <td className="p-3.5 font-medium">{rec.headcount}</td>
                                                <td className="p-3.5 font-bold text-primary">{rec.totalBudget}</td>
                                                <td className="p-3.5 text-emerald-600 font-bold">{rec.feePerPerson}</td>
                                                <td className="p-3.5">
                                                    <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                                                        {rec.status}
                                                    </span>
                                                </td>
                                                <td className="p-3.5 pr-6 text-right">
                                                    <button
                                                        onClick={() => alert(`[T+1 재무보고서]\n일시: ${rec.date}\n장소: ${rec.restaurant}\n총액: ${rec.totalBudget}\n참석인원: ${rec.headcount}`)}
                                                        className="text-xs text-secondary font-bold hover:underline flex items-center justify-end gap-1 ml-auto"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">visibility</span>
                                                        열람
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: Handover Management */}
                {activeTab === "handover" && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
                            <span className="bg-secondary-container/20 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                                임기제 전환 프로세스 (PRD 6장)
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                                총무 권한을 후임자에게 안전하게 인계하세요
                            </h2>
                            <p className="text-xs md:text-sm text-on-surface-variant mb-6 max-w-2xl leading-relaxed">
                                모임 계정의 방문 이력과 신뢰점수는 모임에 그대로 유지됩니다. 인계 코드를 발급받아 후임자에게 공유하면 2주간 동시 과도기 후 승계됩니다.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                                >
                                    <span className="material-symbols-outlined text-base">vpn_key</span>
                                    인계 코드 생성하기
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText("[아는 식당] 총무 인계 코드가 생성되었습니다. (유효시간 24시간)");
                                        alert("공지 문구가 클립보드에 복사되었습니다.");
                                    }}
                                    className="bg-surface-container-lowest border border-primary text-primary font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all"
                                >
                                    <span className="material-symbols-outlined text-base">content_copy</span>
                                    인계 안내 문구 복사
                                </button>
                            </div>
                        </div>

                        {/* Handover Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-on-surface">과도기 진행 상태</h3>
                                    <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded border border-emerald-200">
                                        승계 대기중
                                    </span>
                                </div>
                                <div className="space-y-3 text-xs text-on-surface-variant">
                                    <div className="flex justify-between border-b border-outline-variant/60 pb-2">
                                        <span>현 총무</span>
                                        <span className="font-bold text-on-surface">김경민 (임기 종료 D-14)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-outline-variant/60 pb-2">
                                        <span>차기 총무</span>
                                        <span className="font-bold text-on-surface">이태성 (코드 인증 대기)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>2주 과도기 기한</span>
                                        <span className="font-mono text-primary font-semibold">2026.08.10 ~ 2026.08.24</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm">
                                <h3 className="text-sm font-bold text-on-surface mb-3">계정 연속성 정책 (PRD 6.1)</h3>
                                <ul className="text-xs text-on-surface-variant space-y-2 list-disc list-inside">
                                    <li>모임 방문 이력 및 신뢰점수는 모임 계정에 영구 승계됩니다.</li>
                                    <li>기존 총무 개인의 성과 프로필은 개인 계정에 귀속되어 유지됩니다.</li>
                                    <li>모임 결제는 식당 부담 방식이므로 추가 카드 변경이 불필요합니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Code Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-surface-container-lowest border border-outline-variant max-w-md w-full p-6 rounded-2xl shadow-2xl text-center space-y-4">
                        <div className="w-14 h-14 bg-secondary-container text-on-secondary-container mx-auto rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">vpn_key</span>
                        </div>
                        <h3 className="text-lg font-bold text-on-surface">인계 코드 발급 완료</h3>
                        <p className="text-xs text-on-surface-variant">차기 총무에게 전달하면 2주간 과도기 권한이 부여됩니다.</p>
                        <div
                            onClick={copyToClipboard}
                            className="bg-surface-container-low border border-outline-variant p-4 rounded-xl cursor-pointer hover:border-secondary transition-colors"
                        >
                            <span className="font-mono text-2xl font-bold text-primary tracking-widest">HX-928-SKL</span>
                            <span className="block text-[11px] text-secondary font-semibold mt-1">클릭하여 복사</span>
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-primary text-on-primary font-bold text-xs py-3 rounded-xl shadow"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
