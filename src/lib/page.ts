import { totalPages } from "@/data/posts";

export function parsePage(value?: string | string[]) {
  const n = Number(Array.isArray(value) ? value[0] : value);
  return Number.isInteger(n) && n >= 1 && n <= totalPages ? n : 1;
}
