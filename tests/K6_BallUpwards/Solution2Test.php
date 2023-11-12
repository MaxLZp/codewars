<?php

namespace tests\K6_BallUpwards;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_BallUpwards\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * ??????????
     *
     * @param  int     $v0
     * @return integer
     */
    public function solve($v0): int
    {
        return round((($v0 / 3.6) / 9.81) * 10);
    }
}
