<?php

namespace tests\K6_OrganiseDuplicateNumbersInList;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_OrganiseDuplicateNumbersInList\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * Check properties of return value.
     *
     * @test
     */
    public function testPropertiesOfResult() {
        // Should be defined.
        $this->assertNotNull($this->solve(array(3, 2, 6, 2)), "Return value should not be null.");

        // Should be an array.
        $this->assertTrue(is_array($this->solve(array(3, 2, 6, 2))), "Return value should be an array.");

        // Should have correct length.
        $this->assertSame(
            sizeof($this->solve(array(1, 2, 1, 6, 6))),
            sizeof(array_unique(array(1, 2, 1, 6, 6))),
            "Return value should have the correct number of elements."
        );
    }

    public function solve($input): array
    {
        $result = [];
        foreach ($input as $value) {
            if (!isset($result[$value])) {
                $result[$value] = [];
            }
            $result[$value][] = $value;
        }
        return array_values($result);
    }
}
