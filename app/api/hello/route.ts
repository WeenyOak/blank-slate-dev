import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Blank Slate Dev API",
    timestamp: new Date().toISOString(),
  });
}