<?php

namespace tests\K7_AreaOfAnArrow;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AreaOfAnArrow\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve(...$input));
    }

    public function solve(int $a, int $b): float
    {
        return 0.5 * $a * $b * 0.5;
    }
}
