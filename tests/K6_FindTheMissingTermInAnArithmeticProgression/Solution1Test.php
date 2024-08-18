<?php

namespace tests\K6_FindTheMissingTermInAnArithmeticProgression;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindTheMissingTermInAnArithmeticProgression\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($list): int
    {
        $count = count($list);
        return intval(($list[0] + $list[$count - 1]) * ($count + 1) / 2) - array_sum($list);
    }
}
