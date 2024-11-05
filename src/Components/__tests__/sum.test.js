import { sum } from "../test functions/sum"

test('The sum of the following is ', () => { 
    const result = sum(1,2);

    //Assertion
    expect(result).toBe(3);
    
    //or 
    // expect(sum(1,2)).toBe(3);
 })