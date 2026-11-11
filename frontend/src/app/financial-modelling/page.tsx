'use client';
import React, { useState } from 'react'

export default function FinancialModellingPage() {
  // State for pricing configuration
  const [sellingPrice, setSellingPrice] = useState('0')
  const [expectedMonthlySales, setExpectedMonthlySales] = useState('0')
  const [monthlySalesGrowth, setMonthlySalesGrowth] = useState('0')
  const [projectionPeriod, setProjectionPeriod] = useState('12')
  const [selectedProduct, setSelectedProduct] = useState('Atlas Pen')

  // Parsed numeric values
  const price = parseFloat(sellingPrice) || 0
  const monthlySales = parseFloat(expectedMonthlySales) || 0
  const growthRate = parseFloat(monthlySalesGrowth) || 0

  // Calculated forecasts
  const monthlyRevenue = price * monthlySales
  const annualRevenue = monthlyRevenue * 12
  const revenueGrowth = monthlyRevenue * (growthRate / 100)

  // Sample products data
  const products = [
    { name: 'Atlas Pen', basePrice: 500 },
    { name: 'Book', basePrice: 2000 },
    { name: 'Ruler', basePrice: 200 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="py-8 px-6 max-w-7xl mx-auto">
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Financial Modelling
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Pricing & Sales Assumptions
          </p>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Configure your pricing and sales assumptions to project revenue forecasts
            and analyze product performance.
          </p>
        </div>
      </header>

      {/* Pricing Configuration Card */}
      <main className="px-6 py-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left card: Configuration form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pricing Configuration</h2>

            {/* Product/Service Dropdown */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product/Service
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="Atlas Pen">Atlas Pen</option>
                  <option value="Book">Book</option>
                  <option value="Ruler">Ruler</option>
                  <option value="Custom Product">Custom Product</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selling Price (LKR)
                </label>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  step="100"
                />
              </div>
            </div>

            {/* Expected Monthly Sales and Growth Rate */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Monthly Sales
                </label>
                <input
                  type="number"
                  value={expectedMonthlySales}
                  onChange={(e) => setExpectedMonthlySales(e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  step="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Sales Growth (%)
                </label>
                <input
                  type="number"
                  value={monthlySalesGrowth}
                  onChange={(e) => setMonthlySalesGrowth(e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  step="0.1"
                />
              </div>
            </div>

            {/* Projection Period */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Projection Period (months)
              </label>
              <select
                value={projectionPeriod}
                onChange={(e) => setProjectionPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="6">6 months</option>
                <option value="12" selected>
                  12 months
                </option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
              </select>
            </div>
          </div>

          {/* Right card: Quick summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Summary</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Selling Price</span>
                <span className="font-medium text-gray-900">LKR {price.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-500">Expected Monthly Sales</span>
                <span className="font-medium text-gray-900">{monthlySales.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-500">Monthly Growth</span>
                <span className="font-medium text-gray-900">
                  {growthRate.toFixed(1)}%
                </span>
              </div>
              <div>
                <span className="text-gray-500">Projection Period</span>
                <span className="font-medium text-gray-900">
                  {projectionPeriod} months
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Revenue Forecast Card */}
      <main className="px-6 py-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue Forecast</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Monthly Revenue */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Monthly Revenue</p>
              <p className="text-2xl font-bold text-emerald-700">
                LKR {monthlyRevenue.toLocaleString()}
              </p>
            </div>

            {/* Annual Revenue */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Annual Revenue</p>
              <p className="text-2xl font-bold text-emerald-700">
                LKR {annualRevenue.toLocaleString()}
              </p>
            </div>

            {/* Revenue Growth Estimate */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Revenue Growth Est.</p>
              <p className="text-2xl font-bold text-emerald-600">
                LKR {revenueGrowth.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Product Revenue Table */}
      <main className="px-6 py-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Revenue</h2>
          <p className="text-sm text-gray-500 mb-4">
            Revenue per product based on selling price and expected monthly sales
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-sm font-medium text-gray-600 py-3">
                    Product
                  </th>
                  <th className="text-left text-sm font-medium text-gray-600 py-3">
                    Price
                  </th>
                  <th className="text-left text-sm font-medium text-gray-600 py-3">
                    Monthly Sales
                  </th>
                  <th className="text-left text-sm font-medium text-gray-600 py-3">
                    Monthly Revenue
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const productPrice = product.basePrice
                  const productMonthlySales = monthlySales
                  const productMonthlyRevenue = productPrice * productMonthlySales

                  return (
                    <tr
                      key={product.name}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="text-left py-3">
                        <span className="font-medium text-gray-900">
                          {product.name}
                        </span>
                      </td>
                      <td className="text-left py-3">
                        LKR {productPrice.toLocaleString()}
                      </td>
                      <td className="text-left py-3">
                        {productMonthlySales.toLocaleString()}
                      </td>
                      <td className="text-left py-3">
                        LKR {productMonthlyRevenue.toLocaleString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}