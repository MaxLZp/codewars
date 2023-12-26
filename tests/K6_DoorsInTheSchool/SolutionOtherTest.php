<?php

namespace tests\K6_DoorsInTheSchool;

use PHPUnit\Framework\TestCase;

/**
 * It works. But why - ???
 */
class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DoorsInTheSchool\DataProvider::data
     */
    public function execute($input, $expected) {
        // $this->print($input);
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int
    {
        return sqrt($n);
    }

}
