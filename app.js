'use strict';
const config=window.JEBLI_CONFIG||{};
const products=[
 {id:'euro-epal-blanc',title:'Palette EURO/EPAL BLANC',tag:'PALETTE EURO/EPAL',cat:'bois',photo:'assets/photos/palette-euro-epal-blanc-hd.png',size:'1200 × 800',availability:'EN STOCK',description:'Palette EURO/EPAL BLANC au format 1200 × 800 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'euro-epal-bleu-speciale',title:'Palette EURO/EPAL BLEU SPÉCIALE',tag:'PALETTE EURO/EPAL',cat:'bois',photo:'assets/photos/palette-euro-epal-bleu-speciale-hd.png',size:'1200 × 800',availability:'EN STOCK',description:'Palette EURO/EPAL BLEU SPÉCIALE au format 1200 × 800 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'euro-epal-bleu-normal',title:'Palette EURO/EPAL BLEU NORMAL',tag:'PALETTE EURO/EPAL',cat:'bois',photo:'assets/photos/palette-euro-epal-bleu-normal-hd.png',size:'1200 × 800',availability:'EN STOCK',description:'Palette EURO/EPAL BLEU NORMAL au format 1200 × 800 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'palette-114',title:'Palette 114',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-114-hd.png',size:'1140 × 1140',availability:'EN STOCK',description:'Palette 114 au format 1140 × 1140 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'palette-120',title:'Palette 120',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-120-hd.png',size:'1200 × 1000',availability:'EN STOCK',description:'Palette 120 au format 1200 × 1000 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'palette-80',title:'Palette 80',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-80-hd.png',size:'1200 × 800',availability:'EN STOCK',description:'Palette 80 au format 1200 × 800 mm. Disponible en stock. Pour connaître les quantités disponibles et demander un devis, contactez JEBLI PALETTE.'},
 {id:'palette-110',title:'Palette 110',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-110-hd.png',size:'1100 × 1100',availability:'SUR COMMANDE',description:'Palette 110 au format 1100 × 1100 mm. Disponible sur commande. Contactez JEBLI PALETTE pour connaître les modalités, les quantités et demander un devis.'},
 {id:'palette-114-facimag',title:'Palette 114',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-114-facimag-hd.png',size:'1140 × 1140',availability:'EN STOCK',description:'Palette 114 au format 1140 × 1140 mm. Disponible en stock. Contactez JEBLI PALETTE pour connaître les quantités et demander un devis.'},
 {id:'palette-105',title:'Palette 105',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-105-hd.png',size:'1050 × 1050',availability:'EN STOCK',description:'Palette 105 au format 1050 × 1050 mm. Disponible en stock. Contactez JEBLI PALETTE pour connaître les quantités et demander un devis.'},
 {id:'palette-105-rouge',title:'Palette 105 ROUGE',tag:'PALETTE BOIS',cat:'bois',photo:'assets/photos/palette-105-rouge-hd.png',size:'1050 × 1050',availability:'EN STOCK',description:'Palette 105 ROUGE au format 1050 × 1050 mm. Disponible en stock. Contactez JEBLI PALETTE pour connaître les quantités et demander un devis.'}
];
const $=q=>document.querySelector(q),$$=q=>Array.from(document.querySelectorAll(q));
const productGrid=$('#product-grid');
function renderProducts(category='all'){
 const visible=products;
 productGrid.innerHTML=visible.map((p,i)=>`<article class="product-card">
   <div class="product-media" data-show="${p.id}"><img src="${p.photo}" alt="Photographie : ${p.title}" loading="lazy"><span class="photo-index">${String(i+1).padStart(2,'0')}</span></div>
   <div class="product-meta"><span>${p.tag}</span><span>JEBLI / ${p.size}</span></div>
   <div class="product-main"><div><h3>${p.title}</h3><p>Mesure : ${p.size}</p><p class="stock-availability ${p.availability==='SUR COMMANDE'?'on-order':''}">Disponibilité : <strong>${p.availability}</strong></p></div>
   <div class="product-actions"><button type="button" data-detail="${p.id}" aria-label="Détails de ${p.title}">Détails ↗</button><button type="button" class="card-quote" data-quote="${p.id}" aria-label="Demander un devis pour ${p.title}">Devis ↗</button></div></div>
 </article>`).join('');
}
renderProducts();
const dialog=$('#product-dialog');
function hideDialog(){if(dialog.open)dialog.close()}
$('.dialog-close').addEventListener('click',hideDialog);
dialog.addEventListener('click',e=>{if(e.target===dialog)hideDialog()});
function detailProduct(id){const p=products.find(x=>x.id===id);if(!p)return;
 $('#dialog-image').src=p.photo;$('#dialog-image').alt=`Photo ${p.title}`;
 $('#dialog-title').textContent=p.title;$('#dialog-description').textContent=p.description;
 $('#dialog-meta').innerHTML=`<span>Mesure : ${p.size}</span><span class="stock-availability ${p.availability==='SUR COMMANDE'?'on-order':''}">Disponibilité : <strong>${p.availability}</strong></span><span>Prix sur devis</span>`;
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
