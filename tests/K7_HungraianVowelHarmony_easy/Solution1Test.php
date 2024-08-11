<?php

namespace tests\K7_HungraianVowelHarmony_easy;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HungraianVowelHarmony_easy\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $w): string
    {
        return $w.(preg_match('/[eéiíöőüű][^eéiíöőüűaáoóuú]+$/', $w) ? 'nek' : 'nak');
    }
}
