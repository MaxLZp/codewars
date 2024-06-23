<?php

namespace tests\K5_GreedIsGood;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_GreedIsGood\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($dice): int
    {
        $map = [
            '111' => 1000,
            '666' => 600,
            '555' => 500,
            '444' => 400,
            '333' => 300,
            '222' => 200,
            '1' => 100,
            '5' => 50,
        ];
        $sorted = array_filter($dice);
        sort($sorted);
        $sorted = implode('', $sorted);
        $result = 0;
        foreach ($map as $key => $value) {
            $sorted = preg_replace('/'.$key.'/', '', $sorted, -1, $count);
            if ($count) {
                $result += $value * $count;
            }
        }

        return $result;
    }

}







