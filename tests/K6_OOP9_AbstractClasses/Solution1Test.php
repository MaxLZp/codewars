<?php

namespace tests\K6_OOP9_AbstractClasses;

use ReflectionClass;

use ReflectionMethod;
use PHPUnit\Framework\TestCase;
use tests\K6_OOP7_TheFinalKeyword\Person;


// `Person` is an abstract class, and greet() is an instance method
// The test suite used to contain assertions such as:
//     $this->assertSame("Hello Lucy", Person::greet("Lucy"));
// This is no longer possible: since PHP 8, calling an instance method from a non-static context has become an error
// As a workaround, to call and test the non-overridden greet(), we instantiate this dummy child class:
class ConcretePerson extends \tests\K6_OOP9_AbstractClasses\Person {
    public function __construct() {}
    public function introduce(): string { return '';} // must be overridden for the class to compile, as the parent method is abstract
}

class Solution1Test extends TestCase
{
    public function testPerson() {
        $this->assertTrue(class_exists('tests\K6_OOP9_AbstractClasses\Person'), "Abstract class \"Person\" not defined");
        $this->assertTrue((new ReflectionClass('tests\K6_OOP9_AbstractClasses\Person'))->isAbstract(), "Class \"Person\" should be abstract");
        $this->assertTrue(property_exists('tests\K6_OOP9_AbstractClasses\Person', 'name'), "Class \"Person\" should have property \$name");
        $this->assertTrue(property_exists('tests\K6_OOP9_AbstractClasses\Person', 'age'), "Class \"Person\" should have property \$age");
        $this->assertTrue(property_exists('tests\K6_OOP9_AbstractClasses\Person', 'gender'), "Class \"Person\" should have property \$gender");
        $this->assertTrue(method_exists('tests\K6_OOP9_AbstractClasses\Person', '__construct'), "Class \"Person\" should have a defined class constructor");
        $this->assertFalse((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', '__construct'))->isAbstract(), "Class constructor should not be abstract!");
        $this->assertSame((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', '__construct'))->getNumberOfParameters(), 3, "The class constructor should receive exactly 3 arguments");
        $this->assertSame((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', '__construct'))->getNumberOfRequiredParameters(), 3, "All of the parameters in the class constructor must be required");
        $this->assertTrue(method_exists('tests\K6_OOP9_AbstractClasses\Person', 'introduce'), "Class \"Person\" should have method \"introduce\"");
        $this->assertTrue((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', 'introduce'))->isAbstract(), "Method \"introduce\" must be declared abstract");
        $this->assertSame((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', 'introduce'))->getNumberOfParameters(), 0, "Method \"introduce\" should accept no arguments");
        $this->assertSame("Hello Donald", (new ConcretePerson())->greet("Donald"));
        $this->assertSame("Hello Ella", (new ConcretePerson())->greet("Ella"));
        $this->assertSame("Hello Lucy", (new ConcretePerson())->greet("Lucy"));
        $this->assertFalse((new ReflectionMethod('tests\K6_OOP9_AbstractClasses\Person', 'greet'))->isStatic(), "Method \"greet\" should not be a static method!");
     
    }

}
