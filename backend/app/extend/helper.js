'use strict';
module.exports = {
  ava(list) {
    const new_list = [];
    new_list.push((list[0] + list[1]) / 2);
    new_list.push((list[2] + list[3]) / 2);
    new_list.push((list[4] + list[5]) / 2);
    return new_list;
  },
  toNum(list) {
    const newList = [];
    for (const i of list) {
      newList.push(parseInt(i));
    }
    return newList;
  },
};
