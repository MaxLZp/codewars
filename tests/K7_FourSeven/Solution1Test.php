<?php

namespace tests\K7_FourSeven;

use PHPUnit\Framework\TestCase;

set_error_handler(function($errno, $errstr, $errfile, $errline) {
    // Throw an exception for every warning (like undefined array keys)
    throw new \ErrorException($errstr, 0, $errno, $errfile, $errline);
});
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FourSeven\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int
    {
        // my
        $a = [4 => 7, 7 => 4,];
        try {
            return $a[$n];
        } catch(\ErrorException $e) {
            return 0;
        }

        // or
        // return [4 => 7, 7 => 4][(int)$n];

        // or
        // return [$n=>0, 4=>7,7=>4][$n];

        // or
        // return 4*($n==7) + 7*($n==4);
    }
}
