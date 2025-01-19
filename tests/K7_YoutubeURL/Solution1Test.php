<?php

namespace tests\K7_YoutubeURL;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_YoutubeURL\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $str): string
    {
        return preg_replace('/^(.*)[=\/](\w+)$/', 'https://www.youtube.com/embed/$2', $str);
    }
}
