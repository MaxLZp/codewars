<?php

namespace tests\K6_CamelCaseMethod;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CamelCaseMethod\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): string
    {
        return str_replace(' ', '', ucwords($input));
    }
}
