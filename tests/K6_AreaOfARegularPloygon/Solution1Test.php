<?php

namespace tests\K6_AreaOfARegularPloygon;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AreaOfARegularPloygon\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        try {
            if (! preg_match('/(\d+(?:\.\d+)*) sides of (\d+(?:\.\d+)*) (\S+) each/', $s, $matches)) {
                throw new \Exception('Invalid input');
            }

            list(, $sides, $length, $units) = $matches;
            if ($sides < 3 || (round($sides) != $sides)) {
                throw new \Exception('Invalid input');
            }
            $area = ($length * $length * $sides) / (4 * tan( deg2rad(180 / $sides)));

            return sprintf('%1$.2f sq.%2$s', $area, $units);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
