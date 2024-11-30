<?php

namespace tests\K5_NotVerySecure;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_NotVerySecure\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): bool
    {
        return preg_match('/^[a-zA-Z0-9]+$/', $s, $matches);
    }

}







