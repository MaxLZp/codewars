# Parking Lot #1
## 6 kyu

Your job is to incrementally develop a fully robotized parking lot management system.

In this first step, we just want to manage a row of adjacent parking spots.

-All parking spots have a width of 1 meter.
-We allow motorbikes, regular cars and vans to park. Motorbikes occupy exactly 1 spot, regular cars take 2 adjacent spots, and vans need 3 (also adjacent) spots.
-All vehicles have a unique license number.
-The arrival/departure dock is at one end of the row. In order to save both time and power consumption, vehicles are always parked as close as possible to the dock.
-Once a vehicle is parked, the system does not move it.

You will get the following helper classes : Bike, Car, and Van. All constructors only take the license plate as argument...

`const b=new Bike('AB-123') const c=new Car('CD-456') const v=new Van('EF-789')`

... which can be accessed using the license attribute ...

`console.log(v.license); > 'EF-789'`

Your job is to implement a ParkingLot class, with one constructor and two methods.

- `new ParkingLot(size)`, which creates a ParkingLot with size spots, all initially empty.
- `park(vehicle)`, which returns true if the vehicle was parked successfully, false otherwise.
- `retrieve(license)`, which returns true if the vehicle was retrieved successfully, false otherwise.
