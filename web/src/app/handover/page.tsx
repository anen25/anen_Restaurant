"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function HandoverPage() {
    const [codeGenerated, setCodeGenerated] = useState(false);

    return (
        <div className="min-h-screen bg-surface flex flex-col pb-20">
            <Navigation />

            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-gutter-lg w-full max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-label-mono text-on-surface-variant mb-3">
                    <Link href="/hub" className="hover:text-primary">멀티모임 허브</Link>
                    <span>&gt;</span>
                    <span className="text-secondary font-bold">총무 인계 관리</span>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant shadow-sm mb-6">
                    <span className="text-xs font-label-mono text-secondary font-bold uppercase">
                        ORGANIZATION HANDOVER MANAGEMENT
                    </span>
                    <h1 className="font-headline text-headline-lg font-bold text-primary mt-1 mb-2">
                        총무 권한 및 소유권 인계
                    </h1>
                    <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                        모임의 히스토리와 재무 데이터는 개인 계정이 아닌 <strong className="text-primary font-semibold">[고양시 소상공인연합회]</strong> 조직 계정에 보존됩니다. 총무 이양 시 후임자에게 인계 코드를 발급해 안전하게 이전할 수 있습니다.
                    </p>

                    {/* Handover Code Generator Box */}
                    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant text-center space-y-4">
                        <h2 className="font-headline text-base font-bold text-primary">
                            24시간 유효 인계 코드 발급
                        </h2>

                        {codeGenerated ? (
                            <div className="space-y-3">
                                <div className="bg-surface-container-lowest p-4 rounded-lg border border-secondary text-center">
                                    <span className="text-[11px] text-on-surface-variant block mb-1 font-label-mono">
                                        HO-2026-8849-GOYANG (23시간 59분 남음)
                                    </span>
                                    <p className="font-label-mono text-3xl font-bold tracking-widest text-secondary">
                                        8849 - 2026
                                    </p>
                                </div>
                                <p className="text-[11px] text-success-green font-semibold">
                                    ✓ 코드 복사 완료. 후임 총무님에게 전송해 주세요.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-xs text-on-surface-variant mb-4">
                                    버튼을 클릭하면 후임 총무님이 입력할 6자리 일회성 승인 코드가 생성됩니다.
                                </p>
                                <button
                                    onClick={() => setCodeGenerated(true)}
                                    className="bg-primary text-on-primary font-headline text-xs font-bold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity"
                                >
                                    <span className="material-symbols-outlined text-base">key</span>
                                    인계 코드 즉시 발급하기
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* 2-Week Transition Period Notice */}
                <div className="bg-secondary-container/40 p-6 rounded-xl border border-secondary-container">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">verified</span>
                        <div>
                            <h3 className="font-headline text-sm font-bold text-primary mb-1">
                                2주 과도기 (Transition Period) 자동 보호
                            </h3>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                인계 코드가 등록된 후에도 전임 총무님과 후임 총무님은 2주 동안 모임 데이터에 동시 접근할 수 있습니다. 2주 후 전임 총무님의 작성 권한은 읽기 전용으로 안전하게 전환됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
