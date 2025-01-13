<?php

namespace tests\K7_SimpleFun_138_Similarity;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun_138_Similarity\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertFuzzyEquals($expected, $this->solve($input[0], $input[1]));
    }

    protected function assertFuzzyEquals(float $expected, float $actual, string $message = "") {
        $this->assertTrue($expected === 0.0 ? abs($actual) <= 1e-12 : abs(($expected - $actual) / $expected) <= 1e-12, (empty($message) ? "" : "$message\r\n") . "Failed asserting that the actual value $actual is within the accepted error range (1e-12) relative to the expected value $expected");
      }

    public function solve(array $a, array $b): float
    {
        return count(array_intersect($a, $b)) / count(array_unique(array_merge($a, $b)));
    }
}
