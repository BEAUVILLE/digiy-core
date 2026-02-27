import type { DigiyModule, DigiyPlan, DigiyStatus, DigiyBillingCycle } from "./module";

export interface DigiySubscription {
  phone: string;          // ex: 221771234567
  module: DigiyModule;    // ex: "DRIVER"
  plan: DigiyPlan;        // ex: "standard"
  status: DigiyStatus;    // ex: "active"
  billing_cycle: DigiyBillingCycle;
  price_month_xof?: number;
  expires_at?: string;    // ISO string
  slug?: string;          // ex: driver-22177...
  payment_ref?: string;   // ex: manual_DRIVER_...
}
