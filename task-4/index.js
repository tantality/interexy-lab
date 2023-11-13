const PADDING_LEFT = 15;
const DIRECTION = {
  TO_LEFT: -1,
  TO_RIGHT: 1,
};

function animateSquareFromSideToSideUsingSetTimeout(square) {
  const animationData = {
    currentDirection: DIRECTION.TO_RIGHT,
    currentLeftPosition: PADDING_LEFT,
  };

  setInterval(() => drawFrame(square, animationData), 5);
}

function animateSquareFromSideToSideUsingRequestAnimationFrame(square) {
  const animationData = {
    currentDirection: DIRECTION.TO_RIGHT,
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
  currentLeftPosition = getUpdatedLeftPosition(currentDirection, currentLeftPosition);

  changeSquareLeftPosition(square, currentLeftPosition);

  animationData.currentDirection = currentDirection;
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

function getUpdatedLeftPosition(currentDirection, currentLeftPosition) {
  const STEP = 1;
  if (currentDirection == DIRECTION.TO_LEFT) return currentLeftPosition - STEP;
  else return currentLeftPosition + STEP;
}

function changeSquareLeftPosition(square, newLeftPosition) {
  square.style.left = newLeftPosition + "px";
}

const square = document.querySelector("#square-for-set-timeout-animation");
animateSquareFromSideToSideUsingSetTimeout(square);

const square1 = document.querySelector("#square-for-request-animation-frame-animation");
animateSquareFromSideToSideUsingRequestAnimationFrame(square1);
