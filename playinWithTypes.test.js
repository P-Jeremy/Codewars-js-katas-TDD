const typing = require('./playingWithTypes')

describe("Playing with types", () => {
  it("typing() should return a string when given a parameter", () => {
    const result = typing(3)
    expect(typeof result).toBe('string');
  })

  it("typing() should return 'undefined' when parameter is undefined", () => {
    const result = typing()
    expect(result).toBe('undefined');
  });

  it("typing() result should contain 'number' when given 1 as parameter", () => {
    const result = typing(1)
    expect(result.includes('number')).toBe(true);
  });

  it("typing() result should contain 'string' when given 'foo' as parameter", () => {
    const result = typing('foo')
    expect(result.includes('string')).toBe(true);
  });

  it("typing() result should contain 'boolean' when given 'true' as parameter", () => {
    const result = typing(true)
    expect(result.includes('boolean')).toBe(true);    
  });

  it("typing() result should contain '=' when given a parameter", () => {
    const result = typing(9)
    expect(result.includes('=')).toBe(true);    
  });

  it("typing() result should contain 'object' when given '[1, 2, 3]' as parameter", () => {
    const result = typing([1, 2, 3])
    expect(result.includes('object')).toBe(true);    
  });

  it("typing() result should contain 'object' when given ' { 'hello' : 'world' } ' as parameter", () => {
    const result = typing( { "hello": "world" } )
    expect(result.includes('object')).toBe(true);    
  });

  it("typing() result should contain '1' when given 1 as parameter", () => {
    const result = typing(1)
    expect(result.includes('1')).toBe(true);
  });

  it("typing() result should contain 'foo' when given 'foo' as parameter", () => {
    const result = typing('foo')
    expect(result.includes('"foo"')).toBe(true);
  });

  it("typing() result should contain 'true' when given 'true' as parameter", () => {
    const result = typing(true)
    expect(result.includes('true')).toBe(true);    
  });

  it("typing() result should contain '[1, 2, 3]' when given '[1, 2, 3]' as parameter", () => {
    const result = typing([1, 2, 3])
    expect(result.includes(`${[1, 2, 3]}`)).toBe(true);    
  });
  
  it("typing() result should equal 'object={'hello' : 'world'}' when given ' { 'hello' : 'world' } ' as parameter", () => {
    const result = typing({'hello':'world'} )
    expect(result).toBe(`object={"hello":"world"}`);    
  });

  it("typing() result should equal 'string='hello'' when given 'hello' as parameter", () => {
    const result = typing('hello')
    expect(result).toBe('string="hello"');    
  });

  it("typing() result should equal 'number=1' when given 1 as parameter", () => {
    const result = typing(1)
    expect(result).toBe('number=1');    
  });

  it("typing() result should equal 'object=[1, 2, 3]' when given '[1, 2, 3]' as parameter", () => {
    const result = typing([1, 2, 3])
    expect(result).toBe(`object=${JSON.stringify([1, 2, 3])}`);    
  });

});
