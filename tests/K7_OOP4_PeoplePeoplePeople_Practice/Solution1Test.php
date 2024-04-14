<?php

namespace tests\K7_OOP4_PeoplePeoplePeople_Practice;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     */
    public function execute() {
        $this->assertTrue(class_exists('tests\K7_OOP4_PeoplePeoplePeople_Practice\Person'), "You have not yet defined the \"Person\" class");
    }

}
