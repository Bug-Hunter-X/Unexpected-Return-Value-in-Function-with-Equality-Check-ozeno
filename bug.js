function foo(a, b) {
  if (a === b) {
    return true; // This is wrong. Should return 0 or some other value
  }
  return a + b; // This line might get executed even if a === b
}