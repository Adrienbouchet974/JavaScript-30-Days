    //fetching the keyCode of an input from keyboard events
    function play_sound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // stop the function if no keyCode detected
    if(!audio){
        return
    }

    audio.currentTime = 0; // To spam the audio
    audio.play();
    key.classList.add('playing');
    }

    function remove_transition(e){
        
        //only display the transform property
        if(e.prrropertyName !== 'transform'){
            return;
        }
        
        //remove the class when the sounds stops playing
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener('transitionend', remove_transition));
    
    window.addEventListener('keydown', play_sound);