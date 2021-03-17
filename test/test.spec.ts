import { expect } from 'chai';
import Case from '../src/transform'

describe("Case", () => {
    describe("upperCase", () => {
        const tests = [
            {text: "thiS iS a Simple teXt", expected: "THIS IS A SIMPLE TEXT"},
            {text: "this is!@#$%ˆ&*()", expected: "THIS IS!@#$%ˆ&*()"}
        ];
        
        tests.forEach(({text, expected}) => {
            it(`"${text}" should be converted to "${expected}"`, () => {
                const c = new Case();
                expect(c.upperCase(text)).to.equal(expected);
            });
        });
    })
});