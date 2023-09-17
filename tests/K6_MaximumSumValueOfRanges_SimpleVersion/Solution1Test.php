<?php

namespace tests\K6_MaximumSumValueOfRanges_SimpleVersion;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MaximumSumValueOfRanges_SimpleVersion\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($a, $range): int
    {
        return max(array_map(function($currentRange) use ($a) {
            return array_reduce(array_splice($a, $currentRange[0], $currentRange[1]-$currentRange[0]+1), function($accumulator, $current) {
                return $accumulator + $current;
            }, 0);
        }, $range));
    }
}
