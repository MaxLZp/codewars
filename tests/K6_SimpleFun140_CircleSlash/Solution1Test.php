<?php

namespace tests\K6_SimpleFun140_CircleSlash;

use PHPUnit\Framework\TestCase;

/**
 * @link https://en.wikipedia.org/wiki/Josephus_problem
 * @link https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%98%D0%BE%D1%81%D0%B8%D1%84%D0%B0_%D0%A4%D0%BB%D0%B0%D0%B2%D0%B8%D1%8F
 */
class Solution2Test extends TestCase
{

    /**
     * @test
     */
    public function execute() {
        $this->assertSame(829305879, $this->solve(951523851));
    }

    public function solve(int $n): int
    {
        return 1 + 2 * ($n - 2 ** (int)log($n, 2));
    }

}
