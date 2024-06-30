<?php

namespace tests\K5_CountIPAddresses;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_CountIPAddresses\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($start, $end): int
    {
        return ip2long($end) - ip2long($start);
    }

}







