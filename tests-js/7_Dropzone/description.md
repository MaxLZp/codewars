# Dropzone
## 7 Kyu

A forest fire has been spotted at `fire`, a simple 2-element array with x, y coordinates.

The forest service has decided to send smoke jumpers in by plane and drop them in the forest.

The terrain is dangerous and surveyors have determined that there are three possible safe `dropzones`, an array of three simple arrays with x, y coordinates.

The plane is en route and time is of the essence. Your mission is to return a simple `[x,y]` array with the coordinates of the dropzone closest to the fire.

If several dropzones are an equal distance away from the fire, then return the first closest dropzone in the given array.

For example, if you are given: fire = `[1,1]`, dropzones = `[[0,1],[1,0],[2,2]]`, the answer is `[0,1]`, because that is the first closest dropzone in the given array.

