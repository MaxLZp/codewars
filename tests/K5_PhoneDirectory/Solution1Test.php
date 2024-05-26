<?php

namespace tests\K5_PhoneDirectory;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_PhoneDirectory\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($strng, $num): string
    {
        preg_match_all('/^\+*(.*'.$num.'.*)$/m', $strng, $match);
        $match = $match[1];
        if (count($match) > 1) { return 'Error => Too many people: '.$num; }
        if (count($match) == 0) { return 'Error => Not found: '.$num; }

        $match = array_shift($match);
        preg_match('/<(.*)>/', $match, $name);
        $name = array_pop($name);

        $address = preg_replace(['/\+*'.$num.'/', '/<'.$name.'>/'], '', $match);
        $address = preg_replace('/[_]/', ' ', $address);
        $address = preg_replace('/[$;]/', '', $address);
        $address = preg_replace('/\s\s/', ' ', $address);
        preg_match('/\w.*\w\.*/', $address, $address);
        $address = array_pop($address);

        return "Phone => {$num}, Name => {$name}, Address => {$address}";
    }

}







