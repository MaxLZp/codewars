<?php
/**
 * 6kyu Don't rely on luck.
 *
 * The test fixture I use for this kata is pre-populated.
 *
 * It will compare your guess to a random number generated using:
 *
 * rand(1, 100)
 *
 * You can pass by relying on luck or skill but try not to rely on luck.
 *
 * "The power to define the situation is the ultimate power." - Jerry Rubin
 *
 * Good luck!
 *
 *
 */
namespace tests;

use PHPUnit\Framework\TestCase;

srand(1024);
$guess = 97;

class TestYourLuckTest extends TestCase
{
    public function testYourLuck() {
        global $guess;
        $lucky_number = rand(1, 100);
        $this->assertEquals($lucky_number, $guess, "Sorry. Unlucky this time.");
    }
}
