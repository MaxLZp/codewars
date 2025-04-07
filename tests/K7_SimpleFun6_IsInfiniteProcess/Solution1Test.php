<?php

namespace tests\K7_SimpleFun6_IsInfiniteProcess;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun6_IsInfiniteProcess\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(int $a, int $b): bool
    {
        return $a > $b || ($b - $a) % 2;
    }
}
