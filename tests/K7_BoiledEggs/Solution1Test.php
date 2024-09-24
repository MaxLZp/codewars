<?php

namespace tests\K7_BoiledEggs;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_BoiledEggs\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $eggs): int
    {
        return (int)ceil($eggs/8)*5;
    }
}
