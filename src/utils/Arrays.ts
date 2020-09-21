/**
 * Moves the item from given index to given one.
 * @param fromIndex The origin index the item should move from.
 * @param toIndex The destination index that the item should move to.
 * @param inArray The array that the given item should move inside.
 */
export function moveItem<T>(fromIndex: number, toIndex: number, inArray: T[]) {
  // Check the params to see if the movement logically possible.
  if (
    fromIndex == null ||
    toIndex == null ||
    !Array.isArray(inArray) ||
    inArray?.length < 2 ||
    fromIndex === toIndex ||
    fromIndex > inArray.length - 1 ||
    fromIndex < 0 ||
    toIndex > inArray.length - 1 ||
    toIndex < 0
  )
    return inArray;

  const array = [...inArray];
  const swap = array.splice(fromIndex, 1);
  const remaining = array.slice(toIndex);
  array.splice(toIndex);
  const newOrder = [...array, ...swap, ...remaining];
  return newOrder;
}
