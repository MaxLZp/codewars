<?php

namespace tests\K7_Thinkful_ListAndLoopDrills_InverseSlicer;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_Thinkful_ListAndLoopDrills_InverseSlicer\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(array $items, int $a, int $b)
    {
        for ($i=$a; $i < $b; $i++) {
            unset($items[$i]);
        }
        return array_values($items);
    }
}
