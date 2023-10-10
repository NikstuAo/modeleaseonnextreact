import { useState } from "react";

function nightModeToggle() {
    const [nightmode, setNightMode] = useState(false);
    const [modeChanges, setModeChanges] = useState(0);
    const [jojohabilitado, setJojo] = useState(true);

    function applyNightMode() {
        {/* setJojo(false) (Desativar Efeitos de Jojo)*/}
        setModeChanges(modeChanges + 1)
        setNightMode(!nightmode)
        document.getElementById('container-fluid').style.background = nightmode ? '#F9B872' : '#D58C47';
        document.getElementById('container-fluid').style.color = nightmode ? 'white' : 'black';
        document.getElementById('moonicon').style.color = nightmode ? 'deepskyblue' : 'darkblue';
        document.getElementById('headmenu').style.backgroundColor = nightmode ? '#FAE7A5' : '#C97D3A';
        document.getElementById('headmenu').style.color = nightmode ? 'black' : 'white';
        try {
            document.getElementById('modeleaselogotext').style.webkitTextStrokeColor = nightmode ? 'white' : 'black';
        } catch (error) {
            
        }

        try {
            document.getElementById('aboutwrapper').style.backgroundColor = nightmode ? '#B6E1E7' : '#8DA7AC';
            document.getElementById('aboutwrapper').style.color = nightmode ? 'black' : 'white';
        } catch (error) {

        }

        try {
            document.getElementById('storewrapper').style.backgroundColor = nightmode ? '#B6E1E7' : '#8DA7AC';

            const storeitemdad = document.querySelectorAll('.storeitemdad');
            storeitemdad.forEach(storeitemdad => {
                storeitemdad.style.backgroundColor = nightmode ? '#B6E1E7' : '#8DA7AC';
            });
            const storeitem = document.querySelectorAll('.storeitem');
            storeitem.forEach(storeitem => {
                storeitem.style.backgroundColor = nightmode ? '#FAE7A5' : '#C97D3A';
            });
        } catch (error) {

        }

        if (modeChanges >= 10 && jojohabilitado == true) {
            document.getElementById('container-fluid').style.backgroundImage = "url('./Kono_Dio_Da.jpg')";
            if (modeChanges === 10) {
                var jojoop = new Audio('./JOJO SONO CHINO SADAME.mp3');
                jojoop.play();
            }
            if (modeChanges === 30) {
                window.location.href = './EuToBilu';
            }
        }
    }
    return applyNightMode;
}

export default nightModeToggle;