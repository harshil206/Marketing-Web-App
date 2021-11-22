import jsonApi from "../../api";
import services from "../../services/Services";

export const postAction=()=>{
    return function(dispatch,getState){
        jsonApi.get('/posts')
        .then(response=>{
            dispatch({type:'Post',payload:response.data})
        })
    }
}

export const commentAction=(id)=>{
    return function(dispatch,getState){
        if(!getState().comments[id]){
            jsonApi.get('/posts/'+id+'/comments')
            .then(response=>{
                dispatch({type:'Comment',payload:response.data, id:id})
            })
        }
    }
}

export const textChange = (value, label) => {
    console.log(value)
    return ({
        type: "change_text",
        payload: value,
        label: label
    })
}

export const onFormSubmit = (client) => {
    console.log("client: ", client)
    services.createClient(client)
}
