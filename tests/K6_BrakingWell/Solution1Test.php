<?php

namespace tests\K6_BrakingWell;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_BrakingWell\DataProvider::dist
     */
    public function executeDist($input, $expected) {
        $this->assertFuzzyEquals($this->solveDist($input[0], $input[1]), $expected);
    }

    /**
     * d1 = v*v / 2*mu*g
     *
     * @param  int $v
     * @param  float $mu
     * @return float
     */
    public function solveDist($v, $mu): float
    {
        $g = 9.81; //m/s/s
        $v /= 3.6;
        return $v + ($v * $v) / (2 * $mu * $g);
    }

    /**
     * @test
     * @dataProvider \tests\K6_BrakingWell\DataProvider::speed
     */
    public function executeSpeed($input, $expected) {
        $this->assertFuzzyEquals($this->solveSpeed($input[0], $input[1]), $expected);
    }

    public function solveSpeed($d, $mu): float
    {
        $f = 2 * $mu * 9.81;
        $D = $f*$f + 4 * $f * $d;
        $v = (-$f + sqrt($D)) / (2); // m/s
        return $v * 3.6; //km/h
    }

    private function assertFuzzyEquals($actual, $expected){
        $inrange = abs($actual - $expected) <= 1e-2;
        if ($inrange == false) {
            echo "Testing at 1e-2: Expected value must be $expected but got $actual";
            echo "\r\n";
        }
        $this->assertSame(true, $inrange);
    }
}
