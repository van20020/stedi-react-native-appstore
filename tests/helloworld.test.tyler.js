import helloworld from "../utils/helloworld.tyler.js";
import assert from "assert"

it ("Should say hello", ()=>{
const hello = helloworld();

    assert.equal(hello, "hello");

})