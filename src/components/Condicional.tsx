import {useState} from "react";

function Condicional() {

    const [email, setEmail] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>('')

    function enviarEmail(e: any) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail() {
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadatre o seu e-mail:</h2>]
            <form>
                <input type="email" placeholder="Digite seu e-mail"
                       onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )

}


export default Condicional;