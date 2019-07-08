let empty = {};
let isi = {
    name : "Bimbim",
    warna : "Abu",
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


function isEmpty(obj){
    let count = 0;
    for(let pro in obj){
        return false;
    }
    return true;
}

function sum(){
    if(isEmpty(salaries)){
        return 0;
    }
    let sumSalaries = 0;
    for(let prop in salaries){
        sumSalaries += salaries[prop];
    }

    return sumSalaries;
}

function test(obj){
    console.log(sum());
}

