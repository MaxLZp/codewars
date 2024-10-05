<?php

namespace tests\K6_ParseALinkedListFromAString;

use PHPUnit\Framework\TestCase;
use tests\K6_ParseALinkedListFromAString\Node;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ParseALinkedListFromAString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $string): ?Node
    {
        if ($string == 'NULL') {
            return null;
        }

        $node = (int)substr($string, 0, strpos($string, ' -> '));
        $node = new Node((int)$node, $this->solve(preg_replace('/^\d+ -> /', '', $string)));

        return $node;
    }

}
