<?php

namespace tests\K6_PianoKata_Part2;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PianoKata_Part2\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($keyPressCount): string
    {
        $keyPressCount = ($keyPressCount - 1) % 88 % 12;
        $notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        return $notes[$keyPressCount];
    }
}
