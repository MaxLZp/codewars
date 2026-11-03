# My
# class SingletonMeta(type):
#     _instance = {}
#    
#     def __call__(self, *args, **kwargs):
#         if self not in self._instance:
#             self._instance[self] = super().__call__(*args, **kwargs)
#        
#         return self._instance[self]
#
#
# class Singleton(metaclass=SingletonMeta):
#     pass


class Singleton():
    """ Other """
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if Singleton._instance is None:
            Singleton._instance = super().__new__(cls, *args, **kwargs)
        
        return Singleton._instance


def test_singleton_pattern():
    a, b = Singleton(), Singleton()
    assert isinstance(a, Singleton)
    assert isinstance(b, Singleton)

    a, b, c = Singleton(), Singleton(), Singleton()
    print(a)
    print(b)
    assert a is b
    assert b is c
