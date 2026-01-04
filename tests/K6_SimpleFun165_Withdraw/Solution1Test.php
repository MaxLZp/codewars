<?php

namespace tests\K6_SimpleFun165_Withdraw;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider tests\K6_SimpleFun165_Withdraw\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $n): array
    {
        $result = [(int)floor($n / 100), 0, 0];
        $t = $n % 100;
        if ($t < 50 && $t % 20 != 0) {
            $t += 100;
            $result[0]--;
        }
        $result[1] = $t >= 50 && (($t - 50) % 20 == 0) ? 1 : 0;
        $result[2] = ($t - 50 * $result[1]) / 20;

        return $result;
    }

}
