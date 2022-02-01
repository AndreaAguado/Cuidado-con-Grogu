import Main from "./Main";

const Game = () => {
    return (
        <Main>
            <div>
                Juego
            </div>
            <section>
                <div>Grogu</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>[]</div>
                <div>
                    Armario
                    <div>Recipiente
                        Caja de galletas x 3
                        {/* <div>Caja de galletas</div>
                        <div>Caja de galletas</div>
                        <div>Caja de galletas</div> */}
                    </div>
                    <div>
                        Recipiente
                        Rana x 3
                        {/* <div>Rana</div>
                        <div>Rana</div>
                        <div>Rana</div> */}
                    </div>
                    <div>
                        Recipiente
                        Huevo de rana x 3
                        {/* <div>Huevo de rana</div>
                        <div>Huevo de rana</div>
                        <div>Huevo de rana</div> */}
                    </div>
                </div>
            </section>
            <section>
                <button>Dado</button>
            </section>
        </Main>

    )
}
export default Game;