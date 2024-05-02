function sum(a, b) {
    return a + b;
}


describe('Inicial Tests', () => {
    it("first unit test", () => {
        const firstArgument = 9;
        const secondArgument = 3;

        let result= sum(firstArgument,secondArgument);
        
        expect(result).toEqual(12);
    })

});



