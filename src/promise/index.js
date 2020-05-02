const somethingWhillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Heyy!');
        } else{
            reject('Whoops!');
        }
    });
};

somethingWhillHappen()
    .then(response => { console.log(response); })
    .catch(err => console.error(err));


const somethingWhillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else{
            // esta manera es mejor para manejar errores
            const error = new Error('Whoops!');
            reject(error);
        }
    });
};

somethingWhillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWhillHappen(), somethingWhillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })