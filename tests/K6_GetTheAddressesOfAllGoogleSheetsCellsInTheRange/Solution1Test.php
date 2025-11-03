<?php

namespace tests\K6_GetTheAddressesOfAllGoogleSheetsCellsInTheRange;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GetTheAddressesOfAllGoogleSheetsCellsInTheRange\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $range): array 
    {
        preg_match('/^([a-z])(\d+):([a-z])(\d+)$/i', $range, $matches);
        $matches[1] = ord($matches[1]);
        $matches[3] = ord($matches[3]);
        if ($matches[1] > $matches[3] || $matches[2] > $matches[4] || ($matches[1] == $matches[3] && $matches[2] == $matches[4])) {
            return [];
        }
        $result = [];
        for($line = $matches[2]; $line <= $matches[4]; $line++) {
            for($column = $matches[1]; $column <= $matches[3]; $column++) {
                $result[] = strtoupper(chr($column)).$line;
            }
        }

        return $result;
    }
}
