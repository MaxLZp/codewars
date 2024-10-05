<?php

namespace tests\K6_ParseALinkedListFromAString;

use PHPUnit\Framework\TestCase;
use tests\K6_ParseALinkedListFromAString\Node;

class Solution1Test extends TestCase
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

        $nodes = explode(' -> ', $string);
        $node = array_shift($nodes);
        $node = new Node((int)$node, $this->solve(implode(' -> ', $nodes)));

        return $node;
    }

}
