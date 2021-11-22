const initialState= () => {
    return {
        client:{}
    }
};   

export const  abcd = (state = initialState(), action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case "change_text":
            newState.client[action.label] = action.payload;
            return newState;
        
        case "Done":
            console.log(action.payload)
            alert("all is ok!!")
            newState.response = "hello";

            return newState;
        
        default:
            return newState;
    }
}