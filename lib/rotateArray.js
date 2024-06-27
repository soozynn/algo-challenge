function sliceArray(list, startIndex, endIndex) {
  const firstIndex = startIndex !== undefined ? startIndex : 0;
  const lastIndex = endIndex !== undefined ? endIndex : list.length;
  const slicedArray = [];

  for (let i = firstIndex; i < lastIndex; i++) {
    slicedArray[slicedArray.length] = list[i];
  }

  return slicedArray;
}

export default function rotateArray(list, count) {
  const copyList = [...list];
  const listLength = copyList.length;
  const rotationCount = listLength > count ? count : count % listLength;

  let frontPart = [];
  let backPart = [];
  let rotatedArray = [];

  if (rotationCount === 0) {
    return copyList;
  }

  if (rotationCount > 0) {
    frontPart = sliceArray(copyList, rotationCount);
    backPart = sliceArray(copyList, 0, rotationCount);
    rotatedArray = [...frontPart, ...backPart];

    return rotatedArray;
  }

  frontPart = sliceArray(copyList, 0, listLength + rotationCount);
  backPart = sliceArray(copyList, listLength + rotationCount);
  console.log(frontPart, backPart)
  rotatedArray = [...backPart, ...frontPart];

  return rotatedArray;
}