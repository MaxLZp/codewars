# Regexp basics - parsing prices
## 7 kyu

Implement `String#to_cents`, which should parse prices expressed as `$1.23` and return number of cents, or in case of bad format return `nil`.

In this kata, for a price to be considered valid, it must start with a dollar sign (`$`), followed immediately by a decimal number with exactly `2` decimal digits.

