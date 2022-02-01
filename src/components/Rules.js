import Main from "./Main";

const Rules = () => {
    return (
        <Main>
            <div>
                Reglas del juego
                El juego es muy sencillo. Dispondremos de 6 casillas que representan un camino en la
                zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura
                la mercancía. De este modo tendremos 7 casillas, 6 del camino y una que representa al
                armario:
                🔲🔲🔲🔲🔲🔲❎
                Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario.
                Para ello deberás descargar la mercancía poco a poco. Este es el momento más
                delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si eso ocurre se
                comerá lo que encuentre y Mando perderá la oportunidad de saber dónde esta Ahsoka.
                Ergo, te has quedado sin recompensa.
                Además de esas 7 piezas tendrás tres recipientes donde se guarda cada tipo de
                mercancía. De esta manera quedaría:
                ¡Cuidado con Grogu! 2
                Recipiente de las galletas: Tendrá 3 cajas de galletas azules dentro
                Recipiente de los huevos de rana: Tendrá dentro 3 huevos de rana (sin fertilizar)
                Recipiente de las ranas: Tendrá dentro 3 ranas
                Además de estas piezas tendremos un dado de 4 caras donde cada cara
                representa una de las siguientes acciones:
                Descargas una caja de galletas azules 🍪
                Descargas un huevo de rana (con mucho cuidado) 🥚
                Descargas una rana 🐸
                Grogu se mueve una casilla 👣
                Además habrá una ficha que represente dónde está Grogu.
                Ganarás el juego si consigues descargar toda la mercancía. Perderás si Grogu llega a
                la última casilla (el armario).
            </div>
        </Main>

    )
}
export default Rules;