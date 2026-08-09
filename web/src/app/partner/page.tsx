"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PartnerLandingPage() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isConsultOpen, setIsConsultOpen] = useState(false);

    return (
        <div className="bg-surface text-on-surface min-h-screen">
            {/* TopAppBar with Desktop GNB */}
            <header className="w-full top-0 sticky bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/hub" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
                        <h1 className="font-headline text-headline-md font-bold text-primary">아는 식당</h1>
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
                    <Link href="/partner" className="text-secondary border-b-2 border-secondary pb-1">
                        파트너 안내
                    </Link>
                </nav>

                <div className="hidden md:flex gap-3 items-center">
                    <Link
                        href="/partner/billing"
                        className="border border-outline-variant text-on-surface text-xs font-semibold px-3 py-2 rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">credit_card</span>
                        자동결제 수단
                    </Link>
                    <Link
                        href="/partner/history"
                        className="border border-outline-variant text-on-surface text-xs font-semibold px-3 py-2 rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">receipt_long</span>
                        결제 내역
                    </Link>
                    <button
                        onClick={() => setIsRegisterOpen(true)}
                        className="bg-primary text-white px-5 py-2 rounded-lg font-label-mono text-xs font-bold hover:opacity-90 transition-opacity active:scale-95"
                    >
                        입점 신청
                    </button>
                </div>
                <div className="md:hidden">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                </div>
            </header>

            <main className="min-h-screen pb-24">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-secondary rounded-full mb-6">
                                <span className="material-symbols-outlined text-[18px]">verified</span>
                                <span className="font-body text-[11px] font-bold">
                                    대한민국 식당 경영주를 위한 최상의 파트너
                                </span>
                            </div>
                            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">
                                마케팅비 0원, <br />
                                예약 1인당 단돈 <span className="text-secondary font-extrabold">1,000원</span>
                            </h2>
                            <p className="text-on-surface-variant font-body text-base mb-10 max-w-lg leading-relaxed">
                                불필요한 광고비 지출은 이제 그만. <br />
                                아는 식당은 실질적인 예약 성과에 대해서만 정직한 비용을 청구합니다.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsRegisterOpen(true)}
                                    className="bg-primary text-white px-8 py-4 rounded-xl font-headline text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
                                >
                                    내 식당 등록하기
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <button
                                    onClick={() => setIsConsultOpen(true)}
                                    className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-headline text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors active:scale-95"
                                >
                                    상담 신청하기
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                                <Image
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                                    alt="식당 파트너 인테리어"
                                    width={600}
                                    height={600}
                                />
                            </div>
                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden md:block border border-outline-variant">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-success-green/10 text-success-green rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">trending_up</span>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant font-label-mono text-[11px]">
                                            평균 매출 상승
                                        </p>
                                        <p className="font-headline text-xl font-bold text-primary">+24%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Prop (Bento Grid) */}
                <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
                            왜 &apos;아는 식당&apos; 이어야 할까요?
                        </h3>
                        <p className="text-on-surface-variant font-body text-sm">
                            사장님의 성공이 곧 우리의 성공입니다.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-gutter-lg">
                        <div className="md:col-span-2 bg-white/80 backdrop-blur-md border border-outline-variant p-10 rounded-3xl flex flex-col justify-between hover:border-secondary transition-colors group shadow-sm">
                            <div>
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-[32px]">payments</span>
                                </div>
                                <h4 className="font-headline text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                                    고정 비용 제로
                                </h4>
                                <p className="text-on-surface-variant font-body text-base max-w-md leading-relaxed">
                                    월정액 광고비, 가입비, 교육비가 전혀 없습니다. 실제 방문한 손님 1인당 1,000원의 수수료만 지불하세요.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <span className="px-4 py-2 bg-surface-container rounded-full font-label-mono text-xs text-on-surface font-semibold">
                                    #투명한_정산
                                </span>
                                <span className="px-4 py-2 bg-surface-container rounded-full font-label-mono text-xs text-on-surface font-semibold">
                                    #성과_중심
                                </span>
                            </div>
                        </div>

                        <div className="bg-primary text-white p-10 rounded-3xl flex flex-col shadow-sm">
                            <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
                            </div>
                            <h4 className="font-headline text-xl font-bold mb-4">스마트 타겟팅</h4>
                            <p className="text-gray-300 font-body text-xs mb-8 leading-relaxed">
                                AI가 우리 식당에 딱 맞는 미팅 성격의 단체 손님을 우선적으로 매칭하여 예약 성사율을 높입니다.
                            </p>
                            <div className="mt-auto overflow-hidden rounded-xl h-32 relative">
                                <Image
                                    className="w-full h-full object-cover opacity-80"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
                                    alt="스마트 타겟팅"
                                    width={300}
                                    height={150}
                                />
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest border border-outline-variant p-10 rounded-3xl shadow-sm">
                            <div className="w-14 h-14 bg-premium-gold/10 text-premium-gold rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[32px]">security</span>
                            </div>
                            <h4 className="font-headline text-xl font-bold mb-4">신뢰 기반 노쇼 방지</h4>
                            <p className="text-on-surface-variant font-body text-xs leading-relaxed">
                                엄격한 회원 인증 시스템을 통해 노쇼(No-Show) 확률을 1% 미만으로 관리합니다.
                            </p>
                        </div>

                        <div className="md:col-span-2 bg-white/80 backdrop-blur-md border border-outline-variant p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center overflow-hidden shadow-sm">
                            <div className="flex-1">
                                <h4 className="font-headline text-xl font-bold mb-4">자동화된 예약 관리</h4>
                                <p className="text-on-surface-variant font-body text-xs mb-6 leading-relaxed">
                                    전화 응대의 번거로움 없이 클릭 한 번으로 모든 예약을 관리하고 자동으로 정산됩니다.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 font-label-mono text-xs text-secondary font-bold">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                        실시간 앱 푸시 알림
                                    </li>
                                    <li className="flex items-center gap-2 font-label-mono text-xs text-secondary font-bold">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                        자동 주간 정산 리포트
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-64 h-48 bg-surface rounded-2xl border border-outline-variant relative overflow-hidden flex items-center justify-center">
                                <Image
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
                                    alt="자동화된 예약 관리"
                                    width={300}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-max-width mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
                                파트너십 시작 프로세스
                            </h3>
                            <p className="text-on-surface-variant font-body text-sm">
                                단 3일이면 아는 식당 파트너가 될 수 있습니다.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-headline text-xl font-bold mb-6 shadow-xl border-4 border-white">
                                    1
                                </div>
                                <h5 className="font-headline text-base font-bold mb-2">식당 정보 등록</h5>
                                <p className="text-on-surface-variant font-body text-xs px-4 leading-relaxed">
                                    식당의 위치, 메뉴, 운영 시간을 간편하게 등록하세요.
                                </p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center font-headline text-xl font-bold mb-6 shadow-md border-4 border-white">
                                    2
                                </div>
                                <h5 className="font-headline text-base font-bold mb-2">운영 심사</h5>
                                <p className="text-on-surface-variant font-body text-xs px-4 leading-relaxed">
                                    전문 검수팀이 24시간 이내에 식당의 적합성을 확인합니다.
                                </p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center font-headline text-xl font-bold mb-6 shadow-md border-4 border-white">
                                    3
                                </div>
                                <h5 className="font-headline text-base font-bold mb-2">파트너 승인</h5>
                                <p className="text-on-surface-variant font-body text-xs px-4 leading-relaxed">
                                    승인 즉시 &apos;아는 식당&apos; 앱 내 추천 리스트에 노출됩니다.
                                </p>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-headline text-xl font-bold mb-6 shadow-xl border-4 border-white">
                                    <span className="material-symbols-outlined">auto_graph</span>
                                </div>
                                <h5 className="font-headline text-base font-bold mb-2">자동 예약/정산</h5>
                                <p className="text-on-surface-variant font-body text-xs px-4 leading-relaxed">
                                    손님 방문 시 자동 정산되며 편리하게 관리됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-outline-variant p-12 rounded-[40px] text-center relative overflow-hidden shadow-xl">
                        <div className="relative z-10">
                            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">
                                지금 바로 1만 명의 우수 고객과 만나보세요
                            </h3>
                            <p className="text-on-surface-variant font-body text-base mb-10">
                                입점비 무료 혜택은 이번 달까지만 제공됩니다.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => setIsRegisterOpen(true)}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-headline text-base font-bold hover:scale-105 transition-transform shadow-xl active:scale-95"
                                >
                                    내 식당 무료 등록하기
                                </button>
                            </div>
                            <p className="mt-8 text-on-surface-variant font-body text-xs">
                                문의: 1544-XXXX | partnership@known-res.co.kr
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Registration Modal Dialog */}
            {isRegisterOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-3">
                            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">store</span>
                                아는 식당 파트너 입점 신청
                            </h3>
                            <button
                                onClick={() => setIsRegisterOpen(false)}
                                className="text-on-surface-variant hover:text-primary"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <p className="text-xs text-on-surface-variant">
                            식당 정보를 등록해주시면 담당 매니저가 24시간 이내 사전 검토 후 연락드립니다.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("파트너 입점 신청이 정상적으로 완료되었습니다! 담당 매니저가 빠른 시일 내 연락드리겠습니다.");
                                setIsRegisterOpen(false);
                            }}
                            className="space-y-3 pt-1"
                        >
                            <div>
                                <label className="block text-xs font-bold text-primary mb-1">식당 상호명</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="예: 정담 한정식 서초점"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2.5 text-xs focus:outline-none focus:border-secondary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-primary mb-1">지역 / 위치</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="예: 서울 서초구 반포대로"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2.5 text-xs focus:outline-none focus:border-secondary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-primary mb-1">대표자 연락처</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="010-0000-0000"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2.5 text-xs focus:outline-none focus:border-secondary"
                                />
                            </div>
                            <div className="pt-2 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsRegisterOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low rounded-lg"
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow"
                                >
                                    입점 신청 제출
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Consultation Modal Dialog */}
            {isConsultOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
                        <div className="flex justify-between items-center border-b border-outline-variant/60 pb-3">
                            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">support_agent</span>
                                제휴 상담 신청
                            </h3>
                            <button
                                onClick={() => setIsConsultOpen(false)}
                                className="text-on-surface-variant hover:text-primary"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <p className="text-xs text-on-surface-variant">
                            단돈 1,000원 예약 유치비 모델 및 단체 회식 단독 노출에 관한 궁금증을 안내해 드립니다.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("상담 신청이 접수되었습니다. 안내 책자 및 담당자 상담 전화를 전달드리겠습니다.");
                                setIsConsultOpen(false);
                            }}
                            className="space-y-3 pt-1"
                        >
                            <div>
                                <label className="block text-xs font-bold text-primary mb-1">성함 / 이메일</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="홍길동 (owner@example.com)"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2.5 text-xs focus:outline-none focus:border-secondary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-primary mb-1">문의 내용</label>
                                <textarea
                                    rows={3}
                                    placeholder="상담을 원하시는 내용을 자유롭게 적어주세요."
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2.5 text-xs focus:outline-none focus:border-secondary"
                                ></textarea>
                            </div>
                            <div className="pt-2 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsConsultOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low rounded-lg"
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold text-white bg-secondary hover:bg-secondary/90 rounded-lg shadow"
                                >
                                    상담 신청 완료
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* BottomNavBar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm flex justify-around items-center h-20 pb-safe px-gutter-md">
                <Link href="/hub" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-label-mono text-[11px]">홈</span>
                </Link>
                <Link href="/reservations/confirm" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-label-mono text-[11px]">예약</span>
                </Link>
                <Link href="/recommendations" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span className="font-label-mono text-[11px]">탐색</span>
                </Link>
                <Link href="/partner" className="flex flex-col items-center justify-center text-secondary font-bold">
                    <span className="material-symbols-outlined">handshake</span>
                    <span className="font-label-mono text-[11px]">파트너</span>
                </Link>
            </nav>
        </div>
    );
}
