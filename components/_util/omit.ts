const omit = (obj: Object, keys: string[]): Object => {
  const resultObj = Object.assign({}, obj);
  keys.forEach(key => {
    delete resultObj[key];
  });
  return resultObj;
};

export default omit;
