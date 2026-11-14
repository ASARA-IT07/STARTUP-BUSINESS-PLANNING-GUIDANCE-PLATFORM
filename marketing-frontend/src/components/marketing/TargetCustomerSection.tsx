"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { PROBLEM_OPTIONS, PLATFORM_OPTIONS } from "@/data/marketingData";

interface TargetCustomerSectionProps {
  ageRange: string;
  setAgeRange: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  incomeLevel: string;
  setIncomeLevel: (val: string) => void;
  selectedProblems: string[];
  toggleProblem: (problem: string) => void;
  selectedPlatforms: string[];
  togglePlatform: (platform: string) => void;
  readOnly?: boolean;
}

export default function TargetCustomerSection({
  ageRange,
  setAgeRange,
  location,
  setLocation,
  incomeLevel,
  setIncomeLevel,
  selectedProblems,
  toggleProblem,
  selectedPlatforms,
  togglePlatform,
  readOnly = false,
}: TargetCustomerSectionProps) {
  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[26px] h-[26px] rounded-full bg-[#d4e6dc] flex items-center justify-center shrink-0">
          <span className="text-[#176e51] font-bold text-[13px]">2</span>
        </div>
        <h2 className="text-[20px] font-bold text-[#193b30]">
          Target customer profile
        </h2>
      </div>

      {/* Row 1: Demographics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Age Range */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-[#293832]">
            Age range <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              disabled={readOnly}
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="w-full appearance-none bg-white border border-[#cbd7d0] rounded-md px-3 py-2 text-[14px] text-[#283630] pr-8 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F] disabled:bg-gray-50"
            >
              <option value="18–30">18–30</option>
              <option value="31–45">31–45</option>
              <option value="46–60">46–60</option>
              <option value="All ages">All ages</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-[#293832]">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              disabled={readOnly}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full appearance-none bg-white border border-[#cbd7d0] rounded-md px-3 py-2 text-[14px] text-[#283630] pr-8 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F] disabled:bg-gray-50"
            >
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Western Province">Western Province</option>
              <option value="Colombo District">Colombo District</option>
              <option value="Island-wide Urban">Island-wide Urban</option>
              <option value="Global / Export">Global / Export</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>

        {/* Income Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-[#293832]">
            Income level <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              disabled={readOnly}
              value={incomeLevel}
              onChange={(e) => setIncomeLevel(e.target.value)}
              className="w-full appearance-none bg-white border border-[#cbd7d0] rounded-md px-3 py-2 text-[14px] text-[#283630] pr-8 focus:outline-none focus:ring-2 focus:ring-[#2F6B4F] disabled:bg-gray-50"
            >
              <option value="Any">Any</option>
              <option value="Low to Middle">Low to Middle</option>
              <option value="Middle income">Middle income</option>
              <option value="Upper middle / High">Upper middle / High</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Problem */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-[#293832]">
            Main problem or need <span className="text-red-500">*</span>
          </label>
          <div className="border border-[#cbd7d0] rounded-md p-3 min-h-[110px] flex flex-wrap gap-2 content-start bg-white">
            {PROBLEM_OPTIONS.map((problem) => {
              const isSelected = selectedProblems.includes(problem);
              return (
                <button
                  key={problem}
                  type="button"
                  disabled={readOnly}
                  onClick={() => toggleProblem(problem)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                    isSelected
                      ? "bg-[#e1eee6] text-[#285c43] border border-[#b2d4c1]"
                      : "bg-white text-[#56655c] border border-[#c7d5cc] hover:bg-gray-50"
                  }`}
                >
                  <span>{problem}</span>
                  <span className="font-bold text-[12px]">
                    {isSelected ? "×" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Where do they spend time */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-[#293832]">
            Where do they spend time? <span className="text-red-500">*</span>
          </label>
          <div className="border border-[#cbd7d0] rounded-md p-3 min-h-[110px] flex flex-wrap gap-2 content-start bg-white">
            {PLATFORM_OPTIONS.map((platform) => {
              const isSelected = selectedPlatforms.includes(platform);
              return (
                <button
                  key={platform}
                  type="button"
                  disabled={readOnly}
                  onClick={() => togglePlatform(platform)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                    isSelected
                      ? "bg-[#e1eee6] text-[#285c43] border border-[#b2d4c1]"
                      : "bg-white text-[#56655c] border border-[#c7d5cc] hover:bg-gray-50"
                  }`}
                >
                  <span>{platform}</span>
                  <span className="font-bold text-[12px]">
                    {isSelected ? "×" : "+"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
