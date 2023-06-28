<?php

namespace tests\K7_LeapYears;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_LeapYears\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($year): bool
    {
        return ($year % 4 == 0 && $year % 100 != 0) || $year % 400 == 0;
    }
}
