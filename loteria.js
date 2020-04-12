const /*h1 = document.getElementById('carta'),
    btn = document.getElementById('flag'),*/
    img = document.getElementById('img');
const cartas = [
    ['El Gallo','imagenes/gallo.jpeg'],
    ['El Diablo','imagenes/diablito.jpeg'],
    ['La Dama','imagenes/dama.jpeg'],
    ['El Catrín','imagenes/catrin.jpeg'],
    ['El Paraguas','imagenes/paraguas.jpeg'],
    ['La Sirena','imagenes/sirena.jpeg'],
    ['La Escalera','imagenes/escalera.jpeg'],
    ['La Botella','imagenes/botella.jpeg'],
    ['El Barril','imagenes/barril.jpeg'],
    ['El Árbol','imagenes/arbol.jpeg'],
    ['El Melón','imagenes/melon.jpeg'],
    ['El Valiente','imagenes/valiente.jpeg'],
    ['El Gorrito','imagenes/gorrito.jpeg'],
    ['La Muerte','imagenes/muerte.jpeg'],
    ['La Pera','imagenes/pera.jpeg'],
    ['La Bandera','imagenes/bandera.jpeg'],
    ['El Bandolón','imagenes/bandolon.jpeg'],
    ['El Violoncello','imagenes/violoncello.jpeg'],
    ['La Garza','imagenes/garza.jpeg'],
    ['El Pájaro','imagenes/pajaro.jpeg'],
    ['La Mano','imagenes/mano.jpeg'],
    ['La Bota','imagenes/bota.jpeg'],
    ['La Luna','imagenes/luna.jpeg'],
    ['El Cotorro','imagenes/cotorro.jpeg'],
    ['El Borracho','imagenes/borracho.jpeg'],
    ['El Negrito','imagenes/negrito.jpeg'],
    ['El Corazón','imagenes/corazon.jpeg'],
    ['La Sandía','imagenes/sandia.jpeg'],
    ['El Tambor','imagenes/tambor.jpeg'],
    ['El Camarón','imagenes/camaron.jpeg'],
    ['Las Jaras','imagenes/jaras.jpeg'],
    ['El Músico','imagenes/musico.jpeg'],
    ['La Araña','imagenes/araña.jpeg'],
    ['El Soldado','imagenes/soldado.jpeg'],
    ['La Estrella','imagenes/estrella.jpeg'],
    ['El Cazo','imagenes/cazo.jpeg'],
    ['El Mundo','imagenes/mundo.jpeg'],
    ['El Apache','imagenes/apache.jpeg'],
    ['El Nopal','imagenes/nopal.jpeg'],
    ['El Alacrán','imagenes/alacran.jpeg'],
    ['La Rosa','imagenes/rosa.jpeg'],
    ['La Calavera','imagenes/calavera.jpeg'],
    ['La Campana','imagenes/campana.jpeg'],
    ['El Cantarito','imagenes/cantarito.jpeg'],
    ['El Venado','imagenes/venado.jpeg'],
    ['El Sol','imagenes/sol.jpeg'],
    ['La Corona','imagenes/corona.jpeg'],
    ['La Chalupa','imagenes/chalupa.jpeg'],
    ['El Pino','imagenes/pino.jpeg'],
    ['El Pescado','imagenes/pescado.jpeg'],
    ['La Palma','imagenes/palma.jpeg'],
    ['La Maceta','imagenes/maceta.jpeg'],
    ['El Arpa','imagenes/arpa.jpeg'],
    ['La Rana','imagenes/rana.jpeg']
]

let i = 54;
const synth = new SpeechSynthesisUtterance();
synth.lang = 'es-MX';
console.log(synth);


function loteria(flag){
        setTimeout(() => {
                const cartaActual = Math.floor(Math.random() * cartas.length);
                // console.log(`Actual: ${cartas[cartaActual]}`, cartas.length); 
                // h1.innerHTML = cartas[cartaActual][0];
                img.src = cartas[cartaActual][1];       
                img.alt = cartas[cartaActual][0];  
                synth.text = cartas[cartaActual][0]; 
                synth.rate = '.8';
                synth.pitch = '1.6';
                speechSynthesis.speak(synth);
                console.log(synth.text);
                  
                cartas.splice(cartaActual,1);
                i--;
                if (i>0){
                    loteria();
                } 
        }, 3000);   
}

loteria();
