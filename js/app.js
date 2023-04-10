function main() {
  window.addEventListener("deviceorientation", onOrientationChange);
}

function onOrientationChange(event) {
  let angle = event.beta - 90;
  if (angle < 0) {
    angle = 0;
  }

  const distToTree = 20;
  const height = Math.tan((angle * Math.PI) / 180) * distToTree;
  document.getElementById("heightInfo").innerHTML =
    height.toFixed(1) + "m (" + angle.toFixed(1) + "&deg;)";
}
