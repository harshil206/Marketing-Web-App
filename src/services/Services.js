class Services {
    createClient(client) {
        console.log(client)
        fetch("http://localhost:8080/client/create", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(client)
        }).then(response => {
            if (!response.ok)
                throw response;
            console.log("ok", response);
        })
        
    }
}

export default new Services();