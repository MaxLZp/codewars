def count_wins(winners_list, country):
    return sum(1 for winner in winners_list if winner['country'] == country)
    
    # other
    # return sum(el['country'] == country for el in winnerList)

def test_champions_league_country():
    winner_list_1 = [{ 'season': '1996-97', 'team': 'Borussia Dortmund', 'country': 'Germany' },
        { 'season': '1997-98', 'team': 'Real Madrid', 'country': 'Spain' }, 
        { 'season': '1998-99', 'team': 'Manchester United', 'country': 'England' },
        { 'season': '1999-00', 'team': 'Real Madrid', 'country': 'Spain' },
        { 'season': '2000-01', 'team': 'Bayern Munich', 'country': 'Germany' },
        { 'season': '2001-02', 'team': 'Real Madrid', 'country': 'Spain' },
        { 'season': '2002-03', 'team': 'Milan', 'country': 'Italy' },
        { 'season': '2003-04', 'team': 'Porto', 'country': 'Portugal' },
        { 'season': '2004-05', 'team': 'Liverpool', 'country': 'England' },
        { 'season': '2005-06', 'team': 'Barcelona', 'country': 'Spain' },
        { 'season': '2006-07', 'team': 'Milan', 'country': 'Italy' },
        { 'season': '2007-08', 'team': 'Manchester United', 'country': 'England' },
        { 'season': '2008-09', 'team': 'Barcelona', 'country': 'Spain' },
        { 'season': '2009-10', 'team': 'Internazionale', 'country': 'Italy' },
        { 'season': '2010-11', 'team': 'Barcelona', 'country': 'Spain' },
        { 'season': '2011-12', 'team': 'Chelsea', 'country': 'England' },
        { 'season': '2012-13', 'team': 'Bayern', 'country': 'Germany' },
        { 'season': '2013-14', 'team': 'Real Madrid', 'country': 'Spain' },
        { 'season': '2014-15', 'team': 'Barcelona', 'country': 'Spain' },
        { 'season': '2015-16', 'team': 'Real Madrid', 'country': 'Spain' }
    ]

    count_wins(winner_list_1, 'Portugal') == 1
    count_wins(winner_list_1, 'FootLand') == 0
    count_wins(winner_list_1, 'Spain') == 9