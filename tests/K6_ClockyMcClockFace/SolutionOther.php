<?php

namespace tests\K6_ClockyMcClockFace;

use PHPUnit\Framework\TestCase;

class SolutionOther extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ClockyMcClockFace\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(float $angle): string
    {
        // 1 minute = 0.5 of degree
        // convert degree to seconds and format as hours
        return gmdate("h:i", $angle * 2 * 60);
    }
}
