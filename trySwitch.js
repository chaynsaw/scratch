function trySwitch(n = 3,s) {
  if (n === 0) {
    console.log(s);
    return;
  }
  trySwitch(n - 1, s + "X");
  trySwitch(n - 2, s + "O");
}