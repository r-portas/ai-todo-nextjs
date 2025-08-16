import { generateText } from "ai";
import { githubModels } from "@/lib/ai";

const { text } = await generateText({
  model: githubModels("openai/gpt-5-mini"),
  prompt: "What is React?",
});

console.log(text);
