<?php

namespace tests\K7_TwoNumbersArePositive;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TwoNumbersArePositive\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    /**
     * Similar to Solution1 but uses fun_get_args instread of compact
     *
     * @param  integer $a
     * @param  integer $b
     * @param  integer $c
     * @return boolean
     */
    public function solve(int $a, int $b, int $c): bool
    {
        return array_reduce(func_get_args(), function ($carry, $item) {
            return $carry += $item > 0 ? 1 : 0;
        }, 0) === 2;
    }
}
