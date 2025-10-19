<?php

namespace tests\K6_ProductOfTwoSquares;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    public function testSample() {
        $this->doTest(256, [[1,16],[2,8],[4,4]]);
        $this->doTest(81, [[1,9],[3, 3]]);
        $this->doTest(2, []);
        $this->doTest(100, [[1, 10], [2, 5]]);
    }

    private function sort2D(array &$array2d) {
        foreach ($array2d as &$subArray)
            sort($subArray);
        sort($array2d);
    }

    private function doTest(int $n, array $expected) {
        $message = "for n = " . (string)$n . "\n";
        $actual = $this->solve($n);
        $this->sort2D($expected);
        $this->sort2D($actual);
        $this->assertSame($expected, $actual, $message);
    }

    public function solve(int $n): array 
    {
        $result = [];
        for($a = 1; $a <= sqrt($n); $a++) {
            $b = (int)sqrt($n / ($a * $a));
            if ($n == $a * $a * $b * $b) {
                $min = min($a, $b);
                if (empty($result[$min])) {
                    $result[$min] = [$min, max($a, $b)];
                }
            }
        }

        return array_values($result);
    }

}
