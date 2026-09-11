class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
        self.listeners = set()
        
    def how_many(self, listeners):
        new_count = 0
        for listener in listeners:
            if listener.lower() not in self.listeners:
                new_count += 1
                self.listeners.add(listener.lower())
        
        return new_count
        
    # def how_many(self, listeners): 
    #     """Other"""
    #     tmp = set(map(str.lower, listeners))
    #     res = len(tmp - self.listeners)
    #     self.listeners.update(tmp)
    #     return res


def test_what_a_classy_song():
    
    mount_moose = Song('Mount Moose', 'The Snazzy Moose')

    assert mount_moose.title == 'Mount Moose'
    assert mount_moose.artist == 'The Snazzy Moose'

    assert mount_moose.how_many(['John', 'Fred', 'Bob', 'Carl', 'RyAn']) == 5
    assert mount_moose.how_many(['JoHn', 'Luke', 'AmAndA']) == 2
    assert mount_moose.how_many(['Amanda', 'CalEb', 'CarL', 'Furgus']) == 2
    assert mount_moose.how_many(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']) == 1
