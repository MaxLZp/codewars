<?php

namespace tests\K6_OOP5_ClassicalInheritance;

use PHPUnit\Framework\TestCase;

use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    public function testPreloaded()
    {
        $this->assertTrue(class_exists('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person'), "It seems that you have tampered with the preloaded code");
    }

    public function testClassDeclarations()
    {
        $this->assertTrue(class_exists('tests\K6_OOP5_ClassicalInheritance\Salesman'), "You have not yet defined the \"Salesman\" class");
        $this->assertTrue(class_exists('tests\K6_OOP5_ClassicalInheritance\ComputerProgrammer'), "You have not yet defined the \"ComputerProgrammer\" class");
        $this->assertTrue(class_exists('tests\K6_OOP5_ClassicalInheritance\WebDeveloper'), "You have not yet defined the \"WebDeveloper\" class");
    }

    public function testInheritanceModel()
    {
        $person = new Person(NULL, NULL, NULL);
        $salesman = new Salesman(NULL, NULL);
        $computer_programmer = new ComputerProgrammer(NULL, NULL);
        $web_developer = new WebDeveloper(NULL, NULL);

        $this->assertInstanceOf('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person', $person);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\Salesman', $person);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\ComputerProgrammer', $person);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\WebDeveloper', $person);

        $this->assertInstanceOf('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person', $salesman);
        $this->assertInstanceOf('tests\K6_OOP5_ClassicalInheritance\Salesman', $salesman);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\ComputerProgrammer', $salesman);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\WebDeveloper', $salesman);

        $this->assertInstanceOf('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person', $computer_programmer);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\Salesman', $computer_programmer);
        $this->assertInstanceOf('tests\K6_OOP5_ClassicalInheritance\ComputerProgrammer', $computer_programmer);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\WebDeveloper', $computer_programmer);

        $this->assertInstanceOf('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person', $web_developer);
        $this->assertNotInstanceOf('tests\K6_OOP5_ClassicalInheritance\Salesman', $web_developer);
        $this->assertInstanceOf('tests\K6_OOP5_ClassicalInheritance\ComputerProgrammer', $web_developer);
        $this->assertInstanceOf('tests\K6_OOP5_ClassicalInheritance\WebDeveloper', $web_developer);
    }
}
