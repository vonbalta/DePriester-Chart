// --- CONFIGURACIÓN Y DATOS ---
const IMAGE_FILE = "VBj5xtJ - Imgur.png";
const X_PRESSURE_AXIS = 119;
const X_TEMP_AXIS = 1224;
const HANDLE_RADIUS = 5; // Aumentado para mejor uso táctil

const pressureData = [
    { value: 101.3, y: 29 }, { value: 110, y: 57 }, { value: 150, y: 159 }, { value: 200, y: 256 }, { value: 250, y: 327 }, { value: 300, y: 338 },
    { value: 400, y: 473 }, { value: 500, y: 544 }, { value: 600, y: 599 }, { value: 700, y: 645 }, { value: 800, y: 686 }, { value: 900, y: 724 },
    { value: 1000, y: 754 }, { value: 1500, y: 872 }, { value: 2000, y: 955 }, { value: 2500, y: 1014 }, { value: 3000, y: 1066 }, { value: 3500, y: 1109 },
    { value: 4000, y: 1151 }, { value: 5000, y: 1222 }
];
const temperatureData = [
    { value: 200, y: 127 }, { value: 170, y: 206 }, { value: 160, y: 243 }, { value: 150, y: 277 }, { value: 140, y: 321 }, { value: 130, y: 365 },
    { value: 120, y: 412 }, { value: 110, y: 462 }, { value: 100, y: 514 }, { value: 90, y: 573 }, { value: 80, y: 633 }, { value: 70, y: 695 },
    { value: 60, y: 776 }, { value: 50, y: 840 }, { value: 40, y: 929 }, { value: 30, y: 1018 }, { value: 20, y: 1123 }, { value: 10, y: 1231 },
    { value: 0, y: 1343 }, { value: -5, y: 1407 }
];
const compoundsData = {
    Metano: [{k:250,x:202,y:36},{k:200,x:248,y:111},{k:150,x:278,y:188},{k:100,x:308,y:305},{k:90,x:314,y:337},{k:80,x:319,y:375},{k:70,x:323,y:412},{k:60,x:326,y:452},{k:50,x:327,y:496},{k:40,x:324,y:561},{k:30,x:320,y:638},{k:20,x:311,y:760},{k:15,x:304,y:836},{k:10,x:300,y:942},{k:9,x:300,y:967},{k:8,x:300,y:996},{k:7,x:301,y:1028},{k:6,x:303,y:1064},{k:5,x:304,y:1111},{k:4,x:307,y:1164},{k:3,x:312,y:1251}],
    Etileno: [{k:150,x:273,y:21},{k:100,x:335,y:97},{k:90,x:350,y:120},{k:80,x:365,y:146},{k:70,x:383,y:181},{k:60,x:401,y:222},{k:50,x:420,y:270},{k:40,x:444,y:341},{k:30,x:463,y:423},{k:20,x:472,y:526},{k:15,x:474,y:597},{k:10,x:474,y:688},{k:9,x:474,y:712},{k:8,x:474,y:739},{k:7,x:474,y:771},{k:6,x:474,y:806},{k:5,x:474,y:848},{k:4,x:474,y:902},{k:3,x:474,y:969},{k:2,x:476,y:1059},{k:1.5,x:481,y:1124}],
    Etano: [{k:110,x:310,y:30},{k:100,x:328,y:51},{k:90,x:348,y:77},{k:80,x:368,y:106},{k:70,x:388,y:139},{k:60,x:409,y:178},{k:50,x:430,y:226},{k:40,x:450,y:278},{k:30,x:471,y:344},{k:20,x:490,y:437},{k:15,x:494,y:502},{k:10,x:496,y:592},{k:9,x:497,y:617},{k:8,x:497,y:645},{k:7,x:497,y:674},{k:6,x:497,y:711},{k:5,x:496,y:759},{k:4,x:496,y:811},{k:3,x:497,y:877},{k:2,x:500,y:974},{k:1.5,x:504,y:1039},{k:1,x:510,y:1134},{k:0.9,x:520,y:1158},{k:0.8,x:526,y:1187}],
    Propileno: [{k:70,x:403,y:26},{k:60,x:427,y:66},{k:50,x:450,y:107},{k:40,x:474,y:156},{k:30,x:500,y:215},{k:20,x:531,y:300},{k:15,x:547,y:358},{k:10,x:562,y:440},{k:9,x:565,y:464},{k:8,x:568,y:489},{k:7,x:571,y:516},{k:6,x:573,y:548},{k:5,x:575,y:584},{k:4,x:576,y:632},{k:3,x:578,y:691},{k:2,x:581,y:777},{k:1.5,x:584,y:836},{k:1,x:591,y:919},{k:0.9,x:593,y:940},{k:0.8,x:595,y:967},{k:0.7,x:599,y:994},{k:0.6,x:602,y:1025},{k:0.5,x:606,y:1063},{k:0.4,x:613,y:1113},{k:0.3,x:624,y:1174}],
    Propano: [{k:70,x:409,y:21},{k:60,x:428,y:51},{k:50,x:449,y:86},{k:40,x:473,y:130},{k:30,x:500,y:192},{k:20,x:535,y:282},{k:15,x:551,y:334},{k:10,x:569,y:417},{k:9,x:574,y:439},{k:8,x:578,y:465},{k:7,x:581,y:492},{k:6,x:584,y:524},{k:5,x:586,y:559},{k:4,x:587,y:608},{k:3,x:586,y:670},{k:2,x:588,y:752},{k:1.5,x:592,y:811},{k:1,x:599,y:895},{k:0.9,x:601,y:918},{k:0.8,x:605,y:942},{k:0.7,x:608,y:973},{k:0.6,x:612,y:1004},{k:0.5,x:618,y:1043},{k:0.4,x:623,y:1084},{k:0.3,x:633,y:1144},{k:0.25,x:641,y:1182}],
    Isobutano: [{k:40,x:559,y:46},{k:30,x:575,y:98},{k:20,x:593,y:173},{k:15,x:605,y:229},{k:10,x:620,y:310},{k:9,x:622,y:331},{k:8,x:626,y:353},{k:7,x:630,y:380},{k:6,x:633,y:408},{k:5,x:637,y:439},{k:4,x:641,y:480},{k:3,x:645,y:533},{k:2,x:648,y:614},{k:1.5,x:652,y:669},{k:1,x:656,y:746},{k:0.9,x:658,y:763},{k:0.8,x:660,y:788},{k:0.7,x:663,y:813},{k:0.6,x:666,y:842},{k:0.5,x:670,y:877},{k:0.4,x:676,y:930},{k:0.3,x:683,y:987},{k:0.2,x:693,y:1074},{k:0.15,x:702,y:1136},{k:0.1,x:716,y:1223}],
    'n-Butano': [{k:30,x:593,y:88},{k:20,x:612,y:169},{k:15,x:625,y:228},{k:10,x:636,y:293},{k:9,x:638,y:307},{k:8,x:640,y:324},{k:7,x:643,y:349},{k:6,x:646,y:375},{k:5,x:650,y:407},{k:4,x:653,y:443},{k:3,x:656,y:493},{k:2,x:660,y:566},{k:1.5,x:662,y:614},{k:1,x:666,y:685},{k:0.9,x:667,y:707},{k:0.8,x:669,y:730},{k:0.7,x:672,y:755},{k:0.6,x:675,y:786},{k:0.5,x:678,y:821},{k:0.4,x:682,y:857},{k:0.3,x:689,y:916},{k:0.25,x:693,y:953},{k:0.15,x:705,y:1056},{k:0.1,x:718,y:1142},{k:0.09,x:720,y:1162},{k:0.08,x:724,y:1186},{k:0.07,x:729,y:1214},{k:0.06,x:734,y:1242}],
    Isopentano: [{k:20,x:652,y:66},{k:15,x:664,y:125},{k:10,x:677,y:198},{k:8,x:684,y:235},{k:7,x:687,y:253},{k:6,x:690,y:275},{k:5,x:694,y:304},{k:4,x:700,y:337},{k:3,x:706,y:385},{k:2,x:712,y:447},{k:1.5,x:716,y:497},{k:1,x:719,y:560},{k:0.9,x:720,y:582},{k:0.8,x:721,y:601},{k:0.7,x:722,y:625},{k:0.6,x:723,y:647},{k:0.5,x:724,y:680},{k:0.4,x:726,y:727},{k:0.3,x:729,y:768},{k:0.2,x:736,y:842},{k:0.15,x:742,y:895},{k:0.1,x:752,y:971},{k:0.09,x:755,y:992},{k:0.08,x:758,y:1014},{k:0.07,x:762,y:1039},{k:0.06,x:766,y:1068},{k:0.05,x:771,y:1101},{k:0.03,x:786,y:1198},{k:0.02,x:801,y:1272}],
    'n-Pentano': [{k:20,x:665,y:52},{k:15,x:676,y:99},{k:10,x:690,y:165},{k:9,x:693,y:184},{k:8,x:697,y:204},{k:7,x:701,y:226},{k:6,x:706,y:253},{k:5,x:710,y:279},{k:4,x:715,y:314},{k:3,x:720,y:355},{k:2,x:727,y:422},{k:1.5,x:730,y:467},{k:1,x:734,y:532},{k:0.9,x:736,y:552},{k:0.8,x:736,y:572},{k:0.7,x:737,y:593},{k:0.6,x:738,y:620},{k:0.5,x:740,y:647},{k:0.4,x:741,y:686},{k:0.3,x:745,y:736},{k:0.2,x:752,y:809},{k:0.15,x:758,y:859},{k:0.1,x:768,y:934},{k:0.09,x:770,y:949},{k:0.08,x:773,y:972},{k:0.07,x:776,y:996},{k:0.06,x:780,y:1025},{k:0.05,x:784,y:1056},{k:0.04,x:791,y:1103},{k:0.03,x:799,y:1157},{k:0.02,x:810,y:1230},{k:0.015,x:819,y:1279}],
    'n-Hexano': [{k:13,x:718,y:44},{k:12,x:721,y:56},{k:11,x:724,y:68},{k:10,x:726,y:80},{k:9,x:730,y:95},{k:8,x:734,y:113},{k:7,x:738,y:136},{k:6,x:743,y:160},{k:5,x:748,y:186},{k:4,x:754,y:221},{k:3,x:760,y:262},{k:2,x:767,y:316},{k:1.5,x:773,y:359},{k:1,x:781,y:420},{k:0.9,x:782,y:435},{k:0.8,x:783,y:451},{k:0.7,x:785,y:473},{k:0.6,x:787,y:495},{k:0.5,x:788,y:520},{k:0.4,x:790,y:559},{k:0.3,x:792,y:600},{k:0.2,x:796,y:664},{k:0.15,x:799,y:712},{k:0.1,x:805,y:778},{k:0.09,x:808,y:794},{k:0.08,x:810,y:800},{k:0.07,x:813,y:836},{k:0.06,x:815,y:863},{k:0.05,x:819,y:890},{k:0.04,x:825,y:931},{k:0.03,x:832,y:980},{k:0.02,x:842,y:1050},{k:0.015,x:849,y:1103},{k:0.01,x:862,y:1174},{k:0.009,x:865,y:1195},{k:0.008,x:869,y:1217},{k:0.007,x:7,y:1242},{k:0.006,x:878,y:1272},{k:0.005,x:886,y:1309}],
    'n-Heptano': [{k:8,x:759,y:51},{k:7,x:763,y:67},{k:6,x:767,y:85},{k:5,x:772,y:108},{k:4,x:778,y:138},{k:3,x:785,y:177},{k:2,x:794,y:232},{k:1.5,x:799,y:268},{k:1,x:807,y:319},{k:0.9,x:809,y:336},{k:0.8,x:812,y:351},{k:0.7,x:814,y:366},{k:0.6,x:817,y:388},{k:0.5,x:819,y:413},{k:0.4,x:823,y:446},{k:0.3,x:827,y:487},{k:0.2,x:832,y:544},{k:0.15,x:836,y:585},{k:0.1,x:842,y:642},{k:0.09,x:843,y:659},{k:0.08,x:845,y:679},{k:0.07,x:847,y:699},{k:0.06,x:849,y:725},{k:0.05,x:852,y:749},{k:0.04,x:857,y:785},{k:0.03,x:862,y:833},{k:0.02,x:871,y:895},{k:0.015,x:878,y:944},{k:0.01,x:889,y:1014},{k:0.009,x:892,y:1032},{k:0.008,x:895,y:1052},{k:0.007,x:899,y:1074},{k:0.006,x:904,y:1102},{k:0.005,x:910,y:1132},{k:0.004,x:916,y:1171},{k:0.003,x:926,y:1226}],
    'n-Octano': [{k:5,x:804,y:42},{k:4,x:811,y:70},{k:3,x:819,y:105},{k:2,x:829,y:156},{k:1.5,x:835,y:193},{k:1,x:844,y:246},{k:0.9,x:846,y:259},{k:0.8,x:848,y:274},{k:0.7,x:851,y:291},{k:0.6,x:853,y:311},{k:0.5,x:857,y:335},{k:0.4,x:861,y:363},{k:0.3,x:866,y:398},{k:0.2,x:871,y:452},{k:0.15,x:874,y:490},{k:0.1,x:878,y:540},{k:0.09,x:879,y:555},{k:0.08,x:881,y:571},{k:0.07,x:882,y:590},{k:0.06,x:884,y:610},{k:0.05,x:886,y:634},{k:0.04,x:889,y:667},{k:0.03,x:894,y:708},{k:0.02,x:900,y:766},{k:0.015,x:906,y:813},{k:0.01,x:914,y:878},{k:0.009,x:917,y:894},{k:0.008,x:920,y:915},{k:0.007,x:924,y:938},{k:0.006,x:928,y:965},{k:0.005,x:933,y:998},{k:0.004,x:939,y:1037},{k:0.003,x:948,y:1091},{k:0.002,x:962,y:1170},{k:0.0015,x:973,y:1227},{k:0.001,x:990,y:1309}],
    'n-Nonano': [{k:3,x:842,y:39},{k:2,x:852,y:84},{k:1.5,x:860,y:121},{k:1,x:869,y:164},{k:0.5,x:882,y:242},{k:0.4,x:887,y:267},{k:0.3,x:893,y:302},{k:0.2,x:899,y:343},{k:0.15,x:904,y:378},{k:0.1,x:908,y:423},{k:0.08,x:911,y:453},{k:0.06,x:915,y:488},{k:0.05,x:917,y:512},{k:0.04,x:920,y:540},{k:0.03,x:923,y:579},{k:0.015,x:934,y:673},{k:0.01,x:942,y:730},{k:0.009,x:944,y:744},{k:0.008,x:947,y:763},{k:0.007,x:949,y:782},{k:0.006,x:952,y:803},{k:0.005,x:956,y:832},{k:0.004,x:961,y:869},{k:0.003,x:967,y:913},{k:0.002,x:978,y:980},{k:0.001,x:997,y:1100}],
    'n-Decano': [{k:2,x:893,y:39},{k:1.5,x:899,y:70},{k:1,x:906,y:107},{k:0.8,x:910,y:133},{k:0.6,x:916,y:160},{k:0.5,x:918,y:177},{k:0.4,x:923,y:203},{k:0.3,x:928,y:233},{k:0.2,x:935,y:276},{k:0.1,x:946,y:346},{k:0.08,x:948,y:368},{k:0.06,x:952,y:398},{k:0.05,x:955,y:418},{k:0.04,x:957,y:442},{k:0.03,x:960,y:475},{k:0.02,x:963,y:522},{k:0.015,x:966,y:552},{k:0.01,x:970,y:598},{k:0.008,x:973,y:624},{k:0.006,x:977,y:656},{k:0.005,x:980,y:676},{k:0.004,x:983,y:708},{k:0.003,x:987,y:742},{k:0.002,x:994,y:798},{k:0.0015,x:1000,y:840},{k:0.001,x:1010,y:904}]
};

const PRESSURE_Y_MIN = pressureData[0].y;
const PRESSURE_Y_MAX = pressureData[pressureData.length - 1].y;
const TEMP_Y_MIN = temperatureData[0].y;
const TEMP_Y_MAX = temperatureData[temperatureData.length - 1].y;

// --- LÓGICA DEL PROGRAMA ---
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");
const kValuesContainer = document.querySelector('#kValuesContainer .k-values-grid');
const bubblePointSumSpan = document.getElementById('bubblePointSum');
const dewPointSumSpan = document.getElementById('dewPointSum');
const pressureInput = document.getElementById('pressureInput');
const tempInput = document.getElementById('tempInput');
const bgImage = new Image();
bgImage.src = IMAGE_FILE;
let handles = {
    pressure: { x: X_PRESSURE_AXIS, y: 600, radius: HANDLE_RADIUS },
    temp: { x: X_TEMP_AXIS, y: 600, radius: HANDLE_RADIUS },
};

const compounds = Object.keys(compoundsData).map(name => ({
    name: name,
    data: compoundsData[name],
    element: null,
    checkbox: null,
    concentrationInput: null,
    checked: false, // Iniciar todos deseleccionados
    currentK: 0,
    concentration: 0 // Iniciar con concentración 0
}));

// --- CÁLCULO DE VALOR K Y SUMATORIA ---
function findIntersection(p1,p2,p3,p4){const d=(p1.x-p2.x)*(p3.y-p4.y)-(p1.y-p2.y)*(p3.x-p4.x);if(d===0)return null;const t=((p1.x-p3.x)*(p3.y-p4.y)-(p1.y-p3.y)*(p3.x-p4.x))/d;const u=-((p1.x-p2.x)*(p1.y-p3.y)-(p1.y-p2.y)*(p1.x-p3.x))/d;if(t>0&&t<1&&u>0&&u<1){return{x:p1.x+t*(p2.x-p1.x),y:p1.y+t*(p2.y-p1.y)};}return null;}
function interpolateKValue(i,s,e){const r=e.y-s.y;if(r===0)return s.k;return s.k+(i.y-s.y)/r*(e.k-s.k);}

function updateSums() {
    let bubbleSum = 0;
    let dewSum = 0;
    compounds.forEach(compound => {
        if (compound.checked && compound.concentration > 0 && compound.currentK > 0) {
            const z = compound.concentration / 100; // Convertir % a fracción
            bubbleSum += compound.currentK * z;
            dewSum += z / compound.currentK;
        }
    });
    bubblePointSumSpan.textContent = bubbleSum.toFixed(4);
    dewPointSumSpan.textContent = dewSum.toFixed(4);
}

function updateKValues() {
    const p1 = handles.pressure;
    const p2 = handles.temp;
    compounds.forEach(compound => {
        let found = false;
        for (let i = 0; i < compound.data.length - 1; i++) {
            const segStart = compound.data[i];
            const segEnd = compound.data[i+1];
            const intersection = findIntersection(p1, p2, segStart, segEnd);
            if (intersection) {
                const kValue = interpolateKValue(intersection, segStart, segEnd);
                compound.element.textContent = kValue.toFixed(4);
                compound.currentK = kValue;
                found = true;
                break;
            }
        }
        if (!found) {
            compound.element.textContent = "N/A";
            compound.currentK = 0;
        }
    });
    updateSums();
}

// --- DIBUJO ---
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImage, 0, 0);
    ctx.beginPath();
    ctx.moveTo(handles.pressure.x, handles.pressure.y);
    ctx.lineTo(handles.temp.x, handles.temp.y);
    ctx.strokeStyle = "red"; ctx.lineWidth = 2; ctx.stroke();
    for (let key in handles) {
        let handle = handles[key];
        ctx.beginPath();
        ctx.arc(handle.x, handle.y, handle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "cyan"; ctx.fill();
        ctx.strokeStyle = "blue"; ctx.lineWidth = 2; ctx.stroke();
    }
    updateKValues();
}

// --- INICIALIZACIÓN ---
bgImage.onload = function () {
    canvas.width = bgImage.width; canvas.height = bgImage.height;
    
    compounds.forEach(compound => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'k-value-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = compound.checked;
        checkbox.id = `check-${compound.name}`;
        compound.checkbox = checkbox;
        
        const label = document.createElement('label');
        label.textContent = compound.name + ':';
        label.htmlFor = checkbox.id;

        const span = document.createElement('span');
        span.textContent = '-';
        compound.element = span;

        const concentrationInput = document.createElement('input');
        concentrationInput.type = 'number';
        concentrationInput.className = 'concentration-input';
        concentrationInput.placeholder = '% z';
        concentrationInput.min = 0;
        concentrationInput.max = 100;
        concentrationInput.step = 0.1;
        concentrationInput.style.display = compound.checked ? 'inline-block' : 'none'; // Mostrar si está chequeado al inicio
        compound.concentrationInput = concentrationInput;
        
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(label);
        itemDiv.appendChild(concentrationInput);
        itemDiv.appendChild(span);
        kValuesContainer.appendChild(itemDiv);

        checkbox.addEventListener('change', () => {
            compound.checked = checkbox.checked;
            concentrationInput.style.display = compound.checked ? 'inline-block' : 'none';
            if (!compound.checked) {
                concentrationInput.value = '';
                compound.concentration = 0;
            }
            updateSums();
        });

        concentrationInput.addEventListener('input', () => {
            compound.concentration = parseFloat(concentrationInput.value) || 0;
            updateSums();
        });
    });

    pressureInput.value = 500; tempInput.value = 100;
    pressureInput.dispatchEvent(new Event('input')); 
    tempInput.dispatchEvent(new Event('input'));
    
    document.getElementById('calculateFlashBtn').addEventListener('click', calculateFlash);
};

// --- LÓGICA DE CONVERSIÓN Y ENTRADA ---
const pressureValueInput = document.getElementById('pressureValueInput');
const pressureUnitSelector = document.getElementById('pressureUnitSelector');
const tempValueInput = document.getElementById('tempValueInput');
const tempUnitSelector = document.getElementById('tempUnitSelector');
const conversionFactors = { 'psi': 6.89476, 'atm': 101.325, 'bar': 100, 'kg/cm²': 98.0665 };
function convertPressureUnits() {
    const v=parseFloat(pressureValueInput.value);if(isNaN(v)){pressureInput.value="";return;}
    pressureInput.value=(v*conversionFactors[pressureUnitSelector.value]).toFixed(2);
    pressureInput.dispatchEvent(new Event('input'));
}
function convertTempUnits() {
    const v=parseFloat(tempValueInput.value);if(isNaN(v)){tempInput.value="";return;}
    let c;
    switch(tempUnitSelector.value){
        case 'F':c=(v-32)*5/9;break;
        case 'K':c=v-273.15;break;
        case 'R':c=(v-491.67)*5/9;break;
    }
    tempInput.value=c.toFixed(2);
    tempInput.dispatchEvent(new Event('input'));
}
pressureValueInput.addEventListener('input',convertPressureUnits);
pressureUnitSelector.addEventListener('change',convertPressureUnits);
tempValueInput.addEventListener('input',convertTempUnits);
tempUnitSelector.addEventListener('change',convertTempUnits);

function valueToY_piecewise(v,data,isReversed){
    let p1=data[0],p2=data[data.length-1];
    for(let i=0;i<data.length-1;i++){
        if((!isReversed&&v>=data[i].value&&v<=data[i+1].value)||(isReversed&&v<=data[i].value&&v>=data[i+1].value)){
            p1=data[i];p2=data[i+1];break;
        }
    }
    const vRange=p2.value-p1.value;if(vRange===0)return p1.y;
    return p1.y+((v-p1.value)/vRange)*(p2.y-p1.y);
}
function yToValue_piecewise(y,data){
    if(y<=data[0].y)return data[0].value;
    if(y>=data[data.length-1].y)return data[data.length-1].value;
    let p1=data[0],p2=data[data.length-1];
    for(let i=0;i<data.length-1;i++){
        if(y>=data[i].y&&y<=data[i+1].y){p1=data[i];p2=data[i+1];break;}
    }
    const yRange=p2.y-p1.y;if(yRange===0)return p1.value;
    return p1.value+((y-p1.y)/yRange)*(p2.value-p1.value);
}
pressureInput.addEventListener('input',function(){
    let v=parseFloat(this.value);if(isNaN(v))return;
    v=Math.max(pressureData[0].value,Math.min(pressureData[pressureData.length-1].value,v));
    handles.pressure.y=valueToY_piecewise(v,pressureData,false);draw();
});
tempInput.addEventListener('input',function(){
    let v=parseFloat(this.value);if(isNaN(v))return;
    v=Math.max(temperatureData[temperatureData.length-1].value,Math.min(temperatureData[0].value,v));
    handles.temp.y=valueToY_piecewise(v,temperatureData,true);draw();
});

// --- MANEJO DE EVENTOS TÁCTILES Y DE RATÓN (UNIFICADO) ---
let draggingHandle = null;

function getPos(c, e) {
    const r = c.getBoundingClientRect();
    const isTouchEvent = e.type.startsWith('touch');
    const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
    const scaleX = c.width / r.width;
    const scaleY = c.height / r.height;
    return {
        x: (clientX - r.left) * scaleX,
        y: (clientY - r.top) * scaleY
    };
}

function isMouseOverHandle(m, h) {
    const dx = m.x - h.x, dy = m.y - h.y;
    return dx * dx + dy * dy < (h.radius * 5) * (h.radius * 5); // Área de toque más grande
}

function startDrag(e) {
    const m = getPos(canvas, e);
    if (isMouseOverHandle(m, handles.pressure)) draggingHandle = "pressure";
    else if (isMouseOverHandle(m, handles.temp)) draggingHandle = "temp";
    if (draggingHandle) {
        canvas.style.cursor = "grabbing";
        if (e.cancelable) e.preventDefault();
    }
}

function endDrag(e) {
    if (!draggingHandle) return;
    if (draggingHandle === 'pressure') {
        handles.pressure.y = Math.max(PRESSURE_Y_MIN, Math.min(handles.pressure.y, PRESSURE_Y_MAX));
        pressureInput.value = yToValue_piecewise(handles.pressure.y, pressureData).toFixed(2);
    } else if (draggingHandle === 'temp') {
        handles.temp.y = Math.max(TEMP_Y_MIN, Math.min(handles.temp.y, TEMP_Y_MAX));
        tempInput.value = yToValue_piecewise(handles.temp.y, temperatureData).toFixed(2);
    }
    draggingHandle = null;
    canvas.style.cursor = "default";
    draw();
}

function drag(e) {
    if (draggingHandle && e.cancelable) e.preventDefault();
    
    const m = getPos(canvas, e);
    if (!draggingHandle) {
        canvas.style.cursor = (isMouseOverHandle(m, handles.pressure) || isMouseOverHandle(m, handles.temp)) ? "grab" : "default";
        return;
    }

    let nY = m.y;
    if (draggingHandle === "pressure") {
        handles.pressure.y = Math.max(PRESSURE_Y_MIN, Math.min(nY, PRESSURE_Y_MAX));
    } else if (draggingHandle === "temp") {
        handles.temp.y = Math.max(TEMP_Y_MIN, Math.min(nY, TEMP_Y_MAX));
    }
    draw();
}

// Eventos de Ratón
canvas.addEventListener("mousedown", startDrag);
canvas.addEventListener("mouseup", endDrag);
canvas.addEventListener("mouseout", (e) => { if (draggingHandle) { endDrag(e); } });
canvas.addEventListener("mousemove", drag);

// Eventos Táctiles
canvas.addEventListener("touchstart", startDrag);
canvas.addEventListener("touchend", endDrag);
canvas.addEventListener("touchcancel", endDrag);
canvas.addEventListener("touchmove", drag);

// --- *** CÁLCULO FLASH (Funcionalidad actualizada) *** ---
function calculateFlash() {
    const resultsDiv = document.getElementById('flashResultsOutput');
    resultsDiv.innerHTML = ''; 

    const showIterations = document.getElementById('showIterationsCheck').checked;
    const feedFlow = parseFloat(document.getElementById('feedFlowInput').value);
    if (isNaN(feedFlow) || feedFlow <= 0) {
        resultsDiv.innerHTML = '<p class="error">Error: Introduce un Flujo de Alimentación (F) válido y mayor que cero.</p>';
        return;
    }

    const activeComponents = compounds.filter(c => c.checked && c.concentration > 0 && c.currentK > 0);

    if (activeComponents.length === 0) {
        resultsDiv.innerHTML = '<p class="error">Error: No hay componentes seleccionados con concentración y valor K válidos.</p>';
        return;
    }

    const z_fracciones = activeComponents.map(c => c.concentration / 100);
    const k_valores = activeComponents.map(c => c.currentK);

    const sumZ = z_fracciones.reduce((a, b) => a + b, 0);
    if (Math.abs(sumZ - 1.0) > 1e-4) {
        resultsDiv.innerHTML += `<p class="warning">⚠️ Alerta: La suma de las fracciones molares (z) es ${sumZ.toFixed(4)}, pero debería ser 1.0. Los resultados pueden no ser precisos.</p>`;
    }

    // --- SOLUCIÓN NUMÉRICA (NEWTON-RAPHSON) ---
    const f_psi = (psi) => {
        let sum = 0;
        for (let i = 0; i < activeComponents.length; i++) {
            sum += (z_fracciones[i] * (k_valores[i] - 1)) / (psi * (k_valores[i] - 1) + 1);
        }
        return sum;
    };

    const f_derivada_psi = (psi) => {
        let sum = 0;
        for (let i = 0; i < activeComponents.length; i++) {
            const denominator = (psi * (k_valores[i] - 1) + 1);
            sum += -(z_fracciones[i] * Math.pow(k_valores[i] - 1, 2)) / Math.pow(denominator, 2);
        }
        return sum;
    };

    let psi_actual = 0.5;
    const tolerancia = 1e-7;
    const max_iteraciones = 100;
    let convergencia = false;
    const iterationsData = [];

    for (let i = 0; i < max_iteraciones; i++) {
        const valor_f = f_psi(psi_actual);
        const valor_f_derivada = f_derivada_psi(psi_actual);

        if (Math.abs(valor_f_derivada) < 1e-15) {
            resultsDiv.innerHTML = '<p class="error">Error: La derivada se hizo cero. No se puede continuar.</p>';
            return;
        }

        const psi_siguiente = psi_actual - (valor_f / valor_f_derivada);
        
        if (showIterations) {
            iterationsData.push({
                iter: i + 1,
                psi: psi_actual,
                f_psi: valor_f,
                f_derivada: valor_f_derivada,
                psi_next: psi_siguiente
            });
        }

        if (Math.abs(psi_siguiente - psi_actual) < tolerancia) {
            psi_actual = psi_siguiente;
            convergencia = true;
            break;
        }
        psi_actual = psi_siguiente;
    }
    
    // --- PRESENTACIÓN DE RESULTADOS ---
    let resultHTML = '';

    if (!convergencia) {
        resultHTML = `<p class="error">El método no convergió después de ${max_iteraciones} iteraciones. Último valor de ψ = ${psi_actual.toFixed(5)}</p>`;
    } else {
        let V = 0, L = 0;

        if (psi_actual > 1) {
            resultHTML = `<p class="result-state">El valor de ψ calculado (${psi_actual.toFixed(4)}) es > 1. La mezcla es <strong>VAPOR SOBRECALENTADO</strong>.</p>`;
            V = feedFlow; L = 0;
            psi_actual = 1; 
        } else if (psi_actual < 0) {
            resultHTML = `<p class="result-state">El valor de ψ calculado (${psi_actual.toFixed(4)}) es < 0. La mezcla es <strong>LÍQUIDO SUBENFRIADO</strong>.</p>`;
            V = 0; L = feedFlow;
            psi_actual = 0;
        } else {
            resultHTML = `<p class="result-state">✅ ¡Convergencia alcanzada! <strong>Fracción de Vapor (ψ = V/F): ${psi_actual.toFixed(5)}</strong></p>`;
            V = psi_actual * feedFlow;
            L = feedFlow - V;
        }
        
        resultHTML += `
            <div class="flow-results">
                <span>Flujo Alimentación (F): <strong>${feedFlow.toFixed(2)}</strong></span>
                <span>Flujo Vapor (V): <strong>${V.toFixed(4)}</strong></span>
                <span>Flujo Líquido (L): <strong>${L.toFixed(4)}</strong></span>
            </div>
        `;

        if (psi_actual > 0 && psi_actual < 1) {
            const x_composicion = z_fracciones.map((z, i) => z / (psi_actual * (k_valores[i] - 1) + 1));
            const y_composicion = x_composicion.map((x, i) => k_valores[i] * x);

            resultHTML += `
                <h4>Composición de las Fases</h4>
                <table class="results-table">
                    <thead><tr><th>Componente</th><th>xᵢ (Líquido)</th><th>yᵢ (Vapor)</th></tr></thead>
                    <tbody>
            `;
            activeComponents.forEach((c, i) => {
                resultHTML += `<tr><td>${c.name}</td><td>${x_composicion[i].toFixed(5)}</td><td>${y_composicion[i].toFixed(5)}</td></tr>`;
            });
            resultHTML += `
                    </tbody>
                    <tfoot><tr><td><strong>Suma</strong></td><td><strong>${x_composicion.reduce((a, b) => a + b, 0).toFixed(5)}</strong></td><td><strong>${y_composicion.reduce((a, b) => a + b, 0).toFixed(5)}</strong></td></tr></tfoot>
                </table>
            `;
        }
    }

    if (showIterations && iterationsData.length > 0) {
        resultHTML += `
            <h4>Detalle de Iteraciones (Newton-Raphson)</h4>
            <table class="iterations-table">
                <thead><tr><th>Iteración</th><th>ψ</th><th>f(ψ)</th><th>f'(ψ)</th><th>ψ (sig)</th></tr></thead>
                <tbody>
        `;
        iterationsData.forEach(it => {
            resultHTML += `<tr><td>${it.iter}</td><td>${it.psi.toFixed(6)}</td><td>${it.f_psi.toExponential(4)}</td><td>${it.f_derivada.toExponential(4)}</td><td>${it.psi_next.toFixed(6)}</td></tr>`;
        });
        resultHTML += `</tbody></table>`;
    }
    
    resultsDiv.innerHTML = resultHTML;
}