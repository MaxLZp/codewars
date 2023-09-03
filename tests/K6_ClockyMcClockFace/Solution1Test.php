<?php

namespace tests\K6_ClockyMcClockFace;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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
        $degreesPerHour = 360/12;
        $minutesPerDegree = $degreesPerHour / 60;
        $hours = (int)($angle / $degreesPerHour);
        $minutes = (int)(($angle - $hours*$degreesPerHour) / $minutesPerDegree);
        $hours = ($hours === 0) ? $hours + 12 : $hours;

        return sprintf('%02d:%02d', $hours, $minutes);
    }
}
