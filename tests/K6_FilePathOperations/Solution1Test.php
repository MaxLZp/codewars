<?php

namespace tests\K6_FilePathOperations;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FilePathOperations\DataProvider::data
     */
    public function execute($input, $expected) {
        $fm = new FileMaster($input);
      
        $this->assertSame($expected[0], $fm->extension());
        $this->assertSame($expected[1], $fm->filename());
        $this->assertSame($expected[2], $fm->dirpath());
    
    }
}


