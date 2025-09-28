<?php

namespace tests\K6_FollowThatSpy;

class DataProvider
{
    public function data()
    {
        return [
            [[["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]], "MNL, TAG, CEB, TAC, BOR"],
            [[["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]], "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"],
        ];
    }
}