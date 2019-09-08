function trySwitch(n = 3, s = "", c = 0, solutions = {}) {
  if (n === 0) {
    solutions[s] = s;
    // if (c === 2) {
    // }
    console.log(s, c, solutions);
    return;
  } 
  trySwitch(n - 1, s + "X", c + 1, solutions)
  trySwitch(n - 1, s + "O", c, solutions);
  return Object.values(solutions)
}

trySwitch()