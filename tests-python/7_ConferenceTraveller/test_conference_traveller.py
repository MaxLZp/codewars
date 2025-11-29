def conference_picker(cities_visited, cities_offered):
    if len(cities_visited) == 0: return cities_offered[0]
    
    cities = [city for city in cities_offered if city not in cities_visited]
    return cities[0] if len(cities) > 0 else 'No worthwhile conferences this year!'

def test_conference_traveller():
    assert conference_picker([],['Philadelphia','Osaka','Tokyo','Melbourne']) == 'Philadelphia'
    assert conference_picker([],['Brussels','Madrid','London']) == 'Brussels'
    assert conference_picker([],['Sydney','Tokyo']) == 'Sydney'
    assert conference_picker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne']) == 'No worthwhile conferences this year!'
    assert conference_picker(['Beijing','Johannesburg','Sydney','Philadelphia','Hong Kong','Stockholm','Chicago','Seoul','Mexico City','Berlin'],['Stockholm','Berlin','Chicago']) == 'No worthwhile conferences this year!'
    assert conference_picker(['Rome'],['Rome']) == 'No worthwhile conferences this year!'
    assert conference_picker(['Milan'],['London']) == 'London'
    assert conference_picker(['Mexico City','Dubai','Philadelphia','Madrid','Houston','Chicago','Delhi','Seoul','Mumbai','Lisbon','Hong Kong','Brisbane','Stockholm','Tokyo','San Francisco','Rio De Janeiro'],['Lisbon','Mexico City']) == 'No worthwhile conferences this year!'
    assert conference_picker(["Gatlantis", "Baldur's Gate", "Gotham City", "Mystara", "Washinkyo", "Central City"], ["Mystara", "Gatlantis", "MegaTokyo", "Genosha", "Central City", "Washinkyo", "Gotham City", "King's Landing", "Waterdeep"]) == 'MegaTokyo'
    assert conference_picker(["Thay", "Camelot"], ["Waterdeep", "Washinkyo"]) == 'Waterdeep'
