<?php

namespace tests\K7_FindTwins;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FindTwins\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arr): ?int
    {
        return array_flip(array_count_values($arr))[2] ?? null;
    }
}
