import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

/**
 * List of supported models
 *
 * @remarks
 * This is a small subset, theres more available
 */
type Models =
  | "openai/gpt-4.1"
  | "openai/gpt-5"
  | "openai/gpt-5-mini"
  | "openai/gpt-5-nano";

/**
 * Currently these isn't a official provider for GitHub Models,
 * but it does provide a OpenAI compatible endpoint
 */
export const githubModels = createOpenAICompatible<Models, Models, Models, "">({
  name: "github-models",
  baseURL: "https://models.github.ai/inference",
  apiKey: process.env.GITHUB_TOKEN,
});
