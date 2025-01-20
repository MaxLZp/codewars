<?php

namespace tests\K7_nSmallest;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_nSmallest\DataProvider::data
     */
    public function execute($arr, $pos, $expected) {
        $this->doTest($arr, $pos, $expected);
    }

    private function doTest(array $arr, int $pos, int $expected)
    {
        $this->assertSame(
            $expected,
            $this->solve($arr, $pos),
            "NthSmallest(" . json_encode($arr) . ", $pos) returned an incorrect answer"
        );
    }

    public function solve(array $arr, int $pos): int
    {
        // usort($arr, fn ($l, $r) => $l - $r);
        sort($arr, SORT_NUMERIC);
        return $arr[$pos-1];
    }
}
