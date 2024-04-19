document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
      } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
      }
    });

    audio.addEventListener('ended', function () {
      playPauseButton.textContent = 'Play';
    });
  });