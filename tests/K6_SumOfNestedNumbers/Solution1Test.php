<?php

namespace tests\K6_SumOfNestedNumbers;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SumOfNestedNumbers\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(array $a, int $nestingLevel = 1): int {
        $sum = 0;
        foreach ($a as $number) {
            $sum += is_array($number) ? $this->solve($number, $nestingLevel + 1) : pow($number, $nestingLevel);
        }

        return $sum;
    }
}
