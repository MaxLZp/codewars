<?php

namespace tests\K6_SimpleFun344_ChildrenAndApples;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SimpleFun344_ChildrenAndApples\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(array $apples): int|bool
    {
        $avg = array_sum($apples) / count($apples);
        if (!is_int($avg)) { return false; }

        $steps = 0;
        foreach ($apples as $apple) {
            $diff = $avg - $apple;
            if ($diff % 2 != 0) {
                return false;
            }
            if ($diff > 0) {
                $steps += $diff / 2;
            }
        }


        return $steps;
    }
}
