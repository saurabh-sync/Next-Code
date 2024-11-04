// import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const reqeustHeaders = new Headers(request.headers);
//   console.log(reqeustHeaders.get("Authorization"));
//   return new Response("Profile API data");
// }

import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const reqeustHeaders = new Headers(request.headers);
  console.log(reqeustHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const cookie = await cookies();
  cookie.set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log(cookie.get("resultsPerPage"));

  // return new Response("Profile API data");
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
