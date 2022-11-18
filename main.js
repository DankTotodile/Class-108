function record()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o3SB96an-/model.json',modelLoaded)
}
function modelLoaded()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("sound").innerHTML = "I can hear - "+ results[0].label;
        p = results[0].confidence*100;
        document.getElementById("accuracy").innerHTML = "Accuracy - "+ p.toFixed(2) + "%";
        if(results[0].label == "Clap")
        {
         document.getElementById("clap").src = "aliens-01.gif";
         document.getElementById("snap").src = "aliens-02.png";
         document.getElementById("tap").src = "aliens-03.png";
         document.getElementById("bell").src = "aliens-04.png";
        }
        if(results[0].label == "Fingers Snapping")
        {
         document.getElementById("clap").src = "aliens-01.png";
         document.getElementById("snap").src = "aliens-02.gif";
         document.getElementById("tap").src = "aliens-03.png";
         document.getElementById("bell").src = "aliens-04.png";
        }
        if(results[0].label == "Tapping")
        {
         document.getElementById("clap").src = "aliens-01.png";
         document.getElementById("snap").src = "aliens-02.png";
         document.getElementById("tap").src = "aliens-03.gif";
         document.getElementById("bell").src = "aliens-04.png";
        }
        if(results[0].label == "Bell")
        {
         document.getElementById("clap").src = "aliens-01.png";
         document.getElementById("snap").src = "aliens-02.png";
         document.getElementById("tap").src = "aliens-03.png";
         document.getElementById("bell").src = "aliens-04.gif";
        }
    }
    
}