<?php

declare(strict_types=1);

namespace tests\K6_OOP5_ClassicalInheritance;

use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class ComputerProgrammer extends Person
{
    public function __construct($name, $age)
    {
        parent::__construct($name, $age, 'Computer Programmer');
    }

    public function describe_job(): string
    {
        return parent::describe_job().", don't forget to check out my Codewars account ;)";
    }
}
