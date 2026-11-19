'use strict';
const config=window.JEBLI_CONFIG||{};
const products=[
 {id:'europe',title:'Palette Europe',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-europe.jpg',size:'Format Europe',description:'Une palette de type Europe photographiée dans notre parc. Adaptée aux besoins de manutention et de stockage selon les caractéristiques et disponibilités confirmées.'},
 {id:'industrielle',title:'Palette industrielle',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-industrielle.jpg',size:'Usage industriel',description:'Une référence de palette destinée aux flux logistiques et industriels. Les caractéristiques exactes et les charges admissibles doivent être précisées selon votre utilisation.'},
 {id:'bleue',title:'Palette Europe bleue',tag:'RÉEMPLOI',cat:'reemploi',photo:'assets/photos/palette-europe-bleue.jpg',size:'Palette bois bleue',description:'Une référence de palette Europe bleue photographiée dans notre parc. Son état, sa disponibilité et ses conditions d’utilisation sont à confirmer selon le besoin.'},
 {id:'1200x800',title:'Palette 1200 × 800',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-1200x800.jpg',size:'1200 × 800 mm',description:'Une palette bois au format 1200 × 800 mm, pour différents besoins de stockage et manutention. Les quantités et configurations seront confirmées lors du devis.'},
 {id:'1100x1100',title:'Palette 1100 × 1100',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-1100x1100.jpg',size:'1100 × 1100 mm',description:'Une palette bois au format carré 1100 × 1100 mm. Disponible selon les stocks et les besoins particuliers de vos opérations logistiques.'},
 {id:'carree',title:'Palette carrée 960 à 1050',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-carree-960-1050.jpg',size:'960 à 1050 mm',description:'Palettes de formats carrés entre 960 et 1050 mm. Les dimensions exactes et les modalités de fourniture sont à confirmer avec JEBLI PALETTE.'}
];
const $=q=>document.querySelector(q),$$=q=>Array.from(document.querySelectorAll(q));
const productGrid=$('#product-grid');
function renderProducts(category='all'){
 const visible=products.filter(p=>category==='all'||p.cat===category);
 productGrid.innerHTML=visible.map((p,i)=>`<article class="product-card">
   <div class="product-media" data-show="${p.id}"><img src="${p.photo}" alt="Photographie : ${p.title}" loading="lazy"><span class="photo-index">${String(i+1).padStart(2,'0')}</span></div>
   <div class="product-meta"><span>${p.tag}</span><span>JEBLI / ${p.size}</span></div>
   <div class="product-main"><div><h3>${p.title}</h3><p>Disponibilité et conditions sur demande</p></div>
   <div class="product-actions"><button type="button" data-detail="${p.id}" aria-label="Détails de ${p.title}">Détails ↗</button><button type="button" class="card-quote" data-quote="${p.id}" aria-label="Demander un devis pour ${p.title}">Devis ↗</button></div></div>
 </article>`).join('');
}
renderProducts();
$$('.filter').forEach(b=>b.addEventListener('click',()=>{
 $$('.filter').forEach(other=>{other.classList.toggle('active',other===b);other.setAttribute('aria-pressed',String(other===b));});
 renderProducts(b.dataset.filter);
}));
const dialog=$('#product-dialog');
function hideDialog(){if(dialog.open)dialog.close()}
$('.dialog-close').addEventListener('click',hideDialog);
dialog.addEventListener('click',e=>{if(e.target===dialog)hideDialog()});
function detailProduct(id){const p=products.find(x=>x.id===id);if(!p)return;
 $('#dialog-image').src=p.photo;$('#dialog-image').alt=`Photo ${p.title}`;
 $('#dialog-title').textContent=p.title;$('#dialog-description').textContent=p.description;
 $('#dialog-meta').innerHTML=`<span>${p.size}</span><span>Prix sur devis</span>`;
 $('#dialog-quote').onclick=()=>quoteProduct(id);
 if(typeof dialog.showModal==='function')dialog.showModal();
}
function quoteProduct(id){const p=products.find(x=>x.id===id);if(!p)return;
 hideDialog();const message=$('#contact-message'),intro=`Bonjour, je souhaite un devis pour : ${p.title}.`;
 if(!message.value.includes(intro))message.value=(message.value?message.value.trim()+'\n\n':'')+intro+'\n';
 $('#contact').scrollIntoView({behavior:'smooth'});
 setTimeout(()=>message.focus({preventScroll:true}),300);
}
productGrid.addEventListener('click',e=>{
 const btn=e.target.closest('[data-detail],[data-quote],[data-show]');if(!btn)return;
 if(btn.dataset.quote)quoteProduct(btn.dataset.quote);
 else detailProduct(btn.dataset.detail||btn.dataset.show);
});
const menuButton=$('#menu-toggle'),nav=$('#site-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Ouvrir le menu')}
menuButton.addEventListener('click',()=>{const opening=!nav.classList.contains('open');nav.classList.toggle('open',opening);menuButton.setAttribute('aria-expanded',String(opening));menuButton.setAttribute('aria-label',opening?'Fermer le menu':'Ouvrir le menu')});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
$('#year').textContent=new Date().getFullYear();
// The 20 supplied logos are sample layout elements, not verified client references.
const clientNames=['Azura','LafargeHolcim','BIM','Steripharma','Sahel','Thavin','SNTL','Aveiro Maroc','Driscoll’s','Technopure','Medmilk','QualiPrim','OGE','Matysha','L’Espadon Conserves','PGS Group','Duroc','Pescasud','Doha','Lamatern'];
$('#clients-grid').innerHTML=clientNames.map((name,i)=>`<div class="client-logo" title="Illustration de référence : ${name}"><img src="assets/logos-demo/logo-${String(i+1).padStart(2,'0')}.webp" alt="Logo d'exemple : ${name}" loading="lazy"></div>`).join('');

const form=$('#contact-form'),feedback=$('#form-feedback');
function safeText(s){return String(s).replace(/[<>&"']/g,'').trim()}
function feedbackMessage(text,isError=false,mailLink=null){
 feedback.hidden=false;feedback.classList.toggle('error',isError);feedback.textContent=text;
 if(mailLink){const a=document.createElement('a');a.href=mailLink;a.textContent=' Ouvrir ma messagerie ↗';feedback.appendChild(a)}
}
form.addEventListener('submit',async e=>{
 e.preventDefault();feedback.hidden=true;
 const required=Array.from(form.querySelectorAll('[required]'));
 required.forEach(input=>input.setAttribute('aria-invalid',String(!input.checkValidity())));
 const bad=required.find(el=>!el.checkValidity());if(bad){bad.focus();feedbackMessage('Veuillez compléter correctement les quatre champs obligatoires.',true);return}
 const vals=Object.fromEntries(new FormData(form));
 const name=safeText(vals.nom),email=safeText(vals.email),phone=safeText(vals.telephone),message=safeText(vals.message);
 const mailBody=`Demande de devis — JEBLI PALETTE\n\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nMessage :\n${message}`;
 const mailLink=`mailto:${config.email}?subject=${encodeURIComponent('Demande de devis - JEBLI PALETTE')}&body=${encodeURIComponent(mailBody)}`;
 if(location.protocol==='file:'){feedbackMessage('Le site est ouvert localement : choisissez l’envoi depuis votre messagerie.',false,mailLink);return}
 const button=form.querySelector('[type="submit"]'),old=button.innerHTML;button.disabled=true;button.textContent='Transmission en cours…';
 try{
  const res=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(config.email)}`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,email,'Téléphone':phone,message,_subject:'Demande de devis - JEBLI PALETTE',_template:'table'})});
  const result=await res.json();
  if(!res.ok||![true,'true'].includes(result.success))throw new Error('Envoi non confirmé');
  feedbackMessage('La demande a été acceptée par le service d’envoi. La première utilisation de FormSubmit nécessite la confirmation de la boîte destinataire.');
  form.reset();required.forEach(el=>el.removeAttribute('aria-invalid'));
 }catch(err){feedbackMessage('L’envoi automatique n’a pas pu être confirmé. Vous pouvez envoyer le message directement depuis votre messagerie.',true,mailLink)}
 finally{button.disabled=false;button.innerHTML=old}
});
