import re

def player_manager(players):
    return [] if players == None else [{"player": player[1], "contact": int(player[2]), } for player in re.findall(r'((\w+\s*\w*),\s*(\d+))', players)]
  
def test_player_contact_manager():
    assert player_manager("John Doe, 8167238327, Jane Doe, 8163723827") == [{"player": "John Doe", "contact": 8167238327}, {"player": "Jane Doe", "contact": 8163723827}]
    assert player_manager("") == []
    assert player_manager("a, 5") == [{"player": "a", "contact": 5}]