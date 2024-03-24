<?php

namespace tests\K6_RegexpBasics;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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
        if (!preg_match('/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/D', $address, $matches)) { return false; }
        array_shift($matches);
        foreach ($matches as $match) {
            if (1*$match > 255) { return false; }
            if (strlen($match) != strlen(1*$match)) {return false; }
        }
        return true;
    }

}
