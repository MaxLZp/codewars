<?php

namespace tests\K6_RectangleIntoSquares;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_RectangleIntoSquares\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($lng, $wdth)
    {
        if ($lng == $wdth) {
            return null;
        }
        if ($lng < $wdth) {
            return array_merge([$lng], $this->solve($wdth - $lng, $lng) ?: [$lng]);
        } else {
            return array_merge([$wdth], $this->solve($lng- $wdth, $wdth) ?: [$wdth]);
        }
    }

}
