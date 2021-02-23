Webcam.set({
    width: 300,
    height: 300, 
    image_format: "png",
    png_quality: 90

});
Webcam.attach("#camera")

function click(){
    Webcam.snap(function (image) {
        document.getElementById("snapshot").innerHTML=`<img id="imageCaptured" src=${image}>`
    });
}
console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rmoGftXd3/model.json")

function loadedModel(){
    console.log("Model has been loaded")
}
function identify(){
    picture= document.getElementById("imageCaptured")
    classifier.classify(picture, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        person=results[0].label
        console.log(person)
        document.getElementById("person").innerHTML=person;
        accuracy=results[0].confidence.toFixed(3)*100+"%"
        console.log(accuracy)
        document.getElementById("accuracy").innerHTML=accuracy;
    }
}