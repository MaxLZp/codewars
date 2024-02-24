<?php

namespace tests\K6_BowlingPins;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_BowlingPins\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arr): string
    {
        $pins = "7 8 9 X\n 4 5 6 \n  2 3  \n   1   ";
        $arr = array_map(function($v) { return $v === 10 ? 'X' : "$v"; }, $arr);
        $re = count($arr)
            ? preg_replace(sprintf('/[%s]/', implode('', $arr)), ' ', $pins)
            : $pins;
        $re = preg_replace('/[X0-9]/', 'I', $re);
        return $re;
    }
}
