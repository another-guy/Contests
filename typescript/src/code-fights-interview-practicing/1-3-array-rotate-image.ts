export interface Point { r: number; c: number; }

export function rotateImage(image: number[][]): number[][] {
  for (
    let iterator = startPointIterator(image.length), iteratorResult = iterator.next();
    !iteratorResult.done;
    iteratorResult = iterator.next()
  ) {
    rotatePoint(iteratorResult.value, image);
  }

  return image;
}

export function* startPointIterator(dimension: number): IterableIterator<Point> {
  for (
    let rowIndex = 0, rowPointsCount = dimension - 1;
    rowPointsCount > 0;
    rowIndex++, rowPointsCount -= 2
  ) {
    for (
      let columnIndex = rowIndex;
      columnIndex < rowIndex + rowPointsCount;
      columnIndex++
    ) {
      yield ({ r: rowIndex, c: columnIndex });
    }
  }
}

export function rotatePoint(startPoint: Point, image: number[][]): void {
  const dimension: number = image.length;
  const destinationFor = (sourcePoint: Point): Point => ({ r: sourcePoint.c, c: dimension - sourcePoint.r - 1 });

  const memory: number[] = [];
  let currentReadPoint: Point = startPoint;
  do {
    memory.push(get(image, currentReadPoint));
    currentReadPoint = destinationFor(currentReadPoint);
  } while (pointsEqual(currentReadPoint, startPoint) === false);

  let currentWritePoint: Point = startPoint;
  let index: number = 0;
  do {
    currentWritePoint = destinationFor(currentWritePoint);
    set(image, currentWritePoint, memory[index]);
    index++;
  } while (pointsEqual(currentWritePoint, startPoint) === false);
}

export function get(image: number[][], point: Point): number {
  return image[point.r][point.c];
}

export function set(image: number[][], point: Point, value: number): void {
  image[point.r][point.c] = value;
}

export function pointsEqual(point1: Point, point2: Point): boolean {
  return point1.r === point2.r && point1.c === point2.c;
}
