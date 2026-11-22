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
  activeItem?:
    | "Dashboard"
    | "Tasks"
    | "Products and Services"
    | "Money"
    | "Marketing"
    | "Organization"
    | "Legal";
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
      : pathname?.startsWith("/prod-servs")
      ? "Products and Services"
      : pathname === "/"
      ? "Dashboard"
      : "Marketing");

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={15} />, href: "/" },
    { label: "Tasks", icon: <Circle size={15} />, href: "#" },
    {
      label: "Products and Services",
      icon: <FileText size={15} />,
      href: "/prod-servs/view-products",
    },
    {
      label: "Money",
      icon: <Wallet size={15} />,
      href: "/financial-modelling",
    },
    {
      label: "Marketing",
      icon: <ArrowUpRight size={15} />,
      href: "/marketing",
    },
    { label: "Organization", icon: <House size={15} />, href: "#" },
    { label: "Legal", icon: <Check size={15} />, href: "#" },
  ];

  return (
    <aside className="w-[250px] lg:w-[260px] h-screen sticky top-0 bg-[#F4F4F2] border-r border-gray-200 flex flex-col justify-between shadow-sm shrink-0 overflow-hidden z-20 select-none">
      {/* Top Section */}
      <div className="flex flex-col min-h-0">
        {/* Logo */}
        <div className="pt-4 pb-2.5">
          <Link href="/">
            <h1 className="text-center text-[26px] font-bold text-[#2F6B4F] tracking-tight">
              Nova
            </h1>
          </Link>
        </div>

        {/* Current Business */}
        <div className="px-5">
          <p className="text-[10px] uppercase font-semibold tracking-wide text-gray-500 mb-1.5">
            Current Business
          </p>

          <div className="bg-[#739472] rounded-xl px-3 py-1.5 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-[13.5px] leading-tight">
                  Willow &amp; Co.
                </p>

                <p className="text-[11px] text-green-100 leading-tight mt-0.5">
                  Business profile
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 my-2.5 border-t border-gray-200" />

        {/* Workspace */}
        <div className="px-5">
          <h2 className="text-gray-500 font-bold text-[12px] uppercase tracking-wider mb-1.5">
            WORKSPACE
          </h2>

          <div className="space-y-0.5">
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
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col shrink-0">
        <div className="mx-5 my-2.5 border-t border-gray-200" />

        <div className="px-5 pb-3.5">
          <div className="space-y-0.5">
            <NavItem icon={<Settings size={15} />} label="Settings" href="#" />
            <NavItem icon={<LogOut size={15} />} label="Log out" href="#" />
          </div>
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
    <div className="flex items-center gap-2.5 text-[#436E58] py-1.5 px-2 rounded-lg cursor-pointer hover:bg-[#e8ede9] transition-colors text-[13px] font-medium">
      {icon}
      <span>{label}</span>
    </div>
  );

  if (href && href !== "#") {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
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
    <div className="relative flex items-center gap-2.5 bg-[#739472] text-white py-1.5 px-3 rounded-xl shadow-md">
      <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#2F6B4F] rounded-r" />
      <div className="ml-1">{icon}</div>
      <span className="font-semibold text-[13px]">{label}</span>
    </div>
  );

  if (href && href !== "#") {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }
  return content;
}
