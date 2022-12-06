import tweetData from "./../tweetData.json"

const calcRange = () => {
    const num = Math.ceil(tweetData.length/10)
    const range = []
    
    for(let i=0;i<num;i++){
        range.push(i+1)
    }

    return range
}

export default calcRange