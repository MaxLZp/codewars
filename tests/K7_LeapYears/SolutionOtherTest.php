<?php

namespace tests\K7_LeapYears;

use DateTime;
use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_LeapYears\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($year): bool
    {
        return (bool)DateTime::createFromFormat('Y', $year)->format('L');
    }
}
