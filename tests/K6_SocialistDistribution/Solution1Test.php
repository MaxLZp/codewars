<?php

namespace tests\K6_SocialistDistribution;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SocialistDistribution\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(array $population, int $minimum): array 
    {
        if (array_sum($population) / count($population) < $minimum) { return []; }

        $max = max($population);
        $min = min($population);
        while($min < $minimum) {
            $maxIdx = array_search($max, $population);
            $minIdx = array_search($min, $population);
            $population[$maxIdx]--;
            $population[$minIdx]++;
            $max = max($population);
            $min = min($population);
        }

        return $population;
    }
}
