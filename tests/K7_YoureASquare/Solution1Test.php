<?php

namespace tests\K7_YoureASquare;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_YoureASquare\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $n): bool
    {
        return $n == ((int)sqrt($n))**2;
    }
}
