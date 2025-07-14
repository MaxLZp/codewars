<?php

namespace tests\K6_CatKata_part1;

use phpDocumentor\Reflection\Types\Boolean;
use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CatKata_part1\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($yard, $minDistance): bool
    {
        $cats = [];
        foreach($yard as $line => $lineValue) {
            foreach(str_split($lineValue) as $point => $pointValue) {
                if ($pointValue != '-') {
                    $cats[] = [$yard[$line][$point], $line, $point];
                }
            }
        }

        for ($i = 0; $i < count($cats); $i++) { 
            for($j = $i+1; $j < count($cats); $j++) {
                // $dist = sqrt( ($cats[$i][1] - $cats[$j][1])*($cats[$i][1] - $cats[$j][1]) + ($cats[$i][2] - $cats[$j][2]) * ($cats[$i][2] - $cats[$j][2]) );
                $dist = hypot($cats[$i][1] - $cats[$j][1],  +$cats[$i][2] - $cats[$j][2]);
                if ($dist < $minDistance) { return false; }
            }
        }

        return true;
    }
}
