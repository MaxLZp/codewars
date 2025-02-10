<?php

namespace tests\K7_DetermineIfThePokerHandIsFlush;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * @test
     * @dataProvider \tests\K7_DetermineIfThePokerHandIsFlush\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $cards): bool
    {
        for($i = 1, $max = count($cards); $i < $max; $i++) {
            if (substr($cards[$i], -1) != substr($cards[$i-1], 1)) {
                return false;
            }
        }
        return true;
    }
}
