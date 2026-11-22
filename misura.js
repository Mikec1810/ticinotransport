/* Auto note al verificatore: [marca, modello, anni, larghezza mm, lunghezza mm, altezza mm, peso kg]
   Larghezza di carrozzeria da scheda tecnica, specchietti esclusi. */
const AUTO = [
["Fiat","500 (classica)","1957-1975",1320,2970,1320,500],
["Fiat","126","1972-2000",1380,3054,1335,600],
["Fiat","600","1955-1969",1380,3215,1405,585],
["Fiat","Panda (1ª serie)","1980-2003",1460,3380,1445,700],
["Fiat","Panda","2012-",1643,3653,1551,940],
["Fiat","500","2007-2024",1627,3571,1488,930],
["Fiat","500e","2020-",1683,3632,1527,1290],
["Fiat","124 Spider","1966-1985",1610,3970,1250,950],
["Fiat","X1/9","1972-1989",1570,3830,1170,880],
["Abarth","595 (classica)","1963-1971",1320,2970,1320,520],
["Abarth","595 / 695","2008-",1627,3660,1485,1035],
["Autobianchi","A112","1969-1986",1480,3230,1340,700],
["Lancia","Fulvia Coupé","1965-1976",1545,3970,1300,950],
["Lancia","Delta HF Integrale","1987-1993",1770,3900,1365,1300],
["Lancia","Stratos HF","1973-1978",1750,3710,1114,980],
["Lancia","Beta Montecarlo","1975-1981",1700,3813,1190,1040],
["Alfa Romeo","Giulia Sprint GT / GTV","1963-1976",1580,4080,1310,950],
["Alfa Romeo","Spider Duetto","1966-1993",1630,4120,1290,1040],
["Alfa Romeo","Montreal","1970-1977",1672,4220,1205,1270],
["Alfa Romeo","GTV6","1980-1986",1664,4260,1330,1200],
["Alfa Romeo","75","1985-1992",1630,4330,1400,1120],
["Mini","Classica","1959-2000",1410,3054,1346,620],
["Mini","Cooper (F56)","2014-",1727,3850,1414,1160],
["Citroën","2CV","1948-1990",1480,3830,1600,560],
["Citroën","DS","1955-1975",1790,4874,1470,1215],
["Citroën","Méhari","1968-1987",1530,3520,1640,535],
["Citroën","Ami","2020-",1390,2410,1520,485],
["Renault","4","1961-1994",1480,3665,1540,650],
["Renault","5 Turbo","1980-1986",1750,3664,1323,970],
["Renault","Twingo","2014-2024",1646,3595,1554,940],
["Renault","Clio","2019-",1798,4050,1440,1180],
["Peugeot","205 GTI","1984-1994",1572,3705,1354,880],
["Volkswagen","Maggiolino","1938-2003",1550,4030,1500,820],
["Volkswagen","Karmann Ghia","1955-1974",1634,4140,1330,820],
["Volkswagen","Golf GTI (Mk1)","1976-1983",1610,3815,1395,810],
["Volkswagen","Golf GTI (Mk2)","1983-1991",1665,3985,1415,960],
["Volkswagen","Golf","2019-",1789,4284,1456,1300],
["Volkswagen","Polo","2017-",1751,4053,1446,1105],
["Volkswagen","up!","2011-2023",1641,3540,1489,930],
["Volkswagen","Transporter T1","1950-1967",1720,4280,1940,1100],
["Volkswagen","Transporter T2","1967-1979",1720,4420,1940,1200],
["Porsche","356","1948-1965",1670,3950,1310,850],
["Porsche","911 (F, 1963-73)","1963-1973",1610,4163,1320,1075],
["Porsche","911 (G, 1974-89)","1974-1989",1650,4291,1320,1160],
["Porsche","911 (964)","1989-1994",1652,4250,1310,1350],
["Porsche","911 (993)","1993-1998",1735,4245,1300,1370],
["Porsche","911 (996)","1997-2005",1765,4430,1305,1320],
["Porsche","911 (997)","2004-2012",1808,4427,1310,1425],
["Porsche","911 (991)","2011-2019",1808,4491,1303,1430],
["Porsche","911 (992)","2019-",1852,4519,1300,1505],
["Porsche","924","1976-1988",1685,4212,1270,1080],
["Porsche","944","1981-1991",1735,4200,1275,1180],
["Porsche","928","1977-1995",1836,4447,1282,1450],
["Porsche","718 Cayman / Boxster","2016-",1801,4379,1295,1365],
["Porsche","Taycan","2019-",1966,4963,1379,2140],
["BMW","2002","1968-1976",1590,4230,1410,1010],
["BMW","3.0 CSL (E9)","1968-1975",1670,4660,1370,1270],
["BMW","Serie 3 (E30)","1982-1994",1645,4325,1380,1080],
["BMW","M3 (E30)","1986-1991",1675,4360,1370,1200],
["BMW","M3 (E36)","1992-1999",1710,4433,1335,1460],
["BMW","M3 (E46)","2000-2006",1780,4492,1372,1570],
["BMW","Z3","1995-2002",1692,4025,1288,1175],
["BMW","M4 (G82)","2021-",1887,4794,1393,1725],
["Mercedes-Benz","190 SL","1955-1963",1740,4290,1320,1160],
["Mercedes-Benz","230/250/280 SL Pagoda","1963-1971",1760,4285,1305,1300],
["Mercedes-Benz","SL (R107)","1971-1989",1790,4390,1300,1510],
["Mercedes-Benz","W123","1976-1986",1786,4725,1438,1350],
["Mercedes-Benz","W124","1984-1997",1740,4740,1446,1340],
["Mercedes-Benz","AMG GT","2014-",1939,4546,1289,1570],
["Jaguar","E-Type","1961-1975",1657,4453,1219,1230],
["Jaguar","XJ6 (Serie 1)","1968-1973",1770,4813,1370,1670],
["Aston Martin","DB5","1963-1965",1676,4572,1346,1465],
["Aston Martin","DB11","2016-",1940,4739,1279,1760],
["Lotus","Elan","1962-1975",1422,3680,1143,585],
["Lotus","Esprit","1976-2004",1860,4330,1150,1270],
["MG","B","1962-1980",1520,3886,1245,920],
["MG","Midget","1961-1979",1400,3480,1230,690],
["Triumph","Spitfire","1962-1980",1450,3680,1200,710],
["Triumph","TR6","1968-1976",1470,3960,1270,1130],
["Austin-Healey","3000","1959-1967",1537,3950,1245,1120],
["Ford","Escort (Mk1)","1968-1975",1570,3980,1390,830],
["Ford","Escort (Mk2)","1975-1980",1580,3980,1390,900],
["Ford","Capri","1968-1986",1650,4260,1290,1000],
["Ford","Mustang","1965-1968",1732,4613,1303,1250],
["Ford","Mustang","1969-1973",1816,4750,1303,1400],
["Chevrolet","Corvette (C2)","1963-1967",1770,4453,1265,1370],
["Chevrolet","Corvette (C3)","1968-1982",1750,4651,1219,1500],
["Chevrolet","Corvette (C8)","2020-",1934,4630,1234,1530],
["Dodge","Challenger","1970-1974",1930,4850,1300,1600],
["Jeep","Willys MB","1941-1945",1575,3350,1830,1040],
["Land Rover","Defender 90","1990-2016",1790,3883,1980,1695],
["Alpine","A110 (classica)","1961-1977",1520,3850,1130,620],
["Alpine","A110","2017-",1798,4178,1252,1103],
["De Tomaso","Pantera","1971-1993",1700,4270,1100,1420],
["Opel","Manta","1970-1988",1670,4445,1330,1050],
["Volvo","Amazon","1956-1970",1620,4450,1470,1120],
["Saab","900","1978-1998",1690,4680,1420,1200],
["Datsun","240Z","1969-1973",1630,4140,1285,1040],
["Toyota","Celica (A20)","1970-1977",1600,4165,1310,1000],
["Toyota","Supra (A80)","1993-2002",1810,4514,1275,1570],
["Toyota","Aygo","2014-2022",1615,3455,1460,845],
["Honda","S2000","1999-2009",1750,4135,1285,1270],
["Honda","NSX (NA1)","1990-2005",1810,4430,1170,1365],
["Mazda","MX-5 (NA)","1989-1997",1675,3970,1235,955],
["Mazda","MX-5 (ND)","2015-",1735,3915,1230,1030],
["Nissan","Skyline GT-R (R34)","1999-2002",1785,4600,1360,1560],
["Nissan","GT-R (R35)","2007-",1895,4710,1370,1740],
["Subaru","Impreza GT (GC8)","1992-2000",1690,4340,1405,1235],
["Mitsubishi","Lancer Evo VI","1999-2001",1770,4350,1415,1365],
["Suzuki","Jimny","2018-",1645,3480,1720,1090],
["Smart","Fortwo","2014-",1663,2695,1555,880],
["Opel","Corsa","2019-",1765,4060,1433,1090],
["Tesla","Model 3","2017-",1849,4694,1443,1760],
["Ferrari","308 GTB/GTS","1975-1985",1720,4230,1120,1090],
["Ferrari","328 GTB/GTS","1985-1989",1730,4255,1128,1160],
["Ferrari","Testarossa","1984-1991",1976,4485,1130,1506],
["Ferrari","F355","1994-1999",1900,4250,1170,1350],
["Ferrari","360 Modena","1999-2005",1922,4477,1214,1390],
["Ferrari","Roma","2020-",1974,4656,1301,1570],
["Ferrari","296 GTB","2022-",1958,4565,1187,1470],
["Lamborghini","Countach","1974-1990",2000,4140,1070,1490],
["Lamborghini","Huracán","2014-",1924,4520,1165,1422],
["Lamborghini","Revuelto","2023-",2033,4947,1160,1772],
["McLaren","720S","2017-",1930,4543,1196,1419],
["Audi","R8","2006-",1940,4426,1240,1595],
["Audi","TT","2014-",1832,4191,1353,1230],
["Bentley","Continental GT","2018-",1966,4850,1405,2244],
["Rolls-Royce","Spectre","2023-",2080,5475,1559,2890],
["Maserati","Ghibli (classica)","1967-1973",1800,4590,1160,1540],
["Maserati","MC20","2020-",1965,4669,1221,1500]
];

/* ---- verifica se l'auto entra nel carrello chiuso ---- */
(function(){
  const RAMPA=1770, PASSARUOTA=1910, LUNG=4970, ALT=2060, PESO=2465;
  const q=document.getElementById('qAuto'), lista=document.getElementById('sugg'), box=document.getElementById('esito');
  if(!q) return;
  const senzaAccenti=t=>t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
  const indice=AUTO.map(a=>({a, testo:senzaAccenti(a[0]+' '+a[1]+' '+a[2])}));
  let scelti=[], attivo=-1;

  function cerca(t){
    const parole=senzaAccenti(t).split(' ').filter(Boolean);
    if(!parole.length) return [];
    return indice.filter(v=>parole.every(p=>v.testo.includes(p))).slice(0,7).map(v=>v.a);
  }
  function mostraSuggerimenti(){
    if(!scelti.length){ lista.hidden=true; lista.innerHTML=''; return; }
    lista.innerHTML=scelti.map((a,i)=>
      `<li role="option" data-i="${i}" aria-selected="${i===attivo}"><b>${a[0]} ${a[1]}</b><span>${a[2]} · ${(a[3]/10).toFixed(0)} cm</span></li>`).join('');
    lista.hidden=false;
  }
  function wa(testo){ return 'https://wa.me/41768301847?text='+encodeURIComponent(testo); }

  function verdetto(a){
    const [marca,modello,anni,larg,lung,alt,peso]=a;
    const nome=marca+' '+modello;
    let classe,titolo,spiega;
    const fuoriMisura=[];
    if(lung>LUNG) fuoriMisura.push('è lunga '+(lung/10).toFixed(0)+' cm e il vano ne misura 497');
    if(alt>ALT) fuoriMisura.push('è alta '+(alt/10).toFixed(0)+' cm e il vano ne misura 206');
    if(peso>PESO) fuoriMisura.push('pesa '+peso+' kg, oltre i 2465 ammessi');

    if(larg>RAMPA+20){
      classe='no';
      titolo='Nel carrello chiuso non ci sta.';
      spiega='Con '+(larg/10).toFixed(0)+' cm di carrozzeria non passa dall\'ingresso della rampa, che è largo 177 cm. La trasportiamo sul carrello aperto, fissata alle ruote e assicurata per tutto il viaggio. Stiamo per prendere un carrello chiuso più grande: appena arriva, vetture come questa viaggeranno al coperto.';
    } else if(larg>RAMPA-20){
      classe='forse';
      titolo='È al limite: la verifichiamo noi.';
      spiega='Con '+(larg/10).toFixed(0)+' cm siamo a un soffio dai 177 dell\'ingresso rampa. Su questi modelli cambia tutto l\'allestimento: cerchi, parafanghi, specchietti. Mandaci anno e versione e ti diciamo in giornata se la carichiamo nel chiuso o nell\'aperto.';
    } else if(larg>RAMPA-80){
      classe='si';
      titolo='Ci sta, con poco margine.';
      spiega='Con '+(larg/10).toFixed(0)+' cm passa dall\'ingresso rampa di 177 cm. Il margine è di pochi centimetri per lato, quindi il carico lo facciamo con calma e con le guide: nessun problema, ma non è una manovra da fare di fretta.';
    } else {
      classe='si';
      titolo='Sì, viaggia al coperto.';
      spiega='Con '+(larg/10).toFixed(0)+' cm entra comodamente: l\'ingresso della rampa è largo 177 cm e tra i passaruota ce ne sono 191. Carichi, leghiamo alle ruote e parte protetta da pioggia, sale e sguardi.';
    }
    if(fuoriMisura.length && classe!=='no'){
      classe='forse';
      titolo='Attenzione alle altre misure.';
      spiega='In larghezza ci sta ('+(larg/10).toFixed(0)+' cm contro i 177 dell\'ingresso rampa), ma '+fuoriMisura.join(' e ')+'. Scrivici: valutiamo insieme come trasportarla.';
    }
    const testoWa = classe==='no'
      ? 'Buongiorno, ho una '+nome+' ('+anni+'). Mi serve un preventivo per il trasporto sul carrello aperto.'
      : 'Buongiorno, ho una '+nome+' ('+anni+'). Vorrei un preventivo per il trasporto nel carrello chiuso.';
    box.className='esito '+classe;
    box.innerHTML=
      '<p class="quale">'+nome+' · '+anni+'</p>'+
      '<p class="verdetto">'+titolo+'</p>'+
      '<div class="numeri">'+
        '<div>Larghezza<b>'+(larg/10).toFixed(0)+' cm</b></div>'+
        '<div>Lunghezza<b>'+(lung/10).toFixed(0)+' cm</b></div>'+
        '<div>Altezza<b>'+(alt/10).toFixed(0)+' cm</b></div>'+
        '<div>Peso<b>'+peso+' kg</b></div>'+
      '</div>'+
      '<p class="spiega">'+spiega+'</p>'+
      '<a class="btn-wa" href="'+wa(testoWa)+'" target="_blank" rel="noopener">Chiedi il preventivo su WhatsApp</a>';
    box.scrollIntoView({behavior:'smooth',block:'nearest'});
  }

  function nonTrovata(){
    box.className='esito forse';
    box.innerHTML='<p class="quale">Modello non in elenco</p>'+
      '<p class="verdetto">Questa non ce l\'ho in archivio.</p>'+
      '<p class="spiega">L\'elenco copre i modelli che trasportiamo più spesso. Mandaci marca, modello e anno su WhatsApp: cerchiamo la scheda tecnica e ti diciamo in giornata se entra nel carrello chiuso o se la carichiamo sull\'aperto.</p>'+
      '<a class="btn-wa" href="'+wa('Buongiorno, vorrei sapere se la mia auto entra nel carrello chiuso. Marca, modello e anno: '+q.value)+'" target="_blank" rel="noopener">Chiedi su WhatsApp</a>';
  }

  q.addEventListener('input',()=>{
    scelti=cerca(q.value); attivo=scelti.length?0:-1; mostraSuggerimenti();
    if(!q.value.trim()){ box.className='esito'; box.innerHTML=''; }
  });
  q.addEventListener('keydown',e=>{
    if(lista.hidden){ if(e.key==='Enter'&&q.value.trim()) nonTrovata(); return; }
    if(e.key==='ArrowDown'){ e.preventDefault(); attivo=Math.min(attivo+1,scelti.length-1); mostraSuggerimenti(); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); attivo=Math.max(attivo-1,0); mostraSuggerimenti(); }
    else if(e.key==='Enter'){ e.preventDefault();
      if(attivo>-1){ const a=scelti[attivo]; q.value=a[0]+' '+a[1]; lista.hidden=true; verdetto(a); }
      else nonTrovata(); }
    else if(e.key==='Escape'){ lista.hidden=true; }
  });
  lista.addEventListener('click',e=>{
    const li=e.target.closest('li'); if(!li) return;
    const a=scelti[+li.dataset.i]; q.value=a[0]+' '+a[1]; lista.hidden=true; verdetto(a);
  });
  q.addEventListener('blur',()=>setTimeout(()=>{lista.hidden=true},160));
  q.addEventListener('focus',()=>{ if(scelti.length) lista.hidden=false; });
})();

