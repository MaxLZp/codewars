<?php

namespace tests\K6_PhoneWords;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PhoneWords\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    private function solve($str) {
        $map = [
            '222' => 'c',
            '22' => 'b',
            '2' => 'a',
            '333' => 'f',
            '33' => 'e',
            '3' => 'd',
            '444' => 'i',
            '44' => 'h',
            '4' => 'g',
            '555' => 'l',
            '55' => 'k',
            '5' => 'j',
            '666' => 'o',
            '66' => 'n',
            '6' => 'm',
            '7777' => 's',
            '777' => 'r',
            '77' => 'q',
            '7' => 'p',
            '888' => 'v',
            '88' => 'u',
            '8' => 't',
            '9999' => 'z',
            '999' => 'y',
            '99' => 'x',
            '9' => 'w',
            '\*' => '+',
            '1' => '',
            '0' => ' ',
        ];
        $result = $str;
        foreach($map as $num => $char) {
            $result = preg_replace('/'.$num.'/', $char, $result);
        }

        return $result;
    }

}
