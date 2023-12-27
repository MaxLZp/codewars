<?php

namespace tests\K6_StatisticsForAnAthleticAssociation;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_StatisticsForAnAthleticAssociation\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $strg): string
    {
        if (!$strg) { return '';}
        $results = array_map(function($resStr) {
            $parts = preg_split('/\|/', trim($resStr));
            return 3600*(int)$parts[0] + 60*(int)$parts[1] + $parts[2];
        }, preg_split('/,/', $strg));
        sort($results);

        $count = count($results);
        $range = $results[$count-1] - $results[0];
        $average = (int)floor(array_sum($results)/$count);
        $median = $count % 2 == 0
            ? (int)(($results[(int)floor($count/2)] + $results[(int)floor($count/2)-1]) / 2)
            : $results[(int)floor($count/2)];

        $range = gmdate('H|i|s', $range);
        $average = gmdate('H|i|s', $average);
        $median = gmdate('H|i|s', $median);

        return sprintf('Range: %1$s Average: %2$s Median: %3$s', $range, $average, $median);
    }
}
