/**
 * Dashboard-specific interfaces and types
 */


export interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface LocationData {
  city: string;
  value: string;
}

export interface Contact {
  name: string;
  avatar: string;
}

export interface Notification {
  type: 'bug' | 'user' | 'subscription';
  message: string;
  time: string;
}

export interface Activity {
  type: 'bug' | 'release' | 'data' | 'delete';
  message: string;
  time: string;
  user: string;
}

export interface ChartDataPoint {
  month: string;
  projected?: number;
  actual?: number;
  current?: number;
  previous?: number;
}

export interface SalesDataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: any; // Add index signature for Recharts compatibility
}

export interface DashboardState {
  isNotificationsOpen: boolean;
}
export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  className?: string;
  needDarkmodeChanges?: boolean;

}
export interface DashboardProps {
  // Add any props if needed in the future
}
