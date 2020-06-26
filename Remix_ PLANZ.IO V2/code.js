var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["75e83778-93ae-4efd-8bb0-3c3c02da4878","8e753fc2-2255-43df-a54a-073c9a431776","795c5458-1347-4be8-988b-fbedf72097ce","a873eca7-e695-4e5a-a5fc-0145e4a9905e","1f123801-4283-4998-8365-80431161dcd5","e408db1f-83aa-40fa-8d72-5ddf1c55353c","022d7e7c-90c2-48df-a38b-49f5e759e4d6","03d71eb8-e430-4583-9621-4ec28c2a3192","4fd014f5-6de0-43d6-a7cf-44a21b9eaca0"],"propsByKey":{"75e83778-93ae-4efd-8bb0-3c3c02da4878":{"name":"p","sourceUrl":null,"frameSize":{"x":536,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"XsCsVCnljkq0xhaWcnDr9q_Fzqu1hBxp","loadedFromSource":true,"saved":true,"sourceSize":{"x":536,"y":158},"rootRelativePath":"assets/75e83778-93ae-4efd-8bb0-3c3c02da4878.png"},"8e753fc2-2255-43df-a54a-073c9a431776":{"name":"d","sourceUrl":null,"frameSize":{"x":538,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"wmRiEZp0w5qrdwh_FK2Y8fYG.Td4.US7","loadedFromSource":true,"saved":true,"sourceSize":{"x":538,"y":130},"rootRelativePath":"assets/8e753fc2-2255-43df-a54a-073c9a431776.png"},"795c5458-1347-4be8-988b-fbedf72097ce":{"name":"g","sourceUrl":null,"frameSize":{"x":536,"y":536},"frameCount":1,"looping":true,"frameDelay":12,"version":"5wc62Yz3P4r3ofnmR46gCXwM_bgU6ck4","loadedFromSource":true,"saved":true,"sourceSize":{"x":536,"y":536},"rootRelativePath":"assets/795c5458-1347-4be8-988b-fbedf72097ce.png"},"a873eca7-e695-4e5a-a5fc-0145e4a9905e":{"name":"o","sourceUrl":null,"frameSize":{"x":538,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"1YJ_IbvB.Qr9P5fK6DUkIqRsmyGpwDHY","loadedFromSource":true,"saved":true,"sourceSize":{"x":538,"y":296},"rootRelativePath":"assets/a873eca7-e695-4e5a-a5fc-0145e4a9905e.png"},"1f123801-4283-4998-8365-80431161dcd5":{"name":"b","sourceUrl":null,"frameSize":{"x":540,"y":1116},"frameCount":1,"looping":true,"frameDelay":12,"version":"qcewypoGv9Xb9EOb.ctWzNftFF_7ShBQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":540,"y":1116},"rootRelativePath":"assets/1f123801-4283-4998-8365-80431161dcd5.png"},"e408db1f-83aa-40fa-8d72-5ddf1c55353c":{"name":"s","sourceUrl":null,"frameSize":{"x":530,"y":854},"frameCount":1,"looping":true,"frameDelay":12,"version":"aiY16if_mdNlKQ_xaPWgJ38SCJrqw7rD","loadedFromSource":true,"saved":true,"sourceSize":{"x":530,"y":854},"rootRelativePath":"assets/e408db1f-83aa-40fa-8d72-5ddf1c55353c.png"},"022d7e7c-90c2-48df-a38b-49f5e759e4d6":{"name":"cr","sourceUrl":null,"frameSize":{"x":446,"y":428},"frameCount":1,"looping":true,"frameDelay":12,"version":"Le5AstPD2VUAF5akfGc1dT_xNf9zoETo","loadedFromSource":true,"saved":true,"sourceSize":{"x":446,"y":428},"rootRelativePath":"assets/022d7e7c-90c2-48df-a38b-49f5e759e4d6.png"},"03d71eb8-e430-4583-9621-4ec28c2a3192":{"name":"cg","sourceUrl":null,"frameSize":{"x":442,"y":420},"frameCount":1,"looping":true,"frameDelay":12,"version":"ygSsThVDi_r2Qj3QcLk.qilgNXyUzw2S","loadedFromSource":true,"saved":true,"sourceSize":{"x":442,"y":420},"rootRelativePath":"assets/03d71eb8-e430-4583-9621-4ec28c2a3192.png"},"4fd014f5-6de0-43d6-a7cf-44a21b9eaca0":{"name":"bg","sourceUrl":null,"frameSize":{"x":752,"y":470},"frameCount":1,"looping":true,"frameDelay":12,"version":"YFR30DAmiwJo34C7lPy5Zq9KmuOvATTr","loadedFromSource":true,"saved":true,"sourceSize":{"x":752,"y":470},"rootRelativePath":"assets/4fd014f5-6de0-43d6-a7cf-44a21b9eaca0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cloud = createSprite(200,200);
cloud.setAnimation("o");
var sprite = createSprite(400, 200);
sprite.scale=0.3;
sprite.setAnimation("p");
var bail = createSprite(0,0);
bail.setAnimation("d");
bail.scale=0.3;
var gameover = createSprite(200,200);
gameover.setAnimation ("g");
gameover.visible=0;
gameover.scale=0.7;
var bullet = createSprite(-1000,-1000);
bullet.setAnimation("b");
bullet.scale=0.3;
bullet.width=100;
bullet.height=100;
var shell=createSprite(-1000,-1000);
shell.setAnimation ("s");
shell.scale=0.05;
var crosshairs=createSprite(0,0);
crosshairs.setAnimation("cg");
crosshairs.scale=0.2;
var u=createSprite(200,200);
u.setAnimation("bg");
u.scale=0.6;
var hits=0;
var ammo= 1000;
var score=0;
var realhits=0;
var pwh=0;
var miss=1;
var trueammo= 0;
var speed= 10;
var x=0;
var y=0;
var r=0;
var ya=80;
var xa=0;
var rs=0;
var l=0;
var ps=0;
World.frameRate=1000;
function draw() {
if(ps==0){
background("white");
drawSprites();
u.visible=1;
cloud.visible=0;
sprite.visible=0;
bail.visible=0;
gameover.visible=0;
bullet.visible=0;
shell.visible=0;
crosshairs.visible=0;
}
if(keyWentDown("space")){
ps=1;
}
if(ps==1){
u.visible=0;
cloud.visible=1;
sprite.visible=1;
bail.visible=1;
gameover.visible=1;
bullet.visible=1;
shell.visible=1;
crosshairs.visible=1;
background("skyblue");
camera.zoom=1;
camera.x=World.mouseX;
camera.y=World.mouseY;
if (sprite.x<-199&&ammo>1){
sprite.y=random(110,350);
sprite.x=600;
pwh=0;
}
if (keyDown("shift")){
camera.zoom=2;
}
if(bullet.y<y){
  bullet.visible=false;} 
else {
  bullet.visible=true;}
if (mouseWentDown("left")&&ammo>1){
ammo=ammo-1;
playSound(
"assets/12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com.mp3"
, false);
background("orange");
bullet.y=y+100;
shell.y=y+150;
shell.x=x;
}
if (World.mouseX>sprite.x-100&&World.mouseX<sprite.x+100&&
World.mouseY<sprite.y+20&&World.mouseY>sprite.y-20&&pwh==0&&
mouseWentDown("left")){
hits=hits+1;
realhits=realhits+1;
pwh=1;
playSound("assets/Explosion-3.mp3", false);
}
if (World.mouseX>sprite.x-100&&World.mouseX<sprite.x+100&&
World.mouseY<sprite.y+20&&World.mouseY>sprite.y-20&&pwh==0){
crosshairs.setAnimation("cg");
}else{
crosshairs.setAnimation("cr");
}
if (pwh == 0) {
sprite.visible=1;
bail.visible=0;
}
if (pwh == 1) {
sprite.visible=0;
bail.visible=1;
}
sprite.velocityX=-speed;
bullet.velocityY=10;
if (ammo<2) {
gameover.visible=1;
ammo=ammo+0;
x=200;
y=200;
camera.off();
} else {
gameover.visible=0;
x=World.mouseX;
y=World.mouseY;
}
if (sprite.x<-189&&ammo>1&&pwh==0){
realhits=realhits-1;
miss=miss+1;
}
trueammo=ammo-1;
bail.x=sprite.x;
bail.y=sprite.y;
gameover.x=x;
gameover.y=y;
bullet.x=x;
bullet.velocityY=-20;
shell.velocityY=5;
shell.velocityX=5;
crosshairs.x=x;
crosshairs.y=y;
r=miss-1;
score=hits/miss;
l=score*10;
rs=Math.round(score*100);
}
if(ps==1){
drawSprites();
noStroke();
textSize(24);
fill("darkgrey");
shape(x-15+xa,y+25+ya,x+15+xa,y+25+ya,x+40+xa,y+300+ya,x-40+xa,y+300+ya);
fill("lightgrey");
shape(x-10+xa,y+25+ya,x+10+xa,y+25+ya,x+25+xa,y+300+ya,x-25+xa,y+300+ya);
fill("white");
shape(x-5+xa,y+25+ya,x+5+xa,y+25+ya,x+10+xa,y+300+ya,x-10+xa,y+300+ya);
fill("red");
text("score:"+rs,x-50,y-200+40);
text("ammo:"+trueammo,x-50,y-200+65);
text("hits:"+hits,x-50,y-200+320);
text("miss:"+r,x-50,y-200+350);
fill("black");
rect(x-200,y,400,1);
rect(x,y-200,1,400);
noFill();
stroke("black");
strokeWeight(150);
ellipse(x,y,550,550);
sprite.debug=true;
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
