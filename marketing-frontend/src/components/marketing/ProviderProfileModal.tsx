"use client";

import React from "react";
import {
  X,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  MapPin,
} from "lucide-react";
import { ServiceProvider } from "@/types/marketing";

interface ProviderProfileModalProps {
  provider: ServiceProvider | null;
  onClose: () => void;
}

export default function ProviderProfileModal({
  provider,
  onClose,
}: ProviderProfileModalProps) {
  if (!provider) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-200">
        {/* Modal Top Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[17px] font-bold text-[#193b30]">
            Provider Profile
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Provider Identity Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm"
              style={{ backgroundColor: provider.logoBg }}
            >
              {provider.initials}
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#193b30] leading-tight">
                {provider.name}
              </h2>
              <p className="text-[13px] text-[#64746d] mt-0.5">
                {provider.tagline}
              </p>
              <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
                {provider.categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-[#f2f2f7] text-[#55645e] text-[10px] font-medium px-2 py-0.5 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-6">
          {/* About */}
          <div>
            <h4 className="text-[14px] font-bold text-[#193b30] uppercase tracking-wider mb-2">
              About Provider
            </h4>
            <p className="text-[13px] text-[#4f5f56] leading-relaxed">
              {provider.about}
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Services Offered */}
          <div>
            <h4 className="text-[14px] font-bold text-[#193b30] uppercase tracking-wider mb-3">
              Services Offered
            </h4>
            <div className="space-y-3">
              {provider.services.map((svc, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-[#2F6B4F] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-[#193b30]">
                      {svc.title}
                    </p>
                    <p className="text-[12px] text-[#64746d] mt-0.5">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Contact Details */}
          <div>
            <h4 className="text-[14px] font-bold text-[#193b30] uppercase tracking-wider mb-3">
              Contact Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email */}
              <div className="flex items-center gap-2.5 text-[12px] text-[#44554b]">
                <Mail size={15} className="text-[#2F6B4F] shrink-0" />
                <span className="truncate">{provider.contacts.email}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 text-[12px] text-[#44554b]">
                <Phone size={15} className="text-[#2F6B4F] shrink-0" />
                <span>{provider.contacts.phone}</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5 text-[12px] text-[#44554b]">
                <MessageSquare size={15} className="text-[#2F6B4F] shrink-0" />
                <span>{provider.contacts.whatsapp}</span>
              </div>

              {/* Facebook / Web */}
              <div className="flex items-center gap-2.5 text-[12px] text-[#44554b]">
                <Globe size={15} className="text-[#2F6B4F] shrink-0" />
                <span className="truncate">{provider.contacts.facebook}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-[12px] text-[#44554b] sm:col-span-2">
                <MapPin size={15} className="text-[#2F6B4F] shrink-0" />
                <span>{provider.contacts.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
