# Find Grid Position
## 6 kyu

Your task is to implement a function `createGrid(m, n, position)` (or `create_grid($m, $n, $position)` in PHP) which takes 3 arguments:

- m - number of rows;
- n - number of columns;
- position - object (associative array in PHP) containing two properties - x (column indices) and y (row indices) respectively.

### Example:

JavaScript: `createGrid(5, 8, {x:3, y:2})`
PHP: `create_grid(5, 8, ['x' => 3, 'y' => 2])`

This function creates grid of zeroes with the size `5 x 8` and places symbol `*` at the position `x = 3` and `y = 2`.
```
00010000
00010000
111*1111
00010000
00010000
```
As you can see, the function also fills with `1` those horizontal and vertical lines which crosses the specified position.

### Return:

The function has to return created grid as a string containing each line separated by `\n`. For example:
```
'00010000\n00010000\n111*1111\n00010000\n00010000'
```
Notes:

- Position indexing starts from `0` at the `left top` corner;
- Position values are non-negative integers;
- Grid size varies from `1x1` to `50x50`;
- If the specified position is out of bounds of the grid, just return grid filled with zeroes.

### Other examples:

JavaScript:
```
createGrid(3, 3, {x:0, y:0}) => '*11\n100\n100'
createGrid(5, 5, {x:8, y:0}) => '00000\n00000\n00000\n00000\n00000'
createGrid(1, 1, {x:0, y:0}) => '*'
```
PHP:
```
create_grid(3, 3, ["x" => 0, "y" => 0]) // '*11\n100\n100'
create_grid(5, 5, ["x" => 8, "y" => 0]) // '00000\n00000\n00000\n00000\n00000'
create_grid(1, 1, ["x" => 0, "y" => 0}) // '*'
```
