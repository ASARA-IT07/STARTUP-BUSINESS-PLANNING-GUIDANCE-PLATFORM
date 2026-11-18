import Sidebar from "@/components/sidebar/Sidebar";
import TopNavbar from "@/components/TopNavbar";

export default function PricingSalesAssumptionsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar title="Financial Modelling" />

<main className="flex-1 bg-[#EDF2EA] p-8">
  <h1 className="text-4xl font-bold text-[#2E6B57]">
    Pricing & Sales Assumptions
  </h1>

  <p className="mt-3 text-gray-600">
    Understand your earning potential.
  </p>

  <div className="mt-10 grid grid-cols-2 gap-8">
    {/* Left Card for the product and service pricing*/}
    <div>
      <h2 className="mb-4 text-xl font-semibold text-[#1F4D3F]">
        Product and Service Pricing
      </h2>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-2xl font-bold text-[#1F4D3F]">
          Configure Pricing & Sales
        </h3>

        <div className="space-y-5 text-[#1F4D3F]">
          <div>
            <label className="mb-2 block font-medium text-[#1F4D3F]">
              Select Product or Service
            </label>
            <select className="w-full rounded-xl border p-3">
              <option>Atlas Pen (PD_001)</option>
              <option>Book (PD_002)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-medium">
                Selling price per unit
              </label>
              <input
                type="number"
                placeholder="20.00"
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Expected monthly sales
              </label>
              <input
                type="number"
                placeholder="500"
                className="w-full rounded-xl border p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-medium">
                Monthly sales growth
              </label>
              <input
                type="number"
                placeholder="0%"
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Projection period
              </label>
              <select className="w-full rounded-xl border p-3">
                <option>12 months</option>
                <option>24 months</option>
                <option>36 months</option>
              </select>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-5">
            <p className="text-sm text-gray-500">
              Atlas Pen monthly revenue
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span>500 units × 20.00</span>

              <span className="text-2xl font-bold text-[#2E6B57]">
                10,000.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Card */}
    <div>
      <h2 className="mb-4 text-xl font-semibold text-[#1F4D3F]">
        Sales Projection Summary
      </h2>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          Revenue Forecast
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Based on your current assumptions
        </p>

        <div className="mt-6 rounded-xl bg-green-50 p-5">
          <p className="text-sm text-gray-500">
            Projected monthly revenue
          </p>

          <p className="mt-2 text-4xl font-bold text-[#2E6B57]">
            15,000.00
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Projected annual revenue
          </p>

          <p className="mt-2 text-3xl font-bold text-[#2E6B57]">
            180,000.00
          </p>
        </div>

        <hr className="my-6" />

        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Atlas Pen</p>
              <p className="text-sm text-gray-500">
                500 units × 20.00
              </p>
            </div>

            <span>10,000.00</span>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="font-medium">Book</p>
              <p className="text-sm text-gray-500">
                100 units × 50.00
              </p>
            </div>

            <span>5,000.00</span>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button className="rounded-lg border px-5 py-2">
            Cancel
          </button>

          <button className="rounded-lg bg-[#2E6B57] px-5 py-2 text-white">
            Save assumptions
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
      </div>
    </div>
  );
}