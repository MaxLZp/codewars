<?php

declare(strict_types=1);

namespace tests\K6_ParseALinkedListFromAString;

class Node
{
    public $data;
    public $next;

    public function __construct($data, $next = NULL) {
      $this->data = $data;
      $this->next = $next;
    }
}
