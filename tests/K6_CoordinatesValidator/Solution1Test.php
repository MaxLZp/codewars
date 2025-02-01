<?php

namespace tests\K6_CoordinatesValidator;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CoordinatesValidator\DataProvider::validCoordinates
     */
    public function testValid($value) {
        $this->assertTrue($this->isValidCoordinates($value));
    }

    /**
     * @test
     * @dataProvider \tests\K6_CoordinatesValidator\DataProvider::invalidCoordinates
     */
    public function testInvalid($value) {
        $this->assertFalse($this->isValidCoordinates($value));
    }

    public function isValidCoordinates($coordinates): bool
    {
        if (!preg_match('/^(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)$/', $coordinates, $matches)) {
            return false;
        }
        return abs(floatVal($matches[1]) < 90) && (abs(floatVal($matches[3])) < 180);
    }
}
