import sayhello from '../utils/hello.car.js';
import assert from 'assert';

it ("Should say hello", ()=>{
    const hello = sayhello();

    assert.equal(hello, "hello");
})
