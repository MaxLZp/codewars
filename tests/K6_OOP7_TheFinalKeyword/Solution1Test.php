<?php

namespace tests\K6_OOP7_TheFinalKeyword;

use PHPUnit\Framework\TestCase;

use tests\K6_OOP7_TheFinalKeyword\Person;

class Solution1Test extends TestCase
{
    public function testForPersonClass() {
        $this->assertTrue(class_exists('\tests\K6_OOP6_Visibility\Person'));
    }

    public function testPropertiesAndConstructor() {
        $this->assertTrue(property_exists('\tests\K6_OOP6_Visibility\Person', 'name'));
        $this->assertTrue(property_exists('\tests\K6_OOP6_Visibility\Person', 'age'));
        $this->assertTrue(property_exists('\tests\K6_OOP6_Visibility\Person', 'occupation'));
        $this->assertTrue(method_exists('\tests\K6_OOP6_Visibility\Person', '__construct'));
    }

    public function testProgrammerGreeting() {
        $programmer = new ComputerProgrammer('John', 45, 'Computer programmer');
        $this->assertEquals('Hello, my name is John and I am a Computer programmer', $programmer->introduce());
    }
}
