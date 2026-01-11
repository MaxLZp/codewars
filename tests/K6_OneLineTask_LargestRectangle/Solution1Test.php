<?php

namespace tests\K6_OneLineTask_LargestRectangle;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * @test
     * @dataProvider \tests\K6_OneLineTask_LargestRectangle\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * SOLUTION with length < 47 characters
     * <?php function rectangle_pair($p){return[$p/=4,$p];}
     */
    public function solve($p){
        return [$p/=4, $p];
    }
}
