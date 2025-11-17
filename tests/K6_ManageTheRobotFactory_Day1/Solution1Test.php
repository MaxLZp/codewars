<?php

namespace tests\K6_ManageTheRobotFactory_Day1;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ManageTheRobotFactory_Day1\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($scraps, $numberOfRobots): int 
    {
        return ceil(array_reduce($scraps, function($carry, $scrap)  {
            return $carry * 100 / (100 - $scrap);
        }, 50 * $numberOfRobots));
    }
}
