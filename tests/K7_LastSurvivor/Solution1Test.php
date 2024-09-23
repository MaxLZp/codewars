<?php

namespace tests\K7_LastSurvivor;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_LastSurvivor\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(string $letters, array $coords): string {
        foreach ($coords as $coord) {
            $letters = substr_replace($letters, '', $coord , 1);
            // $letters = substr($letters, 0, $coord).substr($letters, $coord + 1);
        }

        return $letters;
    }
}
