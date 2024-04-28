<?php

namespace tests\K6_SameArray;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SameArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    private function solve(array $aArr, array $bArr): bool
    {
        $a = array_map(function ($item) {
            sort($item);
            return implode(':', $item);
        }, $aArr);
        $b = array_map(function ($item) {
            sort($item);
            return implode(':', $item);
        }, $bArr);
        sort($a);
        sort($b);
        return implode('', $a) == implode('', $b);
    }
}
