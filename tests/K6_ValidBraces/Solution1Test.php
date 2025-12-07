<?php

namespace tests\K6_ValidBraces;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ValidBraces\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($braces): bool
    {
        $stack = [];
        for($i = 0; $i < strlen($braces); $i++) {
            if (
                count($stack)
                &&
                (
                    $braces[$i] ==')' && $stack[count($stack) - 1] == '('
                    ||
                    $braces[$i] =='}' && $stack[count($stack) - 1] == '{'
                    ||
                    $braces[$i] ==']' && $stack[count($stack) - 1] == '['
                )
            ) {
                array_pop($stack);
            } else {
                $stack[] = $braces[$i];
            }
        }

        return count($stack) == 0;
    }
}
