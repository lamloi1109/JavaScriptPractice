function filter(array, callBackFn){
    if(!Array.isArray(array) || typeof callBackFn !== "function") return undefined;
    
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(callBackFn(element, index, array)) newArray.push(element);
    }

    return newArray;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(filter(words, word => word.length > 6));