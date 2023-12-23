<?php

namespace tests\K7_StringScramble;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_StringScramble\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($str, $arr): string
    {
        $arr = array_combine($arr, str_split($str));
        ksort($arr);
        return implode('', $arr);
    }
}
