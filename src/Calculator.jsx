import { useState } from "react";
import CalcButton from "./CalcButton";
import Display from "./Display";

export default function Calculator () {
    const [calc, setCalc] = useState({
        current: 0,
        total: 0,
        isInitial: true,
        preOp: ""
    });

    function handleNumber(value){
        let newValue = value;

        if(!calc.isInitial){
            newValue = calc.current + value;
        }

        setCalc({current: newValue, total:calc.total, isInitial: false, preOp:calc.preOp});
    }

    function handleOperator(value){
        const total = doCalculation();

        setCalc({current: total.toString(), total: total.toString(), isInitial: true, preOp: value});
    }

    function doCalculation() {

        let total = parseInt(calc.total);

        switch(calc.preOp){
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);
                break;
            case "*":
                total *= parseInt(calc.current);
                break;
            case "/":
                total /= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
        }
        return total;
    }

    function handleClear(){
        setCalc({
        current: 0,
        total: 0,
        isInitial: true,
        preOp: ""});
    }

    function renderDisplay(){
        return calc.current;
    }

    return(
        <div className="calculator">
        <Display display={renderDisplay()}/>

        <CalcButton value="7" onClick={handleNumber}/>
        <CalcButton value="8" onClick={handleNumber}/>
        <CalcButton value="9" onClick={handleNumber}/>
        <CalcButton value="/" className="operator" onClick={handleOperator}/>

        <CalcButton value="4" onClick={handleNumber}/>
        <CalcButton value="5" onClick={handleNumber}/>
        <CalcButton value="6" onClick={handleNumber}/>
        <CalcButton value="*" className="operator" onClick={handleOperator}/>

        <CalcButton value="1" onClick={handleNumber}/>
        <CalcButton value="2" onClick={handleNumber}/>
        <CalcButton value="3" onClick={handleNumber}/>
        <CalcButton value="-" className="operator" onClick={handleOperator}/>

        <CalcButton value="C" onClick={handleClear}/>
        <CalcButton value="0" onClick={handleNumber}/>
        <CalcButton value="=" onClick={handleOperator}/>
        <CalcButton value="+" className="operator" onClick={handleOperator}/>

        </div>
    );
} 