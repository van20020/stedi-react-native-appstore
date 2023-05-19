import hello from '../utils/helloworld.js'
import assert from 'assert';

// hello("say hello", () => {})

it ("should say hello",()=>{

    const helloworld = hello();
    
    assert.equal(helloworld, "Hello")

})