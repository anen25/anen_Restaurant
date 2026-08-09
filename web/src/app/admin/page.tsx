import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function AdminPage() {
    const pendingApprovals = [
        { id: "a1", org: "경기 북부 IT 대표자 협의회", count: "35명", connector: "박상철 (고양지부)", date: "2026.08.10 09:30" },
        { id: "a2", org: "연세 04학번 동기회", count: "20명", connector: "이동혁 (강남지부)", date: "2026.08.10 11:15" },
    ];

    return (
        <div className="min-h-screen bg-surface flex flex-col pb-20">
            <Navigation />

            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-gutter-lg w-full">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="bg-primary text-on-primary text-[10px] font-label-mono px-2 py-0.5 rounded font-bold">
                                ADMIN SHIELD
                            </span>
                            <span className="text-xs font-label-mono text-on-surface-variant">시스템 운영자 전용</span>
                        </div>
                        <h1 className="font-headline text-headline-lg font-bold text-primary mt-1">
                            운영 관리 허브 (Admin Hub)
                        </h1>
                    </div>
                    <span className="text-xs font-label-mono text-success-green font-semibold bg-success-green/10 px-3 py-1 rounded-full border border-success-green/20">
                        ● 시스템 정상 작동 중
                    </span>
                </div>

                {/* System Overview KPIs */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant">
                        <span className="text-[11px] font-label-mono text-on-surface-variant block mb-1">활성 등록 모임</span>
                        <p className="font-label-mono text-2xl font-bold text-primary">128개</p>
                        <p className="text-[11px] text-success-green font-semibold mt-1">+12개 이번 달 증가</p>
                    </div>

                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant">
                        <span className="text-[11px] font-label-mono text-on-surface-variant block mb-1">제휴 식당 파트너</span>
                        <p className="font-label-mono text-2xl font-bold text-secondary">340개소</p>
                        <p className="text-[11px] text-on-surface-variant mt-1">승인율 92.5%</p>
                    </div>

                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant">
                        <span className="text-[11px] font-label-mono text-on-surface-variant block mb-1">T+1 유지관리비 누적 정산</span>
                        <p className="font-label-mono text-2xl font-bold text-primary">₩4,250,000</p>
                        <p className="text-[11px] text-on-surface-variant mt-1">토스페이먼츠 빌링키 연동</p>
                    </div>

                    <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant">
                        <span className="text-[11px] font-label-mono text-on-surface-variant block mb-1">승인 대기 큐</span>
                        <p className="font-label-mono text-2xl font-bold text-premium-gold">2건</p>
                        <p className="text-[11px] text-premium-gold font-semibold mt-1">위임 심사 진행 중</p>
                    </div>
                </div>

                {/* Approval Queue Section */}
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm mb-6">
                    <div className="p-5 border-b border-outline-variant flex justify-between items-center">
                        <h2 className="font-headline text-base font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">verified_user</span>
                            신규 모임 가입 승인 대기 큐
                        </h2>
                        <span className="text-xs font-label-mono text-on-surface-variant">2 Pending Approvals</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-body">
                            <thead className="bg-surface-container-low border-b border-outline-variant font-headline text-on-surface font-semibold">
                                <tr>
                                    <th className="p-4">모임/단체명</th>
                                    <th className="p-4">예상 인원</th>
                                    <th className="p-4">담당 연결자</th>
                                    <th className="p-4">신청 일시</th>
                                    <th className="p-4">관리 승인</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant">
                                {pendingApprovals.map((p) => (
                                    <tr key={p.id} className="hover:bg-surface-container-low/50">
                                        <td className="p-4 font-bold text-primary">{p.org}</td>
                                        <td className="p-4 font-label-mono">{p.count}</td>
                                        <td className="p-4 text-on-surface-variant">{p.connector}</td>
                                        <td className="p-4 font-label-mono text-on-surface-variant">{p.date}</td>
                                        <td className="p-4 flex gap-2">
                                            <button className="bg-secondary text-on-secondary font-semibold px-3 py-1.5 rounded text-[11px] hover:bg-secondary/90">
                                                최종 승인
                                            </button>
                                            <button className="border border-outline-variant text-on-surface-variant font-semibold px-3 py-1.5 rounded text-[11px] hover:bg-surface-container-low">
                                                보류
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
