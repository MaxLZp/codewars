<?php

namespace tests\K6_CalculateAreaOfPolygonInsideACircle;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CalculateAreaOfPolygonInsideACircle\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($circleRadius, $numberOfSides): float
    {
        return round(($circleRadius*$circleRadius * $numberOfSides * sin(deg2rad(360/$numberOfSides))) / 2, 3);
    }
}
