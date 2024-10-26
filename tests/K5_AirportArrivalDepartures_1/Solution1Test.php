<?php

namespace tests\K5_AirportArrivalDepartures_1;

use PHPUnit\Framework\TestCase;

define('ALPHABET', "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789");
/**
 * Doesn't pass FindMinCostTest::testExtraLargeRandom tests due to timeout.
 * Probably complexity is greater than O(n).
 */
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_AirportArrivalDepartures_1\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($lines, $rotors): array
    {
        $result = [];
        foreach ($lines as $index => $line) {
            $rotated = $rotors;
            for ($i = 1; $i < count($rotors[$index]); $i++) {
                $rotated[$index][$i] = $rotated[$index][$i-1] + $rotors[$index][$i];
            }

            $chars = str_split($line);
            foreach ($chars as $i => $char) {
                $idx = (strpos(ALPHABET, $char) + $rotated[$index][$i]) % strlen(ALPHABET);
                $chars[$i] = ALPHABET[$idx];
            }

            $result[] = implode('', $chars);
        }
        return $result;
    }
}







