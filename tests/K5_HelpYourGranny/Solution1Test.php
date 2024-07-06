<?php

namespace tests\K5_HelpYourGranny;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_HelpYourGranny\DataProvider::data
     */
    public function execute($friends1, $fTowns1, $distTable1, $expected) {
        $this->assertSame($expected, $this->solve($friends1, $fTowns1, $distTable1));
    }

    public function solve($friends, $fTowns, $distTable): int
    {
        $result = 0;
        $lfTowns = [];
        foreach ($fTowns as $town) {
            $lfTowns[$town[0]] = $town[1];
        }

        $prevFriend = null;
        foreach ($friends as $friend) {
            if (!array_key_exists($friend, $lfTowns)) {
                continue;
            }

            if (!$prevFriend) {
                $result += $distTable[$lfTowns[$friend]];
                $prevFriend = $friend;
                continue;
            }

            $result += sqrt($distTable[$lfTowns[$friend]]**2 - $distTable[$lfTowns[$prevFriend]]**2);
            $prevFriend = $friend;
        }
        $result += $distTable[$lfTowns[$prevFriend]];

        return intval($result);
    }

}







