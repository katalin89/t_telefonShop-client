function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/telefon/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },

   
    };

    if(body!==null){
        options.body=JSON.stringify(body);

    }

    return fetch(url,options);
}

async function getAllPhones(){


    let data = await api("all",'GET');


    data= await data.json();


    return data;
}

async function addPhone(phone){
    let data=await api("add",'POST',phone);

    return data;
}

async function  getAllMarci(){
    let data=await api("phones/marci",'GET');

    data=await data.json();

    return data;
}

// async function getAllPhonesByMarca(marca){

//     let data=await api(`phones/${marca}`,'GET');

//     data=await data.json();

//     return data;
// }


async function deletePhone(telefonModel){
    let data=await api(`deleteByModel/${telefonModel}`,'DELETE');
}

async function updatePhone(phone){

    let data=await api(`update`,'PUT',phone);

    return data;
}

async function sortByPrice(){

    let data=await api(`sortByPrice`,'GET');

    data=await data.json();

    return data;
}

async function sortByMarca(){

    let data=await api(`sortByMarca`,'GET');

    data=await data.json();

    return data;
}


async function sortByModel(){

    let data=await api(`sortByModel`,'GET');

    data =await data.json();
    
    return data;

}