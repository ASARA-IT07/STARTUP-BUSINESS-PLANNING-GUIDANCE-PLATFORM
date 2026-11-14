"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Circle,
  FileText,
  Wallet,
  ArrowUpRight,
  House,
  Check,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  activeItem?: "Dashboard" | "Tasks" | "Products" | "Money" | "Marketing" | "Organization" | "Legal";
}

export default function Sidebar({ activeItem }: SidebarProps) {
  const pathname = usePathname();

  // Determine active item based on prop or pathname
  const currentActive =
    activeItem ||
    (pathname?.startsWith("/marketing")
      ? "Marketing"
      : pathname?.startsWith("/financial-modelling")
      ? "Money"
      : pathname === "/"
      ? "Dashboard"
      : "Money"); // default fallback

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={16} />, href: "/" },
    { label: "Tasks", icon: <Circle size={16} />, href: "#" },
    { label: "Products and Services", icon: <FileText size={16} />, href: "#" },
    { label: "Money", icon: <Wallet size={16} />, href: "/financial-modelling" },
    { label: "Marketing", icon: <ArrowUpRight size={16} />, href: "/marketing" },
    { label: "Organization", icon: <House size={16} />, href: "#" },
    { label: "Legal", icon: <Check size={16} />, href: "#" },
  ];

  return (
    <aside className="w-[260px] h-screen sticky top-0 bg-[#F4F4F2] border-r border-gray-200 flex flex-col shadow-sm shrink-0 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden z-20">
      {/* Logo */}
      <div className="pt-8 pb-8">
        <Link href="/">
          <h1 className="text-center text-[30px] font-bold text-[#2F6B4F] tracking-tight">
            ASARA
          </h1>
        </Link>
      </div>

      {/* Current Business */}
      <div className="px-6">
        <p className="text-[11px] uppercase font-semibold tracking-wide text-gray-500 mb-4">
          Current Business
        </p>

        <div className="bg-[#739472] rounded-xl px-3 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white text-[15px] leading-tight">
                Willow &amp; Co.
              </p>
              <p className="text-[12px] text-green-100">
                Business profile
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-8 my-4 border-t border-gray-200" />

      {/* Workspace */}
      <div className="flex-1 px-8">
        <h2 className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-3">
          WORKSPACE
        </h2>

        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = currentActive === item.label;
            return isActive ? (
              <ActiveNavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ) : (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            );
          })}
        </div>
      </div>

      <div className="mx-8 mb-6 border-t border-gray-200" />

      {/* Bottom */}
      <div className="px-8 pb-10">
        <div className="space-y-2">
          <NavItem icon={<Settings size={18} />} label="Settings" href="#" />
          <NavItem icon={<LogOut size={18} />} label="Log out" href="#" />
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 text-[#436E58] py-2 px-2 rounded-lg cursor-pointer hover:bg-[#e8ede9] transition-colors">
      {icon}
      <span className="text-[14px] font-medium">{label}</span>
    </div>
  );

  if (href && href !== "#") {
    return <Link href={href} className="block">{content}</Link>;
  }
  return content;
}

function ActiveNavItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="relative flex items-center gap-3 bg-[#739472] text-white py-2.5 px-3 rounded-xl shadow-sm">
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#2F6B4F] rounded-r" />
      <div className="ml-1">{icon}</div>
      <span className="font-semibold text-[14px]">{label}</span>
    </div>
  );

  if (href && href !== "#") {
    return <Link href={href} className="block">{content}</Link>;
  }
  return content;
}
