<?php

namespace tests\K6_BallUpwards;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_BallUpwards\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($v0): int
    {
        $g = 9.81;
        $prevHeight = -1;
        $step = 0;
        while(true) {
            $height = (($v0*$step/(3.6*10)) - 0.5*$g*$step*$step/100);
            if ($height <= $prevHeight || $step > 100) {
                break;
            }
            $prevHeight = $height;
            $step++;
        }
        return $step - 1;
    }
}
