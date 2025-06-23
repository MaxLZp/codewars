<?php

namespace tests\K6_PlayingWithPassphrases;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PlayingWithPassphrases\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($s, $n): string
    {
        $_s = str_split($s);
        $_s = array_map(function($c, $i) use ($n) {
            if (preg_match('/[0-9]/', $c, $matches)) {
                return 9 - (int)$c;
            } elseif (preg_match('/[a-z]/i', $c, $matches)) {
                $oc = ($n + ord($c) - ord('A')) % 26;
                $oc = chr(ord('A') + ($oc));
                return $i % 2 == 0 ? $oc : strtolower($oc);
            }
            return $c;
        }, $_s, array_keys($_s));
        $_s = implode('', $_s);
        $_s = strrev($_s);

        return $_s;
    }
}
