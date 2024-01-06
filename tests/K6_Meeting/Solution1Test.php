<?php

namespace tests\K6_Meeting;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Meeting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s): string
    {
        $friends = array_map(function($friend) {
            return strtoupper(preg_replace('/(\w+):(\w+)/', '($2, $1)', $friend));
        }, preg_split('/;/', $s));

        usort($friends, function($friendL, $friendR) {
            return strcmp($friendL, $friendR);
        });
        return implode($friends);
    }
}
