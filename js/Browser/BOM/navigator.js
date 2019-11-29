console.log(navigator) //it holds the device info(useragent->brower)

console.log(navigator.userAgent)

// it accesses the current location
navigator.geolocation.getCurrentPosition(function (position){
    console.log(position)
});

