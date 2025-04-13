<?php

namespace tests\K7_NiceArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_NiceArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): bool
    {
        foreach($arr as $el) {
            if (count(array_filter($arr, function($arrEl) use ($el) { return $arrEl + 1 == $el || $arrEl -1 == $el;} )) == 0) {
                return false;
            }
        }
        return count($arr) > 0;
    }
}
