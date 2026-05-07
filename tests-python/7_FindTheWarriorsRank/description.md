# Find the Warrior's Rank
## 7 kyu

### History

In ancient India, the highly skilled warriors used to have different ranks. There were the Atirathis, the Maharathis, the Atimaharathis and the Mahamaharathis.

Just for your knowledge, a Atirathi could, in battle, fight 10,000 foot or horseback soldiers at a time!

Next came the Maharathis, who could fight 60,000 soldiers at a time!

After them came the Atimaharathis, who no longer focused on soldiers, but on Maharathis, and could battle 12 of them single-handedly!

Finally there were the Mahamaharathis, who were capable of fighting 24 Atimaharathis at the same time!

### Task

In this kata, the prefix `ati` means 5 skill points and the prefix `maha` means 10 skill points.

Given a specified number of skill points, return the rank of the warrior, with each word seperated by a (`-`) dash .

### Examples
```
find_warrior_rank(20) => "maha-maha-rathi"
# because 2 "mahas" mean 10 + 10

find_warrior_rank(13) =>  "ati-maha-rathi"
# the closest being 15, 1 "ati" and 1 "maha" means 5 + 10 (15)

find_warrior_rank(6) => "ati-rathi"
# the closest being 5, 1 "ati" is required

find_warrior_rank(51) => "maha-maha-maha-maha-maha-rathi"
# which is, (10 + 10 + 10 + 10 + 10)

find_warrior_rank(1) => "rathi"
# 1 being closer to 0 than to 5
```

### Notes

0 <= skill <= 500
