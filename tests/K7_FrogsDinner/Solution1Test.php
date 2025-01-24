<?php

namespace tests\K7_FrogsDinner;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FrogsDinner\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $flies): string
    {
        $chris = $this->summation($flies);
        $tom = $this->summation(floor($chris / 2));
        $cat = $this->summation($chris + $tom);

        return sprintf('Chris ate %1$d flies, Tom ate %2$d flies and Cat ate %3$d flies', $chris, $tom, $cat);
    }

    private function summation(int $n): int
    {
        return (1 + $n) * $n / 2;
    }
}
