const startDate = new Date("2021-06-05T14:30:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const seconds = Math.floor(diff/1000)%60;

const minutes = Math.floor(diff/1000/60)%60;

const hours = Math.floor(diff/1000/60/60)%24;

const days = Math.floor(diff/1000/60/60/24)%365;

const years = Math.floor(diff/1000/60/60/24/365);


const totalSegundos = Math.floor(diff/1000);

const segundosAmor = document.getElementById("segundosAmor");

if(segundosAmor){
    segundosAmor.innerText =
    `Já vivemos ${totalSegundos.toLocaleString('pt-BR')} segundos escrevendo a nossa história`;
}

document.getElementById("years").innerText = years;
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCounter,1000);

updateCounter();
function abrirCarta(tipo){

const popup = document.getElementById("popup");
const titulo = document.getElementById("tituloCarta");
const texto = document.getElementById("textoCarta");

popup.style.display = "flex";

if(tipo === "feliz"){

titulo.innerHTML = " Quando estiver feliz";

texto.innerHTML = `
Meu nenenzin,

Se você está lendo isso, então provavelmente está vivendo um daqueles momentos em que tudo parece dar certo. E eu espero, de coração, que a vida te proporcione muitos dias assim.
Mas sabe o que me deixa ainda mais feliz?
Saber que posso fazer parte da sua felicidade.
Ver seu sorriso, ouvir sua risada e acompanhar suas conquistas é uma das minhas coisas favoritas no mundo.
Eu nunca duvidei do quanto você é capaz.
Aproveite esse momento, porque você merece muiiiiitooooo.


Eu teamo. 💙

<br><br>
Com todo o meu amor,
<br>
Bligadeilinha 💙

`;

}

if(tipo === "triste"){

titulo.innerHTML = " Quando estiver triste";

texto.innerHTML = `
Meu nenenzin,

Antes de qualquer coisa, eu queria te dar um abraço bem apertado.
Eu sei que existem dias difíceis, dias em que o coração pesa e parece que nada está saindo como planejado.
Mas quero que você lembre de uma coisa:
Você não precisa carregar tudo sozinho. Eu estou aqui.
Para te ouvir, para te apoiar, para segurar sua mão e atravessar qualquer tempestade ao seu lado.
Os dias ruins passam. Eles sempre passam.
E quando isso acontecer, eu ainda estarei aqui, te amando exatamente do mesmo jeito.
Você é muito mais forte do que imagina.

<br><br>
Com todo o meu amor,
<br>
Bligadeilinha 💙
`;

}

if(tipo === "desanimado"){

titulo.innerHTML = " Quando estiver desanimado";

texto.innerHTML = `
Meu mozinho,

Às vezes a vida cansa. E eu sei bem como as vezes é desafiador continuar...
Às vezes a gente dá o nosso melhor e mesmo assim as coisas não acontecem como gostaríamos.
Mas eu queria que você se visse com os olhos que eu te vejo.
Uma homem incrível, esforçado, inteligente, dedicado e cheio de muitas outras qualidades, tipo ser um tremendo GOSTOSO.
Talvez você não perceba todos os dias, mas eu percebo.
Tenho muito orgulho de você.
Orgulho da sua força, da sua determinação e da forma como você continua seguindo em frente mesmo quando as coisas ficam difíceis.
Continue e lembre sempre de um dos nossos propósitos, nossa família.
E eu estarei com você e torcendo por você pra sempre.

<br><br>
Com todo o meu amor,
<br>
Bligadeilinha 💙

`;

}

if(tipo === "saudade"){

titulo.innerHTML = " Quando estiver com saudade";

texto.innerHTML = `
Meu bbzinho nindo,
ps.: para de balançar a cabeça dizendo que não, é nindo shim e plonto. RUM.

É tão dificil ficarmos longe um do outro depois de tato tempo estando juntos né...
Então se você está sentindo saudade, então saiba que eu também estou.
Porque na verdade é que os meus dias são infinitamente melhores quando você está juntin de mim.
Eu sinto saudade das nossas conversas, das nossas risadas, dos nossos abraços, dos seus beijinhos totosos e até das suas bobagens.
Mas a saudade também me lembra de algo muito bom:
O quanto você é extremamente importante para mim.
Então respira fundo que Logo estaremos juntos de novo.
E quando isso acontecer, eu vou te abraçar como se estivesse compensando todo o tempo que passamos longe.

<br><br>
Com todo o meu amor,
<br>
Bligadeilinha 💙
`;

}

if(tipo === "amor"){

titulo.innerHTML = "O quanto eu te amo";

texto.innerHTML = `
Se você abriu esta carta, então eu quero que você pare por alguns segundos e leia cada palavra com calma.

Eu te amo.

Eu te amo nos dias fáceis.
E te amo nos dias difíceis.
Eu te amo quando estamos juntos e quando estamos longe.
Eu te amo pelas suas qualidades e até pelas suas manias.
E te amo também só pelo fato de me amar, me cuidar, me desejar e me fazer completamente feliz.
Eu amo a vida que estamos construindo, as memórias que estamos criando e todos os sonhos que ainda vamos realizar.
E se existe uma certeza que eu tenho, é que escolher amar você foi uma das melhores decisões da minha vida.
Obrigada por todos os momentos, por todo carinho e por todo amor.
Porque, no final de tudo...

Você é o meu destino mais bonito. 💙

<br><br>
Com todo o meu amor,
<br>
Bligadeilinha 💙

`;

}

}

function fecharCarta(){

document.getElementById("popup").style.display = "none";

}

const musicas = [
{
titulo: "Velha Infância",
artista: "Tribalistas",
arquivo: "musica1.mp3",
capa: "/musica1.jpeg"
},
{
titulo: "Thinking out Lound",
artista: "Ed Sheeran",
arquivo: "musica2.mp3",
capa: "/musica2.jpeg"
}
];

let musicaAtual = 0;
let tocando = false;

function abrirPlayer(){
document.getElementById("playerPopup").style.display = "flex";
atualizarPlayer();
}

function atualizarPlayer(){
const audio = document.getElementById("audioPlayer");
const source = document.getElementById("audioSource");

document.getElementById("playerTitulo").innerText = musicas[musicaAtual].titulo;
document.getElementById("playerArtista").innerText = musicas[musicaAtual].artista;
document.getElementById("playerCapa").src = musicas[musicaAtual].capa;

source.src = musicas[musicaAtual].arquivo;
audio.load();

if(tocando){
audio.play();
}
}

function tocarOuPausar(){
const audio = document.getElementById("audioPlayer");
const btn = document.getElementById("playPauseBtn");

if(audio.paused){
audio.play();
btn.innerText = "⏸";
tocando = true;
}else{
audio.pause();
btn.innerText = "▶";
tocando = false;
}
}

function proximaMusica(){
musicaAtual++;

if(musicaAtual >= musicas.length){
musicaAtual = 0;
}

atualizarPlayer();

if(tocando){
document.getElementById("audioPlayer").play();
}
}

function musicaAnterior(){
musicaAtual--;

if(musicaAtual < 0){
musicaAtual = musicas.length - 1;
}

atualizarPlayer();

if(tocando){
document.getElementById("audioPlayer").play();
}
}

function continuarHistoria(){
document.getElementById("playerPopup").style.display = "none";

document.getElementById("contador").scrollIntoView({
behavior:"smooth"
});
}

const audioBarra = document.getElementById("audioPlayer");
const progressBarra = document.getElementById("musicProgress");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

function formatarTempo(segundos){
    if(isNaN(segundos)){
        return "0:00";
    }

    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60).toString().padStart(2, "0");

    return `${min}:${seg}`;
}

if(audioBarra && progressBarra){

    audioBarra.addEventListener("loadedmetadata", () => {
        tempoTotal.innerText = formatarTempo(audioBarra.duration);
    });

    audioBarra.addEventListener("timeupdate", () => {
        if(audioBarra.duration){
            progressBarra.value = (audioBarra.currentTime / audioBarra.duration) * 100;
            tempoAtual.innerText = formatarTempo(audioBarra.currentTime);
            tempoTotal.innerText = formatarTempo(audioBarra.duration);
        }
    });

    function mudarTempoMusica(){
        if(audioBarra.duration){
            audioBarra.currentTime = (progressBarra.value / 100) * audioBarra.duration;
            tempoAtual.innerText = formatarTempo(audioBarra.currentTime);
        }
    }

    progressBarra.addEventListener("input", mudarTempoMusica);
    progressBarra.addEventListener("change", mudarTempoMusica);
}

const vales = [
    "Vale um jantar especial preparado com amor",
    "Vale uma massagem relaxante",
    "Vale escolher nosso próximo filme",
    "Vale um passeio surpresa",
    "Vale um dia inteiro juntinhos",
    "Vale uma sobremesa feita por mim",
    "Vale muitos beijinhos sem reclamar",
    "Vale escolher nosso próximo rolê",
    "Vale uma noite de carinho e preguiça",
    "Vale um café da manhã especial",
    "Vale dia de JUJU"
];

function sortearVale(){
    const resultado = document.getElementById("valeResultado");
    const numero = Math.floor(Math.random() * vales.length);

    resultado.innerText = vales[numero];
}