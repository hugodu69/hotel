var hotel = new Object();

hotel.name = 'pize';
hotel.rooms = 120;
hotel.booked = 33;
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
}

var elRooms = document.getElementById('number');
elRooms.textContent = hotel.checkAvailability();

/*
document.getElementById('number').textContent = hotel.checkAvailability();
*/
