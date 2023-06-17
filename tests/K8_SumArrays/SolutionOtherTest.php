<?php

namespace tests\K8_Sumarrays;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_Sumarrays\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($input)
    {
        return array_sum($input);
    }
}
