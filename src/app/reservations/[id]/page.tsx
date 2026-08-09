"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ReservationDetailPage() {
    const params = useParams();
    const id = params?.id || "1";
    const [copied, setCopied] = useState(false);
    const [returned, setReturned] = useState(false);

    const reservation = {
        id,
        orgName: "삼우 고양 경영자 연합회",
        restaurantName: "백석 한우명가",
        date: "2026년 8월 18일 (화) 18:30",
        headcount: "12명",
        status: "예약 확정 완료",
        address: "경기도 고양시 일산동구 백석동 1284-2",
        parking: "무료 전용 주차장 10대 이용 가능",
        menuSummary: "한우 모듬 구이 & 특선 한정식 코스",
        connector: "롯데칠성 이영훈 연결자 확정",
        noticeText: `[삼우 고양 경영자 연합회 8월 정기 모임 안내]
■ 일시: 2026년 8월 18일 (화) 18:30
■ 장소: 백석 한우명가 (고양시 일산동구 백석동 1284-2)
■ 주차: 매장 전용 주차장 (10대 지원)
■ 비고: 시스템 공정 추천 1위 매장 (최근 3개월 미방문)

참석 여부를 아래 링크에서 응답해 주세요:
http://localhost:3001/attendance`,
    };

    const handleCopyNotice = () => {
        navigator.clipboard.writeText(reservation.noticeText);
        setCopied(true);
        alert("공지문이 클립보드에 복사되었습니다. 단체 카톡방에 붙여넣어 주세요!");
    };

    const handleConfirmReturn = () => {
        setReturned(true);
        alert("외부 공유 후 복귀가 확인되었습니다. 참석현황 대시보드로 이동합니다.");
    };

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-4xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/hub" className="text-xs text-secondary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 모임 허브
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-3xl">task_alt</span>
                        예약 확정 상세 #{id}
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        {reservation.orgName} · {reservation.date}
                    </p>
                </div>

                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full self-start md:self-auto">
                    ✓ {reservation.status}
                </span>
            </div>

            {/* Main Reservation Info Card */}
            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 mb-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                    <div>
                        <span className="text-xs text-on-surface-variant block">확정 식당</span>
                        <h2 className="text-xl font-bold text-on-surface">{reservation.restaurantName}</h2>
                    </div>
                    <span className="text-xs text-secondary font-bold bg-secondary-container px-2.5 py-1 rounded-lg">
                        {reservation.connector}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                        <span className="text-on-surface-variant font-medium block">주소</span>
                        <span className="font-bold text-on-surface">{reservation.address}</span>
                    </div>
                    <div>
                        <span className="text-on-surface-variant font-medium block">주차 안내</span>
                        <span className="font-bold text-on-surface">{reservation.parking}</span>
                    </div>
                    <div>
                        <span className="text-on-surface-variant font-medium block">예약 인원</span>
                        <span className="font-bold text-on-surface">{reservation.headcount}</span>
                    </div>
                    <div>
                        <span className="text-on-surface-variant font-medium block">메뉴 구성</span>
                        <span className="font-bold text-on-surface">{reservation.menuSummary}</span>
                    </div>
                </div>
            </div>

            {/* Notice Generator Section (PRD 4.4 & 12.1) */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                    <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">content_copy</span>
                        자동 생성 공지문 (클립보드 공유)
                    </h3>
                    <span className="text-[11px] text-on-surface-variant">PRD 12.1 수동 복귀 확인 메커니즘 적용</span>
                </div>

                <div className="bg-surface-container-low p-4 rounded-xl font-mono text-xs text-on-surface border border-outline-variant/60 whitespace-pre-line">
                    {reservation.noticeText}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                        onClick={handleCopyNotice}
                        className="w-full sm:w-auto bg-secondary text-on-secondary hover:bg-secondary/90 text-xs font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                        <span className="material-symbols-outlined text-base">content_copy</span>
                        {copied ? "공지문 복사 완료!" : "공지문 복사하기"}
                    </button>

                    <button
                        onClick={handleConfirmReturn}
                        className={`w-full sm:w-auto text-xs font-bold px-5 py-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${returned
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                            : "bg-primary text-on-primary border-primary hover:bg-primary/90"
                            }`}
                    >
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        {returned ? "외부 공유 후 복귀 확인됨" : "외부 공유 완료 (복귀 확인)"}
                    </button>
                </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 flex items-center justify-between">
                <Link href="/dashboard" className="text-xs text-secondary font-bold hover:underline flex items-center gap-1">
                    출결/참석현황 대시보드로 이동 →
                </Link>
                <Link href="/finance" className="text-xs text-on-surface-variant hover:text-on-surface font-semibold">
                    재무보고서 보기
                </Link>
            </div>
        </main>
    );
}
