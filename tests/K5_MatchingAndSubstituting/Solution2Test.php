<?php

namespace tests\K5_MatchingAndSubstituting;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_MatchingAndSubstituting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve($s, $prog, $version): string
    {
        $lines = [];
        foreach (explode("\n", $s) as $line) {
            list($key, $value) = explode(': ', $line);
            $lines[$key] = $value;
        }

        if (
            preg_match('/^\d\.\d+$/', $lines['Version'], $matches)
            &&
            preg_match('/^\+1-\d{3}-\d{3}-\d{4}$/', $lines['Phone'], $matches)
        ) {
            return sprintf('Program: %1$s Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: %2$s',
                $prog,
                $lines['Version'] == '2.0'? $lines['Version'] : $version,
            );
        }

        return "ERROR: VERSION or PHONE";
    }

}







