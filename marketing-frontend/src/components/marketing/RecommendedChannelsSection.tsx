"use client";

import React from "react";
import {
  MessageCircle,
  Share2,
  Mail,
  Search,
  Users,
  TrendingUp,
  Video,
  Cpu,
  Check,
  Megaphone,
} from "lucide-react";
import { BudgetBand, PlanStatus } from "@/types/marketing";
import { RECOMMENDED_CHANNELS } from "@/data/marketingData";

interface RecommendedChannelsSectionProps {
  budgetBand: BudgetBand | null;
  selectedChannels: string[];
  toggleChannel: (channelId: string) => void;
  onFinalize: () => void;
  planStatus: PlanStatus;
}

export default function RecommendedChannelsSection({
  budgetBand,
  selectedChannels,
  toggleChannel,
  onFinalize,
  planStatus,
}: RecommendedChannelsSectionProps) {
  if (!budgetBand) return null;

  // Filter channels applicable to the chosen budget band
  const channels = RECOMMENDED_CHANNELS.filter((ch) =>
    ch.budgetBands.includes(budgetBand)
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "message-circle":
        return <MessageCircle size={18} />;
      case "share-2":
        return <Share2 size={18} />;
      case "mail":
        return <Mail size={18} />;
      case "facebook":
        return <Megaphone size={18} />;
      case "search":
        return <Search size={18} />;
      case "users":
        return <Users size={18} />;
      case "trending-up":
        return <TrendingUp size={18} />;
      case "video":
        return <Video size={18} />;
      case "cpu":
        return <Cpu size={18} />;
      default:
        return <Megaphone size={18} />;
    }
  };

  const isCompleted = planStatus === "Completed";

  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] p-6 shadow-sm transition-all animate-fadeIn">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-[20px] font-bold text-[#193b30]">
          Recommended marketing channels
        </h3>
        <p className="text-[13px] text-[#66756f] mt-0.5">
          Suggestions are tailored to your business type and budget.
        </p>
      </div>

      {/* Subheader Box */}
      <div className="bg-[#f7faf8] border border-[#e2ece5] rounded-lg p-3.5 mb-4">
        <p className="text-[14px] font-bold text-[#193b30]">
          Recommended for {budgetBand} budget
        </p>
        <p className="text-[12px] text-[#64746d]">
          Products · One-time sale
        </p>
      </div>

      {/* Channels List */}
      <div className="divide-y divide-[#e9f0eb] border border-[#e2ece5] rounded-lg overflow-hidden mb-4">
        {channels.map((channel) => {
          const isAdded = selectedChannels.includes(channel.id);
          return (
            <div
              key={channel.id}
              className="p-3.5 flex items-center justify-between gap-4 hover:bg-[#fafcfb] transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#e8f1eb] text-[#2F6B4F] flex items-center justify-center shrink-0">
                  {getIcon(channel.icon)}
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-bold text-[#193b30] truncate">
                    {channel.name}
                  </p>
                  <p className="text-[12px] text-[#64746d] truncate">
                    {channel.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={isCompleted}
                onClick={() => toggleChannel(channel.id)}
                className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                  isAdded
                    ? "bg-[#e2f0e7] text-[#246747] border border-[#b8dec4]"
                    : "bg-white text-[#2F6B4F] border border-[#2F6B4F] hover:bg-[#f0f6f2]"
                } ${isCompleted ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isAdded ? (
                  <>
                    <Check size={14} className="stroke-[2.5]" />
                    <span>Added</span>
                  </>
                ) : (
                  <span>+ Add to plan</span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Rule note */}
      <p className="text-[12px] text-[#64746d] mb-5">
        Suggestions follow fixed rules based on budget band and business type.
      </p>

      {/* Finalize Plan Action */}
      {!isCompleted && (
        <button
          type="button"
          onClick={onFinalize}
          className="w-full bg-[#2F6B4F] hover:bg-[#245840] text-white font-semibold py-3 px-6 rounded-lg text-[15px] shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          {planStatus === "Editing" ? "Save Changes" : "Finalize Plan"}
        </button>
      )}
    </div>
  );
}
