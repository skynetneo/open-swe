import { GraphConfig } from "@open-swe/shared/open-swe/types";
import { executeCommand } from "../../../utils/shell-executor/index.js";
import type { ComputerUseGraphState } from "../state.js";

export async function runCommand(
  state: ComputerUseGraphState,
  config: GraphConfig,
): Promise<Partial<ComputerUseGraphState>> {
  const response = await executeCommand(config, {
    command: state.command,
    sandboxSessionId: state.sandboxSessionId,
  });

  return {
    commandResult: response.result ?? "",
  };
}
