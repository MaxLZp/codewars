<?php

namespace tests\K7_PerimeterSequence;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function execute() {
        $this->assertSame(12, $this->solve(1, 3));
    }

    public function solve(int $a, int $n): int
    {
        return 4 * $a * $n;
    }
}
