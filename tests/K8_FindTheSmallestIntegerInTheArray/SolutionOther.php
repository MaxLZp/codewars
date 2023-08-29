<?php

namespace tests\K8_FindTheSmallestIntegerInTheArray;

use PHPUnit\Framework\TestCase;

class SolutionOther extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_FindTheSmallestIntegerInTheArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($arr) {
        return min($arr);
    }
}
