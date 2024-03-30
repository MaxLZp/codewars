<?php

namespace tests\K6_ParabolicArcLength;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ParabolicArcLength\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertFuzzyEquals($this->solve($input), $expected);
    }

    public function solve($n): float
    {
        $len = 0;
        $prev = 0;
        for ($step = 1/$n, $i = $step; $i <= 1 + $step/10; $i += $step) {
            $cur = $i*$i;
            $len += sqrt($step*$step + ($cur-$prev)*($cur-$prev));
            $prev = $cur;
        }
        return $len;
    }

    private function assertFuzzyEquals($actual, $expected) {
        $inrange = abs($actual - $expected) <= 1e-6;
        if ($inrange == false) {
            echo "Testing at 1e-6 ; Expected value must be $expected but got $actual";
            echo "\r\n";
        }
        $this->assertSame(true, $inrange);
    }
}
