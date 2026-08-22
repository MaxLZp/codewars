def scoreboard(who_ate_what):
    def calc(el):
        return {
            "name": el.get('name'), 
            "score": el.get('chickenwings', 0) * 5 + el.get('hamburgers', 0) * 3 + el.get('hotdogs', 0)*2
        }
    result = sorted([calc(el) for el in who_ate_what], key=lambda el: (-el.get('score'), el.get('name')))

    return result


def test_competitive_eating_scoreboard():
        assert scoreboard([
                {"name": "Billy The Beast", "chickenwings": 17 , "hamburgers": 7, "hotdogs": 8},
                {"name": "Habanero Hillary", "chickenwings": 5 , "hamburgers": 17, "hotdogs": 11},
                {"name": "Joey Jaws", "chickenwings": 8, "hamburgers": 8, "hotdogs": 15},
                {"name": "Big Bob" , "chickenwings": 20, "hamburgers": 4, "hotdogs": 11}]
            ) == [
                {"name": "Big Bob", "score": 134},{"name": "Billy The Beast", "score": 122},
                {"name": "Habanero Hillary", "score": 98},{"name": "Joey Jaws", "score": 94}
            ]

        assert scoreboard([
                {"name": "Big Bob" , "chickenwings": 20, "hamburgers": 4, "hotdogs": 11}]
            ) == [
                {"name": "Big Bob", "score": 134}
            ]
        
        assert scoreboard([
                {"name": "Joey Jaws", "chickenwings": 8, "hamburgers": 8, "hotdogs": 15},
                {"name": "Big Bob" , "chickenwings": 20, "hamburgers": 4, "hotdogs": 11}]
            ) == [
                {"name": "Big Bob", "score": 134},{"name": "Joey Jaws", "score": 94}
            ]
        
        assert scoreboard([
                {"name": "Joey Jaws", "chickenwings": 0, "hamburgers": 1, "hotdogs": 1},
                {"name": "Big Bob" , "chickenwings": 1, "hamburgers": 0, "hotdogs": 0}]
            ) == [
                {"name": "Big Bob", "score": 5},{"name": "Joey Jaws", "score": 5}
            ]
        
        assert scoreboard([]) == []