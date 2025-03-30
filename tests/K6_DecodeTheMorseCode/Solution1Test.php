<?php

namespace tests\K6_DecodeTheMorseCode;

use PHPUnit\Framework\TestCase;

if (!defined('MORSE_CODE')) {
    define('MORSE_CODE', [
        '-.-.--' => '!',
        '.-..-.' => '"',
        '...-..-' => '$',
        '.-...' => '&',
        '.----.' => '\'',
        '-.--.' => '(',
        '-.--.-' => ')',
        '.-.-.' => '+',
        '--..--' => ',',
        '-....-' => '-',
        '.-.-.-' => '.',
        '-..-.' => '/',
        '-----' => '0',
        '.----' => '1',
        '..---' => '2',
        '...--' => '3',
        '....-' => '4',
        '.....' => '5',
        '-....' => '6',
        '--...' => '7',
        '---..' => '8',
        '----.' => '9',
        '---...' => ':',
        '-.-.-.' => ';',
        '-...-' => '=',
        '..--..' => '?',
        '.--.-.' => '@',
        '.-' => 'A',
        '-...' => 'B',
        '-.-.' => 'C',
        '-..' => 'D',
        '.' => 'E',
        '..-.' => 'F',
        '--.' => 'G',
        '....' => 'H',
        '..' => 'I',
        '.---' => 'J',
        '-.-' => 'K',
        '.-..' => 'L',
        '--' => 'M',
        '-.' => 'N',
        '---' => 'O',
        '.--.' => 'P',
        '--.-' => 'Q',
        '.-.' => 'R',
        '...' => 'S',
        '-' => 'T',
        '..-' => 'U',
        '...-' => 'V',
        '.--' => 'W',
        '-..-' => 'X',
        '-.--' => 'Y',
        '--..' => 'Z',
        '..--.-' => '_',
        '...---...' => 'SOS',
    ]);
}

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DecodeTheMorseCode\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($code): string
    {
        $words = preg_split('/   /', trim($code));
        $words = array_map(function($word) {
            $chars = preg_split('/ /', trim($word));
            $chars = array_map(function($char) {
                return MORSE_CODE[$char];
            }, $chars);
            return implode('', $chars);
        }, $words);
        return implode(' ',$words);
    }
}
