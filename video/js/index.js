let video = document.getElementById("myVideo")

let playBtn = document.getElementById("plyBtn")
playBtn.addEventListener("click", function(){
    video.play()
})

let pauseBtn = document.getElementById("pauseBtn")
pauseBtn.addEventListener("click", function(){
    video.pause()
})

let freezBtn = document.getElementById("freezBtn")
freezBtn.addEventListener("mousedown",function(){
    video.pause()
})
freezBtn.addEventListener("mouseup", function(){
    video.play()
})

let seekBar = document.getElementById("seekBar")
seekBar.addEventListener("change", function(){
    let time = video.duration*(seekBar.value/100)
    video.currentTime = time
})

video.addEventListener("timesupdate", function(){
    let value = (100/ video.duration) * video.currentTime
    seekBar.value = value
})

let volume = document.getElementById("volume")
volume.addEventListener("change", function(){
    video.volume = volume.value
})