import JouwAgendaLogo from '/src/assets/JouwAgendaLogo.png'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="vbar">
                <div className="logo" style={{ backgroundImage: `url(${JouwAgendaLogo})` }}></div>
            </div>
        </div>
    )
}

export default HomePage