<?php

namespace tests\K6_AreWeAlternate;

use PHPUnit\Framework\TestCase;

class Solution2Other extends TestCase
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
        return !preg_match('/[aeiou]{2}|[^aeiou]{2}/', $s);
    }
}
