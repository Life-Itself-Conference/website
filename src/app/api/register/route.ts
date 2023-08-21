import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return new NextResponse(JSON.stringify({ hello: "from Next.js" }));
}
