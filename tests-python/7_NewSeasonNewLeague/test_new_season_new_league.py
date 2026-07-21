def premier_league_standings(teams):
    return {i+1: team[1] for i, team in enumerate (sorted(
        teams.items(), key=lambda item: '0' if item[0] == 1 else item[1]
    ))}

  
def test_new_season_new_league():
    sample_test_cases = [
        ({1: 'Arsenal'},
        {1: 'Arsenal'}
        ),
        ({2: 'Arsenal', 3: 'Accrington Stanley', 1: 'Leeds United'},
        {1: 'Leeds United', 2: 'Accrington Stanley', 3: 'Arsenal'}
        ),
        ({1: 'Leeds United', 2: 'Liverpool', 3: 'Manchester City', 4: 'Coventry', 5: 'Arsenal'},
        {1: 'Leeds United', 2: 'Arsenal', 3: 'Coventry', 4: 'Liverpool', 5: 'Manchester City'}
        ),
    ]
    
    for teams, expected in sample_test_cases:
        assert premier_league_standings(teams) == expected
