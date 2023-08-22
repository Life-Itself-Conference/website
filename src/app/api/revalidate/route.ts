import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  revalidatePath("/");
  revalidatePath("/[year]");
  return new NextResponse(
    JSON.stringify({ revalidated: true, now: Date.now(), from: "app" })
  );
}
