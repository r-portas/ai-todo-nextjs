import { db, todos } from "@/lib/db";

type Todo = typeof todos.$inferInsert;

// Star Wars themed mock todo items
const now = Date.now();
const oneDay = 24 * 60 * 60 * 1000;

const mockTodos: Todo[] = [
  {
    title: "Refuel Red Five's X-wing on Yavin IV",
    due: new Date(now + oneDay),
    priority: "high",
    completed: false,
  },
  {
    title: "Calibrate Millennium Falcon hyperdrive motivator",
    due: new Date(now + 2 * oneDay),
    priority: "high",
    completed: false,
  },
  {
    title: "Resupply bacta tanks in Echo Base infirmary",
    due: new Date(now + 3 * oneDay),
    priority: "medium",
    completed: false,
  },
  {
    title: "Update holomap coordinates for secret Rebel rendezvous",
    due: new Date(now + 5 * oneDay),
    priority: "medium",
    completed: false,
  },
  {
    title: "Inspect moisture vaporators at Lars homestead",
    due: new Date(now + 4 * oneDay),
    priority: "low",
    completed: false,
  },
  {
    title: "Schedule droid memory wipe for R2-D2 (again)",
    due: new Date(now + 7 * oneDay),
    priority: "low",
    completed: false,
  },
  {
    title: "Brief Rogue Squadron on new Imperial patrol patterns",
    due: new Date(now + oneDay / 2),
    priority: "high",
    completed: false,
  },
  {
    title: "Tune lightsaber focusing crystal alignment",
    due: new Date(now + 6 * oneDay),
    priority: "medium",
    completed: false,
  },
  {
    title: "Archive intercepted Imperial transmission",
    due: new Date(now + 2 * oneDay + oneDay / 2),
    priority: "low",
    completed: true,
  },
  {
    title: "Replace power coupling on Deck 7 of Home One",
    due: new Date(now + 2 * oneDay + 3 * 60 * 60 * 1000),
    priority: "medium",
    completed: false,
  },
  {
    title: "Run pre-flight diagnostics on Snowspeeder squad",
    due: new Date(now + oneDay + 6 * 60 * 60 * 1000),
    priority: "high",
    completed: true,
  },
  {
    title: "Decompress carbon-freezing chamber filters",
    due: new Date(now + 8 * oneDay),
    priority: "low",
    completed: false,
  },
  {
    title: "Compile intelligence on new TIE interceptor variant",
    due: new Date(now + 5 * oneDay + 4 * 60 * 60 * 1000),
    priority: "medium",
    completed: false,
  },
  {
    title: "Polish protocol droid plating for diplomatic summit",
    due: new Date(now + 3 * oneDay + 2 * 60 * 60 * 1000),
    priority: "low",
    completed: true,
  },
  {
    title: "Reinforce deflector shields on Nebulon-B frigate",
    due: new Date(now + 9 * oneDay),
    priority: "high",
    completed: false,
  },
];

await db.insert(todos).values(mockTodos);

console.log(`Seeded ${mockTodos.length} Star Wars themed todos.`);
