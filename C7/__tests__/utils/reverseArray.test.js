import { reverseArray } from "../../utils/reverseArray.js";

describe('test for reverseArray function', () => {
    const arr = [1, 4, 6, 7, 98]
    it('should reverse an array', () => {
        expect(reverseArray(arr)).toEqual([98, 7, 6, 4, 1]);
        expect(reverseArray([])).toEqual([]);
        expect(reverseArray([5])).toEqual([5]);
    })
})