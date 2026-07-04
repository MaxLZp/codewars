# The Solar System - Planet Mnemonic
## 7 Kyu

Oh no! The planets are jumbled up again!

### ABOUT

Did you know that there is a mnemonic to remember the planets in there order in our Solar System.

The mnemonic is the sentence "My Very Efficient Mother Just Served Us Nuts", where the `M` of "My" stands for Mercury, `V` of "Very" for Venus, `E` of "Efficient" for Earth and so on.

### TASK

Now that the planets are all jumbled up, some people have decided to come up with a new mnemonic, and your task is to confirm whether the mnemonic they have made fits the new Solar System using a program.

So, given the Solar System in the form of a list, you have to return a boolean value that is either `True` if the mnemonic is correct or `False` if it is not.

However, an `Asteroid` has to be ignored as it should not be part of the mnemonic.

*Pluto will never be part of the Solar System.*

### EXAMPLES
```
["Earth", "Jupiter", "Asteroid", "Asteroid", "Mercury", "Asteroid", "Saturn"], "Even Jaguars Make Spaghetti" -> True
# E of "Even" stands for Earth
# J of "Jaguars" stands for Jupiter
# Asteroid is ignored
# Another Asteroid is ignored
# M of "Make" stands for Mercury
# Asteroid is ignored again
# Finally, S of "Spaghetti" stands for Saturn
# As the whole mnemonic fits the given Solar System, you have to just return True

["Asteroid", "Mars", "Uranus", "Asteroid"], "Water Melon" -> False
```

### NOTES

- All the planet names will be Title Case and so will be the mnemonic
- There will never be more than one of anything except Asteroids
- If the Solar System is empty or it contains only Asteroids, then empty string mnemonic, "", is valid. However, "Hello" is not valid.
- The Solar System will never contain anything outside `["Asteroid", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]`
- Pluto will never be part of the Solar System

