# Kill The Monsters!
## 7 Kyu

You are Saitama (a.k.a One Punch Man), and you are fighting against the monsters! You are strong enough to kill them with one punch, but after you punch 3 times, one of the remaining monsters will hit you once.

Your health is `health`; number of monsters is `monsters`, damage that monster can give you is `damage`.
Task

Write a function that will calculate:

how many hits you received, how much damage you received and your remaining health.

if your health is <= 0, you die and function should return `"hero died"`.

### Examples
```
(100, 3, 33)  => "hits: 0, damage: 0, health: 100"
( 50, 7, 10)  => "hits: 2, damage: 20, health: 30"
```

### Note
All numbers are strictly positive. Your function should always return a string.