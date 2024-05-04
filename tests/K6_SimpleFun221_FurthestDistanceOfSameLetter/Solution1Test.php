<?php

namespace tests\K6_SimpleFun221_FurthestDistanceOfSameLetter;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SimpleFun221_FurthestDistanceOfSameLetter\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $longest = ['', 0];
        foreach (array_unique(str_split($s)) as $char) {
            preg_match_all("/$char.*$char/", $s, $matches);
            if (count($matches[0]) == 0)  { continue; }

            $len = strlen($matches[0][0]);
            if ($len > $longest[1]) {
                $longest = [$char, $len];
            }
        }

        return implode('', $longest);
    }
}
