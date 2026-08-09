"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ApplyPage() {
    const [memberCount, setMemberCount] = useState<string>("20~50명");
    const [channel, setChannel] = useState<string>("지인 추천");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            alert("가입 신청이 성공적으로 접수되었습니다.");
        }, 1500);
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen pb-24 md:pb-0">
            {/* Top Navigation with Desktop GNB */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface border-b border-outline-variant">
                <div className="flex items-center gap-2">
                    <Link
                        href="/hub"
                        className="flex items-center gap-2 p-2 rounded-full hover:bg-surface-container-low transition-all active:scale-95"
                    >
                        <span className="material-symbols-outlined text-primary">arrow_back</span>
                        <h1 className="font-headline text-headline-md font-bold text-on-surface">가입 신청</h1>
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

                <div className="flex items-center gap-2">
                    <span className="font-label-mono text-xs text-on-surface-variant">Step 1/1</span>
                </div>
            </header>

            <main className="pt-24 px-margin-mobile max-w-2xl mx-auto">
                {/* Hero Section */}
                <section className="mb-gutter-lg">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-secondary text-2xl">
                                edit_document
                            </span>
                        </div>
                        <div>
                            <h2 className="font-headline text-headline-lg font-bold text-primary">모임 가입 신청서</h2>
                            <p className="font-body text-xs text-on-surface-variant">
                                새로운 모임의 시작을 위해 몇 가지 정보를 입력해주세요.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <form className="space-y-gutter-lg" onSubmit={handleSubmit}>
                    {/* 모임명 Input */}
                    <div className="space-y-gutter-sm">
                        <label className="block font-body text-sm font-bold text-on-surface">
                            모임명 <span className="text-error-red">*</span>
                        </label>
                        <div className="relative flex items-center border border-outline-variant bg-surface-container-lowest rounded-xl h-14 px-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10 transition-all">
                            <span className="material-symbols-outlined text-on-surface-variant mr-3">groups</span>
                            <input
                                className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 font-body text-sm text-on-surface placeholder:text-outline"
                                placeholder="참여하고자 하는 모임의 이름을 적어주세요"
                                type="text"
                                required
                            />
                        </div>
                        <p className="text-[11px] text-on-surface-variant px-1">
                            기존에 활동 중인 모임의 정확한 명칭을 입력해주세요.
                        </p>
                    </div>

                    {/* 활동 지역 Input */}
                    <div className="space-y-gutter-sm">
                        <label className="block font-body text-sm font-bold text-on-surface">
                            활동 지역 <span className="text-error-red">*</span>
                        </label>
                        <div className="relative flex items-center border border-outline-variant bg-surface-container-lowest rounded-xl h-14 px-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/10 transition-all">
                            <span className="material-symbols-outlined text-on-surface-variant mr-3">location_on</span>
                            <select
                                defaultValue=""
                                className="w-full bg-transparent border-none p-0 focus:outline-none focus:ring-0 font-body text-sm text-on-surface appearance-none"
                                required
                            >
                                <option disabled value="">
                                    지역을 선택해주세요
                                </option>
                                <option value="seoul">서울특별시</option>
                                <option value="gyeonggi">경기도</option>
                                <option value="incheon">인천광역시</option>
                                <option value="etc">기타 지역</option>
                            </select>
                            <span className="material-symbols-outlined text-on-surface-variant absolute right-4 pointer-events-none">
                                expand_more
                            </span>
                        </div>
                    </div>

                    {/* 인원대 Selection */}
                    <div className="space-y-gutter-sm">
                        <label className="block font-body text-sm font-bold text-on-surface">
                            대략적인 인원대 <span className="text-error-red">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {["~10명", "10~20명", "20~50명", "50명~"].map((count) => (
                                <label key={count} className="cursor-pointer" onClick={() => setMemberCount(count)}>
                                    <input
                                        className="hidden peer"
                                        name="member_count"
                                        type="radio"
                                        checked={memberCount === count}
                                        onChange={() => setMemberCount(count)}
                                    />
                                    <div
                                        className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${memberCount === count
                                            ? "bg-secondary-container/10 border-secondary text-secondary font-bold"
                                            : "bg-surface-container-lowest border-outline-variant text-on-surface hover:bg-surface-container-low"
                                            }`}
                                    >
                                        <span className="font-label-mono text-xs">{count}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* 소개 경로 (연결자 선택) */}
                    <div className="space-y-gutter-sm">
                        <label className="block font-body text-sm font-bold text-on-surface">
                            소개 경로 (연결자 선택)
                        </label>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                                {["지인 추천", "커뮤니티 광고", "SNS 홍보", "기타"].map((ch) => (
                                    <button
                                        key={ch}
                                        type="button"
                                        onClick={() => setChannel(ch)}
                                        className={`flex-shrink-0 px-4 py-2 rounded-full font-body text-xs transition-all ${channel === ch
                                            ? "border border-secondary bg-secondary-container/10 text-secondary font-bold"
                                            : "border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-outline"
                                            }`}
                                    >
                                        {ch}
                                    </button>
                                ))}
                            </div>
                            <div className="p-4 border border-outline-variant rounded-xl bg-surface-container-low space-y-3">
                                <p className="font-body text-xs text-on-surface-variant font-bold">
                                    연결자 정보 (선택사항)
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0 relative">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                                            alt="김지우 매니저"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-body text-xs font-bold text-primary">김지우 매니저</p>
                                        <p className="text-[11px] text-on-surface-variant">추천 코드: #KJW9921</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-secondary font-body text-xs font-bold hover:underline"
                                    >
                                        변경하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-gutter-sm">
                        <label className="block font-body text-sm font-bold text-on-surface">
                            전하고 싶은 말
                        </label>
                        <textarea
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 font-body text-xs text-on-surface placeholder:text-outline transition-all"
                            placeholder="운영진에게 하고 싶은 말이나 모임 참여 각오 등을 자유롭게 적어주세요."
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Terms Confirmation */}
                    <div className="flex items-start gap-3 py-2">
                        <input
                            className="mt-1 w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary cursor-pointer"
                            id="terms"
                            type="checkbox"
                            required
                        />
                        <label className="font-body text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                            본인은 모임의 회칙 및 이용 약관에 동의하며, 허위 정보를 기재하지 않았음을 확인합니다.{" "}
                            <a className="text-secondary underline" href="#">
                                약관 보기
                            </a>
                        </label>
                    </div>

                    {/* Submit Button Area */}
                    <div className="pt-4 pb-12">
                        <button
                            className={`w-full h-14 rounded-xl font-headline text-base font-bold flex items-center justify-center gap-2 text-white active:scale-[0.98] transition-all ${isSubmitted
                                ? "bg-success-green"
                                : "bg-primary hover:bg-opacity-90"
                                }`}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="material-symbols-outlined animate-spin">sync</span> 처리 중...
                                </>
                            ) : isSubmitted ? (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span> 신청 완료
                                </>
                            ) : (
                                <>
                                    신청하기
                                    <span className="material-symbols-outlined">send</span>
                                </>
                            )}
                        </button>
                        <p className="mt-4 text-center font-body text-xs text-on-surface-variant">
                            신청 후 결과는 카카오 알림톡으로 전송됩니다.
                        </p>
                    </div>
                </form>
            </main>

            {/* Bottom Navigation (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe px-4 bg-surface-container-lowest border-t border-outline-variant shadow-lg h-16">
                <Link href="/hub" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-body text-[11px]">홈</span>
                </Link>
                <Link href="/reservations/confirm" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-body text-[11px]">예약</span>
                </Link>
                <Link href="/recommendations" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="font-body text-[11px]">탐색</span>
                </Link>
                <Link href="/apply" className="flex flex-col items-center justify-center text-secondary font-bold">
                    <span className="material-symbols-outlined">edit_document</span>
                    <span className="font-body text-[11px]">신청</span>
                </Link>
            </nav>
        </div>
    );
}
