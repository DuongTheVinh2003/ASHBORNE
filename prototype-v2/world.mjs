// A flat, side-view battlefield. Three.js only composites a 2D canvas texture
// through an orthographic camera; there is no perspective camera or 3D gameplay.
import {CASTLES,UNITS,FIELD,defense,cellPosition,survivors} from './game.mjs';
export class World {
  constructor(host){this.host=host;this.canvas=document.createElement('canvas');this.canvas.width=1600;this.canvas.height=900;this.ctx=this.canvas.getContext('2d');this.host.append(this.canvas);this.mode='Canvas 2D';this.t=0;this.flash=0;this.shake=0;this.state=null;this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;this.ready=this.initThree();}
  async initThree(){try{const THREE=await import('./vendor/three.module.js');this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.texture=new THREE.CanvasTexture(this.canvas);this.texture.colorSpace=THREE.SRGBColorSpace;this.scene=new THREE.Scene();this.camera=new THREE.OrthographicCamera(-800,800,450,-450,0.1,10);this.camera.position.z=2;this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(1600,900),new THREE.MeshBasicMaterial({map:this.texture})));this.host.replaceChildren(this.renderer.domElement);this.mode='Three.js · 2D';this.resize();addEventListener('resize',()=>this.resize());}catch(error){console.info('WebGL indisponible: Canvas 2D.',error.message);}return this.mode;}
  resize(){if(this.renderer)this.renderer.setSize(this.host.clientWidth,this.host.clientHeight);}
  setState(state){this.state=state;}
  pulse(kind){this.flash=kind==='enemy'?0.7:0.25;this.shake=kind==='enemy'?6:2;}
  polygon(points,fill,stroke){const c=this.ctx;c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.stroke();}}
  rect(x,y,w,h,color){this.ctx.fillStyle=color;this.ctx.fillRect(x,y,w,h);}
  circle(x,y,r,color){const c=this.ctx;c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();}
  line(x,y,x2,y2,color,width=2){const c=this.ctx;c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();}
  castle(ash,breached){const c=this.ctx;const stone=ash?'#3e3d38':'#45606a',light=ash?'#67604c':'#68848b',dark=ash?'#282d2a':'#2e444d';
    this.rect(780,330,630,250,stone);this.rect(810,335,570,10,light);
    for(let i=0;i<14;i++)this.rect(780+i*45,309,23,25,stone);
    for(const x of [780,1315]){this.rect(x,220,95,360,dark);this.rect(x+5,220,15,360,stone);for(let i=0;i<4;i++)this.rect(x+i*25,201,14,25,stone);this.rect(x+24,270,14,45,'#b09b65');this.rect(x+30,395,10,40,'#182b30');
      this.line(x+52,203,x+52,133,'#9e9b7f',3);this.polygon([[x+52,133],[x+106,145+Math.sin(this.t*2)*5],[x+52,166]],ash?'#a65e42':'#89b2b5');}
    this.rect(997,210,202,370,stone);this.polygon([[977,210],[1098,128],[1219,210]],dark);this.rect(1012,225,172,8,light);this.circle(1098,278,29,dark);this.circle(1098,278,18,ash?'#c38146':'#93bdc5');
    c.fillStyle=breached?'#152024':'#303b3c';c.beginPath();c.moveTo(1038,580);c.lineTo(1038,440);c.arc(1098,440,60,Math.PI,0);c.lineTo(1158,580);c.fill();
    if(!breached){for(let i=0;i<6;i++)this.line(1046+i*20,428,1046+i*20,579,'#79816e',3);this.line(1038,480,1158,480,'#a49f7e',4);this.line(1038,539,1158,539,'#a49f7e',4);}else{this.polygon([[1030,567],[1050,530],[1071,580],[1123,555],[1158,578]],dark);}
    for(let y=365;y<570;y+=37)for(let x=890+(y%2)*22;x<1290;x+=66){if(x>1015&&x<1175)continue;this.line(x,y,x+42,y,light,0.5);}
    if(!ash){this.polygon([[773,220],[880,220],[868,232],[786,229]],'#c6d5ce');this.polygon([[990,210],[1098,135],[1207,210],[1170,201],[1098,153],[1024,212]],'#bdd0ca');}
    for(const x of [970,1228]){this.rect(x,457,8,65,'#726b50');this.circle(x+4,453,11,ash?'#dc8e44':'#90d5d4');this.circle(x+4,449+Math.sin(this.t*7+x)*3,5,'#f3d8a0');}
  }
  soldier(x,y,role,color,scale=1,walking=false){const c=this.ctx;c.save();c.translate(x,y);c.scale(scale,scale);const stride=walking?Math.sin(this.t*8+x)*5:Math.sin(this.t*2+x)*0.8;
    this.circle(0,-31,7,'#d2b995');this.rect(-8,-37,16,7,'#7a8580');this.polygon([[-9,-23],[8,-23],[11,0],[-12,0]],color);this.line(-5,0,-7+stride,15,'#263233',5);this.line(5,0,7-stride,15,'#263233',5);this.line(-8,-19,-16,-4,'#c4b491',4);
    if(role==='shield'){this.polygon([[-24,-18],[-8,-18],[-9,2],[-16,9],[-24,1]],'#b4a379','#d6c792');this.line(12,-12,21,-40,'#ccd1ba',3);}
    if(role==='spear'){this.line(17,9,17,-65,'#968b68',3);this.polygon([[17,-76],[12,-61],[22,-61]],'#c7d9ce');}
    if(role==='archer'){c.strokeStyle='#b29d6d';c.lineWidth=3;c.beginPath();c.arc(14,-15,18,-1.2,1.2);c.stroke();this.line(20,-32,20,2,'#ccc8aa',1);}
    if(role==='mage'){this.line(17,9,17,-46,'#8b7367',3);this.circle(17,-49,5,'#a3d2cd');this.polygon([[-12,-34],[0,-55],[12,-34]],color);}
    c.restore();}
  hero(x,y){const c=this.ctx;c.save();c.translate(x,y);const bob=Math.sin(this.t*2)*2;
    this.circle(0,12,36,'#15232466');this.polygon([[-24,-90],[-63,1],[-23,-7],[3,-55]],'#6e7670');this.line(-10,-19,-17,9,'#abb7ae',13);this.line(11,-19,17,9,'#abb7ae',13);this.polygon([[-23,-87],[15,-89],[29,-40],[8,-16],[-23,-25]],'#a1aca0');this.polygon([[-27,-87],[-3,-97],[10,-77],[-21,-66]],'#c5c7ae');this.circle(0,-110+bob,17,'#a9b2a5');this.rect(-16,-116+bob,30,8,'#c1c6b1');this.rect(0,-108+bob,16,5,'#273c3b');this.line(24,-65,56,-43,'#929f95',12);this.line(57,-39,85,-109,'#d4d6bd',7);this.line(45,-46,68,-37,'#d0b77d',6);this.polygon([[-37,-66],[-8,-63],[-12,-24],[-27,-10],[-43,-35]],'#526b68','#adba9c');this.line(-30,-60,-29,-24,'#c8be8c',2);c.restore();}
  enemy(x,y,id){const c=this.ctx;c.save();c.translate(x,y);const bob=Math.sin(this.t*1.8)*3;
    this.circle(0,10,65,'#14202377');
    if(id==='turtle'){this.polygon([[-76,-14],[-49,-76],[20,-95],[79,-35],[61,0],[-45,0]],'#6c9b9f','#a1c7c5');this.polygon([[-47,-62],[4,-83],[47,-46],[12,-15]],'#a2c6c0');this.polygon([[-12,-70],[18,-46],[-6,-25],[-34,-44]],'#668f9a');for(const p of [-49,30])this.rect(p,-5,24,18,'#536e72');this.circle(-81,-19,22,'#91b4ae');this.circle(-89,-25,3,'#f2db9a');}
    else if(id==='dragon'){this.polygon([[9,-84],[55,-210],[135,-155],[90,-123],[132,-88],[68,-105]],'#7bafb9','#b2d3cb');this.polygon([[-9,-84],[-35,-208],[-108,-151],[-61,-128],[-98,-88],[-37,-108]],'#5c8797','#8fb7bd');this.polygon([[-28,-93],[9,-112],[49,-45],[19,9],[-24,-8]],'#8eb6b3');this.line(-14,-10,-32,13,'#94bab5',17);this.line(24,-8,46,12,'#94bab5',17);this.polygon([[-31,-102],[-57,-142],[-19,-157],[15,-137],[0,-111]],'#a4c9c4');this.polygon([[-49,-145],[-47,-174],[-27,-152]],'#c1d7c7');this.circle(-34,-135,4,'#e2d7a2');this.polygon([[25,-37],[77,-13],[105,-39],[86,4],[25,0]],'#6e9d9c');}
    else {const ash=id==='warden';c.scale(ash?1.3:1.05,ash?1.3:1.05);this.polygon([[19,-96],[58,5],[5,-9],[-20,-67]],ash?'#874e3b':'#676257');this.line(-15,-12,-25,11,'#827f6c',16);this.line(15,-12,25,11,'#827f6c',16);this.polygon([[-32,-99],[25,-100],[34,-42],[12,-12],[-31,-32]],ash?'#624c3f':'#687265','#aba284');this.circle(0,-121+bob,21,'#77796b');this.rect(-16,-127+bob,35,8,'#343c37');this.rect(-13,-123+bob,10,3,'#e5aa67');this.line(-35,-67,-61,-118,ash?'#d48a4c':'#abae96',10);this.line(-72,-118,-48,-128,'#b6a882',5);this.polygon([[34,-91],[63,-78],[57,-25],[34,-13]],'#494d43','#b49c6c');if(ash){for(let i=0;i<4;i++)this.polygon([[-18+i*12,-136],[-11+i*12,-165-Math.sin(this.t*5+i)*8],[-3+i*12,-136]],'#d29450');}}
    c.restore();}
  drawSiege(s,ash){const c=this.ctx,b=s?.siege,live=s?.phase==='siege'||['trialResult','breach','defeat'].includes(s?.phase),X=x=>315+x/20*900,Y=y=>155+y/14*445;
    this.rect(0,0,1600,900,ash?'#27372c':'#2e4543');
    for(let i=0;i<50;i++){const x=(i*173)%1600,y=100+(i*137)%650;this.circle(x,y,25+(i%3)*18,ash?'#31402f':'#354d47');}
    this.rect(315,135,900,495,ash?'#47503c':'#547269');this.rect(315,135,900,12,'#b4b69a44');
    for(let i=0;i<=5;i++)this.line(X(1.25+i*3.5),Y(7.4),X(1.25+i*3.5),Y(12.2),'#bfd0ab22',1);
    for(let i=0;i<=4;i++)this.line(X(1.25),Y(7.4+i*1.2),X(18.75),Y(7.4+i*1.2),'#bfd0ab22',1);
    this.line(315,Y(7),1215,Y(7),'#d5c79777',2);c.fillStyle='#d4d2ac';c.font='13px Georgia';c.textAlign='center';c.fillText('↑ HƯỚNG CÔNG THÀNH · MỤC TIÊU: PHÁ CỔNG',765,128);
    for(const x of [315,1170]){this.rect(x,138,45,98,'#747e6d');this.rect(x-5,130,55,14,'#a2ab8d');for(let i=0;i<3;i++)this.rect(x+i*18,118,11,16,'#8e9c82');}
    this.rect(X(9),137,90,54,b&&b.gate<=0?'#1a2b24':'#7d8c75');this.rect(X(9)+4,140,82,4,'#c7c3a0');for(let i=0;i<5;i++)this.line(X(9)+10+i*15,145,X(9)+10+i*15,188,'#323f34',3);
    c.fillStyle='#d1c8a0';c.font='12px Georgia';c.fillText(`CỔNG ${live?Math.ceil(b.gate):s?.castle===1?235:180}`,765,210);
    const squads=live?b.squads:(s?.formation||[]).map((id,slot)=>{const a=s.armies.find(a=>a.id===id);return a&&a.count?{...a,...cellPosition(slot),side:'ally',hp:a.count*UNITS[a.type].hp,maxHp:a.count*UNITS[a.type].hp}:null;}).filter(Boolean);
    const foes=live?b.defenders:defense(s||{castle:0}).map(q=>({...q,side:'enemy',hp:q.count*UNITS[q.type].hp,maxHp:q.count*UNITS[q.type].hp}));
    if(this.selectedArmy&&s?.phase==='camp'){const a=squads.find(q=>q.id===this.selectedArmy);if(a){const u=UNITS[a.type];c.save();c.translate(X(a.x),Y(a.y));c.scale(45,445/14);c.beginPath();c.arc(0,0,u.range+u.radius,0,Math.PI*2);c.fillStyle='#e0d6a614';c.fill();c.strokeStyle='#e0d6a688';c.lineWidth=.025;c.stroke();c.restore();}}
    for(const a of [...foes,...squads]){if(a.hp<=0)continue;const u=UNITS[a.type],num=live?survivors(a):a.count,x=X(a.x),y=Y(a.y);this.circle(x,y,19,a.side==='ally'?'#102d2788':'#542d2688');
      if(a.id===this.selectedArmy){c.strokeStyle='#e4cc8d';c.lineWidth=2;c.beginPath();c.ellipse(x,y,32,22,0,0,Math.PI*2);c.stroke();}
      for(let i=0;i<Math.min(6,num);i++){const xx=x+(i%3-1)*11,yy=y+(Math.floor(i/3)-.5)*12;this.circle(xx,yy,5,a.side==='ally'?'#b4c5a3':'#d6a88b');this.rect(xx-4,yy-2,8,7,a.side==='ally'?'#'+u.color.toString(16):'#a47660');}
      c.font='bold 16px Georgia';c.fillStyle=a.side==='ally'?'#e6dbab':'#efb38e';c.textAlign='center';c.fillText(u.icon,x,y+5);
      if(live||a.side==='enemy'){this.rect(x-29,y-26,58,4,'#172c25');this.rect(x-29,y-26,58*a.hp/a.maxHp,4,a.side==='ally'?'#c7d4a1':'#d3a07e');c.font='11px Georgia';c.fillStyle='#e0dcc3';c.fillText(a.name+' · '+num,x,y-31);}
    }
    if(live)for(const effect of b.effects){const p=Math.min(1,(b.tick-effect.tick)/5);if(effect.type==='archer'||effect.type==='mage'){const x=X(effect.from.x)+(X(effect.to.x)-X(effect.from.x))*p,y=Y(effect.from.y)+(Y(effect.to.y)-Y(effect.from.y))*p;this.line(x,y,x-8,y+5,effect.type==='mage'?'#efbc79':'#e4dfb4',2);}else{const x=X(effect.to.x),y=Y(effect.to.y);this.line(x-8,y+9,x+8,y-9,'#f5d5a9',2);}if(effect.splash){c.beginPath();c.ellipse(X(effect.to.x),Y(effect.to.y),effect.splash*45,effect.splash*445/14,0,0,Math.PI*2);c.strokeStyle='#e1a67466';c.lineWidth=2;c.stroke();}}
    c.textAlign='left';
  }
  render(delta){this.t+=this.reduced?0:delta;const c=this.ctx,s=this.state,ash=(s?.castle||0)===1;const combat=s&&['combat','encounterWon','castleWon','complete'].includes(s.phase);const siege=s?.phase==='siege';
    if(!combat){this.drawSiege(s,ash);if(this.texture){this.texture.needsUpdate=true;this.renderer.render(this.scene,this.camera);}return;}
    c.save();c.clearRect(0,0,1600,900);if(this.shake>0)c.translate(Math.sin(this.t*80)*this.shake,0);this.shake*=0.9;
    const sky=c.createLinearGradient(0,0,0,760);sky.addColorStop(0,ash?'#25322f':'#293f48');sky.addColorStop(0.65,ash?'#86735a':'#8da8a6');sky.addColorStop(1,ash?'#515b48':'#5e807f');c.fillStyle=sky;c.fillRect(0,0,1600,900);
    this.circle(380,221,61,ash?'#bca37855':'#d2d9be66');this.circle(380,221,44,ash?'#d4b48688':'#e6e4c599');
    for(let layer=0;layer<3;layer++){let pts=[[0,650]];for(let x=0;x<=1700;x+=100)pts.push([x,350+layer*64+Math.sin(x*.007+layer*7)*70+Math.cos(x*.019+layer)*25]);pts.push([1600,750]);this.polygon(pts,[ash?'#4a554b':'#557c81',ash?'#465445':'#4b7073',ash?'#374b3e':'#3c5c60'][layer]);}
    c.globalAlpha=combat?.48:1;this.castle(ash,siege?s.siege.gate<=0:s&&['breach','combat','encounterWon','castleWon','complete'].includes(s.phase));c.globalAlpha=1;
    this.polygon([[0,591],[300,565],[575,578],[900,563],[1600,577],[1600,900],[0,900]],ash?'#313e34':'#3a5557');this.polygon([[0,683],[440,603],[1110,573],[1450,607],[800,663],[400,750]],ash?'#656553':'#81918a');
    // Foreground grass and ruined stones are flat shapes, never perspective meshes.
    for(let i=0;i<70;i++){let x=(i*137)%1600,y=640+(i*47)%155;if(i%4===0)this.polygon([[x,y],[x+8,y-8],[x+22,y-5],[x+25,y+2]],ash?'#626858':'#9baea4');else this.line(x,y,x+Math.sin(i)*6,y-8,ash?'#63705a':'#8caa98',2);}
    if(combat){c.save();c.translate(0,(this.actorBaseY||490)-490);this.polygon([[250,485],[485,455],[740,483],[1220,457],[1390,510],[1350,565],[300,565]],ash?'#5d6350':'#728c82');this.line(280,492,1320,492,ash?'#9b9573':'#a7b7a0',2);this.hero(460,490);s.battle?.enemies.forEach((e,i)=>{if(e.hp<=0)return;if(i===0)this.enemy(s.battle.enemies.length>1?960:1080,490,e.id);else{c.save();c.translate(1150,490);c.scale(.68,.68);this.enemy(0,0,'guard');c.restore();}});c.restore();}
    else {const squads=s?.siege&&siege?s.siege.squads:(s?.formation||['shield','spear',null,'archer','mage']).map((id,slot)=>id?{id,slot,hp:1,maxHp:1}:null).filter(Boolean);
      for(const q of squads){const travel=siege?Math.min(1,s.siege.tick/7):0;const baseX=270+(2-q.slot%3)*86+travel*320;const y=590+Math.floor(q.slot/3)*48;const count=siege?Math.max(0,Math.ceil(q.hp/q.maxHp*6)):6;
        for(let i=0;i<count;i++)this.soldier(baseX+(i%3)*23,y+Math.floor(i/3)*18,q.id,'#'+UNITS[q.id].color.toString(16),.9,siege);}
      if(siege&&s.siege.guard>0)for(let i=0;i<9;i++)this.soldier(1010+(i%3)*31,585+Math.floor(i/3)*16,i%2?'spear':'shield',ash?'#9f7157':'#7d999e',.85,true);
      if(siege){for(let i=0;i<4;i++){const p=(this.t*1.3+i*.24)%1;const x=600+p*440,y=548-Math.sin(p*Math.PI)*140;this.line(x,y,x-15,y+3,ash?'#e1c08b':'#dce2ba',2);}}
    }
    for(let i=0;i<55;i++){const x=(i*181+this.t*(ash?14:7))%1600;const y=(i*67+this.t*(ash?-20:12)+9000)%850;c.globalAlpha=.15+(i%4)*.09;this.circle(x,y,ash?1.5:1.8,ash?'#f6bd7e':'#e9eeda');}c.globalAlpha=1;
    if(this.flash>0){this.rect(0,0,1600,900,`rgba(223,165,89,${this.flash*.18})`);this.flash*=.88;}
    c.restore();if(this.texture){this.texture.needsUpdate=true;this.renderer.render(this.scene,this.camera);}
  }
}
