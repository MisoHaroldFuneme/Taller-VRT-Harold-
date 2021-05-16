// Colores complementarios que se quieren generar
const coloresComplementarios = 5;

function randomPalette(){
    const diferenciaTono = 360/coloresComplementarios;
    // valores constantes para la estrategia
    const saturation = 1, brightness = 1;
    //Get the first color's hue value
    let valorRandomColor = Math.ceil(Math.random()*359);
    let coloresGenerados = []
    while(coloresGenerados.length<coloresComplementarios){
        coloresGenerados.push([valorRandomColor, saturation, brightness]);
        valorRandomColor = (valorRandomColor + diferenciaTono) % 360
    }
    return coloresGenerados;
}

function generateRules(){
    let i = 1;
    let colors = randomPalette();
    let rgbStrings = [];
    // insertar colores segun estrategia
    while(i<=coloresComplementarios){
        let currentHSV = colors[i-1]
        let rgb = hsvToRgb(currentHSV[0]/360,currentHSV[1],currentHSV[2])
        let rgbString = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        console.log(rgbString);
        rgbStrings.push(rgbString)
        document.getElementById(`color${i}`).style.backgroundColor = rgbString;
        i++;
    }
    document.getElementById('css-rules').innerHTML=`
.website-background{ color: ${rgbStrings[0]};}
.element-text{ color: ${rgbStrings[1]};}
.element-border{ border-color: ${rgbStrings[2]};}
.element-background{ background-color: ${rgbStrings[3]};}
.header{ color: ${rgbStrings[4]};}
        `
}

function clean(){
    let i = 1;
    // borrar colores de buttons
    while(i<=coloresComplementarios){
        document.getElementById(`color${i}`).style.backgroundColor = '#FFFFFF'
        i++;
    }
    document.getElementById('css-rules').innerHTML=`
.website-background{ color: #FFFFFF;}
.element-text{ color: #FFFFFF;}
.element-border{ border-color: #FFFFFF;}
.element-background{ background-color: #FFFFFF;}
.header{ color: #FFFFFF;}
        `
}