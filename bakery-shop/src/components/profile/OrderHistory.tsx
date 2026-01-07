"use client"

import { ChevronRight, Package } from "lucide-react"

interface Order {
  id: string
  date: string
  status: "pending" | "completed" | "cancelled"
  items: string
  total: number
}

const STATUS_CONFIG: Record<Order["status"], { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "bg-green-50 text-green-700",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-50 text-red-700",
  },
}

const ORDERS: Order[] = [
  {
    id: "ORD-001234",
    date: "January 3, 2025",
    status: "completed",
    items: "Artisan Sourdough, Croissants (2)",
    total: 24.99,
  },
  {
    id: "ORD-001233",
    date: "December 28, 2024",
    status: "completed",
    items: "Chocolate Cake, Birthday Decorations",
    total: 45.5,
  },
  {
    id: "ORD-001232",
    date: "December 20, 2024",
    status: "completed",
    items: "Holiday Cookie Box (Assorted)",
    total: 32.99,
  },
  {
    id: "ORD-001231",
    date: "December 15, 2024",
    status: "pending",
    items: "Wedding Cake (Custom Order)",
    total: 120.0,
  },
  {
    id: "ORD-001230",
    date: "December 10, 2024",
    status: "completed",
    items: "Baguette, Pain au Chocolat",
    total: 18.75,
  },
]

export default function OrderHistory() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
        <p className="mt-2 text-gray-600">
          View and manage your past orders
        </p>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {ORDERS.length > 0 ? (
          ORDERS.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <EmptyOrders />
        )}
      </div>
    </div>
  )
}

/* ===== Order Card ===== */
function OrderCard({ order }: { order: Order }) {
  const status = STATUS_CONFIG[order.status]

  return (
    <div className="group rounded-xl border border-rose-200 bg-gradient-to-br from-white to-amber-50/30 p-6 transition hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start gap-3">
            <Package className="mt-1 h-5 w-5 text-amber-600" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {order.id}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {order.date}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {order.items}
              </p>
            </div>
          </div>
        </div>

        {/* Status & Total */}
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <span
            className={`rounded-full px-4 py-1 text-sm font-medium ${status.className}`}
          >
            {status.label}
          </span>

          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-amber-900">
              ${order.total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Action */}
        <button className="mt-4 flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100 sm:mt-0">
          View Details
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

/* ===== Empty State ===== */
function EmptyOrders() {
  return (
    <div className="rounded-xl border-2 border-dashed border-rose-200 bg-rose-50/50 py-12 text-center">
      <Package className="mx-auto h-12 w-12 text-rose-300" />
      <p className="mt-4 font-medium text-rose-900">
        No orders yet
      </p>
      <p className="mt-1 text-sm text-rose-700">
        Start shopping to see your orders here
      </p>
    </div>
  )
}
