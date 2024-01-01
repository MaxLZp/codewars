<?php

namespace tests\K6_Rainfall;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Rainfall\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected[0], $this->mean($input[0], $input[1]), "Tested at 1e-2 ", 1.e-2);
        $this->assertEquals($expected[1], $this->variance($input[0], $input[1]), "Tested at 1e-2 ", 1.e-2);
    }

    public function mean($town, $strng): float
    {
        $data = $this->getTownData($town, $strng);
        if (!count($data)) { return -1;}
        return array_sum($data) / count($data);
    }

    public function variance($town, $strng): float
    {
        $mean = $this->mean($town, $strng);
        if ($mean == -1) { return -1;}
        $data = array_map(function($num) use ($mean) {
            return ($num - $mean) * ($num - $mean);
        }, $this->getTownData($town, $strng));
        return array_sum($data) / count($data);
    }

    private function getTownData($town, $strng): array
    {
        $cities = explode("\n", $strng);
        foreach ($cities as $city) {
            $count = 0;
            $strng = preg_replace('/'.$town.':/', '', $city, -1, $count);
            if ($count != 0) {
                $strng = $city;
                break;
            }
        }
        if (!$count) { return []; }
        $data = [];
        preg_match_all('/(\d+.\d*)/', $strng, $data);
        return array_map(function($numStr) {
            return floatval($numStr);
        }, $data[1]);
    }

}
