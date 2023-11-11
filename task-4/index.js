const PADDING_LEFT = 15;
const DIRECTION = {
  TO_LEFT: -1,
  TO_RIGHT: 1,
};

function animateSquareUsingSetTimeout(square) {
  const animationConfig = {
    direction: DIRECTION.TO_RIGHT,
    leftPosition: PADDING_LEFT,
  };

  setInterval(() => drawFrame(square, animationConfig), 5);
}

function animateSquareUsingRequestAnimationFrame(square) {
  const animationConfig = {
    direction: DIRECTION.TO_RIGHT,
    leftPosition: PADDING_LEFT,
  };

  requestAnimationFrame(frame);

  function frame() {
    drawFrame(square, animationConfig);
    requestAnimationFrame(frame);
  }
}

function drawFrame(square, animationConfig) {
  let { direction, leftPosition } = animationConfig;

  const lastPossibleLeftPosition = calculateLastPossibleLeftPosition(square);
  const positions = {
    firstPossibleLeftPosition: PADDING_LEFT,
    lastPossibleLeftPosition,
    leftPosition,
  };

  direction = determineAnimationDirection(animationConfig.direction, positions);

  leftPosition = direction == DIRECTION.TO_LEFT ? leftPosition - 1 : leftPosition + 1;

  square.style.left = leftPosition + "px";

  animationConfig.direction = direction;
  animationConfig.leftPosition = leftPosition;
}

function calculateLastPossibleLeftPosition(square) {
  const squareWidth = square.getBoundingClientRect().width;
  const roundedSquareWidth = Math.round(squareWidth);

  const parentWidth = square.parentNode.getBoundingClientRect().width;
  const roundedParentWidth = Math.round(parentWidth);

  const lastLeftPosition = roundedParentWidth - roundedSquareWidth - PADDING_LEFT;

  return lastLeftPosition;
}

function determineAnimationDirection(direction, positions) {
  const { firstPossibleLeftPosition, lastPossibleLeftPosition, leftPosition } = positions;

  const isDirectionToRight = direction === DIRECTION.TO_RIGHT;

  if (leftPosition === lastPossibleLeftPosition && isDirectionToRight) return DIRECTION.TO_LEFT;
  if (leftPosition === firstPossibleLeftPosition && !isDirectionToRight) return DIRECTION.TO_RIGHT;

  return direction;
}

const square = document.querySelector("#square-for-set-timeout-animation");
animateSquareUsingSetTimeout(square);

const square1 = document.querySelector("#square-for-request-animation-frame-animation");
animateSquareUsingRequestAnimationFrame(square1);
