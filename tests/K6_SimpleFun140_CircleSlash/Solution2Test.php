<?php

namespace tests\K6_SimpleFun140_CircleSlash;

use PHPUnit\Framework\TestCase;

/**
 * Memory consuming version.
 * Fails on codewars.com with fatal error:
 * Fatal error: Allowed memory size of 134217728 bytes exhausted (tried to allocate 17179869192 bytes)
 */
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SimpleFun140_CircleSlash\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $n): int
    {
        return $this->rec(range(1, $n), 1);
    }

    private function rec(array $arr, $victim): int
    {
        if (count($arr) <= 1) {
            return $arr[0];
        }

        $newArr = [...array_slice($arr, 0, $victim), ...array_slice($arr, $victim + 1)];
        unset($arr);
        return $this->rec($newArr, ($victim+1) % count($newArr));
    }
}
