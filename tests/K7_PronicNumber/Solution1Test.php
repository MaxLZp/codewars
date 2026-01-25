<?php

namespace tests\K7_PronicNumber;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_PronicNumber\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $n): bool
    {
        return floor(sqrt($n)) * (floor(sqrt($n)) + 1) == $n;
    }
}
