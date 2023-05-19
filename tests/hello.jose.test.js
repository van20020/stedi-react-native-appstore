import sayhello from '../utils/hello.jose.js';
import assert from 'assert';

it ("Should say hello", ()=>{
    const hello = sayhello();

    assert.equal(hello, "hello");
})
