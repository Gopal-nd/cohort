class Room {
  constructor(id, noOfBeds, isAvailable = true) {
    this.id = id;
    this.noOfBeds = noOfBeds;
    this.isAvailable = isAvailable;
  }
}

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  checkAvailability(noOfBeds) {
    return this.rooms.find(room => room.noOfBeds === noOfBeds && room.isAvailable);
  }

  bookRoom(user, noOfBeds, noOfDays) {
    let availableRoom = this.checkAvailability(noOfBeds);
    if (availableRoom) {
      availableRoom.isAvailable = false;
      console.log(`Room booked for ${user.name} for ${noOfDays} days.`);
      return availableRoom;
    } else {
      console.log("No available rooms.");
      return null;
    }
  }
}

class Payment {
  static processPayment(amount, user) {
    console.log(`Payment of ₹${amount} received from ${user.name}.`);
    return true;
  }
}

class HotelBookingSystem {
  constructor() {
    this.users = [];
    this.hotel = new Hotel();
  }

  registerUser(id, name, age) {
    let newUser = new User(id, name, age);
    this.users.push(newUser);
    console.log("User Registered:", newUser);
    return newUser;
  }

  bookRoom(userId, noOfBeds, noOfDays) {
    let user = this.users.find(u => u.id === userId);
    if (!user) {
      console.log("User not found.");
      return;
    }

    let room = this.hotel.bookRoom(user, noOfBeds, noOfDays);
    if (room) {
      let amount = noOfDays * 1000; // ₹1000 per night
      Payment.processPayment(amount, user);
    }
  }
}

// Creating the system
const system = new HotelBookingSystem();

// Adding rooms
system.hotel.addRoom(new Room(101, 2));
system.hotel.addRoom(new Room(102, 3));

// Registering users
const user1 = system.registerUser(1, "John Doe", 25);

// Booking a room
system.bookRoom(1, 2, 3);

