<?php

namespace tests\K7_RowWeights;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_RowWeights\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): array 
    {
        $result = [0, 0];
        foreach($arr as $i => $val) {
            $result[$i % 2] += $val;
        }

        return $result;
    }
}
