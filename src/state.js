const entry = async (event, context) => {
    console.log(JSON.stringify(event))
    return { Payload: { from: 'entry function' } }
}

const second = async (event) => {
    console.log(JSON.stringify(event))
    return { Payload: { finished: true }}
}

module.exports.entry = entry;
module.exports.second = second;