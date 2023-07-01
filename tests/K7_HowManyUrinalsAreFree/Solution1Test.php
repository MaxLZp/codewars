<?php

namespace tests\K7_HowManyUrinalsAreFree;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HowManyUrinalsAreFree\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): int
    {
        if (strpos((string)$input, '11') !== false) {
            return -1;
        }

        $input = str_split('0'.$input.'0');
        $result = 0;
        for ($i = 1; $i < count($input) - 1; ) {
            if (
                $input[$i-1] === '0'
                &&
                $input[$i] === '0'
                &&
                $input[$i+1] === '0'
            ) {
                $result++;
                $i += 2;
                continue;
            }
            $i++;
        }
        return $result;
    }
}
