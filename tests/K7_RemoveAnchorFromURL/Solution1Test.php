<?php

namespace tests\K7_RemoveAnchorFromURL;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_RemoveAnchorFromURL\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): string
    {
        return preg_replace('/#\S*$/i', '', $input);
    }
}
