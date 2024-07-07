<?php

namespace tests\K5_ResistorColorCodes_Part2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_ResistorColorCodes_Part2\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($ohmsString): string
    {
        $map = [
            "black",
            "brown",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "violet",
            "gray",
            "white",
            "silver",
        ];

        preg_match('/(.*\d)(k|M|)/', $ohmsString, $matches);
        $value = $matches[1] ;
        switch ($matches[2]) {
            case 'k': $value *= 1000; break;
            case 'M': $value *= 1000000; break;
            default: $value *= 1;
        }
        $nominal = substr($value, 0, 2);
        $power = strlen(substr($value, 2));

        $result = $map[$nominal[0]] . ' ' . $map[$nominal[1]] . ' ' . $map[$power];

        return $result.' gold';
    }

}







