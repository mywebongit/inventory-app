"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { createProduct } from "@/lib/actions/products";
import Link from "next/link";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      await createProduct(formData);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-300">
      <Sidebar currentPath="/add-product" />

      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Add Product</h1>
          <p className="text-sm text-gray-800">
            Add a new product to your inventory
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="bg-gray-300 rounded-lg border border-gray-900 p-6">
            <form className="space-y-6" action={handleSubmit}>
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-900 rounded-lg"
                  placeholder="Enter Product Name"
                />
              </div>

              {/* Quantity & Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="0"
                    required
                    className="w-full px-4 py-2 border text-gray-800 border-gray-900 rounded-lg"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    min="0"
                    required
                    className="w-full px-4 py-2 border text-gray-800 border-gray-900 rounded-lg"
                    placeholder="0.0"
                  />
                </div>
              </div>

              {/* SKU */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SKU (optional)
                </label>
                <input
                  type="text"
                  name="sku"
                  className="w-full px-4 py-2 border text-gray-800 border-gray-900 rounded-lg"
                  placeholder="Enter SKU"
                />
              </div>

              {/* Low Stock */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Low Stock At (optional)
                </label>
                <input
                  type="number"
                  name="lowStockAt"
                  min="0"
                  className="w-full px-4 py-2 border text-gray-800 border-gray-900 rounded-lg"
                  placeholder="Enter low stock threshold"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-5">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded-lg text-white flex items-center gap-2
                    ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gray-600 hover:bg-gray-900"
                    }
                  `}
                >
                  {loading && (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? "Adding Product..." : "Add Product"}
                </button>

                <Link
                  href="/inventory"
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
