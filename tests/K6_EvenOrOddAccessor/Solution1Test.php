<?php

namespace tests\K6_EvenOrOddAccessor;

use ArrayAccess;
use PHPUnit\Framework\TestCase;

class Access implements ArrayAccess
{
    public function __invoke($val): string {
        return $val % 2 === 0 ? 'Even' : 'Odd';
    }

    public function offsetSet($offset, $value): void {
    }

    public function offsetExists($offset): bool {
        return true;
    }

    public function offsetUnset($offset): void {
    }

    public function offsetGet($offset): mixed {
        return $this->__invoke($offset);
    }
}

class Solution1Test extends TestCase
{

    private function doCallTest(int $num, string $expected) {
        $evenOrOdd = new Access();
        $this->assertSame($expected, $evenOrOdd($num), "evenOrOdd($num) returned an incorrect answer using call notation.");
    }

    private function doIndexTest(int $num, string $expected) {
        $evenOrOdd = new Access();
        $this->assertSame($expected, $evenOrOdd[$num], "evenOrOdd[$num] returned an incorrect answer using index notation.");
    }

    private function doTest(int $num, string $expected) {
        $this->doCallTest($num, $expected);
        $this->doIndexTest($num, $expected);
    }

    public function testPositiveOddNumbers() {
        $this->doTest(1, "Odd");
        $this->doTest(7, "Odd");
    }

    public function testPositiveEvenNumbers() {
        $this->doTest( 2, "Even");
        $this->doTest(42, "Even");
    }

    public function testZeroIsEven() {
        $this->doTest(0, "Even");
    }

    public function testNegativeEvenNumbers() {
        $this->doTest( -2, "Even");
        $this->doTest(-42, "Even");
    }

    public function testNegativeOddNumbers() {
        $this->doTest(-1, "Odd");
        $this->doTest(-7, "Odd");
    }

}
