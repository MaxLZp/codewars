<?php

namespace tests\K7_AlanPrtridgeIII_London;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AlanPrtridgeIII_London\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a): string
    {
        $stops = [
            'Rejection',
            'Disappointment',
            'Backstabbing Central',
            'Shattered Dreams Parkway',
        ];

        return array_diff($stops, $a)
            ? 'No, seriously, run. You will miss it.'
            : 'Smell my cheese you mother!';
    }
}
