<?php

namespace tests\K7_ExclamationMarkSeries5_RemoveAllExclamationMarksFromTheEndOfWords;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ExclamationMarkSeries5_RemoveAllExclamationMarksFromTheEndOfWords\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        return preg_replace("/!+(?=$|\s)/","", $s);
    }
}
