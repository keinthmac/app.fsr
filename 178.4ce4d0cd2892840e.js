"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[178],{3178:(U,g,o)=>{o.r(g),o.d(g,{PlayerModule:()=>_,playerRouting:()=>I});var y=o(9808),s=o(3075),T=o(3844),t=o(5e3),f=o(325),h=o(6581),m=o(2081),p=o(7322),Z=o(7531),u=o(7423),P=o(5245),a=o(2494);function v(e,l){if(1&e&&(t.TgZ(0,"fuse-alert",31),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function N(e,l){1&e&&t._uU(0,"Update your Nickname")}function J(e,l){1&e&&t._uU(0,"Create your Password")}function w(e,l){1&e&&t._UZ(0,"mat-icon",15),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function E(e,l){1&e&&t._UZ(0,"mat-icon",15),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function F(e,l){1&e&&t._UZ(0,"mat-icon",15),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function M(e,l){1&e&&t._UZ(0,"mat-icon",15),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function W(e,l){1&e&&t._uU(0,"Done")}let D=(()=>{class e{constructor(r,n,i){this._activatedRoute=r,this._playerService=n,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1,this.isLinear=!1}ngOnInit(){var r;this._activatedRoute.data.subscribe(n=>{var i,c;this._playerService.playerInfo=null===(i=null==n?void 0:n.PlayerData)||void 0===i?void 0:i.userInfo,this.playerData=null===(c=null==n?void 0:n.PlayerData)||void 0===c?void 0:c.userInfo}),this.firstFormGroup=this._formBuilder.group({nickName:[null===(r=this.playerData)||void 0===r?void 0:r.nickName,s.kI.required]}),this.secondFormGroup=this._formBuilder.group({password:["",s.kI.compose([s.kI.required,s.kI.minLength(4)])],confirmPassword:["",s.kI.compose([s.kI.required,s.kI.minLength(4)])]}),this.secondFormGroup.get("password").valueChanges.subscribe(n=>{this.passwordChange()}),this.secondFormGroup.get("confirmPassword").valueChanges.subscribe(n=>{this.passwordChange()})}passwordChange(){var r=this.secondFormGroup.get("password").value,n=this.secondFormGroup.get("confirmPassword").value;this.secondFormGroup.controls.confirmPassword.setErrors(r!=n?{invalid:!0}:null)}submitSetup(){}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(f.gz),t.Y36(h.l),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-welcome-player"]],decls:69,vars:18,consts:[[1,"flex","flex-col","items-center","justify-center","flex-auto","min-w-0"],[1,"flex","items-center","justify-end","w-full","sm:w-auto","py-4","px-4","p-4","rounded-2xl","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","p-2","sm:mx-0","h-150","max-h-150","max-w-120","w-100"],[1,"flex","flex-col","items-center","justify-center","mt-6","text-2xl","font-semibold","tracking-tight","leading-tight"],[1,"flex","flex-col","items-center","justify-center","mt-2","font-medium"],[1,"text-center"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"w-full","h-150","max-h-150"],["orientation","vertical",1,"w-full","bg-transparent",3,"linear"],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],["appearance","fill",1,"w-full"],["matInput","","placeholder","Nickname","formControlName","nickName","required",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-row","items-end","justify-end"],["mat-flat-button","","matStepperNext","",3,"color"],["matInput","","formControlName","password","type","password","placeholder","Password","required",""],["pinField",""],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["matInput","","formControlName","confirmPassword","type","password","placeholder","Confirm your Password","required",""],["confirmPinField",""],["mat-button","","matStepperPrevious","",3,"color"],[1,"w-full"],[1,"relative","flex","flex-col","-left-6","z-49","bg-gray-100"],[1,"text-center","font-semibold","text-lg"],[1,"text-center","font-medium","text-md","mt-2","break-words","whitespace-pre-line"],[1,"text-red-400","text-md"],[1,"text-blue-400","text-md"],["mat-flat-button","",3,"color","click"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"]],template:function(r,n){if(1&r){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t._uU(7,"Please fill up the following forms to complete your account registration"),t.qZA(),t.qZA(),t.YNc(8,v,2,5,"fuse-alert",6),t.TgZ(9,"div",7),t.TgZ(10,"mat-stepper",8),t.TgZ(11,"mat-step",9),t.TgZ(12,"form",10),t.YNc(13,N,1,0,"ng-template",11),t.TgZ(14,"mat-form-field",12),t.TgZ(15,"mat-label"),t._uU(16,"Nickname"),t.qZA(),t._UZ(17,"input",13),t.TgZ(18,"button",14),t.NdJ("click",function(){return n.firstFormGroup.get("nickName").setValue("")}),t._UZ(19,"mat-icon",15),t.qZA(),t.qZA(),t.TgZ(20,"div",16),t.TgZ(21,"button",17),t._uU(22,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"mat-step",9),t.TgZ(24,"form",10),t.YNc(25,J,1,0,"ng-template",11),t.TgZ(26,"mat-form-field",12),t.TgZ(27,"mat-label"),t._uU(28,"Password"),t.qZA(),t._UZ(29,"input",18,19),t.TgZ(31,"button",14),t.NdJ("click",function(){t.CHM(i);const d=t.MAs(30);return d.type="password"===d.type?"text":"password"}),t.YNc(32,w,1,1,"mat-icon",20),t.YNc(33,E,1,1,"mat-icon",20),t.qZA(),t.TgZ(34,"mat-error"),t._uU(35," Password must be at least 4 characters. "),t.qZA(),t.qZA(),t.TgZ(36,"mat-form-field",12),t.TgZ(37,"mat-label"),t._uU(38,"Re-enter your Password"),t.qZA(),t._UZ(39,"input",21,22),t.TgZ(41,"button",14),t.NdJ("click",function(){t.CHM(i);const d=t.MAs(40);return d.type="password"===d.type?"text":"password"}),t.YNc(42,F,1,1,"mat-icon",20),t.YNc(43,M,1,1,"mat-icon",20),t.qZA(),t.TgZ(44,"mat-error"),t._uU(45," Passwords do not match. "),t.qZA(),t.qZA(),t.TgZ(46,"div",16),t.TgZ(47,"button",23),t._uU(48,"Back"),t.qZA(),t.TgZ(49,"button",17),t._uU(50,"Next"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(51,"mat-step",24),t.YNc(52,W,1,0,"ng-template",11),t.TgZ(53,"div",25),t.TgZ(54,"span",26),t._uU(55),t.qZA(),t.TgZ(56,"span",27),t._uU(57,"You can still review your changes before you submit by clicking the "),t.TgZ(58,"strong",28),t._uU(59,"Back"),t.qZA(),t._uU(60," button, or if you are sure about it, you can hit "),t.TgZ(61,"strong",29),t._uU(62,"Submit"),t.qZA(),t._uU(63,"."),t.qZA(),t.qZA(),t.TgZ(64,"div",16),t.TgZ(65,"button",23),t._uU(66,"Back"),t.qZA(),t.TgZ(67,"button",30),t.NdJ("click",function(){return n.submitSetup()}),t._uU(68,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&r){const i=t.MAs(30),c=t.MAs(40);t.xp6(4),t.hij("Welcome ",n.playerData.nickName,"!"),t.xp6(4),t.Q6J("ngIf",n.showAlert),t.xp6(2),t.Q6J("linear",!0),t.xp6(1),t.Q6J("stepControl",n.firstFormGroup),t.xp6(1),t.Q6J("formGroup",n.firstFormGroup),t.xp6(7),t.Q6J("svgIcon","heroicons_solid:x-circle"),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("stepControl",n.secondFormGroup),t.xp6(1),t.Q6J("formGroup",n.secondFormGroup),t.xp6(8),t.Q6J("ngIf","password"===i.type),t.xp6(1),t.Q6J("ngIf","text"===i.type),t.xp6(9),t.Q6J("ngIf","password"===c.type),t.xp6(1),t.Q6J("ngIf","text"===c.type),t.xp6(4),t.Q6J("color","warn"),t.xp6(2),t.Q6J("color","primary"),t.xp6(6),t.hij("You are all set ",n.firstFormGroup.get("nickName").value,"!"),t.xp6(10),t.Q6J("color","warn"),t.xp6(2),t.Q6J("color","primary")}},directives:[y.O5,m.Vq,m.C0,s._Y,s.JL,s.sg,m.VY,p.KE,p.hX,Z.Nt,s.Fj,s.JJ,s.u,s.Q7,u.lW,p.R9,P.Hw,m.Ic,p.TO,m.fd,a.W],encapsulation:2,data:{animation:T.b}}),e})();var x=o(7021),C=o(1086),G=o(7545);let A=(()=>{class e{constructor(r,n){this._playerService=r,this._router=n}_check(){return this._playerService.check().pipe((0,G.w)(r=>r?(0,C.of)(!0):(this._router.navigate(["sign-in"]),(0,C.of)(!1))))}canActivate(r,n){return this._check()}canActivateChild(r,n){return this._check()}canLoad(r,n){return this._check()}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(h.l),t.LFG(f.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=o(2340),L=o(567),O=o(4850),S=o(520);let R=(()=>{class e{constructor(r){this._httpClient=r,this.apiHost=Q.N.apiHost}resolve(r,n){return(0,L.D)([this._httpClient.get(`${this.apiHost}api/player`)]).pipe((0,O.U)(([i])=>({userInfo:i})))}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(S.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Y=o(7775),k=o(1079),B=o(9832),b=o(2140),j=o(8966),H=o(4834),K=o(2181),z=o(5899),$=o(773),q=o(2368),V=o(7261),X=o(4466);const I=[{path:"",component:x.$,data:{layout:"empty"},children:[{path:"",loadChildren:()=>o.e(770).then(o.bind(o,8770)).then(e=>e.PlayerLandingModule)}]},{path:"",canActivate:[A],canActivateChild:[A],component:x.$,data:{layout:"empty"},children:[{path:"setup",resolve:{PlayerData:R},component:D}]}];let _=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.ez,f.Bz.forChild(I),u.ot,B.vV,H.t,P.Ps,K.Tx,z.Cv,X.m,p.lN,j.Is,Z.c,q.rP,b.Hi,k.Bb,$.Cq,V.ZX,Y.fC,m.T5]]}),e})()},6581:(U,g,o)=>{o.d(g,{l:()=>Z});var y=o(2340),s=o(591),T=o(1737),t=o(1086),f=o(7221),h=o(7545),m=o(5e3),p=o(520);let Z=(()=>{class u{constructor(a){this._httpClient=a,this.apiHost=y.N.apiHost,this._authenticated=!1,this._playerInfo=new s.X(null)}set accessToken(a){sessionStorage.removeItem("access_token"),sessionStorage.setItem("access_token",a)}get accessToken(){var a;return null!==(a=sessionStorage.getItem("access_token"))&&void 0!==a?a:""}get playerInfo$(){return this._playerInfo.asObservable()}set playerInfo(a){this._playerInfo.next(a)}verifyUserLanding(a){return this._httpClient.post(`${this.apiHost}api/player/setup`,a).pipe((0,f.K)(v=>(0,T._)(v)),(0,h.w)(v=>(this.accessToken=v.token,this._authenticated=!0,(0,t.of)(v))))}validateToken(){return this._httpClient.post(`${this.apiHost}api/player/validate-token`,{}).pipe((0,f.K)(()=>(0,t.of)(!1)),(0,h.w)(a=>(this._authenticated=null==a?void 0:a.valid,(0,t.of)(null==a?void 0:a.valid))))}check(){let a=(0,t.of)(!1);return this._authenticated&&(a=(0,t.of)(!0)),a=this.accessToken?this.validateToken():(0,t.of)(!1),a}}return u.\u0275fac=function(a){return new(a||u)(m.LFG(p.eN))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);