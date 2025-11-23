function Evento({numero}: { numero: number}) {


    function meuEvento() {
        console.log(`Evento disparado! ${numero}`);
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;