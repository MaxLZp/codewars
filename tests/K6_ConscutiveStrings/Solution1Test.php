<?php

namespace tests\K6_ConscutiveStrings;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ConscutiveStrings\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($strarr, $k): string
    {
        $strArrLen = count($strarr);
        if (
            $strArrLen == 0
            ||
            $k > $strArrLen
            ||
            $k <= 0
        ) {
            return "";
        }

        $longest = "";
        for ($i = 0; $i <= $strArrLen - $k; $i++) {
            $current = implode('', array_slice($strarr, $i, $k));
            if (strlen($longest) < strlen($current)) {
                $longest = $current;
            }
        }
        return $longest;
    }
}
