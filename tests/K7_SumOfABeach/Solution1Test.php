<?php

namespace tests\K7_SumOfABeach;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SumOfABeach\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($beach)
    {
        return preg_match_all('/sand|water|fish|sun/i', $beach, $match);
    }
}
