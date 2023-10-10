import { useState } from "react";

function logoClick() {
    const [logoClicks, setLogoClicks] = useState(0);
    const [lock, setLock] = useState(false);
    function logoClickclick() {
        const unlock = () => {
            setLock(false);
        };
        if (logoClicks === 5) {
            var lula = new Audio('./Lula.mp3');
            lula.play();
        }
        if (logoClicks < 9) {
            setLogoClicks(logoClicks + 1);
        } else {
            const logoImg = document.getElementById("logoimg");
            logoImg.src = "./Dio.png";
            if (!lock) {
                var wryy = new Audio('./wryy.mp3');
                wryy.play();
                setLock(true);
                setTimeout(unlock, 3000);
            }
        };
    }
    return logoClickclick;
}

export default logoClick;