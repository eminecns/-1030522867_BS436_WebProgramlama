import {showCard, setCards, shuffleArray} from "../src"

test("Not a valid ID", ()=>{
    expect(()=>showCard("")).toThrow()
    expect(()=>showCard("asd")).toThrow()
})

test("Impossible to break", ()=>{
    expect(()=>setCards()).not.toThrow()
})

test("Array works", ()=>{
    expect(()=>shuffleArray(["1","2"])).not.toThrow()
    expect(()=>shuffleArray(5)).toThrow()
})