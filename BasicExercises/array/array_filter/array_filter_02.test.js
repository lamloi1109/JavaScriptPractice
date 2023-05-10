// Tìm tất cả các số mà nó lớn hơn số đứng trước nó
// Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không
// tính số đầu tiên)

import { findNumbers } from "./array_filter_02.js";

describe('findNumbers(numberList)', () => {
    it('should return [] if list is not an array', () => {
        expect(findNumbers("Dsadsa")).toStrictEqual([]);
    });        
    
    it('should return [] if list length < 2', () => {
        expect(findNumbers([])).toStrictEqual([]);
    });        
    
    it('should return [] if after number < before number ', () => {
        expect(findNumbers([5,2,1,-1])).toStrictEqual([]);
    }); 
    
    it('should return correct list if after number > before number ', () => {
        expect(findNumbers([2, 5, 3, 7])).toStrictEqual([5, 7]);
    }); 
}); 
// describe('findNumbersV2(numberList)', () => {
//     it('should return [] if list is not an array', () => {
//         expect(findNumbersV2("Dsadsa")).toStrictEqual([]);
//     });        
    
//     it('should return [] if list length < 2', () => {
//         expect(findNumbersV2([])).toStrictEqual([]);
//     });        
    
//     it('should return [] if after number < before number ', () => {
//         expect(findNumbersV2([5,2,1,-1])).toStrictEqual([]);
//     }); 
    
//     it('should return correct list if after number > before number ', () => {
//         expect(findNumbersV2([2, 5, 3, 7])).toStrictEqual([5, 7]);
//     }); 
// }); 