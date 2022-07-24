import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DrumKitController extends Controller {
  keyObj = {
    65: {
      displayName: 'A',
      audioSrc: 'assets/audio/boom.wav',
    },
    83: {
      displayName: 'S',
      audioSrc: 'assets/audio/clap.wav',
    },
    68: {
      displayName: 'D',
      audioSrc: 'assets/audio/hihat.wav',
    },
    70: {
      displayName: 'F',
      audioSrc: 'assets/audio/kick.wav',
    },
    71: {
      displayName: 'G',
      audioSrc: 'assets/audio/openhat.wav',
    },
    72: {
      displayName: 'H',
      audioSrc: 'assets/audio/ride.wav',
    },
    74: {
      displayName: 'J',
      audioSrc: 'assets/audio/snare.wav',
    },
    75: {
      displayName: 'K',
      audioSrc: 'assets/audio/tink.wav',
    },
    76: {
      displayName: 'L',
      audioSrc: 'assets/audio/tom.wav',
    },
  };
  keyCodeArr = Object.keys(this.keyObj);

  @action
  addListeners() {
    console.log('keyCodeArr : ', this.keyCodeArr);
    let delegatedElement = document.querySelector('div#drumKitKeyHolder');
    delegatedElement.addEventListener('click', this.drumKitAudioPlay);
    window.addEventListener('keyup', this.drumKitAudioPlay);
  }

  @action
  drumKitAudioPlay(childEle) {
    console.log('childEle : ', childEle);
    if (
      childEle.target.className.indexOf('drumKitKeys') > -1 ||
      this.keyCodeArr.includes(childEle.keyCode)
    ) {
      let keyCode = childEle.keyCode || childEle.target.dataset.key;
      let audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
      if (!audioElement) return false;
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
}
