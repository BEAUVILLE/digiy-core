import type { DigiyModule, DigiyBillingCycle, DigiyPlan, DigiyStatus } from "./module";

export interface DigiyPaymentCheckResult {
  ok: boolean;
  module: DigiyModule;
  phone: string;
  plan: DigiyPlan;
  status: DigiyStatus;
  amount_xof: number;
  billing_cycle: DigiyBillingCycle;
  price_monthly?: number;
  expires_at?: string;
  payment_ref?: string;
  url?: string; // redirection module
  error?: string;
}
