const tnpPrototype = document.getElementById("crt");
const dgnPrototype = document.getElementById("crt2");
let arry_tnpProtype = [];

tnpPrototype.addEventListener("click", () =>{
    arry_tnpProtype.push(new TnpProto("Kontol"));
    console.log(arry_tnpProtype);
});

dgnPrototype.addEventListener("click", () =>{
    arry_tnpProtype.push(new DgnProto("Kontol kuda"));
    console.log(arry_tnpProtype);
});

function TnpProto (text){
    this.text = text;
    this.getText = () => {
        return "Ini adalah text " + this.text; 
    };
}

function DgnProto (text){
    this.text = text;    
}

DgnProto.prototype.getText = () => {
    return "Ini adalah text " + this.text;
};

// function Buku (judul, pengarang, halaman, baca){
//     this.judul = judul;
//     this.pengarang = pengarang;
//     this.halaman = halaman;
//     this.baca = baca;
//     this.getInfo = () => {
//         return this.judul + ", " + this.pengarang + ", " + this.halaman + ", " + this.baca;
//     };
// }




