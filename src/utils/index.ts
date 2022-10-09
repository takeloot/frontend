export const randomInteger = (min: number, max: number): number => {
  const rand = min - 1 + Math.random() * (max - min + 1);

  return Math.round(rand);
};
