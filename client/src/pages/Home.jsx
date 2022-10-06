import JouwAgendaLogo from '/src/assets/JouwAgendaLogo.png'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="vbar">
                { /* TODO: make logo change if company has uploaded own logo */ }
                {/* style={{ backgroundImage: `url(https://opleiding.com/wp-content/uploads/opleider/sint-lucas.png)` }} */}
                <div className="logo"></div>

                {/* TODO: make this in to reusable components */}
                <form>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input placeholder='Bijvoorbeeld: Info@JouwAgenda.nl' id='email'/>
                    </div>
                    <input type="submit" value={`Verstuur link`}/>
                </form>

                <div className='info'>
                        <h3>Geen Wachtwoord? Meer een TODO lijstje</h3>
                        <br />
                        <p>Deze text is lelijk en moet nog gefixed worden</p>
                        <p>En een uitleg waarom geen wachtwoord</p>
                        <p>En moet nog een mooie achtergrond maken voor als er geen custom achtergrond is gekozen door ...</p>
                        <br /><br />
                        <p>Bla bla bla</p>
                    </div>
            </div>
        </div>
    )
}

export default HomePage