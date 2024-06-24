<?php

namespace tests\K6_IPvalidation;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_IPvalidation\DataProvider::valid
     */
    public function executeValid($input) {
        $this->assertTrue($this->solve($input));
    }

    /**
     * @test
     * @dataProvider \tests\K6_IPvalidation\DataProvider::invalid
     */
    public function executeInvalid($input) {
        $this->assertFalse($this->solve($input));
    }

    public function solve(string $str): bool
    {
        if (! preg_match('/^([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)$/', $str, $matches) ){
            return false;
        };
        if ($matches[1] == '0' && $matches[2] == '0' && $matches[3] == '0' && $matches[4] == '0') { return true; }
        for ($i = 1; $i < count($matches); $i++) {
            if ($matches[$i] > 255) {
                return false;
            }
        }

        return true;
    }
}
