<?php

namespace tests\K6_PyramidArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PyramidArray\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): array
    {
        $result = [];
        for ($i = 1; $i <= $n; $i++) {
            $result[] = array_fill(0, $i, 1);
        }

        return $result;
    }

}
