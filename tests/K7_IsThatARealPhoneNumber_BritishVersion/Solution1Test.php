<?php

namespace tests\K7_IsThatARealPhoneNumber_BritishVersion;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_IsThatARealPhoneNumber_BritishVersion\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str): string
    {
        return preg_match('/^\+*(0|44)7-*(\d-*){9}$/',  $str)
            ? 'In with a chance'
            : 'Plenty more fish in the sea';
    }
}
