<?php

namespace tests\K7_BattleOfCharacters_Easy;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_BattleOfCharacters_Easy\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(string $x, string $y): string
    {
        $xs = array_sum(array_map(fn($xc) => ord($xc) - ord('A') + 1, str_split($x)));
        $ys = array_sum(array_map(fn($yc) => ord($yc) - ord('A') + 1, str_split($y)));

        if ($xs == $ys) { return 'Tie!'; }
        return $xs > $ys ? $x : $y;
    }
}
