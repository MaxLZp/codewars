<?php

namespace tests\K7_ReturnTheClosestNumberMultipleOf10;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ReturnTheClosestNumberMultipleOf10\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int {
        return round($n / 10) * 10;
        // return round($n, -1);
    }
}
