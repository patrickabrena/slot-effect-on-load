/*Test Code 6 -  */
document.addEventListener("DOMContentLoaded", function () {
  const img_looping_effect5 = () => {
    const firstbox = document.getElementById("box-first-child");
    const secondbox = document.getElementById("box-second-child");
    const thirdbox = document.getElementById("box-third-child");

    const imageContainer = [firstbox, secondbox, thirdbox];
    const offsetTimer = 100;

    const imageUrls = [
      "../slot-effect-on-load/imgs/rock-final.png",
      "../slot-effect-on-load/imgs/hand-final.png",
      "../slot-effect-on-load/imgs/scissors-final.png",
    ];
    const displayTime = 110;

    const repeatForLoop = (targetIndex) => {
      for (let i = 0; i < imageContainer.length; i++) {
        const updatedDelay = offsetTimer * i;

        const numLoops = i + 3;
        const imgArrLength = imageUrls.length;

        for (let j = 0; j < imgArrLength * numLoops; j++) {
          setTimeout(() => {
            const currentImageUrlIndex = j % imgArrLength;
            imageContainer[i].innerHTML = `<img src= "${
              imageUrls[(currentImageUrlIndex + targetIndex) % imgArrLength]
            }">`;
          }, j * displayTime + updatedDelay);
        }
      }
    };

    const loopTriggerRock = document.getElementById("loop-trigger-rock");
    const loopTriggerPaper = document.getElementById("loop-trigger-paper");
    const loopTriggerScissors = document.getElementById(
      "loop-trigger-scissors"
    );
    //
    loopTriggerRock.onclick = () => {
      repeatForLoop(1);
    };
    //
    loopTriggerPaper.onclick = () => {
      repeatForLoop(2);
    };
    //
    loopTriggerScissors.onclick = () => {
      repeatForLoop(3);
    };
  };

  img_looping_effect5(); // Call the function to set up the event handler
});
/*Test Code 6 */
