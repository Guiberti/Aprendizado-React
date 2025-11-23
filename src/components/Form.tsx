import {useState} from "react";

function Form() {

    function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(`Usuário cadastrado: ${name} com senha: ${password}`);

    }

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;