import React from "react";
import { Store, Tag, DollarSign } from "lucide-react";

export default function BusinessTypeBanner() {
  return (
    <div className="bg-[#f0f4ef] border border-[#d2ded6] rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#2F6B4F] text-white flex items-center justify-center shadow-sm">
          <Store size={20} />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#64746d]">
            Overview
          </span>
          <h2 className="text-[16px] font-bold text-[#193b30]">
            Business type
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {/* Sell Type */}
        <div className="bg-white border border-[#d5e3d9] rounded-lg px-4 py-2 flex items-center gap-3 min-w-[170px] shadow-sm">
          <div className="w-7 h-7 rounded-full bg-[#e5eee8] text-[#2F6B4F] flex items-center justify-center shrink-0">
            <Tag size={14} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#64746d]">
              SELL TYPE
            </p>
            <p className="text-[14px] font-bold text-[#193b30]">
              Products
            </p>
          </div>
        </div>

        {/* Revenue Type */}
        <div className="bg-white border border-[#d5e3d9] rounded-lg px-4 py-2 flex items-center gap-3 min-w-[170px] shadow-sm">
          <div className="w-7 h-7 rounded-full bg-[#e5eee8] text-[#2F6B4F] flex items-center justify-center shrink-0">
            <DollarSign size={14} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#64746d]">
              REVENUE TYPE
            </p>
            <p className="text-[14px] font-bold text-[#193b30]">
              One-time sale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
