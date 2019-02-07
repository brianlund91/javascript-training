window.onload = init;
window.onresize = resize;

function init() {

    //initialize page/screen size
    resize();

    // initialize scroll event listener
    progressBar = document.querySelector(".progress div");

    window.addEventListener("scroll", function() {
        var max = document.body.scrollHeight - window.innerHeight;
        var percent = (window.pageYOffset / max) * 100;
        // TODO: fix bug where percent can be > 100
        //debugScrollPercentage(percent);
        percent = fixScrollPercent(percent);
        progressBar.style.width = percent + "%";

        // add percentage value to page
        document.getElementById("percentageValue").innerHTML = Math.round(percent) + "%";
    });

}

function resize(evt) {
    console.log("resize");
    var pageSizeSpan = document.querySelector('#pageSize');
    pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
  
    // screen size
    var screenSizeSpan = document.querySelector('#screenSize');
    screenSizeSpan.innerHTML = "Width: " + screen.width + " Height: " + screen.height;
  
}

function debugScrollPercentage(percent) {
    if (percent < 0 || percent > 100) {
        console.error("percent: " + percent);
        console.log("document.body.scrollHeight: " + document.body.scrollHeight);
        console.log("window.innerHeight: " + window.innerHeight);
        console.log("max: " + (document.body.scrollHeight - window.innerHeight));            
        console.log("window.pageYOffset: " + window.pageYOffset);
        document.getElementById("percentageValue").style.color = "red";
    }
    else {
        document.getElementById("percentageValue").style.color = "black";
    }
}

function fixScrollPercent(percent) {
    // temporary function to "correct" any percentage values that are < 0 or > 100
    if (percent < 0) return 0;
    if (percent > 100) return 100;
    return percent;
}