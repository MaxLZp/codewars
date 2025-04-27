<?php

namespace tests\K7_FormTheMinimum;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FormTheMinimum\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): int
    {
        $arr = array_unique($arr);
        sort($arr, SORT_NUMERIC);

        return (int)implode('', $arr);
    }
}
