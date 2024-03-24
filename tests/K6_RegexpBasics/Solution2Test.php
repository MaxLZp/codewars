<?php

namespace tests\K6_RegexpBasics;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_RegexpBasics\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($address): bool
    {
        return filter_var($address, FILTER_VALIDATE_IP);
    }

}
