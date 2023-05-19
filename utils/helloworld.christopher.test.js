import hello from "utils/helloworld.christopher.js";
import assert from "assert"

it ("Should say hello", ()=>{
const hello = helloworld();

    assert.equal(hello, "hello");

})