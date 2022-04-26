function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateBoardLetters(count) {
  let value = "";

  const letterSource = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < count; i++) {
      value += letterSource[randomNumber(0, letterSource.length - 1)]
  }

  return value;
}
