# Get angle between hour and minute hands
## 6 kyu

Your task is to write a function that accepts string parameter time (Example: "22:17") and returns angle between minute and hour hands on round clock at that time.

The angle measured is the smaller of two angles the two hands may form.

If hours or minutes out of their range return or input is "Invalid input".

For example:
```
get_angle("15:15"); // 7.5
get_angle("s5:15"); // "Invalid input"
get_angle("error"); // "Invalid input"
```
