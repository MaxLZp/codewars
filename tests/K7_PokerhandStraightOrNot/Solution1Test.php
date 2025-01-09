<?php

namespace tests\K7_PokerhandStraightOrNot;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_PokerhandStraightOrNot\DataProvider::data
     */
    public function execute($input, $expected, $message) {
        $this->assertSame($expected, $this->solve($input), $message);
    }

    public function solve($cards): bool
    {
        if (count($cards) < 5) {return false;}

        sort($cards, SORT_NUMERIC);
        if ($cards[count($cards) - 1] == 14) {
            array_unshift($cards, 1);
        }
        $cards = array_values(array_unique($cards));

        for ($i = 4; $i < count($cards); $i++) {
            if ($cards[$i] - $cards[$i - 4] == 4) {
                return true;
            }
        }

        return false;
    }
}
