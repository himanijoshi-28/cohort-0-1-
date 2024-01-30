import { atom, selector } from "recoil";
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
export const isevenSelector = selector({
  key: "isevenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    console.log("iseven : ", count % 2);
    return count % 2;
  },
});
