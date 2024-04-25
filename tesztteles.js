import {masodfokuEgyenletMegoldasa} from "./main.js";

export function masodfokuEgyenletTeszt(){
    const masodFokLista=[
        {
            a:232,
            b:120,
            c:12,
            x1vart:-0.13549261330098533,
            x2vart:-0.38174876600935953
        },
        {
            a:500,
            b:250,
            c:10,
            x1vart:-0.04384471871911697,
            x2vart:-0.45615528128088306
        },
        {
            a:0,
            b:130,
            c:12,
            x1vart:"a nem lehet null",
            x2vart:"a nem lehet null"
        },
        {
            a:-45,
            b:-4,
            c:-65,
            x1vart:"Nem lehet negativ",
            x2vart:"Nem lehet negativ"
        }
    ];

    masodFokLista.forEach(function(teszt){
        console.log(`a: ${teszt.a} b: ${teszt.b} c: ${teszt.c}  vart X1: ${teszt.x1vart} vart X2: ${teszt.x2vart}`)
        let eredmeny=masodfokuEgyenletMegoldasa(teszt.a, teszt.b, teszt.c)
        console.assert(teszt.x1vart === eredmeny.X1,`a: ${teszt.a} b: ${teszt.b} c: ${teszt.c}  vart X1: ${teszt.x1vart}  kapott: ${eredmeny.X1}, HIBA!`
        );
        console.assert(teszt.x2vart=== eredmeny.X2 ,`a: ${teszt.a} b: ${teszt.b} c: ${teszt.c}  vart X2: ${teszt.x2vart}  kapott: ${eredmeny.X2}, HIBA!`
        )
    });

}
