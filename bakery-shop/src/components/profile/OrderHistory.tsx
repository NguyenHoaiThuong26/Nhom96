import { ChevronRight, Package } from "lucide-react"
import { useEffect, useState } from "react"
import AuthService from "../../service/AuthService"
import type { OrderItem } from "../../service/AuthService"

interface Order {
  id: string
  date: string
  status: string
  total: number
  items: OrderItem[]
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

export default function OrderHistory() {

  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await AuthService.getOrderHistory()
        setOrders(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadOrders()
  }, [])

  
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Lịch sử đơn hàng
        </h2>
        <p className="mt-2 text-gray-600">
          Xem và quản lý các đơn hàng trước đây của bạn
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-gray-500">Đang tải đơn hàng...</p>
      ) : orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <EmptyOrders />
      )}
    </div>
  )
}

/* ===== Order Card ===== */
function OrderCard({ order }: { order: Order }) {
  const status = STATUS_CONFIG[order.status]

  const itemSummary = order.items
    .map((item) => `${item.cakeName} × ${item.quantity}`)
    .join(", ")

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
                {itemSummary}
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
            <p className="text-sm text-gray-600">Tổng cộng</p>
            <p className="text-2xl font-bold text-amber-900">
              {order.total.toLocaleString()} đ
            </p>
          </div>
        </div>

        {/* Action */}
        <button className="mt-4 flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100 sm:mt-0">
          Xem chi tiết
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
        Chưa có đơn hàng nào
      </p>
      <p className="mt-1 text-sm text-rose-700">
        Hãy bắt đầu mua sắm để xem đơn hàng của bạn tại đây
      </p>

    </div>
  )
}
