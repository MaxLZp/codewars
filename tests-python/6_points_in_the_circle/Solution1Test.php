<?php

namespace tests\K6_PointsInTheCircle;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PointsInTheCircle\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(int $radius): int 
    {
        $result = 0;
        for($i = -$radius; $i <= $radius; $i++) {
            for($j = -$radius; $j <= $radius; $j++) {
                $result += sqrt($i*$i + $j*$j) <= $radius ? 1 : 0;
            }    
        }

        return $result;
    }

}
