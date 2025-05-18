<?php

namespace tests\K5_TheHashtagGenerator;

class DataProvider
{
    public function data()
    {
        return [
            ['', false],
            [str_repeat(' ', 200), false],
            ['Codewars', '#Codewars'],
            ['Codewars      ', '#Codewars'],
            ['Codewars Is Nice', '#CodewarsIsNice'],
            ['codewars is nice', '#CodewarsIsNice'],
            ['Code' . str_repeat(' ', 140) . 'wars', '#CodeWars'],
            ['Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',false],
            [str_repeat("a", 139), "#A" . str_repeat("a", 138)],
            [str_repeat("a", 140), false],
        ];
    }
}