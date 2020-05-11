const encryptThis = require('./encryptThis')

describe("Encrypt this", function() {

  it('Should return the ascii code of a string that length equal to 1', () => {
    expect(encryptThis('o')).toBe('111')
    expect(encryptThis('A')).toBe('65')
    expect(encryptThis('K')).toBe('75')
  })

  it('Should return the string with first letter replaced by its ascii code', () => {
    const result = encryptThis('Avion')
    expect(result.length).toBeGreaterThan(1)
    expect(result[0]).toBe('6')
    expect(result[1]).toBe('5')
  })

  it('Should revert the second and last letter of a word', () => {
    expect(encryptThis('othello')).toBe('111ohellt')
    expect(encryptThis('Avion')).toBe('65niov')
    expect(encryptThis('Koala')).toBe('75aalo')
  })

  // it("should work with fixed tests", function() {
  //   expect(encryptThis("A")).toBe("65");
  //   expect(encryptThis("A wise old owl lived in an oak")).toBe("65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
  //   expect(encryptThis("The more he saw the less he spoke")).toBe("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
  //   expect(encryptThis("The less he spoke the more he heard")).toBe("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
  //   expect(encryptThis("Why can we not all be like that wise old bird")).toBe("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
  //   expect(encryptThis("Thank you Piotr for all your help")).toBe("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    
  // });
});