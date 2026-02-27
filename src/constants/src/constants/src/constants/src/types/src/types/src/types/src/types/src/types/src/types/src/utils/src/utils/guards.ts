import type { DigiyModule } from "../types/module";
import { DIGIY_MODULES } from "../constants/modules";

export function isDigiyModule(x: string): x is DigiyModule {
  return (DIGIY_MODULES as readonly string[]).includes(x);
}
