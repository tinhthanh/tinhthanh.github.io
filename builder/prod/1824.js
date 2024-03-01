"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1824],{1824:(w,g,r)=>{r.r(g),r.d(g,{LoginComponent:()=>y});var n=r(4496),d=r(1368),a=r(6504);const f=["*"];function h(e,_){1&e&&(n.I0R(0,"div",24),n.wR5(1,"div",25)(2,"div",26),n.C$Y())}const u=e=>({"right-panel-active":e}),c=e=>({submited:e}),p=e=>({loading:e});let m=(()=>{class e{static#n=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275cmp=n.In1({type:e,selectors:[["vg-ui-bg"]],standalone:!0,features:[n.UHJ],ngContentSelectors:f,decls:14,vars:0,consts:[[1,"area"],[1,"circles"],[1,"context"]],template:function(o,t){1&o&&(n.kPM(),n.I0R(0,"div",0)(1,"ul",1),n.wR5(2,"li")(3,"li")(4,"li")(5,"li")(6,"li")(7,"li")(8,"li")(9,"li")(10,"li")(11,"li"),n.C$Y()(),n.I0R(12,"div",2),n._Xx(13),n.C$Y())},styles:[".context[_ngcontent-%COMP%]{width:100%;position:absolute;top:0}.context[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#ffffff80;font-size:50px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.area[_ngcontent-%COMP%]{background-color:#4158d0;background-image:linear-gradient(43deg,#4158d0,#c850c0 46%,#ffcc70);width:100%;height:100vh}.circles[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:absolute;display:block;list-style:none;width:20px;height:20px;background:#ffffff1a;box-shadow:0 8px 32px #1f268733;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:80px;border:1px solid rgba(255,255,255,.18);animation:_ngcontent-%COMP%_animate 25s linear infinite;bottom:-150px}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){left:25%;width:80px;height:80px;animation-delay:0s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:10%;width:20px;height:20px;animation-delay:2s;animation-duration:12s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:70%;width:20px;height:20px;animation-delay:4s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:65%;width:20px;height:20px;animation-delay:0s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:75%;width:110px;height:110px;animation-delay:3s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){left:35%;width:150px;height:150px;animation-delay:7s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8){left:50%;width:25px;height:25px;animation-delay:15s;animation-duration:45s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9){left:20%;width:15px;height:15px;animation-delay:2s;animation-duration:35s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10){left:85%;width:150px;height:150px;animation-delay:0s;animation-duration:11s}@keyframes _ngcontent-%COMP%_animate{0%{transform:translateY(0) rotate(0);opacity:1;border-radius:0}to{transform:translateY(-1000px) rotate(720deg);opacity:0;border-radius:50%}}"],changeDetection:0})}return e})(),b=(()=>{class e{set vgLoading(i){this.loading.set(!!i)}constructor(i){this.fb=i,this.loading=(0,n.OCB)(!1),this.isRightPanelActive=(0,n.OCB)(!1),this.vgSignUp=new n._w7,this.vgSignIn=new n._w7}ngOnInit(){this.signUpForm=this.fb.group({name:["",[a.AQ.required,a.AQ.minLength(2)]],email:["",[a.AQ.required,a.AQ.email]],password:["",[a.AQ.required,a.AQ.minLength(6)]]}),this.signInForm=this.fb.group({email:["",[a.AQ.required,a.AQ.email]],password:["",[a.AQ.required,a.AQ.minLength(6)]]})}signUp(){this.signUpForm.valid&&this.vgSignUp.emit(this.signUpForm.getRawValue())}signIn(){this.signInForm.valid&&this.vgSignIn.emit(this.signInForm.getRawValue())}togglePanel(i){this.isRightPanelActive.set(i)}static#n=this.\u0275fac=function(o){return new(o||e)(n.GI1(a.im))};static#t=this.\u0275cmp=n.In1({type:e,selectors:[["vg-login"]],inputs:{vgLoading:"vgLoading"},outputs:{vgSignUp:"vgSignUp",vgSignIn:"vgSignIn"},standalone:!0,features:[n.UHJ],decls:59,vars:18,consts:[[1,"login-page"],[1,"container",3,"ngClass"],[1,"form-container","sign-up-container"],[3,"formGroup","ngClass","ngSubmit"],["ngFormUp","ngForm"],[1,"social-container"],[1,"social"],[1,"fab","fa-facebook-f"],[1,"fab","fa-google-plus-g"],[1,"fab","fa-linkedin-in"],["type","text","placeholder","Name","formControlName","name"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],[1,"btn-container"],["label","Sign Up",3,"ngClass"],[1,"form-container","sign-in-container"],["ngSignInForm","ngForm"],["label","Sign In",3,"ngClass"],[1,"overlay-container"],[1,"overlay"],[1,"overlay-panel","overlay-left"],[1,"ghost",3,"click"],[1,"overlay-panel","overlay-right"],["class","loader"],[1,"loader"],[1,"loader_cube","loader_cube--color"],[1,"loader_cube","loader_cube--glowing"]],template:function(o,t){if(1&o&&(n.I0R(0,"vg-ui-bg")(1,"div",0)(2,"div",1)(3,"div",2)(4,"form",3,4),n.qCj("ngSubmit",function(){return t.signUp()}),n.I0R(6,"h1"),n.OEk(7,"Create Account"),n.C$Y(),n.I0R(8,"div",5)(9,"a",6),n.wR5(10,"i",7),n.C$Y(),n.I0R(11,"a",6),n.wR5(12,"i",8),n.C$Y(),n.I0R(13,"a",6),n.wR5(14,"i",9),n.C$Y()(),n.I0R(15,"span"),n.OEk(16,"or use your email for registration"),n.C$Y(),n.wR5(17,"input",10)(18,"input",11)(19,"input",12),n.I0R(20,"div",13),n.wR5(21,"button",14),n.C$Y()()(),n.I0R(22,"div",15)(23,"form",3,16),n.qCj("ngSubmit",function(){return t.signIn()}),n.I0R(25,"h1"),n.OEk(26,"Sign in"),n.C$Y(),n.I0R(27,"div",5)(28,"a",6),n.wR5(29,"i",7),n.C$Y(),n.I0R(30,"a",6),n.wR5(31,"i",8),n.C$Y(),n.I0R(32,"a",6),n.wR5(33,"i",9),n.C$Y()(),n.I0R(34,"span"),n.OEk(35,"or use your account"),n.C$Y(),n.wR5(36,"input",11)(37,"input",12),n.I0R(38,"a"),n.OEk(39,"Forgot your password?"),n.C$Y(),n.I0R(40,"div",13),n.wR5(41,"button",17),n.C$Y()()(),n.I0R(42,"div",18)(43,"div",19)(44,"div",20)(45,"h1"),n.OEk(46,"Welcome Back!"),n.C$Y(),n.I0R(47,"p"),n.OEk(48,"To keep connected with us, please login with your personal info"),n.C$Y(),n.I0R(49,"button",21),n.qCj("click",function(){return t.togglePanel(!1)}),n.OEk(50,"Sign In"),n.C$Y()(),n.I0R(51,"div",22)(52,"h1"),n.OEk(53,"Hello, Friend!"),n.C$Y(),n.I0R(54,"p"),n.OEk(55,"Enter your personal details and start the journey with us"),n.C$Y(),n.I0R(56,"button",21),n.qCj("click",function(){return t.togglePanel(!0)}),n.OEk(57,"Sign Up"),n.C$Y()()()()(),n.yuY(58,h,3,0,"div",23),n.C$Y()()),2&o){const s=n.Gew(5),l=n.Gew(24);n.yG2(2),n.E7m("ngClass",n.S45(8,u,t.isRightPanelActive())),n.yG2(2),n.E7m("formGroup",t.signUpForm)("ngClass",n.S45(10,c,s.submitted)),n.yG2(17),n.E7m("ngClass",n.S45(12,p,t.loading())),n.yG2(2),n.E7m("formGroup",t.signInForm)("ngClass",n.S45(14,c,l.submitted)),n.yG2(18),n.E7m("ngClass",n.S45(16,p,t.loading())),n.yG2(17),n.C0Y(58,t.loading()?58:-1)}},dependencies:[d.QF,a.sl,a.sz,a.ot,a.ue,a.u,a.uW,a.Wo,m],styles:[':host{width:100%;height:100%}*{box-sizing:border-box}.login-page{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh}.login-page h1{font-weight:700;margin:0}.login-page h2{text-align:center}.login-page p{font-size:14px;font-weight:100;line-height:20px;letter-spacing:.5px;margin:20px 0 30px}.login-page span{font-size:12px}.login-page a{color:#333;font-size:14px;text-decoration:none;margin:15px 0}.login-page button{border-radius:20px;border:1px solid #FF4B2B;background-color:#ff4b2b;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in;cursor:pointer}.login-page button:active{transform:scale(.95)}.login-page button:focus{outline:none}.login-page button.ghost{background-color:transparent;border-color:#fff}.login-page form{background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 50px;height:100%;text-align:center}.login-page input{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%}.login-page .container{background-color:#fff;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px}.login-page .form-container{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.login-page .sign-in-container{left:0;width:50%;z-index:2}.login-page .container.right-panel-active .sign-in-container{transform:translate(100%)}.login-page .sign-up-container{left:0;width:50%;opacity:0;z-index:1}.login-page .container.right-panel-active .sign-up-container{transform:translate(100%);opacity:1;z-index:5;animation:show .6s}@keyframes show{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.login-page .overlay-container{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100}.login-page .container.right-panel-active .overlay-container{transform:translate(-100%)}.login-page .overlay{background:#ff416c;background:-webkit-linear-gradient(to right,#FF4B2B,#fac27a);background:linear-gradient(to right,#ff4b2b,#fac27a);background-repeat:no-repeat;background-size:cover;background-position:0 0;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translate(0);transition:transform .6s ease-in-out}.login-page .container.right-panel-active .overlay{transform:translate(50%)}.login-page .overlay-panel{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translate(0);transition:transform .6s ease-in-out}.login-page .overlay-left{transform:translate(-20%)}.login-page .container.right-panel-active .overlay-left{transform:translate(0)}.login-page .overlay-right{right:0;transform:translate(0)}.login-page .container.right-panel-active .overlay-right{transform:translate(20%)}.login-page .social-container{margin:20px 0}.login-page .social-container a{border:1px solid #DDDDDD;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px}.login-page footer{background-color:#222;color:#fff;font-size:14px;bottom:0;position:fixed;left:0;right:0;text-align:center;z-index:999}.login-page footer p{margin:10px 0}.login-page footer i{color:red}.loader{width:150px;height:150px;position:relative;display:flex;align-items:center;justify-content:center;position:fixed;z-index:100}.loader_cube{position:absolute;width:100%;height:100%;border-radius:30px}.loader_cube--glowing{z-index:2;background-color:#fff3;border:2px solid rgba(255,255,255,.3)}.loader_cube--color{z-index:1;filter:blur(2px);background:linear-gradient(135deg,#1afbf0,#da00ff);animation:loadtwo 2.5s ease-in-out infinite}@keyframes loadtwo{50%{transform:rotate(-80deg)}}.btn-container{height:40px}.btn-container button{transition:all .25s ease}.btn-container button:hover{color:#fff}.btn-container button:after{content:attr(label)}.btn-container button:active,.btn-container button:focus{outline:none}.btn-container .loading{border-radius:50%;padding:0;width:50px;height:50px;border:3px solid #cccccc;border-left:3px solid #9156c7;animation:rotate-loader 1s .25s linear infinite}.btn-container .loading:hover{background-color:#fff}.btn-container .loading:after{content:""}@keyframes rotate-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.submited input.ng-invalid{border:1px solid orangered!important}\n'],encapsulation:3,changeDetection:0})}return e})();var v=r(4940),x=r(9340),C=r(508);let y=(()=>{class e{constructor(){this.router=(0,n.uUt)(C.Y),this.auth=(0,n.uUt)(x.o),this.loading=(0,n.OCB)(!1),this.isToastOpen=(0,n.OCB)(!1),this.message=(0,n.OCB)("")}signUp(i){console.log(i),this.loading.set(!0),this.auth.register({id:"",displayName:i.name||"",email:i.email,password:i.password}).then(t=>{console.log(t),this.loading.set(!1),200!==t.status?(this.setOpen(!0),t.errors&&this.message.set(t.errors.message)):this.router.push("home",{})})}setOpen(i){this.isToastOpen.set(i)}signIn(i){this.loading.set(!0),this.auth.login(i.email,i.password).then(o=>{console.log(o),this.loading.set(!1),200!==o.status?(this.setOpen(!0),o.errors&&this.message.set(o.errors.message)):this.router.push("home",{})})}static#n=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275cmp=n.In1({type:e,selectors:[["app-login"]],standalone:!0,features:[n.UHJ],decls:2,vars:5,consts:[[3,"color","isOpen","message","duration","didDismiss"],[3,"vgLoading","vgSignIn","vgSignUp"]],template:function(o,t){1&o&&(n.I0R(0,"ion-toast",0),n.qCj("didDismiss",function(){return t.setOpen(!1)}),n.C$Y(),n.I0R(1,"vg-login",1),n.qCj("vgSignIn",function(l){return t.signIn(l)})("vgSignUp",function(l){return t.signUp(l)}),n.C$Y()),2&o&&(n.E7m("color","danger")("isOpen",t.isToastOpen())("message",t.message())("duration",5e3),n.yG2(),n.E7m("vgLoading",t.loading()))},dependencies:[b,v.U1],encapsulation:3,changeDetection:0})}return e})()}}]);