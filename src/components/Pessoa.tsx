function Pessoa({nome, idade, profissao, foto}: { nome: string, idade: number, profissao: string, foto: string }) {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa;