import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const filePath = join(
    process.cwd(),
    "public",
    "sw-check-permissions-7829e.js"
  );
  const file = await readFile(filePath, "utf8");

  return new Response(file, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
