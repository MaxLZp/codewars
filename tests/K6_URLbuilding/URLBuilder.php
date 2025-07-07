<?php

namespace tests\K6_URLbuilding;

class URLBuilder
{
    private $options;

    public function __construct(array $options)
    {
        $this->validateOptions($options);
        $this->options['scheme'] = $options['scheme'] ?? 'http';
        $this->options['user'] = $options['user'] ?? null;
        $this->options['pass'] = $options['pass'] ?? null;
        $this->options['host'] = $options['host'];
        $this->options['port'] = $options['port'] ?? '80';
        $this->options['path'] = $options['path'] ?? '/';
        $this->options['query'] = $options['query'] ?? [];
        $this->options['fragment'] = $options['fragment'] ?? null;
    }

    public function build(): string
    {
        $url = $this->options['scheme'].'://';
        $url .= ($this->options['user'] && $this->options['pass']) ? urlencode($this->options['user']) .':'. urlencode($this->options['pass']).'@' : '';
        $url .= $this->options['host'];
        $url .= ($this->options['port'] != '80') ? ':'.$this->options['port'] : '';
        $url .= $this->options['path'];
        $url .= (count($this->options['query'])) ? '?'.http_build_query($this->options['query']) : '';
        $url .= $this->options['fragment'] ? '#'.$this->options['fragment'] : '';

        return $url;
    }

    private function validateOptions($options)
    {
        if (
            !isset($options['host'])
            ||
            (isset($options['query']) && !is_array($options['query']))
        ) {
            throw new \Exception('Invalid options');
        }        
    }
}
