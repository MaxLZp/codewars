<?php

namespace tests\K7_CountTheDigit;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CountTheDigit\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($n, $d)
    {
        $result = 0;
        for ($i = 0; $i <= $n; $i++) {
            $result += substr_count($i * $i, $d);
        }
        return $result;
    }
}
