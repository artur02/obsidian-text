import * as voca from 'voca';


export default class Case {
    constructor() {
        
    }

    /**
     * upperCase
     */
    public upperCase(text:string):string {
        return voca.upperCase(text)
    }

    /**
     * lowerCase
     */
    public lowerCase(text:string):string {
        return voca.lowerCase(text);
    }

    /**
     * titleCase
     */
    public titleCase(text:string):string {
        return voca.titleCase(text, ['-']);
    }

    /**
     * capitalize
     */
    public capitalize(text:string):string {
        return voca.capitalize(text, true);
    }
}