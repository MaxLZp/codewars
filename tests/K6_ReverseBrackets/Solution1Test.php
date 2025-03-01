<?php

namespace tests\K6_ReverseBrackets;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReverseBrackets\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    private function solve($s): string
    {
        $str = $s;
        while (preg_match('/\([^()]+\)/i', $str, $match)) {
            $s1 = strrev(preg_replace('/[()]/', '', $match[0]));
            $str = str_replace($match[0], $s1, $str);
        };

        return $str;
    }
}
