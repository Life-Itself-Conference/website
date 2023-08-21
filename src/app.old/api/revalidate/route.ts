import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  // const secret = request.nextUrl.searchParams.get("secret");

  // if (secret !== process.env.REVALIDATION_SECRET) {
  //   return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  // }

  revalidatePath("/");
  revalidatePath("/[year]");

  return NextResponse.json({ revalidated: true, now: Date.now(), from: "app" });
}
