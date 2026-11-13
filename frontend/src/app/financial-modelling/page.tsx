import Sidebar from "@/components/sidebar/Sidebar";
import TopNavbar from "@/components/TopNavbar";

export default function FinancialModellingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar />

        <main className="p-8">
          <h1>Pricing & Sales Assumptions</h1>
        </main>
      </div>
    </div>
  );
}