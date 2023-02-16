class BirdData {
  constructor() {
    this.birdArray001 = ["big bird", "Bluefink", "Sparrowjack"];
    this.birdArray002 = ["Astrologer's Ruffer", "Swedish Volve"];
    this.birdArray003 = ["Green-Streaked Owl", "Racing Tit", "Appleking"];
    
  }
    getBirds() {
      const allBirdArray = [];
      allBirdArray.push(this.birdArray001, this.birdArray002, this.birdArray003);
      return allBirdArray;
     } 

     getBirdsId(row, id) {
      const arrayNameArray = [this.birdArray001, this.birdArray002, this.birdArray003];  
      birdArrayForId.push((arrayNameArray[row][id]));
      return birdArrayForId;
     }

 };

 module.exports = BirdData;