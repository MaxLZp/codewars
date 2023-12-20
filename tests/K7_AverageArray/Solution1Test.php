<?php

namespace tests\K7_AverageArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AverageArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arr): array
    {
        $sumArray = array_fill(0, count($arr[0]), 0);
        for ($i=0; $i < count($arr); $i++) {
            for ($j=0; $j < count($arr[$i]); $j++) {
                $sumArray[$j] += $arr[$i][$j];
            }
        }
        return array_map(function($sum) use ($arr) {
            return $sum / count($arr);
        }, $sumArray);
    }
}
