<?php

namespace tests\K6_TomsAllergies;

use TypeError;

class Allergies
{
    private $ALLERGY_SCORES;
    private $score;

    public function __construct(int $score)
    {
        if (!is_int($score)) { throw new TypeError('Invalid input'); }
        $this->score = $score;
        $this->ALLERGY_SCORES = (object) [
            "eggs" => 1,
            "peanuts" => 2,
            "shellfish" => 4,
            "strawberries" => 8,
            "tomatoes" => 16,
            "chocolate" => 32,
            "pollen" => 64,
            "cats" => 128
        ];
    }

    public function is_allergic_to(string $allergen): bool
    {
        if (! isset($this->ALLERGY_SCORES->$allergen)) { throw new TypeError('Invalid input'); }
        return $this->ALLERGY_SCORES->$allergen & $this->score;
    }

    public function allergies(): array
    {
        $result = [];
        // foreach(get_object_vars($this->ALLERGY_SCORES) as $allergen => $score) {
        // may be used directly as array
        foreach($this->ALLERGY_SCORES as $allergen => $score) {
            try {
                if ($this->is_allergic_to($allergen)) { $result[] = $allergen; }
            } catch (\Throwable $th) {}
        };
        sort($result);
        return $result;
    }
}
