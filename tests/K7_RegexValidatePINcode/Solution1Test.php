<?php

namespace tests\K7_RegexValidatePINcode;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private function doTest(string $pin, bool $expected)
    {
        $this->assertSame($expected, $this->solve($pin), "validatePin('$pin') returned an incorrect result");
    }

    private function solve(string $pin): bool
    {
        return preg_match('/^(\d{4}|\d{6})$/', $pin);
    }

    public function testPinsWithInvalidLength()
    {
        $this->doTest("1", false);
        $this->doTest("12", false);
        $this->doTest("123", false);
        $this->doTest("12345", false);
        $this->doTest("1234567", false);
        $this->doTest("-1234", false);
        $this->doTest("-12345", false);
        $this->doTest("1.234", false);
        $this->doTest("00000000", false);
    }

    public function testPinsWithInvalidCharacters()
    {
        $this->doTest("a234", false);
        $this->doTest(".234", false);
    }

    public function testValidPins()
    {
        $this->doTest("1234", true);
        $this->doTest("0000", true);
        $this->doTest("1111", true);
        $this->doTest("123456", true);
        $this->doTest("098765", true);
        $this->doTest("000000", true);
        $this->doTest("123456", true);
        $this->doTest("090909", true);
    }
}
