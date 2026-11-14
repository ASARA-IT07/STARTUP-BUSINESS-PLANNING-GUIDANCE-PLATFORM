"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import BusinessTypeBanner from "@/components/marketing/BusinessTypeBanner";
import VisionMissionSection from "@/components/marketing/VisionMissionSection";
import TargetCustomerSection from "@/components/marketing/TargetCustomerSection";
import BudgetBandSection from "@/components/marketing/BudgetBandSection";
import RecommendedChannelsSection from "@/components/marketing/RecommendedChannelsSection";
import PlanStatusCard from "@/components/marketing/PlanStatusCard";
import ServiceProviderDirectory from "@/components/marketing/ServiceProviderDirectory";
import ProviderProfileModal from "@/components/marketing/ProviderProfileModal";
import DeleteConfirmationModal from "@/components/marketing/DeleteConfirmationModal";
import { BudgetBand, PlanStatus, ServiceProvider } from "@/types/marketing";

export default function MarketingPage() {
  // Form State (Initialized with sensible defaults matching Figma design prototype)
  const [vision, setVision] = useState(
    "To become a trusted, customer-focused business serving customers across Sri Lanka."
  );
  const [mission, setMission] = useState(
    "Deliver reliable products and service while building lasting customer relationships."
  );

  const [ageRange, setAgeRange] = useState("18–30");
  const [location, setLocation] = useState("Sri Lanka");
  const [incomeLevel, setIncomeLevel] = useState("Any");

  const [selectedProblems, setSelectedProblems] = useState<string[]>([
    "High product prices",
    "Limited availability",
    "Poor service",
  ]);

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "Facebook",
    "Instagram",
    "WhatsApp",
  ]);

  const [budgetBand, setBudgetBand] = useState<BudgetBand | null>(null);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [status, setStatus] = useState<PlanStatus>("Draft");

  // Modal states
  const [activeProvider, setActiveProvider] = useState<ServiceProvider | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Chip togglers
  const toggleProblem = (problem: string) => {
    if (status === "Completed") return;
    setSelectedProblems((prev) =>
      prev.includes(problem)
        ? prev.filter((p) => p !== problem)
        : [...prev, problem]
    );
  };

  const togglePlatform = (platform: string) => {
    if (status === "Completed") return;
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSelectBand = (band: BudgetBand) => {
    if (status === "Completed") return;
    setBudgetBand(band);
    // If switching bands and no channel selected yet, pre-add the top recommended channel
    if (selectedChannels.length === 0) {
      if (band === "Low") setSelectedChannels(["whatsapp-facebook-groups"]);
      if (band === "Medium") setSelectedChannels(["paid-meta-ads"]);
      if (band === "High") setSelectedChannels(["multi-channel-paid-ads"]);
    }
  };

  const toggleChannel = (channelId: string) => {
    if (status === "Completed") return;
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  // Section completion calculation
  const isSection1Complete = vision.trim().length > 0 && mission.trim().length > 0;
  const isSection2Complete =
    ageRange !== "" &&
    location !== "" &&
    incomeLevel !== "" &&
    selectedProblems.length > 0 &&
    selectedPlatforms.length > 0;
  const isSection3Complete = budgetBand !== null;
  const isSection4Complete = selectedChannels.length > 0;

  const completedSectionsCount =
    (isSection1Complete ? 1 : 0) +
    (isSection2Complete ? 1 : 0) +
    (isSection3Complete ? 1 : 0) +
    (isSection4Complete ? 1 : 0);

  // Finalize / Edit / Delete handlers
  const handleFinalize = () => {
    if (!budgetBand) {
      alert("Please select a marketing budget band first.");
      return;
    }
    if (selectedChannels.length === 0) {
      alert("Please select at least one marketing channel to finalize your plan.");
      return;
    }
    setStatus("Completed");
  };

  const handleEdit = () => {
    setStatus("Editing");
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
    setStatus("Draft");
    setBudgetBand(null);
    setSelectedChannels([]);
  };

  const isReadOnly = status === "Completed";

  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F4F2]">
      {/* Shared Reusable Sidebar */}
      <Sidebar activeItem="Marketing" />

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-hidden flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between sticky top-0 z-10 shadow-xs shrink-0">
          <div>
            <h1 className="text-[28px] font-bold text-[#295f5c] tracking-tight">
              Marketing Planning
            </h1>
            <p className="text-[14px] text-gray-500 mt-0.5">
              Shape your goals, audience and marketing channels.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4e6dc] border-2 border-[#2F6B4F] text-[#245d45] font-bold text-[18px] flex items-center justify-center shadow-xs">
              U
            </div>
          </div>
        </header>

        {/* Workspace Body: Center (Scrollable Form) & Right (Fixed Sidebar) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Center Column: Form & Recommendations (Scrollable, scrollbar hidden) */}
          <main className="flex-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-8 space-y-6">
            <div className="max-w-[760px] mx-auto space-y-6">
              {/* Overview: Business Type Context */}
              <BusinessTypeBanner />

              {/* Section 1: Vision and Mission */}
              <VisionMissionSection
                vision={vision}
                setVision={setVision}
                mission={mission}
                setMission={setMission}
                readOnly={isReadOnly}
              />

              {/* Section 2: Target customer profile */}
              <TargetCustomerSection
                ageRange={ageRange}
                setAgeRange={setAgeRange}
                location={location}
                setLocation={setLocation}
                incomeLevel={incomeLevel}
                setIncomeLevel={setIncomeLevel}
                selectedProblems={selectedProblems}
                toggleProblem={toggleProblem}
                selectedPlatforms={selectedPlatforms}
                togglePlatform={togglePlatform}
                readOnly={isReadOnly}
              />

              {/* Section 3: Marketing budget band */}
              <BudgetBandSection
                selectedBand={budgetBand}
                onSelectBand={handleSelectBand}
                readOnly={isReadOnly}
              />

              {/* Dynamic Rule-based Recommended Marketing Channels */}
              {budgetBand && (
                <RecommendedChannelsSection
                  budgetBand={budgetBand}
                  selectedChannels={selectedChannels}
                  toggleChannel={toggleChannel}
                  onFinalize={handleFinalize}
                  planStatus={status}
                />
              )}
            </div>
          </main>

          {/* Right Column (Status & Directory): Fixed, never scrolls with the form, scrollbar hidden */}
          <aside className="w-[440px] 2xl:w-[480px] shrink-0 p-8 space-y-6 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#F4F4F2]">
            {/* Plan Status Card */}
            <PlanStatusCard
              status={status}
              completedSections={completedSectionsCount}
              totalSections={4}
              onEdit={handleEdit}
              onDelete={() => setIsDeleteModalOpen(true)}
            />

            {/* Service Provider Directory */}
            <ServiceProviderDirectory
              onSelectProvider={(p) => setActiveProvider(p)}
            />
          </aside>
        </div>
      </div>

      {/* Provider Details Modal / Overlay */}
      <ProviderProfileModal
        provider={activeProvider}
        onClose={() => setActiveProvider(null)}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
