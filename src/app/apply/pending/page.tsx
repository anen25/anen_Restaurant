"use client";

import Link from "next/link";
import Image from "next/image";

export default function ApplyPendingPage() {
    return (
        <div className="bg-background text-on-background min-h-screen flex flex-col pb-24 md:pb-0">
            {/* TopAppBar */}
            <header className="bg-surface-container-lowest text-primary w-full top-0 sticky border-b border-outline-variant z-50 transition-colors duration-200">
                <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full">
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined hover:bg-surface-container-low p-2 rounded-full transition-colors">
                            menu
                        </button>
                        <h1 className="font-headline text-headline-md font-bold text-primary">아는 식당</h1>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant relative">
                        <Image
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                            alt="프로필 이미지"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center py-12 px-margin-mobile">
                <div className="max-w-[800px] w-full space-y-8">
                    {/* Hero Status Section */}
                    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-primary text-white px-3 py-1 rounded-full font-body text-[11px] font-semibold uppercase tracking-wider">
                                    심사 중
                                </span>
                            </div>
                            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
                                가입 심사 대기
                            </h2>
                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                                커넥터가 그룹 가입 신청을 확인하고 있습니다.
                                <br />
                                데이터에 기반한 객관적인 검토를 통해
                                <br />
                                프라이빗한 미식 네트워크를 유지합니다.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative bg-surface-container h-64 md:h-auto overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                                alt="가입 심사 대기 이미지"
                                width={400}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                    </div>

                    {/* "What Happens Next" Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Step 1: Review */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-4 text-secondary">
                                <span className="material-symbols-outlined">fact_check</span>
                            </div>
                            <h3 className="font-headline text-base font-bold text-primary mb-2">Step 1. 검토</h3>
                            <p className="font-body text-xs text-on-surface-variant leading-normal">
                                관리자가 그룹의 성격과 예산 범위, 주요 미팅 목적을 세밀하게 분석합니다.
                            </p>
                        </div>
                        {/* Step 2: Approval */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-success-green/10 flex items-center justify-center mb-4 text-success-green">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <h3 className="font-headline text-base font-bold text-primary mb-2">Step 2. 승인</h3>
                            <p className="font-body text-xs text-on-surface-variant leading-normal">
                                심사가 완료되면 알림톡으로 결과를 안내드리며, 플랫폼의 모든 권한이 활성화됩니다.
                            </p>
                        </div>
                        {/* Step 3: Setup */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-premium-gold/10 flex items-center justify-center mb-4 text-premium-gold">
                                <span className="material-symbols-outlined">settings_suggest</span>
                            </div>
                            <h3 className="font-headline text-base font-bold text-primary mb-2">Step 3. 설정</h3>
                            <p className="font-body text-xs text-on-surface-variant leading-normal">
                                상세 프로필과 선호 레스토랑을 설정하여 최적화된 추천 알고리즘을 경험하세요.
                            </p>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <button
                            onClick={() => alert("현재 심사가 정상 진행 중입니다.")}
                            className="bg-primary text-white px-8 py-4 rounded-xl font-headline text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
                        >
                            <span className="material-symbols-outlined">refresh</span>
                            심사 상태 확인
                        </button>
                        <Link
                            href="/"
                            className="bg-surface-container-lowest text-primary border border-primary px-8 py-4 rounded-xl font-headline text-sm font-bold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
                        >
                            랜딩 페이지로 이동
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Evidence Footer */}
                    <div className="text-center py-6 border-t border-outline-variant">
                        <p className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">
                            Authorized Professional Network · Since 2024
                        </p>
                    </div>
                </div>
            </main>

            {/* BottomNavBar (Mobile only) */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm flex justify-around items-center h-20 pb-safe px-gutter-md">
                <Link href="/hub" className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-label-mono text-[11px] mt-1">홈</span>
                </Link>
                <Link href="/group/settings" className="flex flex-col items-center justify-center bg-secondary-container/20 text-secondary rounded-xl px-3 py-1 font-bold">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="font-label-mono text-[11px] mt-1">내 모임</span>
                </Link>
                <Link href="/recommendations" className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    <span className="font-label-mono text-[11px] mt-1">추천</span>
                </Link>
                <Link href="/profile" className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-label-mono text-[11px] mt-1">프로필</span>
                </Link>
            </nav>
        </div>
    );
}
