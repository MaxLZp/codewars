<?php

namespace tests\K7_BitsBattle;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_BitsBattle\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $numbers): string
    {
        $total = 0;
        foreach ($numbers as $number) {
            if (!$number) {
                continue;
            }
            if ($number % 2 == 0) {
                $total -= substr_count(decbin($number), '0');
            } else {
                $total += substr_count(decbin($number), '1');
            }
        }
        return $total == 0 ? 'tie' : ($total > 0 ? 'odds win' : 'evens win');
    }
}
