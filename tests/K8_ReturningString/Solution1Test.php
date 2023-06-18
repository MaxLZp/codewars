<?php

namespace tests\K8_ReturningString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_ReturningString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($input)
    {
        return str_replace('<name>', $input, 'Hello, <name> how are you doing today?');
    }
}
