import { CalculatorService } from "../../app/calculator/calculator.service";

describe('Calculator Service test suite',()=>{
    
    it ('should return a mult if arguments are numbers',()=>{
        
        //arrange})
        const a=5;
        const b=10;
        const calcuatorService = new CalculatorService();

        //act

        const act = calcuatorService.mult(a,b);
        
        //assert
        expect(act).toEqual(50);
    })

    it('should return a sum if arguments are numbers',()=>{
        
        //arrange

        const a=5;
        const b=10;
        const calcuatorService = new CalculatorService();
        
        //act

        const act = calcuatorService.sum(a,b)
        
        //assert

        expect(act).toEqual(16)
    })
})