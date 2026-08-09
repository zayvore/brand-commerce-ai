export type AIRequestContext = {
  workspaceId: string;
  userId: string;
  locale?: string;
};

export interface AIAssistant<TInput = unknown, TOutput = unknown> {
  run(input: TInput, context: AIRequestContext): Promise<TOutput>;
}

export type AIModuleName =
  | "product_research"
  | "brand_builder"
  | "supplier_matching"
  | "website_builder"
  | "listing_generator"
  | "pricing_assistant"
  | "marketing_assistant"
  | "launch_agent";
