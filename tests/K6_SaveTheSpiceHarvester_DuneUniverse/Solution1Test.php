<?php

namespace tests\K6_SaveTheSpiceHarvester_DuneUniverse;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SaveTheSpiceHarvester_DuneUniverse\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(array $data) : string
    {
        $whx = abs($data['harvester'][0] - $data['worm'][0][0]);
        $why = abs($data['harvester'][1] - $data['worm'][0][1]);
        $whd = hypot($whx, $why);
        $wht = $whd / $data['worm'][1];

        $chx = abs($data['harvester'][0] - $data['carryall'][0][0]);
        $chy = abs($data['harvester'][1] - $data['carryall'][0][1]);
        $chd = hypot($chx, $chy);
        $cht = $chd / $data['carryall'][1] + 1;

        return ($cht - $wht) < 0
            ? 'The spice must flow! Rescue the harvester!'
            : "Damn the spice! I'll rescue the miners!";
    }
}
