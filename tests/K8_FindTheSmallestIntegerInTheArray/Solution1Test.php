<?php

namespace tests\K8_FindTheSmallestIntegerInTheArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_FindTheSmallestIntegerInTheArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($arr) {
        $min = PHP_INT_MAX;
        foreach ($arr as $item) {
            if ($item < $min) { $min = $item; }
        }
        return $min;
    }
}
