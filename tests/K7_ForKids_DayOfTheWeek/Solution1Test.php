<?php

namespace tests\K7_ForKids_DayOfTheWeek;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ForKids_DayOfTheWeek\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($date): string
    {
        return \DateTime::createFromFormat('d/m/Y', $date)->format('l');
    }
}
