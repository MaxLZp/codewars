<?php

namespace tests\K7_HalvingSum;

use PHPUnit\Framework\TestCase;

class Solution2OtherTest extends TestCase
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
        if ($n < 1) {
            return 0;
        }

        return $n + $this->solve(intval($n / 2));
    }
}
