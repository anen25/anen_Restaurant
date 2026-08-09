"use client";

import { useState } from "react";
import Link from "next/link";

export default function PartnerBillingPage() {
    const [cardName, setCardName] = useState("신한 법인 체크카드");
    const [cardNumber, setCardNumber] = useState("5361-****-****-8912");

    const handleRegisterBillingKey = (e: React.FormEvent) => {
        e.preventDefault();
        alert("빌링키(자동결제수단) 등록이 성공적으로 업데이트되었습니다.");
    };

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-4xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/partner" className="text-xs text-secondary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 파트너 대시보드
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">credit_card</span>
                        자동결제(빌링키) 수단 관리
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        PRD 7.3절 기준 — 모임 예약 성사 시 인당 1,000원 유지관리비가 예약일 익일(T+1)에 자동 결제됩니다.
                    </p>
                </div>
            </div>

            {/* Explanatory Policy Banner */}
            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 mb-8">
                <h2 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-lg">info</span>
                    식당 유지관리비 청구 및 정산 안내
                </h2>
                <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
                    <li>모임(총무)은 결제 비용이 없으며, 플랫폼 비용은 식당이 인당 정액(1,000원/인)으로 부담합니다.</li>
                    <li>예약 확정 시점이 아닌 **예약일 익일(T+1)** 자동 결제되어 당일 취소건에 대한 취소/환불 부담이 없습니다.</li>
                    <li>결제와 동시에 카드 매출전표(부가가치세법상 적격증빙)가 자동 발급됩니다.</li>
                </ul>
            </div>

            {/* Main Form */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-base font-bold text-on-surface mb-4">현재 등록된 결제수단</h3>

                <div className="bg-secondary-container/20 border border-secondary/30 rounded-xl p-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary text-on-secondary rounded-lg flex items-center justify-center font-bold text-xs">
                            CARD
                        </div>
                        <div>
                            <span className="text-xs text-secondary font-bold block">주결제 카드 (빌링키 인증 완료)</span>
                            <span className="text-sm font-bold text-on-surface">{cardName} ({cardNumber})</span>
                        </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                        정상 등록
                    </span>
                </div>

                <form onSubmit={handleRegisterBillingKey} className="space-y-4 border-t border-outline-variant pt-6">
                    <h4 className="text-sm font-bold text-on-surface">결제수단 변경 / 빌링키 재등록</h4>

                    <div>
                        <label className="block text-xs font-semibold text-on-surface-variant mb-1">카드 종류 / 명의</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full text-xs bg-surface-container-low border border-outline-variant rounded-xl p-3 text-on-surface focus:outline-none focus:border-secondary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-on-surface-variant mb-1">카드 번호</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full text-xs bg-surface-container-low border border-outline-variant rounded-xl p-3 text-on-surface focus:outline-none focus:border-secondary"
                            required
                        />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                        <Link
                            href="/partner"
                            className="px-4 py-2.5 rounded-xl border border-outline-variant text-xs font-semibold hover:bg-surface-container-low transition-colors"
                        >
                            취소
                        </Link>
                        <button
                            type="submit"
                            className="bg-primary text-on-primary hover:bg-primary/90 text-xs font-bold px-6 py-2.5 rounded-xl transition-all"
                        >
                            토스페이먼츠 빌링키 갱신
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
