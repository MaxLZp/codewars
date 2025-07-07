<?php

namespace tests\K6_URLbuilding;

class DataProvider
{
    public function data()
    {
        return [
            [['host' => 'test.com'], 'http://test.com/'],
            [['host' => 'test.com', 'port' => '80'], 'http://test.com/'],
            [['host' => 'test.com', 'port' => '8080'], 'http://test.com:8080/'],
            [['host' => 'test.com', 'scheme' => 'https'], 'https://test.com/'],
            [['host' => 'test.com', 'user' => 'a'], 'http://test.com/'],
            [['host' => 'test.com', 'pass' => 'a'], 'http://test.com/'],
            [['host' => 'test.com', 'user' => 'rubens', 'pass' => 't@st'], 'http://rubens:t%40st@test.com/'],
            [['host' => 'test.com', 'path' => ''], 'http://test.com'],
            [['host' => 'test.com', 'path' => '/some/path/'], 'http://test.com/some/path/'],
            [['host' => 'test.com', 'query' => []], 'http://test.com/'],
            [['host' => 'test.com', 'query' => ['abc' => '123']], 'http://test.com/?abc=123'],
            [['host' => 'test.com', 'query' => ['abc' => '123', 'def' => '@bc']], 'http://test.com/?abc=123&def=%40bc'],
            [['host' => 'test.com', 'fragment' => 'frag'], 'http://test.com/#frag'],
            [['host' => 'test.com', 'scheme' => 'https', 'user' => 'rubens', 'pass' => 't@st', 'path' => '/some/path', 'query' => ['klm' => 'mno', 'xyz' => '&pqr'], 'fragment' => 'frag'], 'https://rubens:t%40st@test.com/some/path?klm=mno&xyz=%26pqr#frag'],
        ];
    }
}