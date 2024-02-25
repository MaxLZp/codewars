<?php

namespace tests\K6_UpAndDown;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_UpAndDown\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($strng)
    {
        $strngs = explode(' ', $strng);

        for ($i=1; $i < count($strngs); $i++) {
            if (
                ($i % 2 == 0 && strlen($strngs[$i]) > strlen($strngs[$i-1]))
                ||
                ($i % 2 !=  0&& strlen($strngs[$i]) < strlen($strngs[$i-1]))
            ) {
                [$strngs[$i], $strngs[$i-1]] = [$strngs[$i-1], $strngs[$i]];
            }
        }

        $strngs = array_map(function($strng, $i) {
            if (($i+1) % 2 == 0) {
                return strtoupper($strng);
            }
            return strtolower($strng);
        }, $strngs, array_keys($strngs));
        return implode(' ', $strngs);
    }
}
