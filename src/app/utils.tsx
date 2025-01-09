export type DominoNumbers = [number, number];
export type SortOrder = "none" | "asc" | "desc";

export const INITIAL_DOMINOES: DominoNumbers[] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export const SORT_OPTIONS = {
  NONE: "none",
  ASC: "asc",
  DESC: "desc",
} as const;

export const getDominoTotal = ([a, b]: DominoNumbers): number => a + b;

export const countDoubles = (dominoes: DominoNumbers[]): number => {
  return dominoes.filter(([a, b]) => a === b).length;
};

export const compareDominoes = (
  a: DominoNumbers,
  b: DominoNumbers,
  ascending: boolean = true
): number => {
  const totalA = getDominoTotal(a);
  const totalB = getDominoTotal(b);

  if (totalA !== totalB) {
    return ascending ? totalA - totalB : totalB - totalA;
  }

  const minA = Math.min(...a);
  const minB = Math.min(...b);
  return ascending ? minA - minB : minB - minA;
};

export const sortDominoes = (
  dominoes: DominoNumbers[],
  order: SortOrder
): DominoNumbers[] => {
  if (order === "none") return [...INITIAL_DOMINOES];
  return [...dominoes].sort((a, b) => compareDominoes(a, b, order === "asc"));
};

export const removeDuplicates = (
  dominoes: DominoNumbers[]
): DominoNumbers[] => {
  const seen = new Set<string>();
  return dominoes.filter((domino) => {
    const key = [...domino].sort().join(",");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const flipDominoes = (dominoes: DominoNumbers[]): DominoNumbers[] => {
  return dominoes.map(([a, b]) => [b, a]);
};

export const removeDominoesByTotal = (
  dominoes: DominoNumbers[],
  total: number
): DominoNumbers[] => {
  return dominoes.filter((domino) => getDominoTotal(domino) !== total);
};
