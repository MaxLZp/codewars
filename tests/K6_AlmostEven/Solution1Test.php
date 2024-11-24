<?php

namespace tests\K6_AlmostEven;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AlmostEven\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }


    public function solve(int $num, int $parts)
    {
        $val = intval($num / $parts);
        $rest = $num % $parts;

        return array_merge(
            array_fill(0, $parts - $rest, $val),
            array_fill(0, $rest, $val + 1)
        );

        // or
        // return [
        //     ...array_fill(0, $parts - $rest, $val),
        //     ...array_fill(0, $rest, $val + 1)
        // ]
    }

}
