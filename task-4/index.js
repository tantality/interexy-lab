const PADDING_LEFT = 15;

function animateSquareUsingSetTimeout(square) {
  let leftPosition = PADDING_LEFT;
  const squareWidth = square.getBoundingClientRect().width;
  const roundedSquareWidth = Math.round(squareWidth);
  let inverseDirection = false;

  setInterval(frame, 5);

  function frame() {
    const parentWidth = square.parentNode.getBoundingClientRect().width;
    const roundedParentWidth = Math.round(parentWidth);
    const lastPossiblePosition =
      roundedParentWidth - roundedSquareWidth - PADDING_LEFT;

    if (leftPosition === lastPossiblePosition && !inverseDirection) {
      inverseDirection = true;
    }

    if (leftPosition === PADDING_LEFT && inverseDirection) {
      inverseDirection = false;
    }

    leftPosition = inverseDirection ? leftPosition - 1 : leftPosition + 1;
    square.style.left = leftPosition + "px";
  }
}

function animateSquareUsingRequestAnimationFrame(square) {
  let leftPosition = PADDING_LEFT;
  const squareWidth = square.getBoundingClientRect().width;
  const roundedSquareWidth = Math.round(squareWidth);
  let inverseDirection = false;

  requestAnimationFrame(frame);

  function frame() {
    const parentWidth = square.parentNode.getBoundingClientRect().width;
    const roundedParentWidth = Math.round(parentWidth);
    const lastPossiblePosition =
      roundedParentWidth - roundedSquareWidth - PADDING_LEFT;

    if (leftPosition === lastPossiblePosition && !inverseDirection) {
      inverseDirection = true;
    }

    if (leftPosition === PADDING_LEFT && inverseDirection) {
      inverseDirection = false;
    }

    leftPosition = inverseDirection ? leftPosition - 1 : leftPosition + 1;
    square.style.left = leftPosition + "px";

    requestAnimationFrame(frame);
  }
}

const square = document.querySelector("#square-for-set-timeout-animation");
animateSquareUsingSetTimeout(square);

const square1 = document.querySelector(
  "#square-for-request-animation-frame-animation"
);
animateSquareUsingRequestAnimationFrame(square1);
