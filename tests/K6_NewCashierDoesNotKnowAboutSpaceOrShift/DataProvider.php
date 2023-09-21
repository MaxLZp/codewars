<?php

namespace tests\K6_NewCashierDoesNotKnowAboutSpaceOrShift;

class DataProvider
{
    public function data()
    {
        return [
            ["milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza", "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"],
            ["pizzachickenfriesburgercokemilkshakefriessandwich", "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"],
            ["burgerfriesfriesfriesfriesfriespizzasandwichcokefriesburger", "Burger Burger Fries Fries Fries Fries Fries Fries Pizza Sandwich Coke"],
        ];
    }
}