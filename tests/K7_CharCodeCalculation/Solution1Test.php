<?php

namespace tests\K7_CharCodeCalculation;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CharCodeCalculation\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): int
    {
        $total1 = preg_replace_callback('/./i', fn ($c) => ord($c[0]), $s);
        $total2 = preg_replace('/7/', '1', $total1);
        return array_sum(str_split($total1)) - array_sum(str_split($total2));
    }
}
