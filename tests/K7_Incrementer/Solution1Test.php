<?php

namespace tests\K7_Incrementer;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_Incrementer\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($nums): array
    {
        return array_map(function($value, $key) {
            return ($value + $key + 1) % 10;
        }, $nums, array_keys($nums));
    }
}
