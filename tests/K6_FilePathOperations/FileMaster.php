<?php

namespace tests\K6_FilePathOperations;

class FileMaster {

    private $pathInfo = [];

    public function __construct($filepath){
        $this->pathInfo = pathinfo($filepath);
        $this->pathInfo['dirname'] = $this->pathInfo['dirname'].'/';
    }
    
    public function extension(){
        return $this->pathInfo['extension'];
    }
    
    public function filename(){
        return $this->pathInfo['filename'];
    }

    public function dirpath(){
        return $this->pathInfo['dirname'];
    }
  
  }