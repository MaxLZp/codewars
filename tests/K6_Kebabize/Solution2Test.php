<?php

namespace tests\K6_Kebabize;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Kebabize\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(string $string): string
    {
        return strtolower(preg_replace(['/[^A-Za-z]/', '/\B[A-Z]/'], ['', '-$0'], $string));
    }
}
