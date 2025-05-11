<?php

namespace tests\K7_SearchForLetters;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SearchForLetters\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($string): string
    {
        $result = array_fill(0, 26, '0');
        preg_match_all('/[a-z]/i', strtolower($string), $match);
        foreach($match[0] ?: [] as $letter) {
            $result[ord($letter) - ord('a')] = '1';
        }

        return implode('', $result);
    }
}
