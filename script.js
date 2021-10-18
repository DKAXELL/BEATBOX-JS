/**
 * DONE: Create a keydown listener to track what keys are hit
 * DONE: Create a Beat class to represent the beat object in utils.js
 * DONE: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * DONE: Button pt1: Initialize color and element values
 * DONE: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * DONE: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * DONE: Button pt4: Call the select() function upon key press ;)
 * DONE: Button pt5: Add transition for button selection
 * DONE: Button pt6: Remove the button style upon transition end | Use deselect function
 * DONE: Complete all button instances with the following colors
 * DONE: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "65": {
        beat: new Beat("../assets/sa5j_demo.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/smallchocalo.mp3"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/berimbau.mp3"),
        button: new Button("#FFFFFF", 75)
    },
    "76": {
        beat: new Beat("./assets/sa5j_demo.mp3"),
        button: new Button("#FFFFFF", 76)
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play()
        keyPress.button.select();
    }

}


document.addEventListener('keydown', (triggerBeat))
