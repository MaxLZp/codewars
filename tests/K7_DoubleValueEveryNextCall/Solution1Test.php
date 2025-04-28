<?php

namespace tests\K7_DoubleValueEveryNextCall;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function execute() {
        $this->assertSame(1, static::getNumber());
        $this->assertSame(2, static::getNumber());
        $this->assertSame(4, static::getNumber());
        $this->assertSame(8, static::getNumber());
    }

    private static int $number = 0;

    public function getNumber(): int
    {
        return 2 ** (static::$number++);
        // return static::$number = static::$number ? 2 * static::$number : 1;
    }
}
