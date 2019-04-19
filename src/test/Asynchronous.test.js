// test('test asynchronous code:callback',done=>{
//     function callback(data){
//         expect(data).toBe('hello')
//         done()
//     }
//     setTimeout(function(){
//         callback('hello')
//     },1000)
// })


function fetchData(){
    return new Promise(function(resolve, reject){
        // resolve('promise')
        reject('error')
    })
}
// test('test asynchronous code:promise', () => {
//     return fetchData().then(data => {
//         expect(data).toBe('promise1')
//     })
// })

// test('the fetch fails with an error', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'))
// })

// test('using resolve or reject in expect statement', () => {
//     // return expect(fetchData()).resolves.toBe('promise')
//     return expect(fetchData()).rejects.toMatch('error')
// })


// test('using async and await in the test without error', async () => {
//     expect.assertions(1)
//     const data = await fetchData();
//     expect(data).toBe('promise')
// })


test('using async and await in the test with an erro', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch(e) {
        expect(e).toMatch('error')
    }
})





