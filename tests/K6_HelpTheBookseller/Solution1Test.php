<?php

namespace tests\K6_HelpTheBookseller;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_HelpTheBookseller\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve(...$input), $expected);
    }

    public function solve($listOfArt, $listOfCat): string 
    {
        $cats = array_flip($listOfCat);
        $cats = array_map(function($e) {return 0;}, $cats);
        foreach ($listOfArt as $book) {
            preg_match('/^(\w).* (\d+)/', $book, $matches);
            if (array_key_exists($matches[1], $cats)) {
                $cats[$matches[1]] += $matches[2];
            }
        }
        
        foreach ($cats as $key => $value) {
            $cats[$key] = sprintf('(%1$s : %2$s)', $key, $value);
        }


      return implode(' - ', $cats);
    }
}
