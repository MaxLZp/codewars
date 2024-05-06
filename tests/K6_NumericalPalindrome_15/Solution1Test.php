<?php

namespace tests\K6_NumericalPalindrome_15;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_NumericalPalindrome_15\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($num, $s): array|string
    {
        if (
            ! is_int($num)
            ||
            ! is_int($s)
            ||
            $num < 0
        ) { return 'Not valid'; }

        $palindromes = [];
        $current = max($num, 10);
        while ($s > 0) {
            if ($this->isPalindrome($current)) {
                $palindromes[] = $current;
                $s--;
            }
            $current++;
        }

        return $palindromes;
    }

    private function isPalindrome(int $num): bool
    {
        return strrev($num) == $num;
    }
}
