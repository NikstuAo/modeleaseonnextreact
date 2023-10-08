import { useState } from "react";

function nightModeToggle() {
    const [nightmode, setNightMode] = useState(false);
    const [modeChanges, setModeChanges] = useState(0);

    function applyNightMode() {
        setModeChanges(modeChanges + 1)
        setNightMode(!nightmode)
        document.body.style.background = nightmode ? 'white' : 'black';
        document.body.style.color = nightmode ? 'black' : 'white';
        document.getElementById('moonicon').style.color = nightmode ? 'deepskyblue' : 'darkblue';
        document.getElementById('headmenu').style.backgroundColor = nightmode ? 'black' : 'white';
        document.getElementById('headmenu').style.color = nightmode ? 'white' : 'black';
        try {
            document.getElementById('modeleaselogotext').style.webkitTextStrokeColor = nightmode ? 'black' : 'white';
        } catch (error) {
        }
        try {
            document.getElementById('aboutwrapper').style.backgroundColor = nightmode ? 'black' : 'white';
            document.getElementById('aboutwrapper').style.color = nightmode ? 'white' : 'black';
        } catch (error) {

        }

        try {
            document.getElementById('storewrapper').style.backgroundColor = nightmode ? 'black' : 'white';

            const storeitemdad = document.querySelectorAll('.storeitemdad');
            storeitemdad.forEach(storeitemdad => {
                storeitemdad.style.backgroundColor = nightmode ? 'black' : 'white';
            });
            const storeitem = document.querySelectorAll('.storeitem');
            storeitem.forEach(storeitem => {
                storeitem.style.backgroundColor = nightmode ? 'white' : 'black';
            });
        } catch (error) {

        }

        if (modeChanges >= 10) {
            document.body.style.backgroundImage = "url('./Kono_Dio_Da.jpg')";
            if (modeChanges === 10) {
                var jojoop = new Audio('./JOJO SONO CHINO SADAME.mp3');
                jojoop.play();
            }
            if (modeChanges === 30) {
                window.location.href = 'https://www.youtube.com/watch?v=8cZ1xnBihpY';
            }
        }
    }
    return applyNightMode;
}

export default nightModeToggle;