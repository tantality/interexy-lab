import "./css/reset.css";
import "./css/styles.css";

const PADDING_LEFT = 15;

enum DIRECTION {
  TO_LEFT = -1,
  TO_RIGHT = 1,
}

type Animation = {
  direction: DIRECTION;
  squareLeftPosition: number;
};

type SquareLeftPositions = {
  firstPosition: number;
  lastPosition: number;
  currentPosition: number;
};

function animateSquareFromSideToSideUsingSetTimeout(square: HTMLElement): void {
  const currentData: Animation = {
    direction: DIRECTION.TO_RIGHT,
    squareLeftPosition: PADDING_LEFT,
  };

  const MS = 5;

  setTimeout(function animate() {
    drawFrame(square, currentData);
    setTimeout(animate, MS);
  }, MS);
}

function animateSquareFromSideToSideUsingRequestAnimationFrame(square: HTMLElement): void {
  const currentData: Animation = {
    direction: DIRECTION.TO_RIGHT,
    squareLeftPosition: PADDING_LEFT,
  };

  requestAnimationFrame(animate);

  function animate(): void {
    drawFrame(square, currentData);
    requestAnimationFrame(animate);
  }
}

function drawFrame(square: HTMLElement, currentData: Animation): void {
  let { direction, squareLeftPosition } = currentData;

  const lastPosition = calculateLastLeftPosition(square);
  const positions: SquareLeftPositions = {
    firstPosition: PADDING_LEFT,
    lastPosition,
    currentPosition: squareLeftPosition,
  };

  direction = determineAnimationDirection(direction, positions);
  squareLeftPosition = getUpdatedLeftPosition(direction, squareLeftPosition);

  changeSquareLeftPosition(square, squareLeftPosition);

  currentData.direction = direction;
  currentData.squareLeftPosition = squareLeftPosition;
}

function calculateLastLeftPosition(square: HTMLElement): number {
  const squareWidth = square.getBoundingClientRect().width;
  const roundedSquareWidth = Math.round(squareWidth);

  const parentElement = square.parentElement;
  let parentWidth: number | null = null;

  if (parentElement) {
    parentWidth = parentElement.getBoundingClientRect().width;
  } else throw new Error("Square doesn't have a parent");

  const roundedParentWidth = Math.round(parentWidth);

  const lastLeftPosition = roundedParentWidth - roundedSquareWidth - PADDING_LEFT;

  return lastLeftPosition;
}

function determineAnimationDirection(currentDirection: DIRECTION, positions: SquareLeftPositions): DIRECTION {
  const { firstPosition, lastPosition, currentPosition } = positions;

  const isDirectionToRight = currentDirection === DIRECTION.TO_RIGHT;
  const isCurrentLeftPositionEqualToLastOne = currentPosition === lastPosition;
  const isCurrentLeftPositionEqualToFirstOne = currentPosition === firstPosition;

  if (isCurrentLeftPositionEqualToLastOne && isDirectionToRight) return DIRECTION.TO_LEFT;
  if (isCurrentLeftPositionEqualToFirstOne && !isDirectionToRight) return DIRECTION.TO_RIGHT;

  return currentDirection;
}

function getUpdatedLeftPosition(currentDirection: DIRECTION, currentLeftPosition: number): number {
  const STEP = 1;
  if (currentDirection === DIRECTION.TO_LEFT) return currentLeftPosition - STEP;
  else return currentLeftPosition + STEP;
}

function changeSquareLeftPosition(square: HTMLElement, newLeftPosition: number): void {
  square.style.left = newLeftPosition + "px";
}

const square = document.querySelector("#square-for-set-timeout-animation") as HTMLElement;
animateSquareFromSideToSideUsingSetTimeout(square);

const square1 = document.querySelector("#square-for-request-animation-frame-animation") as HTMLElement;
animateSquareFromSideToSideUsingRequestAnimationFrame(square1);

// const worker = new Worker("./sorts/bubble-sort-for-worker.js");
// worker.postMessage("");
