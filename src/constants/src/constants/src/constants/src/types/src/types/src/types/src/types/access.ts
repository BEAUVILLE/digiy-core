import type { DigiyModule } from "./module";

export interface DigiyAccessCheck {
  phone: string;
  module: DigiyModule;
}

export interface DigiyAccessResult {
  ok: boolean;
  has_access: boolean;
  reason?: "no_subscription" | "expired" | "blocked" | "pending" | "unknown";
  redirect_url?: string; // ABOS ou module
}
