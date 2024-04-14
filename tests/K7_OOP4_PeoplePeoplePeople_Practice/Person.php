<?php

declare(strict_types=1);

namespace tests\K7_OOP4_PeoplePeoplePeople_Practice;

class Person
{
    const species = 'Homo Sapiens';
    public $name;
    public $age;
    public $occupation;

    public function __construct($name, $age, $occupation)
    {
        $this->name = $name;
        $this->age = $age;
        $this->occupation = $occupation;
    }

    public function introduce(): string
    {
        return sprintf('Hello, my name is %s', $this->name);
    }

    public function describe_job(): string
    {
        return sprintf('I am currently working as a(n) %s', $this->occupation);
    }

    public static function greet_extraterrestrials($species): string
    {
        return sprintf('Welcome to Planet Earth %s!', $species);
    }
}
