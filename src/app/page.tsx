import { db, todos } from "@/lib/db";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Home page displaying all todos
 *
 * @remarks
 * Server component: fetches todo data directly from the database
 */
export default async function Page() {
  const allTodos = await db.select().from(todos);

  return (
    <main className="container mx-auto max-w-3xl p-6 flex flex-col gap-8">
      <div className="space-y-2">
        <Typography variant="h1">Todos</Typography>
        <Typography variant="muted">
          A list of all current todos in the database
        </Typography>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Todos ({allTodos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {allTodos.length === 0 ? (
            <Typography variant="muted">No todos yet.</Typography>
          ) : (
            <div className="flex flex-col gap-4">
              {allTodos.map((t) => {
                const due = t.due?.toLocaleDateString();
                return (
                  <div key={t.id}>
                    <span className="font-medium flex items-center gap-2">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          t.completed ? "bg-green-500" : "bg-yellow-500"
                        }`}
                        aria-label={t.completed ? "Completed" : "Pending"}
                      />
                      {t.title}
                    </span>
                    <span className="text-xs text-muted-foreground flex gap-2">
                      <span>Priority: {t.priority}</span>
                      {due && <span>Due: {due}</span>}
                      <span>Status: {t.completed ? "Done" : "Open"}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
