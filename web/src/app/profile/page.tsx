import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-surface flex flex-col pb-20">
            <Navigation />

            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-gutter-lg w-full max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-label-mono text-on-surface-variant mb-3">
                    <Link href="/hub" className="hover:text-primary">멀티모임 허브</Link>
                    <span>&gt;</span>
                    <span className="text-secondary font-bold">총무 개인 성과 프로필</span>
                </div>

                {/* Profile Card Header */}
                <div className="bg-primary-container text-on-primary-container p-8 rounded-xl shadow-md mb-6 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                        <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-2xl border-2 border-white/20">
                            김
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                <h1 className="font-headline text-headline-lg font-bold text-white">김세진 총무님</h1>
                                <span className="bg-premium-gold text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                                    MASTER SECRETARY
                                </span>
                            </div>
                            <p className="text-xs opacity-80 font-body mb-3">
                                소속: 고양시 소상공인연합회 사무총장 • 경력 3년차
                            </p>
                            <p className="text-xs opacity-90 max-w-lg leading-relaxed">
                                임기가 종료되어도 총무님의 모든 운영 데이터와 추천 성과는 귀속 자산으로 영구 보존됩니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant text-center">
                        <span className="material-symbols-outlined text-secondary text-3xl mb-1">event_available</span>
                        <span className="text-[11px] font-label-mono text-on-surface-variant block">총 주최/예약 횟수</span>
                        <p className="font-label-mono text-2xl font-bold text-primary mt-1">42회</p>
                    </div>

                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant text-center">
                        <span className="material-symbols-outlined text-success-green text-3xl mb-1">verified</span>
                        <span className="text-[11px] font-label-mono text-on-surface-variant block">평균 회식 참석률</span>
                        <p className="font-label-mono text-2xl font-bold text-success-green mt-1">94%</p>
                    </div>

                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant text-center">
                        <span className="material-symbols-outlined text-premium-gold text-3xl mb-1">shield</span>
                        <span className="text-[11px] font-label-mono text-on-surface-variant block">노쇼(No-Show) 발생</span>
                        <p className="font-label-mono text-2xl font-bold text-primary mt-1">0건 (클린)</p>
                    </div>
                </div>

                {/* Badges & Trust Ratings */}
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm space-y-4">
                    <h2 className="font-headline text-base font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-3">
                        <span className="material-symbols-outlined text-secondary">military_tech</span>
                        획득한 시스템 배지 &amp; 신뢰 등급
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-3 border border-outline-variant">
                            <span className="material-symbols-outlined text-premium-gold text-3xl">workspace_premium</span>
                            <div>
                                <h3 className="font-bold text-xs text-primary">공정 추천 마스터</h3>
                                <p className="text-[11px] text-on-surface-variant">추천 사유 일치율 98% 이상 달성</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-3 border border-outline-variant">
                            <span className="material-symbols-outlined text-secondary text-3xl">receipt_long</span>
                            <div>
                                <h3 className="font-bold text-xs text-primary">T+1 정산 우수 총무</h3>
                                <p className="text-[11px] text-on-surface-variant">재무 보고서 자동 발급 100% 이행</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
