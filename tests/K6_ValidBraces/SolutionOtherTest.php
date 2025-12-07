<?php

namespace tests\K6_ValidBraces;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ValidBraces\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($braces): bool
    {
        do {
            $braces = str_replace(['()', '[]', '{}'], '', $braces, $count);
        } while ($count);

        return empty($braces); 
    }
}
