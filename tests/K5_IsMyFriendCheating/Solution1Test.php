<?php

namespace tests\K5_IsMyFriendCheating;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_IsMyFriendCheating\DataProvider::data
     */
    public function execute($anput, $expected) {
        $this->assertSame($expected, $this->solve($anput));
    }

    public function solve(int $n): array {
        $result = [];

        $sum = ($n)*($n + 1) / 2;
        for ($a = 1; $a < $n; $a++) { 
            // from: $sum - $a - $b = $a * $b
            // $b is: $b = ($sum - $a) / ($a + 1);
            $b = ($sum - $a) / ($a + 1);
            // $b must be int and lessOrEqual than $n
            if ($b == (int)$b && $b <= $n) {
                $result[] = [$a, $b];
            }
        }

        return $result;
    }

}







