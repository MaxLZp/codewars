<?php

namespace tests\K6_IPvalidation;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
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
        // return preg_match('/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/', $str);
        return preg_match('/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)$/', $str);
    }
}
