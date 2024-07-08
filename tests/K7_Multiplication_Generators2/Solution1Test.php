<?php

namespace tests\K7_Multiplication_Generators2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function execute() {
        $gen = $this->generator(1);
        $this->assertTrue($gen->valid(), 'Your generator should yield at least 1 value');
        $this->assertSame('1 x 1 = 1', $gen->current());
        $gen->next();
        $this->assertSame('1 x 2 = 2', $gen->current());
        $gen->next();
        $this->assertSame('1 x 3 = 3', $gen->current());
        $gen->next();
        $this->assertSame('1 x 4 = 4', $gen->current());
        $gen->next();
        $this->assertSame('1 x 5 = 5', $gen->current());
        $gen->next();
        $this->assertTrue($gen->valid(), 'Your generator should not stop after yielding the first 5 values');
    }

    private function generator($a)
    {
        for ($i = 1; $i < PHP_INT_MAX; $i++) {
            yield sprintf('%d x %d = %d', $a, $i, $a * $i);
        }
    }
}
