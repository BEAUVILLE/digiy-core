import { DIGIY_MODULES } from "../constants/modules";

export type DigiyModule = (typeof DIGIY_MODULES)[number];

export type DigiyBillingCycle = "monthly" | "yearly";

export type DigiyPlan = "standard" | "pro" | "enterprise";

export type DigiyStatus = "active" | "expired" | "pending" | "blocked";
