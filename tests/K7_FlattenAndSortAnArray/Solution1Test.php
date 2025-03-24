<?php

namespace tests\K7_FlattenAndSortAnArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FlattenAndSortAnArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $array): array
    {
        $result = array_merge([], ...$array);
        sort($result, SORT_NUMERIC);

        return $result;
    }
}
