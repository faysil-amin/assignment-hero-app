const getData = () => {
  const data = localStorage.getItem("getData");
  if (data) {
    const converData = JSON.parse(data);
    return converData;
  } else {
    return [];
  }
};
const storeData = (id) => {
  const callData = getData();
  if (callData.includes(id)) {
    return alert("entered");
  } else {
    callData.push(id);
    const data = JSON.stringify(callData);
    localStorage.setItem("getData", data);
  }
};
const removeLocalStore = (id) => {
  const callData = getData();
  const data = callData.filter((res) => res !== id);
  const convert = JSON.stringify(data);
  localStorage.setItem("getData", convert);
};
export { storeData, getData, removeLocalStore };
