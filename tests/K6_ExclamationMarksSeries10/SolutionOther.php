<?php

namespace tests\K6_ExclamationMarksSeries10;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ExclamationMarksSeries10\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        // will match all part of the string with equal number of exclamation marks(will throw out rest of marks):
        // E.g.:
        //   '!!!Q!!' will match '!!Q!!'
        //   '!!Q!!!!' will match '!!Q!!'
        //
        preg_match_all("/(!*)\w+\1/", $s, $matches);

        return implode(" ", $matches);
    }

}
