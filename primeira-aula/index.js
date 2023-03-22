let container = document.getElementById('root');

function Participante(props){
    const [votos, setVotos] = React.useState(0);
    function votar(){
        setVotos(votos+1);
    }
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{votos}</h2>
            <button onClick={votar}>Votar</button>
        </>
    )
}
function CampanhaVotos(){
    return (
        <>
            <Votacao name='Méqui'/>
            <Votacao name='Beca' />
            <Votacao name='Papais'/>
        </>
    )
}

ReactDOM.createRoot(container).render(<CampanhaVotos />)

