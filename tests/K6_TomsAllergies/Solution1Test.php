<?php

namespace tests\K6_TomsAllergies;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    public function testAllergiesHandMade()
    {
        $allergy = new Allergies(5);

        $this->assertSame(['eggs', 'shellfish'], $allergy->allergies());
        $this->assertSame(false, $allergy->is_allergic_to('tomatoes'));
        $this->assertSame(true, $allergy->is_allergic_to('eggs'));

        $allergy = new Allergies(15);

        $this->assertSame(['eggs', 'peanuts', 'shellfish', 'strawberries'], $allergy->allergies());
        $this->assertSame(false, $allergy->is_allergic_to('tomatoes'));
        $this->assertSame(true, $allergy->is_allergic_to('peanuts'));
        $this->assertSame(true, $allergy->is_allergic_to('strawberries'));

        $allergy = new Allergies(0);

        $this->assertSame([], $allergy->allergies());
        $this->assertSame(false, $allergy->is_allergic_to('tomatoes'));
        $this->assertSame(false, $allergy->is_allergic_to('peanuts'));
        $this->assertSame(false, $allergy->is_allergic_to('chocolate'));

        $allergy = new Allergies(256);

        $this->assertSame([], $allergy->allergies());
        $this->assertSame(false, $allergy->is_allergic_to('eggs'));
        $this->assertSame(false, $allergy->is_allergic_to('peanuts'));
        $this->assertSame(false, $allergy->is_allergic_to('shellfish'));
        $this->assertSame(false, $allergy->is_allergic_to('strawberries'));
        $this->assertSame(false, $allergy->is_allergic_to('tomatoes'));
        $this->assertSame(false, $allergy->is_allergic_to('pollen'));

        $allergy = new Allergies(257);

        $this->assertSame(['eggs'], $allergy->allergies());
        $this->assertSame(false, $allergy->is_allergic_to('tomatoes'));

        $allergy = new Allergies(1000);

        $this->assertSame(["cats", "chocolate", "pollen", "strawberries"], $allergy->allergies());
    }
}
