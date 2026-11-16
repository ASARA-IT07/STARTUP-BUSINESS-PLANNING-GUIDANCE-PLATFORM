export type BudgetBand = "Low" | "Medium" | "High";

export type PlanStatus = "Draft" | "Completed" | "Editing";

export interface MarketingChannel {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "organic" | "paid" | "retention" | "brand";
  budgetBands: BudgetBand[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  tagline: string;
  initials: string;
  logoBg: string;
  categories: string[];
  businessTypes: string[];
  about: string;
  services: {
    title: string;
    description: string;
  }[];
  contacts: {
    email: string;
    phone: string;
    whatsapp: string;
    facebook: string;
    location: string;
  };
}

export interface MarketingPlanState {
  vision: string;
  mission: string;
  ageRange: string;
  location: string;
  incomeLevel: string;
  selectedProblems: string[];
  selectedPlatforms: string[];
  budgetBand: BudgetBand | null;
  selectedChannels: string[];
  status: PlanStatus;
}
