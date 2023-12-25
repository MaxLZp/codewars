<?php

namespace tests\K6_DashatizeIt;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DashatizeIt\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $num): string
    {
        $result = preg_replace('/([13579])/', '-$1-', $num);
        return trim(preg_replace('/--/', '-', $result), '-');
    }
}
