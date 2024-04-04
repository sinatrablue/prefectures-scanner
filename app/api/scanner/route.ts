import { NextResponse } from "next/server";
import { scanPrefecturesWebsites } from "./service";

export async function GET() {
  try {
    const scannedData = await scanPrefecturesWebsites();
    return NextResponse.json({ data: scannedData });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
