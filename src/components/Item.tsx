
function Item({marca, ano_lancamento} : {marca: string, ano_lancamento: number}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item;