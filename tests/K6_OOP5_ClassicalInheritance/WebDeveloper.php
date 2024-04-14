<?php

declare(strict_types=1);

namespace tests\K6_OOP5_ClassicalInheritance;

class WebDeveloper extends ComputerProgrammer
{
    public function __construct($name, $age)
    {
        parent::__construct($name, $age);
        $this->occupation = "Web Developer";
    }

    public function describe_job(): string
    {
        return parent::describe_job()." And don't forget to check on my website :D";
    }

    public static function describe_website (): string
    {
        return "My professional world-class website is made from HTML, CSS, Javascript and PHP!";
    }
}
