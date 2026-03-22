# Adaptive Security System
## 7 Kyu

A security system protects a network from intrusion attempts.
Hackers try to breach the system one by one, in the order given.
Each hacker has a skill level.
The system starts with a given security level.

### Rules

For each hacker:
- If the hacker's skill is strictly greater than the current security level, the hacker successfully breaches the system.
- Otherwise, the system blocks the attack and learns from it, increasing its security level.

Each blocked attack increases the security level by a fixed amount.

Your task is to return the number of successful breaches.

If the array is empty, return 0.

### Example
```
breachAttempts([7, 6, 8, 9], 6, 2)
```
Initial values:
```
securityLevel = 6
increase = 2
```
Step-by-step:
```
Hacker 7 vs security 6 → breach → security stays 6
Hacker 6 vs security 6 → blocked → security becomes 8
Hacker 8 vs security 8 → blocked → security becomes 10
Hacker 9 vs security 10 → blocked
```
Result:
```
1
```