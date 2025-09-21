

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
  trackingNumber?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderStatusConfig {
  label: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface OrderFilters {
  searchTerm: string;
  selectedStatus: string;
}

export interface OrderTableColumn {
  key: keyof Order;
  title: string;
  dataIndex: keyof Order;
  render?: (value: any, record: Order, index: number) => React.ReactNode;
  sorter?: boolean;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

export interface OrderAction {
  type: 'view' | 'edit' | 'delete' | 'track';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: (order: Order) => void;
}

export interface OrdersState {
  searchTerm: string;
  selectedStatus: string;
  isNotificationsOpen: boolean;
  isLoading: boolean;
  error?: string;
}

export interface OrdersProps {
  // Add any props if needed in the future
}

export interface OrderFormData {
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: OrderStatus;
}

export interface OrderStats {
  totalOrders: number;
  pendingOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalRevenue: number;
}
