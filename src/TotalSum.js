const array = [-4, 1, 3, -2, -1];
function handleSum(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          return [array[i], array[j]];
        }
      }
    }
    return "Not found";
  }
  const result = handleSum(array);
  console.log(result);
