import { Auth } from "@auth/core";
import { NextRequest } from "next/server";
import { authOptions } from "./options";

export async function GET(req: NextRequest) {
  const response = await Auth(req, authOptions);
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

export async function POST(req: NextRequest) {
  const response = await Auth(req, authOptions);
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
