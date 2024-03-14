function clock() {
    // We use new Date() function to retrive the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var time = hour + ":" + minute + ":" + second;
    console.log(time);
  }
  
  setInterval(clock, 1000);