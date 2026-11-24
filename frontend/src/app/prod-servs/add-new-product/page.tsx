import Sidebar from "@/components/sidebar/Sidebar-prod-servs";
import TopNavbar from "@/components/TopNavbar";
import { ArrowLeft, ChevronDown } from "lucide-react";

export default function AddProductPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-[#F4F7F2]">
        <TopNavbar title="Products and Services" />

        <main className="min-h-screen bg-[#f0f4ec] px-5 py-6 text-gray-800">
          <div className="mx-auto max-w-full">
        

            {/* Header */}
            <header className="mt-3 flex items-start justify-between">
              <div>
                <h1 className="text-[26px] font-bold text-[#1f4d36]">
                  Add New Product
                </h1>   
              </div>

              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-[11px] font-medium text-gray-800">
                <ArrowLeft size={12} />
                Back to Products
              </button>
            </header>

            {/* Form + summary */}
            <div className="mt-5 grid grid-cols-3 gap-5">
              {/* Left side: form cards */}
              <div className="col-span-2 space-y-3">
                {/* Basic Information */}
                <section className="rounded-xl border border-gray-200 bg-white p-4">
                  <h2 className="text-[13px] font-bold text-[#1f4d36]">
                    Basic Information
                  </h2>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[9px] text-gray-600">Product Name</label>
                      <input
                        defaultValue="Enter Name"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">Product ID</label>
                      <input
                        defaultValue="PD_004"
                        disabled
                        className="mt-1 w-full rounded-lg bg-[#e6ede2] px-3 py-2 text-[11px] text-gray-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">Product Category</label>
                      <div className="relative mt-1">
                        <select
                          defaultValue="Stationery"
                          className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-[11px] outline-none"
                        >
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                        <ChevronDown
                          size={13}
                          className="pointer-events-none absolute right-3 top-2.5 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="text-[9px] text-gray-600">Product Description</label>
                      <textarea
                        defaultValue="Enter description."
                        className="mt-1 h-[63px] w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">
                        Product Image · Optional
                      </label>
                      <div className="mt-1 flex h-[63px] flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-300 bg-[#e6ede2]">
                        <button className="rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-[10px] font-semibold text-gray-800">
                          Choose image
                        </button>
                        <span className="text-[8px] text-gray-600">
                          JPG or PNG · Max file size:    5 MB
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pricing Information */}
                <section className="rounded-xl border border-gray-200 bg-white p-4">
                  <h2 className="text-[13px] font-bold text-[#1f4d36]">
                    Pricing Information
                  </h2>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[9px] text-gray-600">Selling Price (LKR)</label>
                      <input
                        defaultValue="150"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">Cost Price (LKR)</label>
                      <input
                        defaultValue="50"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">
                        Profit per Unit (LKR) · Calculated
                      </label>
                      <input
                        defaultValue="100"
                        disabled
                        className="mt-1 w-full rounded-lg bg-[#e6ede2] px-3 py-2 text-[11px] text-gray-500 outline-none"
                      />
                    </div>
                  </div>
                </section>

                {/* Inventory Information */}
                <section className="rounded-xl border border-gray-200 bg-white p-4">
                  <h2 className="text-[13px] font-bold text-[#1f4d36]">
                    Inventory Information
                  </h2>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[9px] text-gray-600">Initial Stock Quantity</label>
                      <input
                        defaultValue="100"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">Low Stock Alert Level</label>
                      <input
                        defaultValue="10"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-[11px] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-gray-600">Unit of Measurement</label>
                      <div className="relative mt-1">
                        <select
                          defaultValue="Pieces"
                          className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-[11px] outline-none"
                        >
                          <option>Pieces</option>
                          <option>Boxes</option>
                        </select>
                        <ChevronDown
                          size={13}
                          className="pointer-events-none absolute right-3 top-2.5 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right side: product summary */}
              <aside className="h-fit rounded-xl border border-gray-200 bg-white p-4">
                <h2 className="text-[12px] font-bold text-[#1f4d36]">Product Summary</h2>

                <span className="mt-3 inline-block rounded-md bg-[#dfe9dc] px-2.5 py-1 text-[9px] font-medium text-[#1f4d36]">
                  New Product
                </span>

                <h3 className="mt-3 text-[20px] font-bold text-[#1f4d36]">Notebook</h3>
                <p className="mt-1 text-[10px] text-gray-600">PD_004 · Stationery</p>

                <hr className="my-4 border-gray-200" />

                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-600">Selling Price</span>
                  <span className="font-bold text-gray-900">LKR 150</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px]">
                  <span className="text-gray-600">Cost Price</span>
                  <span className="font-bold text-gray-900">LKR 50</span>
                </div>

                <div className="mt-4 rounded-lg bg-[#e6ede2] p-3">
                  <p className="text-[9px] text-gray-600">Profit per Unit</p>
                  <p className="mt-1 text-[16px] font-bold text-[#1f4d36]">LKR 100</p>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px]">
                  <span className="text-gray-600">Initial Stock</span>
                  <span className="font-bold text-gray-900">100 units</span>
                </div>

                <p className="mt-3 text-[8px] text-gray-600">
                  Calculated from your product details.
                </p>
              </aside>
            </div>

            {/* Bottom buttons */}
            <div className="mt-5 flex justify-end gap-3">
              <button className="rounded-lg border border-gray-300 bg-white px-8 py-2.5 text-[11px] font-semibold text-gray-800">
                Cancel
              </button>
              <button className="rounded-lg bg-[#1f5136] px-8 py-2.5 text-[11px] font-semibold text-white">
                Save Product
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}