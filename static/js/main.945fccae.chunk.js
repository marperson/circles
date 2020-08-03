(this.webpackJsonpcircles=this.webpackJsonpcircles||[]).push([[0],{62:function(e,t,i){e.exports=i(75)},68:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(10),s=i.n(o),r=(i(67),i(125)),l=i(124),h=i(8),c=i(9),u=i(36),d=i(35),v=(i(68),i(116)),p=i(117),m=i(44),f=i(108),g=i(118),y=i(119),w=i(120),b=i(121),k=i(122),z=i(21),E=i(42),S=i(18),C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:0,height:0};Object(h.a)(this,e),this.position=void 0,this.size=void 0,this.isAlive=!0,this.speed=0,this.angle=0,this.acceleration=0,this.canCollide=!1,this.isFixedPosition=!1,this.zOrder=0,this.behaviors=[],this.position=t,this.size=i}return Object(c.a)(e,[{key:"addBehavior",value:function(e){e.init&&e.init(this),this.behaviors.push(e)}},{key:"paint",value:function(e,t,i){var n=this;this.behaviors.forEach((function(a){var o;return null===(o=a.paint)||void 0===o?void 0:o.call(a,n,e,t,i)}))}},{key:"updateModel",value:function(e){var t=this;this.behaviors.forEach((function(i){var n;return null===(n=i.updateModel)||void 0===n?void 0:n.call(i,t,e)}))}},{key:"handleKill",value:function(){var e=this;this.behaviors.forEach((function(t){var i;return null===(i=t.handleKill)||void 0===i?void 0:i.call(t,e)}))}},{key:"handleCollision",value:function(e){var t=this;this.behaviors.forEach((function(i){var n;return null===(n=i.handleCollision)||void 0===n?void 0:n.call(i,t,e)}))}}]),e}();function x(e){return{x:Math.round(e.x),y:Math.round(e.y)}}function O(e){return e.speed&&e.angle?{x:e.speed*Math.cos(e.angle),y:e.speed*Math.sin(e.angle)}:{x:0,y:0}}function M(e,t){var i=e.size.width,n=e.size.height;if((i|n)<0)return t;var a=t.size.width,o=t.size.height;if((a|o)<0)return e;var s=e.position.x,r=e.position.y;i+=s,n+=r;var l=t.position.x,h=t.position.y;return s>l&&(s=l),r>h&&(r=h),i<(a+=l)&&(i=a),n<(o+=h)&&(n=o),{position:{x:s,y:r},size:{width:i-=s,height:n-=r}}}function j(e,t){var i=e.size.width,n=e.size.height,a=t.size.width,o=t.size.height;if(a<=0||o<=0||i<=0||n<=0)return!1;var s=e.position.x,r=e.position.y,l=t.position.x,h=t.position.y;return o+=h,i+=s,n+=r,((a+=l)<l||a>s)&&(o<h||o>r)&&(i<s||i>l)&&(n<r||n>h)}function P(e,t){var i=e.indexOf(t,0);i>-1&&e.splice(i,1)}var L=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:0,height:0};return Object(h.a)(this,i),(n=t.call(this)).viewPort={x:0,y:0},n.controller=void 0,n.debug=!1,n.wrapAround=!1,n.sceneSpeed=1,n.modelSize=void 0,n.collisionListeners=[],n.sprites=[],n.count=0,n.totalTime=0,n.controller=e,n.modelSize=a,n}return Object(c.a)(i,[{key:"handleKeyPressed",value:function(e){}},{key:"handleMouseClick",value:function(e,t){}},{key:"handleTouchMove",value:function(e,t){}},{key:"getSpritesAtPoint",value:function(e){return this.sprites.filter((function(t){return function(e,t){return e.x>=t.position.x&&e.x<t.position.x+t.size.width&&e.y>=t.position.y&&e.y<t.position.y+t.size.height}(e,t)}))}},{key:"addSprite",value:function(e){this._validateSprite(e),e.zOrder||(e.zOrder=0),function(e,t,i){var n=0;if(e.length>0)for(var a=e.length;n<a;){var o=Math.floor((n+a)/2),s=i(e[o],t);if(s<0)n=o+1;else{if(!(s>0)){n=o;break}a=o}}e.splice(n,0,t)}(this.sprites,e,(function(e,t){return e.zOrder-t.zOrder})),e.priorPosition=e.position,e.handleCollision&&this.collisionListeners.push(e)}},{key:"removeSprite",value:function(e){var t;null===(t=e.handleKill)||void 0===t||t.call(e),this.debug&&console.log("Remove sprite (".concat(e.position.x,", ").concat(e.position.y,")")),P(this.sprites,e),P(this.collisionListeners,e)}},{key:"resetGame",value:function(){this.sprites=[],this.collisionListeners=[]}},{key:"updateModel",value:function(e){Object(E.a)(Object(S.a)(i.prototype),"updateModel",this).call(this,e),this.handleMovement(e)}},{key:"handleMovement",value:function(e){for(var t=e/1e3,i=this.sprites.slice();i.length;){var n=i.pop();if(n.isAlive){if(n.speed){var a={position:x(n.position),size:n.size},o=O(n),s=n.position.x+o.x*t*this.sceneSpeed,r=n.position.y+o.y*t*this.sceneSpeed,l=!1;if(this.wrapAround){var h=this.size.width,c=this.size.height;0!==this.modelSize.width&&(h=this.modelSize.width,c=this.modelSize.height),s<0?(s=h-n.size.width,l=!0):s+n.size.width>h&&(s=0,l=!0),r<0?(r=c-n.size.height,l=!0):r+n.size.height>c&&(r=0,l=!0)}n.priorPosition=a.position,n.position={x:s,y:r};var u={position:x(n.position),size:n.size};l||(u=M(a,u)),n.canCollide&&this._handleCollision(u,n),n.acceleration&&(Math.sign(n.acceleration+n.speed)!==Math.sign(n.speed)?n.speed=0:n.speed=n.speed+n.acceleration)}n.updateModel&&n.updateModel(e);try{this._validateSprite(n)}catch(d){console.log("Sprite position not valid.  Killing spite. "+d),n.isAlive=!1}n.isAlive||this.removeSprite(n)}else this.removeSprite(n)}}},{key:"_handleCollision",value:function(e,t){var i;if(t.handleCollision)for(var n=0;n<this.sprites.length;n++){var a=this.sprites[n];if(t!==a&&a.canCollide&&j(e,a)){t.handleCollision(a),i=a;break}}i||(i=t);for(var o=0;o<this.collisionListeners.length;o++){var s=this.collisionListeners[o];if(t!==s&&j(e,s)){s.handleCollision(t),i=s;break}}i.isAlive||this.removeSprite(i)}},{key:"paint",value:function(e,t,n){e={x:e.x+this.viewPort.x,y:e.y+this.viewPort.y},Object(E.a)(Object(S.a)(i.prototype),"paint",this).call(this,e,t,n);var a,o=0,s=Object(z.a)(this.sprites);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(!r.isAlive)throw Error("No Dead Sprites Should Make it to render step.\n"+r);var l=x(r.position);r.isFixedPosition||(l={x:l.x-e.x,y:l.y-e.y}),l.x>this.size.width||l.y>this.size.height||r.size.width+l.x<0||r.size.height+l.y<0||(r.paint(l,t,n),o++)}}catch(h){s.e(h)}finally{s.f()}this.debug&&(++this.count%300===0?(this.totalTime=n,this.count=1):this.totalTime+=n,t.fillStyle="red",t.fillText("FPS: ".concat(Math.round(1e3/(this.totalTime/++this.count))," Alive Sprites: ").concat(this.sprites.length," On Screen Sprites: ").concat(o),10,this.size.height-10))}},{key:"addSprites",value:function(e){var t=this;e.forEach((function(e){return t.addSprite(e)}))}},{key:"_validateSprite",value:function(e){if(e.position.x<0||e.position.y<0)throw Error("Sprite position less 0 (".concat(e.position.x,", ").concat(e.position.y,")"));if(0!==this.modelSize.width){if(e.position.x>=this.modelSize.width||e.position.y>=this.modelSize.height)throw Error("Sprite position(".concat(e.position.x,", ").concat(e.position.y,") > model(").concat(this.modelSize.width,",").concat(this.modelSize.height,")"))}else if(e.position.x>=this.size.width||e.position.y>=this.size.height)throw Error("Sprite position(".concat(e.position.x,", ").concat(e.position.y,")  > screen(").concat(this.size.width,",").concat(this.size.height,") "));if(e.size.width<=0||e.size.height<=0)throw Error("Sprite size too small (".concat(e.size.width,", ").concat(e.size.height,")"));if(void 0!==e.speed&&void 0===e.angle||void 0===e.speed&&void 0!==e.angle)throw Error("Either speed(".concat(e.speed,") and angle(").concat(e.angle,") are both defined or both undefined."))}}]),i}(C),I=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object(h.a)(this,e),this.rows=void 0,this.columns=void 0,this.image=void 0,this.size=void 0,this.image=t,this.rows=i,this.columns=n,this.size={width:Math.floor(this.image.width/this.columns),height:Math.floor(this.image.height/this.rows)}}return Object(c.a)(e,[{key:"paint",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(n<1||n>this.rows||a<1||a>this.columns)throw Error("Row and columns of sprite need to be in bounds (".concat(n,",").concat(a,")"));var o=this.size.width,s=this.size.height;if(i&&(t.translate(e.x+o/2,e.y+s/2),t.rotate(i),e.x=0-o/2,e.y=0-s/2),1===this.columns&&1===this.rows)t.drawImage(this.image,e.x,e.y,o,s);else{var r=Math.floor(this.image.width*((a-1)/this.columns)),l=Math.floor(this.image.height*((n-1)/this.rows));t.drawImage(this.image,r,l,o,s,e.x,e.y,o,s)}i&&t.setTransform(1,0,0,1,0,0)}},{key:"frameCount",get:function(){return this.rows*this.columns}}]),e}(),A=function(){function e(t){Object(h.a)(this,e),this.spriteSheet=void 0,this.framesPerSecond=10,this.age=0,this.animateOnce=!1,this.rotate=!1,this.spriteSheet=t}return Object(c.a)(e,[{key:"init",value:function(e){e.size=this.spriteSheet.size}},{key:"paint",value:function(e,t,i,n){var a;if(this.framesPerSecond&&0!==this.spriteSheet.frameCount){var o=1/this.framesPerSecond;a=Math.floor(this.age/o%this.spriteSheet.frameCount)}else a=0;var s=Math.floor(a%this.spriteSheet.columns)+1,r=Math.floor(a/this.spriteSheet.columns)+1,l=e.angle?e.angle:0;this.spriteSheet.paint(t,i,l,r,s)}},{key:"updateModel",value:function(e,t){var i=t/1e3;this.age+=i,this.animateOnce&&this.age>this.spriteSheet.frameCount/this.framesPerSecond&&(e.isAlive=!1)}}]),e}();function B(e,t,i){return{position:e,size:t,isAlive:!0,paint:function(i,n,a){n.fillStyle="\trgb(50,50,50)",n.fillRect(e.x,e.y,t.width,t.height)},handleCollision:function(e){var t=O(e);i?(t.x>0?e.position.x=this.position.x-e.size.width:e.position.x=this.position.x+this.size.width,e.position.y=e.priorPosition.y,e.angle=Math.PI-e.angle+.2*(Math.random()-.5)):(t.y>0?e.position.y=this.position.y-e.size.height:e.position.y=this.position.y+this.size.height,e.position.x=e.priorPosition.x,e.angle=-1*e.angle+.2*(Math.random()-.5))}}}var _=function(){function e(){Object(h.a)(this,e),this.preloadImages=[{name:"ball",src:"/circles/assets/images/ball-sheet2.png"}],this.preloadSounds=[{name:"boop",src:"/circles/assets/sounds/boop.m4a"},{name:"error",src:"/circles/assets/sounds/error.m4a"}]}return Object(c.a)(e,[{key:"init",value:function(e){var t=new L(e);e.scene=t;var i=0;e.publishEvent({type:"score",value:i}),t.handleMouseClick=function(n,a){var o=t.getSpritesAtPoint({x:n,y:a});o.length?o.filter((function(e){return e.canCollide})).forEach((function(n){t.removeSprite(n),e.publishEvent({type:"score",value:i++}),e.soundEffects.play("boop")})):(e.publishEvent({type:"score",value:i--}),e.soundEffects.play("error"))},t.wrapAround=!1,t.paintBackground=function(e){e.fillStyle="black",e.fillRect(0,0,t.size.width,t.size.height)};var n=t.size;t.addSprite(B({x:0,y:0},{width:n.width-4,height:4},!1)),t.addSprite(B({x:0,y:n.height-4},{width:n.width,height:4},!1)),t.addSprite(B({x:0,y:0},{width:4,height:n.height-4},!0)),t.addSprite(B({x:n.width-4,y:0},{width:4,height:n.height-4},!0));for(var a=e.imagePreloader.getImageFromCache("ball"),o=new I(a,4,8),s=o.size.width/2,r=function(e,t){return Math.random()*(t-e)+e},l=0;l<30;l++){var h=new C({x:r(n.width-2*(s+4),s+4),y:r(n.height-2*(s+4),s+4)});h.isAlive=!0,h.speed=250*Math.random()+100,h.angle=Math.random()*Math.PI*2,h.zOrder=10*Math.random()-5,h.canCollide=!0,h.addBehavior(new A(o)),h.size={width:h.size.width-2,height:h.size.height-2},t.addSprite(h)}}}]),e}();var R=function(){function e(){Object(h.a)(this,e),this.imageCache=new Map,this.loadsCompleted=0,this.nLoads=0,this.loadCallback=void 0}return Object(c.a)(e,[{key:"registerCallback",value:function(e){this.loadsCompleted===this.nLoads&&e(),this.loadCallback=e}},{key:"getImageFromCache",value:function(e){var t=this.imageCache.get(e);if(this.nLoads++,!t)throw Error("unable to load image: "+e);return t}},{key:"preLoadImages",value:function(e){var t,i=Object(z.a)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value,a=new Image;this.nLoads++,a.src=n.src,a.onload=this._createOnLoad(a,n.name)}}catch(o){i.e(o)}finally{i.f()}}},{key:"_createOnLoad",value:function(e,t){var i=this;return function(){var n=function(e){var t=document.createElement("canvas"),i=t.getContext("2d");t.height=e.height,t.width=e.width,i.drawImage(e,0,0);for(var n,a=i.getImageData(0,0,e.width,e.height),o=a.data,s=0,r=0,l=0,h=0,c=0,u=o.length;c<u;c+=4){var d=o[c],v=o[c+1],p=o[c+2];0===c&&(n=[d,v,p]),d===n[0]&&v===n[1]&&p===n[2]&&(o[c]=s,o[c+1]=r,o[c+2]=l,o[c+3]=h)}i.putImageData(a,0,0);var m=document.createElement("img");return m.src=t.toDataURL("image/png"),m}(e);n.onload=function(){i.imageCache.set(t,n),++i.loadsCompleted===i.nLoads&&i.loadCallback&&i.loadCallback()}}}}]),e}(),F=i(41),T=function(){function e(t){Object(h.a)(this,e),this.sounds=new Map,this.rate=1,this._mute=!1;var i,n=Object(z.a)(t);try{for(n.s();!(i=n.n()).done;){var a=i.value;this.sounds.set(a.name,new F.Howl({src:a.src,preload:!0}))}}catch(o){n.e(o)}finally{n.f()}this.rate=1,this._mute=!1}return Object(c.a)(e,[{key:"play",value:function(e){var t=this.sounds.get(e);t?(t.rate(this.rate),t.play()):console.log("Sound not found! ".concat(e))}},{key:"mute",get:function(){return this._mute},set:function(e){F.Howler.mute(e),this._mute=e}}]),e}(),D=function(){function e(t){Object(h.a)(this,e),this.debug=!1,this.keysPressed=new Map,this.imagePreloader=void 0,this.soundEffects=void 0,this.canvas=void 0,this.isShutdown=!1,this.pause=!1,this._mute=!1,this.readyCallback=void 0,this._scene=void 0,this.gameInitializer=void 0,this.gameEventListeners=[],this.gameInitializer=t,this.soundEffects=new T(t.preloadSounds||[]),this.imagePreloader=new R,this.imagePreloader.preLoadImages(t.preloadImages)}return Object(c.a)(e,[{key:"init",value:function(e,t){var i=this;this.readyCallback=t,this.canvas=e,this.imagePreloader.registerCallback((function(){i._handleImagesLoaded()}))}},{key:"restart",value:function(){var e=this.canvas;if(e.width=window.innerWidth,e.height=window.innerHeight,this.gameInitializer.init(this),!this.scene)throw Error("Game Initializer must set scene.")}},{key:"transition",value:function(e,t){var i=this;e.addBehavior({handleKill:function(){i.scene=t}}),this.scene!==e&&(this.scene=e)}},{key:"publishEvent",value:function(e){this.gameEventListeners.forEach((function(t){return t(e)}))}},{key:"subscribeEvent",value:function(e){this.gameEventListeners.push(e)}},{key:"_handleImagesLoaded",value:function(){var e=this,t=this.canvas;document.addEventListener("keydown",(function(t){e.keysPressed.set(t.key,!0)})),document.addEventListener("keyup",(function(t){e.keysPressed.delete(t.key)})),t.addEventListener("mousedown",(function(i){var n=t.getBoundingClientRect(),a=i.clientX-n.left,o=i.clientY-n.top;i.preventDefault(),e.debug&&console.log("MouseDown Event: (".concat(a,",").concat(o,")")),e.pause||e.scene.handleMouseClick(a,o)})),document.addEventListener("touchmove",(function(i){var n=t.getBoundingClientRect(),a=i.targetTouches[0],o=a.clientX-n.left,s=a.clientY-n.top;i.preventDefault(),e.debug&&console.log("TouchMove Event: (".concat(o,",").concat(s,")")),e.pause||e.scene.handleTouchMove(o,s)}),!1);var i=0;this.restart(),requestAnimationFrame((function n(a){if(!e.isShutdown){var o=i?a-i:0;i=a,(o>100||e.pause)&&(o=0);var s=t.getContext("2d"),r=t.width,l=t.height;r===window.innerWidth&&l===window.innerHeight||e.restart(),e.keysPressed.forEach((function(t,i){return e.scene.handleKeyPressed(i)})),s.save(),e.paintBackground(s),e.scene.paint({x:0,y:0},s,o),e.scene.updateModel(o),s.restore(),requestAnimationFrame(n)}})),this.readyCallback()}},{key:"paintBackground",value:function(e){this.scene.paintBackground?this.scene.paintBackground(e):(e.fillStyle="white",e.fillRect(0,0,this.scene.size.width,this.scene.size.height))}},{key:"scene",set:function(e){this.debug&&console.log("SetScene: ".concat(e.constructor.name)),e.debug=this.debug;var t=this.canvas;e.size={width:t.width,height:t.height},this._scene=e},get:function(){return this._scene}},{key:"mute",set:function(e){this._mute=e,this.soundEffects.mute=e},get:function(){return this._mute}}]),e}(),K=i(127),N=i(4),G=i(123),W=i(53),H=i(115),q=i(126),J=i(114),U=i(111),X=i(112),Y=i(110),$=i(107),Q=i(50),V=i(105),Z=i(113),ee=i(109),te=Object(V.a)((function(e){return Object(K.a)({infoButton:{marginRight:e.spacing(1)}})}));function ie(){var e=a.a.useState(!1),t=Object(W.a)(e,2),i=t[0],n=t[1],o=te(),s=Object(Q.a)(),r=Object($.a)(s.breakpoints.down("sm")),l=function(){n(!1)};return a.a.createElement("div",null,a.a.createElement(f.a,{edge:"start",className:o.infoButton,onClick:function(){n(!0)},color:"primary","aria-label":"menu"},a.a.createElement(ee.a,null)),a.a.createElement(q.a,{fullScreen:r,open:i,onClose:l,"aria-labelledby":"responsive-dialog-title"},a.a.createElement(Y.a,{id:"responsive-dialog-title"},"Cicles"),a.a.createElement(U.a,null,a.a.createElement(X.a,null,"A simple 2D game library for JavaScript to teach my kids programming. A demo space game implemented using the library.",a.a.createElement("br",null),a.a.createElement(Z.a,{component:"button",variant:"body2",onClick:function(){return window.open("https://github.com/nickzinn/circles")}},"Github Repository"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(Z.a,{variant:"body2"},"nickzinn@gmail.com"))),a.a.createElement(J.a,null,a.a.createElement(H.a,{onClick:l,color:"primary",autoFocus:!0},a.a.createElement("b",null,"CLOSE")))))}var ne=Object(N.a)((function(e){return Object(K.a)({root:{flexGrow:1},controlButton:{},score:{marginRight:e.spacing(2)},title:{flexGrow:1}})}))(function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(h.a)(this,i),(n=t.call(this,e)).canvasRef=a.a.createRef(),n.gameController=void 0,n.state=void 0,n.gameController=new D(new _),n.gameController.debug=!0,n.state={score:0,imagesLoaded:!1,pause:!1,mute:!1},n}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=this.canvasRef.current;this.gameController.init(t,(function(){return e.setState({imagesLoaded:!0})})),this.gameController.subscribeEvent((function(t){"score"===t.type&&e.setState({score:t.value})}))}},{key:"handleRestart",value:function(e){e.stopPropagation(),this.gameController.restart()}},{key:"handlePause",value:function(e){e.stopPropagation(),this.gameController.pause=!this.gameController.pause,this.setState({pause:this.gameController.pause})}},{key:"handleMute",value:function(e){e.stopPropagation(),this.gameController.mute=!this.gameController.mute,this.setState({mute:this.gameController.mute})}},{key:"componentWillUnmount",value:function(){this.gameController.isShutdown=!0}},{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{position:"static",style:{background:"transparent",boxShadow:"none"}},a.a.createElement(p.a,null,a.a.createElement(ie,null),a.a.createElement(m.a,{variant:"h6",color:"primary",className:t.title},"Circles"),a.a.createElement(m.a,{variant:"h6",color:"primary",className:t.score},"Score: ",this.state.score),a.a.createElement(f.a,{edge:"start",className:t.controlButton,onClick:function(t){return e.handlePause(t)},color:"primary","aria-label":"menu"},this.state.pause?a.a.createElement(g.a,null):a.a.createElement(y.a,null)),a.a.createElement(f.a,{edge:"start",className:t.controlButton,onClick:function(t){return e.handleRestart(t)},color:"primary","aria-label":"menu"},a.a.createElement(w.a,null)),a.a.createElement(f.a,{edge:"start",className:t.controlButton,onClick:function(t){return e.handleMute(t)},color:"primary","aria-label":"menu"},this.state.mute?a.a.createElement(b.a,null):a.a.createElement(k.a,null)))),!this.state.imagesLoaded&&a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{variant:"h2",gutterBottom:!0},"Loading images..."),a.a.createElement(G.a,null)),a.a.createElement("canvas",{id:"Canvas",ref:this.canvasRef}))}}]),i}(a.a.Component));var ae=function(){return a.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(74);var oe=i(52),se=Object(oe.a)({typography:{fontFamily:"Electrolize"},overrides:{MuiCssBaseline:{"@global":{body:{width:"100%",height:"100%",margin:"0"}}}}});s.a.render(a.a.createElement(l.a,{theme:se},a.a.createElement(r.a,null),a.a.createElement(ae,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.945fccae.chunk.js.map