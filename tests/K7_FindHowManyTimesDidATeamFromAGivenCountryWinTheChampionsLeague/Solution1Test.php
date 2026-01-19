<?php

namespace tests\K7_FindHowManyTimesDidATeamFromAGivenCountryWinTheChampionsLeague;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FindHowManyTimesDidATeamFromAGivenCountryWinTheChampionsLeague\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($winnerList, $country): int
    {
        return array_reduce($winnerList, function($carry, $winner) use($country) {
            return $carry + ($winner['country'] == $country ? 1 : 0);
        }, 0);
    }
}
