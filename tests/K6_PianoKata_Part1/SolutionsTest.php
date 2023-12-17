<?php

namespace tests\K6_PianoKata_Part1;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
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
        $keyPressCount = ($keyPressCount - 1) % 88 % 12;
        $blacks = [1, 4, 6, 9, 11];
        return in_array($keyPressCount, $blacks) ? 'black' : 'white';
    }
}
