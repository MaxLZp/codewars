<?php

namespace tests\K8_HolidayVIII_DutyFree;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_HolidayVIII_DutyFree\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve(...$input));
    }

    public function solve(int $n, int $d, int $h): int
    {
        return (int)($h / ( $n * ($d/100)));
    }
}
