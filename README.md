Time of day
A day is 86 400 000 milliseconds
Time of day is current milliseconds since midnight.
(new Date("2020.06.15 12:00:00") - new Date("2020.06.15").getTime()) / 86400000

Sunrise, sunset zones etc

# Track

Returns a progress value between 0 and 1
I belive its also refered to as tweening

example:

sunrise track
{
6:00: 0,
7:00: 1,

}

would be 0 at 6am , 0:5 at 6:30am and 1 at 7:00am

The main purpose it to blend between colors as the day progresses.
The ideal would be to have some sort of graphical editor that could create values to merge between.

Labels =
{
"dawn" : 03:00,
"sunrise" : 04:00,
"sunset": 22:49,
"dusk": 24:00
}
This will change for each day.

Keep colors in a seperate object, which is updated only by explicit configuration. Each differnt object will use key to retrive its color.

`Timeline.update()`or similar should be very optimised, as it could be called every second or multiple time a second with reqanimframe.

`Timeline.color["tag"]` gets the current color for the tag. _Should it be this specific? It should work for other tracks such a s_

Don't want it event based, insted query every x time.
