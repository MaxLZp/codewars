<?php

namespace tests\K6_NumericalPalindrome_2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_NumericalPalindrome_2\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($num)
    {
        if (! is_int($num) || $num < 0) { return "Not valid"; }
        if ($num <= 9) return false;
        $s = "{$num}";
        $slen = strlen($s);

        for ($i=0; $i < $slen; $i++) {
            for ($j=2; $j <= $slen - $i; $j++) {
                if ($this->isPalindrome(substr($s, $i, $j))) { return true; }
            }
        }

        return false;
    }

    private function isPalindrome($input): bool
    {
        for ($i = 0, $j = strlen($input)-1; $i < $j; $i++ , $j--) {
            if ($input[$i] != $input[$j]) { return false; }
        }

        return true;
    }
}
