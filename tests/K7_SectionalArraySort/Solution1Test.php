<?php

namespace tests\K7_SectionalArraySort;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SectionalArraySort\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($array, $start, $length = null): array
    {
        $sorted = array_slice($array, $start, ($length === 0 ? null : $length));
        sort($sorted, SORT_NUMERIC);

        return array_merge(
            array_slice($array, 0, $start),
            $sorted,
            $length ? array_slice($array, $start + $length) : []
        );
    }
}
