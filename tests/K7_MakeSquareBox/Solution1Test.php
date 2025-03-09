<?php

namespace tests\tests\K7_Multiplication_Generators2;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function execute()
    {
        $this->assertSame(["-----", "-   -", "-   -", "-   -", "-----"], $this->box(5));
        $this->assertSame(["---", "- -", "---"], $this->box(3));
    }

    private function box(int $n): array
    {
        $sOuter = str_repeat('-', $n);
        $result = [$sOuter];
        $sInner = '-'.str_repeat(' ', $n-2).'-';
        for ($i=0; $i < $n-2; $i++) {
            $result[] = $sInner;
        }
        $result[] = $sOuter;

        return $result;
    }
}
