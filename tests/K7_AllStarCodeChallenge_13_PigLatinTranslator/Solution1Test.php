<?php

namespace tests\K7_AllStarCodeChallenge_13_PigLatinTranslator;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AllStarCodeChallenge_13_PigLatinTranslator\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        if (strlen($s) < 2) {
            return $s;
        }
        $sr = preg_replace('/^([^aeoui])(.*)$/', '$2$1', $s).'ay';

        return $sr;
    }
}
