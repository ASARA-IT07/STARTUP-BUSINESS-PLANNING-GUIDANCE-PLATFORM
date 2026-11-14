"use client";

import React, { useState } from "react";
import { LayoutGrid, Search, ChevronDown } from "lucide-react";
import { ServiceProvider } from "@/types/marketing";
import { SERVICE_PROVIDERS } from "@/data/marketingData";

interface ServiceProviderDirectoryProps {
  onSelectProvider: (provider: ServiceProvider) => void;
}

export default function ServiceProviderDirectory({
  onSelectProvider,
}: ServiceProviderDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Any category");
  const [selectedBizType, setSelectedBizType] = useState("Products");

  // Filtering logic
  const filteredProviders = SERVICE_PROVIDERS.filter((provider) => {
    // Search query matching
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.categories.some((c) =>
        c.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Category filter
    const matchesCategory =
      selectedCategory === "Any category" ||
      provider.categories.includes(selectedCategory);

    // Business type filter
    const matchesBizType =
      selectedBizType === "Any" ||
      provider.businessTypes.includes(selectedBizType);

    return matchesSearch && matchesCategory && matchesBizType;
  });

  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] overflow-hidden shadow-sm flex flex-col">
      {/* Directory Header */}
      <div className="p-4 border-b border-[#e9f0eb] flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#e8f1eb] text-[#2F6B4F] flex items-center justify-center shrink-0">
          <LayoutGrid size={18} />
        </div>
        <h3 className="text-[18px] font-bold text-[#193b30]">
          Service provider directory
        </h3>
      </div>

      {/* Search Bar */}
      <div className="p-3 border-b border-[#e9f0eb]">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search providers…"
            className="w-full pl-9 pr-3 py-1.5 bg-[#fbfdfc] border border-[#cbd7d0] rounded-md text-[13px] text-[#283630] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2F6B4F]"
          />
        </div>
      </div>

      {/* Filter Row */}
      <div className="px-3 py-2.5 border-b border-[#e9f0eb] grid grid-cols-2 gap-2 bg-[#f9fbf9]">
        {/* Category */}
        <div>
          <label className="text-[10px] font-bold uppercase text-[#64746d] block mb-1">
            CATEGORY
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-[#cbd7d0] rounded px-2.5 py-1 text-[12px] text-[#293832] pr-6 focus:outline-none focus:ring-1 focus:ring-[#2F6B4F]"
            >
              <option value="Any category">Any category</option>
              <option value="Graphic design">Graphic design</option>
              <option value="Content">Content</option>
              <option value="Web development">Web development</option>
              <option value="Service">Service</option>
            </select>
            <ChevronDown
              size={12}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Business Type */}
        <div>
          <label className="text-[10px] font-bold uppercase text-[#64746d] block mb-1">
            BUSINESS TYPE
          </label>
          <div className="relative">
            <select
              value={selectedBizType}
              onChange={(e) => setSelectedBizType(e.target.value)}
              className="w-full appearance-none bg-white border border-[#cbd7d0] rounded px-2.5 py-1 text-[12px] text-[#293832] pr-6 focus:outline-none focus:ring-1 focus:ring-[#2F6B4F]"
            >
              <option value="Products">Products</option>
              <option value="Services">Services</option>
              <option value="Any">Any</option>
            </select>
            <ChevronDown
              size={12}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Providers List */}
      <div className="divide-y divide-[#eef4f0] max-h-[380px] overflow-y-auto">
        {filteredProviders.length === 0 ? (
          <div className="p-6 text-center text-[13px] text-gray-400">
            No service providers match the current filters.
          </div>
        ) : (
          filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="p-3.5 flex items-center justify-between gap-3 hover:bg-[#fafcfb] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Logo circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] shrink-0"
                  style={{ backgroundColor: provider.logoBg }}
                >
                  {provider.initials}
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <h4 className="text-[13px] font-bold text-[#193b30] truncate">
                    {provider.name}
                  </h4>
                  <p className="text-[11px] text-[#64746d] truncate">
                    {provider.tagline}
                  </p>
                  <div className="flex items-center gap-1 mt-1 flex-wrap">
                    {provider.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="bg-[#f2f2f7] text-[#64746d] text-[9px] px-1.5 py-0.5 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Button */}
              <button
                type="button"
                onClick={() => onSelectProvider(provider)}
                className="border border-[#176e51] hover:bg-[#176e51] hover:text-white text-[#176e51] text-[12px] font-medium px-3 py-1 rounded transition-colors shrink-0 cursor-pointer"
              >
                View
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer note */}
      <div className="p-3 bg-[#fbfdfc] border-t border-[#eef4f0]">
        <p className="text-[11px] text-[#64746d] leading-tight">
          Filters use your business type and selected service category to narrow suggestions.
        </p>
      </div>
    </div>
  );
}
