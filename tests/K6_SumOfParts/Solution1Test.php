<?php

namespace tests\K6_SumOfParts;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SumOfParts\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $ls)
    {
        $sum = array_sum($ls);
        $result = array_map(function($item) use(&$sum) {
            $sum -= $item;
            return $sum + $item;
        }, $ls);
        $result[] = 0;
        return $result;
    }
}
