<?php

namespace tests\K6_AreWeAlternate;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AreWeAlternate\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s): bool
    {
        $str = preg_replace(['/[^aeiou]/', '/[aeiou]/'], ['0', '1'], $s);
        for ($i = 1; $i < strlen($str); $i++) {
            if ($str[$i] + $str[$i-1] != 1) { return false; }
        }

        return true;
    }
}
