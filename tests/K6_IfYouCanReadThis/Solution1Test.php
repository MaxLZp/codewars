<?php

namespace tests\K6_IfYouCanReadThis;

use PHPUnit\Framework\TestCase;

/* You can use the preloaded global $NATO associative array
e.g. $NATO['A'] === 'Alfa'
*/
$NATO = [
    "A" => "Alfa",  "B" => "Bravo",   "C" => "Charlie",
    "D" => "Delta",  "E" => "Echo",    "F" => "Foxtrot",
    "G" => "Golf",   "H" => "Hotel",   "I" => "India",
    "J" => "Juliett","K" => "Kilo",    "L" => "Lima",
    "M" => "Mike",   "N" => "November","O" => "Oscar",
    "P" => "Papa",   "Q" => "Quebec",  "R" => "Romeo",
    "S" => "Sierra", "T" => "Tango",   "U" => "Uniform",
    "V" => "Victor", "W" => "Whiskey", "X" => "X-ray",
    "Y" => "Yankee", "Z" => "Zulu"
];

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_IfYouCanReadThis\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($words) {
        $letters = str_split(preg_replace('/[^a-zA-Z0-9,.!?]/', '', $words));
        return implode(' ', array_map(function($letter) {
            global $NATO;
            $letter = strtoupper($letter);
            return array_key_exists($letter, $NATO) ? str_replace('-', '', $NATO[$letter]) : $letter;
        }, $letters));
    }
}
