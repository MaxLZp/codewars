<?php

namespace tests\K5_DirectionsReduction;

use PHPUnit\Framework\TestCase;

class Solution2OtherTest extends TestCase
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
        $ops = ['NORTH' => 'SOUTH', 'SOUTH' => 'NORTH', 'EAST' => 'WEST', 'WEST' => 'EAST'];
        $result = [];
        foreach($arr as $direction) {
            if (end($result) == $ops[$direction]) {
                array_pop($result);
            } else {
                $result[] = $direction;
            }
        }

        return $result;
    }

}







