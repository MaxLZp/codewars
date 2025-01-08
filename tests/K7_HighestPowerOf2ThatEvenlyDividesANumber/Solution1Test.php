<?php

namespace tests\K7_HighestPowerOf2ThatEvenlyDividesANumber;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HighestPowerOf2ThatEvenlyDividesANumber\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $n): int
    {
        $result = 1;
        for($i = 0, $num = $result; $num <= $n; $i++) {
            $num = pow(2, $i);
            if ($n % $num == 0) {
                $result = $num;
            }
        }

        return $result;
    }

    public function solveOTher(int $n): int
    {
        return $n & -$n;
    }
}
