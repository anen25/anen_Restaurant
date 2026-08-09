"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConnectorCurationPage() {
    const router = useRouter();
    const [selectedIds, setSelectedIds] = useState<string[]>(["store-1", "store-2", "store-3"]);

    const candidatePool = [
        {
            id: "store-1",
            name: "백석 한우명가",
            category: "한식·소고기 구이",
            capacity: "12인 독립 룸 보유 (최대 40인)",
            parking: "무료 주차 10대",
            recentVisit: "최근 120일 미방문 (조건 충족)",
            memberOwned: true,
            trustScore: 98,
            reason: "독립 VIP 룸 완비, 주차 공간 넉넉함, 협회 회원사 운영 가점 매장",
        },
        {
            id: "store-2",
            name: "경복궁 일산점",
            category: "한정식·코스 요리",
            capacity: "10인/16인 룸 보유",
            parking: "발렛 파킹 가능",
            recentVisit: "최근 180일 미방문 (조건 충족)",
            memberOwned: false,
            trustScore: 95,
            reason: "임원 정기회에 부합하는 정갈한 한정식 코스 구성",
        },
        {
            id: "store-3",
            name: "스시 잇쇼",
            category: "일식·프라이빗 오마카세",
            capacity: "12인 룸 카운터",
            parking: "건물 내 주차 2시간 무료",
            recentVisit: "방문 이력 없음 (신규)",
            memberOwned: false,
            trustScore: 92,
            reason: "조용한 비즈니스 대화에 적합한 조명 및 프라이빗 룸 보유",
        },
        {
            id: "store-4",
            name: "일산 참치 마구로",
            category: "일식·참치회",
            capacity: "15인 룸 보유",
            parking: "공영주차장 지원",
            recentVisit: "최근 90일 미방문",
            memberOwned: true,
            trustScore: 90,
            reason: "예산대(인당 6만원)에 적합한 참치 코스",
        },
    ];

    const toggleSelect = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((item) => item !== id));
        } else {
            if (selectedIds.length >= 5) {
                alert("추천 후보는 최대 5곳까지 선택할 수 있습니다.");
                return;
            }
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleSendCuration = () => {
        if (selectedIds.length < 3) {
            alert("공정성 원칙에 따라 최소 3곳 이상의 후보를 선택해 주세요.");
            return;
        }
        alert("총무에게 3곳의 추천 후보 카드와 추천 근거 전송이 완료되었습니다.");
        router.push("/recommendations");
    };

    return (
        <main className="min-h-screen bg-surface-container-lowest text-on-surface p-4 md:p-8 max-w-6xl mx-auto pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant pb-6 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/connector/dashboard" className="text-xs text-secondary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 연결자 대시보드
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-3xl">auto_awesome</span>
                        후보 큐레이션 작업
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-1">
                        모임 조건(인원·지역·예산·편의시설) 및 최근 3개월 방문 이력 필터를 거친 추천 후보 3~5곳을 구성하세요.
                    </p>
                </div>

                <div className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-xs font-semibold">
                    요청 모임: <span className="font-bold">삼우 고양 경영자 연합회 (12명)</span>
                </div>
            </div>

            {/* Principles Alert */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-8 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">gavel</span>
                <div className="text-xs space-y-1">
                    <p className="font-bold text-primary text-sm">1.4 공정성 추천 원칙 준수</p>
                    <p className="text-on-surface-variant">
                        광고비나 관계 친밀도는 순위에 반영되지 않으며, 조건 미충족 시 회원사 매장도 후보에서 원천 제외됩니다.
                        최종 전송되는 후보 카드에 추천 근거 태그가 명시됩니다.
                    </p>
                </div>
            </div>

            {/* Main Selection Workbench */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Candidate Pool List (2 cols) */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-on-surface">
                            조건 필터 통과 후보 풀 ({candidatePool.length}곳)
                        </h2>
                        <span className="text-xs text-on-surface-variant font-medium">
                            선택됨: <strong className="text-secondary">{selectedIds.length}</strong> / 5곳
                        </span>
                    </div>

                    <div className="space-y-3">
                        {candidatePool.map((store) => {
                            const isSelected = selectedIds.includes(store.id);
                            return (
                                <div
                                    key={store.id}
                                    onClick={() => toggleSelect(store.id)}
                                    className={`cursor-pointer border rounded-2xl p-5 transition-all ${isSelected
                                        ? "bg-secondary-container/10 border-secondary ring-2 ring-secondary/20 shadow-sm"
                                        : "bg-surface-container-lowest border-outline-variant hover:border-outline"
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${isSelected
                                                    ? "bg-secondary border-secondary text-on-secondary font-bold"
                                                    : "border-outline-variant bg-surface"
                                                    }`}
                                            >
                                                {isSelected ? "✓" : ""}
                                            </span>
                                            <h3 className="font-bold text-on-surface text-base">{store.name}</h3>
                                            {store.memberOwned && (
                                                <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                    회원사 운영
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs text-on-surface-variant font-mono">
                                            신뢰도 {store.trustScore}점
                                        </span>
                                    </div>

                                    <div className="text-xs text-on-surface-variant space-y-1 ml-7">
                                        <p className="font-medium text-on-surface">{store.category} · {store.capacity}</p>
                                        <p className="text-emerald-700 font-medium">✓ {store.parking} · {store.recentVisit}</p>
                                    </div>

                                    {isSelected && (
                                        <div className="mt-4 pt-3 border-t border-outline-variant/60 ml-7">
                                            <label className="block text-[11px] font-bold text-secondary mb-1">
                                                추천 근거 요약 (총무용 알림 카드에 노출)
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={store.reason}
                                                className="w-full text-xs bg-surface-container-low border border-outline-variant rounded-lg p-2 text-on-surface focus:outline-none focus:border-secondary"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Selection Summary Column */}
                <div className="space-y-6">
                    <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 sticky top-20">
                        <h3 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">checklist</span>
                            큐레이션 전송 요약
                        </h3>

                        <p className="text-xs text-on-surface-variant mb-4">
                            선택한 후보 3~5곳이 총무에게 푸시 알림으로 추천 카드 형태로 전송됩니다.
                        </p>

                        <div className="space-y-2 mb-6">
                            {selectedIds.map((id, index) => {
                                const item = candidatePool.find((c) => c.id === id);
                                return (
                                    <div key={id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex items-center justify-between text-xs">
                                        <span className="font-bold text-on-surface">{index + 1}. {item?.name}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleSelect(id);
                                            }}
                                            className="text-on-surface-variant hover:text-red-600 text-xs font-semibold"
                                        >
                                            취소
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={handleSendCuration}
                            disabled={selectedIds.length < 3}
                            className="w-full bg-secondary text-on-secondary hover:bg-secondary/90 disabled:opacity-50 font-bold py-3 rounded-xl shadow-md text-sm flex items-center justify-center gap-2 transition-all"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            총무에게 추천 전송 ({selectedIds.length}곳)
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
