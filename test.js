const { create } = require('ipfs-http-client');
const ipfs = create('http://127.0.0.1:5002/')
const ipnsKey = 'ipns-for-mcd'
const cid = 'QmWLv1nysaBF6ZBMZnXy2qVXwif9TZMECGJffhKkEHTSzH'
async function main(){
    const keys = await ipfs.key.list()
    console.info('keys:',keys)
    if(!keys.find(item => item.name === ipnsKey)){
        const k = await ipfs.key.gen(ipnsKey)
        console.info('k:',k)
    }
    const res = await ipfs.name.publish(`/ipfs/${cid}`, {
        key: ipnsKey
    })
}
main().catch(console.error)

