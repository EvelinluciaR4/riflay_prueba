export const formatPosition = (number) => {
    if (number <= 9) {
      return `0${number}`;
    }
    if (number <= 99) {
      return `${number}`;
    }
  };