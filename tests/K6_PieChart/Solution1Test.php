<?php

namespace tests\K6_PieChart;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * @test
     * @dataProvider \tests\K6_PieChart\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $obj): string
    {
        $json = json_decode($obj, true);
        $total = array_sum($json);
        $json = array_map(function($item) use ($total) {
            return round(((360 * $item)/$total), 2);
        }, $json);
        return json_encode($json);
    }

}
