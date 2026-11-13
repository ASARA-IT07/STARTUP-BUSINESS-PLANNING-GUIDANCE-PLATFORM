"use client";

import { useState, type FormEvent } from "react";

type TopNavbarProps = {
  title?: string;
  userInitial?: string;
  hasUnreadNotifications?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  onProfileClick?: () => void;
  onNotificationsClick?: () => void;
  className?: string;
};

export default function TopNavbar({
  title = "Money - Your Wallet",
  userInitial = "U",
  hasUnreadNotifications = false,
  searchPlaceholder = "Search",
  onSearch,
  onProfileClick,
  onNotificationsClick,
  className = "",
}: TopNavbarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header
      className={`flex h-[88px] w-full shrink-0 items-center justify-between border-b-2 border-[#c3cfbf] bg-white px-8 shadow-[0_2px_6px_rgba(47,93,80,0.08)] ${className}`}
    >
      <h1 className="text-xl font-bold tracking-tight text-[#2a6355]">
        {title}
      </h1>

      <div className="flex items-center gap-4">
        <form
          role="search"
          onSubmit={handleSubmit}
          className="flex h-10 w-[280px] items-center gap-2 rounded-full border border-[#d3dccd] bg-[#f3f6f1] px-4 text-[#5f7a6d] transition focus-within:border-[#3f6b4a] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5b8461]/25"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label="Search"
            className="w-full bg-transparent text-sm text-[#1f4d3f] outline-none placeholder:text-[#6b7f74]"
          />
        </form>

        <button
          type="button"
          onClick={onProfileClick}
          aria-label="Open user profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#5b8461] bg-[#8aa893] text-[15px] font-bold text-[#1f4d3f] shadow-[0_3px_5px_rgba(47,93,80,0.3)] transition hover:bg-[#7c9b86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6b4a] focus-visible:ring-offset-2"
        >
          {userInitial}
        </button>

        <button
          type="button"
          onClick={onNotificationsClick}
          aria-label={
            hasUnreadNotifications
              ? "Notifications, unread messages"
              : "Notifications"
          }
          className="relative flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#5b8461] bg-[#8aa893] text-[#1f4d3f] shadow-[0_3px_5px_rgba(47,93,80,0.3)] transition hover:bg-[#7c9b86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6b4a] focus-visible:ring-offset-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />
          </svg>
          {hasUnreadNotifications && (
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#3f6b4a]"
            />
          )}
        </button>
      </div>
    </header>
  );
}