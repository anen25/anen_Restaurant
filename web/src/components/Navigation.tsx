"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { label: "멀티모임 허브", href: "/hub", icon: "grid_view" },
        { label: "추천 후보", href: "/recommendations", icon: "auto_awesome" },
        { label: "출결 대시보드", href: "/dashboard", icon: "analytics" },
        { label: "재무보고", href: "/finance", icon: "payments" },
        { label: "연결자 포털", href: "/connector/dashboard", icon: "hub" },
        { label: "회장 관전", href: "/president", icon: "visibility" },
        { label: "운영자 허브", href: "/admin", icon: "shield" },
    ];

    return (
        <>
            {/* Top Header Navigation */}
            <header className="sticky top-0 z-50 w-full bg-surface-container-lowest border-b border-outline-variant px-margin-mobile md:px-margin-desktop h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
                        <span className="font-headline text-headline-md tracking-tight">아는 식당</span>
                    </Link>
                    <span className="hidden sm:inline-block text-xs font-label-mono bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
                        Justified Prestige
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-2.5 py-1.5 rounded-lg font-body-md text-xs font-medium transition-colors flex items-center gap-1 ${isActive
                                    ? "bg-secondary text-on-secondary font-bold"
                                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-base">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        href="/apply"
                        className="bg-primary text-on-primary text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        가입 신청
                    </Link>
                    <Link
                        href="/partner"
                        className="border border-outline-variant text-on-surface-variant text-xs font-medium px-3 py-2 rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">storefront</span>
                        식당 파트너
                    </Link>
                </div>
            </header>

            {/* Bottom Navigation for Mobile */}
            <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant h-16 flex justify-around items-center px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center text-xs px-2 py-1 rounded-lg transition-transform active:scale-95 ${isActive
                                ? "text-secondary font-bold"
                                : "text-on-surface-variant hover:text-on-surface"
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                            <span className="font-label-mono text-[10px] mt-0.5">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
