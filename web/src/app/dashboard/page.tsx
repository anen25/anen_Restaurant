import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-surface flex flex-col pb-20">
            <Navigation />

            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-gutter-lg w-full">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <span className="text-xs font-label-mono text-secondary font-bold uppercase">
                            REAL-TIME MONITORING DASHBOARD
                        </span>
                        <h1 className="font-headline text-headline-lg font-bold text-primary">
                            출결 현황 및 재무보고 통합 대시보드
                        </h1>
                    </div>
                    <Link href="/finance" className="bg-primary text-on-primary font-headline text-xs font-bold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                        월간 재무 리포트 전체보기
                    </Link>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
                    {/* Left Column: Event Progress & Realtime Attendance */}
                    <div className="lg:col-span-8 space-y-gutter-md">
                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-success-green/10 text-success-green font-semibold text-xs px-2.5 py-1 rounded-full border border-success-green/20">
                                    ● D-Day 오늘 회식 진행 중
                                </span>
                                <span className="text-xs font-label-mono text-on-surface-variant">정담 한정식 서초점</span>
                            </div>

                            <h2 className="font-headline text-headline-md font-bold text-primary mb-2">
                                8월 정기회식 참석률 83% (25명 중 21명 입장)
                            </h2>

                            {/* Progress bar */}
                            <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden my-4 border border-outline-variant">
                                <div className="bg-secondary h-full rounded-full w-[83%] transition-all duration-500"></div>
                            </div>

                            <div className="flex justify-between items-center text-xs font-label-mono text-on-surface-variant">
                                <span>입장 완료: 21명</span>
                                <span>이동 중 / 대기: 4명</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/attendance" className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-all">
                                <span className="material-symbols-outlined text-secondary text-2xl mb-2">group_add</span>
                                <h3 className="font-headline text-base font-bold text-primary">참석자 명단 실시간 체크</h3>
                                <p className="text-xs text-on-surface-variant mt-1">현장 출결 및 미입장자 카톡 안내</p>
                            </Link>
                            <Link href="/reservations/confirm" className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-all">
                                <span className="material-symbols-outlined text-secondary text-2xl mb-2">subtitles</span>
                                <h3 className="font-headline text-base font-bold text-primary">모임 공지문 재발송</h3>
                                <p className="text-xs text-on-surface-variant mt-1">카톡 전송용 모임 공지 텍스트 복사</p>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: T+1 Financial Preview */}
                    <div className="lg:col-span-4 space-y-gutter-md">
                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm space-y-4">
                            <h3 className="font-headline text-base font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-3">
                                <span className="material-symbols-outlined text-premium-gold">receipt</span>
                                T+1 익일 결제 정산 요약
                            </h3>

                            <div>
                                <p className="text-xs text-on-surface-variant font-body">총 예상 정산액</p>
                                <p className="font-label-mono text-2xl font-bold text-primary mt-0.5">₩1,125,000</p>
                                <p className="text-[11px] text-on-surface-variant">식당 유지관리비(1,000원×25명) 포함</p>
                            </div>

                            <div className="bg-surface-container-low p-3 rounded-lg text-xs space-y-1 text-on-surface-variant font-body">
                                <p className="flex justify-between"><span>식당명:</span> <span className="font-semibold text-primary">정담 한정식</span></p>
                                <p className="flex justify-between"><span>결제 방식:</span> <span className="font-semibold text-primary">식당 빌링키 T+1</span></p>
                                <p className="flex justify-between"><span>총무 지불액:</span> <span className="font-semibold text-success-green">0원 (무료)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
