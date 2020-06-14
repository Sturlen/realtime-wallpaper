Time of day
A day is 86 400 000 milliseconds
Time of day is current milliseconds since midnight.
(new Date("2020.06.15 12:00:00") - new Date("2020.06.15").getTime()) / 86400000

Sunrise, sunset zones etc

# Track

Returns a progress value between 0 and 1

example:

sunrise track
{
6:00: 0,
7:00: 1,

}

would be 0 at 6am , 0:5 at 6:30am and 1 at 7:00am
