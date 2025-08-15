import { stopSandbox, deleteSandbox } from "../../../utils/sandbox.js";
import { isLocalMode } from "@open-swe/shared/open-swe/local-mode";
import type { GraphConfig } from "@open-swe/shared/open-swe/types";
import type { ComputerUseGraphState } from "../state.js";

export async function cleanup(
  state: ComputerUseGraphState,
  config: GraphConfig,
): Promise<Partial<ComputerUseGraphState>> {
  if (!isLocalMode(config) && state.sandboxSessionId) {
    await stopSandbox(state.sandboxSessionId);
    await deleteSandbox(state.sandboxSessionId);
  }
  return {};
}
