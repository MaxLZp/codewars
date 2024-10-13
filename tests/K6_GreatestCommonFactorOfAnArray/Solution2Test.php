<?php

namespace tests\K6_GreatestCommonFactorOfAnArray;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GreatestCommonFactorOfAnArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(array $a): int
    {
        /**
         * Euclidean algorithm
         */
        return array_reduce($a, function ($a, $b) {
            while ($b != 0) {
                $temp = $b;
                $b = $a % $b;
                $a = $temp;
            }
            return $a;
        });
    }
}
