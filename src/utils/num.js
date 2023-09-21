export const roundNum = (num) => Number(num.toFixed(2));

export const getPositiveValue = (val) => {
  if (!Number.isFinite(Number(val))) {
    return 0;
  }

  return Math.max(0, val);
};
