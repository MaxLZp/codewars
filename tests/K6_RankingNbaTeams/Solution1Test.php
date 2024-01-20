<?php

namespace tests\K6_RankingNbaTeams;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_RankingNbaTeams\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($resultSheet, $toFind)
    {
        if (!$toFind) { return ""; }

        $stats = [];
        foreach (explode(',', $resultSheet) as $result) {
            preg_match_all('/([\d.]+)\b/', $result, $scores);
            $scores = array_shift($scores);
            if (is_float(1*$scores[0]) || is_float(1*$scores[1])) {
                return 'Error(float number):'.$result;
            }
            $teams = array_filter(preg_split('/([\d.]+)\b/', $result));
            foreach ($teams as $i => $team) {
                $teamName = trim(strtolower($team));
                if (!array_key_exists($teamName, $stats)) {
                    $stats[$teamName] = [
                        'team' => $team,
                        'w' => 0,
                        'd' => 0,
                        'l' => 0,
                        'scored' => 0,
                        'conceded' => 0,
                    ];
                }
                $stats[$teamName]['scored'] += $scores[$i];
                $stats[$teamName]['conceded'] += $scores[ $i == 0 ? 1 : 0];
                $stats[$teamName]['w'] += $i == 0
                    ? (1*$scores[0] > 1*$scores[1] ? 1 : 0)
                    : (1*$scores[1] > 1*$scores[0] ? 1 : 0);
                $stats[$teamName]['l'] += $i == 0
                    ? (1*$scores[0] < 1*$scores[1] ? 1 : 0)
                    : (1*$scores[1] < 1*$scores[0] ? 1 : 0);
                $stats[$teamName]['d'] += 1*$scores[1] == 1*$scores[0] ? 1 : 0;
            }
        }
        if (!array_key_exists(strtolower($toFind), $stats)) {
            return $toFind.":This team didn't play!";
        }
        $toFindStats = $stats[strtolower($toFind)];
        return sprintf("%s:W=%d;D=%d;L=%d;Scored=%d;Conceded=%d;Points=%d",
            $toFind,
            $toFindStats['w'],
            $toFindStats['d'],
            $toFindStats['l'],
            $toFindStats['scored'],
            $toFindStats['conceded'],
            $toFindStats['w']*3 + $toFindStats['d']
        );
    }

}
