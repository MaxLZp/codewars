<?php

namespace tests\K7_StackedBalls_2D;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $EPSILON = 0.001;
    /**
     * @test
     * @dataProvider \tests\K7_StackedBalls_2D\DataProvider::data
     */
    public function execute($input, $expected) {
        $actual = $this->solve($input);
        if (abs($actual - $expected) <= $this->EPSILON) $this->assertSame(true, true);
        else $this->assertSame($expected, $actual, "Expected $expected (+/- $this->EPSILON)\nReceived $actual");
    }

    public function solve(int $layers): float
    {
        return $layers ? 1 + (sqrt(3) * ($layers - 1)) / 2 : 0;
    }
}
