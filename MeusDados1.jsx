function MeusDados1(){
    return (
        <div>
            <h2> Nome: Mariana Oliveira Felipe</h2>
            <hr />
            <h2>Curso: Sistemas de Informação</h2>
            <hr />
            <h2>Universidade: UFC</h2>
            <hr />
        </div>
    )
}

/*
const MeusDados1 = () => {
    return(
       <div>
            <h1> Mariana Oliveira Felipe</h1>
            <hr />
            <h1>Sistemas de Informação</h1>
            <hr />
            <h1>Universidade Federal do Ceará</h1>
            <hr />
        </div>
    )
}
*/

/*
const MeusDados1 = () => {
    return <div>
           <h1> Mariana Oliveira Felipe</h1>
            <hr />
            <h1>Sistemas de Informação</h1>
            <hr />
            <h1>Universidade Federal do Ceará</h1>
            <hr />
       </div>

}
*/


const MeusDados2 = () => 
       <div>
           <h2> Mariana Oliveira Felipe</h2>
            <hr />
            <h2>Sistemas de Informação</h2>
            <hr />
            <h2>UFC</h2>
            <hr />
       </div>


export {MeusDados1, MeusDados2}; //exportar mais de uma função, tira o default e abri {MeusDados, MeusDados2}, e muda no cabeçalho de App.js o import {MeusDados as Md, MeusDados2 as Md2}