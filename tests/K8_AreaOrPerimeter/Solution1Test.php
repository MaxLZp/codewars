<?php

namespace tests\K8_AreaOrPerimeter;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_AreaOrPerimeter\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($l, $w)
    {
        return $l === $w
            ? $l * $w
            : 2 * ($l + $w);
    }
}
