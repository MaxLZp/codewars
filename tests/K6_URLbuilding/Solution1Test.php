<?php

namespace tests\K6_URLbuilding;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_URLbuilding\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame(
            $expected,
            (new URLBuilder($input))->build(),
            'Simple URL'
          );
    }
}
