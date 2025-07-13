# MAC Address : Regexp
## 6 kyu

Given a MAC Address the purpose of this kata is to verify it's valid using regular expression.

General rule of a MAC Address is

    It is a string of hexadecimal digits joined together by any of `:`, `-` or `.`
    It can be strings of 2 hexadecimal digits in eight groups joined by `-` (e.g. `01-23-45-67-89-ab-cd-ef`)
    It can be strings of 2 hexadecimal digits in six groups joined by `-` or : (e.g. `01-23-45-67-89-ab` or `01:23:45:67:8f:AB`)
    It can be strings of `4` hexadecimal digits in three groups joined by `.` (e.g. `0123.4567.89AB`)

NOTE:

The variables `$pattern` and `$flags` will be turned into a regexp pattern using `preg_match($pattern.$flags, $mac)` so the beginning and ending slash `"/~pattern~/"` in the pattern are necessary.
