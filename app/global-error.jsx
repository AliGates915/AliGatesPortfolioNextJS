"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  console.error("Global error:", error); // just logs in console

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
