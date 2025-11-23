function Form() {

    function cadastrarUsuario(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Cadastrado com sucesso!");
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;