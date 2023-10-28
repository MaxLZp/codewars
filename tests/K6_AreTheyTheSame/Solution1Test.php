<?php

namespace tests\K6_AreTheyTheSame;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AreTheyTheSame\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($a1, $a2): bool
    {
        if (is_null($a1) || is_null($a2)) { return false;}
        if (count($a1) != count($a2)) { return false;}
        sort($a1);
        sort($a2);
        foreach ($a1 as $index => $value) {
            if ($value * $value != $a2[$index]) {
                return false;
            }
        }
        return true;
    }
}
