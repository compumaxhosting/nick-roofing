"use client";
import { useMemo } from "react";

type Props = { data: unknown; id?: string };

export default function ClientOnlyJsonLd({ data, id }: Props) {
  const json = useMemo(() => {
    try {
      return JSON.stringify(data);
    } catch {
      return null; // never crash the route
    }
  }, [data]);

  if (!json) return null;

  return (
    <script
      id={id ?? "ld-json"}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
