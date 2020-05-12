const findNumber = require ('./numberZooPatrol')


describe('findeNumber()', () => {
  it('Should return a number', ()=> {
    expect(typeof findNumber()).toBe('number')
  })

  it('Should return 0 if parameter is undefined', ()=> {
    expect(findNumber()).toBe(0)
  })

  it('Should return 1 if it is not included in the array parameter', ()=> {
    const param = [2, 3, 4]
    const result = findNumber(param)
    expect(result).toEqual(1);
  })

  it('Should return a number that is not included in the array parameter', () => {
    const param = [2, 3, 4]
    const result = findNumber(param)
    expect(param).toEqual(
      expect.not.arrayContaining([result])
    );
  })

  it('Should return the logical missing number of array parameter', ()=> {
    const param = [1, 2, 4]
    const result = findNumber(param)
    expect(result).toEqual(3);
  })

  it('Should return the next logical number if no number is missing in the array parameter', ()=> {
    const param = [1, 2, 3]
    expect(findNumber(param)).toBe(4)
  })

  describe("Fixed tests", () => {
    it("Tests", () => {
      expect((findNumber([1,3,4,5,6,7,8]))).toBe(2);
      expect((findNumber([7,8,1,2,4,5,6]))).toBe(3);
      expect((findNumber([1,2,3,5]))).toBe(4);
      expect((findNumber([1,3]))).toBe(2);
      expect((findNumber([2,3,4]))).toBe(1);
      expect((findNumber([13,11,10,3,2,1,4,5,6,9,7,8]))).toBe(12);
      expect((findNumber([1,2,3]))).toBe(4);
    });
  });
})