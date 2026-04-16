# The Coupon Code
## 7 Kyu

### Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

### Your mission:
Write a function called `checkCoupon` which verifies that a coupon code is valid and not expired.

- A coupon is no more valid on the day **AFTER** the expiration date.
- All dates will be passed as strings in this format: `"MONTH DATE, YEAR"`.
- For the correct code and the entered code to match, both their values and data types must be the same. This means that e.g. `false` and `0` are not the same, and neither are `123` and `"123"`.

### Examples:
```
("123", "123", "July 9, 2015", "July 9, 2015")  ===>  true
(0,  false,    "July 9, 2015", "July 9, 2015")  ===>  false
("123", "123", "July 9, 2015", "July 2, 2015")  ===>  false
```
