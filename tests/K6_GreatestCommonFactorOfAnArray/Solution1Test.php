<?php

namespace tests\K6_GreatestCommonFactorOfAnArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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
        $min = min($a);
        for ($i = $min; $i >= 1; $i--) {
            if ($min % $i !== 0) {
                continue;
            }

            $nonDivisible = array_reduce($a, function($c, $item) use ($i) {
                return $item % $i !== 0 ? ++$c : $c;
            }, 0);

            if ($nonDivisible === 0 ) {
                return $i;
            }
        }
    }
}
