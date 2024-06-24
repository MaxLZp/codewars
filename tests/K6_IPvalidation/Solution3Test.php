<?php

namespace tests\K6_IPvalidation;

use PHPUnit\Framework\TestCase;

class Solution3Test extends TestCase
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
        return filter_var($str, FILTER_VALIDATE_IP);
    }
}
