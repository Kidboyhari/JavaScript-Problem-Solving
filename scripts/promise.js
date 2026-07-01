isHalwaThere = false;
function waitInQueue() {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 KG Halwa');
            }else{
                reject('Halwa FInished');
            }
        });
    });
};
function BuyHalwa(){
    waitInQueue().then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() => {
        console.log('Go Home');
    })
};
BuyHalwa();