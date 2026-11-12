import Sidebar from "@/components/sidebar/Sidebar";

export default function FinancialModellingPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        Main Content
      </main>
    </div>
  );
}