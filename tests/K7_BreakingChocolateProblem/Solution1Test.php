<?php

namespace tests\K7_BreakingChocolateProblem;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_BreakingChocolateProblem\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($n, $m): int
    {
        return $n * $m - 1;
    }
}
