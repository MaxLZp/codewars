<?php

declare(strict_types=1);

namespace tests\K6_OOP5_ClassicalInheritance;

use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Salesman extends Person
{
    public function __construct($name, $age)
    {
        parent::__construct($name, $age, 'Salesman');
    }

    public function introduce(): string
    {
        return parent::introduce().", don't forget to check out my products!";
    }
}
