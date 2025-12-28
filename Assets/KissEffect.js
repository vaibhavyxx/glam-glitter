//@input SceneObject kissObject
//@input let duration = 5.0f;
let kissTriggered = false;

let event = script.createEvent("KissStartedEvent");
event.faceIndex = 0;
event.bind(function(eventData){
    //script.kissObject.enabled = true;
    kissTriggered = true;
});
