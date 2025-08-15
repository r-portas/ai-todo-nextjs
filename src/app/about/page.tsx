import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Turn Your Thoughts Into Tasks - Instantly with AI
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          An AI-powered todo list that understands natural language, suggests
          priorities, and helps you focus on what matters.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/app">Try the Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link
              href="https://github.com/r-portas/ai-todo-nextjs"
              target="_blank"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                AI-Assisted Task Creation
              </h3>
              <p className="text-muted-foreground">
                Type a task in plain English and AI extracts the title, due
                date, and priority automatically.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Priority Suggestions
              </h3>
              <p className="text-muted-foreground">
                AI reorders your tasks based on urgency, deadlines, and
                workload.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Natural Language Queries
              </h3>
              <p className="text-muted-foreground">
                Ask questions like &quot;What’s due tomorrow?&quot; and get
                instant answers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <p>Type your task in plain English</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <p>AI extracts details like title, due date, and priority</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <p>Task is added to your list instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Next.js",
            "Bun",
            "Tailwind CSS v4",
            "shadcn/ui",
            "Drizzle ORM",
            "SQLite",
            "OpenAI",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border bg-card text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        <p>
          Built by{" "}
          <Link
            href="https://linkedin.com/in/royportas"
            target="_blank"
            className="underline"
          >
            Roy
          </Link>{" "}
          — View on{" "}
          <Link
            href="https://github.com/r-portas/ai-todo-nextjs"
            target="_blank"
            className="underline"
          >
            GitHub
          </Link>
        </p>
      </footer>
    </main>
  );
}
