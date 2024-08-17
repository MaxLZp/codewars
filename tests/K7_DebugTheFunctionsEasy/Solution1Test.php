<?php

namespace tests\K7_DebugTheFunctionsEasy;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * Another solution when using functions might be:
     *
     * use function array_product as multi;
     * use function array_sum as add;
     * use function strrev as reverse;
     */

    /**
     * @test
     * @dataProvider \tests\K7_DebugTheFunctionsEasy\DataProvider::multi
     */
    public function executeMulti($input, $expected) {
        $this->assertSame($expected, $this->multi($input));
    }

    public function multi($input): int
    {
        return array_product($input);
    }

    /**
     * @test
     * @dataProvider \tests\K7_DebugTheFunctionsEasy\DataProvider::add
     */
    public function executeAdd($input, $expected) {
        $this->assertSame($expected, $this->add($input));
    }

    public function add($input): int
    {
        return array_sum($input);
    }

    /**
     * @test
     * @dataProvider \tests\K7_DebugTheFunctionsEasy\DataProvider::reverse
     */
    public function executeReverse($input, $expected) {
        $this->assertSame($expected, $this->reverse($input));
    }

    public function reverse($string): string
    {
        return strrev($string);
    }
}
