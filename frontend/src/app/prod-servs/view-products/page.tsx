import Sidebar from "@/components/sidebar/Sidebar-prod-servs";
import TopNavbar from "@/components/TopNavbar";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Eye,
  Package,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

// sample data (just for the design)
const products = [
  { id: "PD_001", name: "Notebook", category: "Stationery", price: 150, stock: 100, status: "Active" },
  { id: "PD_002", name: "Notebook", category: "Books", price: 150, stock: 1, status: "Low Stock" },
  { id: "PD_003", name: "Notebook", category: "Stationery", price: 150, stock: 0, status: "Out of Stock" },
];

// colours for each status badge
const statusColors: Record<string, string> = {
  Active: "bg-[#d9eadb] text-[#2f6b3f]",
  "Low Stock": "bg-[#fbe9b8] text-[#9a6a00]",
  "Out of Stock": "bg-[#f8d0d0] text-[#b42318]",
};

// colours for the stock number
function stockColor(stock: number) {
  if (stock === 0) return "text-red-600";
  if (stock < 10) return "text-amber-700";
  return "text-gray-700";
}

export default function ProductsAndServicesPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-[#F4F7F2]">
        <TopNavbar title="Products & Services" />

        <main className="min-h-screen bg-[#f0f4ec] px-5 py-6 text-gray-800">
          <div className="mx-auto max-w-full">
            {/* Header */}
            <header className="flex items-start justify-between">
              <div>
                <h1 className="text-[26px] font-bold text-[#1f4d36]">
                  Products 
                </h1>
                <p className="mt-1 text-[12px] text-gray-600">
                  Manage your products and services in one place.
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-lg bg-[#1f5136] px-6 py-3 text-[12px] font-semibold text-white">
                <Plus size={14} />
                Add New
              </button>
            </header>

            {/* Tabs */}
            <div className="mt-6 flex items-center justify-between">
              <div className="inline-flex rounded-xl bg-[#dfe9dc] p-1">
                <button className="rounded-lg px-6 py-2 text-[11px] font-semibold text-[#1f4d36]">
                  All
                </button>
                <button className="rounded-lg bg-[#1f5136] px-6 py-2 text-[11px] font-semibold text-white">
                  Products
                </button>
                <button className="rounded-lg px-6 py-2 text-[11px] font-semibold text-[#1f4d36]">
                  Services
                </button>
              </div>
              <span className="text-[10px] text-gray-600">Your catalog, organized.</span>
            </div>

            {/* Stat cards for each product*/}
            <section className="mt-5 grid grid-cols-3 gap-3">
              <div className="relative rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-[11px] text-gray-700">Total Products</p>
                <p className="mt-1 text-[22px] font-bold text-[#1f4d36]">12</p>
                <p className="mt-1 text-[9px] text-gray-600">Across your product catalog</p>
                <div className="absolute right-4 top-4 flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#dfe9dc]">
                  <Package size={15} className="text-[#1f5136]" />
                </div>
              </div>

              <div className="relative rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-[11px] text-gray-700">Active Products</p>
                <p className="mt-1 text-[22px] font-bold text-[#1f4d36]">10</p>
                <p className="mt-1 text-[9px] text-gray-600">Currently available for sale</p>
                <div className="absolute right-4 top-4 flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#d9eadb]">
                  <Check size={15} className="text-green-600" />
                </div>
              </div>

              <div className="relative rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-[11px] text-gray-700">Low Stock</p>
                <p className="mt-1 text-[22px] font-bold text-[#1f4d36]">2</p>
                <p className="mt-1 text-[9px] text-gray-600">Products that need attention</p>
                <div className="absolute right-4 top-4 flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#fbe9b8]">
                  <AlertTriangle size={15} className="text-amber-600" />
                </div>
              </div>
            </section>

            {/* Table card */}
            <section className="mt-5 rounded-xl border border-gray-200 bg-white">
              {/* Table top bar */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-bold text-[#1f4d36]">Products</h2>
                  <span className="rounded-md bg-[#dfe9dc] px-2 py-0.5 text-[10px] font-semibold text-[#1f4d36]">
                    12
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Search box */}
                  <div className="flex w-[195px] items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
                    <Search size={13} className="text-gray-500" />
                    <input
                      placeholder="Search by product name or ID"
                      className="w-full text-[10px] outline-none"
                    />
                  </div>

                  {/* Category dropdown */}
                  <div className="flex w-[121px] items-center justify-between rounded-lg border border-gray-300 px-3 py-2 text-[10px] text-gray-700">
                    All categories
                    <ChevronDown size={13} />
                  </div>
                </div>
              </div>

              {/* Table */}
              <table className="w-full text-left text-[10px]">
                <thead>
                  <tr className="bg-[#eaf0e6] text-gray-700">
                    <th className="py-3 pl-5 font-medium">Product ID</th>
                    <th className="px-4 py-3 font-medium">Product Name</th>
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium">Selling Price</th>
                    <th className="px-4 py-3 font-medium">Stock Quantity</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-gray-200">
                      <td className="py-4 pl-5 text-gray-700">{p.id}</td>
                      <td className="px-4 py-4 font-bold text-gray-900">{p.name}</td>
                      <td className="px-4 py-4 text-gray-700">{p.category}</td>
                      <td className="px-4 py-4 text-gray-700">LKR {p.price}</td>
                      <td className={`px-4 py-4 ${stockColor(p.material)}`}>{p.material} units</td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-[9px] font-medium ${statusColors[p.status]}`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Eye size={13} />
                          <Pencil size={13} />
                          <Trash2 size={13} className="text-red-600" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-4 text-[9px] text-gray-600">
                <span>Showing 1–4 of 12 products</span> //12 should change with the number of products
                <span>Sample product list</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}