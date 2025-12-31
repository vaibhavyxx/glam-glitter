
//@input SceneObject kissObject
//@input float threshold = 5.0f;
//@input float wait = 5.0f;
let kissTriggered = false;

let event = script.createEvent("KissStartedEvent");
let time = 0;

event.faceIndex = 0;
event.bind(function(eventData){
    print("kiss me");
    script.kissObject.enabled = true;
    kissTriggered = true;
});

function alphaRatio(){
    let fadeRatio = (time / script.threshold);
    let image = script.kissObject.getComponent("Component.Image");
    let color = image.mainPass.baseColor;
    color.a = fadeRatio;
    image.mainPass.baseColor = color;
}

function animateKiss(){
    if(kissTriggered){
        time += getDeltaTime();
        alphaRatio();

        if(time > script.wait) kissTriggered = false;
        }
    else{
        time -= getDeltaTime();
        alphaRatio();
    }
}

var updateEvent = script.createEvent('UpdateEvent');
updateEvent.bind(animateKiss);