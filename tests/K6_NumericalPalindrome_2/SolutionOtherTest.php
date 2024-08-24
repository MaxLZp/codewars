<?php

namespace tests\K6_NumericalPalindrome_2;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_NumericalPalindrome_2\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * A string COMTAINS a plindrome of htere is a doubled char in a string with optionally other char between them.
     *
     * @param mixed $num
     * @return bool|string
     */
    public function solve($num)
    {
        return (! is_int($num) || $num < 0) ? "Not valid"
            : (bool)preg_match('/(.).?\1/', $num);
    }
}
