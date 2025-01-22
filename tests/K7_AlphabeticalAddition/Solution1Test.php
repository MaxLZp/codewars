<?php

namespace tests\K7_AlphabeticalAddition;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AlphabeticalAddition\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(...$letters): string
    {
        $A = ord('a') - 1;
        $sum = array_reduce($letters, function ($carry, $el) use ($A) {
            return $carry + ord($el) - $A;
        }, 0);
        $sum %= ord('z') - $A;

        return $sum ? chr($A + $sum) : 'z';
    }
}
