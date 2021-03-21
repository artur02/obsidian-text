require('typescript-require');

let Case = require('../src/transform.ts').default;
let expect = require('chai').expect;

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
    });

    describe("lowerCase", () => {
        const tests = [
            {text: "thiS iS a Simple teXt", expected: "this is a simple text"},
            {text: "tHis Is!@#$%ˆ&*()", expected: "this is!@#$%ˆ&*()"}
        ];
        
        tests.forEach(({text, expected}) => {
            it(`"${text}" should be converted to "${expected}"`, () => {
                const c = new Case();
                expect(c.lowerCase(text)).to.equal(expected);
            });
        });
    });

    describe("titleCase", () => {
        const tests = [
            {text: "this is, a    siMple text", expected: "This Is, A    SiMple Text"},
            {text: "this is word-producing text -idea", expected: "This Is Word-producing Text -idea"}
        ];
        
        tests.forEach(({text, expected}) => {
            it(`"${text}" should be converted to "${expected}"`, () => {
                const c = new Case();
                expect(c.titleCase(text)).to.equal(expected);
            });
        });
    });

    describe("capitalize", () => {
        const tests = [
            {text: "thiS iS, a Simple teXt", expected: "This is, a simple text"},
            {text: "this is word-producing text -idea", expected: "This is word-producing text -idea"}
        ];
        
        tests.forEach(({text, expected}) => {
            it(`"${text}" should be converted to "${expected}"`, () => {
                const c = new Case();
                expect(c.capitalize(text)).to.equal(expected);
            });
        });
    });
});