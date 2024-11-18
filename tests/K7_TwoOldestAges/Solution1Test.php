<?php

namespace tests\K7_TwoOldestAges;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TwoOldestAges\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $ages): array
    {
        sort($ages);
        return [$ages[count($ages) - 2], $ages[count($ages) - 1]];
    }
}
