# D&D Character generator #1: attribute modifiers and spells
## 6 kyu

Taking into consideration the 3.5 edition rules, your goal is to build a function that takes an ability score (worry not about validation: it is always going to be a non negative integer), will return:
- attribute modifier, as indicated on the table of the above link;
- maximum spell level for the spells you can cast (-1 for no spells at all) with that score;
- the eventual extra spells you might get (as an array/list, with elements representing extra spells for 1st, 2nd,... spell level in order; empty array for no extra spells).

The result needs to be an object (associative array in PHP), as shown in the examples:
```
charAttribute(0) === {modifier: 0, maximumSpellLevel: -1, extraSpells: []}
charAttribute(1) === {modifier: -5, maximumSpellLevel: -1, extraSpells: []}
charAttribute(5) === {modifier: -3, maximumSpellLevel: -1, extraSpells: []}
charAttribute(10) === {modifier: 0, maximumSpellLevel: 0, extraSpells: []}
charAttribute(20) === {modifier: +5, maximumSpellLevel: 9, extraSpells: [2,1,1,1,1]}
```

*Note: I didn't explain things in detail and just pointed out to the table on purpose, as my goal is also to train the pattern recognition skills of whoever is going to take this challenges, so do not complain about a summary description. Thanks :)*

![](ability_modifiers.jpg)