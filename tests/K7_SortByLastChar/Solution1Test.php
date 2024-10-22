<?php

namespace tests\K7_SortByLastChar;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SortByLastChar\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $x): array
    {
        $result = explode(' ', $x);
        usort($result, function($l, $r) {
            return ord($l[strlen($l) - 1]) - ord($r[strlen($r) - 1]);
            // return ($l[strlen($l) - 1]) <=> ($r[strlen($r) - 1]);
        });
        return $result;
    }
}
