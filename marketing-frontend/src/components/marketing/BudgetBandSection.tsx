"use client";

import React from "react";
import { BudgetBand } from "@/types/marketing";

interface BudgetBandSectionProps {
  selectedBand: BudgetBand | null;
  onSelectBand: (band: BudgetBand) => void;
  readOnly?: boolean;
}

export default function BudgetBandSection({
  selectedBand,
  onSelectBand,
  readOnly = false,
}: BudgetBandSectionProps) {
  const bands: { band: BudgetBand; label: string; range: string }[] = [
    {
      band: "Low",
      label: "Low",
      range: "Under LKR 25,000",
    },
    {
      band: "Medium",
      label: "Medium",
      range: "LKR 25,000 to 100,000",
    },
    {
      band: "High",
      label: "High",
      range: "Over LKR 100,000",
    },
  ];

  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-[26px] h-[26px] rounded-full bg-[#d4e6dc] flex items-center justify-center shrink-0">
          <span className="text-[#176e51] font-bold text-[13px]">3</span>
        </div>
        <h2 className="text-[20px] font-bold text-[#193b30]">
          Marketing budget band
        </h2>
      </div>

      <p className="text-[13px] text-[#66756f] ml-9 mb-4">
        Choose an approximate monthly budget for marketing activities.
      </p>

      {/* Radio options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {bands.map(({ band, label, range }) => {
          const isSelected = selectedBand === band;
          return (
            <button
              key={band}
              type="button"
              disabled={readOnly}
              onClick={() => onSelectBand(band)}
              className={`flex items-center gap-3.5 p-3.5 rounded-[9px] border text-left transition-all ${
                isSelected
                  ? "border-[#2F6B4F] bg-[#f2f7f4] ring-1 ring-[#2F6B4F]"
                  : "border-[#d5e3d9] bg-white hover:border-[#b5cbbe]"
              }`}
            >
              {/* Custom Radio Circle */}
              <div
                className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? "border-[#2F6B4F] bg-[#2F6B4F]"
                    : "border-[#9bb3a5] bg-white"
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>

              <div>
                <p className="font-bold text-[15px] text-[#193b30] leading-tight">
                  {label}
                </p>
                <p className="text-[11px] text-[#64746d] mt-0.5">
                  {range}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
