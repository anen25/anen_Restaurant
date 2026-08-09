"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReservationConfirmPage() {
    const [showToast, setShowToast] = useState(false);
    const [isReturning, setIsReturning] = useState(false);
    const [isReturned, setIsReturned] = useState(false);

    const noticeText = `[모임 안내: 평창갈비 예약 확정]

안녕하세요, 이번 모임의 예약이 시스템 권장 최적 장소로 최종 확정되었습니다.

• 일시: 8월 12일(월) 18:30
• 장소: 평창갈비 (강남구 논현동 123-4)
• 메뉴: 소갈비 정식 및 계절 찬류
• 주차: 건물 내 기계식 주차 가능 (무료 2시간)

시스템이 추천한 참석자 선호도 및 동선을 고려한 최적의 장소입니다. 일정에 참고 부탁드립니다.`;

    const handleCopy = () => {
        navigator.clipboard.writeText(noticeText);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    const handleReturn = () => {
        setIsReturning(true);
        setTimeout(() => {
            setIsReturning(false);
            setIsReturned(true);
            alert("예약 프로세스가 성공적으로 완료되었습니다. 메인 대시보드로 이동합니다.");
        }, 800);
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen pb-48">
            {/* TopAppBar with GNB for Desktop */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
                <div className="flex items-center gap-2">
                    <Link href="/hub" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary cursor-pointer">
                            keyboard_arrow_down
                        </span>
                        <h1 className="font-headline text-headline-md font-bold text-on-surface">
                            예약 확정 완료
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
                    <Link href="/reservations/confirm" className="text-secondary border-b-2 border-secondary pb-1">
                        예약 관리
                    </Link>
                    <Link href="/attendance" className="text-on-surface-variant hover:text-primary transition-colors">
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

                <div className="flex items-center">
                    <span className="material-symbols-outlined text-primary cursor-pointer">notifications</span>
                </div>
            </header>

            <main className="pt-24 pb-32 px-4 max-w-lg mx-auto space-y-gutter-lg">
                {/* Header Message */}
                <section className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-success-green/10 rounded-full mb-2">
                        <span className="material-symbols-outlined text-success-green text-4xl">
                            check_circle
                        </span>
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-primary">
                        예약이 확정되었습니다!
                    </h2>
                    <p className="font-body text-xs text-on-surface-variant">
                        일정에 맞춰 식당에 예약 정보가 전달되었습니다.
                    </p>
                </section>

                {/* Restaurant Summary Card */}
                <section className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant flex gap-4 items-center shadow-sm">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <Image
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop"
                            alt="평창갈비"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-label-mono text-[10px] font-bold text-premium-gold px-2 py-0.5 bg-tertiary-container text-on-tertiary-container rounded-full">
                                D-12
                            </span>
                            <h3 className="font-headline text-base font-bold">평창갈비</h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                <span className="font-body text-xs">8월 12일 (월) 18:30</span>
                            </div>
                            <div className="flex items-center gap-1 text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm">group</span>
                                <span className="font-body text-xs">성인 8명 / 룸 예약 완료</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notice Content Section */}
                <section className="space-y-gutter-md">
                    <div className="flex justify-between items-end">
                        <label className="font-headline text-base font-bold">공지문 미리보기</label>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                            AI 자동 생성됨
                        </span>
                    </div>
                    <div className="relative group">
                        <div className="bg-surface-container-low rounded-xl p-6 border-2 border-dashed border-outline-variant font-body text-xs text-on-surface leading-relaxed whitespace-pre-wrap">
                            {noticeText}
                        </div>
                        <button
                            onClick={handleCopy}
                            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-opacity"
                        >
                            <span className="material-symbols-outlined">content_paste</span>
                        </button>
                    </div>
                </section>

                {/* Warning/Tip */}
                <div className="flex gap-3 p-4 bg-primary-container rounded-lg items-start text-on-primary">
                    <span className="material-symbols-outlined text-on-primary-container">info</span>
                    <p className="font-body text-xs text-on-primary-container leading-normal">
                        아래 &apos;복귀 확인&apos; 버튼을 누르셔야 예약 프로세스가 최종 종료되며, 대시보드에 확정 상태로 반영됩니다.
                    </p>
                </div>
            </main>

            {/* Bottom Actions Layer */}
            <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest p-margin-mobile border-t border-outline-variant flex flex-col gap-3 z-50">
                <button
                    onClick={handleCopy}
                    className="w-full bg-secondary text-white py-4 rounded-xl font-headline text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg"
                >
                    <span className="material-symbols-outlined">content_copy</span>
                    공지 문구 복사하기
                </button>
                <button
                    onClick={handleReturn}
                    disabled={isReturning}
                    className="w-full bg-primary text-white py-4 rounded-xl font-headline text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                    {isReturning ? (
                        <>
                            <span className="material-symbols-outlined animate-spin">refresh</span> 처리 중...
                        </>
                    ) : isReturned ? (
                        <>
                            <span className="material-symbols-outlined">check_circle</span> 완료됨
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined">check_circle</span> 복귀 확인 (카톡 공유 완료)
                        </>
                    )}
                </button>
                <p className="text-center font-body text-xs text-on-surface-variant pb-safe">
                    공유를 마치고 버튼을 눌러 관리 화면으로 이동하세요.
                </p>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-32 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full font-body text-xs shadow-2xl transition-all z-[100] flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green">check</span>
                    공지 문구가 클립보드에 복사되었습니다.
                </div>
            )}
        </div>
    );
}
