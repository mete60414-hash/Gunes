const timeScaleInput = document.getElementById("timeScale");
const zoomInput = document.getElementById("zoom");
const universe = document.querySelector(".universe");
const orbits = Array.from(document.querySelectorAll(".orbit"));

const baseDurations = new Map(
  orbits.map((orbit) => [orbit, getComputedStyle(orbit).animationDuration])
);

const updateTimeScale = () => {
  const scale = Number(timeScaleInput.value);
  orbits.forEach((orbit) => {
    const baseDuration = baseDurations.get(orbit);
    const numeric = parseFloat(baseDuration);
    const unit = baseDuration.replace(String(numeric), "");
    orbit.style.animationDuration = `${(numeric / scale).toFixed(2)}${unit}`;
  });
};

const updateZoom = () => {
  const zoom = Number(zoomInput.value);
  universe.style.setProperty("--zoom", zoom);
  universe.dataset.zoom = "true";
};

timeScaleInput.addEventListener("input", updateTimeScale);
zoomInput.addEventListener("input", updateZoom);

updateTimeScale();
updateZoom();
