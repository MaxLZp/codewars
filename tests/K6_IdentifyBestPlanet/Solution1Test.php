<?php

namespace tests\K6_IdentifyBestPlanet;

use PHPUnit\Framework\TestCase;

define('REQUIRED_ELEMENTS', ['H', 'C', 'N', 'O', 'P', 'Ca']);

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_IdentifyBestPlanet\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(array $solarSystem, int $maxSize): string
    {
        $re = array_map(function($el) {
            return '/'.$el.'[^a-z]/';
        }, REQUIRED_ELEMENTS);

        $result = '';
        foreach ($solarSystem as $planet) {
            preg_match('/_(\d+)/', $planet, $planetSurface);
            $planetSurface = intval($planetSurface[1]);
            foreach ($re as $r) {
                if (! preg_match($r, $planet, $matches) || $planetSurface > $maxSize) {
                    continue 2;
                }
            }

            if (! $result) {
                $result = $planet;
                continue;
            }

            preg_match('/_(\d+)/', $result, $resultSurface);
            if ($planetSurface > intval($resultSurface[1])) {
                $result = $planet;
            }
        }

        return $result;
    }
}
