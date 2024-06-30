<?php

namespace tests\K5_CountIPAddresses;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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
        $en = $sn = 0;
        $es = explode('.', $end);
        $ss = explode('.', $start);
        for($i = 3; $i >= 0; $i--) {
            $en += intval($es[3 - $i]) * (pow(256, $i));
            $sn += intval($ss[3 - $i]) * (pow(256, $i));
        }

        return $en - $sn;
    }

}







