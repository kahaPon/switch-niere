
var btnOn = document.getElementById("on");
var btnOff = document.getElementById("off");

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")


client.on("connect", function () {
    console.log("Already connected");
    
    btnOn.addEventListener("click", function(event) {
        event.preventDefault();
        // console.log("working on >>>");
        let status = document.getElementById("status");
        status.innerHTML = "The device is currently turned on.";
    
        client.on("message", function (topic) {
            console.log(topic);
        })
    
        let topic = "niere/device/status";
        let st = "turned on";
        client.publish(topic,st);
        // console.log("topic sent>>>");
    }) 
    
    btnOff.addEventListener("click", function(event) {
        event.preventDefault();
        let status = document.getElementById("status");
        status.innerHTML="The device is currently turned off";
        let topic = "niere/device/status";
        let st = "turned off";
        client.publish(topic,st);
        console.log("topic sent>>>");
    
    })

})




