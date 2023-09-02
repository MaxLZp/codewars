<?php

namespace tests\K6_TortoiseRacing;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TortoiseRacing\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve($v1, $v2, $g) {
        if ($v1 > $v2) { return null;}
        $time = $g / ($v2 - $v1);
        $secs = $time * 3600;
        $hrs = (int)$time;
        $mins = (int)(($secs - $hrs*3600) / 60);
        $secs = (int)($secs - $hrs*3600 - $mins*60);

        return [$hrs, $mins, $secs];
    }
}
