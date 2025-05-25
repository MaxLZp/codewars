<?php

namespace tests\K5_MeanSquareError;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_MeanSquareError\DataProvider::data
     */
    public function execute($input, $expected) {
        $actual = $this->solve($input[0], $input[1]);
        $this->assertTrue(abs($expected) <= 1 ? abs($expected - $actual) <= 1e-9 : abs(($expected - $actual) / $expected) <= 1e-9, "\r\nFailed asserting that actual value $actual is sufficiently close to expected value $expected (accepted relative error: 1e-9)");
    }

    public function solve(array $a, array $b): float
    {
        $sum = 0;
        foreach ($a as $i => $item) {
            $sum += abs($item - $b[$i]) ** 2;
        }

        return $sum / count($a);
    }

}







