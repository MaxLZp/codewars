<?php

namespace tests\K7_ThinkingAndTesting_AandB;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ThinkingAndTesting_AandB\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(int $a, int $b): int
    {
        return $a | $b;
    }
}
