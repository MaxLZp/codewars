<?php

namespace tests\K6_PianoKata_Part1;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PianoKata_Part1\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($keyPressCount): string
    {
        $keyPressCount = $keyPressCount % 88 ?: 88;
        $blacks = [2];
        for ($i=5; $i < 89; $i+=12) {
            $blacks[] = $i;
            $blacks[] = $i+2;
            $blacks[] = $i+5;
            $blacks[] = $i+7;
            $blacks[] = $i+9;
        }
        return in_array($keyPressCount, $blacks) ? 'black' : 'white';
    }
}
