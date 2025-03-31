<?php

namespace tests\K7_FindTheCapitals;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FindTheCapitals\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($word): array
    {
        preg_match_all('/[A-Z]/', $word, $matches, PREG_OFFSET_CAPTURE);
        return array_map(function($m) { return $m[1]; }, $matches[0]);
    }
}
