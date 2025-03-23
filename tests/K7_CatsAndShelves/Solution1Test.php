<?php

namespace tests\K7_CatsAndShelves;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CatsAndShelves\DataProvider::data
     */
    public function execute($start, $finish, $expected) {
        $this->assertSame($expected, $this->solve($start, $finish), "Failed at cats ({$start}, {$finish})");
    }

    public function solve(int $start, int $finish): int
    {
        return floor(($finish - $start) / 3) + ceil(($finish - $start) % 3);
    }
}
