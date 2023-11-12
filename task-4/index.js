const PADDING_LEFT = 15;
const DIRECTION = {
  TO_LEFT: -1,
  TO_RIGHT: 1,
};

function animateSquareFromSideToSideUsingSetTimeout(square) {
  const animationData = {
    direction: DIRECTION.TO_RIGHT,
    currentLeftPosition: PADDING_LEFT,
  };

  setInterval(() => drawFrame(square, animationData), 5);
}

function animateSquareFromSideToSideUsingRequestAnimationFrame(square) {
  const animationData = {
    direction: DIRECTION.TO_RIGHT,
    currentLeftPosition: PADDING_LEFT,
  };

  requestAnimationFrame(frame);

  function frame() {
    drawFrame(square, animationData);
    requestAnimationFrame(frame);
  }
}

function drawFrame(square, animationData) {
  let { currentDirection, currentLeftPosition } = animationData;

  const lastLeftPosition = calculateLastLeftPosition(square);
  const squareLeftPositions = {
    firstLeftPosition: PADDING_LEFT,
    lastLeftPosition,
    currentLeftPosition,
  };

  currentDirection = determineAnimationDirection(currentDirection, squareLeftPositions);

  currentLeftPosition = currentDirection == DIRECTION.TO_LEFT ? currentLeftPosition - 1 : currentLeftPosition + 1;

  square.style.left = currentLeftPosition + "px";

  animationData.direction = currentDirection;
  animationData.currentLeftPosition = currentLeftPosition;
}

function calculateLastLeftPosition(square) {
  const squareWidth = square.getBoundingClientRect().width;
  const roundedSquareWidth = Math.round(squareWidth);

  const parentWidth = square.parentNode.getBoundingClientRect().width;
  const roundedParentWidth = Math.round(parentWidth);

  const lastLeftPosition = roundedParentWidth - roundedSquareWidth - PADDING_LEFT;

  return lastLeftPosition;
}

function determineAnimationDirection(currentDirection, squareLeftPositions) {
  const { firstLeftPosition, lastLeftPosition, currentLeftPosition } = squareLeftPositions;

  const isDirectionToRight = currentDirection === DIRECTION.TO_RIGHT;
  const isCurrentLeftPositionEqualToLastOne = currentLeftPosition === lastLeftPosition;
  const isCurrentLeftPositionEqualToFirstOne = currentLeftPosition === firstLeftPosition;

  if (isCurrentLeftPositionEqualToLastOne && isDirectionToRight) return DIRECTION.TO_LEFT;
  if (isCurrentLeftPositionEqualToFirstOne && !isDirectionToRight) return DIRECTION.TO_RIGHT;

  return currentDirection;
}

const square = document.querySelector("#square-for-set-timeout-animation");
animateSquareFromSideToSideUsingSetTimeout(square);

const square1 = document.querySelector("#square-for-request-animation-frame-animation");
animateSquareFromSideToSideUsingRequestAnimationFrame(square1);
