const MeusDados2 = (props) => {

    const {nome, curso, univ} = props //let

    return (
        <div> 
            <h2>Nome: {nome}</h2> 
            <hr />
            <h2>Curso: {curso} </h2>
            <hr />
            <h2>Universidade: {univ} </h2>
            <hr />
        </div>
    )
}


export default MeusDados2;

/*
<div>
      <h1>Atividade 01</h1>
      <hr />
      <Md />
      <h1>Exemplo com duas funções</h1>
      <Md2 />
      <h1>Atividade 02</h1>
      <MeusDados2 nome= "Mariana Oliveira Felipe" curso= "Sistemas de Informação" univ= "UFC"/>
      <h1>Atividade 03</h1>
      <Temperatura temperatura={60} />
    </div>
*/