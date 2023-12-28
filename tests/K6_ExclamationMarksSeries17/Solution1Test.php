<?php

namespace tests\K6_ExclamationMarksSeries17;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ExclamationMarksSeries17\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(string $l, string $r): string
    {
        $ls = substr_count($l, '!') * 2 + substr_count($l, '?') * 3;
        $rs = substr_count($r, '!') * 2 + substr_count($r, '?') * 3;

        return ($rs > $ls)
            ? 'Right'
            : (($ls > $rs)
                ? 'Left'
                : 'Balance'
            );
    }

}
