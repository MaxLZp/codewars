<?php

namespace tests\K6_LotteryTicket;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_LotteryTicket\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(array $ticket, int $win): string {

        return array_reduce($ticket, function($carry, $tv) {
            return $carry + (preg_match('/'.chr($tv[1]).'/', $tv[0]) ? 1 : 0);
        }, 0) >= $win ? "Winner!" : "Loser!";
    }
}
