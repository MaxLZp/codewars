<?php

namespace tests\K7_SumAndLength;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SumAndLength\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr) {
        $res = [
            'sum' => 0,
            'neg' => 0,
            'zer' => 0,
        ];
        foreach ($arr as $item) {
            if ($item > 0) {
                $res['sum'] += $item;
            }
            if ($item < 0) {
                $res['neg']++;
            }
            if ($item == 0) {
                $res['zer']++;
            }
        }

        return sprintf('%d %d', $res['sum'], $res['neg'] + (ceil($res['zer'] / 2)));
    }
}
