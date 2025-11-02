<?php

namespace tests\K5_MoveZerosToTheEnd;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_MoveZerosToTheEnd\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $items): array
    {
        $nonZeros = array_filter($items, function($item) { return $item !== 0 && $item !== 0.0; });
	
	    return array_pad($nonZeros, count($items), 0);
    }
    
    // public function solve(array $items): array
    // {
    //     $zeros = [];
    //     $nonZeros = [];
    //     foreach($items as $item) {
    //         if ($item === 0 || $item === 0.0) {
    //             $zeros[] = (int)$item;
    //         } else {
    //             $nonZeros[] = $item;
    //         }
    //     }
	
	//     return array_merge($nonZeros, $zeros);
    // }

}







