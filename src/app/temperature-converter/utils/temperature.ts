export function calculateFahrenheitFromCelsius(c: number) {
  return (c * 9) / 5 + 32;
}

export function calculateCelsiusFromFahrenheit(f: number) {
  return ((f - 32) * 5) / 9;
}
