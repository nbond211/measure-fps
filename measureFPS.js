const fpsContainer = document.createElement("div");
fpsContainer.setAttribute("id", "fps-meter");
fpsContainer.style.cssText = "position: absolute;left: 10px;top: 10px;background-color: #2121219c;color: #fff;padding: 10px;";

const fpsText = document.createElement("p");
fpsText.innerHTML = "FPS";
fpsText.style.cssText = "margin: 0;font-size: 14px;display: flex;align-items: center;letter-spacing: 1px;font-family: sans-serif;";

const fpsData = document.createElement("span");
fpsData.setAttribute("id", "fps-element");
fpsData.style.cssText = "font-size: 24px;margin-right: 10px";

fpsText.insertAdjacentElement("afterbegin", fpsData);
fpsContainer.appendChild(fpsText);

document.body.appendChild(fpsContainer);

const lastTenFramesTimes = [];

const canvas = document.getElementsByTagName("canvas");
const isCanvas = canvas.length;

const performanceMeasureRAF = () => {

lastTenFramesTimes.push(Date.now());

if(lastTenFramesTimes.length > 100) {
    lastTenFramesTimes.shift(); // Remove first item
}

if(lastTenFramesTimes.length > 1) {
    const timeForTenDrawsMs = Date.now() - lastTenFramesTimes[0];
    const fps = Math.round(lastTenFramesTimes.length / timeForTenDrawsMs * 1000);
    if (!isCanvas) {
    fpsData.innerHTML = fps;
    }
}

requestAnimationFrame(performanceMeasureRAF);
};

performanceMeasureRAF();