<?php

namespace tests\K6_ConsonantValue;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ConsonantValue\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): int
    {
        $vowels = ['a','e','i','o','u'];
        $max = 0;
        $current = 0;
        foreach (str_split($input) as $char) {
            if (!in_array($char, $vowels)) {
                $current += ord($char) - ord('a') + 1;
                if ($current > $max) {
                    $max = $current;
                }
                continue;
            }
            $current = 0;
        }
        return $max;
    }
}
