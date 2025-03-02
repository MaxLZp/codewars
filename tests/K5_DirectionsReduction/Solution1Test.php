<?php

namespace tests\K5_DirectionsReduction;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_DirectionsReduction\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arr): array
    {
        $str = implode('_', $arr);

        do {
            $str = preg_replace('/north_south|south_north|east_west|west_east/i', '', $str, -1, $replacements);
            $str = preg_replace('/_+/', '_', $str);
            $str = trim($str, '_');
        } while ($replacements > 0);

        return strlen($str) ? explode('_', $str) : [];
    }

}







