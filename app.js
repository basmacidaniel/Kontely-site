const demos={
 invoices:{user:'Gå igenom dagens leverantörsfakturor. Registrera dem som följer våra regler och visa resten för mig.',ai:'Jag hittade <strong>17 nya underlag</strong>.<br><br>12 följer tidigare regler och är klara för registrering.<br>3 behöver ditt godkännande.<br>2 är proforma/fraktdokument och hoppas över.<br><br>Leverantör, belopp och möjliga dubbletter är kontrollerade.',rows:[['Nordhandel AB','Klar',''],['Svenska Matvaror AB','Klar',''],['Logistikpartner AB','Granska','warn'],['Proforma #P-8821','Hoppa över','skip'],['Emballage & pall','Regel hittad','']]},
 inventory:{user:'Vi har fått in 500 kartonger Grillbriketter 10 kg. Registrera inleveransen och kontrollera mot senaste inköp.',ai:'Jag hittade artikeln <strong>Grillbriketter 10 kg</strong> och senaste inköpsunderlaget.<br><br>Föreslagen inleverans: <strong>500 kart</strong>.<br>Leverantör och inköpspris matchar tidigare uppgifter.<br><br>Jag kan registrera inleveransen efter ditt godkännande.',rows:[['Artikel','Grillbriketter 10 kg','info'],['Antal','500 kart',''],['Leverantör','Matchad',''],['Inköpspris','Kontrollerat',''],['Status','Klar för godkännande','']]},
 report:{user:'Hur ser september ut? Visa omsättning, varukostnad och vilka produktgrupper som sticker ut.',ai:'September är sammanställd.<br><br>Jag kan bryta omsättning mot relevanta varukostnadskonton, visa bruttomarginal per grupp och flagga avvikelser mot tidigare perioder.<br><br>Välj en grupp för att gå vidare till underliggande transaktioner.',rows:[['Omsättning','Analyserad',''],['Varukostnad','Matchad',''],['Marginal','Beräknad',''],['Avvikelser','3 hittade','warn'],['Underlag','Drill-down klar','info']]}
};
function setDemo(key,button){const d=demos[key];if(!d)return;document.querySelectorAll('.demo-tab').forEach(x=>x.classList.remove('active'));button.classList.add('active');document.getElementById('demoUser').innerHTML=d.user;document.getElementById('demoAi').innerHTML=d.ai;document.getElementById('demoRows').innerHTML=d.rows.map(r=>`<div class="row"><span>${r[0]}</span><span class="pill ${r[2]||''}">${r[1]}</span></div>`).join('');document.getElementById('approved').textContent='';}
function approveDemo(){const el=document.getElementById('approved');if(el)el.textContent='✓ Demo: åtgärden är godkänd och redo att skickas vidare.';}
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
function fakeSubmit(e){e.preventDefault();const s=document.getElementById('formSuccess');if(s){s.style.display='block';s.textContent='Tack! Formuläret är en demo just nu. Koppla e-post eller CRM innan lansering för att ta emot riktiga bokningar.';}return false;}

function initMobileMenu(){
  document.querySelectorAll('nav').forEach(nav=>{
    const navin=nav.querySelector('.navin');
    if(!navin)return;
    let btn=nav.querySelector('.menu-btn');
    let menu=nav.querySelector('.mobile-menu');
    if(!menu){
      menu=document.createElement('div');
      menu.className='mobile-menu';
      menu.innerHTML='<a href="produkt.html">Produkt</a><a href="index.html#hur">Så fungerar det</a><a href="byra.html">För byråer</a><a href="index.html#pris">Pris</a><a href="index.html#faq">FAQ</a><a class="mobile-demo" href="kontakt.html">Boka demo →</a>';
      nav.appendChild(menu);
    }
    if(!btn){
      const actions=nav.querySelector('.nav-actions');
      if(!actions)return;
      btn=document.createElement('button');
      btn.className='menu-btn';
      btn.type='button';
      btn.textContent='☰';
      actions.appendChild(btn);
    }
    btn.type='button';
    btn.setAttribute('aria-label','Öppna meny');
    btn.setAttribute('aria-expanded','false');
    btn.addEventListener('click',()=>{
      const open=nav.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded',String(open));
      btn.setAttribute('aria-label',open?'Stäng meny':'Öppna meny');
      btn.textContent=open?'×':'☰';
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('menu-open');
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-label','Öppna meny');
      btn.textContent='☰';
    }));
  });
}
initMobileMenu();
