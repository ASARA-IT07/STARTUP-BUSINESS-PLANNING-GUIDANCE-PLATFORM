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
    { label: "Dashboard", icon: <LayoutDashboard size={16} />, href: "/" },
    { label: "Tasks", icon: <Circle size={16} />, href: "#" },
    {
      label: "Products and Services",
      icon: <FileText size={16} />,
      href: "/prod-servs/view-products",
    },
    {
      label: "Money",
      icon: <Wallet size={16} />,
      href: "/financial-modelling",
    },
    {
      label: "Marketing",
      icon: <ArrowUpRight size={16} />,
      href: "/marketing",
    },
    { label: "Organization", icon: <House size={16} />, href: "#" },
    { label: "Legal", icon: <Check size={16} />, href: "#" },
  ];

  return (
    <aside className="w-[260px] h-screen sticky top-0 bg-[#F4F4F2] border-r border-gray-200 flex flex-col justify-between shadow-sm shrink-0 overflow-hidden z-20 select-none">
      {/* Top Section */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="pt-8 pb-8">
          <Link href="/">
            <h1 className="text-center text-[30px] font-bold text-[#2F6B4F]">
              Nova
            </h1>
          </Link>
        </div>

        {/* Current Business */}
        <div className="px-6">
          <p className="text-[11px] uppercase font-semibold tracking-wide text-gray-500 mb-4">
            Current Business
          </p>

          <div className="bg-[#739472] rounded-xl px-3 py-1.5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">
                  Willow &amp; Co.
                </p>
                <p className="text-sm text-green-100">
                  Business profile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider above Workspace - matches financial branch exactly */}
        <div className="mx-8 my-4 border-t border-gray-200" />

        {/* Workspace */}
        <div className="px-8">
          <h2 className="text-gray-500 font-bold text-xl mb-2">
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
      </div>

      {/* Bottom Section - Always pinned to the bottom */}
      <div className="px-8 pb-5 pt-2">
        <div className="border-t border-gray-200 mb-3" />
        <div className="space-y-1">
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
    <div className="flex items-center gap-3 text-[#436E58] py-1.5 px-2.5 rounded-lg cursor-pointer hover:bg-[#e8ede9] transition-colors text-[14px] font-medium">
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
    <div className="relative flex items-center gap-3 bg-[#739472] text-white py-2.5 px-3.5 rounded-xl shadow-md">
      <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#245d45] rounded-r" />
      <div className="ml-1">{icon}</div>
      <span className="font-semibold text-[14px]">{label}</span>
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
