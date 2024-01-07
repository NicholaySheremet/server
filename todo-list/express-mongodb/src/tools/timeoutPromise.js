export const timeoutPromise = (maxSecondsAwait = 1) => {
  const randomTimer = parseInt(Math.random() * 1000) * maxSecondsAwait;
  return new Promise((resolve) => setTimeout(resolve, randomTimer));
};
