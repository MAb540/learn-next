import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("get request is being fired");

  const searchParams = new URL(req.url);
  console.log("search params: ", searchParams.host);
  console.log("search params: ", searchParams.hostname);
  console.log("search params: ", searchParams.port);
  console.log("search params: ", searchParams.protocol);

  return new Response(
    JSON.stringify({
      name: "john wick",
    })
  );
}

export const POST = async (req: NextRequest) => {
  console.log("post request is being fired");

  const body = await req.json();
  console.log("json body: ", body);

  return new Response("Ok");
};
