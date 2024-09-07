<?php

namespace tests\K6_StringAverage;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_StringAverage\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        $numsStr = explode(' ', $s);
        $sum = 0;
        foreach ($numsStr as $num) {
            if (false === ($idx = array_search($num, $nums))) {
                return 'n/a';
            }
            $sum += $idx;
        }
        $sum = intval(floor($sum/count($numsStr)));

        return $nums[$sum];
    }
}
