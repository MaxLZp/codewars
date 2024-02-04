<?php

namespace tests\K6_Catalog;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
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
        foreach (\simplexml_load_string('<root>'.$s.'</root>')->prod as $line) {
            if (preg_match('/'.$article.'/', $line->name, $matches)) {
                $catalog[] = sprintf('%s > prx: $%s qty: %d', $line->name, $line->prx, $line->qty);
            }
        }
        return $catalog ? implode("\n", $catalog) : 'Nothing';
    }
}
