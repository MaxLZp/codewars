<?php

namespace tests\K5_Beeramid;

use PHPUnit\Framework\TestCase;


class Solution1Test extends TestCase
{

    /**
     * @dataProvider tests\K5_Beeramid\DataProvider::data
     */
    public function testSolve($input, $expected)
    {
        $this->assertEquals($expected, $this->solve(...$input));
    }

    private function solve($bonus, $price): int
    {
        $result = 0;
        while($bonus > 0) {
            $bonus -= $price * ($result + 1)**2;
            if ($bonus >= 0) {$result++; }
        }

        return $result;
    }

}







