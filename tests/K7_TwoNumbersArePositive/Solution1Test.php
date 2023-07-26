<?php

namespace tests\K7_TwoNumbersArePositive;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TwoNumbersArePositive\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve(int $a, int $b, int $c): bool
    {
        return array_reduce(compact('a', 'b', 'c'), function ($carry, $item) {
            return $carry += $item > 0 ? 1 : 0;
        }, 0) === 2;
    }
}
