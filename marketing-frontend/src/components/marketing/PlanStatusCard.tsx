"use client";

import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { PlanStatus } from "@/types/marketing";

interface PlanStatusCardProps {
  status: PlanStatus;
  completedSections: number;
  totalSections: number;
  onEdit: () => void;
  onDelete: () => void;
}

export default function PlanStatusCard({
  status,
  completedSections,
  totalSections,
  onEdit,
  onDelete,
}: PlanStatusCardProps) {
  const percent = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="bg-white border border-[#dce5df] rounded-[10px] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[20px] font-bold text-[#193b30]">
          Plan status
        </h3>

        <div className="flex items-center gap-2">
          {/* Badge */}
          {status === "Draft" && (
            <span className="bg-[#fff2db] text-[#97641c] text-[13px] font-bold px-3 py-1 rounded-full">
              Draft
            </span>
          )}

          {status === "Completed" && (
            <div className="flex items-center gap-1.5">
              <span className="bg-[#e2f0e7] text-[#246747] text-[13px] font-bold px-3 py-1 rounded-full">
                Completed
              </span>

              {/* Edit button */}
              <button
                type="button"
                onClick={onEdit}
                title="Edit Plan"
                className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:text-[#2F6B4F] hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Edit2 size={14} />
              </button>

              {/* Delete button */}
              <button
                type="button"
                onClick={onDelete}
                title="Delete Plan"
                className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}

          {status === "Editing" && (
            <span className="bg-[#e8f1f5] text-[#205470] text-[13px] font-bold px-3 py-1 rounded-full">
              Editing
            </span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="text-[13px] text-[#536459] mb-4 min-h-[38px] leading-relaxed">
        {status === "Draft" && (
          <p>
            Complete required fields and select at least one suitable marketing channel.
          </p>
        )}
        {status === "Completed" && (
          <p>
            Your marketing plan is finalized! You can review or edit components anytime.
          </p>
        )}
        {status === "Editing" && (
          <p>
            You are editing your marketing plan. Save changes to return to Completed.
          </p>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#e8eee9] rounded-full h-2.5 overflow-hidden mb-2">
        <div
          className="bg-[#2F6B4F] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Counter */}
      <p className="text-[12px] text-[#64746d]">
        {completedSections} of {totalSections} sections completed ({percent}%)
      </p>
    </div>
  );
}
