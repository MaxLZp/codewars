<?php

namespace tests\K6_GolbachsConjecture;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GolbachsConjecture\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    private function solve(int $n): array
    {
        $result = [];

        if ($n > 2 && ($n & 1) == 0) {
            for ($i = 2; $i <= $n - $i ; $i++) {
                if ($this->isPrime($i) && $this->isPrime($n - $i)) {
                    $result = [$i, $n - $i];
                    break;
                }
            }
        }

        return $result;
    }

    private function isPrime($num): bool
    {
        for ($i = 2; $i <= sqrt($num); $i++) {
            if ($num % $i == 0) {
                return false;
            }
        }

        return true;
    }
}
