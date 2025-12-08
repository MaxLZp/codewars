<?php

namespace tests\K6_HammingDistance;

class DataProvider
{
    public function data()
    {
        return [
            [["I like turtles", "I like turkeys"],  3],
            [["Hello World", "Hello World"],  0],
            [["", ""],  0],
            [["a man a plan a canal", "a man a plan sobanal"],  3],
            [["hamming and cheese", "Hamming and Cheese"],  2],
            [["espresso", "Expresso"],  2],
            [["old father, old artificer", "of my soul the uncreated "], 24],
        ];
    }
}