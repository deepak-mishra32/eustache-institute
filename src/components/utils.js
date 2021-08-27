export const getNewStateOneValue = (data, value) => {
  if (data.includes(value)) {
    const newData = [...data];
    const index = newData.indexOf(value);
    newData.splice(index, 1);
    return newData;
  } else {
    return [...data, value];
  }
};
