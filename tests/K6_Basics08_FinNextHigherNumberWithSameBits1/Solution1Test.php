<?php

namespace tests\K6_Basics08_FinNextHigherNumberWithSameBits1;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Basics08_FinNextHigherNumberWithSameBits1\DataProvider::data
     */
    public function executeDist($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($n): int
    {
        $ones = substr_count(decbin($n), '1');
        for ($i = $n + 1; $i <= 2 * $n; $i++) {
            if ($ones == substr_count(decbin($i), '1')) { return $i; }
        }
        return $n;
    }

}
