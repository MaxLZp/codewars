# Sports league table - help your local team!
## 7 kyu

Your local sports team manager wants to know how the team is doing in the league. You have been asked to write the manager a function that will allow them to update the league table.

### League details

The possible results in the league are `"draw"` and `"win"` with `3` points for a win and `1` point each for a draw.

The league table is stored in order from top to bottom in a 2-D array called `leagueTable (Javascript) / $league_table (Ruby) / league_table (Python)` with each element containing the team name, and the number of points that team has. For example:
```
[["teamC", 6], ["teamA", 4], ["teamB", 4], ["teamD", 3]]
```

### Function specification

Write a function which takes three parameters: first team's name, second team's name, and the result of the match (in Python version the league_table will be passed as an additional argument). The function must add the correct points to teams 1 and 2 based on the result of the match, and reorder the array based on new the league positions. League positions should be based first on the number of points then if points are equal, alphabetically. The function must also return the updated league table.
