<?php

namespace tests\K6_CircularySortedArray;

use phpDocumentor\Reflection\Types\Boolean;
use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CircularySortedArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($arr): bool
    {
        $idx = -1;
        for ($i = 0; $i < count($arr) - 1; $i++) {
            if ($arr[$i + 1] < $arr[$i]) {
                if ($idx < 0 && $arr[0] >= $arr[count($arr) - 1]) {
                    $idx = $i;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
