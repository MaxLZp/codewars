<?php

namespace tests\K6_RegexTicTacToeWinChecker;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_RegexTicTacToeWinChecker\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $board): bool
    {
        return preg_match('/^.{6}o{3}|.{3}o{3}.{3}|o{3}.{6}|.{6}x{3}|.{3}x{3}.{3}|x{3}.{6}|o.{3}o.{3}o|x.{3}x.{3}x|.{2}o.o.o.{2}|.{2}x.x.x.{2}|o.{2}o.{2}o.{2}|x.{2}x.{2}x.{2}|.o..o..o.|.x..x..x.|.{2}o.{2}o.{2}o|.{2}x.{2}x.{2}x$/i', $board);
    }
}
