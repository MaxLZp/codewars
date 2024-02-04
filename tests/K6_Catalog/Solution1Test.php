<?php

namespace tests\K6_Catalog;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Catalog\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($s, $article): string {
        $catalog = [];
        foreach (explode("\n", $s) as $line) {
            if (! trim($line)) { continue; }
            if (preg_match('/<name>(.*'.$article.'.*)<\/name><prx>(.+)<\/prx><qty>(.+)<\/qty>/', $line, $matches)) {
                $catalog[] = sprintf('%s > prx: $%s qty: %d', $matches[1], $matches[2], (int)$matches[3]);
            }
        }
        return $catalog ? implode("\n", $catalog) : 'Nothing';
    }
}
