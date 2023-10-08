<?php

namespace tests\K6_Erros_Histogram;

class DataProvider
{
    public function data()
    {
        return [
            [
                "tpwaemuqxdmwqbqrjbeosjnejqorxdozsxnrgpgqkeihqwybzyymqeazfkyiucesxwutgszbenzvgxibxrlvmzihcb",
                "u  3     ***\rw  4     ****\rx  6     ******\rz  6     ******"
            ],
            [
                "aaifzlnderpeurcuqjqeywdq",
                "u  2     **\rw  1     *\rz  1     *"
            ],
            [
                "sjeneccyhrcpfvpujfaoaykqllteovskclebmzjeqepilxygdmzvdfmxbqdzubkzturnuqxsewrwgmdfwgdx",
                "u  4     ****\rw  3     ***\rx  4     ****\rz  4     ****"
            ],
            [
                "bnxyytdtqrkeaswymiwbxnuydwthweyzny",
                "u  1     *\rw  4     ****\rx  2     **\rz  1     *"
            ],
            [
                "ttopvdaxgwfpzjmomkwssytktaizqtsekfmfhrabidwaugioqyyzrxbugsusxkfdevmijqyprcoxfyjqwsutoutjgozyhsoytg",
                "u  5     *****\rw  4     ****\rx  4     ****\rz  4     ****"
            ],
            [
                "slirsxpbiholwngafelbbfxrpvqbcaykiazzgivjwgdqmz",
                "w  2     **\rx  2     **\rz  3     ***"
            ],
            [
                "tpaemqdmqbqrjbeosjnejqordosnrgpgqkeihqybyymqeafkyicestgsbenvgibrlvmihcb",
                ""
            ],
        ];
    }
}