isHalwaThere = true;
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
}
async function buyHalwa(){
    try{
   let result = await waitInQueue();
   console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
buyHalwa();