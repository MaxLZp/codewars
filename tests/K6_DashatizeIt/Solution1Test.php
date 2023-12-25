<?php

namespace tests\K6_DashatizeIt;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DashatizeIt\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $num): string
    {
        preg_match_all("/\d/", "{$num}", $digits);
        $result = '';
        foreach ($digits[0] as $digit) {
            if (intval($digit) %2 != 0) {
                $result .= "-{$digit}-";
                continue;
            }
            $result .= $digit;
        }
        return trim(preg_replace('/--/', '-', $result), '-');
    }
}
