<?php

namespace tests\K7_AllStarCodeChallenge_28;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    protected function assertFuzzyEquals(float $expected, float $actual)
    {
        $this->assertTrue($expected === 0.0 ? abs($actual) <= 1e-12 : abs(($expected - $actual) / ($expected)) <= 1e-12, "Failed asserting that actual value $actual is sufficiently close to expected value $expected (accepted relative error: 1e-12)");
    }

    public function testExamples()
    {
        $this->assertFuzzyEquals(140, $this->convert_c_f(60, "f"));
        $this->assertFuzzyEquals(0, $this->convert_c_f(32, "c"));
        $this->assertFuzzyEquals(10, $this->convert_c_f(50));
    }
    public function testInvalidExample()
    {
        $this->expectException(\InvalidArgumentException::class);
        $this->convert_c_f(100, "w");
    }

    public function convert_c_f($num, $scale = 'c')
    {
        switch ($scale) {
            case 'c': return (($num - 32) / 9) * 5;
            case 'f': return 32 + $num * 9 / 5;
            default:
                throw new \InvalidArgumentException('Invalid scale');
        }
    }
}
