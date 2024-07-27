# PHP Immutable
## 6 kyu

Create an immutable class that accepts a ```string``` to it's constructor.

Requirements:
1. be called MyImmutable
1. extend Immutable (and nothing else)
1. use $this->store to store the immutable string value
1. prevent mutation of $this->store once set
1. prevent arbitrary properties being set
1. prevent inheritance (this would facilitate mutation via override)
1. include __construct and getData methods

*Note*: You can simple return nothing ```(return;)``` from code paths that should not be called to maintain immutability.
