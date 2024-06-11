export default async function timer(testFunction, testParams) {
    let start = performance.now()
    //test 100 times
    for (let i = 0; i < 10; i++) {
        await testFunction(testParams)
    }

    let end = performance.now()
    console.log((end - start).toFixed(4) + "ms")
    return end - start

}