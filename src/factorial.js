export const isFactorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * isFactorial(num - 1);
  }
};
