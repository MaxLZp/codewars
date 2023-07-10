<?php

namespace tests\K8_AllStarCodeChallenge18;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_AllStarCodeChallenge18\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($str, $letter) {
        return substr_count($str, $letter);
      }
}
