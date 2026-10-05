import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Backend is working!",
  });
}

export async function POST() {
  // Create service
}