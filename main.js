// Returns 0 if no bus is within time range, otherwise return the amount of minutes from the bus stop
var result = 0;
route_id = 4001170

time_lower = 10
time_upper = 15

var now = new Date()/1000;
var json_data = JSON.parse(global('HTTPD'));


for(var i = 0; i < json_data.arrivals.length; i++)
{
	if(json_data.arrivals[i].route_id == route_id) {
		delta = Math.floor((json_data.arrivals[i].timestamp-now)/(60))
		if(delta >= time_lower && delta <= time_upper) {
			result = delta;
		}
  }
}

// result is stored as a global variable in Tasker, no need to actually return anything
