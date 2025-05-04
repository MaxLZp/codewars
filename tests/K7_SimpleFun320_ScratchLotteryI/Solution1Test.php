<?php

namespace tests\K7_SimpleFun320_ScratchLotteryI;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun320_ScratchLotteryI\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $lottery): int
    {
        return array_reduce($lottery, function($carry, $ticket) {
            $data = array_values(array_unique(explode(' ', $ticket)));

            return $carry + (count($data) == 2 ?  1 * $data[1] : 0);
        }, 0);
    }
}
