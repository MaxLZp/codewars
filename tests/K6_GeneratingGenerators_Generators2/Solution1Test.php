<?php

namespace tests\K6_GeneratingGenerators_Generators2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    public function testThatUserFunctionIsLegitimateGeneratorFunction() {
        $this->assertTrue(is_a($this->generator(0, 0), 'Generator'), 'Your function should be a legitimate generator as defined in the official PHP docs');
    }

    public function testExample() {
        $gen = $this->generator(1, 2);
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
        $this->assertSame('1 x 6 = 6', $gen->current());
        $gen->next();
        $this->assertSame('1 x 7 = 7', $gen->current());
        $gen->next();
        $this->assertSame('1 x 8 = 8', $gen->current());
        $gen->next();
        $this->assertSame('1 x 9 = 9', $gen->current());
        $gen->next();
        $this->assertSame('1 x 10 = 10', $gen->current());
        $gen->next();
        $this->assertFalse($gen->valid(), 'Your generator should stop yielding now instead of: (1) generating the 11th multiple of 1 or (2) generating the 1st multiple of 2');
    }

    public function testExample2() {
        $gen = $this->generator(1, 3);
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
        $this->assertSame('1 x 6 = 6', $gen->current());
        $gen->next();
        $this->assertSame('1 x 7 = 7', $gen->current());
        $gen->next();
        $this->assertSame('1 x 8 = 8', $gen->current());
        $gen->next();
        $this->assertSame('1 x 9 = 9', $gen->current());
        $gen->next();
        $this->assertSame('1 x 10 = 10', $gen->current());

        $gen->next();
        $this->assertSame('2 x 1 = 2', $gen->current());
        $gen->next();
        $this->assertSame('2 x 2 = 4', $gen->current());
        $gen->next();
        $this->assertSame('2 x 3 = 6', $gen->current());
        $gen->next();
        $this->assertSame('2 x 4 = 8', $gen->current());
        $gen->next();
        $this->assertSame('2 x 5 = 10', $gen->current());
        $gen->next();
        $this->assertSame('2 x 6 = 12', $gen->current());
        $gen->next();
        $this->assertSame('2 x 7 = 14', $gen->current());
        $gen->next();
        $this->assertSame('2 x 8 = 16', $gen->current());
        $gen->next();
        $this->assertSame('2 x 9 = 18', $gen->current());
        $gen->next();
        $this->assertSame('2 x 10 = 20', $gen->current());
    }

    function generator($a, $b) {
        $tblGen = function($n) {
            for ($j = 1; $j <= 10; $j++) {
                yield sprintf('%d x %d = %d', $n, $j, $n*$j);
            }
        };

        for ($i = $a; $i < $b; $i++) {
            foreach($tblGen($i) as $subTbl) { yield $subTbl; }
        }
    }

    // function generator($a, $b) {
    //     for ($i = $a; $i < $b; $i++) {
    //         for ($j = 1; $j <= 10; $j++) {
    //             yield sprintf('%d x %d = %d', $i, $j, $i*$j);
    //         }
    //     }
    // }
}
