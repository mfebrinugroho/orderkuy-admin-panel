export function getPaginationRange(
  current: number,
  last: number,
): (number | "...")[] {
  const delta = 1;
  const range: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(last - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < last - 1) range.push("...");

  if (last > 1) range.push(last);

  return range;
}
