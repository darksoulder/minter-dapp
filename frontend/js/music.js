<audio src="${ song.url }" id="audio"></audio>
<i class="glyphicon glyphicon-play-circle b-play" id="play" onclick="play()"></i>

<script>
    function play() {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
        }
    }
</script>