<?php

namespace tests\K6_StringTransformer;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_StringTransformer\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        for ($i=0; $i < strlen($s); $i++) {
            if (preg_match('/[A-Z]/', $s[$i], $matches)) {
                $s[$i] = strtolower($s[$i]);
                continue;
            }
            $s[$i] = strtoupper($s[$i]);
        }

        $strings = explode(' ', $s);
        $strings = array_reverse($strings);
        return implode(' ', $strings);
    }
}
