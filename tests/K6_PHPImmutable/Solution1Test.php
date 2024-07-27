<?php

namespace tests\K6_PHPImmutable;

use PHPUnit\Framework\TestCase;
use tests\K6_PHPImmutable\MyImmutable;

class Solution1Test extends TestCase
{
    private $v = null;
    private $x = null;

    public function setUp(): void
    {
        $this->v = 'inyamazana';
        $this->x = new MyImmutable($this->v);
    }

    public function testThatMyImmutableGetterExists() {
        $this->assertTrue(method_exists($this->x, 'getData'));
    }

    public function testThatMyImmutableGetterReturnsValueFromTheStore() {
        $this->assertSame($this->x->getData(), $this->v);
    }
}
