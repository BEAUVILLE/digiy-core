import type { DigiyModule } from "./module";

export interface DigiyModuleStats {
  module: DigiyModule;
  period: "day" | "week" | "month";
  kpis: Record<string, number>;
}
