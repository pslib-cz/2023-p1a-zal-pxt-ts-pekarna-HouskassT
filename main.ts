/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
type Odber = {
    cas: number, //čas je v sekundách
    prikon: number //spotřeba ve watech za hodinu
    prace: number
    cena: number
}

const cena_za_kwh: number = 6.70; // Kč za kWh

let data: Array<Odber> = [
    { cas: 600, prikon: 3500, prace: 0, cena: 0 },
    { cas: 120, prikon: 0, prace: 0, cena: 0 },
    { cas: 300, prikon: 1700, prace: 0, cena: 0 }, // data[2].cas
    { cas: 60, prikon: 0, prace: 0, cena: 0 },
    { cas: 800, prikon: 1500, prace: 0, cena: 0 },
]

for (const peceme of data){
    console.logValue("čas: ", peceme.cas);
    console.logValue("spotřeba: ", peceme.prikon);
    console.logValue("spotřebováno: ", peceme.prikon / 3600 * peceme.cas);
}

console.log("Spotřeba energie v jednotlivý časech:")
console.log("------------------------------------")
let energCelkem: number = 0
let cenaCelkem: number = 0
for (let i = 0; i <= 4; i++) {
    data[i].prace = data[i].cas * data[i].prikon / 3600000000
    data[i].cena = data[i].prace * cena_za_kwh
    console.log(data[i].cas + "[ms] " + data[i].prikon.toString() + "[W] " +
        (data[i].prace * 1000).toString() + "[Wh] " + data[i].cena.toString() + "[Kč]")
    energCelkem += data[i].prace * 1000
    cenaCelkem += data[i].cena
}
console.log("------------------------------------")
console.log("Práce celkem: " + energCelkem + "[Wh]")
console.log("Cena celkem:  " + cenaCelkem.toString() + "[Kč]")
console.log("------------------------------------")