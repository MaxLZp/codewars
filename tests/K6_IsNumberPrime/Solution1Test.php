<?php

namespace tests\K6_IsNumberPrime;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_IsNumberPrime\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(int $n): bool
    {
        if ($n <= 1) {
            return false;
        }
        for($i = 2; $i <= sqrt($n); $i++) {
          if ($n % $i == 0) {
            return false;
          }
        }
        return true;
    }
}
