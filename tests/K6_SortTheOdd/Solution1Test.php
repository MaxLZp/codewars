<?php

namespace tests\K6_SortTheOdd;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SortTheOdd\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(array $arr) {
        $odds = array_filter($arr, function($item) {
            return $item % 2 != 0;
        });
        usort($odds, function($l, $r) { return $l <=> $r; });
        $oddIndex = 0;
        foreach ($arr as $i => $item) {
            if ($item % 2 != 0) {
                $arr[$i] = $odds[$oddIndex++];
            }
        }
        return $arr;
    }
}
