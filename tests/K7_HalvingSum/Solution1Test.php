<?php

namespace tests\K7_HalvingSum;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HalvingSum\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int
    {
        $result = 0;
        $den = 1;
        while(($p = intval($n / $den)) >= 1) {
            $result += $p;
            $den *= 2;
        }

        return $result;
    }
}
