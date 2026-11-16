"use client";

import React from "react";

interface VisionMissionSectionProps {
  vision: string;
  setVision: (val: string) => void;
  mission: string;
  setMission: (val: string) => void;
  readOnly?: boolean;
}

export default function VisionMissionSection({
  vision,
  setVision,
  mission,
  setMission,
  readOnly = false,
}: VisionMissionSectionProps) {
  const MAX_CHARS = 500;

  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] p-6 shadow-sm">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[26px] h-[26px] rounded-full bg-[#d4e6dc] flex items-center justify-center shrink-0">
          <span className="text-[#176e51] font-bold text-[13px]">1</span>
        </div>
        <h2 className="text-[20px] font-bold text-[#193b30]">
          Vision and Mission
        </h2>
      </div>

      {/* Grid of Text Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-[#293832]">
            Vision <span className="text-red-500">*</span>
          </label>
          <p className="text-[13px] text-[#66756f]">
            Where do you see your business in the future?
          </p>
          <div className="relative mt-1">
            <textarea
              disabled={readOnly}
              value={vision}
              onChange={(e) => setVision(e.target.value.slice(0, MAX_CHARS))}
              placeholder="e.g. To become a trusted, customer-focused business serving customers across Sri Lanka."
              rows={4}
              className="w-full bg-white border border-[#cbd7d0] rounded-md p-3 text-[14px] text-[#283630] focus:outline-none focus:ring-2 focus:ring-[#2F6B4F] focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-600 resize-none"
            />
            <div className="flex justify-end mt-1">
              <span className="text-[12px] text-[#64746d]">
                {vision.length}/{MAX_CHARS}
              </span>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-[#293832]">
            Mission <span className="text-red-500">*</span>
          </label>
          <p className="text-[13px] text-[#66756f]">
            What will you do to achieve this vision?
          </p>
          <div className="relative mt-1">
            <textarea
              disabled={readOnly}
              value={mission}
              onChange={(e) => setMission(e.target.value.slice(0, MAX_CHARS))}
              placeholder="e.g. Deliver reliable products and service while building lasting customer relationships."
              rows={4}
              className="w-full bg-white border border-[#cbd7d0] rounded-md p-3 text-[14px] text-[#283630] focus:outline-none focus:ring-2 focus:ring-[#2F6B4F] focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-600 resize-none"
            />
            <div className="flex justify-end mt-1">
              <span className="text-[12px] text-[#64746d]">
                {mission.length}/{MAX_CHARS}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
