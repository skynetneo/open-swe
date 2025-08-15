import { GraphAnnotation } from "@open-swe/shared/open-swe/types";
import { z } from "zod";

export const ComputerUseGraphStateObj = GraphAnnotation.extend({
  command: z.string(),
  commandResult: z.string().optional(),
});

export type ComputerUseGraphState = z.infer<typeof ComputerUseGraphStateObj>;
