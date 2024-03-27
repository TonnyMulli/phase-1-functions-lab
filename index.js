// helpers.js

function distanceFromHqInBlocks(destination) {
    const hq = 42;
    return Math.abs(destination - hq);
  }
  
  function distanceFromHqInFeet(destination) {
    const blocks = distanceFromHqInBlocks(destination);
    return blocks * 264; // 1 block = 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // 1 block = 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
  
    switch (true) {
      case distance <= 400:
        fare = 0; // First 400 feet are free
        break;
      case distance > 400 && distance <= 2000:
        fare = (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
        break;
      case distance > 2000 && distance <= 2500:
        fare = 25; // Flat fare for distances over 2000 feet
        break;
      default:
        return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  
    return fare
  }
  

  