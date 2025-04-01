<?php

namespace tests\K7_SimpleFun_144_DistinctDigitYear;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun_144_DistinctDigitYear\DataProvider::data
     */
    public function execute($n, $expected) {
        $this->assertSame($expected, $this->solve($n));
    }

    /**
     *
     * Consider count_chars
     *
     * @param int $year
     * @return int
     */
    public function solve(int $year): int
    {
        do {
            ++$year;
            $str = str_split("$year");
        } while (count($str) != count(array_unique($str)));

        return $year;
    }
}
