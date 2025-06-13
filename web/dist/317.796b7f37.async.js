!(function(){var c1=Object.defineProperty,d1=Object.defineProperties;var p1=Object.getOwnPropertyDescriptors;var ji=Object.getOwnPropertySymbols;var bs=Object.prototype.hasOwnProperty,As=Object.prototype.propertyIsEnumerable;var ys=(tn,H,B)=>H in tn?c1(tn,H,{enumerable:!0,configurable:!0,writable:!0,value:B}):tn[H]=B,Pn=(tn,H)=>{for(var B in H||(H={}))bs.call(H,B)&&ys(tn,B,H[B]);if(ji)for(var B of ji(H))As.call(H,B)&&ys(tn,B,H[B]);return tn},Ao=(tn,H)=>d1(tn,p1(H));var Ga=(tn,H)=>{var B={};for(var se in tn)bs.call(tn,se)&&H.indexOf(se)<0&&(B[se]=tn[se]);if(tn!=null&&ji)for(var se of ji(tn))H.indexOf(se)<0&&As.call(tn,se)&&(B[se]=tn[se]);return B};(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[317],{32857:function(tn,H){"use strict";var B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};H.Z=B},16596:function(tn,H,B){"use strict";B.d(H,{Z:function(){return _}});var se=B(67294),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-upload",theme:"outlined"},w=m,R=B(57079);function Fe(){return Fe=Object.assign?Object.assign.bind():function(C){for(var z=1;z<arguments.length;z++){var O=arguments[z];for(var g in O)Object.prototype.hasOwnProperty.call(O,g)&&(C[g]=O[g])}return C},Fe.apply(this,arguments)}const G=(C,z)=>se.createElement(R.Z,Fe({},C,{ref:z,icon:w}));var _=se.forwardRef(G)},82061:function(tn,H,B){"use strict";var se=B(67294),m=B(47046),w=B(57079);function R(){return R=Object.assign?Object.assign.bind():function(re){for(var _=1;_<arguments.length;_++){var C=arguments[_];for(var z in C)Object.prototype.hasOwnProperty.call(C,z)&&(re[z]=C[z])}return re},R.apply(this,arguments)}const Fe=(re,_)=>se.createElement(w.Z,R({},re,{ref:_,icon:m.Z})),G=se.forwardRef(Fe);H.Z=G},21450:function(tn,H,B){"use strict";B.d(H,{Z:function(){return G}});var se=B(67294),w=se.createContext({});const R={classNames:{},styles:{},className:"",style:{}};var G=re=>{const _=se.useContext(w);return se.useMemo(()=>Pn(Pn({},R),_[re]),[_[re]])}},73869:function(tn,H,B){"use strict";B.d(H,{Z:function(){return li}});var se=B(93967),m=B.n(se),w=B(67294),R=B(21450),Fe=B(36158),G=B(56790),re=B(73935);const _=w.createContext(null);function C(x){const{getDropContainer:N,className:q,prefixCls:Z,children:fe}=x,{disabled:pe}=w.useContext(_),[ke,le]=w.useState(),[pn,sn]=w.useState(null);if(w.useEffect(()=>{const kn=N==null?void 0:N();ke!==kn&&le(kn)},[N]),w.useEffect(()=>{if(ke){const kn=()=>{sn(!0)},Sn=zn=>{zn.preventDefault()},Ln=zn=>{zn.relatedTarget||sn(!1)},Vn=zn=>{sn(!1),zn.preventDefault()};return document.addEventListener("dragenter",kn),document.addEventListener("dragover",Sn),document.addEventListener("dragleave",Ln),document.addEventListener("drop",Vn),()=>{document.removeEventListener("dragenter",kn),document.removeEventListener("dragover",Sn),document.removeEventListener("dragleave",Ln),document.removeEventListener("drop",Vn)}}},[!!ke]),!(N&&ke&&!pe))return null;const nn=`${Z}-drop-area`;return(0,re.createPortal)(w.createElement("div",{className:m()(nn,q,{[`${nn}-on-body`]:ke.tagName==="BODY"}),style:{display:pn?"block":"none"}},fe),ke)}var z=B(87462),O=B(42110),g=B(51398),te=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:O.Z}))},me=w.forwardRef(te),J=me,de=B(26554),Ce=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:de.Z}))},be=w.forwardRef(Ce),We=be,Ze=B(50756),dn=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:Ze.Z}))},U=w.forwardRef(dn),D=U,ie=B(83622),Oe=B(29372),Re=B(74902),T=B(15671),ne=B(43144),Q=B(97326),W=B(60136),X=B(18486),Ae=B(4942),Be=B(1413),Ue=B(91),ge=B(71002),Ge=B(74165),cn=B(15861),Xn=B(64217),ue=B(80334),ve=function(x,N){if(x&&N){var q=Array.isArray(N)?N:N.split(","),Z=x.name||"",fe=x.type||"",pe=fe.replace(/\/.*$/,"");return q.some(function(ke){var le=ke.trim();if(/^\*(\/\*)?$/.test(ke))return!0;if(le.charAt(0)==="."){var pn=Z.toLowerCase(),sn=le.toLowerCase(),hn=[sn];return(sn===".jpg"||sn===".jpeg")&&(hn=[".jpg",".jpeg"]),hn.some(function(nn){return pn.endsWith(nn)})}return/\/\*$/.test(le)?pe===le.replace(/\/.*$/,""):fe===le?!0:/^\w+$/.test(le)?((0,ue.ZP)(!1,"Upload takes an invalidate 'accept' type '".concat(le,"'.Skip for check.")),!0):!1})}return!0};function xe(x,N){var q="cannot ".concat(x.method," ").concat(x.action," ").concat(N.status,"'"),Z=new Error(q);return Z.status=N.status,Z.method=x.method,Z.url=x.action,Z}function V(x){var N=x.responseText||x.response;if(!N)return N;try{return JSON.parse(N)}catch(q){return N}}function Ee(x){var N=new XMLHttpRequest;x.onProgress&&N.upload&&(N.upload.onprogress=function(pe){pe.total>0&&(pe.percent=pe.loaded/pe.total*100),x.onProgress(pe)});var q=new FormData;x.data&&Object.keys(x.data).forEach(function(fe){var pe=x.data[fe];if(Array.isArray(pe)){pe.forEach(function(ke){q.append("".concat(fe,"[]"),ke)});return}q.append(fe,pe)}),x.file instanceof Blob?q.append(x.filename,x.file,x.file.name):q.append(x.filename,x.file),N.onerror=function(pe){x.onError(pe)},N.onload=function(){return N.status<200||N.status>=300?x.onError(xe(x,N),V(N)):x.onSuccess(V(N),N)},N.open(x.method,x.action,!0),x.withCredentials&&"withCredentials"in N&&(N.withCredentials=!0);var Z=x.headers||{};return Z["X-Requested-With"]!==null&&N.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(Z).forEach(function(fe){Z[fe]!==null&&N.setRequestHeader(fe,Z[fe])}),N.send(q),{abort:function(){N.abort()}}}var Ke=function(){var x=(0,cn.Z)((0,Ge.Z)().mark(function N(q,Z){var fe,pe,ke,le,pn,sn,hn,nn;return(0,Ge.Z)().wrap(function(Sn){for(;;)switch(Sn.prev=Sn.next){case 0:sn=function(){return sn=(0,cn.Z)((0,Ge.Z)().mark(function Vn(zn){return(0,Ge.Z)().wrap(function(Kn){for(;;)switch(Kn.prev=Kn.next){case 0:return Kn.abrupt("return",new Promise(function(P){zn.file(function(ae){Z(ae)?(zn.fullPath&&!ae.webkitRelativePath&&(Object.defineProperties(ae,{webkitRelativePath:{writable:!0}}),ae.webkitRelativePath=zn.fullPath.replace(/^\//,""),Object.defineProperties(ae,{webkitRelativePath:{writable:!1}})),P(ae)):P(null)})}));case 1:case"end":return Kn.stop()}},Vn)})),sn.apply(this,arguments)},pn=function(Vn){return sn.apply(this,arguments)},le=function(){return le=(0,cn.Z)((0,Ge.Z)().mark(function Vn(zn){var Fn,Kn,P,ae,M;return(0,Ge.Z)().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:Fn=zn.createReader(),Kn=[];case 2:return en.next=5,new Promise(function(yn){Fn.readEntries(yn,function(){return yn([])})});case 5:if(P=en.sent,ae=P.length,ae){en.next=9;break}return en.abrupt("break",12);case 9:for(M=0;M<ae;M++)Kn.push(P[M]);en.next=2;break;case 12:return en.abrupt("return",Kn);case 13:case"end":return en.stop()}},Vn)})),le.apply(this,arguments)},ke=function(Vn){return le.apply(this,arguments)},fe=[],pe=[],q.forEach(function(Ln){return pe.push(Ln.webkitGetAsEntry())}),hn=function(){var Ln=(0,cn.Z)((0,Ge.Z)().mark(function Vn(zn,Fn){var Kn,P;return(0,Ge.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(zn){M.next=2;break}return M.abrupt("return");case 2:if(zn.path=Fn||"",!zn.isFile){M.next=10;break}return M.next=6,pn(zn);case 6:Kn=M.sent,Kn&&fe.push(Kn),M.next=15;break;case 10:if(!zn.isDirectory){M.next=15;break}return M.next=13,ke(zn);case 13:P=M.sent,pe.push.apply(pe,(0,Re.Z)(P));case 15:case"end":return M.stop()}},Vn)}));return function(zn,Fn){return Ln.apply(this,arguments)}}(),nn=0;case 9:if(!(nn<pe.length)){Sn.next=15;break}return Sn.next=12,hn(pe[nn]);case 12:nn++,Sn.next=9;break;case 15:return Sn.abrupt("return",fe);case 16:case"end":return Sn.stop()}},N)}));return function(q,Z){return x.apply(this,arguments)}}(),an=Ke,In=+new Date,On=0;function gn(){return"rc-upload-".concat(In,"-").concat(++On)}var Qn=["component","prefixCls","className","classNames","disabled","id","name","style","styles","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","hasControlInside"],vn=function(x){(0,W.Z)(q,x);var N=(0,X.Z)(q);function q(){var Z;(0,T.Z)(this,q);for(var fe=arguments.length,pe=new Array(fe),ke=0;ke<fe;ke++)pe[ke]=arguments[ke];return Z=N.call.apply(N,[this].concat(pe)),(0,Ae.Z)((0,Q.Z)(Z),"state",{uid:gn()}),(0,Ae.Z)((0,Q.Z)(Z),"reqs",{}),(0,Ae.Z)((0,Q.Z)(Z),"fileInput",void 0),(0,Ae.Z)((0,Q.Z)(Z),"_isMounted",void 0),(0,Ae.Z)((0,Q.Z)(Z),"onChange",function(le){var pn=Z.props,sn=pn.accept,hn=pn.directory,nn=le.target.files,kn=(0,Re.Z)(nn).filter(function(Sn){return!hn||ve(Sn,sn)});Z.uploadFiles(kn),Z.reset()}),(0,Ae.Z)((0,Q.Z)(Z),"onClick",function(le){var pn=Z.fileInput;if(pn){var sn=le.target,hn=Z.props.onClick;if(sn&&sn.tagName==="BUTTON"){var nn=pn.parentNode;nn.focus(),sn.blur()}pn.click(),hn&&hn(le)}}),(0,Ae.Z)((0,Q.Z)(Z),"onKeyDown",function(le){le.key==="Enter"&&Z.onClick(le)}),(0,Ae.Z)((0,Q.Z)(Z),"onFileDrop",function(){var le=(0,cn.Z)((0,Ge.Z)().mark(function pn(sn){var hn,nn,kn;return(0,Ge.Z)().wrap(function(Ln){for(;;)switch(Ln.prev=Ln.next){case 0:if(hn=Z.props.multiple,sn.preventDefault(),sn.type!=="dragover"){Ln.next=4;break}return Ln.abrupt("return");case 4:if(!Z.props.directory){Ln.next=11;break}return Ln.next=7,an(Array.prototype.slice.call(sn.dataTransfer.items),function(Vn){return ve(Vn,Z.props.accept)});case 7:nn=Ln.sent,Z.uploadFiles(nn),Ln.next=14;break;case 11:kn=(0,Re.Z)(sn.dataTransfer.files).filter(function(Vn){return ve(Vn,Z.props.accept)}),hn===!1&&(kn=kn.slice(0,1)),Z.uploadFiles(kn);case 14:case"end":return Ln.stop()}},pn)}));return function(pn){return le.apply(this,arguments)}}()),(0,Ae.Z)((0,Q.Z)(Z),"uploadFiles",function(le){var pn=(0,Re.Z)(le),sn=pn.map(function(hn){return hn.uid=gn(),Z.processFile(hn,pn)});Promise.all(sn).then(function(hn){var nn=Z.props.onBatchStart;nn==null||nn(hn.map(function(kn){var Sn=kn.origin,Ln=kn.parsedFile;return{file:Sn,parsedFile:Ln}})),hn.filter(function(kn){return kn.parsedFile!==null}).forEach(function(kn){Z.post(kn)})})}),(0,Ae.Z)((0,Q.Z)(Z),"processFile",function(){var le=(0,cn.Z)((0,Ge.Z)().mark(function pn(sn,hn){var nn,kn,Sn,Ln,Vn,zn,Fn,Kn,P;return(0,Ge.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(nn=Z.props.beforeUpload,kn=sn,!nn){M.next=14;break}return M.prev=3,M.next=6,nn(sn,hn);case 6:kn=M.sent,M.next=12;break;case 9:M.prev=9,M.t0=M.catch(3),kn=!1;case 12:if(kn!==!1){M.next=14;break}return M.abrupt("return",{origin:sn,parsedFile:null,action:null,data:null});case 14:if(Sn=Z.props.action,typeof Sn!="function"){M.next=21;break}return M.next=18,Sn(sn);case 18:Ln=M.sent,M.next=22;break;case 21:Ln=Sn;case 22:if(Vn=Z.props.data,typeof Vn!="function"){M.next=29;break}return M.next=26,Vn(sn);case 26:zn=M.sent,M.next=30;break;case 29:zn=Vn;case 30:return Fn=((0,ge.Z)(kn)==="object"||typeof kn=="string")&&kn?kn:sn,Fn instanceof File?Kn=Fn:Kn=new File([Fn],sn.name,{type:sn.type}),P=Kn,P.uid=sn.uid,M.abrupt("return",{origin:sn,data:zn,parsedFile:P,action:Ln});case 35:case"end":return M.stop()}},pn,null,[[3,9]])}));return function(pn,sn){return le.apply(this,arguments)}}()),(0,Ae.Z)((0,Q.Z)(Z),"saveFileInput",function(le){Z.fileInput=le}),Z}return(0,ne.Z)(q,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(fe){var pe=this,ke=fe.data,le=fe.origin,pn=fe.action,sn=fe.parsedFile;if(this._isMounted){var hn=this.props,nn=hn.onStart,kn=hn.customRequest,Sn=hn.name,Ln=hn.headers,Vn=hn.withCredentials,zn=hn.method,Fn=le.uid,Kn=kn||Ee,P={action:pn,filename:Sn,data:ke,file:sn,headers:Ln,withCredentials:Vn,method:zn||"post",onProgress:function(M){var je=pe.props.onProgress;je==null||je(M,sn)},onSuccess:function(M,je){var en=pe.props.onSuccess;en==null||en(M,sn,je),delete pe.reqs[Fn]},onError:function(M,je){var en=pe.props.onError;en==null||en(M,je,sn),delete pe.reqs[Fn]}};nn(le),this.reqs[Fn]=Kn(P)}}},{key:"reset",value:function(){this.setState({uid:gn()})}},{key:"abort",value:function(fe){var pe=this.reqs;if(fe){var ke=fe.uid?fe.uid:fe;pe[ke]&&pe[ke].abort&&pe[ke].abort(),delete pe[ke]}else Object.keys(pe).forEach(function(le){pe[le]&&pe[le].abort&&pe[le].abort(),delete pe[le]})}},{key:"render",value:function(){var fe=this.props,pe=fe.component,ke=fe.prefixCls,le=fe.className,pn=fe.classNames,sn=pn===void 0?{}:pn,hn=fe.disabled,nn=fe.id,kn=fe.name,Sn=fe.style,Ln=fe.styles,Vn=Ln===void 0?{}:Ln,zn=fe.multiple,Fn=fe.accept,Kn=fe.capture,P=fe.children,ae=fe.directory,M=fe.openFileDialogOnClick,je=fe.onMouseEnter,en=fe.onMouseLeave,yn=fe.hasControlInside,et=(0,Ue.Z)(fe,Qn),Rn=m()((0,Ae.Z)((0,Ae.Z)((0,Ae.Z)({},ke,!0),"".concat(ke,"-disabled"),hn),le,le)),Ut=ae?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},Fr=hn?{}:{onClick:M?this.onClick:function(){},onKeyDown:M?this.onKeyDown:function(){},onMouseEnter:je,onMouseLeave:en,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:yn?void 0:"0"};return w.createElement(pe,(0,z.Z)({},Fr,{className:Rn,role:yn?void 0:"button",style:Sn}),w.createElement("input",(0,z.Z)({},(0,Xn.Z)(et,{aria:!0,data:!0}),{id:nn,name:kn,disabled:hn,type:"file",ref:this.saveFileInput,onClick:function(Vt){return Vt.stopPropagation()},key:this.state.uid,style:(0,Be.Z)({display:"none"},Vn.input),className:sn.input,accept:Fn},Ut,{multiple:zn,onChange:this.onChange},Kn!=null?{capture:Kn}:{})),P)}}]),q}(w.Component),ht=vn;function ct(){}var Un=function(x){(0,W.Z)(q,x);var N=(0,X.Z)(q);function q(){var Z;(0,T.Z)(this,q);for(var fe=arguments.length,pe=new Array(fe),ke=0;ke<fe;ke++)pe[ke]=arguments[ke];return Z=N.call.apply(N,[this].concat(pe)),(0,Ae.Z)((0,Q.Z)(Z),"uploader",void 0),(0,Ae.Z)((0,Q.Z)(Z),"saveUploader",function(le){Z.uploader=le}),Z}return(0,ne.Z)(q,[{key:"abort",value:function(fe){this.uploader.abort(fe)}},{key:"render",value:function(){return w.createElement(ht,(0,z.Z)({},this.props,{ref:this.saveUploader}))}}]),q}(w.Component);(0,Ae.Z)(Un,"defaultProps",{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:ct,onError:ct,onSuccess:ct,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0,hasControlInside:!1});var Zt=Un,Mt=Zt,vt=B(21770),Gn=B(53124),kt=B(98866),Ct=B(10110),Ve=B(24457),Y=B(14747),Ie=B(33507),Te=B(83559),we=B(83262),Xe=B(11568),Je=x=>{const{componentCls:N,iconCls:q}=x;return{[`${N}-wrapper`]:{[`${N}-drag`]:{position:"relative",width:"100%",height:"100%",textAlign:"center",background:x.colorFillAlter,border:`${(0,Xe.bf)(x.lineWidth)} dashed ${x.colorBorder}`,borderRadius:x.borderRadiusLG,cursor:"pointer",transition:`border-color ${x.motionDurationSlow}`,[N]:{padding:x.padding},[`${N}-btn`]:{display:"table",width:"100%",height:"100%",outline:"none",borderRadius:x.borderRadiusLG,"&:focus-visible":{outline:`${(0,Xe.bf)(x.lineWidthFocus)} solid ${x.colorPrimaryBorder}`}},[`${N}-drag-container`]:{display:"table-cell",verticalAlign:"middle"},[`
          &:not(${N}-disabled):hover,
          &-hover:not(${N}-disabled)
        `]:{borderColor:x.colorPrimaryHover},[`p${N}-drag-icon`]:{marginBottom:x.margin,[q]:{color:x.colorPrimary,fontSize:x.uploadThumbnailSize}},[`p${N}-text`]:{margin:`0 0 ${(0,Xe.bf)(x.marginXXS)}`,color:x.colorTextHeading,fontSize:x.fontSizeLG},[`p${N}-hint`]:{color:x.colorTextDescription,fontSize:x.fontSize},[`&${N}-disabled`]:{[`p${N}-drag-icon ${q},
            p${N}-text,
            p${N}-hint
          `]:{color:x.colorTextDisabled}}}}}},on=x=>{const{componentCls:N,iconCls:q,fontSize:Z,lineHeight:fe,calc:pe}=x,ke=`${N}-list-item`,le=`${ke}-actions`,pn=`${ke}-action`;return{[`${N}-wrapper`]:{[`${N}-list`]:Object.assign(Object.assign({},(0,Y.dF)()),{lineHeight:x.lineHeight,[ke]:{position:"relative",height:pe(x.lineHeight).mul(Z).equal(),marginTop:x.marginXS,fontSize:Z,display:"flex",alignItems:"center",transition:`background-color ${x.motionDurationSlow}`,borderRadius:x.borderRadiusSM,"&:hover":{backgroundColor:x.controlItemBgHover},[`${ke}-name`]:Object.assign(Object.assign({},Y.vS),{padding:`0 ${(0,Xe.bf)(x.paddingXS)}`,lineHeight:fe,flex:"auto",transition:`all ${x.motionDurationSlow}`}),[le]:{whiteSpace:"nowrap",[pn]:{opacity:0},[q]:{color:x.actionsColor,transition:`all ${x.motionDurationSlow}`},[`
              ${pn}:focus-visible,
              &.picture ${pn}
            `]:{opacity:1}},[`${N}-icon ${q}`]:{color:x.colorTextDescription,fontSize:Z},[`${ke}-progress`]:{position:"absolute",bottom:x.calc(x.uploadProgressOffset).mul(-1).equal(),width:"100%",paddingInlineStart:pe(Z).add(x.paddingXS).equal(),fontSize:Z,lineHeight:0,pointerEvents:"none","> div":{margin:0}}},[`${ke}:hover ${pn}`]:{opacity:1},[`${ke}-error`]:{color:x.colorError,[`${ke}-name, ${N}-icon ${q}`]:{color:x.colorError},[le]:{[`${q}, ${q}:hover`]:{color:x.colorError},[pn]:{opacity:1}}},[`${N}-list-item-container`]:{transition:`opacity ${x.motionDurationSlow}, height ${x.motionDurationSlow}`,"&::before":{display:"table",width:0,height:0,content:'""'}}})}}},wn=B(16932),qe=x=>{const{componentCls:N}=x,q=new Xe.E4("uploadAnimateInlineIn",{from:{width:0,height:0,padding:0,opacity:0,margin:x.calc(x.marginXS).div(-2).equal()}}),Z=new Xe.E4("uploadAnimateInlineOut",{to:{width:0,height:0,padding:0,opacity:0,margin:x.calc(x.marginXS).div(-2).equal()}}),fe=`${N}-animate-inline`;return[{[`${N}-wrapper`]:{[`${fe}-appear, ${fe}-enter, ${fe}-leave`]:{animationDuration:x.motionDurationSlow,animationTimingFunction:x.motionEaseInOutCirc,animationFillMode:"forwards"},[`${fe}-appear, ${fe}-enter`]:{animationName:q},[`${fe}-leave`]:{animationName:Z}}},{[`${N}-wrapper`]:(0,wn.J$)(x)},q,Z]},Bn=B(65409);const it=x=>{const{componentCls:N,iconCls:q,uploadThumbnailSize:Z,uploadProgressOffset:fe,calc:pe}=x,ke=`${N}-list`,le=`${ke}-item`;return{[`${N}-wrapper`]:{[`
        ${ke}${ke}-picture,
        ${ke}${ke}-picture-card,
        ${ke}${ke}-picture-circle
      `]:{[le]:{position:"relative",height:pe(Z).add(pe(x.lineWidth).mul(2)).add(pe(x.paddingXS).mul(2)).equal(),padding:x.paddingXS,border:`${(0,Xe.bf)(x.lineWidth)} ${x.lineType} ${x.colorBorder}`,borderRadius:x.borderRadiusLG,"&:hover":{background:"transparent"},[`${le}-thumbnail`]:Object.assign(Object.assign({},Y.vS),{width:Z,height:Z,lineHeight:(0,Xe.bf)(pe(Z).add(x.paddingSM).equal()),textAlign:"center",flex:"none",[q]:{fontSize:x.fontSizeHeading2,color:x.colorPrimary},img:{display:"block",width:"100%",height:"100%",overflow:"hidden"}}),[`${le}-progress`]:{bottom:fe,width:`calc(100% - ${(0,Xe.bf)(pe(x.paddingSM).mul(2).equal())})`,marginTop:0,paddingInlineStart:pe(Z).add(x.paddingXS).equal()}},[`${le}-error`]:{borderColor:x.colorError,[`${le}-thumbnail ${q}`]:{[`svg path[fill='${Bn.iN[0]}']`]:{fill:x.colorErrorBg},[`svg path[fill='${Bn.iN.primary}']`]:{fill:x.colorError}}},[`${le}-uploading`]:{borderStyle:"dashed",[`${le}-name`]:{marginBottom:fe}}},[`${ke}${ke}-picture-circle ${le}`]:{[`&, &::before, ${le}-thumbnail`]:{borderRadius:"50%"}}}}},xt=x=>{const{componentCls:N,iconCls:q,fontSizeLG:Z,colorTextLightSolid:fe,calc:pe}=x,ke=`${N}-list`,le=`${ke}-item`,pn=x.uploadPicCardSize;return{[`
      ${N}-wrapper${N}-picture-card-wrapper,
      ${N}-wrapper${N}-picture-circle-wrapper
    `]:Object.assign(Object.assign({},(0,Y.dF)()),{display:"block",[`${N}${N}-select`]:{width:pn,height:pn,textAlign:"center",verticalAlign:"top",backgroundColor:x.colorFillAlter,border:`${(0,Xe.bf)(x.lineWidth)} dashed ${x.colorBorder}`,borderRadius:x.borderRadiusLG,cursor:"pointer",transition:`border-color ${x.motionDurationSlow}`,[`> ${N}`]:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",textAlign:"center"},[`&:not(${N}-disabled):hover`]:{borderColor:x.colorPrimary}},[`${ke}${ke}-picture-card, ${ke}${ke}-picture-circle`]:{display:"flex",flexWrap:"wrap","@supports not (gap: 1px)":{"& > *":{marginBlockEnd:x.marginXS,marginInlineEnd:x.marginXS}},"@supports (gap: 1px)":{gap:x.marginXS},[`${ke}-item-container`]:{display:"inline-block",width:pn,height:pn,verticalAlign:"top"},"&::after":{display:"none"},"&::before":{display:"none"},[le]:{height:"100%",margin:0,"&::before":{position:"absolute",zIndex:1,width:`calc(100% - ${(0,Xe.bf)(pe(x.paddingXS).mul(2).equal())})`,height:`calc(100% - ${(0,Xe.bf)(pe(x.paddingXS).mul(2).equal())})`,backgroundColor:x.colorBgMask,opacity:0,transition:`all ${x.motionDurationSlow}`,content:'" "'}},[`${le}:hover`]:{[`&::before, ${le}-actions`]:{opacity:1}},[`${le}-actions`]:{position:"absolute",insetInlineStart:0,zIndex:10,width:"100%",whiteSpace:"nowrap",textAlign:"center",opacity:0,transition:`all ${x.motionDurationSlow}`,[`
            ${q}-eye,
            ${q}-download,
            ${q}-delete
          `]:{zIndex:10,width:Z,margin:`0 ${(0,Xe.bf)(x.marginXXS)}`,fontSize:Z,cursor:"pointer",transition:`all ${x.motionDurationSlow}`,color:fe,"&:hover":{color:fe},svg:{verticalAlign:"baseline"}}},[`${le}-thumbnail, ${le}-thumbnail img`]:{position:"static",display:"block",width:"100%",height:"100%",objectFit:"contain"},[`${le}-name`]:{display:"none",textAlign:"center"},[`${le}-file + ${le}-name`]:{position:"absolute",bottom:x.margin,display:"block",width:`calc(100% - ${(0,Xe.bf)(pe(x.paddingXS).mul(2).equal())})`},[`${le}-uploading`]:{[`&${le}`]:{backgroundColor:x.colorFillAlter},[`&::before, ${q}-eye, ${q}-download, ${q}-delete`]:{display:"none"}},[`${le}-progress`]:{bottom:x.marginXL,width:`calc(100% - ${(0,Xe.bf)(pe(x.paddingXS).mul(2).equal())})`,paddingInlineStart:0}}}),[`${N}-wrapper${N}-picture-circle-wrapper`]:{[`${N}${N}-select`]:{borderRadius:"50%"}}}};var St=x=>{const{componentCls:N}=x;return{[`${N}-rtl`]:{direction:"rtl"}}};const Ot=x=>{const{componentCls:N,colorTextDisabled:q}=x;return{[`${N}-wrapper`]:Object.assign(Object.assign({},(0,Y.Wf)(x)),{[N]:{outline:0,"input[type='file']":{cursor:"pointer"}},[`${N}-select`]:{display:"inline-block"},[`${N}-hidden`]:{display:"none"},[`${N}-disabled`]:{color:q,cursor:"not-allowed"}})}},He=x=>({actionsColor:x.colorTextDescription});var he=(0,Te.I$)("Upload",x=>{const{fontSizeHeading3:N,fontHeight:q,lineWidth:Z,controlHeightLG:fe,calc:pe}=x,ke=(0,we.IX)(x,{uploadThumbnailSize:pe(N).mul(2).equal(),uploadProgressOffset:pe(pe(q).div(2)).add(Z).equal(),uploadPicCardSize:pe(fe).mul(2.55).equal()});return[Ot(ke),Je(ke),it(ke),xt(ke),on(ke),qe(ke),St(ke),(0,Ie.Z)(ke)]},He),Le={icon:function(N,q){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:q}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:N}}]}},name:"file",theme:"twotone"},Me=Le,An=B(93771),Dn=function(N,q){return w.createElement(An.Z,(0,z.Z)({},N,{ref:q,icon:Me}))},Wn=w.forwardRef(Dn),lt=Wn,It=B(19267),Ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},Bt=Ht,_t=function(N,q){return w.createElement(An.Z,(0,z.Z)({},N,{ref:q,icon:Bt}))},sr=w.forwardRef(_t),Wt=sr,or={icon:function(N,q){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:N}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:q}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:q}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:q}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:N}}]}},name:"picture",theme:"twotone"},cr=or,nr=function(N,q){return w.createElement(An.Z,(0,z.Z)({},N,{ref:q,icon:cr}))},jt=w.forwardRef(nr),mr=jt,Sr=B(98423),_r=B(57838),$r=B(33603),Pr=B(96159);function Br(x){return Object.assign(Object.assign({},x),{lastModified:x.lastModified,lastModifiedDate:x.lastModifiedDate,name:x.name,size:x.size,type:x.type,uid:x.uid,percent:0,originFileObj:x})}function jr(x,N){const q=(0,Re.Z)(N),Z=q.findIndex(fe=>{let{uid:pe}=fe;return pe===x.uid});return Z===-1?q.push(x):q[Z]=x,q}function sa(x,N){const q=x.uid!==void 0?"uid":"name";return N.filter(Z=>Z[q]===x[q])[0]}function Ur(x,N){const q=x.uid!==void 0?"uid":"name",Z=N.filter(fe=>fe[q]!==x[q]);return Z.length===N.length?null:Z}const Tr=function(){const N=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").split("/"),Z=N[N.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(Z)||[""])[0]},gr=x=>x.indexOf("image/")===0,Gr=x=>{if(x.type&&!x.thumbUrl)return gr(x.type);const N=x.thumbUrl||x.url||"",q=Tr(N);return/^data:image\//.test(N)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(q)?!0:!(/^data:/.test(N)||q)},vr=200;function Dr(x){return new Promise(N=>{if(!x.type||!gr(x.type)){N("");return}const q=document.createElement("canvas");q.width=vr,q.height=vr,q.style.cssText=`position: fixed; left: 0; top: 0; width: ${vr}px; height: ${vr}px; z-index: 9999; display: none;`,document.body.appendChild(q);const Z=q.getContext("2d"),fe=new Image;if(fe.onload=()=>{const{width:pe,height:ke}=fe;let le=vr,pn=vr,sn=0,hn=0;pe>ke?(pn=ke*(vr/pe),hn=-(pn-le)/2):(le=pe*(vr/ke),sn=-(le-pn)/2),Z.drawImage(fe,sn,hn,le,pn);const nn=q.toDataURL();document.body.removeChild(q),window.URL.revokeObjectURL(fe.src),N(nn)},fe.crossOrigin="anonymous",x.type.startsWith("image/svg+xml")){const pe=new FileReader;pe.onload=()=>{pe.result&&typeof pe.result=="string"&&(fe.src=pe.result)},pe.readAsDataURL(x)}else if(x.type.startsWith("image/gif")){const pe=new FileReader;pe.onload=()=>{pe.result&&N(pe.result)},pe.readAsDataURL(x)}else fe.src=window.URL.createObjectURL(x)})}var ir=B(47046),ca=function(N,q){return w.createElement(An.Z,(0,z.Z)({},N,{ref:q,icon:ir.Z}))},Jr=w.forwardRef(ca),tr=Jr,$a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},ja=$a,Ja=function(N,q){return w.createElement(An.Z,(0,z.Z)({},N,{ref:q,icon:ja}))},ga=w.forwardRef(Ja),eo=ga,da=B(1208),qr=B(38703),Mr=B(83062),yr=w.forwardRef((x,N)=>{let{prefixCls:q,className:Z,style:fe,locale:pe,listType:ke,file:le,items:pn,progress:sn,iconRender:hn,actionIconRender:nn,itemRender:kn,isImgUrl:Sn,showPreviewIcon:Ln,showRemoveIcon:Vn,showDownloadIcon:zn,previewIcon:Fn,removeIcon:Kn,downloadIcon:P,extra:ae,onPreview:M,onDownload:je,onClose:en}=x;var yn,et;const{status:Rn}=le,[Ut,Fr]=w.useState(Rn);w.useEffect(()=>{Rn!=="removed"&&Fr(Rn)},[Rn]);const[$t,Vt]=w.useState(!1);w.useEffect(()=>{const Nt=setTimeout(()=>{Vt(!0)},300);return()=>{clearTimeout(Nt)}},[]);const br=hn(le);let Dt=w.createElement("div",{className:`${q}-icon`},br);if(ke==="picture"||ke==="picture-card"||ke==="picture-circle")if(Ut==="uploading"||!le.thumbUrl&&!le.url){const Nt=m()(`${q}-list-item-thumbnail`,{[`${q}-list-item-file`]:Ut!=="uploading"});Dt=w.createElement("div",{className:Nt},br)}else{const Nt=Sn!=null&&Sn(le)?w.createElement("img",{src:le.thumbUrl||le.url,alt:le.name,className:`${q}-list-item-image`,crossOrigin:le.crossOrigin}):br,a=m()(`${q}-list-item-thumbnail`,{[`${q}-list-item-file`]:Sn&&!Sn(le)});Dt=w.createElement("a",{className:a,onClick:i=>M(le,i),href:le.url||le.thumbUrl,target:"_blank",rel:"noopener noreferrer"},Nt)}const mt=m()(`${q}-list-item`,`${q}-list-item-${Ut}`),Xt=typeof le.linkProps=="string"?JSON.parse(le.linkProps):le.linkProps,at=(typeof Vn=="function"?Vn(le):Vn)?nn((typeof Kn=="function"?Kn(le):Kn)||w.createElement(tr,null),()=>en(le),q,pe.removeFile,!0):null,aa=(typeof zn=="function"?zn(le):zn)&&Ut==="done"?nn((typeof P=="function"?P(le):P)||w.createElement(eo,null),()=>je(le),q,pe.downloadFile):null,Or=ke!=="picture-card"&&ke!=="picture-circle"&&w.createElement("span",{key:"download-delete",className:m()(`${q}-list-item-actions`,{picture:ke==="picture"})},aa,at),Ar=typeof ae=="function"?ae(le):ae,Tn=Ar&&w.createElement("span",{className:`${q}-list-item-extra`},Ar),ft=m()(`${q}-list-item-name`),Gt=le.url?w.createElement("a",Object.assign({key:"view",target:"_blank",rel:"noopener noreferrer",className:ft,title:le.name},Xt,{href:le.url,onClick:Nt=>M(le,Nt)}),le.name,Tn):w.createElement("span",{key:"view",className:ft,onClick:Nt=>M(le,Nt),title:le.name},le.name,Tn),qt=(typeof Ln=="function"?Ln(le):Ln)&&(le.url||le.thumbUrl)?w.createElement("a",{href:le.url||le.thumbUrl,target:"_blank",rel:"noopener noreferrer",onClick:Nt=>M(le,Nt),title:pe.previewFile},typeof Fn=="function"?Fn(le):Fn||w.createElement(da.Z,null)):null,rr=(ke==="picture-card"||ke==="picture-circle")&&Ut!=="uploading"&&w.createElement("span",{className:`${q}-list-item-actions`},qt,Ut==="done"&&aa,at),{getPrefixCls:Nr}=w.useContext(Gn.E_),Ma=Nr(),pr=w.createElement("div",{className:mt},Dt,Gt,Or,rr,$t&&w.createElement(Oe.ZP,{motionName:`${Ma}-fade`,visible:Ut==="uploading",motionDeadline:2e3},Nt=>{let{className:a}=Nt;const i="percent"in le?w.createElement(qr.Z,Object.assign({},sn,{type:"line",percent:le.percent,"aria-label":le["aria-label"],"aria-labelledby":le["aria-labelledby"]})):null;return w.createElement("div",{className:m()(`${q}-list-item-progress`,a)},i)})),ka=le.response&&typeof le.response=="string"?le.response:((yn=le.error)===null||yn===void 0?void 0:yn.statusText)||((et=le.error)===null||et===void 0?void 0:et.message)||pe.uploadError,Va=Ut==="error"?w.createElement(Mr.Z,{title:ka,getPopupContainer:Nt=>Nt.parentNode},pr):pr;return w.createElement("div",{className:m()(`${q}-list-item-container`,Z),style:fe,ref:N},kn?kn(Va,le,pn,{download:je.bind(null,le),preview:M.bind(null,le),remove:en.bind(null,le)}):Va)});const pa=(x,N)=>{const{listType:q="text",previewFile:Z=Dr,onPreview:fe,onDownload:pe,onRemove:ke,locale:le,iconRender:pn,isImageUrl:sn=Gr,prefixCls:hn,items:nn=[],showPreviewIcon:kn=!0,showRemoveIcon:Sn=!0,showDownloadIcon:Ln=!1,removeIcon:Vn,previewIcon:zn,downloadIcon:Fn,extra:Kn,progress:P={size:[-1,2],showInfo:!1},appendAction:ae,appendActionVisible:M=!0,itemRender:je,disabled:en}=x,yn=(0,_r.Z)(),[et,Rn]=w.useState(!1),Ut=["picture-card","picture-circle"].includes(q);w.useEffect(()=>{q.startsWith("picture")&&(nn||[]).forEach(Tn=>{!(Tn.originFileObj instanceof File||Tn.originFileObj instanceof Blob)||Tn.thumbUrl!==void 0||(Tn.thumbUrl="",Z==null||Z(Tn.originFileObj).then(ft=>{Tn.thumbUrl=ft||"",yn()}))})},[q,nn,Z]),w.useEffect(()=>{Rn(!0)},[]);const Fr=(Tn,ft)=>{if(fe)return ft==null||ft.preventDefault(),fe(Tn)},$t=Tn=>{typeof pe=="function"?pe(Tn):Tn.url&&window.open(Tn.url)},Vt=Tn=>{ke==null||ke(Tn)},br=Tn=>{if(pn)return pn(Tn,q);const ft=Tn.status==="uploading";if(q.startsWith("picture")){const Gt=q==="picture"?w.createElement(It.Z,null):le.uploading,qt=sn!=null&&sn(Tn)?w.createElement(mr,null):w.createElement(lt,null);return ft?Gt:qt}return ft?w.createElement(It.Z,null):w.createElement(Wt,null)},Dt=(Tn,ft,Gt,qt,rr)=>{const Nr={type:"text",size:"small",title:qt,onClick:Ma=>{var pr,ka;ft(),w.isValidElement(Tn)&&((ka=(pr=Tn.props).onClick)===null||ka===void 0||ka.call(pr,Ma))},className:`${Gt}-list-item-action`};return rr&&(Nr.disabled=en),w.isValidElement(Tn)?w.createElement(ie.ZP,Object.assign({},Nr,{icon:(0,Pr.Tm)(Tn,Object.assign(Object.assign({},Tn.props),{onClick:()=>{}}))})):w.createElement(ie.ZP,Object.assign({},Nr),w.createElement("span",null,Tn))};w.useImperativeHandle(N,()=>({handlePreview:Fr,handleDownload:$t}));const{getPrefixCls:mt}=w.useContext(Gn.E_),Xt=mt("upload",hn),at=mt(),aa=m()(`${Xt}-list`,`${Xt}-list-${q}`),Or=w.useMemo(()=>(0,Sr.Z)((0,$r.Z)(at),["onAppearEnd","onEnterEnd","onLeaveEnd"]),[at]),Ar=Object.assign(Object.assign({},Ut?{}:Or),{motionDeadline:2e3,motionName:`${Xt}-${Ut?"animate-inline":"animate"}`,keys:(0,Re.Z)(nn.map(Tn=>({key:Tn.uid,file:Tn}))),motionAppear:et});return w.createElement("div",{className:aa},w.createElement(Oe.V4,Object.assign({},Ar,{component:!1}),Tn=>{let{key:ft,file:Gt,className:qt,style:rr}=Tn;return w.createElement(yr,{key:ft,locale:le,prefixCls:Xt,className:qt,style:rr,file:Gt,items:nn,progress:P,listType:q,isImgUrl:sn,showPreviewIcon:kn,showRemoveIcon:Sn,showDownloadIcon:Ln,removeIcon:Vn,previewIcon:zn,downloadIcon:Fn,extra:Kn,iconRender:br,actionIconRender:Dt,itemRender:je,onPreview:Fr,onDownload:$t,onClose:Vt})}),ae&&w.createElement(Oe.ZP,Object.assign({},Ar,{visible:M,forceRender:!0}),Tn=>{let{className:ft,style:Gt}=Tn;return(0,Pr.Tm)(ae,qt=>({className:m()(qt.className,ft),style:Object.assign(Object.assign(Object.assign({},Gt),{pointerEvents:ft?"none":void 0}),qt.style)}))}))};var Fa=w.forwardRef(pa),va=function(x,N,q,Z){function fe(pe){return pe instanceof q?pe:new q(function(ke){ke(pe)})}return new(q||(q=Promise))(function(pe,ke){function le(hn){try{sn(Z.next(hn))}catch(nn){ke(nn)}}function pn(hn){try{sn(Z.throw(hn))}catch(nn){ke(nn)}}function sn(hn){hn.done?pe(hn.value):fe(hn.value).then(le,pn)}sn((Z=Z.apply(x,N||[])).next())})};const xr=`__LIST_IGNORE_${Date.now()}__`,no=(x,N)=>{const{fileList:q,defaultFileList:Z,onRemove:fe,showUploadList:pe=!0,listType:ke="text",onPreview:le,onDownload:pn,onChange:sn,onDrop:hn,previewFile:nn,disabled:kn,locale:Sn,iconRender:Ln,isImageUrl:Vn,progress:zn,prefixCls:Fn,className:Kn,type:P="select",children:ae,style:M,itemRender:je,maxCount:en,data:yn={},multiple:et=!1,hasControlInside:Rn=!0,action:Ut="",accept:Fr="",supportServerRender:$t=!0,rootClassName:Vt}=x,br=w.useContext(kt.Z),Dt=kn!=null?kn:br,[mt,Xt]=(0,vt.Z)(Z||[],{value:q,postState:mn=>mn!=null?mn:[]}),[at,aa]=w.useState("drop"),Or=w.useRef(null),Ar=w.useRef(null);w.useMemo(()=>{const mn=Date.now();(q||[]).forEach((nt,wt)=>{!nt.uid&&!Object.isFrozen(nt)&&(nt.uid=`__AUTO__${mn}_${wt}__`)})},[q]);const Tn=(mn,nt,wt)=>{let Zn=(0,Re.Z)(nt),yt=!1;en===1?Zn=Zn.slice(-1):en&&(yt=Zn.length>en,Zn=Zn.slice(0,en)),(0,re.flushSync)(()=>{Xt(Zn)});const er={file:mn,fileList:Zn};wt&&(er.event=wt),(!yt||mn.status==="removed"||Zn.some(Sa=>Sa.uid===mn.uid))&&(0,re.flushSync)(()=>{sn==null||sn(er)})},ft=(mn,nt)=>va(void 0,void 0,void 0,function*(){const{beforeUpload:wt,transformFile:Zn}=x;let yt=mn;if(wt){const er=yield wt(mn,nt);if(er===!1)return!1;if(delete mn[xr],er===xr)return Object.defineProperty(mn,xr,{value:!0,configurable:!0}),!1;typeof er=="object"&&er&&(yt=er)}return Zn&&(yt=yield Zn(yt)),yt}),Gt=mn=>{const nt=mn.filter(yt=>!yt.file[xr]);if(!nt.length)return;const wt=nt.map(yt=>Br(yt.file));let Zn=(0,Re.Z)(mt);wt.forEach(yt=>{Zn=jr(yt,Zn)}),wt.forEach((yt,er)=>{let Sa=yt;if(nt[er].parsedFile)yt.status="uploading";else{const{originFileObj:ha}=yt;let lo;try{lo=new File([ha],ha.name,{type:ha.type})}catch(Fl){lo=new Blob([ha],{type:ha.type}),lo.name=ha.name,lo.lastModifiedDate=new Date,lo.lastModified=new Date().getTime()}lo.uid=yt.uid,Sa=lo}Tn(Sa,Zn)})},qt=(mn,nt,wt)=>{try{typeof mn=="string"&&(mn=JSON.parse(mn))}catch(er){}if(!sa(nt,mt))return;const Zn=Br(nt);Zn.status="done",Zn.percent=100,Zn.response=mn,Zn.xhr=wt;const yt=jr(Zn,mt);Tn(Zn,yt)},rr=(mn,nt)=>{if(!sa(nt,mt))return;const wt=Br(nt);wt.status="uploading",wt.percent=mn.percent;const Zn=jr(wt,mt);Tn(wt,Zn,mn)},Nr=(mn,nt,wt)=>{if(!sa(wt,mt))return;const Zn=Br(wt);Zn.error=mn,Zn.response=nt,Zn.status="error";const yt=jr(Zn,mt);Tn(Zn,yt)},Ma=mn=>{let nt;Promise.resolve(typeof fe=="function"?fe(mn):fe).then(wt=>{var Zn;if(wt===!1)return;const yt=Ur(mn,mt);yt&&(nt=Object.assign(Object.assign({},mn),{status:"removed"}),mt==null||mt.forEach(er=>{const Sa=nt.uid!==void 0?"uid":"name";er[Sa]===nt[Sa]&&!Object.isFrozen(er)&&(er.status="removed")}),(Zn=Or.current)===null||Zn===void 0||Zn.abort(nt),Tn(nt,yt))})},pr=mn=>{aa(mn.type),mn.type==="drop"&&(hn==null||hn(mn))};w.useImperativeHandle(N,()=>({onBatchStart:Gt,onSuccess:qt,onProgress:rr,onError:Nr,fileList:mt,upload:Or.current,nativeElement:Ar.current}));const{getPrefixCls:ka,direction:Va,upload:Nt}=w.useContext(Gn.E_),a=ka("upload",Fn),i=Object.assign(Object.assign({onBatchStart:Gt,onError:Nr,onProgress:rr,onSuccess:qt},x),{data:yn,multiple:et,action:Ut,accept:Fr,supportServerRender:$t,prefixCls:a,disabled:Dt,beforeUpload:ft,onChange:void 0,hasControlInside:Rn});delete i.className,delete i.style,(!ae||Dt)&&delete i.id;const d=`${a}-wrapper`,[o,u,s]=he(a,d),[h]=(0,Ct.Z)("Upload",Ve.Z.Upload),{showRemoveIcon:k,showPreviewIcon:S,showDownloadIcon:oe,removeIcon:ye,previewIcon:Qe,downloadIcon:ln,extra:bn}=typeof pe=="boolean"?{}:pe,Ye=typeof k=="undefined"?!Dt:k,ze=(mn,nt)=>pe?w.createElement(Fa,{prefixCls:a,listType:ke,items:mt,previewFile:nn,onPreview:le,onDownload:pn,onRemove:Ma,showRemoveIcon:Ye,showPreviewIcon:S,showDownloadIcon:oe,removeIcon:ye,previewIcon:Qe,downloadIcon:ln,iconRender:Ln,extra:bn,locale:Object.assign(Object.assign({},h),Sn),isImageUrl:Vn,progress:zn,appendAction:mn,appendActionVisible:nt,itemRender:je,disabled:Dt}):mn,En=m()(d,Kn,Vt,u,s,Nt==null?void 0:Nt.className,{[`${a}-rtl`]:Va==="rtl",[`${a}-picture-card-wrapper`]:ke==="picture-card",[`${a}-picture-circle-wrapper`]:ke==="picture-circle"}),Nn=Object.assign(Object.assign({},Nt==null?void 0:Nt.style),M);if(P==="drag"){const mn=m()(u,a,`${a}-drag`,{[`${a}-drag-uploading`]:mt.some(nt=>nt.status==="uploading"),[`${a}-drag-hover`]:at==="dragover",[`${a}-disabled`]:Dt,[`${a}-rtl`]:Va==="rtl"});return o(w.createElement("span",{className:En,ref:Ar},w.createElement("div",{className:mn,style:Nn,onDrop:pr,onDragOver:pr,onDragLeave:pr},w.createElement(Mt,Object.assign({},i,{ref:Or,className:`${a}-btn`}),w.createElement("div",{className:`${a}-drag-container`},ae))),ze()))}const Jt=m()(a,`${a}-select`,{[`${a}-disabled`]:Dt,[`${a}-hidden`]:!ae}),Kt=w.createElement("div",{className:Jt},w.createElement(Mt,Object.assign({},i,{ref:Or})));return o(ke==="picture-card"||ke==="picture-circle"?w.createElement("span",{className:En,ref:Ar},ze(Kt,!!ae)):w.createElement("span",{className:En,ref:Ar},Kt,ze()))};var Zr=w.forwardRef(no),zr=function(x,N){var q={};for(var Z in x)Object.prototype.hasOwnProperty.call(x,Z)&&N.indexOf(Z)<0&&(q[Z]=x[Z]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var fe=0,Z=Object.getOwnPropertySymbols(x);fe<Z.length;fe++)N.indexOf(Z[fe])<0&&Object.prototype.propertyIsEnumerable.call(x,Z[fe])&&(q[Z[fe]]=x[Z[fe]]);return q},Oa=w.forwardRef((x,N)=>{var{style:q,height:Z,hasControlInside:fe=!1}=x,pe=zr(x,["style","height","hasControlInside"]);return w.createElement(Zr,Object.assign({ref:N,hasControlInside:fe},pe,{type:"drag",style:Object.assign(Object.assign({},q),{height:Z})}))});const xa=Zr;xa.Dragger=Oa,xa.LIST_IGNORE=xr;var Ra=xa;function Pa(x,N){const{children:q,upload:Z,rootClassName:fe}=x,pe=w.useRef(null);return w.useImperativeHandle(N,()=>pe.current),w.createElement(Ra,(0,z.Z)({},Z,{showUploadList:!1,rootClassName:fe,ref:pe}),q)}var Lr=w.forwardRef(Pa),Ea={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 00-10.27-5.79h-38.44a12 12 0 00-6.4 1.85 12 12 0 00-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 00-1.84 6.39 12 12 0 0012 12h34.46a12 12 0 0010.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0010.23 5.72h37.48a12 12 0 006.48-1.9 12 12 0 003.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 001.9-6.5 12 12 0 00-12-12h-35.7a12 12 0 00-10.29 5.84z"}}]},name:"file-excel",theme:"filled"},Lt=Ea,Wr=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:Lt}))},Tt=w.forwardRef(Wr),Yt=Tt,ea={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0112.6 0l41.1 52.4 77.8-99.2a8 8 0 0112.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"}}]},name:"file-image",theme:"filled"},to=ea,Ca=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:to}))},Do=w.forwardRef(Ca),Io=Do,qa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0014.62 9.5h24.06a16 16 0 0014.63-9.51l59.1-133.35V758a16 16 0 0016.01 16H641a16 16 0 0016-16V486a16 16 0 00-16-16h-34.75a16 16 0 00-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 00-14.67-9.61H383a16 16 0 00-16 16v272a16 16 0 0016 16h27.13a16 16 0 0016-16V600.93z"}}]},name:"file-markdown",theme:"filled"},Lo=qa,Fo=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:Lo}))},Cr=w.forwardRef(Fo),t=Cr,c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 015.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 01-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 01-1.12-.15 2.07 2.07 0 01-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 01-1.36 6.31 6.7 6.7 0 01-2.17 1.28z"}}]},name:"file-pdf",theme:"filled"},p=c,b=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:p}))},y=w.forwardRef(b),v=y,I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 00-12 12v276a12 12 0 0012 12h32.53a12 12 0 0012-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z"}}]},name:"file-ppt",theme:"filled"},L=I,K=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:L}))},ce=w.forwardRef(K),Pe=ce,$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0011.6 8.9h31.77a12 12 0 0011.6-8.88l74.37-276a12 12 0 00.4-3.12 12 12 0 00-12-12h-35.57a12 12 0 00-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 00528.1 472h-32.2a12 12 0 00-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 00-11.68-9.29h-35.39a12 12 0 00-3.11.41 12 12 0 00-8.47 14.7l74.17 276A12 12 0 00415.6 772h31.99a12 12 0 0011.59-8.9l52.81-197z"}}]},name:"file-word",theme:"filled"},un=$e,rn=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:un}))},De=w.forwardRef(rn),At=De,rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"}}]},name:"file-zip",theme:"filled"},pt=rt,Mn=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:pt}))},Yn=w.forwardRef(Mn),qn=Yn,Jn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 00-8 8v48a8 8 0 008 8h384a8 8 0 008-8v-48a8 8 0 00-8-8H320zm0 136a8 8 0 00-8 8v48a8 8 0 008 8h184a8 8 0 008-8v-48a8 8 0 00-8-8H320z"}}]},name:"file-text",theme:"filled"},ut=Jn,Qt=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:ut}))},zt=w.forwardRef(Qt),na=zt,lr=B(1085),ro=function(N,q){return w.createElement(g.Z,(0,z.Z)({},N,{ref:q,icon:lr.Z}))},go=w.forwardRef(ro),ta=go,dr=B(95715),ra=B(74095),Rt=B(43495),vo=x=>{const{componentCls:N,calc:q}=x,Z=`${N}-list-card`,fe=q(x.fontSize).mul(x.lineHeight).mul(2).add(x.paddingSM).add(x.paddingSM).equal();return{[Z]:{borderRadius:x.borderRadius,position:"relative",background:x.colorFillContent,borderWidth:x.lineWidth,borderStyle:"solid",borderColor:"transparent",flex:"none",[`${Z}-name,${Z}-desc`]:{display:"flex",flexWrap:"nowrap",maxWidth:"100%"},[`${Z}-ellipsis-prefix`]:{flex:"0 1 auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},[`${Z}-ellipsis-suffix`]:{flex:"none"},"&-type-overview":{padding:q(x.paddingSM).sub(x.lineWidth).equal(),paddingInlineStart:q(x.padding).add(x.lineWidth).equal(),display:"flex",flexWrap:"nowrap",gap:x.paddingXS,alignItems:"flex-start",width:236,[`${Z}-icon`]:{fontSize:q(x.fontSizeLG).mul(2).equal(),lineHeight:1,paddingTop:q(x.paddingXXS).mul(1.5).equal(),flex:"none"},[`${Z}-content`]:{flex:"auto",minWidth:0,display:"flex",flexDirection:"column",alignItems:"stretch"},[`${Z}-desc`]:{color:x.colorTextTertiary}},"&-type-preview":{width:fe,height:fe,lineHeight:1,display:"flex",alignItems:"center",[`&:not(${Z}-status-error)`]:{border:0},img:{objectFit:"cover",borderRadius:"inherit"},[`${Z}-img-mask`]:{position:"absolute",inset:0,display:"flex",justifyContent:"center",alignItems:"center",background:`rgba(0, 0, 0, ${x.opacityLoading})`,borderRadius:"inherit"},[`&${Z}-status-error`]:{[`img, ${Z}-img-mask`]:{borderRadius:q(x.borderRadius).sub(x.lineWidth).equal()},[`${Z}-desc`]:{paddingInline:x.paddingXXS}},[`${Z}-progress`]:{}},[`${Z}-remove`]:{position:"absolute",top:0,insetInlineEnd:0,border:0,padding:x.paddingXXS,background:"transparent",lineHeight:1,transform:"translate(50%, -50%)",fontSize:x.fontSize,cursor:"pointer",opacity:x.opacityLoading,display:"none","&:dir(rtl)":{transform:"translate(-50%, -50%)"},"&:hover":{opacity:1},"&:active":{opacity:x.opacityLoading}},[`&:hover ${Z}-remove`]:{display:"block"},"&-status-error":{borderColor:x.colorError,[`${Z}-desc`]:{color:x.colorError}},"&-motion":{transition:["opacity","width","margin","padding"].map(pe=>`${pe} ${x.motionDurationSlow}`).join(","),"&-appear-start":{width:0,transition:"none"},"&-leave-active":{opacity:0,width:0,paddingInline:0,borderInlineWidth:0,marginInlineEnd:q(x.paddingSM).mul(-1).equal()}}}}};const Oo={"&, *":{boxSizing:"border-box"}},xo=x=>{const{componentCls:N,calc:q,antCls:Z}=x,fe=`${N}-drop-area`,pe=`${N}-placeholder`;return{[fe]:Ao(Pn({position:"absolute",inset:0,zIndex:x.zIndexPopupBase},Oo),{"&-on-body":{position:"fixed",inset:0},"&-hide-placement":{[`${pe}-inner`]:{display:"none"}},[pe]:{padding:0}}),"&":{[pe]:Ao(Pn({height:"100%",borderRadius:x.borderRadius,borderWidth:x.lineWidthBold,borderStyle:"dashed",borderColor:"transparent",padding:x.padding,position:"relative",backdropFilter:"blur(10px)",background:x.colorBgPlaceholderHover},Oo),{[`${Z}-upload-wrapper ${Z}-upload${Z}-upload-btn`]:{padding:0},[`&${pe}-drag-in`]:{borderColor:x.colorPrimaryHover},[`&${pe}-disabled`]:{opacity:.25,pointerEvents:"none"},[`${pe}-inner`]:{gap:q(x.paddingXXS).div(2).equal()},[`${pe}-icon`]:{fontSize:x.fontSizeHeading2,lineHeight:1},[`${pe}-title${pe}-title`]:{margin:0,fontSize:x.fontSize,lineHeight:x.lineHeight},[`${pe}-description`]:{}})}}},Za=x=>{const{componentCls:N,calc:q}=x,Z=`${N}-list`,fe=q(x.fontSize).mul(x.lineHeight).mul(2).add(x.paddingSM).add(x.paddingSM).equal();return{[N]:Ao(Pn({position:"relative",width:"100%"},Oo),{[Z]:{display:"flex",flexWrap:"wrap",gap:x.paddingSM,fontSize:x.fontSize,lineHeight:x.lineHeight,color:x.colorText,paddingBlock:x.paddingSM,paddingInline:x.padding,width:"100%",background:x.colorBgContainer,scrollbarWidth:"none","-ms-overflow-style":"none","&::-webkit-scrollbar":{display:"none"},"&-overflow-scrollX, &-overflow-scrollY":{"&:before, &:after":{content:'""',position:"absolute",opacity:0,transition:`opacity ${x.motionDurationSlow}`,zIndex:1}},"&-overflow-ping-start:before":{opacity:1},"&-overflow-ping-end:after":{opacity:1},"&-overflow-scrollX":{overflowX:"auto",overflowY:"hidden",flexWrap:"nowrap","&:before, &:after":{insetBlock:0,width:8},"&:before":{insetInlineStart:0,background:"linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"},"&:after":{insetInlineEnd:0,background:"linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"},"&:dir(rtl)":{"&:before":{background:"linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"},"&:after":{background:"linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"}}},"&-overflow-scrollY":{overflowX:"hidden",overflowY:"auto",maxHeight:q(fe).mul(3).equal(),"&:before, &:after":{insetInline:0,height:8},"&:before":{insetBlockStart:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0));"},"&:after":{insetBlockEnd:0,background:"linear-gradient(to top, rgba(0,0,0,0.06), rgba(0,0,0,0));"}},"&-upload-btn":{width:fe,height:fe,fontSize:x.fontSizeHeading2,color:"#999"},"&-prev-btn, &-next-btn":{position:"absolute",top:"50%",transform:"translateY(-50%)",boxShadow:x.boxShadowTertiary,opacity:0,pointerEvents:"none"},"&-prev-btn":{left:{_skip_check_:!0,value:x.padding}},"&-next-btn":{right:{_skip_check_:!0,value:x.padding}},"&:dir(ltr)":{[`&${Z}-overflow-ping-start ${Z}-prev-btn`]:{opacity:1,pointerEvents:"auto"},[`&${Z}-overflow-ping-end ${Z}-next-btn`]:{opacity:1,pointerEvents:"auto"}},"&:dir(rtl)":{[`&${Z}-overflow-ping-end ${Z}-prev-btn`]:{opacity:1,pointerEvents:"auto"},[`&${Z}-overflow-ping-start ${Z}-next-btn`]:{opacity:1,pointerEvents:"auto"}}}})}},ri=x=>{const{colorBgContainer:N}=x;return{colorBgPlaceholderHover:new ra.t(N).setA(.85).toRgbString()}};var qo=(0,Rt.I$)("Attachments",x=>{const N=(0,we.IX)(x,{});return[xo(N),Za(N),vo(N)]},ri);const Zo=x=>x.indexOf("image/")===0,Vr=200;function Wa(x){return new Promise(N=>{if(!x||!x.type||!Zo(x.type)){N("");return}const q=new Image;if(q.onload=()=>{const{width:Z,height:fe}=q,pe=Z/fe,ke=pe>1?Vr:Vr*pe,le=pe>1?Vr/pe:Vr,pn=document.createElement("canvas");pn.width=ke,pn.height=le,pn.style.cssText=`position: fixed; left: 0; top: 0; width: ${ke}px; height: ${le}px; z-index: 9999; display: none;`,document.body.appendChild(pn),pn.getContext("2d").drawImage(q,0,0,ke,le);const hn=pn.toDataURL();document.body.removeChild(pn),window.URL.revokeObjectURL(q.src),N(hn)},q.crossOrigin="anonymous",x.type.startsWith("image/svg+xml")){const Z=new FileReader;Z.onload=()=>{Z.result&&typeof Z.result=="string"&&(q.src=Z.result)},Z.readAsDataURL(x)}else if(x.type.startsWith("image/gif")){const Z=new FileReader;Z.onload=()=>{Z.result&&N(Z.result)},Z.readAsDataURL(x)}else q.src=window.URL.createObjectURL(x)})}function ai(){return w.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},w.createElement("title",null,"audio"),w.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},w.createElement("path",{d:"M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z",fill:"currentColor"})))}var Ya=B(9361);function Wo(x){const{percent:N}=x,{token:q}=Ya.Z.useToken();return w.createElement(qr.Z,{type:"circle",percent:N,size:q.fontSizeHeading2*2,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:Z=>w.createElement("span",{style:{color:"#FFF"}},(Z||0).toFixed(0),"%")})}function Ro(){return w.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},w.createElement("title",null,"video"),w.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},w.createElement("path",{d:"M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z",fill:"currentColor"})))}const ao="\xA0",wa="#8c8c8c",Yo=["png","jpg","jpeg","gif","bmp","webp","svg"],Po=[{icon:w.createElement(Yt,null),color:"#22b35e",ext:["xlsx","xls"]},{icon:w.createElement(Io,null),color:wa,ext:Yo},{icon:w.createElement(t,null),color:wa,ext:["md","mdx"]},{icon:w.createElement(v,null),color:"#ff4d4f",ext:["pdf"]},{icon:w.createElement(Pe,null),color:"#ff6e31",ext:["ppt","pptx"]},{icon:w.createElement(At,null),color:"#1677ff",ext:["doc","docx"]},{icon:w.createElement(qn,null),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:w.createElement(Ro,null),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:w.createElement(ai,null),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Eo(x,N){return N.some(q=>x.toLowerCase()===`.${q}`)}function oo(x){let N=x;const q=["B","KB","MB","GB","TB","PB","EB"];let Z=0;for(;N>=1024&&Z<q.length-1;)N/=1024,Z++;return`${N.toFixed(0)} ${q[Z]}`}function Vo(x,N){const{prefixCls:q,item:Z,onRemove:fe,className:pe,style:ke,imageProps:le}=x,pn=w.useContext(_),{disabled:sn}=pn||{},{name:hn,size:nn,percent:kn,status:Sn="done",description:Ln}=Z,{getPrefixCls:Vn}=(0,Fe.Z)(),zn=Vn("attachment",q),Fn=`${zn}-list-card`,[Kn,P,ae]=qo(zn),[M,je]=w.useMemo(()=>{const Dt=hn||"",mt=Dt.match(/^(.*)\.[^.]+$/);return mt?[mt[1],Dt.slice(mt[1].length)]:[Dt,""]},[hn]),en=w.useMemo(()=>Eo(je,Yo),[je]),yn=w.useMemo(()=>Ln||(Sn==="uploading"?`${kn||0}%`:Sn==="error"?Z.response||ao:nn?oo(nn):ao),[Sn,kn]),[et,Rn]=w.useMemo(()=>{for(const{ext:Dt,icon:mt,color:Xt}of Po)if(Eo(je,Dt))return[mt,Xt];return[w.createElement(na,{key:"defaultIcon"}),wa]},[je]),[Ut,Fr]=w.useState();w.useEffect(()=>{if(Z.originFileObj){let Dt=!0;return Wa(Z.originFileObj).then(mt=>{Dt&&Fr(mt)}),()=>{Dt=!1}}Fr(void 0)},[Z.originFileObj]);let $t=null;const Vt=Z.thumbUrl||Z.url||Ut,br=en&&(Z.originFileObj||Vt);return br?$t=w.createElement(w.Fragment,null,Vt&&w.createElement(dr.Z,(0,z.Z)({alt:"preview",src:Vt},le)),Sn!=="done"&&w.createElement("div",{className:`${Fn}-img-mask`},Sn==="uploading"&&kn!==void 0&&w.createElement(Wo,{percent:kn,prefixCls:Fn}),Sn==="error"&&w.createElement("div",{className:`${Fn}-desc`},w.createElement("div",{className:`${Fn}-ellipsis-prefix`},yn)))):$t=w.createElement(w.Fragment,null,w.createElement("div",{className:`${Fn}-icon`,style:{color:Rn}},et),w.createElement("div",{className:`${Fn}-content`},w.createElement("div",{className:`${Fn}-name`},w.createElement("div",{className:`${Fn}-ellipsis-prefix`},M!=null?M:ao),w.createElement("div",{className:`${Fn}-ellipsis-suffix`},je)),w.createElement("div",{className:`${Fn}-desc`},w.createElement("div",{className:`${Fn}-ellipsis-prefix`},yn)))),Kn(w.createElement("div",{className:m()(Fn,{[`${Fn}-status-${Sn}`]:Sn,[`${Fn}-type-preview`]:br,[`${Fn}-type-overview`]:!br},pe,P,ae),style:ke,ref:N},$t,!sn&&fe&&w.createElement("button",{type:"button",className:`${Fn}-remove`,onClick:()=>{fe(Z)}},w.createElement(ta,null))))}var wr=w.forwardRef(Vo);const Co=1;function fa(x){const{prefixCls:N,items:q,onRemove:Z,overflow:fe,upload:pe,listClassName:ke,listStyle:le,itemClassName:pn,itemStyle:sn,imageProps:hn}=x,nn=`${N}-list`,kn=w.useRef(null),[Sn,Ln]=w.useState(!1),{disabled:Vn}=w.useContext(_);w.useEffect(()=>(Ln(!0),()=>{Ln(!1)}),[]);const[zn,Fn]=w.useState(!1),[Kn,P]=w.useState(!1),ae=()=>{const yn=kn.current;yn&&(fe==="scrollX"?(Fn(Math.abs(yn.scrollLeft)>=Co),P(yn.scrollWidth-yn.clientWidth-Math.abs(yn.scrollLeft)>=Co)):fe==="scrollY"&&(Fn(yn.scrollTop!==0),P(yn.scrollHeight-yn.clientHeight!==yn.scrollTop)))};w.useEffect(()=>{ae()},[fe,q.length]);const M=yn=>{const et=kn.current;et&&et.scrollTo({left:et.scrollLeft+yn*et.clientWidth,behavior:"smooth"})},je=()=>{M(-1)},en=()=>{M(1)};return w.createElement("div",{className:m()(nn,{[`${nn}-overflow-${x.overflow}`]:fe,[`${nn}-overflow-ping-start`]:zn,[`${nn}-overflow-ping-end`]:Kn},ke),ref:kn,onScroll:ae,style:le},w.createElement(Oe.V4,{keys:q.map(yn=>({key:yn.uid,item:yn})),motionName:`${nn}-card-motion`,component:!1,motionAppear:Sn,motionLeave:!0,motionEnter:!0},({key:yn,item:et,className:Rn,style:Ut})=>w.createElement(wr,{key:yn,prefixCls:N,item:et,onRemove:Z,className:m()(Rn,pn),imageProps:hn,style:Pn(Pn({},Ut),sn)})),!Vn&&w.createElement(Lr,{upload:pe},w.createElement(ie.ZP,{className:`${nn}-upload-btn`,type:"dashed"},w.createElement(J,{className:`${nn}-upload-btn-icon`}))),fe==="scrollX"&&w.createElement(w.Fragment,null,w.createElement(ie.ZP,{size:"small",shape:"circle",className:`${nn}-prev-btn`,icon:w.createElement(We,null),onClick:je}),w.createElement(ie.ZP,{size:"small",shape:"circle",className:`${nn}-next-btn`,icon:w.createElement(D,null),onClick:en})))}var Ko=B(86250),wo=B(71471);function oi(x,N){const{prefixCls:q,placeholder:Z={},upload:fe,className:pe,style:ke}=x,le=`${q}-placeholder`,pn=Z||{},{disabled:sn}=w.useContext(_),[hn,nn]=w.useState(!1),kn=()=>{nn(!0)},Sn=zn=>{zn.currentTarget.contains(zn.relatedTarget)||nn(!1)},Ln=()=>{nn(!1)},Vn=w.isValidElement(Z)?Z:w.createElement(Ko.Z,{align:"center",justify:"center",vertical:!0,className:`${le}-inner`},w.createElement(wo.Z.Text,{className:`${le}-icon`},pn.icon),w.createElement(wo.Z.Title,{className:`${le}-title`,level:5},pn.title),w.createElement(wo.Z.Text,{className:`${le}-description`,type:"secondary"},pn.description));return w.createElement("div",{className:m()(le,{[`${le}-drag-in`]:hn,[`${le}-disabled`]:sn},pe),onDragEnter:kn,onDragLeave:Sn,onDrop:Ln,"aria-hidden":sn,style:ke},w.createElement(Ra.Dragger,(0,z.Z)({showUploadList:!1},fe,{ref:N,style:{padding:0,border:0,background:"transparent"}}),Vn))}var io=w.forwardRef(oi);function ii(x,N){const Ar=x,{prefixCls:q,rootClassName:Z,rootStyle:fe,className:pe,style:ke,items:le,children:pn,getDropContainer:sn,placeholder:hn,onChange:nn,onRemove:kn,overflow:Sn,imageProps:Ln,disabled:Vn,classNames:zn={},styles:Fn={}}=Ar,Kn=Ga(Ar,["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","onRemove","overflow","imageProps","disabled","classNames","styles"]),{getPrefixCls:P,direction:ae}=(0,Fe.Z)(),M=P("attachment",q),je=(0,R.Z)("attachments"),{classNames:en,styles:yn}=je,et=w.useRef(null),Rn=w.useRef(null);w.useImperativeHandle(N,()=>({nativeElement:et.current,upload:Tn=>{var Gt,qt;const ft=(qt=(Gt=Rn.current)==null?void 0:Gt.nativeElement)==null?void 0:qt.querySelector('input[type="file"]');if(ft){const rr=new DataTransfer;rr.items.add(Tn),ft.files=rr.files,ft.dispatchEvent(new Event("change",{bubbles:!0}))}}}));const[Ut,Fr,$t]=qo(M),Vt=m()(Fr,$t),[br,Dt]=(0,G.C8)([],{value:le}),mt=(0,G.zX)(Tn=>{Dt(Tn.fileList),nn==null||nn(Tn)}),Xt=Ao(Pn({},Kn),{fileList:br,onChange:mt}),at=Tn=>Promise.resolve(typeof kn=="function"?kn(Tn):kn).then(ft=>{if(ft===!1)return;const Gt=br.filter(qt=>qt.uid!==Tn.uid);mt({file:Ao(Pn({},Tn),{status:"removed"}),fileList:Gt})});let aa;const Or=(Tn,ft,Gt)=>{const qt=typeof hn=="function"?hn(Tn):hn;return w.createElement(io,{placeholder:qt,upload:Xt,prefixCls:M,className:m()(en.placeholder,zn.placeholder),style:Pn(Pn(Pn({},yn.placeholder),Fn.placeholder),ft==null?void 0:ft.style),ref:Gt})};if(pn)aa=w.createElement(w.Fragment,null,w.createElement(Lr,{upload:Xt,rootClassName:Z,ref:Rn},pn),w.createElement(C,{getDropContainer:sn,prefixCls:M,className:m()(Vt,Z)},Or("drop")));else{const Tn=br.length>0;aa=w.createElement("div",{className:m()(M,Vt,{[`${M}-rtl`]:ae==="rtl"},pe,Z),style:Pn(Pn({},fe),ke),dir:ae||"ltr",ref:et},w.createElement(fa,{prefixCls:M,items:br,onRemove:at,overflow:Sn,upload:Xt,listClassName:m()(en.list,zn.list),listStyle:Pn(Pn(Pn({},yn.list),Fn.list),!Tn&&{display:"none"}),itemClassName:m()(en.item,zn.item),itemStyle:Pn(Pn({},yn.item),Fn.item),imageProps:Ln}),Or("inline",Tn?{style:{display:"none"}}:{},Rn),w.createElement(C,{getDropContainer:sn||(()=>et.current),prefixCls:M,className:Vt},Or("drop")))}return Ut(w.createElement(_.Provider,{value:{disabled:Vn}},aa))}const Xo=w.forwardRef(ii);Xo.FileCard=wr;var li=Xo},76654:function(tn,H,B){"use strict";B.d(H,{Z:function(){return xe}});var se=B(87462),m=B(93967),w=B.n(m),R=B(67294),Fe=B(68997),G=B(21450),re=B(36158),_=B(8410);function C(V){return typeof V=="string"}var O=(V,Ee,Ke,an)=>{const In=R.useRef(""),[On,gn]=R.useState(1),Qn=Ee&&C(V);return(0,_.Z)(()=>{!Qn&&C(V)?gn(V.length):C(V)&&C(In.current)&&V.indexOf(In.current)!==0&&gn(1),In.current=V},[V]),R.useEffect(()=>{if(Qn&&On<V.length){const ht=setTimeout(()=>{gn(ct=>ct+Ke)},an);return()=>{clearTimeout(ht)}}},[On,Ee,V]),[Qn?V.slice(0,On):V,Qn&&On<V.length]};function g(V){return R.useMemo(()=>{if(!V)return[!1,0,0,null];let Ee={step:1,interval:50,suffix:null};return typeof V=="object"&&(Ee=Pn(Pn({},Ee),V)),[!0,Ee.step,Ee.interval,Ee.suffix]},[V])}var te=g,J=({prefixCls:V})=>R.createElement("span",{className:`${V}-dot`},R.createElement("i",{className:`${V}-dot-item`,key:"item-1"}),R.createElement("i",{className:`${V}-dot-item`,key:"item-2"}),R.createElement("i",{className:`${V}-dot-item`,key:"item-3"})),de=B(11568),Ce=B(83262),be=B(43495);const We=V=>{const{componentCls:Ee,paddingSM:Ke,padding:an}=V;return{[Ee]:{[`${Ee}-content`]:{"&-filled,&-outlined,&-shadow":{padding:`${(0,de.bf)(Ke)} ${(0,de.bf)(an)}`,borderRadius:V.borderRadiusLG},"&-filled":{backgroundColor:V.colorFillContent},"&-outlined":{border:`1px solid ${V.colorBorderSecondary}`},"&-shadow":{boxShadow:V.boxShadowTertiary}}}}},Ze=V=>{const{componentCls:Ee,fontSize:Ke,lineHeight:an,paddingSM:In,padding:On,calc:gn}=V,Qn=gn(Ke).mul(an).div(2).add(In).equal(),vn=`${Ee}-content`;return{[Ee]:{[vn]:{"&-round":{borderRadius:{_skip_check_:!0,value:Qn},paddingInline:gn(On).mul(1.25).equal()}},[`&-start ${vn}-corner`]:{borderStartStartRadius:V.borderRadiusXS},[`&-end ${vn}-corner`]:{borderStartEndRadius:V.borderRadiusXS}}}};var U=V=>{const{componentCls:Ee,padding:Ke}=V;return{[`${Ee}-list`]:{display:"flex",flexDirection:"column",gap:Ke,overflowY:"auto","&::-webkit-scrollbar":{width:8,backgroundColor:"transparent"},"&::-webkit-scrollbar-thumb":{backgroundColor:V.colorTextTertiary,borderRadius:V.borderRadiusSM},"&":{scrollbarWidth:"thin",scrollbarColor:`${V.colorTextTertiary} transparent`}}}};const D=new de.E4("loadingMove",{"0%":{transform:"translateY(0)"},"10%":{transform:"translateY(4px)"},"20%":{transform:"translateY(0)"},"30%":{transform:"translateY(-4px)"},"40%":{transform:"translateY(0)"}}),ie=new de.E4("cursorBlink",{"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}}),Oe=V=>{const{componentCls:Ee,fontSize:Ke,lineHeight:an,paddingSM:In,colorText:On,calc:gn}=V;return{[Ee]:{display:"flex",columnGap:In,[`&${Ee}-end`]:{justifyContent:"end",flexDirection:"row-reverse",[`& ${Ee}-content-wrapper`]:{alignItems:"flex-end"}},[`&${Ee}-rtl`]:{direction:"rtl"},[`&${Ee}-typing ${Ee}-content:last-child::after`]:{content:'"|"',fontWeight:900,userSelect:"none",opacity:1,marginInlineStart:"0.1em",animationName:ie,animationDuration:"0.8s",animationIterationCount:"infinite",animationTimingFunction:"linear"},[`& ${Ee}-avatar`]:{display:"inline-flex",justifyContent:"center",alignSelf:"flex-start"},[`& ${Ee}-header, & ${Ee}-footer`]:{fontSize:Ke,lineHeight:an,color:V.colorText},[`& ${Ee}-header`]:{marginBottom:V.paddingXXS},[`& ${Ee}-footer`]:{marginTop:In},[`& ${Ee}-content-wrapper`]:{flex:"auto",display:"flex",flexDirection:"column",alignItems:"flex-start",minWidth:0,maxWidth:"100%"},[`& ${Ee}-content`]:{position:"relative",boxSizing:"border-box",minWidth:0,maxWidth:"100%",color:On,fontSize:V.fontSize,lineHeight:V.lineHeight,minHeight:gn(In).mul(2).add(gn(an).mul(Ke)).equal(),wordBreak:"break-word",[`& ${Ee}-dot`]:{position:"relative",height:"100%",display:"flex",alignItems:"center",columnGap:V.marginXS,padding:`0 ${(0,de.bf)(V.paddingXXS)}`,"&-item":{backgroundColor:V.colorPrimary,borderRadius:"100%",width:4,height:4,animationName:D,animationDuration:"2s",animationIterationCount:"infinite",animationTimingFunction:"linear","&:nth-child(1)":{animationDelay:"0s"},"&:nth-child(2)":{animationDelay:"0.2s"},"&:nth-child(3)":{animationDelay:"0.4s"}}}}}}},Re=()=>({});var T=(0,be.I$)("Bubble",V=>{const Ee=(0,Ce.IX)(V,{});return[Oe(Ee),U(Ee),We(Ee),Ze(Ee)]},Re);const ne=R.createContext({}),Q=(V,Ee)=>{const Dn=V,{prefixCls:Ke,className:an,rootClassName:In,style:On,classNames:gn={},styles:Qn={},avatar:vn,placement:ht="start",loading:ct=!1,loadingRender:Un,typing:Zt,content:Mt="",messageRender:vt,variant:Gn="filled",shape:kt,onTypingComplete:Ct,header:Ve,footer:Y}=Dn,Ie=Ga(Dn,["prefixCls","className","rootClassName","style","classNames","styles","avatar","placement","loading","loadingRender","typing","content","messageRender","variant","shape","onTypingComplete","header","footer"]),{onUpdate:Te}=R.useContext(ne),we=R.useRef(null);R.useImperativeHandle(Ee,()=>({nativeElement:we.current}));const{direction:Xe,getPrefixCls:Cn}=(0,re.Z)(),Je=Cn("bubble",Ke),$=(0,G.Z)("bubble"),[on,wn,xn,qe]=te(Zt),[Bn,it]=O(Mt,on,wn,xn);R.useEffect(()=>{Te==null||Te()},[Bn]);const xt=R.useRef(!1);R.useEffect(()=>{!it&&!ct?xt.current||(xt.current=!0,Ct==null||Ct()):xt.current=!1},[it,ct]);const[Ft,St,Ot]=T(Je),He=w()(Je,In,$.className,an,St,Ot,`${Je}-${ht}`,{[`${Je}-rtl`]:Xe==="rtl",[`${Je}-typing`]:it&&!ct&&!vt&&!qe}),he=R.useMemo(()=>R.isValidElement(vn)?vn:R.createElement(Fe.Z,vn),[vn]),Le=R.useMemo(()=>vt?vt(Bn):Bn,[Bn,vt]);let Me;ct?Me=Un?Un():R.createElement(J,{prefixCls:Je}):Me=R.createElement(R.Fragment,null,Le,it&&qe);let An=R.createElement("div",{style:Pn(Pn({},$.styles.content),Qn.content),className:w()(`${Je}-content`,`${Je}-content-${Gn}`,kt&&`${Je}-content-${kt}`,$.classNames.content,gn.content)},Me);return(Ve||Y)&&(An=R.createElement("div",{className:`${Je}-content-wrapper`},Ve&&R.createElement("div",{className:w()(`${Je}-header`,$.classNames.header,gn.header),style:Pn(Pn({},$.styles.header),Qn.header)},Ve),An,Y&&R.createElement("div",{className:w()(`${Je}-footer`,$.classNames.footer,gn.footer),style:Pn(Pn({},$.styles.footer),Qn.footer)},Y))),Ft(R.createElement("div",(0,se.Z)({style:Pn(Pn({},$.style),On),className:He},Ie,{ref:we}),vn&&R.createElement("div",{style:Pn(Pn({},$.styles.avatar),Qn.avatar),className:w()(`${Je}-avatar`,$.classNames.avatar,gn.avatar)},he),An))};var X=R.forwardRef(Q),Ae=B(56790),Be=B(64217);function Ue(V,Ee){const Ke=R.useCallback((an,In)=>typeof Ee=="function"?Ee(an,In):Ee?Ee[an.role]||{}:{},[Ee]);return R.useMemo(()=>(V||[]).map((an,In)=>{var gn;const On=(gn=an.key)!=null?gn:`preset_${In}`;return Ao(Pn(Pn({},Ke(an,In)),an),{key:On})}),[V,Ke])}const ge=(an,Ke)=>{var In=an,{_key:V}=In,Ee=Ga(In,["_key"]);return R.createElement(X,(0,se.Z)({},Ee,{ref:On=>{var gn;On?Ke.current[V]=On:(gn=Ke.current)==null||delete gn[V]}}))},Ge=R.memo(R.forwardRef(ge)),cn=1,Xn=(V,Ee)=>{const wn=V,{prefixCls:Ke,rootClassName:an,className:In,items:On,autoScroll:gn=!0,roles:Qn}=wn,vn=Ga(wn,["prefixCls","rootClassName","className","items","autoScroll","roles"]),ht=(0,Be.Z)(vn,{attr:!0,aria:!0}),ct=R.useRef(null),Un=R.useRef({}),{getPrefixCls:Zt}=(0,re.Z)(),Mt=Zt("bubble",Ke),vt=`${Mt}-list`,[Gn,kt,Ct]=T(Mt),[Ve,Y]=R.useState(!1);R.useEffect(()=>(Y(!0),()=>{Y(!1)}),[]);const Ie=Ue(On,Qn),[Te,we]=R.useState(!0),[Xe,Cn]=R.useState(0),Je=xn=>{const qe=xn.target;we(qe.scrollHeight-Math.abs(qe.scrollTop)-qe.clientHeight<=cn)};R.useEffect(()=>{gn&&ct.current&&Te&&ct.current.scrollTo({top:ct.current.scrollHeight})},[Xe]),R.useEffect(()=>{var xn;if(gn){const qe=(xn=Ie[Ie.length-2])==null?void 0:xn.key,Bn=Un.current[qe];if(Bn){const{nativeElement:it}=Bn,{top:xt,bottom:Ft}=it.getBoundingClientRect(),{top:St,bottom:Ot}=ct.current.getBoundingClientRect();xt<Ot&&Ft>St&&(Cn(he=>he+1),we(!0))}}},[Ie.length]),R.useImperativeHandle(Ee,()=>({nativeElement:ct.current,scrollTo:({key:xn,offset:qe,behavior:Bn="smooth",block:it})=>{if(typeof qe=="number")ct.current.scrollTo({top:qe,behavior:Bn});else if(xn!==void 0){const xt=Un.current[xn];if(xt){const Ft=Ie.findIndex(St=>St.key===xn);we(Ft===Ie.length-1),xt.nativeElement.scrollIntoView({behavior:Bn,block:it})}}}}));const $=(0,Ae.zX)(()=>{gn&&Cn(xn=>xn+1)}),on=R.useMemo(()=>({onUpdate:$}),[]);return Gn(R.createElement(ne.Provider,{value:on},R.createElement("div",(0,se.Z)({},ht,{className:w()(vt,an,In,kt,Ct,{[`${vt}-reach-end`]:Te}),ref:ct,onScroll:Je}),Ie.map(Bn=>{var it=Bn,{key:xn}=it,qe=Ga(it,["key"]);return R.createElement(Ge,(0,se.Z)({},qe,{key:xn,_key:xn,ref:Un,typing:Ve?qe.typing:!1}))}))))};var ve=R.forwardRef(Xn);X.List=ve;var xe=X},45311:function(tn,H,B){"use strict";B.d(H,{Z:function(){return He}});var se=B(87462),m=B(55102),w=B(86250),R=B(93967),Fe=B.n(R),G=B(56790),re=B(64217),_=B(88306),C=B(67294);function z(he,Le){return(0,C.useImperativeHandle)(he,()=>{const Me=Le(),{nativeElement:An}=Me;return new Proxy(An,{get(Dn,Wn){return Me[Wn]?Me[Wn]:Reflect.get(Dn,Wn)}})})}var O=B(21450),g=B(36158),te=B(89503),me=B(51398),J=function(Le,Me){return C.createElement(me.Z,(0,se.Z)({},Le,{ref:Me,icon:te.Z}))},de=C.forwardRef(J),Ce=de,be=B(83622),We=B(29372);const Ze=C.createContext({}),dn=()=>({height:0}),U=he=>({height:he.scrollHeight});function D(he){const{title:Le,onOpenChange:Me,open:An,children:Dn,className:Wn,style:lt,classNames:It={},styles:Ht={},closable:Bt,forceRender:_t}=he,{prefixCls:sr}=C.useContext(Ze),Wt=`${sr}-header`;return C.createElement(We.ZP,{motionEnter:!0,motionLeave:!0,motionName:`${Wt}-motion`,leavedClassName:`${Wt}-motion-hidden`,onEnterStart:dn,onEnterActive:U,onLeaveStart:U,onLeaveActive:dn,visible:An,forceRender:_t},({className:or,style:cr})=>C.createElement("div",{className:Fe()(Wt,or,Wn),style:Pn(Pn({},cr),lt)},(Bt!==!1||Le)&&C.createElement("div",{className:Fe()(`${Wt}-header`,It.header),style:Pn({},Ht.header)},C.createElement("div",{className:`${Wt}-title`},Le),Bt!==!1&&C.createElement("div",{className:`${Wt}-close`},C.createElement(be.ZP,{type:"text",icon:C.createElement(Ce,null),size:"small",onClick:()=>{Me==null||Me(!An)}}))),Dn&&C.createElement("div",{className:Fe()(`${Wt}-content`,It.content),style:Pn({},Ht.content)},Dn)))}const ie=C.createContext(null);function Oe(he,Le){var sr,Wt;const _t=he,{className:Me,action:An,onClick:Dn}=_t,Wn=Ga(_t,["className","action","onClick"]),lt=C.useContext(ie),{prefixCls:It,disabled:Ht}=lt,Bt=(Wt=(sr=Wn.disabled)!=null?sr:Ht)!=null?Wt:lt[`${An}Disabled`];return C.createElement(be.ZP,(0,se.Z)({type:"text"},Wn,{ref:Le,onClick:or=>{var cr;Bt||((cr=lt[An])==null||cr.call(lt),Dn==null||Dn(or))},className:Fe()(It,Me,{[`${It}-disabled`]:Bt})}))}var Re=C.forwardRef(Oe),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},ne=T,Q=function(Le,Me){return C.createElement(me.Z,(0,se.Z)({},Le,{ref:Me,icon:ne}))},W=C.forwardRef(Q),X=W;function Ae(he,Le){return C.createElement(Re,(0,se.Z)({icon:C.createElement(X,null)},he,{action:"onClear",ref:Le}))}var Be=C.forwardRef(Ae),ge=(0,C.memo)(he=>{const{className:Le}=he;return C.createElement("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",className:Le},C.createElement("title",null,"Stop Loading"),C.createElement("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"}),C.createElement("circle",{cx:"500",cy:"500",fill:"none",r:"450",stroke:"currentColor",strokeWidth:"100",opacity:"0.45"}),C.createElement("circle",{cx:"500",cy:"500",fill:"none",r:"450",stroke:"currentColor",strokeWidth:"100",strokeDasharray:"600 9999999"},C.createElement("animateTransform",{attributeName:"transform",dur:"1s",from:"0 500 500",repeatCount:"indefinite",to:"360 500 500",type:"rotate"})))});function Ge(he,Le){const{prefixCls:Me}=C.useContext(ie),{className:An}=he;return C.createElement(Re,(0,se.Z)({icon:null,color:"primary",variant:"text",shape:"circle"},he,{className:Fe()(An,`${Me}-loading-button`),action:"onCancel",ref:Le}),C.createElement(ge,{className:`${Me}-loading-icon`}))}var cn=C.forwardRef(Ge),Xn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},ue=Xn,ve=function(Le,Me){return C.createElement(me.Z,(0,se.Z)({},Le,{ref:Me,icon:ue}))},xe=C.forwardRef(ve),V=xe;function Ee(he,Le){return C.createElement(Re,(0,se.Z)({icon:C.createElement(V,null),type:"primary",shape:"circle"},he,{action:"onSend",ref:Le}))}var Ke=C.forwardRef(Ee),an={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M682 455V311l-76 76v68c-.1 50.7-42 92.1-94 92a95.8 95.8 0 01-52-15l-54 55c29.1 22.4 65.9 36 106 36 93.8 0 170-75.1 170-168z"}},{tag:"path",attrs:{d:"M833 446h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254-63 0-120.7-23-165-61l-54 54a334.01 334.01 0 00179 81v102H326c-13.9 0-24.9 14.3-25 32v36c.1 4.4 2.9 8 6 8h408c3.2 0 6-3.6 6-8v-36c0-17.7-11-32-25-32H547V782c165.3-17.9 294-157.9 294-328 0-4.4-3.6-8-8-8zm13.1-377.7l-43.5-41.9a8 8 0 00-11.2.1l-129 129C634.3 101.2 577 64 511 64c-93.9 0-170 75.3-170 168v224c0 6.7.4 13.3 1.2 19.8l-68 68A252.33 252.33 0 01258 454c-.2-4.4-3.8-8-8-8h-60c-4.4 0-8 3.6-8 8 0 53 12.5 103 34.6 147.4l-137 137a8.03 8.03 0 000 11.3l42.7 42.7c3.1 3.1 8.2 3.1 11.3 0L846.2 79.8l.1-.1c3.1-3.2 3-8.3-.2-11.4zM417 401V232c0-50.6 41.9-92 94-92 46 0 84.1 32.3 92.3 74.7L417 401z"}}]},name:"audio-muted",theme:"outlined"},In=an,On=function(Le,Me){return C.createElement(me.Z,(0,se.Z)({},Le,{ref:Me,icon:In}))},gn=C.forwardRef(On),Qn=gn,vn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"},ht=vn,ct=function(Le,Me){return C.createElement(me.Z,(0,se.Z)({},Le,{ref:Me,icon:ht}))},Un=C.forwardRef(ct),Zt=Un;const Mt=1e3,vt=4,Gn=140,kt=Gn/2,Ct=250,Ve=500,Y=.8;function Ie({className:he}){return C.createElement("svg",{color:"currentColor",viewBox:`0 0 ${Mt} ${Mt}`,xmlns:"http://www.w3.org/2000/svg",className:he},C.createElement("title",null,"Speech Recording"),Array.from({length:vt}).map((Le,Me)=>{const An=(Mt-Gn*vt)/(vt-1),Dn=Me*(An+Gn),Wn=Mt/2-Ct/2,lt=Mt/2-Ve/2;return C.createElement("rect",{fill:"currentColor",rx:kt,ry:kt,height:Ct,width:Gn,x:Dn,y:Wn,key:Me},C.createElement("animate",{attributeName:"height",values:`${Ct}; ${Ve}; ${Ct}`,keyTimes:"0; 0.5; 1",dur:`${Y}s`,begin:`${Y/vt*Me}s`,repeatCount:"indefinite"}),C.createElement("animate",{attributeName:"y",values:`${Wn}; ${lt}; ${Wn}`,keyTimes:"0; 0.5; 1",dur:`${Y}s`,begin:`${Y/vt*Me}s`,repeatCount:"indefinite"}))}))}function Te(he,Le){const{speechRecording:Me,onSpeechDisabled:An,prefixCls:Dn}=C.useContext(ie);let Wn=null;return Me?Wn=C.createElement(Ie,{className:`${Dn}-recording-icon`}):An?Wn=C.createElement(Qn,null):Wn=C.createElement(Zt,null),C.createElement(Re,(0,se.Z)({icon:Wn,color:"primary",variant:"text"},he,{action:"onSpeech",ref:Le}))}var we=C.forwardRef(Te),Xe=B(11568),Cn=B(83262),Je=B(43495),on=he=>{const{componentCls:Le,calc:Me}=he,An=`${Le}-header`;return{[Le]:{[An]:{borderBottomWidth:he.lineWidth,borderBottomStyle:"solid",borderBottomColor:he.colorBorder,"&-header":{background:he.colorFillAlter,fontSize:he.fontSize,lineHeight:he.lineHeight,paddingBlock:Me(he.paddingSM).sub(he.lineWidthBold).equal(),paddingInlineStart:he.padding,paddingInlineEnd:he.paddingXS,display:"flex",[`${An}-title`]:{flex:"auto"}},"&-content":{padding:he.padding},"&-motion":{transition:["height","border"].map(Dn=>`${Dn} ${he.motionDurationSlow}`).join(","),overflow:"hidden","&-enter-start, &-leave-active":{borderBottomColor:"transparent"},"&-hidden":{display:"none"}}}}}};const wn=he=>{const{componentCls:Le,padding:Me,paddingSM:An,paddingXS:Dn,paddingXXS:Wn,lineWidth:lt,lineWidthBold:It,calc:Ht}=he;return{[Le]:{position:"relative",width:"100%",boxSizing:"border-box",boxShadow:`${he.boxShadowTertiary}`,transition:`background ${he.motionDurationSlow}`,borderRadius:{_skip_check_:!0,value:Ht(he.borderRadius).mul(2).equal()},borderColor:he.colorBorder,borderWidth:0,borderStyle:"solid","&:after":{content:'""',position:"absolute",inset:0,pointerEvents:"none",transition:`border-color ${he.motionDurationSlow}`,borderRadius:{_skip_check_:!0,value:"inherit"},borderStyle:"inherit",borderColor:"inherit",borderWidth:lt},"&:focus-within":{boxShadow:`${he.boxShadowSecondary}`,borderColor:he.colorPrimary,"&:after":{borderWidth:It}},"&-disabled":{background:he.colorBgContainerDisabled},[`&${Le}-rtl`]:{direction:"rtl"},[`${Le}-content`]:{display:"flex",gap:Dn,width:"100%",paddingBlock:An,paddingInlineStart:Me,paddingInlineEnd:An,boxSizing:"border-box",alignItems:"flex-end"},[`${Le}-prefix`]:{flex:"none"},[`${Le}-input`]:{padding:0,borderRadius:0,flex:"auto",alignSelf:"center",minHeight:"auto"},[`${Le}-actions-list`]:{flex:"none",display:"flex","&-presets":{gap:he.paddingXS}},[`${Le}-actions-btn`]:{"&-disabled":{opacity:.45},"&-loading-button":{padding:0,border:0},"&-loading-icon":{height:he.controlHeight,width:he.controlHeight,verticalAlign:"top"},"&-recording-icon":{height:"1.2em",width:"1.2em",verticalAlign:"top"}},[`${Le}-footer`]:{paddingInlineStart:Me,paddingInlineEnd:An,paddingBlockEnd:An,paddingBlockStart:Wn,boxSizing:"border-box"}}}},xn=()=>({});var qe=(0,Je.I$)("Sender",he=>{const{paddingXS:Le,calc:Me}=he,An=(0,Cn.IX)(he,{SenderContentMaxWidth:`calc(100% - ${(0,Xe.bf)(Me(Le).add(32).equal())})`});return[wn(An),on(An)]},xn);let Bn;!Bn&&typeof window!="undefined"&&(Bn=window.SpeechRecognition||window.webkitSpeechRecognition);function it(he,Le){const Me=(0,G.zX)(he),[An,Dn,Wn]=C.useMemo(()=>typeof Le=="object"?[Le.recording,Le.onRecordingChange,typeof Le.recording=="boolean"]:[void 0,void 0,!1],[Le]),[lt,It]=C.useState(null);C.useEffect(()=>{if(typeof navigator!="undefined"&&"permissions"in navigator){let nr=null;return navigator.permissions.query({name:"microphone"}).then(jt=>{It(jt.state),jt.onchange=function(){It(this.state)},nr=jt}),()=>{nr&&(nr.onchange=null)}}},[]);const Ht=Bn&&lt!=="denied",Bt=C.useRef(null),[_t,sr]=(0,G.C8)(!1,{value:An}),Wt=C.useRef(!1),or=()=>{if(Ht&&!Bt.current){const nr=new Bn;nr.onstart=()=>{sr(!0)},nr.onend=()=>{sr(!1)},nr.onresult=jt=>{var mr,Sr,_r;if(!Wt.current){const $r=(_r=(Sr=(mr=jt.results)==null?void 0:mr[0])==null?void 0:Sr[0])==null?void 0:_r.transcript;Me($r)}Wt.current=!1},Bt.current=nr}},cr=(0,G.zX)(nr=>{nr&&!_t||(Wt.current=nr,Wn?Dn==null||Dn(!_t):(or(),Bt.current&&(_t?(Bt.current.stop(),Dn==null||Dn(!1)):(Bt.current.start(),Dn==null||Dn(!0)))))});return[Ht,cr,_t]}function xt(he,Le,Me){return(0,_.Z)(he,Le)||Me}const Ft={SendButton:Ke,ClearButton:Be,LoadingButton:cn,SpeechButton:we},Ot=C.forwardRef((he,Le)=>{const Wr=he,{prefixCls:Me,styles:An={},classNames:Dn={},className:Wn,rootClassName:lt,style:It,defaultValue:Ht,value:Bt,readOnly:_t,submitType:sr="enter",onSubmit:Wt,loading:or,components:cr,onCancel:nr,onChange:jt,actions:mr,onKeyPress:Sr,onKeyDown:_r,disabled:$r,allowSpeech:Pr,prefix:Br,footer:jr,header:sa,onPaste:Ur,onPasteFile:Tr,autoSize:gr={maxRows:8}}=Wr,Gr=Ga(Wr,["prefixCls","styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","submitType","onSubmit","loading","components","onCancel","onChange","actions","onKeyPress","onKeyDown","disabled","allowSpeech","prefix","footer","header","onPaste","onPasteFile","autoSize"]),{direction:vr,getPrefixCls:Dr}=(0,g.Z)(),ir=Dr("sender",Me),ca=C.useRef(null),Jr=C.useRef(null);z(Le,()=>{var Tt,Yt;return{nativeElement:ca.current,focus:(Tt=Jr.current)==null?void 0:Tt.focus,blur:(Yt=Jr.current)==null?void 0:Yt.blur}});const tr=(0,O.Z)("sender"),$a=`${ir}-input`,[ja,Ja,ga]=qe(ir),eo=Fe()(ir,tr.className,Wn,lt,Ja,ga,{[`${ir}-rtl`]:vr==="rtl",[`${ir}-disabled`]:$r}),da=`${ir}-actions-btn`,qr=`${ir}-actions-list`,[Mr,Ua]=(0,G.C8)(Ht||"",{value:Bt}),yr=(Tt,Yt)=>{Ua(Tt),jt&&jt(Tt,Yt)},[pa,La,Fa]=it(Tt=>{yr(`${Mr} ${Tt}`)},Pr),va=xt(cr,["input"],m.Z.TextArea),xr=(0,re.Z)(Gr,{attr:!0,aria:!0,data:!0}),no=Ao(Pn({},xr),{ref:Jr}),Er=()=>{Mr&&Wt&&!or&&Wt(Mr)},Zr=()=>{yr("")},zr=C.useRef(!1),Ir=()=>{zr.current=!0},Oa=()=>{zr.current=!1},xa=Tt=>{const Yt=Tt.key==="Enter"&&!zr.current;switch(sr){case"enter":Yt&&!Tt.shiftKey&&(Tt.preventDefault(),Er());break;case"shiftEnter":Yt&&Tt.shiftKey&&(Tt.preventDefault(),Er());break}Sr==null||Sr(Tt)},Ra=Tt=>{var ea;const Yt=(ea=Tt.clipboardData)==null?void 0:ea.files;Yt!=null&&Yt.length&&Tr&&(Tr(Yt[0],Yt),Tt.preventDefault()),Ur==null||Ur(Tt)},Pa=Tt=>{var Yt,ea;Tt.target!==((Yt=ca.current)==null?void 0:Yt.querySelector(`.${$a}`))&&Tt.preventDefault(),(ea=Jr.current)==null||ea.focus()};let Lr=C.createElement(w.Z,{className:`${qr}-presets`},Pr&&C.createElement(we,null),or?C.createElement(cn,null):C.createElement(Ke,null));typeof mr=="function"?Lr=mr(Lr,{components:Ft}):(mr||mr===!1)&&(Lr=mr);const Ea={prefixCls:da,onSend:Er,onSendDisabled:!Mr,onClear:Zr,onClearDisabled:!Mr,onCancel:nr,onCancelDisabled:!or,onSpeech:()=>La(!1),onSpeechDisabled:!pa,speechRecording:Fa,disabled:$r},Lt=typeof jr=="function"?jr({components:Ft}):jr||null;return ja(C.createElement("div",{ref:ca,className:eo,style:Pn(Pn({},tr.style),It)},sa&&C.createElement(Ze.Provider,{value:{prefixCls:ir}},sa),C.createElement(ie.Provider,{value:Ea},C.createElement("div",{className:`${ir}-content`,onMouseDown:Pa},Br&&C.createElement("div",{className:Fe()(`${ir}-prefix`,tr.classNames.prefix,Dn.prefix),style:Pn(Pn({},tr.styles.prefix),An.prefix)},Br),C.createElement(va,(0,se.Z)({},no,{disabled:$r,style:Pn(Pn({},tr.styles.input),An.input),className:Fe()($a,tr.classNames.input,Dn.input),autoSize:gr,value:Mr,onChange:Tt=>{yr(Tt.target.value,Tt),La(!0)},onPressEnter:xa,onCompositionStart:Ir,onCompositionEnd:Oa,onKeyDown:_r,onPaste:Ra,variant:"borderless",readOnly:_t})),Lr&&C.createElement("div",{className:Fe()(qr,tr.classNames.actions,Dn.actions),style:Pn(Pn({},tr.styles.actions),An.actions)},Lr)),Lt&&C.createElement("div",{className:Fe()(`${ir}-footer`,tr.classNames.footer,Dn.footer),style:Pn(Pn({},tr.styles.footer),An.footer)},Lt))))});Ot.Header=D;var He=Ot},43495:function(tn,H,B){"use strict";B.d(H,{I$:function(){return J}});var se=B(83262),m=B(36158),w=B(11568),R=B(9361),Fe=B(29691),G=B(92372),re=B(67294),_="1.1.1",C=_;const z=(0,w.jG)(R.Z.defaultAlgorithm),O={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},g=(be,We,Ze)=>{const dn=Ze.getDerivativeToken(be),Oe=We,{override:U}=Oe,D=Ga(Oe,["override"]);let ie=Ao(Pn({},dn),{override:U});return ie=(0,G.Z)(ie),D&&Object.entries(D).forEach(([Re,T])=>{const X=T,{theme:ne}=X,Q=Ga(X,["theme"]);let W=Q;ne&&(W=g(Pn(Pn({},ie),Q),{override:Q},ne)),ie[Re]=W}),ie};function te(){const{token:be,hashed:We,theme:Ze=z,override:dn,cssVar:U}=re.useContext(R.Z._internalContext),[D,ie,Oe]=(0,w.fp)(Ze,[R.Z.defaultSeed,be],{salt:`${C}-${We||""}`,override:dn,getComputedToken:g,cssVar:U&&{prefix:U.prefix,key:U.key,unitless:Fe.NJ,ignore:Fe.ID,preserve:O}});return[Ze,Oe,We?ie:"",D,U]}function me(){const[be,We,Ze]=te();return{theme:be,token:We,hashId:Ze}}const{genStyleHooks:J,genComponentStyleHook:de,genSubStyleComponent:Ce}=(0,se.rb)({usePrefix:()=>{const{getPrefixCls:be,iconPrefixCls:We}=(0,m.Z)();return{iconPrefixCls:We,rootPrefixCls:be()}},useToken:()=>{const[be,We,Ze,dn,U]=te();return{theme:be,realToken:We,hashId:Ze,token:dn,cssVar:U}},useCSP:()=>{const{csp:be}=(0,m.Z)();return be!=null?be:{}},layer:{name:"antdx",dependencies:["antd"]}})},36158:function(tn,H,B){"use strict";var se=B(21532),m=B(67294);const w="ant";function R(){const{getPrefixCls:Fe,direction:G,csp:re,iconPrefixCls:_,theme:C}=m.useContext(se.ZP.ConfigContext);return{theme:C,getPrefixCls:Fe,direction:G,csp:re,iconPrefixCls:_}}H.Z=R},74095:function(tn,H,B){"use strict";B.d(H,{t:function(){return G}});var se=B(4942);const m=Math.round;function w(re,_){const C=re.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],z=C.map(O=>parseFloat(O));for(let O=0;O<3;O+=1)z[O]=_(z[O]||0,C[O]||"",O);return C[3]?z[3]=C[3].includes("%")?z[3]/100:z[3]:z[3]=1,z}const R=(re,_,C)=>C===0?re:re/100;function Fe(re,_){const C=_||255;return re>C?C:re<0?0:re}class G{constructor(_){(0,se.Z)(this,"isValid",!0),(0,se.Z)(this,"r",0),(0,se.Z)(this,"g",0),(0,se.Z)(this,"b",0),(0,se.Z)(this,"a",1),(0,se.Z)(this,"_h",void 0),(0,se.Z)(this,"_s",void 0),(0,se.Z)(this,"_l",void 0),(0,se.Z)(this,"_v",void 0),(0,se.Z)(this,"_max",void 0),(0,se.Z)(this,"_min",void 0),(0,se.Z)(this,"_brightness",void 0);function C(z){return z[0]in _&&z[1]in _&&z[2]in _}if(_)if(typeof _=="string"){let O=function(g){return z.startsWith(g)};const z=_.trim();/^#?[A-F\d]{3,8}$/i.test(z)?this.fromHexString(z):O("rgb")?this.fromRgbString(z):O("hsl")?this.fromHslString(z):(O("hsv")||O("hsb"))&&this.fromHsvString(z)}else if(_ instanceof G)this.r=_.r,this.g=_.g,this.b=_.b,this.a=_.a,this._h=_._h,this._s=_._s,this._l=_._l,this._v=_._v;else if(C("rgb"))this.r=Fe(_.r),this.g=Fe(_.g),this.b=Fe(_.b),this.a=typeof _.a=="number"?Fe(_.a,1):1;else if(C("hsl"))this.fromHsl(_);else if(C("hsv"))this.fromHsv(_);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(_))}setR(_){return this._sc("r",_)}setG(_){return this._sc("g",_)}setB(_){return this._sc("b",_)}setA(_){return this._sc("a",_,1)}setHue(_){const C=this.toHsv();return C.h=_,this._c(C)}getLuminance(){function _(g){const te=g/255;return te<=.03928?te/12.92:Math.pow((te+.055)/1.055,2.4)}const C=_(this.r),z=_(this.g),O=_(this.b);return .2126*C+.7152*z+.0722*O}getHue(){if(typeof this._h=="undefined"){const _=this.getMax()-this.getMin();_===0?this._h=0:this._h=m(60*(this.r===this.getMax()?(this.g-this.b)/_+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/_+2:(this.r-this.g)/_+4))}return this._h}getSaturation(){if(typeof this._s=="undefined"){const _=this.getMax()-this.getMin();_===0?this._s=0:this._s=_/this.getMax()}return this._s}getLightness(){return typeof this._l=="undefined"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v=="undefined"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness=="undefined"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(_=10){const C=this.getHue(),z=this.getSaturation();let O=this.getLightness()-_/100;return O<0&&(O=0),this._c({h:C,s:z,l:O,a:this.a})}lighten(_=10){const C=this.getHue(),z=this.getSaturation();let O=this.getLightness()+_/100;return O>1&&(O=1),this._c({h:C,s:z,l:O,a:this.a})}mix(_,C=50){const z=this._c(_),O=C/100,g=me=>(z[me]-this[me])*O+this[me],te={r:m(g("r")),g:m(g("g")),b:m(g("b")),a:m(g("a")*100)/100};return this._c(te)}tint(_=10){return this.mix({r:255,g:255,b:255,a:1},_)}shade(_=10){return this.mix({r:0,g:0,b:0,a:1},_)}onBackground(_){const C=this._c(_),z=this.a+C.a*(1-this.a),O=g=>m((this[g]*this.a+C[g]*C.a*(1-this.a))/z);return this._c({r:O("r"),g:O("g"),b:O("b"),a:z})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(_){return this.r===_.r&&this.g===_.g&&this.b===_.b&&this.a===_.a}clone(){return this._c(this)}toHexString(){let _="#";const C=(this.r||0).toString(16);_+=C.length===2?C:"0"+C;const z=(this.g||0).toString(16);_+=z.length===2?z:"0"+z;const O=(this.b||0).toString(16);if(_+=O.length===2?O:"0"+O,typeof this.a=="number"&&this.a>=0&&this.a<1){const g=m(this.a*255).toString(16);_+=g.length===2?g:"0"+g}return _}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const _=this.getHue(),C=m(this.getSaturation()*100),z=m(this.getLightness()*100);return this.a!==1?`hsla(${_},${C}%,${z}%,${this.a})`:`hsl(${_},${C}%,${z}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(_,C,z){const O=this.clone();return O[_]=Fe(C,z),O}_c(_){return new this.constructor(_)}getMax(){return typeof this._max=="undefined"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min=="undefined"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(_){const C=_.replace("#","");function z(O,g){return parseInt(C[O]+C[g||O],16)}C.length<6?(this.r=z(0),this.g=z(1),this.b=z(2),this.a=C[3]?z(3)/255:1):(this.r=z(0,1),this.g=z(2,3),this.b=z(4,5),this.a=C[6]?z(6,7)/255:1)}fromHsl({h:_,s:C,l:z,a:O}){if(this._h=_%360,this._s=C,this._l=z,this.a=typeof O=="number"?O:1,C<=0){const We=m(z*255);this.r=We,this.g=We,this.b=We}let g=0,te=0,me=0;const J=_/60,de=(1-Math.abs(2*z-1))*C,Ce=de*(1-Math.abs(J%2-1));J>=0&&J<1?(g=de,te=Ce):J>=1&&J<2?(g=Ce,te=de):J>=2&&J<3?(te=de,me=Ce):J>=3&&J<4?(te=Ce,me=de):J>=4&&J<5?(g=Ce,me=de):J>=5&&J<6&&(g=de,me=Ce);const be=z-de/2;this.r=m((g+be)*255),this.g=m((te+be)*255),this.b=m((me+be)*255)}fromHsv({h:_,s:C,v:z,a:O}){this._h=_%360,this._s=C,this._v=z,this.a=typeof O=="number"?O:1;const g=m(z*255);if(this.r=g,this.g=g,this.b=g,C<=0)return;const te=_/60,me=Math.floor(te),J=te-me,de=m(z*(1-C)*255),Ce=m(z*(1-C*J)*255),be=m(z*(1-C*(1-J))*255);switch(me){case 0:this.g=be,this.b=de;break;case 1:this.r=Ce,this.b=de;break;case 2:this.r=de,this.b=be;break;case 3:this.r=de,this.g=Ce;break;case 4:this.r=be,this.g=de;break;case 5:default:this.g=de,this.b=Ce;break}}fromHsvString(_){const C=w(_,R);this.fromHsv({h:C[0],s:C[1],v:C[2],a:C[3]})}fromHslString(_){const C=w(_,R);this.fromHsl({h:C[0],s:C[1],l:C[2],a:C[3]})}fromRgbString(_){const C=w(_,(z,O)=>O.includes("%")?m(z/100*255):z);this.r=C[0],this.g=C[1],this.b=C[2],this.a=C[3]}}},51398:function(tn,H,B){"use strict";B.d(H,{Z:function(){return Ot}});var se=B(87462),m=B(97685),w=B(4942),R=B(91),Fe=B(67294),G=B(93967),re=B.n(G),_=B(74095),C=2,z=.16,O=.05,g=.05,te=.15,me=5,J=4,de=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function Ce(He,he,Le){var Me;return Math.round(He.h)>=60&&Math.round(He.h)<=240?Me=Le?Math.round(He.h)-C*he:Math.round(He.h)+C*he:Me=Le?Math.round(He.h)+C*he:Math.round(He.h)-C*he,Me<0?Me+=360:Me>=360&&(Me-=360),Me}function be(He,he,Le){if(He.h===0&&He.s===0)return He.s;var Me;return Le?Me=He.s-z*he:he===J?Me=He.s+z:Me=He.s+O*he,Me>1&&(Me=1),Le&&he===me&&Me>.1&&(Me=.1),Me<.06&&(Me=.06),Math.round(Me*100)/100}function We(He,he,Le){var Me;return Le?Me=He.v+g*he:Me=He.v-te*he,Me=Math.max(0,Math.min(1,Me)),Math.round(Me*100)/100}function Ze(He){for(var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Le=[],Me=new _.t(He),An=Me.toHsv(),Dn=me;Dn>0;Dn-=1){var Wn=new _.t({h:Ce(An,Dn,!0),s:be(An,Dn,!0),v:We(An,Dn,!0)});Le.push(Wn)}Le.push(Me);for(var lt=1;lt<=J;lt+=1){var It=new _.t({h:Ce(An,lt),s:be(An,lt),v:We(An,lt)});Le.push(It)}return he.theme==="dark"?de.map(function(Ht){var Bt=Ht.index,_t=Ht.amount;return new _.t(he.backgroundColor||"#141414").mix(Le[Bt],_t).toHexString()}):Le.map(function(Ht){return Ht.toHexString()})}var dn={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},U=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];U.primary=U[5];var D=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];D.primary=D[5];var ie=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];ie.primary=ie[5];var Oe=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];Oe.primary=Oe[5];var Re=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];Re.primary=Re[5];var T=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];T.primary=T[5];var ne=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];ne.primary=ne[5];var Q=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];Q.primary=Q[5];var W=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];W.primary=W[5];var X=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];X.primary=X[5];var Ae=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];Ae.primary=Ae[5];var Be=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];Be.primary=Be[5];var Ue=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Ue.primary=Ue[5];var ge=null,Ge={red:U,volcano:D,orange:ie,gold:Oe,yellow:Re,lime:T,green:ne,cyan:Q,blue:W,geekblue:X,purple:Ae,magenta:Be,grey:Ue},cn=["#2a1215","#431418","#58181c","#791a1f","#a61d24","#d32029","#e84749","#f37370","#f89f9a","#fac8c3"];cn.primary=cn[5];var Xn=["#2b1611","#441d12","#592716","#7c3118","#aa3e19","#d84a1b","#e87040","#f3956a","#f8b692","#fad4bc"];Xn.primary=Xn[5];var ue=["#2b1d11","#442a11","#593815","#7c4a15","#aa6215","#d87a16","#e89a3c","#f3b765","#f8cf8d","#fae3b7"];ue.primary=ue[5];var ve=["#2b2111","#443111","#594214","#7c5914","#aa7714","#d89614","#e8b339","#f3cc62","#f8df8b","#faedb5"];ve.primary=ve[5];var xe=["#2b2611","#443b11","#595014","#7c6e14","#aa9514","#d8bd14","#e8d639","#f3ea62","#f8f48b","#fafab5"];xe.primary=xe[5];var V=["#1f2611","#2e3c10","#3e4f13","#536d13","#6f9412","#8bbb11","#a9d134","#c9e75d","#e4f88b","#f0fab5"];V.primary=V[5];var Ee=["#162312","#1d3712","#274916","#306317","#3c8618","#49aa19","#6abe39","#8fd460","#b2e58b","#d5f2bb"];Ee.primary=Ee[5];var Ke=["#112123","#113536","#144848","#146262","#138585","#13a8a8","#33bcb7","#58d1c9","#84e2d8","#b2f1e8"];Ke.primary=Ke[5];var an=["#111a2c","#112545","#15325b","#15417e","#1554ad","#1668dc","#3c89e8","#65a9f3","#8dc5f8","#b7dcfa"];an.primary=an[5];var In=["#131629","#161d40","#1c2755","#203175","#263ea0","#2b4acb","#5273e0","#7f9ef3","#a8c1f8","#d2e0fa"];In.primary=In[5];var On=["#1a1325","#24163a","#301c4d","#3e2069","#51258f","#642ab5","#854eca","#ab7ae0","#cda8f0","#ebd7fa"];On.primary=On[5];var gn=["#291321","#40162f","#551c3b","#75204f","#a02669","#cb2b83","#e0529c","#f37fb7","#f8a8cc","#fad2e3"];gn.primary=gn[5];var Qn=["#151515","#1f1f1f","#2d2d2d","#393939","#494949","#5a5a5a","#6a6a6a","#7b7b7b","#888888","#969696"];Qn.primary=Qn[5];var vn={red:cn,volcano:Xn,orange:ue,gold:ve,yellow:xe,lime:V,green:Ee,cyan:Ke,blue:an,geekblue:In,purple:On,magenta:gn,grey:Qn},ht=(0,Fe.createContext)({}),ct=ht,Un=B(1413),Zt=B(71002),Mt=B(44958),vt=B(27571),Gn=B(80334);function kt(He){return He.replace(/-(.)/g,function(he,Le){return Le.toUpperCase()})}function Ct(He,he){(0,Gn.ZP)(He,"[@ant-design/icons] ".concat(he))}function Ve(He){return(0,Zt.Z)(He)==="object"&&typeof He.name=="string"&&typeof He.theme=="string"&&((0,Zt.Z)(He.icon)==="object"||typeof He.icon=="function")}function Y(){var He=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(He).reduce(function(he,Le){var Me=He[Le];switch(Le){case"class":he.className=Me,delete he.class;break;default:delete he[Le],he[kt(Le)]=Me}return he},{})}function Ie(He,he,Le){return Le?Fe.createElement(He.tag,(0,Un.Z)((0,Un.Z)({key:he},Y(He.attrs)),Le),(He.children||[]).map(function(Me,An){return Ie(Me,"".concat(he,"-").concat(He.tag,"-").concat(An))})):Fe.createElement(He.tag,(0,Un.Z)({key:he},Y(He.attrs)),(He.children||[]).map(function(Me,An){return Ie(Me,"".concat(he,"-").concat(He.tag,"-").concat(An))}))}function Te(He){return Ze(He)[0]}function we(He){return He?Array.isArray(He)?He:[He]:[]}var Xe={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},Cn=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Je=function(he){var Le=(0,Fe.useContext)(ct),Me=Le.csp,An=Le.prefixCls,Dn=Le.layer,Wn=Cn;An&&(Wn=Wn.replace(/anticon/g,An)),Dn&&(Wn="@layer ".concat(Dn,` {
`).concat(Wn,`
}`)),(0,Fe.useEffect)(function(){var lt=he.current,It=(0,vt.A)(lt);(0,Mt.hq)(Wn,"@ant-design-icons",{prepend:!Dn,csp:Me,attachTo:It})},[])},$=["icon","className","onClick","style","primaryColor","secondaryColor"],on={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function wn(He){var he=He.primaryColor,Le=He.secondaryColor;on.primaryColor=he,on.secondaryColor=Le||Te(he),on.calculated=!!Le}function xn(){return(0,Un.Z)({},on)}var qe=function(he){var Le=he.icon,Me=he.className,An=he.onClick,Dn=he.style,Wn=he.primaryColor,lt=he.secondaryColor,It=(0,R.Z)(he,$),Ht=Fe.useRef(),Bt=on;if(Wn&&(Bt={primaryColor:Wn,secondaryColor:lt||Te(Wn)}),Je(Ht),Ct(Ve(Le),"icon should be icon definiton, but got ".concat(Le)),!Ve(Le))return null;var _t=Le;return _t&&typeof _t.icon=="function"&&(_t=(0,Un.Z)((0,Un.Z)({},_t),{},{icon:_t.icon(Bt.primaryColor,Bt.secondaryColor)})),Ie(_t.icon,"svg-".concat(_t.name),(0,Un.Z)((0,Un.Z)({className:Me,onClick:An,style:Dn,"data-icon":_t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},It),{},{ref:Ht}))};qe.displayName="IconReact",qe.getTwoToneColors=xn,qe.setTwoToneColors=wn;var Bn=qe;function it(He){var he=we(He),Le=(0,m.Z)(he,2),Me=Le[0],An=Le[1];return Bn.setTwoToneColors({primaryColor:Me,secondaryColor:An})}function xt(){var He=Bn.getTwoToneColors();return He.calculated?[He.primaryColor,He.secondaryColor]:He.primaryColor}var Ft=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];it(W.primary);var St=Fe.forwardRef(function(He,he){var Le=He.className,Me=He.icon,An=He.spin,Dn=He.rotate,Wn=He.tabIndex,lt=He.onClick,It=He.twoToneColor,Ht=(0,R.Z)(He,Ft),Bt=Fe.useContext(ct),_t=Bt.prefixCls,sr=_t===void 0?"anticon":_t,Wt=Bt.rootClassName,or=re()(Wt,sr,(0,w.Z)((0,w.Z)({},"".concat(sr,"-").concat(Me.name),!!Me.name),"".concat(sr,"-spin"),!!An||Me.name==="loading"),Le),cr=Wn;cr===void 0&&lt&&(cr=-1);var nr=Dn?{msTransform:"rotate(".concat(Dn,"deg)"),transform:"rotate(".concat(Dn,"deg)")}:void 0,jt=we(It),mr=(0,m.Z)(jt,2),Sr=mr[0],_r=mr[1];return Fe.createElement("span",(0,se.Z)({role:"img","aria-label":Me.name},Ht,{ref:he,tabIndex:cr,onClick:lt,className:or}),Fe.createElement(Bn,{icon:Me,primaryColor:Sr,secondaryColor:_r,style:nr}))});St.displayName="AntdIcon",St.getTwoToneColor=xt,St.setTwoToneColor=it;var Ot=St},63334:function(){"use strict"},68997:function(tn,H,B){"use strict";B.d(H,{Z:function(){return X}});var se=B(67294),m=B(93967),w=B.n(m),R=B(9220),Fe=B(42550),G=B(74443),re=B(53124),_=B(35792),C=B(98675),z=B(25378),g=se.createContext({}),te=B(11568),me=B(14747),J=B(83559),de=B(83262);const Ce=Ae=>{const{antCls:Be,componentCls:Ue,iconCls:ge,avatarBg:Ge,avatarColor:cn,containerSize:Xn,containerSizeLG:ue,containerSizeSM:ve,textFontSize:xe,textFontSizeLG:V,textFontSizeSM:Ee,borderRadius:Ke,borderRadiusLG:an,borderRadiusSM:In,lineWidth:On,lineType:gn}=Ae,Qn=(vn,ht,ct)=>({width:vn,height:vn,borderRadius:"50%",[`&${Ue}-square`]:{borderRadius:ct},[`&${Ue}-icon`]:{fontSize:ht,[`> ${ge}`]:{margin:0}}});return{[Ue]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,me.Wf)(Ae)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:cn,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:Ge,border:`${(0,te.bf)(On)} ${gn} transparent`,"&-image":{background:"transparent"},[`${Be}-image-img`]:{display:"block"}}),Qn(Xn,xe,Ke)),{"&-lg":Object.assign({},Qn(ue,V,an)),"&-sm":Object.assign({},Qn(ve,Ee,In)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},be=Ae=>{const{componentCls:Be,groupBorderColor:Ue,groupOverlapping:ge,groupSpace:Ge}=Ae;return{[`${Be}-group`]:{display:"inline-flex",[Be]:{borderColor:Ue},"> *:not(:first-child)":{marginInlineStart:ge}},[`${Be}-group-popover`]:{[`${Be} + ${Be}`]:{marginInlineStart:Ge}}}},We=Ae=>{const{controlHeight:Be,controlHeightLG:Ue,controlHeightSM:ge,fontSize:Ge,fontSizeLG:cn,fontSizeXL:Xn,fontSizeHeading3:ue,marginXS:ve,marginXXS:xe,colorBorderBg:V}=Ae;return{containerSize:Be,containerSizeLG:Ue,containerSizeSM:ge,textFontSize:Math.round((cn+Xn)/2),textFontSizeLG:ue,textFontSizeSM:Ge,groupSpace:xe,groupOverlapping:-ve,groupBorderColor:V}};var Ze=(0,J.I$)("Avatar",Ae=>{const{colorTextLightSolid:Be,colorTextPlaceholder:Ue}=Ae,ge=(0,de.IX)(Ae,{avatarBg:Ue,avatarColor:Be});return[Ce(ge),be(ge)]},We),dn=function(Ae,Be){var Ue={};for(var ge in Ae)Object.prototype.hasOwnProperty.call(Ae,ge)&&Be.indexOf(ge)<0&&(Ue[ge]=Ae[ge]);if(Ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Ge=0,ge=Object.getOwnPropertySymbols(Ae);Ge<ge.length;Ge++)Be.indexOf(ge[Ge])<0&&Object.prototype.propertyIsEnumerable.call(Ae,ge[Ge])&&(Ue[ge[Ge]]=Ae[ge[Ge]]);return Ue},D=se.forwardRef((Ae,Be)=>{const{prefixCls:Ue,shape:ge,size:Ge,src:cn,srcSet:Xn,icon:ue,className:ve,rootClassName:xe,style:V,alt:Ee,draggable:Ke,children:an,crossOrigin:In,gap:On=4,onError:gn}=Ae,Qn=dn(Ae,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","style","alt","draggable","children","crossOrigin","gap","onError"]),[vn,ht]=se.useState(1),[ct,Un]=se.useState(!1),[Zt,Mt]=se.useState(!0),vt=se.useRef(null),Gn=se.useRef(null),kt=(0,Fe.sQ)(Be,vt),{getPrefixCls:Ct,avatar:Ve}=se.useContext(re.E_),Y=se.useContext(g),Ie=()=>{if(!Gn.current||!vt.current)return;const He=Gn.current.offsetWidth,he=vt.current.offsetWidth;He!==0&&he!==0&&On*2<he&&ht(he-On*2<He?(he-On*2)/He:1)};se.useEffect(()=>{Un(!0)},[]),se.useEffect(()=>{Mt(!0),ht(1)},[cn]),se.useEffect(Ie,[On]);const Te=()=>{(gn==null?void 0:gn())!==!1&&Mt(!1)},we=(0,C.Z)(He=>{var he,Le;return(Le=(he=Ge!=null?Ge:Y==null?void 0:Y.size)!==null&&he!==void 0?he:He)!==null&&Le!==void 0?Le:"default"}),Xe=Object.keys(typeof we=="object"?we||{}:{}).some(He=>["xs","sm","md","lg","xl","xxl"].includes(He)),Cn=(0,z.Z)(Xe),Je=se.useMemo(()=>{if(typeof we!="object")return{};const He=G.c4.find(Le=>Cn[Le]),he=we[He];return he?{width:he,height:he,fontSize:he&&(ue||an)?he/2:18}:{}},[Cn,we]),$=Ct("avatar",Ue),on=(0,_.Z)($),[wn,xn,qe]=Ze($,on),Bn=w()({[`${$}-lg`]:we==="large",[`${$}-sm`]:we==="small"}),it=se.isValidElement(cn),xt=ge||(Y==null?void 0:Y.shape)||"circle",Ft=w()($,Bn,Ve==null?void 0:Ve.className,`${$}-${xt}`,{[`${$}-image`]:it||cn&&Zt,[`${$}-icon`]:!!ue},qe,on,ve,xe,xn),St=typeof we=="number"?{width:we,height:we,fontSize:ue?we/2:18}:{};let Ot;if(typeof cn=="string"&&Zt)Ot=se.createElement("img",{src:cn,draggable:Ke,srcSet:Xn,onError:Te,alt:Ee,crossOrigin:In});else if(it)Ot=cn;else if(ue)Ot=ue;else if(ct||vn!==1){const He=`scale(${vn})`,he={msTransform:He,WebkitTransform:He,transform:He};Ot=se.createElement(R.Z,{onResize:Ie},se.createElement("span",{className:`${$}-string`,ref:Gn,style:Object.assign({},he)},an))}else Ot=se.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:Gn},an);return wn(se.createElement("span",Object.assign({},Qn,{style:Object.assign(Object.assign(Object.assign(Object.assign({},St),Je),Ve==null?void 0:Ve.style),V),className:Ft,ref:kt}),Ot))}),ie=B(50344),Oe=B(96159),Re=B(55241);const T=Ae=>{const{size:Be,shape:Ue}=se.useContext(g),ge=se.useMemo(()=>({size:Ae.size||Be,shape:Ae.shape||Ue}),[Ae.size,Ae.shape,Be,Ue]);return se.createElement(g.Provider,{value:ge},Ae.children)};var Q=Ae=>{var Be,Ue,ge,Ge;const{getPrefixCls:cn,direction:Xn}=se.useContext(re.E_),{prefixCls:ue,className:ve,rootClassName:xe,style:V,maxCount:Ee,maxStyle:Ke,size:an,shape:In,maxPopoverPlacement:On,maxPopoverTrigger:gn,children:Qn,max:vn}=Ae,ht=cn("avatar",ue),ct=`${ht}-group`,Un=(0,_.Z)(ht),[Zt,Mt,vt]=Ze(ht,Un),Gn=w()(ct,{[`${ct}-rtl`]:Xn==="rtl"},vt,Un,ve,xe,Mt),kt=(0,ie.Z)(Qn).map((Y,Ie)=>(0,Oe.Tm)(Y,{key:`avatar-key-${Ie}`})),Ct=(vn==null?void 0:vn.count)||Ee,Ve=kt.length;if(Ct&&Ct<Ve){const Y=kt.slice(0,Ct),Ie=kt.slice(Ct,Ve),Te=(vn==null?void 0:vn.style)||Ke,we=((Be=vn==null?void 0:vn.popover)===null||Be===void 0?void 0:Be.trigger)||gn||"hover",Xe=((Ue=vn==null?void 0:vn.popover)===null||Ue===void 0?void 0:Ue.placement)||On||"top",Cn=Object.assign(Object.assign({content:Ie},vn==null?void 0:vn.popover),{classNames:{root:w()(`${ct}-popover`,(Ge=(ge=vn==null?void 0:vn.popover)===null||ge===void 0?void 0:ge.classNames)===null||Ge===void 0?void 0:Ge.root)},placement:Xe,trigger:we});return Y.push(se.createElement(Re.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},Cn),se.createElement(D,{style:Te},`+${Ve-Ct}`))),Zt(se.createElement(T,{shape:In,size:an},se.createElement("div",{className:Gn,style:V},Y)))}return Zt(se.createElement(T,{shape:In,size:an},se.createElement("div",{className:Gn,style:V},kt)))};const W=D;W.Group=Q;var X=W},86250:function(tn,H,B){"use strict";B.d(H,{Z:function(){return Re}});var se=B(67294),m=B(93967),w=B.n(m),R=B(98423),Fe=B(98065),G=B(53124),re=B(83559),_=B(83262);const C=["wrap","nowrap","wrap-reverse"],z=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],O=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],g=(T,ne)=>{const Q=ne.wrap===!0?"wrap":ne.wrap;return{[`${T}-wrap-${Q}`]:Q&&C.includes(Q)}},te=(T,ne)=>{const Q={};return O.forEach(W=>{Q[`${T}-align-${W}`]=ne.align===W}),Q[`${T}-align-stretch`]=!ne.align&&!!ne.vertical,Q},me=(T,ne)=>{const Q={};return z.forEach(W=>{Q[`${T}-justify-${W}`]=ne.justify===W}),Q};function J(T,ne){return w()(Object.assign(Object.assign(Object.assign({},g(T,ne)),te(T,ne)),me(T,ne)))}var de=J;const Ce=T=>{const{componentCls:ne}=T;return{[ne]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},be=T=>{const{componentCls:ne}=T;return{[ne]:{"&-gap-small":{gap:T.flexGapSM},"&-gap-middle":{gap:T.flexGap},"&-gap-large":{gap:T.flexGapLG}}}},We=T=>{const{componentCls:ne}=T,Q={};return C.forEach(W=>{Q[`${ne}-wrap-${W}`]={flexWrap:W}}),Q},Ze=T=>{const{componentCls:ne}=T,Q={};return O.forEach(W=>{Q[`${ne}-align-${W}`]={alignItems:W}}),Q},dn=T=>{const{componentCls:ne}=T,Q={};return z.forEach(W=>{Q[`${ne}-justify-${W}`]={justifyContent:W}}),Q},U=()=>({});var D=(0,re.I$)("Flex",T=>{const{paddingXS:ne,padding:Q,paddingLG:W}=T,X=(0,_.IX)(T,{flexGapSM:ne,flexGap:Q,flexGapLG:W});return[Ce(X),be(X),We(X),Ze(X),dn(X)]},U,{resetStyle:!1}),ie=function(T,ne){var Q={};for(var W in T)Object.prototype.hasOwnProperty.call(T,W)&&ne.indexOf(W)<0&&(Q[W]=T[W]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var X=0,W=Object.getOwnPropertySymbols(T);X<W.length;X++)ne.indexOf(W[X])<0&&Object.prototype.propertyIsEnumerable.call(T,W[X])&&(Q[W[X]]=T[W[X]]);return Q},Re=se.forwardRef((T,ne)=>{const{prefixCls:Q,rootClassName:W,className:X,style:Ae,flex:Be,gap:Ue,children:ge,vertical:Ge=!1,component:cn="div"}=T,Xn=ie(T,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:ue,direction:ve,getPrefixCls:xe}=se.useContext(G.E_),V=xe("flex",Q),[Ee,Ke,an]=D(V),In=Ge!=null?Ge:ue==null?void 0:ue.vertical,On=w()(X,W,ue==null?void 0:ue.className,V,Ke,an,de(V,T),{[`${V}-rtl`]:ve==="rtl",[`${V}-gap-${Ue}`]:(0,Fe.n)(Ue),[`${V}-vertical`]:In}),gn=Object.assign(Object.assign({},ue==null?void 0:ue.style),Ae);return Be&&(gn.flex=Be),Ue&&!(0,Fe.n)(Ue)&&(gn.gap=Ue),Ee(se.createElement(cn,Object.assign({ref:ne,className:On,style:gn},(0,R.Z)(Xn,["justify","wrap","align"])),ge))})},64894:function(tn,H,B){"use strict";var se=B(87462),m=B(67294),w=B(32857),R=B(93771),Fe=function(_,C){return m.createElement(R.Z,(0,se.Z)({},_,{ref:C,icon:w.Z}))},G=m.forwardRef(Fe);H.Z=G},5953:function(tn,H,B){var se=B(48764).lW;(function(m,w){tn.exports=w()})(self,()=>(()=>{var m={916:(G,re,_)=>{var C=_(471);G.exports=function(z){"use strict";var O,g="",te=(z=z||{}).video,me=z.options,J=C.$escape,de=z.tran,Ce=z.icons,be=z.index,We=C.$each;return z.$value,z.$index,g+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,O=_(568)(te),g+=O,g+=`
    `,me.logo&&(g+=`
    <div class="dplayer-logo">
        <img src="`,g+=J(me.logo),g+=`">
    </div>
    `),g+=`
    <div class="dplayer-danmaku"`,me.danmaku&&me.danmaku.bottom&&(g+=' style="margin-bottom:',g+=J(me.danmaku.bottom),g+='"'),g+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,me.danmaku&&(g+=`
        <span class="dplayer-danloading">`,g+=J(de("danmaku-loading")),g+=`</span>
        `),g+=`
        <span class="diplayer-loading-icon">`,g+=Ce.loading,g+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,g+=J(de("setting")),g+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,g+=Ce.pallette,g+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,g+=J(de("set-danmaku-color")),g+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,g+=J(be),g+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,g+=J(de("set-danmaku-type")),g+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,g+=J(be),g+=`" value="1">
                    <span>`,g+=J(de("top")),g+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,g+=J(be),g+=`" value="0" checked>
                    <span>`,g+=J(de("rolling")),g+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,g+=J(be),g+=`" value="2">
                    <span>`,g+=J(de("bottom")),g+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,g+=J(de("input-danmaku-enter")),g+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,g+=J(de("send")),g+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,g+=Ce.send,g+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,g+=Ce.play,g+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,g+=Ce.volumeDown,g+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,g+=J(me.theme),g+=`;">
                        <span class="dplayer-thumb" style="background: `,g+=J(me.theme),g+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,me.live&&(g+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,g+=J(me.theme),g+=';"></span>',g+=J(de("live")),g+=`</span>
        `),g+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,me.video.quality&&(g+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,g+=J(me.video.quality[me.video.defaultQuality].name),g+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,We(me.video.quality,function(Ze,dn){g+=`
                    <div class="dplayer-quality-item" data-index="`,g+=J(dn),g+='">',g+=J(Ze.name),g+=`</div>
                `}),g+=`
                </div>
            </div>
        </div>
        `),g+=`
        `,me.screenshot&&(g+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,g+=J(de("screenshot")),g+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,g+=Ce.camera,g+=`</span>
        </div>
        `),g+=`
        `,me.airplay&&(g+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,g+=J(de("airplay")),g+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,g+=Ce.airplay,g+=`</span>
        </div>
        `),g+=`
        `,me.chromecast&&(g+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,g+=J(de("chromecast")),g+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,g+=Ce.chromecast,g+=`</span>
        </div>
        `),g+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,g+=J(de("send-danmaku")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.comment,g+=`</span>
            </button>
        </div>
        `,me.subtitle&&(g+=`
        `,typeof me.subtitle.url=="string"?(g+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,g+=J(de("hide-subs")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.subtitle,g+=`</span>
            </button>
        </div>
        `):(g+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,g+=J(de("subtitle")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.subtitle,g+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,We(me.subtitle.url,function(Ze,dn){g+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,g+=J(Ze.url),g+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,g+=J(Ze.lang?Ze.name?Ze.name+" ("+de(Ze.lang)+")":de(Ze.lang):Ze.name),g+=`</span>
                        </div>
                    `}),g+=`
                </div>
            </div>
        </div>
        `),g+=`
        `),g+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,g+=J(de("setting")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.setting,g+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,g+=J(de("speed")),g+=`</span>
                        <div class="dplayer-toggle">`,g+=Ce.right,g+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,g+=J(de("loop")),g+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,g+=J(de("show-danmaku")),g+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,g+=J(de("unlimited-danmaku")),g+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,g+=J(de("opacity-danmaku")),g+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,We(me.playbackSpeed,function(Ze,dn){g+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,g+=J(Ze),g+=`">
                            <span class="dplayer-label">`,g+=J(Ze===1?de("normal"):Ze),g+=`</span>
                        </div>
                    `}),g+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,g+=J(de("web-fullscreen")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.fullWeb,g+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,g+=J(de("fullscreen")),g+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,g+=Ce.full,g+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,g+=J(me.theme),g+=`">
                <span class="dplayer-thumb" style="background: `,g+=J(me.theme),g+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,me.danmaku&&(g+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),g+=`
</div>
<div class="dplayer-menu">
    `,We(me.contextmenu,function(Ze,dn){g+=`
        <div class="dplayer-menu-item">
            <a`,Ze.link&&(g+=' target="_blank"'),g+=' href="',g+=J(Ze.link||"javascript:void(0);"),g+='">',Ze.key&&(g+=" ",g+=J(de(Ze.key))),Ze.text&&(g+=" ",g+=J(Ze.text)),g+=`</a>
        </div>
    `}),g+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,g+=Ce.play,g+=`
</button>`}},568:(G,re,_)=>{var C=_(471);G.exports=function(z){"use strict";var O="",g=(z=z||{}).enableSubtitle,te=z.subtitle,me=z.current,J=z.airplay,de=z.pic,Ce=C.$escape,be=z.screenshot,We=z.preload,Ze=z.url;return g=te&&te.type==="webvtt",O+=`
<video
    class="dplayer-video `,me&&(O+="dplayer-video-current"),O+=`"
    webkit-playsinline
    `,J&&(O+=' x-webkit-airplay="allow" '),O+=`
    playsinline
    `,de&&(O+='poster="',O+=Ce(de),O+='"'),O+=`
    `,(be||g)&&(O+='crossorigin="anonymous"'),O+=`
    `,We&&(O+='preload="',O+=Ce(We),O+='"'),O+=`
    `,J?O+=`
    nosrc
    `:Ze&&(O+=`
    src="`,O+=Ce(Ze),O+=`"
    `),O+=`
    >
    `,J&&(O+=`
    <source src="`,O+=Ce(Ze),O+=`">
    `),O+=`
    `,g&&(O+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,O+=Ce(typeof te.url=="string"?te.url:te.url[te.index].url),O+=`"></track>
    `),O+`
</video>`}},49:(G,re,_)=>{"use strict";_.d(re,{Z:()=>te});var C=_(415),z=_.n(C),O=_(352),g=_.n(O)()(z());g.push([G.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const te=g},685:(G,re,_)=>{"use strict";_.d(re,{Z:()=>We});var C=_(415),z=_.n(C),O=_(352),g=_.n(O),te=_(49),me=_(80),J=_.n(me),de=new URL(_(831),_.b),Ce=g()(z());Ce.i(te.Z);var be=J()(de);Ce.push([G.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+be+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const We=Ce},856:G=>{"use strict";var re=[];function _(O){for(var g=-1,te=0;te<re.length;te++)if(re[te].identifier===O){g=te;break}return g}function C(O,g){for(var te={},me=[],J=0;J<O.length;J++){var de=O[J],Ce=g.base?de[0]+g.base:de[0],be=te[Ce]||0,We="".concat(Ce," ").concat(be);te[Ce]=be+1;var Ze=_(We),dn={css:de[1],media:de[2],sourceMap:de[3],supports:de[4],layer:de[5]};if(Ze!==-1)re[Ze].references++,re[Ze].updater(dn);else{var U=z(dn,g);g.byIndex=J,re.splice(J,0,{identifier:We,updater:U,references:1})}me.push(We)}return me}function z(O,g){var te=g.domAPI(g);return te.update(O),function(me){if(me){if(me.css===O.css&&me.media===O.media&&me.sourceMap===O.sourceMap&&me.supports===O.supports&&me.layer===O.layer)return;te.update(O=me)}else te.remove()}}G.exports=function(O,g){var te=C(O=O||[],g=g||{});return function(me){me=me||[];for(var J=0;J<te.length;J++){var de=_(te[J]);re[de].references--}for(var Ce=C(me,g),be=0;be<te.length;be++){var We=_(te[be]);re[We].references===0&&(re[We].updater(),re.splice(We,1))}te=Ce}}},370:G=>{"use strict";var re={};G.exports=function(_,C){var z=function(O){if(re[O]===void 0){var g=document.querySelector(O);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(te){g=null}re[O]=g}return re[O]}(_);if(!z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");z.appendChild(C)}},278:G=>{"use strict";G.exports=function(re){var _=document.createElement("style");return re.setAttributes(_,re.attributes),re.insert(_,re.options),_}},458:(G,re,_)=>{"use strict";G.exports=function(C){var z=_.nc;z&&C.setAttribute("nonce",z)}},470:G=>{"use strict";G.exports=function(re){var _=re.insertStyleElement(re);return{update:function(C){(function(z,O,g){var te="";g.supports&&(te+="@supports (".concat(g.supports,") {")),g.media&&(te+="@media ".concat(g.media," {"));var me=g.layer!==void 0;me&&(te+="@layer".concat(g.layer.length>0?" ".concat(g.layer):""," {")),te+=g.css,me&&(te+="}"),g.media&&(te+="}"),g.supports&&(te+="}");var J=g.sourceMap;J&&typeof btoa!="undefined"&&(te+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),O.styleTagTransform(te,z,O.options)})(_,re,C)},remove:function(){(function(C){if(C.parentNode===null)return!1;C.parentNode.removeChild(C)})(_)}}}},488:G=>{"use strict";G.exports=function(re,_){if(_.styleSheet)_.styleSheet.cssText=re;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(re))}}},251:G=>{G.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:G=>{G.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:G=>{G.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:G=>{G.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(G,re,_)=>{"use strict";var C=typeof self!="undefined"?self:typeof window!="undefined"?window:_.g!==void 0?_.g:{},z=Object.create(C),O=/["&'<>]/;function g(te){return typeof te!="string"&&(te=te==null?"":typeof te=="function"?g(te.call(te)):JSON.stringify(te)),te}z.$escape=function(te){return function(me){var J=""+me,de=O.exec(J);if(!de)return me;var Ce="",be=void 0,We=void 0,Ze=void 0;for(be=de.index,We=0;be<J.length;be++){switch(J.charCodeAt(be)){case 34:Ze="&#34;";break;case 38:Ze="&#38;";break;case 39:Ze="&#39;";break;case 60:Ze="&#60;";break;case 62:Ze="&#62;";break;default:continue}We!==be&&(Ce+=J.substring(We,be)),We=be+1,Ce+=Ze}return We!==be?Ce+J.substring(We,be):Ce}(g(te))},z.$each=function(te,me){if(Array.isArray(te))for(var J=0,de=te.length;J<de;J++)me(te[J],J);else for(var Ce in te)me(te[Ce],Ce)},G.exports=z},471:(G,re,_)=>{"use strict";G.exports=_(897)},352:G=>{"use strict";G.exports=function(re){var _=[];return _.toString=function(){return this.map(function(C){var z="",O=C[5]!==void 0;return C[4]&&(z+="@supports (".concat(C[4],") {")),C[2]&&(z+="@media ".concat(C[2]," {")),O&&(z+="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {")),z+=re(C),O&&(z+="}"),C[2]&&(z+="}"),C[4]&&(z+="}"),z}).join("")},_.i=function(C,z,O,g,te){typeof C=="string"&&(C=[[null,C,void 0]]);var me={};if(O)for(var J=0;J<this.length;J++){var de=this[J][0];de!=null&&(me[de]=!0)}for(var Ce=0;Ce<C.length;Ce++){var be=[].concat(C[Ce]);O&&me[be[0]]||(te!==void 0&&(be[5]===void 0||(be[1]="@layer".concat(be[5].length>0?" ".concat(be[5]):""," {").concat(be[1],"}")),be[5]=te),z&&(be[2]&&(be[1]="@media ".concat(be[2]," {").concat(be[1],"}")),be[2]=z),g&&(be[4]?(be[1]="@supports (".concat(be[4],") {").concat(be[1],"}"),be[4]=g):be[4]="".concat(g)),_.push(be))}},_}},80:G=>{"use strict";G.exports=function(re,_){return _||(_={}),re&&(re=String(re.__esModule?re.default:re),/^['"].*['"]$/.test(re)&&(re=re.slice(1,-1)),_.hash&&(re+=_.hash),/["'() \t\n]|(%20)/.test(re)||_.needQuotes?'"'.concat(re.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):re)}},415:G=>{"use strict";G.exports=function(re){var _=re[1],C=re[3];if(!C)return _;if(typeof btoa=="function"){var z=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),O="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(z),g="/*# ".concat(O," */");return[_].concat([g]).join(`
`)}return[_].join(`
`)}},937:G=>{function re(_){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},re(_)}G.exports=(typeof self=="undefined"?"undefined":re(self))=="object"?self.FormData:window.FormData},831:G=>{"use strict";G.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},w={};function R(G){var re=w[G];if(re!==void 0)return re.exports;var _=w[G]={id:G,exports:{}};return m[G](_,_.exports,R),_.exports}R.m=m,R.n=G=>{var re=G&&G.__esModule?()=>G.default:()=>G;return R.d(re,{a:re}),re},R.d=(G,re)=>{for(var _ in re)R.o(re,_)&&!R.o(G,_)&&Object.defineProperty(G,_,{enumerable:!0,get:re[_]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(G){if(typeof window=="object")return window}}(),R.o=(G,re)=>Object.prototype.hasOwnProperty.call(G,re),R.b=document.baseURI||self.location.href,R.nc=void 0;var Fe={};return(()=>{"use strict";R.d(Fe,{default:()=>Nt});var G=R(856),re=R.n(G),_=R(470),C=R.n(_),z=R(370),O=R.n(z),g=R(458),te=R.n(g),me=R(278),J=R.n(me),de=R(488),Ce=R.n(de),be=R(685),We={};We.styleTagTransform=Ce(),We.setAttributes=te(),We.insert=O().bind(null,"head"),We.domAPI=C(),We.insertStyleElement=J(),re()(be.Z,We),be.Z&&be.Z.locals&&be.Z.locals;function Ze(a){return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ze(a)}function dn(a,i){this.name="AggregateError",this.errors=a,this.message=i||""}dn.prototype=Error.prototype;function U(a){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},U(a)}var D=setTimeout;function ie(a){return!!(a&&a.length!==void 0)}function Oe(){}function Re(a){if(!(this instanceof Re))throw new TypeError("Promises must be constructed via new");if(typeof a!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Ae(a,this)}function T(a,i){for(;a._state===3;)a=a._value;a._state!==0?(a._handled=!0,Re._immediateFn(function(){var d=a._state===1?i.onFulfilled:i.onRejected;if(d!==null){var o;try{o=d(a._value)}catch(u){return void Q(i.promise,u)}ne(i.promise,o)}else(a._state===1?ne:Q)(i.promise,a._value)})):a._deferreds.push(i)}function ne(a,i){try{if(i===a)throw new TypeError("A promise cannot be resolved with itself.");if(i&&(U(i)==="object"||typeof i=="function")){var d=i.then;if(i instanceof Re)return a._state=3,a._value=i,void W(a);if(typeof d=="function")return void Ae((o=d,u=i,function(){o.apply(u,arguments)}),a)}a._state=1,a._value=i,W(a)}catch(s){Q(a,s)}var o,u}function Q(a,i){a._state=2,a._value=i,W(a)}function W(a){a._state===2&&a._deferreds.length===0&&Re._immediateFn(function(){a._handled||Re._unhandledRejectionFn(a._value)});for(var i=0,d=a._deferreds.length;i<d;i++)T(a,a._deferreds[i]);a._deferreds=null}function X(a,i,d){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof i=="function"?i:null,this.promise=d}function Ae(a,i){var d=!1;try{a(function(o){d||(d=!0,ne(i,o))},function(o){d||(d=!0,Q(i,o))})}catch(o){if(d)return;d=!0,Q(i,o)}}Re.prototype.catch=function(a){return this.then(null,a)},Re.prototype.then=function(a,i){var d=new this.constructor(Oe);return T(this,new X(a,i,d)),d},Re.prototype.finally=function(a){var i=this.constructor;return this.then(function(d){return i.resolve(a()).then(function(){return d})},function(d){return i.resolve(a()).then(function(){return i.reject(d)})})},Re.all=function(a){return new Re(function(i,d){if(!ie(a))return d(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(a);if(o.length===0)return i([]);var u=o.length;function s(k,S){try{if(S&&(U(S)==="object"||typeof S=="function")){var oe=S.then;if(typeof oe=="function")return void oe.call(S,function(ye){s(k,ye)},d)}o[k]=S,--u==0&&i(o)}catch(ye){d(ye)}}for(var h=0;h<o.length;h++)s(h,o[h])})},Re.any=function(a){var i=this;return new i(function(d,o){if(!a||a.length===void 0)return o(new TypeError("Promise.any accepts an array"));var u=Array.prototype.slice.call(a);if(u.length===0)return o();for(var s=[],h=0;h<u.length;h++)try{i.resolve(u[h]).then(d).catch(function(k){s.push(k),s.length===u.length&&o(new dn(s,"All promises were rejected"))})}catch(k){o(k)}})},Re.allSettled=function(a){return new this(function(i,d){if(!a||a.length===void 0)return d(new TypeError(Ze(a)+" "+a+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(a);if(o.length===0)return i([]);var u=o.length;function s(k,S){if(S&&(Ze(S)==="object"||typeof S=="function")){var oe=S.then;if(typeof oe=="function")return void oe.call(S,function(ye){s(k,ye)},function(ye){o[k]={status:"rejected",reason:ye},--u==0&&i(o)})}o[k]={status:"fulfilled",value:S},--u==0&&i(o)}for(var h=0;h<o.length;h++)s(h,o[h])})},Re.resolve=function(a){return a&&U(a)==="object"&&a.constructor===Re?a:new Re(function(i){i(a)})},Re.reject=function(a){return new Re(function(i,d){d(a)})},Re.race=function(a){return new Re(function(i,d){if(!ie(a))return d(new TypeError("Promise.race accepts an array"));for(var o=0,u=a.length;o<u;o++)Re.resolve(a[o]).then(i,d)})},Re._immediateFn=typeof setImmediate=="function"&&function(a){setImmediate(a)}||function(a){D(a,0)},Re._unhandledRejectionFn=function(a){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",a)};const Be=Re;var Ue=/mobile/i.test(window.navigator.userAgent);const ge={secondToTime:function(a){if((a=a||0)===0||a===1/0||a.toString()==="NaN")return"00:00";var i=Math.floor(a/3600),d=Math.floor((a-3600*i)/60),o=Math.floor(a-3600*i-60*d);return(i>0?[i,d,o]:[d,o]).map(function(u){return u<10?"0"+u:""+u}).join(":")},getElementViewLeft:function(a){var i=a.offsetLeft,d=a.offsetParent,o=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;d!==null&&d!==a;)i+=d.offsetLeft,d=d.offsetParent;else for(;d!==null;)i+=d.offsetLeft,d=d.offsetParent;return i-o},getBoundingClientRectViewLeft:function(a){var i=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(a.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var d=document.createElement("div");d.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(d),this.getBoundingClientRectViewLeft.offset=-d.getBoundingClientRect().top-i,document.body.removeChild(d),d=null}var o=a.getBoundingClientRect(),u=this.getBoundingClientRectViewLeft.offset;return o.left+u}return this.getElementViewLeft(a)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(a){var i=a.left,d=i===void 0?0:i,o=a.top,u=o===void 0?0:o;this.isFirefox?(document.documentElement.scrollLeft=d,document.documentElement.scrollTop=u):window.scrollTo(d,u)},isMobile:Ue,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(a,i){localStorage.setItem(a,i)},get:function(a){return localStorage.getItem(a)}},nameMap:{dragStart:Ue?"touchstart":"mousedown",dragMove:Ue?"touchmove":"mousemove",dragEnd:Ue?"touchend":"mouseup"},color2Number:function(a){return a[0]==="#"&&(a=a.substr(1)),a.length===3&&(a="".concat(a[0]).concat(a[0]).concat(a[1]).concat(a[1]).concat(a[2]).concat(a[2])),parseInt(a,16)+0&16777215},number2Color:function(a){return"#"+("00000"+a.toString(16)).slice(-6)},number2Type:function(a){switch(a){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function Ge(a,i){return function(){return a.apply(i,arguments)}}function cn(a){return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},cn(a)}var Xn,ue=Object.prototype.toString,ve=Object.getPrototypeOf,xe=(Xn=Object.create(null),function(a){var i=ue.call(a);return Xn[i]||(Xn[i]=i.slice(8,-1).toLowerCase())}),V=function(a){return a=a.toLowerCase(),function(i){return xe(i)===a}},Ee=function(a){return function(i){return cn(i)===a}},Ke=Array.isArray,an=Ee("undefined"),In=V("ArrayBuffer"),On=Ee("string"),gn=Ee("function"),Qn=Ee("number"),vn=function(a){return a!==null&&cn(a)==="object"},ht=function(a){if(xe(a)!=="object")return!1;var i=ve(a);return!(i!==null&&i!==Object.prototype&&Object.getPrototypeOf(i)!==null||Symbol.toStringTag in a||Symbol.iterator in a)},ct=V("Date"),Un=V("File"),Zt=V("Blob"),Mt=V("FileList"),vt=V("URLSearchParams");function Gn(a,i){var d,o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=u.allOwnKeys,h=s!==void 0&&s;if(a!=null)if(cn(a)!=="object"&&(a=[a]),Ke(a))for(d=0,o=a.length;d<o;d++)i.call(null,a[d],d,a);else{var k,S=h?Object.getOwnPropertyNames(a):Object.keys(a),oe=S.length;for(d=0;d<oe;d++)k=S[d],i.call(null,a[k],k,a)}}function kt(a,i){i=i.toLowerCase();for(var d,o=Object.keys(a),u=o.length;u-- >0;)if(i===(d=o[u]).toLowerCase())return d;return null}var Ct,Ve,Y=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:B.g,Ie=function(a){return!an(a)&&a!==Y},Te=(Ct=typeof Uint8Array!="undefined"&&ve(Uint8Array),function(a){return Ct&&a instanceof Ct}),we=V("HTMLFormElement"),Xe=(Ve=Object.prototype.hasOwnProperty,function(a,i){return Ve.call(a,i)}),Cn=V("RegExp"),Je=function(a,i){var d=Object.getOwnPropertyDescriptors(a),o={};Gn(d,function(u,s){i(u,s,a)!==!1&&(o[s]=u)}),Object.defineProperties(a,o)};const $={isArray:Ke,isArrayBuffer:In,isBuffer:function(a){return a!==null&&!an(a)&&a.constructor!==null&&!an(a.constructor)&&gn(a.constructor.isBuffer)&&a.constructor.isBuffer(a)},isFormData:function(a){var i="[object FormData]";return a&&(typeof FormData=="function"&&a instanceof FormData||ue.call(a)===i||gn(a.toString)&&a.toString()===i)},isArrayBufferView:function(a){return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer&&In(a.buffer)},isString:On,isNumber:Qn,isBoolean:function(a){return a===!0||a===!1},isObject:vn,isPlainObject:ht,isUndefined:an,isDate:ct,isFile:Un,isBlob:Zt,isRegExp:Cn,isFunction:gn,isStream:function(a){return vn(a)&&gn(a.pipe)},isURLSearchParams:vt,isTypedArray:Te,isFileList:Mt,forEach:Gn,merge:function a(){for(var i=Ie(this)&&this||{},d=i.caseless,o={},u=function(k,S){var oe=d&&kt(o,S)||S;ht(o[oe])&&ht(k)?o[oe]=a(o[oe],k):ht(k)?o[oe]=a({},k):Ke(k)?o[oe]=k.slice():o[oe]=k},s=0,h=arguments.length;s<h;s++)arguments[s]&&Gn(arguments[s],u);return o},extend:function(a,i,d){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=o.allOwnKeys;return Gn(i,function(s,h){d&&gn(s)?a[h]=Ge(s,d):a[h]=s},{allOwnKeys:u}),a},trim:function(a){return a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(a){return a.charCodeAt(0)===65279&&(a=a.slice(1)),a},inherits:function(a,i,d,o){a.prototype=Object.create(i.prototype,o),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:i.prototype}),d&&Object.assign(a.prototype,d)},toFlatObject:function(a,i,d,o){var u,s,h,k={};if(i=i||{},a==null)return i;do{for(s=(u=Object.getOwnPropertyNames(a)).length;s-- >0;)h=u[s],o&&!o(h,a,i)||k[h]||(i[h]=a[h],k[h]=!0);a=d!==!1&&ve(a)}while(a&&(!d||d(a,i))&&a!==Object.prototype);return i},kindOf:xe,kindOfTest:V,endsWith:function(a,i,d){a=String(a),(d===void 0||d>a.length)&&(d=a.length),d-=i.length;var o=a.indexOf(i,d);return o!==-1&&o===d},toArray:function(a){if(!a)return null;if(Ke(a))return a;var i=a.length;if(!Qn(i))return null;for(var d=new Array(i);i-- >0;)d[i]=a[i];return d},forEachEntry:function(a,i){for(var d,o=(a&&a[Symbol.iterator]).call(a);(d=o.next())&&!d.done;){var u=d.value;i.call(a,u[0],u[1])}},matchAll:function(a,i){for(var d,o=[];(d=a.exec(i))!==null;)o.push(d);return o},isHTMLForm:we,hasOwnProperty:Xe,hasOwnProp:Xe,reduceDescriptors:Je,freezeMethods:function(a){Je(a,function(i,d){if(gn(a)&&["arguments","caller","callee"].indexOf(d)!==-1)return!1;var o=a[d];gn(o)&&(i.enumerable=!1,"writable"in i?i.writable=!1:i.set||(i.set=function(){throw Error("Can not rewrite read-only method '"+d+"'")}))})},toObjectSet:function(a,i){var d={},o=function(u){u.forEach(function(s){d[s]=!0})};return Ke(a)?o(a):o(String(a).split(i)),d},toCamelCase:function(a){return a.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(i,d,o){return d.toUpperCase()+o})},noop:function(){},toFiniteNumber:function(a,i){return a=+a,Number.isFinite(a)?a:i},findKey:kt,global:Y,isContextDefined:Ie,toJSONObject:function(a){var i=new Array(10);return function d(o,u){if(vn(o)){if(i.indexOf(o)>=0)return;if(!("toJSON"in o)){i[u]=o;var s=Ke(o)?[]:{};return Gn(o,function(h,k){var S=d(h,u+1);!an(S)&&(s[k]=S)}),i[u]=void 0,s}}return o}(a,0)}};function on(a,i,d,o,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",i&&(this.code=i),d&&(this.config=d),o&&(this.request=o),u&&(this.response=u)}$.inherits(on,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var wn=on.prototype,xn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(a){xn[a]={value:a}}),Object.defineProperties(on,xn),Object.defineProperty(wn,"isAxiosError",{value:!0}),on.from=function(a,i,d,o,u,s){var h=Object.create(wn);return $.toFlatObject(a,h,function(k){return k!==Error.prototype},function(k){return k!=="isAxiosError"}),on.call(h,a.message,i,d,o,u),h.cause=a,h.name=a.name,s&&Object.assign(h,s),h};const qe=on,Bn=R(937);function it(a){return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},it(a)}function xt(a){return $.isPlainObject(a)||$.isArray(a)}function Ft(a){return $.endsWith(a,"[]")?a.slice(0,-2):a}function St(a,i,d){return a?a.concat(i).map(function(o,u){return o=Ft(o),!d&&u?"["+o+"]":o}).join(d?".":""):i}var Ot=$.toFlatObject($,{},null,function(a){return/^is[A-Z]/.test(a)});const He=function(a,i,d){if(!$.isObject(a))throw new TypeError("target must be an object");i=i||new(Bn||FormData);var o,u=(d=$.toFlatObject(d,{metaTokens:!0,dots:!1,indexes:!1},!1,function(bn,Ye){return!$.isUndefined(Ye[bn])})).metaTokens,s=d.visitor||ye,h=d.dots,k=d.indexes,S=(d.Blob||typeof Blob!="undefined"&&Blob)&&(o=i)&&$.isFunction(o.append)&&o[Symbol.toStringTag]==="FormData"&&o[Symbol.iterator];if(!$.isFunction(s))throw new TypeError("visitor must be a function");function oe(bn){if(bn===null)return"";if($.isDate(bn))return bn.toISOString();if(!S&&$.isBlob(bn))throw new qe("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(bn)||$.isTypedArray(bn)?S&&typeof Blob=="function"?new Blob([bn]):se.from(bn):bn}function ye(bn,Ye,ze){var En=bn;if(bn&&!ze&&it(bn)==="object"){if($.endsWith(Ye,"{}"))Ye=u?Ye:Ye.slice(0,-2),bn=JSON.stringify(bn);else if($.isArray(bn)&&function(Nn){return $.isArray(Nn)&&!Nn.some(xt)}(bn)||$.isFileList(bn)||$.endsWith(Ye,"[]")&&(En=$.toArray(bn)))return Ye=Ft(Ye),En.forEach(function(Nn,Jt){!$.isUndefined(Nn)&&Nn!==null&&i.append(k===!0?St([Ye],Jt,h):k===null?Ye:Ye+"[]",oe(Nn))}),!1}return!!xt(bn)||(i.append(St(ze,Ye,h),oe(bn)),!1)}var Qe=[],ln=Object.assign(Ot,{defaultVisitor:ye,convertValue:oe,isVisitable:xt});if(!$.isObject(a))throw new TypeError("data must be an object");return function bn(Ye,ze){if(!$.isUndefined(Ye)){if(Qe.indexOf(Ye)!==-1)throw Error("Circular reference detected in "+ze.join("."));Qe.push(Ye),$.forEach(Ye,function(En,Nn){(!($.isUndefined(En)||En===null)&&s.call(i,En,$.isString(Nn)?Nn.trim():Nn,ze,ln))===!0&&bn(En,ze?ze.concat(Nn):[Nn])}),Qe.pop()}}(a),i};function he(a){var i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(d){return i[d]})}function Le(a,i){this._pairs=[],a&&He(a,this,i)}var Me=Le.prototype;Me.append=function(a,i){this._pairs.push([a,i])},Me.toString=function(a){var i=a?function(d){return a.call(this,d,he)}:he;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};const An=Le;function Dn(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wn(a,i,d){if(!i)return a;var o,u=d&&d.encode||Dn,s=d&&d.serialize;if(o=s?s(i,d):$.isURLSearchParams(i)?i.toString():new An(i,d).toString(u)){var h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+o}return a}function lt(a){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},lt(a)}function It(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(lt(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(lt(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),lt(u)==="symbol"?u:String(u)),o)}var u}var Ht=function(){function a(){(function(o,u){if(!(o instanceof u))throw new TypeError("Cannot call a class as a function")})(this,a),this.handlers=[]}var i,d;return i=a,d=[{key:"use",value:function(o,u,s){return this.handlers.push({fulfilled:o,rejected:u,synchronous:!!s&&s.synchronous,runWhen:s?s.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(o){this.handlers[o]&&(this.handlers[o]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(o){$.forEach(this.handlers,function(u){u!==null&&o(u)})}}],d&&It(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Bt=Ht,_t={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sr=typeof URLSearchParams!="undefined"?URLSearchParams:An,Wt=FormData;var or,cr=(typeof navigator=="undefined"||(or=navigator.product)!=="ReactNative"&&or!=="NativeScript"&&or!=="NS")&&typeof window!="undefined"&&typeof document!="undefined",nr=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const jt={isBrowser:!0,classes:{URLSearchParams:sr,FormData:Wt,Blob},isStandardBrowserEnv:cr,isStandardBrowserWebWorkerEnv:nr,protocols:["http","https","file","blob","url","data"]},mr=function(a){function i(o,u,s,h){var k=o[h++],S=Number.isFinite(+k),oe=h>=o.length;return k=!k&&$.isArray(s)?s.length:k,oe?($.hasOwnProp(s,k)?s[k]=[s[k],u]:s[k]=u,!S):(s[k]&&$.isObject(s[k])||(s[k]=[]),i(o,u,s[k],h)&&$.isArray(s[k])&&(s[k]=function(ye){var Qe,ln,bn={},Ye=Object.keys(ye),ze=Ye.length;for(Qe=0;Qe<ze;Qe++)bn[ln=Ye[Qe]]=ye[ln];return bn}(s[k])),!S)}if($.isFormData(a)&&$.isFunction(a.entries)){var d={};return $.forEachEntry(a,function(o,u){i(function(s){return $.matchAll(/\w+|\[(\w*)]/g,s).map(function(h){return h[0]==="[]"?"":h[1]||h[0]})}(o),u,d,0)}),d}return null};var Sr={"Content-Type":void 0},_r={transitional:_t,adapter:["xhr","http"],transformRequest:[function(a,i){var d,o=i.getContentType()||"",u=o.indexOf("application/json")>-1,s=$.isObject(a);if(s&&$.isHTMLForm(a)&&(a=new FormData(a)),$.isFormData(a))return u&&u?JSON.stringify(mr(a)):a;if($.isArrayBuffer(a)||$.isBuffer(a)||$.isStream(a)||$.isFile(a)||$.isBlob(a))return a;if($.isArrayBufferView(a))return a.buffer;if($.isURLSearchParams(a))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return function(k,S){return He(k,new jt.classes.URLSearchParams,Object.assign({visitor:function(oe,ye,Qe,ln){return jt.isNode&&$.isBuffer(oe)?(this.append(ye,oe.toString("base64")),!1):ln.defaultVisitor.apply(this,arguments)}},S))}(a,this.formSerializer).toString();if((d=$.isFileList(a))||o.indexOf("multipart/form-data")>-1){var h=this.env&&this.env.FormData;return He(d?{"files[]":a}:a,h&&new h,this.formSerializer)}}return s||u?(i.setContentType("application/json",!1),function(k,S,oe){if($.isString(k))try{return(0,JSON.parse)(k),$.trim(k)}catch(ye){if(ye.name!=="SyntaxError")throw ye}return(0,JSON.stringify)(k)}(a)):a}],transformResponse:[function(a){var i=this.transitional||_r.transitional,d=i&&i.forcedJSONParsing,o=this.responseType==="json";if(a&&$.isString(a)&&(d&&!this.responseType||o)){var u=!(i&&i.silentJSONParsing)&&o;try{return JSON.parse(a)}catch(s){if(u)throw s.name==="SyntaxError"?qe.from(s,qe.ERR_BAD_RESPONSE,this,null,this.response):s}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],function(a){_r.headers[a]={}}),$.forEach(["post","put","patch"],function(a){_r.headers[a]=$.merge(Sr)});const $r=_r;var Pr=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function Br(a){return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Br(a)}function jr(a,i){(i==null||i>a.length)&&(i=a.length);for(var d=0,o=new Array(i);d<i;d++)o[d]=a[d];return o}function sa(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Br(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Br(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Br(u)==="symbol"?u:String(u)),o)}var u}var Ur=Symbol("internals");function Tr(a){return a&&String(a).trim().toLowerCase()}function gr(a){return a===!1||a==null?a:$.isArray(a)?a.map(gr):String(a)}function Gr(a,i,d,o){return $.isFunction(o)?o.call(this,i,d):$.isString(i)?$.isString(o)?i.indexOf(o)!==-1:$.isRegExp(o)?o.test(i):void 0:void 0}var vr=function(a,i){function d(h){(function(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")})(this,d),h&&this.set(h)}var o,u,s;return o=d,u=[{key:"set",value:function(h,k,S){var oe=this;function ye(Nn,Jt,Kt){var mn=Tr(Jt);if(!mn)throw new Error("header name must be a non-empty string");var nt=$.findKey(oe,mn);(!nt||oe[nt]===void 0||Kt===!0||Kt===void 0&&oe[nt]!==!1)&&(oe[nt||Jt]=gr(Nn))}var Qe,ln,bn,Ye,ze,En=function(Nn,Jt){return $.forEach(Nn,function(Kt,mn){return ye(Kt,mn,Jt)})};return $.isPlainObject(h)||h instanceof this.constructor?En(h,k):$.isString(h)&&(h=h.trim())&&!/^[-_a-zA-Z]+$/.test(h.trim())?En((ze={},(Qe=h)&&Qe.split(`
`).forEach(function(Nn){Ye=Nn.indexOf(":"),ln=Nn.substring(0,Ye).trim().toLowerCase(),bn=Nn.substring(Ye+1).trim(),!ln||ze[ln]&&Pr[ln]||(ln==="set-cookie"?ze[ln]?ze[ln].push(bn):ze[ln]=[bn]:ze[ln]=ze[ln]?ze[ln]+", "+bn:bn)}),ze),k):h!=null&&ye(k,h,S),this}},{key:"get",value:function(h,k){if(h=Tr(h)){var S=$.findKey(this,h);if(S){var oe=this[S];if(!k)return oe;if(k===!0)return function(ye){for(var Qe,ln=Object.create(null),bn=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;Qe=bn.exec(ye);)ln[Qe[1]]=Qe[2];return ln}(oe);if($.isFunction(k))return k.call(this,oe,S);if($.isRegExp(k))return k.exec(oe);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(h,k){if(h=Tr(h)){var S=$.findKey(this,h);return!(!S||k&&!Gr(0,this[S],S,k))}return!1}},{key:"delete",value:function(h,k){var S=this,oe=!1;function ye(Qe){if(Qe=Tr(Qe)){var ln=$.findKey(S,Qe);!ln||k&&!Gr(0,S[ln],ln,k)||(delete S[ln],oe=!0)}}return $.isArray(h)?h.forEach(ye):ye(h),oe}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(h){var k=this,S={};return $.forEach(this,function(oe,ye){var Qe=$.findKey(S,ye);if(Qe)return k[Qe]=gr(oe),void delete k[ye];var ln=h?function(bn){return bn.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(Ye,ze,En){return ze.toUpperCase()+En})}(ye):String(ye).trim();ln!==ye&&delete k[ye],k[ln]=gr(oe),S[ln]=!0}),this}},{key:"concat",value:function(){for(var h,k=arguments.length,S=new Array(k),oe=0;oe<k;oe++)S[oe]=arguments[oe];return(h=this.constructor).concat.apply(h,[this].concat(S))}},{key:"toJSON",value:function(h){var k=Object.create(null);return $.forEach(this,function(S,oe){S!=null&&S!==!1&&(k[oe]=h&&$.isArray(S)?S.join(", "):S)}),k}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(h){var k,S,oe=(S=2,function(ye){if(Array.isArray(ye))return ye}(k=h)||function(ye,Qe){var ln=ye==null?null:typeof Symbol!="undefined"&&ye[Symbol.iterator]||ye["@@iterator"];if(ln!=null){var bn,Ye,ze,En,Nn=[],Jt=!0,Kt=!1;try{if(ze=(ln=ln.call(ye)).next,Qe===0){if(Object(ln)!==ln)return;Jt=!1}else for(;!(Jt=(bn=ze.call(ln)).done)&&(Nn.push(bn.value),Nn.length!==Qe);Jt=!0);}catch(mn){Kt=!0,Ye=mn}finally{try{if(!Jt&&ln.return!=null&&(En=ln.return(),Object(En)!==En))return}finally{if(Kt)throw Ye}}return Nn}}(k,S)||function(ye,Qe){if(ye){if(typeof ye=="string")return jr(ye,Qe);var ln=Object.prototype.toString.call(ye).slice(8,-1);return ln==="Object"&&ye.constructor&&(ln=ye.constructor.name),ln==="Map"||ln==="Set"?Array.from(ye):ln==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ln)?jr(ye,Qe):void 0}}(k,S)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return oe[0]+": "+oe[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],s=[{key:"from",value:function(h){return h instanceof this?h:new this(h)}},{key:"concat",value:function(h){for(var k=new this(h),S=arguments.length,oe=new Array(S>1?S-1:0),ye=1;ye<S;ye++)oe[ye-1]=arguments[ye];return oe.forEach(function(Qe){return k.set(Qe)}),k}},{key:"accessor",value:function(h){var k=(this[Ur]=this[Ur]={accessors:{}}).accessors,S=this.prototype;function oe(ye){var Qe=Tr(ye);k[Qe]||(function(ln,bn){var Ye=$.toCamelCase(" "+bn);["get","set","has"].forEach(function(ze){Object.defineProperty(ln,ze+Ye,{value:function(En,Nn,Jt){return this[ze].call(this,bn,En,Nn,Jt)},configurable:!0})})}(S,ye),k[Qe]=!0)}return $.isArray(h)?h.forEach(oe):oe(h),this}}],u&&sa(o.prototype,u),s&&sa(o,s),Object.defineProperty(o,"prototype",{writable:!1}),d}();vr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),$.freezeMethods(vr.prototype),$.freezeMethods(vr);const Dr=vr;function ir(a,i){var d=this||$r,o=i||d,u=Dr.from(o.headers),s=o.data;return $.forEach(a,function(h){s=h.call(d,s,u.normalize(),i?i.status:void 0)}),u.normalize(),s}function ca(a){return!(!a||!a.__CANCEL__)}function Jr(a,i,d){qe.call(this,a==null?"canceled":a,qe.ERR_CANCELED,i,d),this.name="CanceledError"}$.inherits(Jr,qe,{__CANCEL__:!0});const tr=Jr,$a=jt.isStandardBrowserEnv?{write:function(a,i,d,o,u,s){var h=[];h.push(a+"="+encodeURIComponent(i)),$.isNumber(d)&&h.push("expires="+new Date(d).toGMTString()),$.isString(o)&&h.push("path="+o),$.isString(u)&&h.push("domain="+u),s===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(a){var i=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ja(a,i){return a&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)?function(d,o){return o?d.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):d}(a,i):i}const Ja=jt.isStandardBrowserEnv?function(){var a,i=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a");function o(u){var s=u;return i&&(d.setAttribute("href",s),s=d.href),d.setAttribute("href",s),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return a=o(window.location.href),function(u){var s=$.isString(u)?o(u):u;return s.protocol===a.protocol&&s.host===a.host}}():function(){return!0};function ga(a,i){var d=0,o=function(u,s){u=u||10;var h,k=new Array(u),S=new Array(u),oe=0,ye=0;return s=s!==void 0?s:1e3,function(Qe){var ln=Date.now(),bn=S[ye];h||(h=ln),k[oe]=Qe,S[oe]=ln;for(var Ye=ye,ze=0;Ye!==oe;)ze+=k[Ye++],Ye%=u;if((oe=(oe+1)%u)===ye&&(ye=(ye+1)%u),!(ln-h<s)){var En=bn&&ln-bn;return En?Math.round(1e3*ze/En):void 0}}}(50,250);return function(u){var s=u.loaded,h=u.lengthComputable?u.total:void 0,k=s-d,S=o(k);d=s;var oe={loaded:s,total:h,progress:h?s/h:void 0,bytes:k,rate:S||void 0,estimated:S&&h&&s<=h?(h-s)/S:void 0,event:u};oe[i?"download":"upload"]=!0,a(oe)}}var da={http:null,xhr:typeof XMLHttpRequest!="undefined"&&function(a){return new Promise(function(i,d){var o,u=a.data,s=Dr.from(a.headers).normalize(),h=a.responseType;function k(){a.cancelToken&&a.cancelToken.unsubscribe(o),a.signal&&a.signal.removeEventListener("abort",o)}$.isFormData(u)&&(jt.isStandardBrowserEnv||jt.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);var S=new XMLHttpRequest;if(a.auth){var oe=a.auth.username||"",ye=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";s.set("Authorization","Basic "+btoa(oe+":"+ye))}var Qe=ja(a.baseURL,a.url);function ln(){if(S){var En=Dr.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders());(function(Nn,Jt,Kt){var mn=Kt.config.validateStatus;Kt.status&&mn&&!mn(Kt.status)?Jt(new qe("Request failed with status code "+Kt.status,[qe.ERR_BAD_REQUEST,qe.ERR_BAD_RESPONSE][Math.floor(Kt.status/100)-4],Kt.config,Kt.request,Kt)):Nn(Kt)})(function(Nn){i(Nn),k()},function(Nn){d(Nn),k()},{data:h&&h!=="text"&&h!=="json"?S.response:S.responseText,status:S.status,statusText:S.statusText,headers:En,config:a,request:S}),S=null}}if(S.open(a.method.toUpperCase(),Wn(Qe,a.params,a.paramsSerializer),!0),S.timeout=a.timeout,"onloadend"in S?S.onloadend=ln:S.onreadystatechange=function(){S&&S.readyState===4&&(S.status!==0||S.responseURL&&S.responseURL.indexOf("file:")===0)&&setTimeout(ln)},S.onabort=function(){S&&(d(new qe("Request aborted",qe.ECONNABORTED,a,S)),S=null)},S.onerror=function(){d(new qe("Network Error",qe.ERR_NETWORK,a,S)),S=null},S.ontimeout=function(){var En=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",Nn=a.transitional||_t;a.timeoutErrorMessage&&(En=a.timeoutErrorMessage),d(new qe(En,Nn.clarifyTimeoutError?qe.ETIMEDOUT:qe.ECONNABORTED,a,S)),S=null},jt.isStandardBrowserEnv){var bn=(a.withCredentials||Ja(Qe))&&a.xsrfCookieName&&$a.read(a.xsrfCookieName);bn&&s.set(a.xsrfHeaderName,bn)}u===void 0&&s.setContentType(null),"setRequestHeader"in S&&$.forEach(s.toJSON(),function(En,Nn){S.setRequestHeader(Nn,En)}),$.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),h&&h!=="json"&&(S.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&S.addEventListener("progress",ga(a.onDownloadProgress,!0)),typeof a.onUploadProgress=="function"&&S.upload&&S.upload.addEventListener("progress",ga(a.onUploadProgress)),(a.cancelToken||a.signal)&&(o=function(En){S&&(d(!En||En.type?new tr(null,a,S):En),S.abort(),S=null)},a.cancelToken&&a.cancelToken.subscribe(o),a.signal&&(a.signal.aborted?o():a.signal.addEventListener("abort",o)));var Ye,ze=(Ye=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Qe))&&Ye[1]||"";ze&&jt.protocols.indexOf(ze)===-1?d(new qe("Unsupported protocol "+ze+":",qe.ERR_BAD_REQUEST,a)):S.send(u||null)})}};$.forEach(da,function(a,i){if(a){try{Object.defineProperty(a,"name",{value:i})}catch(d){}Object.defineProperty(a,"adapterName",{value:i})}});function qr(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new tr(null,a)}function Mr(a){return qr(a),a.headers=Dr.from(a.headers),a.data=ir.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),function(i){for(var d,o,u=(i=$.isArray(i)?i:[i]).length,s=0;s<u&&(d=i[s],!(o=$.isString(d)?da[d.toLowerCase()]:d));s++);if(!o)throw o===!1?new qe("Adapter ".concat(d," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error($.hasOwnProp(da,d)?"Adapter '".concat(d,"' is not available in the build"):"Unknown adapter '".concat(d,"'"));if(!$.isFunction(o))throw new TypeError("adapter is not a function");return o}(a.adapter||$r.adapter)(a).then(function(i){return qr(a),i.data=ir.call(a,a.transformResponse,i),i.headers=Dr.from(i.headers),i},function(i){return ca(i)||(qr(a),i&&i.response&&(i.response.data=ir.call(a,a.transformResponse,i.response),i.response.headers=Dr.from(i.response.headers))),Promise.reject(i)})}var Ua=function(a){return a instanceof Dr?a.toJSON():a};function yr(a,i){i=i||{};var d={};function o(oe,ye,Qe){return $.isPlainObject(oe)&&$.isPlainObject(ye)?$.merge.call({caseless:Qe},oe,ye):$.isPlainObject(ye)?$.merge({},ye):$.isArray(ye)?ye.slice():ye}function u(oe,ye,Qe){return $.isUndefined(ye)?$.isUndefined(oe)?void 0:o(void 0,oe,Qe):o(oe,ye,Qe)}function s(oe,ye){if(!$.isUndefined(ye))return o(void 0,ye)}function h(oe,ye){return $.isUndefined(ye)?$.isUndefined(oe)?void 0:o(void 0,oe):o(void 0,ye)}function k(oe,ye,Qe){return Qe in i?o(oe,ye):Qe in a?o(void 0,oe):void 0}var S={url:s,method:s,data:s,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:k,headers:function(oe,ye){return u(Ua(oe),Ua(ye),!0)}};return $.forEach(Object.keys(a).concat(Object.keys(i)),function(oe){var ye=S[oe]||u,Qe=ye(a[oe],i[oe],oe);$.isUndefined(Qe)&&ye!==k||(d[oe]=Qe)}),d}function pa(a){return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},pa(a)}var La={};["object","boolean","number","function","string","symbol"].forEach(function(a,i){La[a]=function(d){return pa(d)===a||"a"+(i<1?"n ":" ")+a}});var Fa={};La.transitional=function(a,i,d){function o(u,s){return"[Axios v1.2.3] Transitional option '"+u+"'"+s+(d?". "+d:"")}return function(u,s,h){if(a===!1)throw new qe(o(s," has been removed"+(i?" in "+i:"")),qe.ERR_DEPRECATED);return i&&!Fa[s]&&(Fa[s]=!0,console.warn(o(s," has been deprecated since v"+i+" and will be removed in the near future"))),!a||a(u,s,h)}};const va={assertOptions:function(a,i,d){if(pa(a)!=="object")throw new qe("options must be an object",qe.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(a),u=o.length;u-- >0;){var s=o[u],h=i[s];if(h){var k=a[s],S=k===void 0||h(k,s,a);if(S!==!0)throw new qe("option "+s+" must be "+S,qe.ERR_BAD_OPTION_VALUE)}else if(d!==!0)throw new qe("Unknown option "+s,qe.ERR_BAD_OPTION)}},validators:La};function xr(a){return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},xr(a)}function no(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(xr(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(xr(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),xr(u)==="symbol"?u:String(u)),o)}var u}var Er=va.validators,Zr=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.defaults=o,this.interceptors={request:new Bt,response:new Bt}}var i,d;return i=a,(d=[{key:"request",value:function(o,u){typeof o=="string"?(u=u||{}).url=o:u=o||{};var s,h=u=yr(this.defaults,u),k=h.transitional,S=h.paramsSerializer,oe=h.headers;k!==void 0&&va.assertOptions(k,{silentJSONParsing:Er.transitional(Er.boolean),forcedJSONParsing:Er.transitional(Er.boolean),clarifyTimeoutError:Er.transitional(Er.boolean)},!1),S!==void 0&&va.assertOptions(S,{encode:Er.function,serialize:Er.function},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase(),(s=oe&&$.merge(oe.common,oe[u.method]))&&$.forEach(["delete","get","head","post","put","patch","common"],function(mn){delete oe[mn]}),u.headers=Dr.concat(s,oe);var ye=[],Qe=!0;this.interceptors.request.forEach(function(mn){typeof mn.runWhen=="function"&&mn.runWhen(u)===!1||(Qe=Qe&&mn.synchronous,ye.unshift(mn.fulfilled,mn.rejected))});var ln,bn=[];this.interceptors.response.forEach(function(mn){bn.push(mn.fulfilled,mn.rejected)});var Ye,ze=0;if(!Qe){var En=[Mr.bind(this),void 0];for(En.unshift.apply(En,ye),En.push.apply(En,bn),Ye=En.length,ln=Promise.resolve(u);ze<Ye;)ln=ln.then(En[ze++],En[ze++]);return ln}Ye=ye.length;var Nn=u;for(ze=0;ze<Ye;){var Jt=ye[ze++],Kt=ye[ze++];try{Nn=Jt(Nn)}catch(mn){Kt.call(this,mn);break}}try{ln=Mr.call(this,Nn)}catch(mn){return Promise.reject(mn)}for(ze=0,Ye=bn.length;ze<Ye;)ln=ln.then(bn[ze++],bn[ze++]);return ln}},{key:"getUri",value:function(o){return Wn(ja((o=yr(this.defaults,o)).baseURL,o.url),o.params,o.paramsSerializer)}}])&&no(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();$.forEach(["delete","get","head","options"],function(a){Zr.prototype[a]=function(i,d){return this.request(yr(d||{},{method:a,url:i,data:(d||{}).data}))}}),$.forEach(["post","put","patch"],function(a){function i(d){return function(o,u,s){return this.request(yr(s||{},{method:a,headers:d?{"Content-Type":"multipart/form-data"}:{},url:o,data:u}))}}Zr.prototype[a]=i(),Zr.prototype[a+"Form"]=i(!0)});const zr=Zr;function Ir(a){return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ir(a)}function Oa(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Ir(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Ir(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Ir(u)==="symbol"?u:String(u)),o)}var u}var xa=function(){function a(u){if(function(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")}(this,a),typeof u!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(k){s=k});var h=this;this.promise.then(function(k){if(h._listeners){for(var S=h._listeners.length;S-- >0;)h._listeners[S](k);h._listeners=null}}),this.promise.then=function(k){var S,oe=new Promise(function(ye){h.subscribe(ye),S=ye}).then(k);return oe.cancel=function(){h.unsubscribe(S)},oe},u(function(k,S,oe){h.reason||(h.reason=new tr(k,S,oe),s(h.reason))})}var i,d,o;return i=a,d=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(u){this.reason?u(this.reason):this._listeners?this._listeners.push(u):this._listeners=[u]}},{key:"unsubscribe",value:function(u){if(this._listeners){var s=this._listeners.indexOf(u);s!==-1&&this._listeners.splice(s,1)}}}],o=[{key:"source",value:function(){var u;return{token:new a(function(s){u=s}),cancel:u}}}],d&&Oa(i.prototype,d),o&&Oa(i,o),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Ra=xa;function Pa(a,i){(i==null||i>a.length)&&(i=a.length);for(var d=0,o=new Array(i);d<i;d++)o[d]=a[d];return o}var Lr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lr).forEach(function(a){var i,d,o=(d=2,function(h){if(Array.isArray(h))return h}(i=a)||function(h,k){var S=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(S!=null){var oe,ye,Qe,ln,bn=[],Ye=!0,ze=!1;try{if(Qe=(S=S.call(h)).next,k===0){if(Object(S)!==S)return;Ye=!1}else for(;!(Ye=(oe=Qe.call(S)).done)&&(bn.push(oe.value),bn.length!==k);Ye=!0);}catch(En){ze=!0,ye=En}finally{try{if(!Ye&&S.return!=null&&(ln=S.return(),Object(ln)!==ln))return}finally{if(ze)throw ye}}return bn}}(i,d)||function(h,k){if(h){if(typeof h=="string")return Pa(h,k);var S=Object.prototype.toString.call(h).slice(8,-1);return S==="Object"&&h.constructor&&(S=h.constructor.name),S==="Map"||S==="Set"?Array.from(h):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?Pa(h,k):void 0}}(i,d)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),u=o[0],s=o[1];Lr[s]=u});const Ea=Lr;var Lt=function a(i){var d=new zr(i),o=Ge(zr.prototype.request,d);return $.extend(o,zr.prototype,d,{allOwnKeys:!0}),$.extend(o,d,null,{allOwnKeys:!0}),o.create=function(u){return a(yr(i,u))},o}($r);Lt.Axios=zr,Lt.CanceledError=tr,Lt.CancelToken=Ra,Lt.isCancel=ca,Lt.VERSION="1.2.3",Lt.toFormData=He,Lt.AxiosError=qe,Lt.Cancel=Lt.CanceledError,Lt.all=function(a){return Promise.all(a)},Lt.spread=function(a){return function(i){return a.apply(null,i)}},Lt.isAxiosError=function(a){return $.isObject(a)&&a.isAxiosError===!0},Lt.mergeConfig=yr,Lt.AxiosHeaders=Dr,Lt.formToJSON=function(a){return mr($.isHTMLForm(a)?new FormData(a):a)},Lt.HttpStatusCode=Ea,Lt.default=Lt;const Wr=Lt,Tt={send:function(a){Wr.post(a.url,a.data).then(function(i){var d=i.data;d&&d.code===0?a.success&&a.success(d):a.error&&a.error(d&&d.msg)}).catch(function(i){console.error(i),a.error&&a.error()})},read:function(a){Wr.get(a.url).then(function(i){var d=i.data;d&&d.code===0?a.success&&a.success(d.data.map(function(o){return{time:o[0],type:o[1],color:o[2],author:o[3],text:o[4]}})):a.error&&a.error(d&&d.msg)}).catch(function(i){console.error(i),a.error&&a.error()})}};function Yt(a){return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Yt(a)}function ea(a){var i=this;this.lang=a,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(d){return d=d.toLowerCase(),Ca[i.lang]&&Ca[i.lang][d]?Ca[i.lang][d]:Ca[i.fallbackLang]&&Ca[i.fallbackLang][d]?Ca[i.fallbackLang][d]:to[d]?to[d]:d}}var to={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Ca={en:to,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},Do=R(730),Io=R.n(Do),qa=R(74),Lo=R.n(qa),Fo=R(437),Cr=R.n(Fo),t=R(644),c=R.n(t),p=R(324),b=R.n(p),y=R(574),v=R.n(y),I=R(300),L=R.n(I),K=R(934),ce=R.n(K),Pe=R(428),$e=R.n(Pe),un=R(807),rn=R.n(un),De=R(338),At=R.n(De),rt=R(254),pt=R.n(rt),Mn=R(965),Yn=R.n(Mn),qn=R(113),Jn=R.n(qn),ut=R(251),Qt=R.n(ut),zt=R(410),na=R.n(zt),lr=R(182),ro=R.n(lr),go=R(193),ta=R.n(go);const dr={play:Io(),pause:Lo(),volumeUp:Cr(),volumeDown:c(),volumeOff:b(),full:v(),fullWeb:L(),setting:ce(),right:$e(),comment:rn(),commentOff:At(),send:pt(),pallette:Yn(),camera:Jn(),subtitle:na(),loading:ro(),airplay:Qt(),chromecast:ta()};var ra=R(916),Rt=R.n(ra);function Yr(a){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Yr(a)}function vo(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Yr(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Yr(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Yr(u)==="symbol"?u:String(u)),o)}var u}var Oo=function(){function a(u){(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=u.container,this.options=u.options,this.index=u.index,this.tran=u.tran,this.init()}var i,d,o;return i=a,o=[{key:"NewNotice",value:function(u,s,h){var k=document.createElement("div");return k.classList.add("dplayer-notice"),k.style.opacity=s,k.innerText=u,h&&(k.id="dplayer-notice-".concat(h)),k}}],(d=[{key:"init",value:function(){this.container.innerHTML=Rt()({options:this.options,index:this.index,tran:this.tran,icons:dr,mobile:ge.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!ge.isSafari||ge.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&vo(i.prototype,d),o&&vo(i,o),Object.defineProperty(i,"prototype",{writable:!1}),a}();const xo=Oo;function Za(a){return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Za(a)}function ri(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Za(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Za(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Za(u)==="symbol"?u:String(u)),o)}var u}var qo=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=o,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var i,d;return i=a,d=[{key:"load",value:function(){var o,u=this;o=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var s=(this.options.api.addition||[]).slice(0);s.push(o),this.events&&this.events.trigger("danmaku_load_start",s),this._readAllEndpoints(s,function(h){u.dan=[].concat.apply([],h).sort(function(k,S){return k.time-S.time}),window.requestAnimationFrame(function(){u.frame()}),u.options.callback(),u.events&&u.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(o){this.options.api=o,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(o,u){for(var s=this,h=[],k=0,S=function(ye){s.options.apiBackend.read({url:o[ye],success:function(Qe){h[ye]=Qe,++k===o.length&&u(h)},error:function(Qe){s.options.error(Qe||s.options.tran("danmaku-failed")),h[ye]=[],++k===o.length&&u(h)}})},oe=0;oe<o.length;++oe)S(oe)}},{key:"send",value:function(o,u){var s=this,h={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:o.text,color:o.color,type:o.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:h,success:u,error:function(S){s.options.error(S||s.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,h),this.danIndex++;var k={text:this.htmlEncode(h.text),color:h.color,type:h.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(k),this.events&&this.events.trigger("danmaku_send",h)}},{key:"frame",value:function(){var o=this;if(this.dan.length&&!this.paused&&this.showing){for(var u=this.dan[this.danIndex],s=[];u&&this.options.time()>parseFloat(u.time);)s.push(u),u=this.dan[++this.danIndex];this.draw(s)}window.requestAnimationFrame(function(){o.frame()})}},{key:"opacity",value:function(o){if(o!==void 0){for(var u=this.container.getElementsByClassName("dplayer-danmaku-item"),s=0;s<u.length;s++)u[s].style.opacity=o;this._opacity=o,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(o){var u=this;if(this.showing){var s=this.options.height,h=this.container.offsetWidth,k=this.container.offsetHeight,S=parseInt(k/s),oe=function(ze){var En=ze.offsetWidth||parseInt(ze.style.width),Nn=ze.getBoundingClientRect().right||u.container.getBoundingClientRect().right+En;return u.container.getBoundingClientRect().right-Nn},ye=function(ze){return(h+ze)/5},Qe=function(ze,En,Nn){for(var Jt=h/ye(Nn),Kt=function(wt){var Zn=u.danTunnel[En][wt+""];if(!Zn||!Zn.length)return u.danTunnel[En][wt+""]=[ze],ze.addEventListener("animationend",function(){u.danTunnel[En][wt+""].splice(0,1)}),{v:wt%S};if(En!=="right")return"continue";for(var yt=0;yt<Zn.length;yt++){var er=oe(Zn[yt])-10;if(er<=h-Jt*ye(parseInt(Zn[yt].style.width))||er<=0)break;if(yt===Zn.length-1)return u.danTunnel[En][wt+""].push(ze),ze.addEventListener("animationend",function(){u.danTunnel[En][wt+""].splice(0,1)}),{v:wt%S}}},mn=0;u.unlimited||mn<S;mn++){var nt=Kt(mn);if(nt!=="continue"&&Za(nt)==="object")return nt.v}return-1};Object.prototype.toString.call(o)!=="[object Array]"&&(o=[o]);for(var ln=document.createDocumentFragment(),bn=function(){o[Ye].type=ge.number2Type(o[Ye].type),o[Ye].color||(o[Ye].color=16777215);var ze=document.createElement("div");ze.classList.add("dplayer-danmaku-item"),ze.classList.add("dplayer-danmaku-".concat(o[Ye].type)),o[Ye].border?ze.innerHTML='<span style="border:'.concat(o[Ye].border,'">').concat(o[Ye].text,"</span>"):ze.innerHTML=o[Ye].text,ze.style.opacity=u._opacity,ze.style.color=ge.number2Color(o[Ye].color),ze.addEventListener("animationend",function(){u.container.removeChild(ze)});var En,Nn=u._measure(o[Ye].text);switch(o[Ye].type){case"right":(En=Qe(ze,o[Ye].type,Nn))>=0&&(ze.style.width=Nn+1+"px",ze.style.top=s*En+"px",ze.style.transform="translateX(-".concat(h,"px)"));break;case"top":(En=Qe(ze,o[Ye].type))>=0&&(ze.style.top=s*En+"px");break;case"bottom":(En=Qe(ze,o[Ye].type))>=0&&(ze.style.bottom=s*En+"px");break;default:console.error("Can't handled danmaku type: ".concat(o[Ye].type))}En>=0&&(ze.classList.add("dplayer-danmaku-move"),ze.style.animationDuration=u._danAnimation(o[Ye].type),ln.appendChild(ze))},Ye=0;Ye<o.length;Ye++)bn();return this.container.appendChild(ln),ln}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(o){if(!this.context){var u=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=u.getPropertyValue("font")}return this.context.measureText(o).width}},{key:"seek",value:function(){this.clear();for(var o=0;o<this.dan.length;o++){if(this.dan[o].time>=this.options.time()){this.danIndex=o;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var o=this.container.offsetWidth,u=this.container.getElementsByClassName("dplayer-danmaku-item"),s=0;s<u.length;s++)u[s].style.transform="translateX(-".concat(o,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(o){this.unlimited=o}},{key:"speed",value:function(o){this.options.api.speedRate=o}},{key:"_danAnimation",value:function(o){var u=this.options.api.speedRate||1,s=!!this.player.fullScreen.isFullScreen();return{top:"".concat((s?6:4)/u,"s"),right:"".concat((s?8:5)/u,"s"),bottom:"".concat((s?6:4)/u,"s")}[o]}}],d&&ri(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Zo=qo;function Vr(a){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Vr(a)}function Wa(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Vr(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Vr(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Vr(u)==="symbol"?u:String(u)),o)}var u}const ai=function(){function a(){(function(o,u){if(!(o instanceof u))throw new TypeError("Cannot call a class as a function")})(this,a),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var i,d;return i=a,(d=[{key:"on",value:function(o,u){this.type(o)&&typeof u=="function"&&(this.events[o]||(this.events[o]=[]),this.events[o].push(u))}},{key:"trigger",value:function(o,u){if(this.events[o]&&this.events[o].length)for(var s=0;s<this.events[o].length;s++)this.events[o][s](u)}},{key:"type",value:function(o){return this.playerEvents.indexOf(o)!==-1?"player":this.videoEvents.indexOf(o)!==-1?"video":(console.error("Unknown event name: ".concat(o)),null)}}])&&Wa(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();function Ya(a){return Ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ya(a)}function Wo(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Ya(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Ya(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Ya(u)==="symbol"?u:String(u)),o)}var u}var Ro=function(){function a(o){var u=this;(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){u.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){u.player.resize(),ge.setScrollPosition(u.lastScrollPosition)}),this.fullscreenchange=function(){u.player.resize(),u.isFullScreen("browser")?u.player.events.trigger("fullscreen"):(ge.setScrollPosition(u.lastScrollPosition),u.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var s=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;s&&s!==u.player.container||(u.player.resize(),s?u.player.events.trigger("fullscreen"):(ge.setScrollPosition(u.lastScrollPosition),u.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var i,d;return i=a,d=[{key:"isFullScreen",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(o){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",u=o==="browser"?"web":"browser",s=this.isFullScreen(u);switch(s||(this.lastScrollPosition=ge.getScrollPosition()),o){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}s&&this.cancel(u)}},{key:"cancel",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(o){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(o)?this.cancel(o):this.request(o)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],d&&Wo(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const ao=Ro;function wa(a){return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},wa(a)}function Yo(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(wa(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(wa(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),wa(u)==="symbol"?u:String(u)),o)}var u}var Po=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:o.options.hasOwnProperty("volume")?o.options.volume:.7,unlimited:(o.options.danmaku&&o.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var i,d;return i=a,(d=[{key:"init",value:function(){for(var o in this.storageName){var u=this.storageName[o];this.data[o]=parseFloat(ge.storage.get(u)||this.default[o])}}},{key:"get",value:function(o){return this.data[o]}},{key:"set",value:function(o,u){this.data[o]=u,ge.storage.set(this.storageName[o],u)}}])&&Yo(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Eo=Po;function oo(a){return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},oo(a)}function Vo(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(oo(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(oo(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),oo(u)==="symbol"?u:String(u)),o)}var u}var wr=function(){function a(o,u,s,h){(function(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o,this.video=u,this.options=s,this.events=h,this.init()}var i,d;return i=a,d=[{key:"init",value:function(){var o=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var u=this.video.textTracks[0];u.oncuechange=function(){var s=u.activeCues[u.activeCues.length-1];if(o.container.innerHTML="",s){var h=document.createElement("div");h.appendChild(s.getCueAsHTML());var k=h.innerHTML.split(/\r?\n/).map(function(S){return"<p>".concat(S,"</p>")}).join("");o.container.innerHTML=k}o.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],d&&Vo(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Co=wr;function fa(a){return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},fa(a)}function Ko(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(fa(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(fa(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),fa(u)==="symbol"?u:String(u)),o)}var u}var wo=function(){function a(o){var u=this;(function(S,oe){if(!(S instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){u.adaptiveHeight(),u.show()});for(var s=this.player.template.subtitlesItem.length-1,h=function(S){u.player.template.subtitlesItem[S].addEventListener("click",function(){u.hide(),u.player.options.subtitle.index!==S&&(u.player.template.subtitle.innerHTML="<p></p>",u.player.template.subtrack.src=u.player.template.subtitlesItem[S].dataset.subtitle,u.player.options.subtitle.index=S,u.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&u.subContainerShow())})},k=0;k<s;k++)h(k);this.player.template.subtitlesItem[s].addEventListener("click",function(){u.hide(),u.player.options.subtitle.index!==s&&(u.player.template.subtitle.innerHTML="<p></p>",u.player.template.subtrack.src="",u.player.options.subtitle.index=s,u.subContainerHide())})}var i,d;return i=a,(d=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var o=30*this.player.template.subtitlesItem.length+14,u=.8*this.player.template.videoWrap.offsetHeight;o>=u-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=u-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=u-50+"px")}}])&&Ko(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const oi=wo;function io(a){return io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},io(a)}function ii(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(io(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(io(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),io(u)==="symbol"?u:String(u)),o)}var u}var Xo=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.elements={},this.elements.volume=o.volumeBar,this.elements.played=o.playedBar,this.elements.loaded=o.loadedBar,this.elements.danmaku=o.danmakuOpacityBar}var i,d;return i=a,(d=[{key:"set",value:function(o,u,s){u=Math.max(u,0),u=Math.min(u,1),this.elements[o].style[s]=100*u+"%"}},{key:"get",value:function(o){return parseFloat(this.elements[o].style.width)/100}}])&&ii(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const li=Xo;function x(a){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},x(a)}function N(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(x(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(x(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),x(u)==="symbol"?u:String(u)),o)}var u}var q=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){window.setTimeout(u,1e3/60)},this.types=["loading","info","fps"],this.init()}var i,d;return i=a,(d=[{key:"init",value:function(){var o=this;this.types.map(function(u){return u!=="fps"&&o["init".concat(u,"Checker")](),u})}},{key:"initloadingChecker",value:function(){var o=this,u=0,s=0,h=!1;this.loadingChecker=setInterval(function(){o.enableloadingChecker&&(s=o.player.video.currentTime,h||s!==u||o.player.video.paused||(o.player.container.classList.add("dplayer-loading"),h=!0),h&&s>u&&!o.player.video.paused&&(o.player.container.classList.remove("dplayer-loading"),h=!1),u=s)},100)}},{key:"initfpsChecker",value:function(){var o=this;window.requestAnimationFrame(function(){if(o.enablefpsChecker)if(o.initfpsChecker(),o.fpsStart){o.fpsIndex++;var u=new Date;u-o.fpsStart>1e3&&(o.player.infoPanel.fps(o.fpsIndex/(u-o.fpsStart)*1e3),o.fpsStart=new Date,o.fpsIndex=0)}else o.fpsStart=new Date,o.fpsIndex=0;else o.fpsStart=0,o.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var o=this;this.infoChecker=setInterval(function(){o.enableinfoChecker&&o.player.infoPanel.update()},1e3)}},{key:"enable",value:function(o){this["enable".concat(o,"Checker")]=!0,o==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(o){this["enable".concat(o,"Checker")]=!1}},{key:"destroy",value:function(){var o=this;this.types.map(function(u){return o["enable".concat(u,"Checker")]=!1,o["".concat(u,"Checker")]&&clearInterval(o["".concat(u,"Checker")]),u})}}])&&N(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Z=q;function fe(a){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},fe(a)}function pe(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(fe(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(fe(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),fe(u)==="symbol"?u:String(u)),o)}var u}const ke=function(){function a(o){var u=this;(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o,this.container.addEventListener("animationend",function(){u.container.classList.remove("dplayer-bezel-transition")})}var i,d;return i=a,(d=[{key:"switch",value:function(o){this.container.innerHTML=o,this.container.classList.add("dplayer-bezel-transition")}}])&&pe(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();function le(a){return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},le(a)}function pn(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(le(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(le(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),le(u)==="symbol"?u:String(u)),o)}var u}var sn=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o.container,this.barWidth=o.barWidth,this.container.style.backgroundImage="url('".concat(o.url,"')"),this.events=o.events}var i,d;return i=a,(d=[{key:"resize",value:function(o,u,s){this.container.style.width="".concat(o,"px"),this.container.style.height="".concat(u,"px"),this.container.style.top="".concat(2-u,"px"),this.barWidth=s}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(o){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(o/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(o-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&pn(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const hn=sn;function nn(a){return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},nn(a)}function kn(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(nn(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(nn(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),nn(u)==="symbol"?u:String(u)),o)}var u}var Sn,Ln=!0,Vn=!1,zn=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.autoHideTimer=0,ge.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),ge.isMobile||this.initVolumeButton()}var i,d;return i=a,(d=[{key:"initPlayButton",value:function(){var o=this;this.player.template.playButton.addEventListener("click",function(){o.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){o.player.toggle()}),ge.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){o.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){o.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){o.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){o.player.toggle()}))}},{key:"initHighlights",value:function(){var o=this;this.player.on("durationchange",function(){if(o.player.video.duration!==1&&o.player.video.duration!==1/0&&o.player.options.highlight){var u=o.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(u,0).forEach(function(k){o.player.template.playedBarWrap.removeChild(k)});for(var s=0;s<o.player.options.highlight.length;s++)if(o.player.options.highlight[s].text&&o.player.options.highlight[s].time){var h=document.createElement("div");h.classList.add("dplayer-highlight"),h.style.left=o.player.options.highlight[s].time/o.player.video.duration*100+"%",h.innerHTML='<span class="dplayer-highlight-text">'+o.player.options.highlight[s].text+"</span>",o.player.template.playedBarWrap.insertBefore(h,o.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var o=this;this.player.options.video.thumbnails&&(this.thumbnails=new hn({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){o.thumbnails.resize(160,o.player.video.videoHeight/o.player.video.videoWidth*160,o.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var o=this,u=function(h){var k=((h.clientX||h.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(o.player.template.playedBarWrap))/o.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),o.player.bar.set("played",k,"width"),o.player.template.ptime.innerHTML=ge.secondToTime(k*o.player.video.duration)},s=function h(k){document.removeEventListener(ge.nameMap.dragEnd,h),document.removeEventListener(ge.nameMap.dragMove,u);var S=((k.clientX||k.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(o.player.template.playedBarWrap))/o.player.template.playedBarWrap.clientWidth;S=Math.max(S,0),S=Math.min(S,1),o.player.bar.set("played",S,"width"),o.player.seek(o.player.bar.get("played")*o.player.video.duration),o.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(ge.nameMap.dragStart,function(){o.player.timer.disable("progress"),document.addEventListener(ge.nameMap.dragMove,u),document.addEventListener(ge.nameMap.dragEnd,s)}),this.player.template.playedBarWrap.addEventListener(ge.nameMap.dragMove,function(h){if(o.player.video.duration){var k=o.player.template.playedBarWrap.getBoundingClientRect().left,S=(h.clientX||h.changedTouches[0].clientX)-k;if(S<0||S>o.player.template.playedBarWrap.offsetWidth)return;var oe=o.player.video.duration*(S/o.player.template.playedBarWrap.offsetWidth);ge.isMobile&&o.thumbnails&&o.thumbnails.show(),o.thumbnails&&o.thumbnails.move(S),o.player.template.playedBarTime.style.left="".concat(S-(oe>=3600?25:20),"px"),o.player.template.playedBarTime.innerText=ge.secondToTime(oe),o.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(ge.nameMap.dragEnd,function(){ge.isMobile&&o.thumbnails&&o.thumbnails.hide()}),ge.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){o.player.video.duration&&(o.thumbnails&&o.thumbnails.show(),o.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){o.player.video.duration&&(o.thumbnails&&o.thumbnails.hide(),o.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var o=this;this.player.template.browserFullButton.addEventListener("click",function(){o.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){o.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var o=this,u=function(h){var k=h||window.event,S=((k.clientX||k.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(o.player.template.volumeBarWrap)-5.5)/35;o.player.volume(S)},s=function h(){document.removeEventListener(ge.nameMap.dragEnd,h),document.removeEventListener(ge.nameMap.dragMove,u),o.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(h){var k=h||window.event,S=((k.clientX||k.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(o.player.template.volumeBarWrap)-5.5)/35;o.player.volume(S)}),this.player.template.volumeBarWrapWrap.addEventListener(ge.nameMap.dragStart,function(){document.addEventListener(ge.nameMap.dragMove,u),document.addEventListener(ge.nameMap.dragEnd,s),o.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){o.player.video.muted?(o.player.video.muted=!1,o.player.switchVolumeIcon(),o.player.bar.set("volume",o.player.volume(),"width")):(o.player.video.muted=!0,o.player.template.volumeIcon.innerHTML=dr.volumeOff,o.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var o=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(u){u.target.classList.contains("dplayer-quality-item")&&o.player.switchQuality(u.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var o=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var u,s=document.createElement("canvas");s.width=o.player.video.videoWidth,s.height=o.player.video.videoHeight,s.getContext("2d").drawImage(o.player.video,0,0,s.width,s.height),s.toBlob(function(h){u=URL.createObjectURL(h);var k=document.createElement("a");k.href=u,k.download="DPlayer.png",k.style.display="none",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(u),o.player.events.trigger("screenshot",u)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(o){o.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var o=window.document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(o),window.__onGCastApiAvailable=function(u){if(u){var s=new(Sn=window.chrome.cast).SessionRequest(Sn.media.DEFAULT_MEDIA_RECEIVER_APP_ID),h=new Sn.ApiConfig(s,function(){},function(k){k===Sn.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",k)});Sn.initialize(h,function(){})}}}},{key:"initChromecastButton",value:function(){var o=this;if(this.player.options.chromecast){Ln&&(Ln=!1,this.initChromecast());var u=function(h,k){o.currentMedia=k},s=function(h){console.error("Error launching media",h)};this.player.template.chromecastButton.addEventListener("click",function(){Vn?(Vn=!1,o.currentMedia.stop(),o.session.stop(),o.initChromecast()):(Vn=!0,Sn.requestSession(function(h){var k,S,oe;o.session=h,k=o.player.options.video.url,S=new Sn.media.MediaInfo(k),oe=new Sn.media.LoadRequest(S),o.session?o.session.loadMedia(oe,u.bind(o,"loadMedia"),s).play():window.open(k)},function(h){h.code==="cancel"?o.session=void 0:console.error("Error selecting a cast device",h)}))})}}},{key:"initSubtitleButton",value:function(){var o=this;this.player.events.on("subtitle_show",function(){o.player.template.subtitleButton.dataset.balloon=o.player.tran("hide-subs"),o.player.template.subtitleButtonInner.style.opacity="",o.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){o.player.template.subtitleButton.dataset.balloon=o.player.tran("show-subs"),o.player.template.subtitleButtonInner.style.opacity="0.4",o.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){o.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var o=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!o.player.video.played.length||o.player.paused||o.disableAutoHide||o.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){ge.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&kn(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Fn=zn;function Kn(a){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Kn(a)}function P(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Kn(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Kn(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Kn(u)==="symbol"?u:String(u)),o)}var u}var ae=function(){function a(o){var u=this;(function(oe,ye){if(!(oe instanceof ye))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.settingButton.addEventListener("click",function(){u.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){u.player.template.loopToggle.checked=!u.player.template.loopToggle.checked,u.player.template.loopToggle.checked?u.loop=!0:u.loop=!1,u.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){u.player.template.showDanmakuToggle.checked=!u.player.template.showDanmakuToggle.checked,u.player.template.showDanmakuToggle.checked?(u.showDanmaku=!0,u.player.danmaku.show()):(u.showDanmaku=!1,u.player.danmaku.hide()),u.player.user.set("danmaku",u.showDanmaku?1:0),u.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){u.player.template.unlimitDanmakuToggle.checked=!u.player.template.unlimitDanmakuToggle.checked,u.player.template.unlimitDanmakuToggle.checked?(u.unlimitDanmaku=!0,u.player.danmaku.unlimit(!0)):(u.unlimitDanmaku=!1,u.player.danmaku.unlimit(!1)),u.player.user.set("unlimited",u.unlimitDanmaku?1:0),u.hide()}),this.player.template.speed.addEventListener("click",function(){u.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),u.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var s=function(oe){u.player.template.speedItem[oe].addEventListener("click",function(){u.player.speed(u.player.template.speedItem[oe].dataset.speed),u.hide()})},h=0;h<this.player.template.speedItem.length;h++)s(h);if(this.player.danmaku){this.player.on("danmaku_opacity",function(oe){u.player.bar.set("danmaku",oe,"width"),u.player.user.set("opacity",oe)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var k=function(oe){var ye=oe||window.event,Qe=((ye.clientX||ye.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(u.player.template.danmakuOpacityBarWrap))/130;Qe=Math.max(Qe,0),Qe=Math.min(Qe,1),u.player.danmaku.opacity(Qe)},S=function oe(){document.removeEventListener(ge.nameMap.dragEnd,oe),document.removeEventListener(ge.nameMap.dragMove,k),u.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(oe){var ye=oe||window.event,Qe=((ye.clientX||ye.changedTouches[0].clientX)-ge.getBoundingClientRectViewLeft(u.player.template.danmakuOpacityBarWrap))/130;Qe=Math.max(Qe,0),Qe=Math.min(Qe,1),u.player.danmaku.opacity(Qe)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(ge.nameMap.dragStart,function(){document.addEventListener(ge.nameMap.dragMove,k),document.addEventListener(ge.nameMap.dragEnd,S),u.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var i,d;return i=a,(d=[{key:"hide",value:function(){var o=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){o.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),o.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&P(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const M=ae;function je(a){return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},je(a)}function en(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(je(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(je(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),je(u)==="symbol"?u:String(u)),o)}var u}var yn=function(){function a(o){var u=this;(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.player.template.mask.addEventListener("click",function(){u.hide()}),this.player.template.commentButton.addEventListener("click",function(){u.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){u.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(u.player.template.commentColorSettingBox.querySelector("input:checked+span")){var s=u.player.template.commentColorSettingBox.querySelector("input:checked").value;u.player.template.commentSettingFill.style.fill=s,u.player.template.commentInput.style.color=s,u.player.template.commentSendFill.style.fill=s}}),this.player.template.commentInput.addEventListener("click",function(){u.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(s){(s||window.event).keyCode===13&&u.send()}),this.player.template.commentSendButton.addEventListener("click",function(){u.send()})}var i,d;return i=a,(d=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var o=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:ge.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){o.player.template.commentInput.value="",o.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&en(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const et=yn;function Rn(a){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Rn(a)}function Ut(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Rn(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Rn(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Rn(u)==="symbol"?u:String(u)),o)}var u}var Fr=function(){function a(o){(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var i,d;return i=a,(d=[{key:"doHotKey",value:function(o){if(this.player.focus){var u=document.activeElement.tagName.toUpperCase(),s=document.activeElement.getAttribute("contenteditable");if(u!=="INPUT"&&u!=="TEXTAREA"&&s!==""&&s!=="true"){var h,k=o||window.event;switch(k.keyCode){case 32:k.preventDefault(),this.player.toggle();break;case 37:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:k.preventDefault(),h=this.player.volume()+.1,this.player.volume(h);break;case 40:k.preventDefault(),h=this.player.volume()-.1,this.player.volume(h)}}}}},{key:"cancelFullScreen",value:function(o){(o||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Ut(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const $t=Fr;function Vt(a){return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Vt(a)}function br(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Vt(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Vt(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Vt(u)==="symbol"?u:String(u)),o)}var u}var Dt=function(){function a(o){var u=this;(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.player=o,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(s,h){u.player.options.contextmenu[h].click&&s.addEventListener("click",function(){u.player.options.contextmenu[h].click(u.player),u.hide()})}),this.contextmenuHandler=function(s){if(u.shown)u.hide();else{var h=s||window.event;h.preventDefault();var k=u.player.container.getBoundingClientRect();u.show(h.clientX-k.left,h.clientY-k.top),u.player.template.mask.addEventListener("click",function(){u.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var i,d;return i=a,(d=[{key:"show",value:function(o,u){this.player.template.menu.classList.add("dplayer-menu-show");var s=this.player.container.getBoundingClientRect();o+this.player.template.menu.offsetWidth>=s.width?(this.player.template.menu.style.right=s.width-o+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=o+"px",this.player.template.menu.style.right="initial"),u+this.player.template.menu.offsetHeight>=s.height?(this.player.template.menu.style.bottom=s.height-u+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=u+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&br(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const mt=Dt;function Xt(a){return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Xt(a)}function at(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,(u=function(s,h){if(Xt(s)!=="object"||s===null)return s;var k=s[Symbol.toPrimitive];if(k!==void 0){var S=k.call(s,"string");if(Xt(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o.key),Xt(u)==="symbol"?u:String(u)),o)}var u}var aa=function(){function a(o){var u=this;(function(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")})(this,a),this.container=o.template.infoPanel,this.template=o.template,this.video=o.video,this.player=o,this.template.infoPanelClose.addEventListener("click",function(){u.hide()})}var i,d;return i=a,(d=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(o){this.template.infoFPS.innerHTML="".concat(o.toFixed(1))}}])&&at(i.prototype,d),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Or=aa;var Ar=R(568),Tn=R.n(Ar);function ft(a){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ft(a)}function Gt(a,i){var d=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),d.push.apply(d,o)}return d}function qt(a,i,d){return(i=Nr(i))in a?Object.defineProperty(a,i,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[i]=d,a}function rr(a,i){for(var d=0;d<i.length;d++){var o=i[d];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,Nr(o.key),o)}}function Nr(a){var i=function(d,o){if(ft(d)!=="object"||d===null)return d;var u=d[Symbol.toPrimitive];if(u!==void 0){var s=u.call(d,"string");if(ft(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(d)}(a);return ft(i)==="symbol"?i:String(i)}var Ma=0,pr=[],ka=function(){function a(u){var s=this;(function(h,k){if(!(h instanceof k))throw new TypeError("Cannot call a class as a function")})(this,a),this.options=function(h){var k={container:h.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Tt,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var S in k)k.hasOwnProperty(S)&&!h.hasOwnProperty(S)&&(h[S]=k[S]);return h.video&&!h.video.type&&(h.video.type="auto"),Yt(h.danmaku)==="object"&&h.danmaku&&!h.danmaku.user&&(h.danmaku.user="DIYgod"),h.subtitle&&(!h.subtitle.type&&(h.subtitle.type="webvtt"),!h.subtitle.fontSize&&(h.subtitle.fontSize="20px"),!h.subtitle.bottom&&(h.subtitle.bottom="40px"),!h.subtitle.color&&(h.subtitle.color="#fff")),h.video.quality&&(h.video.url=h.video.quality[h.video.defaultQuality].url),h.lang&&(h.lang=h.lang.toLowerCase()),h.contextmenu=h.contextmenu.concat([{key:"video-info",click:function(oe){oe.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),h}(function(h){for(var k=1;k<arguments.length;k++){var S=arguments[k]!=null?arguments[k]:{};k%2?Gt(Object(S),!0).forEach(function(oe){qt(h,oe,S[oe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(S)):Gt(Object(S)).forEach(function(oe){Object.defineProperty(h,oe,Object.getOwnPropertyDescriptor(S,oe))})}return h}({preload:u.video.type==="webtorrent"?"none":"metadata"},u)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new ea(this.options.lang).tran,this.events=new ai,this.user=new Eo(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),ge.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===s.options.subtitle.defaultSubtitle||h.name===s.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(h){return h.lang===s.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new xo({container:this.container,options:this.options,index:Ma,tran:this.tran}),this.video=this.template.video,this.bar=new li(this.template),this.bezel=new ke(this.template.bezel),this.fullScreen=new ao(this),this.controller=new Fn(this),this.options.danmaku&&(this.danmaku=new Zo({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){s.template.danmakuLoading.style.display="none",s.options.autoplay&&s.play()},0)},error:function(h){s.notice(h)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return s.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(h){return s.tran(h)}}),this.comment=new et(this)),this.setting=new M(this),this.plugins={},this.docClickFun=function(){s.focus=!1},this.containerClickFun=function(){s.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Z(this),this.hotkey=new $t(this),this.contextmenu=new mt(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Or(this),!this.danmaku&&this.options.autoplay&&this.play(),Ma++,pr.push(this)}var i,d,o;return i=a,d=[{key:"seek",value:function(u){u=Math.max(u,0),this.video.duration&&(u=Math.min(u,this.video.duration)),this.video.currentTime<u?this.notice("".concat(this.tran("ff").replace("%s",(u-this.video.currentTime).toFixed(0)))):this.video.currentTime>u&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-u).toFixed(0)))),this.video.currentTime=u,this.danmaku&&this.danmaku.seek(),this.bar.set("played",u/this.video.duration,"width"),this.template.ptime.innerHTML=ge.secondToTime(u)}},{key:"play",value:function(u){var s=this;if(this.paused=!1,this.video.paused&&!ge.isMobile&&this.bezel.switch(dr.play),this.template.playButton.innerHTML=dr.pause,this.template.mobilePlayButton.innerHTML=dr.pause,u||Be.resolve(this.video.play()).catch(function(){s.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var h=0;h<pr.length;h++)this!==pr[h]&&pr[h].pause()}},{key:"pause",value:function(u){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||ge.isMobile||this.bezel.switch(dr.pause),this.template.playButton.innerHTML=dr.play,this.template.mobilePlayButton.innerHTML=dr.play,u||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=dr.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=dr.volumeDown:this.template.volumeIcon.innerHTML=dr.volumeOff}},{key:"volume",value:function(u,s,h){if(u=parseFloat(u),!isNaN(u)){u=Math.max(u,0),u=Math.min(u,1),this.bar.set("volume",u,"width");var k="".concat((100*u).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=k,s||this.user.set("volume",u),h||this.notice("".concat(this.tran("volume")," ").concat((100*u).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=u,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(u,s){this.events.on(u,s)}},{key:"switchVideo",value:function(u,s){this.pause(),this.video.poster=u.pic?u.pic:"",this.video.src=u.url,this.initMSE(this.video,u.type||"auto"),s&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:s.id,address:s.api,token:s.token,maximum:s.maximum,addition:s.addition,user:s.user}))}},{key:"initMSE",value:function(u,s){var h=this;if(this.type=s,this.options.video.customType&&this.options.video.customType[s])Object.prototype.toString.call(this.options.video.customType[s])==="[object Function]"?this.options.video.customType[s](this.video,this):console.error("Illegal customType: ".concat(s));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(u.src)?this.type="hls":/.flv(#|\?|$)/i.exec(u.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(u.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(u.canPlayType("application/x-mpegURL")||u.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var k=this.options.pluginOptions.hls,S=new window.Hls(k);this.plugins.hls=S,S.loadSource(u.src),S.attachMedia(u),this.events.on("destroy",function(){S.destroy(),delete h.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var oe=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:u.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=oe,oe.attachMediaElement(u),oe.load(),this.events.on("destroy",function(){oe.unload(),oe.detachMediaElement(),oe.destroy(),delete h.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var ye=window.dashjs.MediaPlayer().create().initialize(u,u.src,!1),Qe=this.options.pluginOptions.dash;ye.updateSettings(Qe),this.plugins.dash=ye,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete h.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var ln=this.options.pluginOptions.webtorrent,bn=new window.WebTorrent(ln);this.plugins.webtorrent=bn;var Ye=u.src;u.src="",u.preload="metadata",u.addEventListener("durationchange",function(){return h.container.classList.remove("dplayer-loading")},{once:!0}),bn.add(Ye,function(ze){ze.files.find(function(En){return En.name.endsWith(".mp4")}).renderTo(h.video,{autoplay:h.options.autoplay,controls:!1})}),this.events.on("destroy",function(){bn.remove(Ye),bn.destroy(),delete h.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(u,s){var h=this;this.initMSE(u,s),this.on("durationchange",function(){u.duration!==1&&u.duration!==1/0&&(h.template.dtime.innerHTML=ge.secondToTime(u.duration))}),this.on("progress",function(){var oe=u.buffered.length?u.buffered.end(u.buffered.length-1)/u.duration:0;h.bar.set("loaded",oe,"width")}),this.on("error",function(){h.video.error&&h.tran&&h.notice&&h.type!=="webtorrent"&&h.notice(h.tran("video-failed"))}),this.on("ended",function(){h.bar.set("played",1,"width"),h.setting.loop?(h.seek(0),h.play()):h.pause(),h.danmaku&&(h.danmaku.danIndex=0)}),this.on("play",function(){h.paused&&h.play(!0)}),this.on("pause",function(){h.paused||h.pause(!0)}),this.on("timeupdate",function(){h.bar.set("played",h.video.currentTime/h.video.duration,"width");var oe=ge.secondToTime(h.video.currentTime);h.template.ptime.innerHTML!==oe&&(h.template.ptime.innerHTML=oe)});for(var k=function(oe){u.addEventListener(h.events.videoEvents[oe],function(ye){h.events.trigger(h.events.videoEvents[oe],ye)})},S=0;S<this.events.videoEvents.length;S++)k(S);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Co(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new oi(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(u){var s=this;if(u=typeof u=="string"?parseInt(u):u,this.qualityIndex!==u&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=u,this.switchingQuality=!0,this.quality=this.options.video.quality[u],this.template.qualityButton.innerHTML=this.quality.name;var h=this.video.paused;this.video.pause();var k=Tn()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),S=new DOMParser().parseFromString(k,"text/html").body.firstChild;this.template.videoWrap.insertBefore(S,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=S,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(s.prevVideo){if(s.video.currentTime!==s.prevVideo.currentTime)return void s.seek(s.prevVideo.currentTime);s.template.videoWrap.removeChild(s.prevVideo),s.video.classList.add("dplayer-video-current"),h||s.video.play(),s.prevVideo=null,s.notice("".concat(s.tran("switched-quality").replace("%q",s.quality.name)),void 0,void 0,"switch-quality"),s.switchingQuality=!1,s.events.trigger("quality_end")}}),this.on("error",function(){s.video.error&&s.prevVideo&&(s.template.videoWrap.removeChild(s.video),s.video=s.prevVideo,h||s.video.play(),s.qualityIndex=s.prevIndex,s.quality=s.options.video.quality[s.qualityIndex],s.noticeTime=setTimeout(function(){s.template.notice.style.opacity=0,s.events.trigger("notice_hide")},3e3),s.prevVideo=null,s.switchingQuality=!1)})}}},{key:"notice",value:function(u){var s,h,k,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,oe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,ye=arguments.length>3?arguments[3]:void 0;if(ye&&((s=document.getElementById("dplayer-notice-".concat(ye)))&&(s.innerHTML=u),this.noticeList[ye]&&(clearTimeout(this.noticeList[ye]),this.noticeList[ye]=null)),!s){var Qe=xo.NewNotice(u,oe,ye);this.template.noticeList.appendChild(Qe),s=Qe}this.events.trigger("notice_show",s),S>0&&(this.noticeList[ye]=setTimeout((h=s,k=this,function(){h.addEventListener("animationend",function(){k.template.noticeList.removeChild(h)}),h.classList.add("remove-notice"),k.events.trigger("notice_hide"),k.noticeList[ye]=null}),S))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(u){this.video.playbackRate=u}},{key:"destroy",value:function(){pr.splice(pr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],o=[{key:"version",get:function(){return"1.27.1"}}],d&&rr(i.prototype,d),o&&rr(i,o),Object.defineProperty(i,"prototype",{writable:!1}),a}();const Va=ka;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Nt=Va})(),Fe.default})())},44076:function(tn,H,B){"use strict";var se=this&&this.__createBinding||(Object.create?function(T,ne,Q,W){W===void 0&&(W=Q);var X=Object.getOwnPropertyDescriptor(ne,Q);(!X||("get"in X?!ne.__esModule:X.writable||X.configurable))&&(X={enumerable:!0,get:function(){return ne[Q]}}),Object.defineProperty(T,W,X)}:function(T,ne,Q,W){W===void 0&&(W=Q),T[W]=ne[Q]}),m=this&&this.__setModuleDefault||(Object.create?function(T,ne){Object.defineProperty(T,"default",{enumerable:!0,value:ne})}:function(T,ne){T.default=ne}),w=this&&this.__importStar||function(T){if(T&&T.__esModule)return T;var ne={};if(T!=null)for(var Q in T)Q!=="default"&&Object.prototype.hasOwnProperty.call(T,Q)&&se(ne,T,Q);return m(ne,T),ne},R=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(H,"__esModule",{value:!0}),H.decodeXML=H.decodeHTMLStrict=H.decodeHTMLAttribute=H.decodeHTML=H.determineBranch=H.EntityDecoder=H.DecodingMode=H.BinTrieFlags=H.fromCodePoint=H.replaceCodePoint=H.decodeCodePoint=H.xmlDecodeTree=H.htmlDecodeTree=void 0;var Fe=R(B(63704));H.htmlDecodeTree=Fe.default;var G=R(B(22060));H.xmlDecodeTree=G.default;var re=w(B(26));H.decodeCodePoint=re.default;var _=B(26);Object.defineProperty(H,"replaceCodePoint",{enumerable:!0,get:function(){return _.replaceCodePoint}}),Object.defineProperty(H,"fromCodePoint",{enumerable:!0,get:function(){return _.fromCodePoint}});var C;(function(T){T[T.NUM=35]="NUM",T[T.SEMI=59]="SEMI",T[T.EQUALS=61]="EQUALS",T[T.ZERO=48]="ZERO",T[T.NINE=57]="NINE",T[T.LOWER_A=97]="LOWER_A",T[T.LOWER_F=102]="LOWER_F",T[T.LOWER_X=120]="LOWER_X",T[T.LOWER_Z=122]="LOWER_Z",T[T.UPPER_A=65]="UPPER_A",T[T.UPPER_F=70]="UPPER_F",T[T.UPPER_Z=90]="UPPER_Z"})(C||(C={}));var z=32,O;(function(T){T[T.VALUE_LENGTH=49152]="VALUE_LENGTH",T[T.BRANCH_LENGTH=16256]="BRANCH_LENGTH",T[T.JUMP_TABLE=127]="JUMP_TABLE"})(O=H.BinTrieFlags||(H.BinTrieFlags={}));function g(T){return T>=C.ZERO&&T<=C.NINE}function te(T){return T>=C.UPPER_A&&T<=C.UPPER_F||T>=C.LOWER_A&&T<=C.LOWER_F}function me(T){return T>=C.UPPER_A&&T<=C.UPPER_Z||T>=C.LOWER_A&&T<=C.LOWER_Z||g(T)}function J(T){return T===C.EQUALS||me(T)}var de;(function(T){T[T.EntityStart=0]="EntityStart",T[T.NumericStart=1]="NumericStart",T[T.NumericDecimal=2]="NumericDecimal",T[T.NumericHex=3]="NumericHex",T[T.NamedEntity=4]="NamedEntity"})(de||(de={}));var Ce;(function(T){T[T.Legacy=0]="Legacy",T[T.Strict=1]="Strict",T[T.Attribute=2]="Attribute"})(Ce=H.DecodingMode||(H.DecodingMode={}));var be=function(){function T(ne,Q,W){this.decodeTree=ne,this.emitCodePoint=Q,this.errors=W,this.state=de.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ce.Strict}return T.prototype.startEntity=function(ne){this.decodeMode=ne,this.state=de.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},T.prototype.write=function(ne,Q){switch(this.state){case de.EntityStart:return ne.charCodeAt(Q)===C.NUM?(this.state=de.NumericStart,this.consumed+=1,this.stateNumericStart(ne,Q+1)):(this.state=de.NamedEntity,this.stateNamedEntity(ne,Q));case de.NumericStart:return this.stateNumericStart(ne,Q);case de.NumericDecimal:return this.stateNumericDecimal(ne,Q);case de.NumericHex:return this.stateNumericHex(ne,Q);case de.NamedEntity:return this.stateNamedEntity(ne,Q)}},T.prototype.stateNumericStart=function(ne,Q){return Q>=ne.length?-1:(ne.charCodeAt(Q)|z)===C.LOWER_X?(this.state=de.NumericHex,this.consumed+=1,this.stateNumericHex(ne,Q+1)):(this.state=de.NumericDecimal,this.stateNumericDecimal(ne,Q))},T.prototype.addToNumericResult=function(ne,Q,W,X){if(Q!==W){var Ae=W-Q;this.result=this.result*Math.pow(X,Ae)+parseInt(ne.substr(Q,Ae),X),this.consumed+=Ae}},T.prototype.stateNumericHex=function(ne,Q){for(var W=Q;Q<ne.length;){var X=ne.charCodeAt(Q);if(g(X)||te(X))Q+=1;else return this.addToNumericResult(ne,W,Q,16),this.emitNumericEntity(X,3)}return this.addToNumericResult(ne,W,Q,16),-1},T.prototype.stateNumericDecimal=function(ne,Q){for(var W=Q;Q<ne.length;){var X=ne.charCodeAt(Q);if(g(X))Q+=1;else return this.addToNumericResult(ne,W,Q,10),this.emitNumericEntity(X,2)}return this.addToNumericResult(ne,W,Q,10),-1},T.prototype.emitNumericEntity=function(ne,Q){var W;if(this.consumed<=Q)return(W=this.errors)===null||W===void 0||W.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(ne===C.SEMI)this.consumed+=1;else if(this.decodeMode===Ce.Strict)return 0;return this.emitCodePoint((0,re.replaceCodePoint)(this.result),this.consumed),this.errors&&(ne!==C.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},T.prototype.stateNamedEntity=function(ne,Q){for(var W=this.decodeTree,X=W[this.treeIndex],Ae=(X&O.VALUE_LENGTH)>>14;Q<ne.length;Q++,this.excess++){var Be=ne.charCodeAt(Q);if(this.treeIndex=Ze(W,X,this.treeIndex+Math.max(1,Ae),Be),this.treeIndex<0)return this.result===0||this.decodeMode===Ce.Attribute&&(Ae===0||J(Be))?0:this.emitNotTerminatedNamedEntity();if(X=W[this.treeIndex],Ae=(X&O.VALUE_LENGTH)>>14,Ae!==0){if(Be===C.SEMI)return this.emitNamedEntityData(this.treeIndex,Ae,this.consumed+this.excess);this.decodeMode!==Ce.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1},T.prototype.emitNotTerminatedNamedEntity=function(){var ne,Q=this,W=Q.result,X=Q.decodeTree,Ae=(X[W]&O.VALUE_LENGTH)>>14;return this.emitNamedEntityData(W,Ae,this.consumed),(ne=this.errors)===null||ne===void 0||ne.missingSemicolonAfterCharacterReference(),this.consumed},T.prototype.emitNamedEntityData=function(ne,Q,W){var X=this.decodeTree;return this.emitCodePoint(Q===1?X[ne]&~O.VALUE_LENGTH:X[ne+1],W),Q===3&&this.emitCodePoint(X[ne+2],W),W},T.prototype.end=function(){var ne;switch(this.state){case de.NamedEntity:return this.result!==0&&(this.decodeMode!==Ce.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case de.NumericDecimal:return this.emitNumericEntity(0,2);case de.NumericHex:return this.emitNumericEntity(0,3);case de.NumericStart:return(ne=this.errors)===null||ne===void 0||ne.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case de.EntityStart:return 0}},T}();H.EntityDecoder=be;function We(T){var ne="",Q=new be(T,function(W){return ne+=(0,re.fromCodePoint)(W)});return function(X,Ae){for(var Be=0,Ue=0;(Ue=X.indexOf("&",Ue))>=0;){ne+=X.slice(Be,Ue),Q.startEntity(Ae);var ge=Q.write(X,Ue+1);if(ge<0){Be=Ue+Q.end();break}Be=Ue+ge,Ue=ge===0?Be+1:Be}var Ge=ne+X.slice(Be);return ne="",Ge}}function Ze(T,ne,Q,W){var X=(ne&O.BRANCH_LENGTH)>>7,Ae=ne&O.JUMP_TABLE;if(X===0)return Ae!==0&&W===Ae?Q:-1;if(Ae){var Be=W-Ae;return Be<0||Be>=X?-1:T[Q+Be]-1}for(var Ue=Q,ge=Ue+X-1;Ue<=ge;){var Ge=Ue+ge>>>1,cn=T[Ge];if(cn<W)Ue=Ge+1;else if(cn>W)ge=Ge-1;else return T[Ge+X]}return-1}H.determineBranch=Ze;var dn=We(Fe.default),U=We(G.default);function D(T,ne){return ne===void 0&&(ne=Ce.Legacy),dn(T,ne)}H.decodeHTML=D;function ie(T){return dn(T,Ce.Attribute)}H.decodeHTMLAttribute=ie;function Oe(T){return dn(T,Ce.Strict)}H.decodeHTMLStrict=Oe;function Re(T){return U(T,Ce.Strict)}H.decodeXML=Re},26:function(tn,H){"use strict";var B;Object.defineProperty(H,"__esModule",{value:!0}),H.replaceCodePoint=H.fromCodePoint=void 0;var se=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);H.fromCodePoint=(B=String.fromCodePoint)!==null&&B!==void 0?B:function(R){var Fe="";return R>65535&&(R-=65536,Fe+=String.fromCharCode(R>>>10&1023|55296),R=56320|R&1023),Fe+=String.fromCharCode(R),Fe};function m(R){var Fe;return R>=55296&&R<=57343||R>1114111?65533:(Fe=se.get(R))!==null&&Fe!==void 0?Fe:R}H.replaceCodePoint=m;function w(R){return(0,H.fromCodePoint)(m(R))}H.default=w},87322:function(tn,H,B){"use strict";var se=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(H,"__esModule",{value:!0}),H.encodeNonAsciiHTML=H.encodeHTML=void 0;var m=se(B(94021)),w=B(24625),R=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function Fe(_){return re(R,_)}H.encodeHTML=Fe;function G(_){return re(w.xmlReplacer,_)}H.encodeNonAsciiHTML=G;function re(_,C){for(var z="",O=0,g;(g=_.exec(C))!==null;){var te=g.index;z+=C.substring(O,te);var me=C.charCodeAt(te),J=m.default.get(me);if(typeof J=="object"){if(te+1<C.length){var de=C.charCodeAt(te+1),Ce=typeof J.n=="number"?J.n===de?J.o:void 0:J.n.get(de);if(Ce!==void 0){z+=Ce,O=_.lastIndex+=1;continue}}J=J.v}if(J!==void 0)z+=J,O=te+1;else{var be=(0,w.getCodePoint)(C,te);z+="&#x".concat(be.toString(16),";"),O=_.lastIndex+=+(be!==me)}}return z+C.substr(O)}},24625:function(tn,H){"use strict";Object.defineProperty(H,"__esModule",{value:!0}),H.escapeText=H.escapeAttribute=H.escapeUTF8=H.escape=H.encodeXML=H.getCodePoint=H.xmlReplacer=void 0,H.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var B=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);H.getCodePoint=String.prototype.codePointAt!=null?function(w,R){return w.codePointAt(R)}:function(w,R){return(w.charCodeAt(R)&64512)===55296?(w.charCodeAt(R)-55296)*1024+w.charCodeAt(R+1)-56320+65536:w.charCodeAt(R)};function se(w){for(var R="",Fe=0,G;(G=H.xmlReplacer.exec(w))!==null;){var re=G.index,_=w.charCodeAt(re),C=B.get(_);C!==void 0?(R+=w.substring(Fe,re)+C,Fe=re+1):(R+="".concat(w.substring(Fe,re),"&#x").concat((0,H.getCodePoint)(w,re).toString(16),";"),Fe=H.xmlReplacer.lastIndex+=+((_&64512)===55296))}return R+w.substr(Fe)}H.encodeXML=se,H.escape=se;function m(w,R){return function(G){for(var re,_=0,C="";re=w.exec(G);)_!==re.index&&(C+=G.substring(_,re.index)),C+=R.get(re[0].charCodeAt(0)),_=re.index+1;return C+G.substring(_)}}H.escapeUTF8=m(/[&<>'"]/g,B),H.escapeAttribute=m(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),H.escapeText=m(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},63704:function(tn,H){"use strict";Object.defineProperty(H,"__esModule",{value:!0}),H.default=new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(B){return B.charCodeAt(0)}))},22060:function(tn,H){"use strict";Object.defineProperty(H,"__esModule",{value:!0}),H.default=new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(B){return B.charCodeAt(0)}))},94021:function(tn,H){"use strict";Object.defineProperty(H,"__esModule",{value:!0});function B(se){for(var m=1;m<se.length;m++)se[m][0]+=se[m-1][0]+1;return se}H.default=new Map(B([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(B([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(B([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(B([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},45863:function(tn,H,B){"use strict";Object.defineProperty(H,"__esModule",{value:!0}),H.decodeXMLStrict=H.decodeHTML5Strict=H.decodeHTML4Strict=H.decodeHTML5=H.decodeHTML4=H.decodeHTMLAttribute=H.decodeHTMLStrict=H.decodeHTML=H.decodeXML=H.DecodingMode=H.EntityDecoder=H.encodeHTML5=H.encodeHTML4=H.encodeNonAsciiHTML=H.encodeHTML=H.escapeText=H.escapeAttribute=H.escapeUTF8=H.escape=H.encodeXML=H.encode=H.decodeStrict=H.decode=H.EncodingMode=H.EntityLevel=void 0;var se=B(44076),m=B(87322),w=B(24625),R;(function(g){g[g.XML=0]="XML",g[g.HTML=1]="HTML"})(R=H.EntityLevel||(H.EntityLevel={}));var Fe;(function(g){g[g.UTF8=0]="UTF8",g[g.ASCII=1]="ASCII",g[g.Extensive=2]="Extensive",g[g.Attribute=3]="Attribute",g[g.Text=4]="Text"})(Fe=H.EncodingMode||(H.EncodingMode={}));function G(g,te){te===void 0&&(te=R.XML);var me=typeof te=="number"?te:te.level;if(me===R.HTML){var J=typeof te=="object"?te.mode:void 0;return(0,se.decodeHTML)(g,J)}return(0,se.decodeXML)(g)}H.decode=G;function re(g,te){var me;te===void 0&&(te=R.XML);var J=typeof te=="number"?{level:te}:te;return(me=J.mode)!==null&&me!==void 0||(J.mode=se.DecodingMode.Strict),G(g,J)}H.decodeStrict=re;function _(g,te){te===void 0&&(te=R.XML);var me=typeof te=="number"?{level:te}:te;return me.mode===Fe.UTF8?(0,w.escapeUTF8)(g):me.mode===Fe.Attribute?(0,w.escapeAttribute)(g):me.mode===Fe.Text?(0,w.escapeText)(g):me.level===R.HTML?me.mode===Fe.ASCII?(0,m.encodeNonAsciiHTML)(g):(0,m.encodeHTML)(g):(0,w.encodeXML)(g)}H.encode=_;var C=B(24625);Object.defineProperty(H,"encodeXML",{enumerable:!0,get:function(){return C.encodeXML}}),Object.defineProperty(H,"escape",{enumerable:!0,get:function(){return C.escape}}),Object.defineProperty(H,"escapeUTF8",{enumerable:!0,get:function(){return C.escapeUTF8}}),Object.defineProperty(H,"escapeAttribute",{enumerable:!0,get:function(){return C.escapeAttribute}}),Object.defineProperty(H,"escapeText",{enumerable:!0,get:function(){return C.escapeText}});var z=B(87322);Object.defineProperty(H,"encodeHTML",{enumerable:!0,get:function(){return z.encodeHTML}}),Object.defineProperty(H,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return z.encodeNonAsciiHTML}}),Object.defineProperty(H,"encodeHTML4",{enumerable:!0,get:function(){return z.encodeHTML}}),Object.defineProperty(H,"encodeHTML5",{enumerable:!0,get:function(){return z.encodeHTML}});var O=B(44076);Object.defineProperty(H,"EntityDecoder",{enumerable:!0,get:function(){return O.EntityDecoder}}),Object.defineProperty(H,"DecodingMode",{enumerable:!0,get:function(){return O.DecodingMode}}),Object.defineProperty(H,"decodeXML",{enumerable:!0,get:function(){return O.decodeXML}}),Object.defineProperty(H,"decodeHTML",{enumerable:!0,get:function(){return O.decodeHTML}}),Object.defineProperty(H,"decodeHTMLStrict",{enumerable:!0,get:function(){return O.decodeHTMLStrict}}),Object.defineProperty(H,"decodeHTMLAttribute",{enumerable:!0,get:function(){return O.decodeHTMLAttribute}}),Object.defineProperty(H,"decodeHTML4",{enumerable:!0,get:function(){return O.decodeHTML}}),Object.defineProperty(H,"decodeHTML5",{enumerable:!0,get:function(){return O.decodeHTML}}),Object.defineProperty(H,"decodeHTML4Strict",{enumerable:!0,get:function(){return O.decodeHTMLStrict}}),Object.defineProperty(H,"decodeHTML5Strict",{enumerable:!0,get:function(){return O.decodeHTMLStrict}}),Object.defineProperty(H,"decodeXMLStrict",{enumerable:!0,get:function(){return O.decodeXML}})},22277:function(tn,H,B){"use strict";var se=B(5814);function m(U){const D={};U=U||{},D.src_Any=se.Any.source,D.src_Cc=se.Cc.source,D.src_Z=se.Z.source,D.src_P=se.P.source,D.src_ZPCc=[D.src_Z,D.src_P,D.src_Cc].join("|"),D.src_ZCc=[D.src_Z,D.src_Cc].join("|");const ie="[><\uFF5C]";return D.src_pseudo_letter="(?:(?!"+ie+"|"+D.src_ZPCc+")"+D.src_Any+")",D.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",D.src_auth="(?:(?:(?!"+D.src_ZCc+"|[@/\\[\\]()]).)+@)?",D.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",D.src_host_terminator="(?=$|"+ie+"|"+D.src_ZPCc+")(?!"+(U["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+D.src_ZPCc+"))",D.src_path="(?:[/?#](?:(?!"+D.src_ZCc+"|"+ie+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+D.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+D.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+D.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+D.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+D.src_ZCc+"|[']).)+\\'|\\'(?="+D.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+D.src_ZCc+"|[.]|$)|"+(U["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+D.src_ZCc+"|$)|;(?!"+D.src_ZCc+"|$)|\\!+(?!"+D.src_ZCc+"|[!]|$)|\\?(?!"+D.src_ZCc+"|[?]|$))+|\\/)?",D.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',D.src_xn="xn--[a-z0-9\\-]{1,59}",D.src_domain_root="(?:"+D.src_xn+"|"+D.src_pseudo_letter+"{1,63})",D.src_domain="(?:"+D.src_xn+"|(?:"+D.src_pseudo_letter+")|(?:"+D.src_pseudo_letter+"(?:-|"+D.src_pseudo_letter+"){0,61}"+D.src_pseudo_letter+"))",D.src_host="(?:(?:(?:(?:"+D.src_domain+")\\.)*"+D.src_domain+"))",D.tpl_host_fuzzy="(?:"+D.src_ip4+"|(?:(?:(?:"+D.src_domain+")\\.)+(?:%TLDS%)))",D.tpl_host_no_ip_fuzzy="(?:(?:(?:"+D.src_domain+")\\.)+(?:%TLDS%))",D.src_host_strict=D.src_host+D.src_host_terminator,D.tpl_host_fuzzy_strict=D.tpl_host_fuzzy+D.src_host_terminator,D.src_host_port_strict=D.src_host+D.src_port+D.src_host_terminator,D.tpl_host_port_fuzzy_strict=D.tpl_host_fuzzy+D.src_port+D.src_host_terminator,D.tpl_host_port_no_ip_fuzzy_strict=D.tpl_host_no_ip_fuzzy+D.src_port+D.src_host_terminator,D.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+D.src_ZPCc+"|>|$))",D.tpl_email_fuzzy="(^|"+ie+'|"|\\(|'+D.src_ZCc+")("+D.src_email_name+"@"+D.tpl_host_fuzzy_strict+")",D.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+D.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+D.tpl_host_port_fuzzy_strict+D.src_path+")",D.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+D.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+D.tpl_host_port_no_ip_fuzzy_strict+D.src_path+")",D}function w(U){return Array.prototype.slice.call(arguments,1).forEach(function(ie){ie&&Object.keys(ie).forEach(function(Oe){U[Oe]=ie[Oe]})}),U}function R(U){return Object.prototype.toString.call(U)}function Fe(U){return R(U)==="[object String]"}function G(U){return R(U)==="[object Object]"}function re(U){return R(U)==="[object RegExp]"}function _(U){return R(U)==="[object Function]"}function C(U){return U.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const z={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function O(U){return Object.keys(U||{}).reduce(function(D,ie){return D||z.hasOwnProperty(ie)},!1)}const g={"http:":{validate:function(U,D,ie){const Oe=U.slice(D);return ie.re.http||(ie.re.http=new RegExp("^\\/\\/"+ie.re.src_auth+ie.re.src_host_port_strict+ie.re.src_path,"i")),ie.re.http.test(Oe)?Oe.match(ie.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(U,D,ie){const Oe=U.slice(D);return ie.re.no_http||(ie.re.no_http=new RegExp("^"+ie.re.src_auth+"(?:localhost|(?:(?:"+ie.re.src_domain+")\\.)+"+ie.re.src_domain_root+")"+ie.re.src_port+ie.re.src_host_terminator+ie.re.src_path,"i")),ie.re.no_http.test(Oe)?D>=3&&U[D-3]===":"||D>=3&&U[D-3]==="/"?0:Oe.match(ie.re.no_http)[0].length:0}},"mailto:":{validate:function(U,D,ie){const Oe=U.slice(D);return ie.re.mailto||(ie.re.mailto=new RegExp("^"+ie.re.src_email_name+"@"+ie.re.src_host_strict,"i")),ie.re.mailto.test(Oe)?Oe.match(ie.re.mailto)[0].length:0}}},te="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",me="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function J(U){U.__index__=-1,U.__text_cache__=""}function de(U){return function(D,ie){const Oe=D.slice(ie);return U.test(Oe)?Oe.match(U)[0].length:0}}function Ce(){return function(U,D){D.normalize(U)}}function be(U){const D=U.re=m(U.__opts__),ie=U.__tlds__.slice();U.onCompile(),U.__tlds_replaced__||ie.push(te),ie.push(D.src_xn),D.src_tlds=ie.join("|");function Oe(Q){return Q.replace("%TLDS%",D.src_tlds)}D.email_fuzzy=RegExp(Oe(D.tpl_email_fuzzy),"i"),D.link_fuzzy=RegExp(Oe(D.tpl_link_fuzzy),"i"),D.link_no_ip_fuzzy=RegExp(Oe(D.tpl_link_no_ip_fuzzy),"i"),D.host_fuzzy_test=RegExp(Oe(D.tpl_host_fuzzy_test),"i");const Re=[];U.__compiled__={};function T(Q,W){throw new Error('(LinkifyIt) Invalid schema "'+Q+'": '+W)}Object.keys(U.__schemas__).forEach(function(Q){const W=U.__schemas__[Q];if(W===null)return;const X={validate:null,link:null};if(U.__compiled__[Q]=X,G(W)){re(W.validate)?X.validate=de(W.validate):_(W.validate)?X.validate=W.validate:T(Q,W),_(W.normalize)?X.normalize=W.normalize:W.normalize?T(Q,W):X.normalize=Ce();return}if(Fe(W)){Re.push(Q);return}T(Q,W)}),Re.forEach(function(Q){U.__compiled__[U.__schemas__[Q]]&&(U.__compiled__[Q].validate=U.__compiled__[U.__schemas__[Q]].validate,U.__compiled__[Q].normalize=U.__compiled__[U.__schemas__[Q]].normalize)}),U.__compiled__[""]={validate:null,normalize:Ce()};const ne=Object.keys(U.__compiled__).filter(function(Q){return Q.length>0&&U.__compiled__[Q]}).map(C).join("|");U.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+D.src_ZPCc+"))("+ne+")","i"),U.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+D.src_ZPCc+"))("+ne+")","ig"),U.re.schema_at_start=RegExp("^"+U.re.schema_search.source,"i"),U.re.pretest=RegExp("("+U.re.schema_test.source+")|("+U.re.host_fuzzy_test.source+")|@","i"),J(U)}function We(U,D){const ie=U.__index__,Oe=U.__last_index__,Re=U.__text_cache__.slice(ie,Oe);this.schema=U.__schema__.toLowerCase(),this.index=ie+D,this.lastIndex=Oe+D,this.raw=Re,this.text=Re,this.url=Re}function Ze(U,D){const ie=new We(U,D);return U.__compiled__[ie.schema].normalize(ie,U),ie}function dn(U,D){if(!(this instanceof dn))return new dn(U,D);D||O(U)&&(D=U,U={}),this.__opts__=w({},z,D),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=w({},g,U),this.__compiled__={},this.__tlds__=me,this.__tlds_replaced__=!1,this.re={},be(this)}dn.prototype.add=function(D,ie){return this.__schemas__[D]=ie,be(this),this},dn.prototype.set=function(D){return this.__opts__=w(this.__opts__,D),this},dn.prototype.test=function(D){if(this.__text_cache__=D,this.__index__=-1,!D.length)return!1;let ie,Oe,Re,T,ne,Q,W,X,Ae;if(this.re.schema_test.test(D)){for(W=this.re.schema_search,W.lastIndex=0;(ie=W.exec(D))!==null;)if(T=this.testSchemaAt(D,ie[2],W.lastIndex),T){this.__schema__=ie[2],this.__index__=ie.index+ie[1].length,this.__last_index__=ie.index+ie[0].length+T;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(X=D.search(this.re.host_fuzzy_test),X>=0&&(this.__index__<0||X<this.__index__)&&(Oe=D.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(ne=Oe.index+Oe[1].length,(this.__index__<0||ne<this.__index__)&&(this.__schema__="",this.__index__=ne,this.__last_index__=Oe.index+Oe[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(Ae=D.indexOf("@"),Ae>=0&&(Re=D.match(this.re.email_fuzzy))!==null&&(ne=Re.index+Re[1].length,Q=Re.index+Re[0].length,(this.__index__<0||ne<this.__index__||ne===this.__index__&&Q>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=ne,this.__last_index__=Q))),this.__index__>=0},dn.prototype.pretest=function(D){return this.re.pretest.test(D)},dn.prototype.testSchemaAt=function(D,ie,Oe){return this.__compiled__[ie.toLowerCase()]?this.__compiled__[ie.toLowerCase()].validate(D,Oe,this):0},dn.prototype.match=function(D){const ie=[];let Oe=0;this.__index__>=0&&this.__text_cache__===D&&(ie.push(Ze(this,Oe)),Oe=this.__last_index__);let Re=Oe?D.slice(Oe):D;for(;this.test(Re);)ie.push(Ze(this,Oe)),Re=Re.slice(this.__last_index__),Oe+=this.__last_index__;return ie.length?ie:null},dn.prototype.matchAtStart=function(D){if(this.__text_cache__=D,this.__index__=-1,!D.length)return null;const ie=this.re.schema_at_start.exec(D);if(!ie)return null;const Oe=this.testSchemaAt(D,ie[2],ie[0].length);return Oe?(this.__schema__=ie[2],this.__index__=ie.index+ie[1].length,this.__last_index__=ie.index+ie[0].length+Oe,Ze(this,0)):null},dn.prototype.tlds=function(D,ie){return D=Array.isArray(D)?D:[D],ie?(this.__tlds__=this.__tlds__.concat(D).sort().filter(function(Oe,Re,T){return Oe!==T[Re-1]}).reverse(),be(this),this):(this.__tlds__=D.slice(),this.__tlds_replaced__=!0,be(this),this)},dn.prototype.normalize=function(D){D.schema||(D.url="http://"+D.url),D.schema==="mailto:"&&!/^mailto:/i.test(D.url)&&(D.url="mailto:"+D.url)},dn.prototype.onCompile=function(){},tn.exports=dn},96486:function(tn,H,B){tn=B.nmd(tn);var se;(function(){var m,w="4.17.21",R=200,Fe="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",G="Expected a function",re="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",C=500,z="__lodash_placeholder__",O=1,g=2,te=4,me=1,J=2,de=1,Ce=2,be=4,We=8,Ze=16,dn=32,U=64,D=128,ie=256,Oe=512,Re=30,T="...",ne=800,Q=16,W=1,X=2,Ae=3,Be=1/0,Ue=9007199254740991,ge=17976931348623157e292,Ge=NaN,cn=4294967295,Xn=cn-1,ue=cn>>>1,ve=[["ary",D],["bind",de],["bindKey",Ce],["curry",We],["curryRight",Ze],["flip",Oe],["partial",dn],["partialRight",U],["rearg",ie]],xe="[object Arguments]",V="[object Array]",Ee="[object AsyncFunction]",Ke="[object Boolean]",an="[object Date]",In="[object DOMException]",On="[object Error]",gn="[object Function]",Qn="[object GeneratorFunction]",vn="[object Map]",ht="[object Number]",ct="[object Null]",Un="[object Object]",Zt="[object Promise]",Mt="[object Proxy]",vt="[object RegExp]",Gn="[object Set]",kt="[object String]",Ct="[object Symbol]",Ve="[object Undefined]",Y="[object WeakMap]",Ie="[object WeakSet]",Te="[object ArrayBuffer]",we="[object DataView]",Xe="[object Float32Array]",Cn="[object Float64Array]",Je="[object Int8Array]",$="[object Int16Array]",on="[object Int32Array]",wn="[object Uint8Array]",xn="[object Uint8ClampedArray]",qe="[object Uint16Array]",Bn="[object Uint32Array]",it=/\b__p \+= '';/g,xt=/\b(__p \+=) '' \+/g,Ft=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Ot=/[&<>"']/g,He=RegExp(St.source),he=RegExp(Ot.source),Le=/<%-([\s\S]+?)%>/g,Me=/<%([\s\S]+?)%>/g,An=/<%=([\s\S]+?)%>/g,Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wn=/^\w*$/,lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/[\\^$.*+?()[\]{}|]/g,Ht=RegExp(It.source),Bt=/^\s+/,_t=/\s/,sr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wt=/\{\n\/\* \[wrapped with (.+)\] \*/,or=/,? & /,cr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,nr=/[()=,{}\[\]\/\s]/,jt=/\\(\\)?/g,mr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Sr=/\w*$/,_r=/^[-+]0x[0-9a-f]+$/i,$r=/^0b[01]+$/i,Pr=/^\[object .+?Constructor\]$/,Br=/^0o[0-7]+$/i,jr=/^(?:0|[1-9]\d*)$/,sa=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ur=/($^)/,Tr=/['\n\r\u2028\u2029\\]/g,gr="\\ud800-\\udfff",Gr="\\u0300-\\u036f",vr="\\ufe20-\\ufe2f",Dr="\\u20d0-\\u20ff",ir=Gr+vr+Dr,ca="\\u2700-\\u27bf",Jr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",$a="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ja="\\u2000-\\u206f",Ja=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ga="A-Z\\xc0-\\xd6\\xd8-\\xde",eo="\\ufe0e\\ufe0f",da=tr+$a+ja+Ja,qr="['\u2019]",Mr="["+gr+"]",Ua="["+da+"]",yr="["+ir+"]",pa="\\d+",La="["+ca+"]",Fa="["+Jr+"]",va="[^"+gr+da+pa+ca+Jr+ga+"]",xr="\\ud83c[\\udffb-\\udfff]",no="(?:"+yr+"|"+xr+")",Er="[^"+gr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",zr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ir="["+ga+"]",Oa="\\u200d",xa="(?:"+Fa+"|"+va+")",Ra="(?:"+Ir+"|"+va+")",Pa="(?:"+qr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+qr+"(?:D|LL|M|RE|S|T|VE))?",Ea=no+"?",Lt="["+eo+"]?",Wr="(?:"+Oa+"(?:"+[Er,Zr,zr].join("|")+")"+Lt+Ea+")*",Tt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ea=Lt+Ea+Wr,to="(?:"+[La,Zr,zr].join("|")+")"+ea,Ca="(?:"+[Er+yr+"?",yr,Zr,zr,Mr].join("|")+")",Do=RegExp(qr,"g"),Io=RegExp(yr,"g"),qa=RegExp(xr+"(?="+xr+")|"+Ca+ea,"g"),Lo=RegExp([Ir+"?"+Fa+"+"+Pa+"(?="+[Ua,Ir,"$"].join("|")+")",Ra+"+"+Lr+"(?="+[Ua,Ir+xa,"$"].join("|")+")",Ir+"?"+xa+"+"+Pa,Ir+"+"+Lr,Yt,Tt,pa,to].join("|"),"g"),Fo=RegExp("["+Oa+gr+ir+eo+"]"),Cr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,t=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],c=-1,p={};p[Xe]=p[Cn]=p[Je]=p[$]=p[on]=p[wn]=p[xn]=p[qe]=p[Bn]=!0,p[xe]=p[V]=p[Te]=p[Ke]=p[we]=p[an]=p[On]=p[gn]=p[vn]=p[ht]=p[Un]=p[vt]=p[Gn]=p[kt]=p[Y]=!1;var b={};b[xe]=b[V]=b[Te]=b[we]=b[Ke]=b[an]=b[Xe]=b[Cn]=b[Je]=b[$]=b[on]=b[vn]=b[ht]=b[Un]=b[vt]=b[Gn]=b[kt]=b[Ct]=b[wn]=b[xn]=b[qe]=b[Bn]=!0,b[On]=b[gn]=b[Y]=!1;var y={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},L={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},K=parseFloat,ce=parseInt,Pe=typeof B.g=="object"&&B.g&&B.g.Object===Object&&B.g,$e=typeof self=="object"&&self&&self.Object===Object&&self,un=Pe||$e||Function("return this")(),rn=H&&!H.nodeType&&H,De=rn&&!0&&tn&&!tn.nodeType&&tn,At=De&&De.exports===rn,rt=At&&Pe.process,pt=function(){try{var P=De&&De.require&&De.require("util").types;return P||rt&&rt.binding&&rt.binding("util")}catch(ae){}}(),Mn=pt&&pt.isArrayBuffer,Yn=pt&&pt.isDate,qn=pt&&pt.isMap,Jn=pt&&pt.isRegExp,ut=pt&&pt.isSet,Qt=pt&&pt.isTypedArray;function zt(P,ae,M){switch(M.length){case 0:return P.call(ae);case 1:return P.call(ae,M[0]);case 2:return P.call(ae,M[0],M[1]);case 3:return P.call(ae,M[0],M[1],M[2])}return P.apply(ae,M)}function na(P,ae,M,je){for(var en=-1,yn=P==null?0:P.length;++en<yn;){var et=P[en];ae(je,et,M(et),P)}return je}function lr(P,ae){for(var M=-1,je=P==null?0:P.length;++M<je&&ae(P[M],M,P)!==!1;);return P}function ro(P,ae){for(var M=P==null?0:P.length;M--&&ae(P[M],M,P)!==!1;);return P}function go(P,ae){for(var M=-1,je=P==null?0:P.length;++M<je;)if(!ae(P[M],M,P))return!1;return!0}function ta(P,ae){for(var M=-1,je=P==null?0:P.length,en=0,yn=[];++M<je;){var et=P[M];ae(et,M,P)&&(yn[en++]=et)}return yn}function dr(P,ae){var M=P==null?0:P.length;return!!M&&Wa(P,ae,0)>-1}function ra(P,ae,M){for(var je=-1,en=P==null?0:P.length;++je<en;)if(M(ae,P[je]))return!0;return!1}function Rt(P,ae){for(var M=-1,je=P==null?0:P.length,en=Array(je);++M<je;)en[M]=ae(P[M],M,P);return en}function Yr(P,ae){for(var M=-1,je=ae.length,en=P.length;++M<je;)P[en+M]=ae[M];return P}function vo(P,ae,M,je){var en=-1,yn=P==null?0:P.length;for(je&&yn&&(M=P[++en]);++en<yn;)M=ae(M,P[en],en,P);return M}function Oo(P,ae,M,je){var en=P==null?0:P.length;for(je&&en&&(M=P[--en]);en--;)M=ae(M,P[en],en,P);return M}function xo(P,ae){for(var M=-1,je=P==null?0:P.length;++M<je;)if(ae(P[M],M,P))return!0;return!1}var Za=Ro("length");function ri(P){return P.split("")}function qo(P){return P.match(cr)||[]}function Zo(P,ae,M){var je;return M(P,function(en,yn,et){if(ae(en,yn,et))return je=yn,!1}),je}function Vr(P,ae,M,je){for(var en=P.length,yn=M+(je?1:-1);je?yn--:++yn<en;)if(ae(P[yn],yn,P))return yn;return-1}function Wa(P,ae,M){return ae===ae?pn(P,ae,M):Vr(P,Ya,M)}function ai(P,ae,M,je){for(var en=M-1,yn=P.length;++en<yn;)if(je(P[en],ae))return en;return-1}function Ya(P){return P!==P}function Wo(P,ae){var M=P==null?0:P.length;return M?Po(P,ae)/M:Ge}function Ro(P){return function(ae){return ae==null?m:ae[P]}}function ao(P){return function(ae){return P==null?m:P[ae]}}function wa(P,ae,M,je,en){return en(P,function(yn,et,Rn){M=je?(je=!1,yn):ae(M,yn,et,Rn)}),M}function Yo(P,ae){var M=P.length;for(P.sort(ae);M--;)P[M]=P[M].value;return P}function Po(P,ae){for(var M,je=-1,en=P.length;++je<en;){var yn=ae(P[je]);yn!==m&&(M=M===m?yn:M+yn)}return M}function Eo(P,ae){for(var M=-1,je=Array(P);++M<P;)je[M]=ae(M);return je}function oo(P,ae){return Rt(ae,function(M){return[M,P[M]]})}function Vo(P){return P&&P.slice(0,kn(P)+1).replace(Bt,"")}function wr(P){return function(ae){return P(ae)}}function Co(P,ae){return Rt(ae,function(M){return P[M]})}function fa(P,ae){return P.has(ae)}function Ko(P,ae){for(var M=-1,je=P.length;++M<je&&Wa(ae,P[M],0)>-1;);return M}function wo(P,ae){for(var M=P.length;M--&&Wa(ae,P[M],0)>-1;);return M}function oi(P,ae){for(var M=P.length,je=0;M--;)P[M]===ae&&++je;return je}var io=ao(y),ii=ao(v);function Xo(P){return"\\"+L[P]}function li(P,ae){return P==null?m:P[ae]}function x(P){return Fo.test(P)}function N(P){return Cr.test(P)}function q(P){for(var ae,M=[];!(ae=P.next()).done;)M.push(ae.value);return M}function Z(P){var ae=-1,M=Array(P.size);return P.forEach(function(je,en){M[++ae]=[en,je]}),M}function fe(P,ae){return function(M){return P(ae(M))}}function pe(P,ae){for(var M=-1,je=P.length,en=0,yn=[];++M<je;){var et=P[M];(et===ae||et===z)&&(P[M]=z,yn[en++]=M)}return yn}function ke(P){var ae=-1,M=Array(P.size);return P.forEach(function(je){M[++ae]=je}),M}function le(P){var ae=-1,M=Array(P.size);return P.forEach(function(je){M[++ae]=[je,je]}),M}function pn(P,ae,M){for(var je=M-1,en=P.length;++je<en;)if(P[je]===ae)return je;return-1}function sn(P,ae,M){for(var je=M+1;je--;)if(P[je]===ae)return je;return je}function hn(P){return x(P)?Ln(P):Za(P)}function nn(P){return x(P)?Vn(P):ri(P)}function kn(P){for(var ae=P.length;ae--&&_t.test(P.charAt(ae)););return ae}var Sn=ao(I);function Ln(P){for(var ae=qa.lastIndex=0;qa.test(P);)++ae;return ae}function Vn(P){return P.match(qa)||[]}function zn(P){return P.match(Lo)||[]}var Fn=function P(ae){ae=ae==null?un:Kn.defaults(un.Object(),ae,Kn.pick(un,t));var M=ae.Array,je=ae.Date,en=ae.Error,yn=ae.Function,et=ae.Math,Rn=ae.Object,Ut=ae.RegExp,Fr=ae.String,$t=ae.TypeError,Vt=M.prototype,br=yn.prototype,Dt=Rn.prototype,mt=ae["__core-js_shared__"],Xt=br.toString,at=Dt.hasOwnProperty,aa=0,Or=function(){var e=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ar=Dt.toString,Tn=Xt.call(Rn),ft=un._,Gt=Ut("^"+Xt.call(at).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qt=At?ae.Buffer:m,rr=ae.Symbol,Nr=ae.Uint8Array,Ma=qt?qt.allocUnsafe:m,pr=fe(Rn.getPrototypeOf,Rn),ka=Rn.create,Va=Dt.propertyIsEnumerable,Nt=Vt.splice,a=rr?rr.isConcatSpreadable:m,i=rr?rr.iterator:m,d=rr?rr.toStringTag:m,o=function(){try{var e=$o(Rn,"defineProperty");return e({},"",{}),e}catch(n){}}(),u=ae.clearTimeout!==un.clearTimeout&&ae.clearTimeout,s=je&&je.now!==un.Date.now&&je.now,h=ae.setTimeout!==un.setTimeout&&ae.setTimeout,k=et.ceil,S=et.floor,oe=Rn.getOwnPropertySymbols,ye=qt?qt.isBuffer:m,Qe=ae.isFinite,ln=Vt.join,bn=fe(Rn.keys,Rn),Ye=et.max,ze=et.min,En=je.now,Nn=ae.parseInt,Jt=et.random,Kt=Vt.reverse,mn=$o(ae,"DataView"),nt=$o(ae,"Map"),wt=$o(ae,"Promise"),Zn=$o(ae,"Set"),yt=$o(ae,"WeakMap"),er=$o(Rn,"create"),Sa=yt&&new yt,ha={},lo=jo(mn),Fl=jo(nt),gs=jo(wt),vs=jo(Zn),xs=jo(yt),Ai=rr?rr.prototype:m,ui=Ai?Ai.valueOf:m,Ol=Ai?Ai.toString:m;function A(e){if(ur(e)&&!tt(e)&&!(e instanceof gt)){if(e instanceof _a)return e;if(at.call(e,"__wrapped__"))return Ru(e)}return new _a(e)}var Qo=function(){function e(){}return function(n){if(!ar(n))return{};if(ka)return ka(n);e.prototype=n;var r=new e;return e.prototype=m,r}}();function gi(){}function _a(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=m}A.templateSettings={escape:Le,evaluate:Me,interpolate:An,variable:"",imports:{_:A}},A.prototype=gi.prototype,A.prototype.constructor=A,_a.prototype=Qo(gi.prototype),_a.prototype.constructor=_a;function gt(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=cn,this.__views__=[]}function Es(){var e=new gt(this.__wrapped__);return e.__actions__=oa(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=oa(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=oa(this.__views__),e}function Cs(){if(this.__filtered__){var e=new gt(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ws(){var e=this.__wrapped__.value(),n=this.__dir__,r=tt(e),l=n<0,f=r?e.length:0,E=Pc(0,f,this.__views__),F=E.start,j=E.end,ee=j-F,Se=l?j:F-1,_e=this.__iteratees__,Ne=_e.length,fn=0,_n=ze(ee,this.__takeCount__);if(!r||!l&&f==ee&&_n==ee)return au(e,this.__actions__);var $n=[];e:for(;ee--&&fn<_n;){Se+=n;for(var st=-1,jn=e[Se];++st<Ne;){var bt=_e[st],Et=bt.iteratee,ba=bt.type,Qr=Et(jn);if(ba==X)jn=Qr;else if(!Qr){if(ba==W)continue e;break e}}$n[fn++]=jn}return $n}gt.prototype=Qo(gi.prototype),gt.prototype.constructor=gt;function Mo(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var l=e[n];this.set(l[0],l[1])}}function ks(){this.__data__=er?er(null):{},this.size=0}function Ss(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function _s(e){var n=this.__data__;if(er){var r=n[e];return r===_?m:r}return at.call(n,e)?n[e]:m}function Bs(e){var n=this.__data__;return er?n[e]!==m:at.call(n,e)}function Ts(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=er&&n===m?_:n,this}Mo.prototype.clear=ks,Mo.prototype.delete=Ss,Mo.prototype.get=_s,Mo.prototype.has=Bs,Mo.prototype.set=Ts;function uo(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var l=e[n];this.set(l[0],l[1])}}function Ds(){this.__data__=[],this.size=0}function Is(e){var n=this.__data__,r=vi(n,e);if(r<0)return!1;var l=n.length-1;return r==l?n.pop():Nt.call(n,r,1),--this.size,!0}function Ls(e){var n=this.__data__,r=vi(n,e);return r<0?m:n[r][1]}function Fs(e){return vi(this.__data__,e)>-1}function Os(e,n){var r=this.__data__,l=vi(r,e);return l<0?(++this.size,r.push([e,n])):r[l][1]=n,this}uo.prototype.clear=Ds,uo.prototype.delete=Is,uo.prototype.get=Ls,uo.prototype.has=Fs,uo.prototype.set=Os;function so(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var l=e[n];this.set(l[0],l[1])}}function Rs(){this.size=0,this.__data__={hash:new Mo,map:new(nt||uo),string:new Mo}}function Ps(e){var n=Li(this,e).delete(e);return this.size-=n?1:0,n}function Ms(e){return Li(this,e).get(e)}function zs(e){return Li(this,e).has(e)}function Ns(e,n){var r=Li(this,e),l=r.size;return r.set(e,n),this.size+=r.size==l?0:1,this}so.prototype.clear=Rs,so.prototype.delete=Ps,so.prototype.get=Ms,so.prototype.has=zs,so.prototype.set=Ns;function zo(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new so;++n<r;)this.add(e[n])}function Hs(e){return this.__data__.set(e,_),this}function $s(e){return this.__data__.has(e)}zo.prototype.add=zo.prototype.push=Hs,zo.prototype.has=$s;function za(e){var n=this.__data__=new uo(e);this.size=n.size}function js(){this.__data__=new uo,this.size=0}function Us(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function qs(e){return this.__data__.get(e)}function Zs(e){return this.__data__.has(e)}function Ws(e,n){var r=this.__data__;if(r instanceof uo){var l=r.__data__;if(!nt||l.length<R-1)return l.push([e,n]),this.size=++r.size,this;r=this.__data__=new so(l)}return r.set(e,n),this.size=r.size,this}za.prototype.clear=js,za.prototype.delete=Us,za.prototype.get=qs,za.prototype.has=Zs,za.prototype.set=Ws;function Rl(e,n){var r=tt(e),l=!r&&Uo(e),f=!r&&!l&&To(e),E=!r&&!l&&!f&&ni(e),F=r||l||f||E,j=F?Eo(e.length,Fr):[],ee=j.length;for(var Se in e)(n||at.call(e,Se))&&!(F&&(Se=="length"||f&&(Se=="offset"||Se=="parent")||E&&(Se=="buffer"||Se=="byteLength"||Se=="byteOffset")||ho(Se,ee)))&&j.push(Se);return j}function Pl(e){var n=e.length;return n?e[Ji(0,n-1)]:m}function Ys(e,n){return Fi(oa(e),No(n,0,e.length))}function Vs(e){return Fi(oa(e))}function Ui(e,n,r){(r!==m&&!Na(e[n],r)||r===m&&!(n in e))&&co(e,n,r)}function si(e,n,r){var l=e[n];(!(at.call(e,n)&&Na(l,r))||r===m&&!(n in e))&&co(e,n,r)}function vi(e,n){for(var r=e.length;r--;)if(Na(e[r][0],n))return r;return-1}function Ks(e,n,r,l){return ko(e,function(f,E,F){n(l,f,r(f),F)}),l}function Ml(e,n){return e&&Xa(n,kr(n),e)}function Xs(e,n){return e&&Xa(n,la(n),e)}function co(e,n,r){n=="__proto__"&&o?o(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function qi(e,n){for(var r=-1,l=n.length,f=M(l),E=e==null;++r<l;)f[r]=E?m:wl(e,n[r]);return f}function No(e,n,r){return e===e&&(r!==m&&(e=e<=r?e:r),n!==m&&(e=e>=n?e:n)),e}function Ba(e,n,r,l,f,E){var F,j=n&O,ee=n&g,Se=n&te;if(r&&(F=f?r(e,l,f,E):r(e)),F!==m)return F;if(!ar(e))return e;var _e=tt(e);if(_e){if(F=zc(e),!j)return oa(e,F)}else{var Ne=Hr(e),fn=Ne==gn||Ne==Qn;if(To(e))return lu(e,j);if(Ne==Un||Ne==xe||fn&&!f){if(F=ee||fn?{}:Su(e),!j)return ee?_c(e,Xs(F,e)):Sc(e,Ml(F,e))}else{if(!b[Ne])return f?e:{};F=Nc(e,Ne,j)}}E||(E=new za);var _n=E.get(e);if(_n)return _n;E.set(e,F),ns(e)?e.forEach(function(jn){F.add(Ba(jn,n,r,jn,e,E))}):Ju(e)&&e.forEach(function(jn,bt){F.set(bt,Ba(jn,n,r,bt,e,E))});var $n=Se?ee?cl:sl:ee?la:kr,st=_e?m:$n(e);return lr(st||e,function(jn,bt){st&&(bt=jn,jn=e[bt]),si(F,bt,Ba(jn,n,r,bt,e,E))}),F}function Qs(e){var n=kr(e);return function(r){return zl(r,e,n)}}function zl(e,n,r){var l=r.length;if(e==null)return!l;for(e=Rn(e);l--;){var f=r[l],E=n[f],F=e[f];if(F===m&&!(f in e)||!E(F))return!1}return!0}function Nl(e,n,r){if(typeof e!="function")throw new $t(G);return yi(function(){e.apply(m,r)},n)}function ci(e,n,r,l){var f=-1,E=dr,F=!0,j=e.length,ee=[],Se=n.length;if(!j)return ee;r&&(n=Rt(n,wr(r))),l?(E=ra,F=!1):n.length>=R&&(E=fa,F=!1,n=new zo(n));e:for(;++f<j;){var _e=e[f],Ne=r==null?_e:r(_e);if(_e=l||_e!==0?_e:0,F&&Ne===Ne){for(var fn=Se;fn--;)if(n[fn]===Ne)continue e;ee.push(_e)}else E(n,Ne,l)||ee.push(_e)}return ee}var ko=pu(Ka),Hl=pu(Wi,!0);function Gs(e,n){var r=!0;return ko(e,function(l,f,E){return r=!!n(l,f,E),r}),r}function xi(e,n,r){for(var l=-1,f=e.length;++l<f;){var E=e[l],F=n(E);if(F!=null&&(j===m?F===F&&!ya(F):r(F,j)))var j=F,ee=E}return ee}function Js(e,n,r,l){var f=e.length;for(r=ot(r),r<0&&(r=-r>f?0:f+r),l=l===m||l>f?f:ot(l),l<0&&(l+=f),l=r>l?0:rs(l);r<l;)e[r++]=n;return e}function $l(e,n){var r=[];return ko(e,function(l,f,E){n(l,f,E)&&r.push(l)}),r}function Rr(e,n,r,l,f){var E=-1,F=e.length;for(r||(r=$c),f||(f=[]);++E<F;){var j=e[E];n>0&&r(j)?n>1?Rr(j,n-1,r,l,f):Yr(f,j):l||(f[f.length]=j)}return f}var Zi=fu(),jl=fu(!0);function Ka(e,n){return e&&Zi(e,n,kr)}function Wi(e,n){return e&&jl(e,n,kr)}function Ei(e,n){return ta(n,function(r){return mo(e[r])})}function Ho(e,n){n=_o(n,e);for(var r=0,l=n.length;e!=null&&r<l;)e=e[Qa(n[r++])];return r&&r==l?e:m}function Ul(e,n,r){var l=n(e);return tt(e)?l:Yr(l,r(e))}function Kr(e){return e==null?e===m?Ve:ct:d&&d in Rn(e)?Rc(e):Vc(e)}function Yi(e,n){return e>n}function ec(e,n){return e!=null&&at.call(e,n)}function nc(e,n){return e!=null&&n in Rn(e)}function tc(e,n,r){return e>=ze(n,r)&&e<Ye(n,r)}function Vi(e,n,r){for(var l=r?ra:dr,f=e[0].length,E=e.length,F=E,j=M(E),ee=1/0,Se=[];F--;){var _e=e[F];F&&n&&(_e=Rt(_e,wr(n))),ee=ze(_e.length,ee),j[F]=!r&&(n||f>=120&&_e.length>=120)?new zo(F&&_e):m}_e=e[0];var Ne=-1,fn=j[0];e:for(;++Ne<f&&Se.length<ee;){var _n=_e[Ne],$n=n?n(_n):_n;if(_n=r||_n!==0?_n:0,!(fn?fa(fn,$n):l(Se,$n,r))){for(F=E;--F;){var st=j[F];if(!(st?fa(st,$n):l(e[F],$n,r)))continue e}fn&&fn.push($n),Se.push(_n)}}return Se}function rc(e,n,r,l){return Ka(e,function(f,E,F){n(l,r(f),E,F)}),l}function di(e,n,r){n=_o(n,e),e=Du(e,n);var l=e==null?e:e[Qa(Da(n))];return l==null?m:zt(l,e,r)}function ql(e){return ur(e)&&Kr(e)==xe}function ac(e){return ur(e)&&Kr(e)==Te}function oc(e){return ur(e)&&Kr(e)==an}function pi(e,n,r,l,f){return e===n?!0:e==null||n==null||!ur(e)&&!ur(n)?e!==e&&n!==n:ic(e,n,r,l,pi,f)}function ic(e,n,r,l,f,E){var F=tt(e),j=tt(n),ee=F?V:Hr(e),Se=j?V:Hr(n);ee=ee==xe?Un:ee,Se=Se==xe?Un:Se;var _e=ee==Un,Ne=Se==Un,fn=ee==Se;if(fn&&To(e)){if(!To(n))return!1;F=!0,_e=!1}if(fn&&!_e)return E||(E=new za),F||ni(e)?Cu(e,n,r,l,f,E):Fc(e,n,ee,r,l,f,E);if(!(r&me)){var _n=_e&&at.call(e,"__wrapped__"),$n=Ne&&at.call(n,"__wrapped__");if(_n||$n){var st=_n?e.value():e,jn=$n?n.value():n;return E||(E=new za),f(st,jn,r,l,E)}}return fn?(E||(E=new za),Oc(e,n,r,l,f,E)):!1}function lc(e){return ur(e)&&Hr(e)==vn}function Ki(e,n,r,l){var f=r.length,E=f,F=!l;if(e==null)return!E;for(e=Rn(e);f--;){var j=r[f];if(F&&j[2]?j[1]!==e[j[0]]:!(j[0]in e))return!1}for(;++f<E;){j=r[f];var ee=j[0],Se=e[ee],_e=j[1];if(F&&j[2]){if(Se===m&&!(ee in e))return!1}else{var Ne=new za;if(l)var fn=l(Se,_e,ee,e,n,Ne);if(!(fn===m?pi(_e,Se,me|J,l,Ne):fn))return!1}}return!0}function Zl(e){if(!ar(e)||Uc(e))return!1;var n=mo(e)?Gt:Pr;return n.test(jo(e))}function uc(e){return ur(e)&&Kr(e)==vt}function sc(e){return ur(e)&&Hr(e)==Gn}function cc(e){return ur(e)&&Ni(e.length)&&!!p[Kr(e)]}function Wl(e){return typeof e=="function"?e:e==null?ua:typeof e=="object"?tt(e)?Kl(e[0],e[1]):Vl(e):hs(e)}function Xi(e){if(!mi(e))return bn(e);var n=[];for(var r in Rn(e))at.call(e,r)&&r!="constructor"&&n.push(r);return n}function dc(e){if(!ar(e))return Yc(e);var n=mi(e),r=[];for(var l in e)l=="constructor"&&(n||!at.call(e,l))||r.push(l);return r}function Qi(e,n){return e<n}function Yl(e,n){var r=-1,l=ia(e)?M(e.length):[];return ko(e,function(f,E,F){l[++r]=n(f,E,F)}),l}function Vl(e){var n=pl(e);return n.length==1&&n[0][2]?Bu(n[0][0],n[0][1]):function(r){return r===e||Ki(r,e,n)}}function Kl(e,n){return hl(e)&&_u(n)?Bu(Qa(e),n):function(r){var l=wl(r,e);return l===m&&l===n?kl(r,e):pi(n,l,me|J)}}function Ci(e,n,r,l,f){e!==n&&Zi(n,function(E,F){if(f||(f=new za),ar(E))pc(e,n,F,r,Ci,l,f);else{var j=l?l(yl(e,F),E,F+"",e,n,f):m;j===m&&(j=E),Ui(e,F,j)}},la)}function pc(e,n,r,l,f,E,F){var j=yl(e,r),ee=yl(n,r),Se=F.get(ee);if(Se){Ui(e,r,Se);return}var _e=E?E(j,ee,r+"",e,n,F):m,Ne=_e===m;if(Ne){var fn=tt(ee),_n=!fn&&To(ee),$n=!fn&&!_n&&ni(ee);_e=ee,fn||_n||$n?tt(j)?_e=j:fr(j)?_e=oa(j):_n?(Ne=!1,_e=lu(ee,!0)):$n?(Ne=!1,_e=uu(ee,!0)):_e=[]:bi(ee)||Uo(ee)?(_e=j,Uo(j)?_e=as(j):(!ar(j)||mo(j))&&(_e=Su(ee))):Ne=!1}Ne&&(F.set(ee,_e),f(_e,ee,l,E,F),F.delete(ee)),Ui(e,r,_e)}function Xl(e,n){var r=e.length;if(r)return n+=n<0?r:0,ho(n,r)?e[n]:m}function Ql(e,n,r){n.length?n=Rt(n,function(E){return tt(E)?function(F){return Ho(F,E.length===1?E[0]:E)}:E}):n=[ua];var l=-1;n=Rt(n,wr(Hn()));var f=Yl(e,function(E,F,j){var ee=Rt(n,function(Se){return Se(E)});return{criteria:ee,index:++l,value:E}});return Yo(f,function(E,F){return kc(E,F,r)})}function fc(e,n){return Gl(e,n,function(r,l){return kl(e,l)})}function Gl(e,n,r){for(var l=-1,f=n.length,E={};++l<f;){var F=n[l],j=Ho(e,F);r(j,F)&&fi(E,_o(F,e),j)}return E}function hc(e){return function(n){return Ho(n,e)}}function Gi(e,n,r,l){var f=l?ai:Wa,E=-1,F=n.length,j=e;for(e===n&&(n=oa(n)),r&&(j=Rt(e,wr(r)));++E<F;)for(var ee=0,Se=n[E],_e=r?r(Se):Se;(ee=f(j,_e,ee,l))>-1;)j!==e&&Nt.call(j,ee,1),Nt.call(e,ee,1);return e}function Jl(e,n){for(var r=e?n.length:0,l=r-1;r--;){var f=n[r];if(r==l||f!==E){var E=f;ho(f)?Nt.call(e,f,1):tl(e,f)}}return e}function Ji(e,n){return e+S(Jt()*(n-e+1))}function mc(e,n,r,l){for(var f=-1,E=Ye(k((n-e)/(r||1)),0),F=M(E);E--;)F[l?E:++f]=e,e+=r;return F}function el(e,n){var r="";if(!e||n<1||n>Ue)return r;do n%2&&(r+=e),n=S(n/2),n&&(e+=e);while(n);return r}function dt(e,n){return bl(Tu(e,n,ua),e+"")}function yc(e){return Pl(ti(e))}function bc(e,n){var r=ti(e);return Fi(r,No(n,0,r.length))}function fi(e,n,r,l){if(!ar(e))return e;n=_o(n,e);for(var f=-1,E=n.length,F=E-1,j=e;j!=null&&++f<E;){var ee=Qa(n[f]),Se=r;if(ee==="__proto__"||ee==="constructor"||ee==="prototype")return e;if(f!=F){var _e=j[ee];Se=l?l(_e,ee,j):m,Se===m&&(Se=ar(_e)?_e:ho(n[f+1])?[]:{})}si(j,ee,Se),j=j[ee]}return e}var eu=Sa?function(e,n){return Sa.set(e,n),e}:ua,Ac=o?function(e,n){return o(e,"toString",{configurable:!0,enumerable:!1,value:_l(n),writable:!0})}:ua;function gc(e){return Fi(ti(e))}function Ta(e,n,r){var l=-1,f=e.length;n<0&&(n=-n>f?0:f+n),r=r>f?f:r,r<0&&(r+=f),f=n>r?0:r-n>>>0,n>>>=0;for(var E=M(f);++l<f;)E[l]=e[l+n];return E}function vc(e,n){var r;return ko(e,function(l,f,E){return r=n(l,f,E),!r}),!!r}function wi(e,n,r){var l=0,f=e==null?l:e.length;if(typeof n=="number"&&n===n&&f<=ue){for(;l<f;){var E=l+f>>>1,F=e[E];F!==null&&!ya(F)&&(r?F<=n:F<n)?l=E+1:f=E}return f}return nl(e,n,ua,r)}function nl(e,n,r,l){var f=0,E=e==null?0:e.length;if(E===0)return 0;n=r(n);for(var F=n!==n,j=n===null,ee=ya(n),Se=n===m;f<E;){var _e=S((f+E)/2),Ne=r(e[_e]),fn=Ne!==m,_n=Ne===null,$n=Ne===Ne,st=ya(Ne);if(F)var jn=l||$n;else Se?jn=$n&&(l||fn):j?jn=$n&&fn&&(l||!_n):ee?jn=$n&&fn&&!_n&&(l||!st):_n||st?jn=!1:jn=l?Ne<=n:Ne<n;jn?f=_e+1:E=_e}return ze(E,Xn)}function nu(e,n){for(var r=-1,l=e.length,f=0,E=[];++r<l;){var F=e[r],j=n?n(F):F;if(!r||!Na(j,ee)){var ee=j;E[f++]=F===0?0:F}}return E}function tu(e){return typeof e=="number"?e:ya(e)?Ge:+e}function ma(e){if(typeof e=="string")return e;if(tt(e))return Rt(e,ma)+"";if(ya(e))return Ol?Ol.call(e):"";var n=e+"";return n=="0"&&1/e==-Be?"-0":n}function So(e,n,r){var l=-1,f=dr,E=e.length,F=!0,j=[],ee=j;if(r)F=!1,f=ra;else if(E>=R){var Se=n?null:Ic(e);if(Se)return ke(Se);F=!1,f=fa,ee=new zo}else ee=n?[]:j;e:for(;++l<E;){var _e=e[l],Ne=n?n(_e):_e;if(_e=r||_e!==0?_e:0,F&&Ne===Ne){for(var fn=ee.length;fn--;)if(ee[fn]===Ne)continue e;n&&ee.push(Ne),j.push(_e)}else f(ee,Ne,r)||(ee!==j&&ee.push(Ne),j.push(_e))}return j}function tl(e,n){return n=_o(n,e),e=Du(e,n),e==null||delete e[Qa(Da(n))]}function ru(e,n,r,l){return fi(e,n,r(Ho(e,n)),l)}function ki(e,n,r,l){for(var f=e.length,E=l?f:-1;(l?E--:++E<f)&&n(e[E],E,e););return r?Ta(e,l?0:E,l?E+1:f):Ta(e,l?E+1:0,l?f:E)}function au(e,n){var r=e;return r instanceof gt&&(r=r.value()),vo(n,function(l,f){return f.func.apply(f.thisArg,Yr([l],f.args))},r)}function rl(e,n,r){var l=e.length;if(l<2)return l?So(e[0]):[];for(var f=-1,E=M(l);++f<l;)for(var F=e[f],j=-1;++j<l;)j!=f&&(E[f]=ci(E[f]||F,e[j],n,r));return So(Rr(E,1),n,r)}function ou(e,n,r){for(var l=-1,f=e.length,E=n.length,F={};++l<f;){var j=l<E?n[l]:m;r(F,e[l],j)}return F}function al(e){return fr(e)?e:[]}function ol(e){return typeof e=="function"?e:ua}function _o(e,n){return tt(e)?e:hl(e,n)?[e]:Ou(Pt(e))}var xc=dt;function Bo(e,n,r){var l=e.length;return r=r===m?l:r,!n&&r>=l?e:Ta(e,n,r)}var iu=u||function(e){return un.clearTimeout(e)};function lu(e,n){if(n)return e.slice();var r=e.length,l=Ma?Ma(r):new e.constructor(r);return e.copy(l),l}function il(e){var n=new e.constructor(e.byteLength);return new Nr(n).set(new Nr(e)),n}function Ec(e,n){var r=n?il(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function Cc(e){var n=new e.constructor(e.source,Sr.exec(e));return n.lastIndex=e.lastIndex,n}function wc(e){return ui?Rn(ui.call(e)):{}}function uu(e,n){var r=n?il(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function su(e,n){if(e!==n){var r=e!==m,l=e===null,f=e===e,E=ya(e),F=n!==m,j=n===null,ee=n===n,Se=ya(n);if(!j&&!Se&&!E&&e>n||E&&F&&ee&&!j&&!Se||l&&F&&ee||!r&&ee||!f)return 1;if(!l&&!E&&!Se&&e<n||Se&&r&&f&&!l&&!E||j&&r&&f||!F&&f||!ee)return-1}return 0}function kc(e,n,r){for(var l=-1,f=e.criteria,E=n.criteria,F=f.length,j=r.length;++l<F;){var ee=su(f[l],E[l]);if(ee){if(l>=j)return ee;var Se=r[l];return ee*(Se=="desc"?-1:1)}}return e.index-n.index}function cu(e,n,r,l){for(var f=-1,E=e.length,F=r.length,j=-1,ee=n.length,Se=Ye(E-F,0),_e=M(ee+Se),Ne=!l;++j<ee;)_e[j]=n[j];for(;++f<F;)(Ne||f<E)&&(_e[r[f]]=e[f]);for(;Se--;)_e[j++]=e[f++];return _e}function du(e,n,r,l){for(var f=-1,E=e.length,F=-1,j=r.length,ee=-1,Se=n.length,_e=Ye(E-j,0),Ne=M(_e+Se),fn=!l;++f<_e;)Ne[f]=e[f];for(var _n=f;++ee<Se;)Ne[_n+ee]=n[ee];for(;++F<j;)(fn||f<E)&&(Ne[_n+r[F]]=e[f++]);return Ne}function oa(e,n){var r=-1,l=e.length;for(n||(n=M(l));++r<l;)n[r]=e[r];return n}function Xa(e,n,r,l){var f=!r;r||(r={});for(var E=-1,F=n.length;++E<F;){var j=n[E],ee=l?l(r[j],e[j],j,r,e):m;ee===m&&(ee=e[j]),f?co(r,j,ee):si(r,j,ee)}return r}function Sc(e,n){return Xa(e,fl(e),n)}function _c(e,n){return Xa(e,wu(e),n)}function Si(e,n){return function(r,l){var f=tt(r)?na:Ks,E=n?n():{};return f(r,e,Hn(l,2),E)}}function Go(e){return dt(function(n,r){var l=-1,f=r.length,E=f>1?r[f-1]:m,F=f>2?r[2]:m;for(E=e.length>3&&typeof E=="function"?(f--,E):m,F&&Xr(r[0],r[1],F)&&(E=f<3?m:E,f=1),n=Rn(n);++l<f;){var j=r[l];j&&e(n,j,l,E)}return n})}function pu(e,n){return function(r,l){if(r==null)return r;if(!ia(r))return e(r,l);for(var f=r.length,E=n?f:-1,F=Rn(r);(n?E--:++E<f)&&l(F[E],E,F)!==!1;);return r}}function fu(e){return function(n,r,l){for(var f=-1,E=Rn(n),F=l(n),j=F.length;j--;){var ee=F[e?j:++f];if(r(E[ee],ee,E)===!1)break}return n}}function Bc(e,n,r){var l=n&de,f=hi(e);function E(){var F=this&&this!==un&&this instanceof E?f:e;return F.apply(l?r:this,arguments)}return E}function hu(e){return function(n){n=Pt(n);var r=x(n)?nn(n):m,l=r?r[0]:n.charAt(0),f=r?Bo(r,1).join(""):n.slice(1);return l[e]()+f}}function Jo(e){return function(n){return vo(ps(ds(n).replace(Do,"")),e,"")}}function hi(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=Qo(e.prototype),l=e.apply(r,n);return ar(l)?l:r}}function Tc(e,n,r){var l=hi(e);function f(){for(var E=arguments.length,F=M(E),j=E,ee=ei(f);j--;)F[j]=arguments[j];var Se=E<3&&F[0]!==ee&&F[E-1]!==ee?[]:pe(F,ee);if(E-=Se.length,E<r)return gu(e,n,_i,f.placeholder,m,F,Se,m,m,r-E);var _e=this&&this!==un&&this instanceof f?l:e;return zt(_e,this,F)}return f}function mu(e){return function(n,r,l){var f=Rn(n);if(!ia(n)){var E=Hn(r,3);n=kr(n),r=function(j){return E(f[j],j,f)}}var F=e(n,r,l);return F>-1?f[E?n[F]:F]:m}}function yu(e){return fo(function(n){var r=n.length,l=r,f=_a.prototype.thru;for(e&&n.reverse();l--;){var E=n[l];if(typeof E!="function")throw new $t(G);if(f&&!F&&Ii(E)=="wrapper")var F=new _a([],!0)}for(l=F?l:r;++l<r;){E=n[l];var j=Ii(E),ee=j=="wrapper"?dl(E):m;ee&&ml(ee[0])&&ee[1]==(D|We|dn|ie)&&!ee[4].length&&ee[9]==1?F=F[Ii(ee[0])].apply(F,ee[3]):F=E.length==1&&ml(E)?F[j]():F.thru(E)}return function(){var Se=arguments,_e=Se[0];if(F&&Se.length==1&&tt(_e))return F.plant(_e).value();for(var Ne=0,fn=r?n[Ne].apply(this,Se):_e;++Ne<r;)fn=n[Ne].call(this,fn);return fn}})}function _i(e,n,r,l,f,E,F,j,ee,Se){var _e=n&D,Ne=n&de,fn=n&Ce,_n=n&(We|Ze),$n=n&Oe,st=fn?m:hi(e);function jn(){for(var bt=arguments.length,Et=M(bt),ba=bt;ba--;)Et[ba]=arguments[ba];if(_n)var Qr=ei(jn),Aa=oi(Et,Qr);if(l&&(Et=cu(Et,l,f,_n)),E&&(Et=du(Et,E,F,_n)),bt-=Aa,_n&&bt<Se){var hr=pe(Et,Qr);return gu(e,n,_i,jn.placeholder,r,Et,hr,j,ee,Se-bt)}var Ha=Ne?r:this,bo=fn?Ha[e]:e;return bt=Et.length,j?Et=Kc(Et,j):$n&&bt>1&&Et.reverse(),_e&&ee<bt&&(Et.length=ee),this&&this!==un&&this instanceof jn&&(bo=st||hi(bo)),bo.apply(Ha,Et)}return jn}function bu(e,n){return function(r,l){return rc(r,e,n(l),{})}}function Bi(e,n){return function(r,l){var f;if(r===m&&l===m)return n;if(r!==m&&(f=r),l!==m){if(f===m)return l;typeof r=="string"||typeof l=="string"?(r=ma(r),l=ma(l)):(r=tu(r),l=tu(l)),f=e(r,l)}return f}}function ll(e){return fo(function(n){return n=Rt(n,wr(Hn())),dt(function(r){var l=this;return e(n,function(f){return zt(f,l,r)})})})}function Ti(e,n){n=n===m?" ":ma(n);var r=n.length;if(r<2)return r?el(n,e):n;var l=el(n,k(e/hn(n)));return x(n)?Bo(nn(l),0,e).join(""):l.slice(0,e)}function Dc(e,n,r,l){var f=n&de,E=hi(e);function F(){for(var j=-1,ee=arguments.length,Se=-1,_e=l.length,Ne=M(_e+ee),fn=this&&this!==un&&this instanceof F?E:e;++Se<_e;)Ne[Se]=l[Se];for(;ee--;)Ne[Se++]=arguments[++j];return zt(fn,f?r:this,Ne)}return F}function Au(e){return function(n,r,l){return l&&typeof l!="number"&&Xr(n,r,l)&&(r=l=m),n=yo(n),r===m?(r=n,n=0):r=yo(r),l=l===m?n<r?1:-1:yo(l),mc(n,r,l,e)}}function Di(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=Ia(n),r=Ia(r)),e(n,r)}}function gu(e,n,r,l,f,E,F,j,ee,Se){var _e=n&We,Ne=_e?F:m,fn=_e?m:F,_n=_e?E:m,$n=_e?m:E;n|=_e?dn:U,n&=~(_e?U:dn),n&be||(n&=~(de|Ce));var st=[e,n,f,_n,Ne,$n,fn,j,ee,Se],jn=r.apply(m,st);return ml(e)&&Iu(jn,st),jn.placeholder=l,Lu(jn,e,n)}function ul(e){var n=et[e];return function(r,l){if(r=Ia(r),l=l==null?0:ze(ot(l),292),l&&Qe(r)){var f=(Pt(r)+"e").split("e"),E=n(f[0]+"e"+(+f[1]+l));return f=(Pt(E)+"e").split("e"),+(f[0]+"e"+(+f[1]-l))}return n(r)}}var Ic=Zn&&1/ke(new Zn([,-0]))[1]==Be?function(e){return new Zn(e)}:Dl;function vu(e){return function(n){var r=Hr(n);return r==vn?Z(n):r==Gn?le(n):oo(n,e(n))}}function po(e,n,r,l,f,E,F,j){var ee=n&Ce;if(!ee&&typeof e!="function")throw new $t(G);var Se=l?l.length:0;if(Se||(n&=~(dn|U),l=f=m),F=F===m?F:Ye(ot(F),0),j=j===m?j:ot(j),Se-=f?f.length:0,n&U){var _e=l,Ne=f;l=f=m}var fn=ee?m:dl(e),_n=[e,n,r,l,f,_e,Ne,E,F,j];if(fn&&Wc(_n,fn),e=_n[0],n=_n[1],r=_n[2],l=_n[3],f=_n[4],j=_n[9]=_n[9]===m?ee?0:e.length:Ye(_n[9]-Se,0),!j&&n&(We|Ze)&&(n&=~(We|Ze)),!n||n==de)var $n=Bc(e,n,r);else n==We||n==Ze?$n=Tc(e,n,j):(n==dn||n==(de|dn))&&!f.length?$n=Dc(e,n,r,l):$n=_i.apply(m,_n);var st=fn?eu:Iu;return Lu(st($n,_n),e,n)}function xu(e,n,r,l){return e===m||Na(e,Dt[r])&&!at.call(l,r)?n:e}function Eu(e,n,r,l,f,E){return ar(e)&&ar(n)&&(E.set(n,e),Ci(e,n,m,Eu,E),E.delete(n)),e}function Lc(e){return bi(e)?m:e}function Cu(e,n,r,l,f,E){var F=r&me,j=e.length,ee=n.length;if(j!=ee&&!(F&&ee>j))return!1;var Se=E.get(e),_e=E.get(n);if(Se&&_e)return Se==n&&_e==e;var Ne=-1,fn=!0,_n=r&J?new zo:m;for(E.set(e,n),E.set(n,e);++Ne<j;){var $n=e[Ne],st=n[Ne];if(l)var jn=F?l(st,$n,Ne,n,e,E):l($n,st,Ne,e,n,E);if(jn!==m){if(jn)continue;fn=!1;break}if(_n){if(!xo(n,function(bt,Et){if(!fa(_n,Et)&&($n===bt||f($n,bt,r,l,E)))return _n.push(Et)})){fn=!1;break}}else if(!($n===st||f($n,st,r,l,E))){fn=!1;break}}return E.delete(e),E.delete(n),fn}function Fc(e,n,r,l,f,E,F){switch(r){case we:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Te:return!(e.byteLength!=n.byteLength||!E(new Nr(e),new Nr(n)));case Ke:case an:case ht:return Na(+e,+n);case On:return e.name==n.name&&e.message==n.message;case vt:case kt:return e==n+"";case vn:var j=Z;case Gn:var ee=l&me;if(j||(j=ke),e.size!=n.size&&!ee)return!1;var Se=F.get(e);if(Se)return Se==n;l|=J,F.set(e,n);var _e=Cu(j(e),j(n),l,f,E,F);return F.delete(e),_e;case Ct:if(ui)return ui.call(e)==ui.call(n)}return!1}function Oc(e,n,r,l,f,E){var F=r&me,j=sl(e),ee=j.length,Se=sl(n),_e=Se.length;if(ee!=_e&&!F)return!1;for(var Ne=ee;Ne--;){var fn=j[Ne];if(!(F?fn in n:at.call(n,fn)))return!1}var _n=E.get(e),$n=E.get(n);if(_n&&$n)return _n==n&&$n==e;var st=!0;E.set(e,n),E.set(n,e);for(var jn=F;++Ne<ee;){fn=j[Ne];var bt=e[fn],Et=n[fn];if(l)var ba=F?l(Et,bt,fn,n,e,E):l(bt,Et,fn,e,n,E);if(!(ba===m?bt===Et||f(bt,Et,r,l,E):ba)){st=!1;break}jn||(jn=fn=="constructor")}if(st&&!jn){var Qr=e.constructor,Aa=n.constructor;Qr!=Aa&&"constructor"in e&&"constructor"in n&&!(typeof Qr=="function"&&Qr instanceof Qr&&typeof Aa=="function"&&Aa instanceof Aa)&&(st=!1)}return E.delete(e),E.delete(n),st}function fo(e){return bl(Tu(e,m,zu),e+"")}function sl(e){return Ul(e,kr,fl)}function cl(e){return Ul(e,la,wu)}var dl=Sa?function(e){return Sa.get(e)}:Dl;function Ii(e){for(var n=e.name+"",r=ha[n],l=at.call(ha,n)?r.length:0;l--;){var f=r[l],E=f.func;if(E==null||E==e)return f.name}return n}function ei(e){var n=at.call(A,"placeholder")?A:e;return n.placeholder}function Hn(){var e=A.iteratee||Bl;return e=e===Bl?Wl:e,arguments.length?e(arguments[0],arguments[1]):e}function Li(e,n){var r=e.__data__;return jc(n)?r[typeof n=="string"?"string":"hash"]:r.map}function pl(e){for(var n=kr(e),r=n.length;r--;){var l=n[r],f=e[l];n[r]=[l,f,_u(f)]}return n}function $o(e,n){var r=li(e,n);return Zl(r)?r:m}function Rc(e){var n=at.call(e,d),r=e[d];try{e[d]=m;var l=!0}catch(E){}var f=Ar.call(e);return l&&(n?e[d]=r:delete e[d]),f}var fl=oe?function(e){return e==null?[]:(e=Rn(e),ta(oe(e),function(n){return Va.call(e,n)}))}:Il,wu=oe?function(e){for(var n=[];e;)Yr(n,fl(e)),e=pr(e);return n}:Il,Hr=Kr;(mn&&Hr(new mn(new ArrayBuffer(1)))!=we||nt&&Hr(new nt)!=vn||wt&&Hr(wt.resolve())!=Zt||Zn&&Hr(new Zn)!=Gn||yt&&Hr(new yt)!=Y)&&(Hr=function(e){var n=Kr(e),r=n==Un?e.constructor:m,l=r?jo(r):"";if(l)switch(l){case lo:return we;case Fl:return vn;case gs:return Zt;case vs:return Gn;case xs:return Y}return n});function Pc(e,n,r){for(var l=-1,f=r.length;++l<f;){var E=r[l],F=E.size;switch(E.type){case"drop":e+=F;break;case"dropRight":n-=F;break;case"take":n=ze(n,e+F);break;case"takeRight":e=Ye(e,n-F);break}}return{start:e,end:n}}function Mc(e){var n=e.match(Wt);return n?n[1].split(or):[]}function ku(e,n,r){n=_o(n,e);for(var l=-1,f=n.length,E=!1;++l<f;){var F=Qa(n[l]);if(!(E=e!=null&&r(e,F)))break;e=e[F]}return E||++l!=f?E:(f=e==null?0:e.length,!!f&&Ni(f)&&ho(F,f)&&(tt(e)||Uo(e)))}function zc(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&at.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Su(e){return typeof e.constructor=="function"&&!mi(e)?Qo(pr(e)):{}}function Nc(e,n,r){var l=e.constructor;switch(n){case Te:return il(e);case Ke:case an:return new l(+e);case we:return Ec(e,r);case Xe:case Cn:case Je:case $:case on:case wn:case xn:case qe:case Bn:return uu(e,r);case vn:return new l;case ht:case kt:return new l(e);case vt:return Cc(e);case Gn:return new l;case Ct:return wc(e)}}function Hc(e,n){var r=n.length;if(!r)return e;var l=r-1;return n[l]=(r>1?"& ":"")+n[l],n=n.join(r>2?", ":" "),e.replace(sr,`{
/* [wrapped with `+n+`] */
`)}function $c(e){return tt(e)||Uo(e)||!!(a&&e&&e[a])}function ho(e,n){var r=typeof e;return n=n==null?Ue:n,!!n&&(r=="number"||r!="symbol"&&jr.test(e))&&e>-1&&e%1==0&&e<n}function Xr(e,n,r){if(!ar(r))return!1;var l=typeof n;return(l=="number"?ia(r)&&ho(n,r.length):l=="string"&&n in r)?Na(r[n],e):!1}function hl(e,n){if(tt(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ya(e)?!0:Wn.test(e)||!Dn.test(e)||n!=null&&e in Rn(n)}function jc(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ml(e){var n=Ii(e),r=A[n];if(typeof r!="function"||!(n in gt.prototype))return!1;if(e===r)return!0;var l=dl(r);return!!l&&e===l[0]}function Uc(e){return!!Or&&Or in e}var qc=mt?mo:Ll;function mi(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||Dt;return e===r}function _u(e){return e===e&&!ar(e)}function Bu(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==m||e in Rn(r))}}function Zc(e){var n=Mi(e,function(l){return r.size===C&&r.clear(),l}),r=n.cache;return n}function Wc(e,n){var r=e[1],l=n[1],f=r|l,E=f<(de|Ce|D),F=l==D&&r==We||l==D&&r==ie&&e[7].length<=n[8]||l==(D|ie)&&n[7].length<=n[8]&&r==We;if(!(E||F))return e;l&de&&(e[2]=n[2],f|=r&de?0:be);var j=n[3];if(j){var ee=e[3];e[3]=ee?cu(ee,j,n[4]):j,e[4]=ee?pe(e[3],z):n[4]}return j=n[5],j&&(ee=e[5],e[5]=ee?du(ee,j,n[6]):j,e[6]=ee?pe(e[5],z):n[6]),j=n[7],j&&(e[7]=j),l&D&&(e[8]=e[8]==null?n[8]:ze(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=f,e}function Yc(e){var n=[];if(e!=null)for(var r in Rn(e))n.push(r);return n}function Vc(e){return Ar.call(e)}function Tu(e,n,r){return n=Ye(n===m?e.length-1:n,0),function(){for(var l=arguments,f=-1,E=Ye(l.length-n,0),F=M(E);++f<E;)F[f]=l[n+f];f=-1;for(var j=M(n+1);++f<n;)j[f]=l[f];return j[n]=r(F),zt(e,this,j)}}function Du(e,n){return n.length<2?e:Ho(e,Ta(n,0,-1))}function Kc(e,n){for(var r=e.length,l=ze(n.length,r),f=oa(e);l--;){var E=n[l];e[l]=ho(E,r)?f[E]:m}return e}function yl(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Iu=Fu(eu),yi=h||function(e,n){return un.setTimeout(e,n)},bl=Fu(Ac);function Lu(e,n,r){var l=n+"";return bl(e,Hc(l,Xc(Mc(l),r)))}function Fu(e){var n=0,r=0;return function(){var l=En(),f=Q-(l-r);if(r=l,f>0){if(++n>=ne)return arguments[0]}else n=0;return e.apply(m,arguments)}}function Fi(e,n){var r=-1,l=e.length,f=l-1;for(n=n===m?l:n;++r<n;){var E=Ji(r,f),F=e[E];e[E]=e[r],e[r]=F}return e.length=n,e}var Ou=Zc(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(lt,function(r,l,f,E){n.push(f?E.replace(jt,"$1"):l||r)}),n});function Qa(e){if(typeof e=="string"||ya(e))return e;var n=e+"";return n=="0"&&1/e==-Be?"-0":n}function jo(e){if(e!=null){try{return Xt.call(e)}catch(n){}try{return e+""}catch(n){}}return""}function Xc(e,n){return lr(ve,function(r){var l="_."+r[0];n&r[1]&&!dr(e,l)&&e.push(l)}),e.sort()}function Ru(e){if(e instanceof gt)return e.clone();var n=new _a(e.__wrapped__,e.__chain__);return n.__actions__=oa(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Qc(e,n,r){(r?Xr(e,n,r):n===m)?n=1:n=Ye(ot(n),0);var l=e==null?0:e.length;if(!l||n<1)return[];for(var f=0,E=0,F=M(k(l/n));f<l;)F[E++]=Ta(e,f,f+=n);return F}function Gc(e){for(var n=-1,r=e==null?0:e.length,l=0,f=[];++n<r;){var E=e[n];E&&(f[l++]=E)}return f}function Jc(){var e=arguments.length;if(!e)return[];for(var n=M(e-1),r=arguments[0],l=e;l--;)n[l-1]=arguments[l];return Yr(tt(r)?oa(r):[r],Rr(n,1))}var e0=dt(function(e,n){return fr(e)?ci(e,Rr(n,1,fr,!0)):[]}),n0=dt(function(e,n){var r=Da(n);return fr(r)&&(r=m),fr(e)?ci(e,Rr(n,1,fr,!0),Hn(r,2)):[]}),t0=dt(function(e,n){var r=Da(n);return fr(r)&&(r=m),fr(e)?ci(e,Rr(n,1,fr,!0),m,r):[]});function r0(e,n,r){var l=e==null?0:e.length;return l?(n=r||n===m?1:ot(n),Ta(e,n<0?0:n,l)):[]}function a0(e,n,r){var l=e==null?0:e.length;return l?(n=r||n===m?1:ot(n),n=l-n,Ta(e,0,n<0?0:n)):[]}function o0(e,n){return e&&e.length?ki(e,Hn(n,3),!0,!0):[]}function i0(e,n){return e&&e.length?ki(e,Hn(n,3),!0):[]}function l0(e,n,r,l){var f=e==null?0:e.length;return f?(r&&typeof r!="number"&&Xr(e,n,r)&&(r=0,l=f),Js(e,n,r,l)):[]}function Pu(e,n,r){var l=e==null?0:e.length;if(!l)return-1;var f=r==null?0:ot(r);return f<0&&(f=Ye(l+f,0)),Vr(e,Hn(n,3),f)}function Mu(e,n,r){var l=e==null?0:e.length;if(!l)return-1;var f=l-1;return r!==m&&(f=ot(r),f=r<0?Ye(l+f,0):ze(f,l-1)),Vr(e,Hn(n,3),f,!0)}function zu(e){var n=e==null?0:e.length;return n?Rr(e,1):[]}function u0(e){var n=e==null?0:e.length;return n?Rr(e,Be):[]}function s0(e,n){var r=e==null?0:e.length;return r?(n=n===m?1:ot(n),Rr(e,n)):[]}function c0(e){for(var n=-1,r=e==null?0:e.length,l={};++n<r;){var f=e[n];l[f[0]]=f[1]}return l}function Nu(e){return e&&e.length?e[0]:m}function d0(e,n,r){var l=e==null?0:e.length;if(!l)return-1;var f=r==null?0:ot(r);return f<0&&(f=Ye(l+f,0)),Wa(e,n,f)}function p0(e){var n=e==null?0:e.length;return n?Ta(e,0,-1):[]}var f0=dt(function(e){var n=Rt(e,al);return n.length&&n[0]===e[0]?Vi(n):[]}),h0=dt(function(e){var n=Da(e),r=Rt(e,al);return n===Da(r)?n=m:r.pop(),r.length&&r[0]===e[0]?Vi(r,Hn(n,2)):[]}),m0=dt(function(e){var n=Da(e),r=Rt(e,al);return n=typeof n=="function"?n:m,n&&r.pop(),r.length&&r[0]===e[0]?Vi(r,m,n):[]});function y0(e,n){return e==null?"":ln.call(e,n)}function Da(e){var n=e==null?0:e.length;return n?e[n-1]:m}function b0(e,n,r){var l=e==null?0:e.length;if(!l)return-1;var f=l;return r!==m&&(f=ot(r),f=f<0?Ye(l+f,0):ze(f,l-1)),n===n?sn(e,n,f):Vr(e,Ya,f,!0)}function A0(e,n){return e&&e.length?Xl(e,ot(n)):m}var g0=dt(Hu);function Hu(e,n){return e&&e.length&&n&&n.length?Gi(e,n):e}function v0(e,n,r){return e&&e.length&&n&&n.length?Gi(e,n,Hn(r,2)):e}function x0(e,n,r){return e&&e.length&&n&&n.length?Gi(e,n,m,r):e}var E0=fo(function(e,n){var r=e==null?0:e.length,l=qi(e,n);return Jl(e,Rt(n,function(f){return ho(f,r)?+f:f}).sort(su)),l});function C0(e,n){var r=[];if(!(e&&e.length))return r;var l=-1,f=[],E=e.length;for(n=Hn(n,3);++l<E;){var F=e[l];n(F,l,e)&&(r.push(F),f.push(l))}return Jl(e,f),r}function Al(e){return e==null?e:Kt.call(e)}function w0(e,n,r){var l=e==null?0:e.length;return l?(r&&typeof r!="number"&&Xr(e,n,r)?(n=0,r=l):(n=n==null?0:ot(n),r=r===m?l:ot(r)),Ta(e,n,r)):[]}function k0(e,n){return wi(e,n)}function S0(e,n,r){return nl(e,n,Hn(r,2))}function _0(e,n){var r=e==null?0:e.length;if(r){var l=wi(e,n);if(l<r&&Na(e[l],n))return l}return-1}function B0(e,n){return wi(e,n,!0)}function T0(e,n,r){return nl(e,n,Hn(r,2),!0)}function D0(e,n){var r=e==null?0:e.length;if(r){var l=wi(e,n,!0)-1;if(Na(e[l],n))return l}return-1}function I0(e){return e&&e.length?nu(e):[]}function L0(e,n){return e&&e.length?nu(e,Hn(n,2)):[]}function F0(e){var n=e==null?0:e.length;return n?Ta(e,1,n):[]}function O0(e,n,r){return e&&e.length?(n=r||n===m?1:ot(n),Ta(e,0,n<0?0:n)):[]}function R0(e,n,r){var l=e==null?0:e.length;return l?(n=r||n===m?1:ot(n),n=l-n,Ta(e,n<0?0:n,l)):[]}function P0(e,n){return e&&e.length?ki(e,Hn(n,3),!1,!0):[]}function M0(e,n){return e&&e.length?ki(e,Hn(n,3)):[]}var z0=dt(function(e){return So(Rr(e,1,fr,!0))}),N0=dt(function(e){var n=Da(e);return fr(n)&&(n=m),So(Rr(e,1,fr,!0),Hn(n,2))}),H0=dt(function(e){var n=Da(e);return n=typeof n=="function"?n:m,So(Rr(e,1,fr,!0),m,n)});function $0(e){return e&&e.length?So(e):[]}function j0(e,n){return e&&e.length?So(e,Hn(n,2)):[]}function U0(e,n){return n=typeof n=="function"?n:m,e&&e.length?So(e,m,n):[]}function gl(e){if(!(e&&e.length))return[];var n=0;return e=ta(e,function(r){if(fr(r))return n=Ye(r.length,n),!0}),Eo(n,function(r){return Rt(e,Ro(r))})}function $u(e,n){if(!(e&&e.length))return[];var r=gl(e);return n==null?r:Rt(r,function(l){return zt(n,m,l)})}var q0=dt(function(e,n){return fr(e)?ci(e,n):[]}),Z0=dt(function(e){return rl(ta(e,fr))}),W0=dt(function(e){var n=Da(e);return fr(n)&&(n=m),rl(ta(e,fr),Hn(n,2))}),Y0=dt(function(e){var n=Da(e);return n=typeof n=="function"?n:m,rl(ta(e,fr),m,n)}),V0=dt(gl);function K0(e,n){return ou(e||[],n||[],si)}function X0(e,n){return ou(e||[],n||[],fi)}var Q0=dt(function(e){var n=e.length,r=n>1?e[n-1]:m;return r=typeof r=="function"?(e.pop(),r):m,$u(e,r)});function ju(e){var n=A(e);return n.__chain__=!0,n}function G0(e,n){return n(e),e}function Oi(e,n){return n(e)}var J0=fo(function(e){var n=e.length,r=n?e[0]:0,l=this.__wrapped__,f=function(E){return qi(E,e)};return n>1||this.__actions__.length||!(l instanceof gt)||!ho(r)?this.thru(f):(l=l.slice(r,+r+(n?1:0)),l.__actions__.push({func:Oi,args:[f],thisArg:m}),new _a(l,this.__chain__).thru(function(E){return n&&!E.length&&E.push(m),E}))});function ed(){return ju(this)}function nd(){return new _a(this.value(),this.__chain__)}function td(){this.__values__===m&&(this.__values__=ts(this.value()));var e=this.__index__>=this.__values__.length,n=e?m:this.__values__[this.__index__++];return{done:e,value:n}}function rd(){return this}function ad(e){for(var n,r=this;r instanceof gi;){var l=Ru(r);l.__index__=0,l.__values__=m,n?f.__wrapped__=l:n=l;var f=l;r=r.__wrapped__}return f.__wrapped__=e,n}function od(){var e=this.__wrapped__;if(e instanceof gt){var n=e;return this.__actions__.length&&(n=new gt(this)),n=n.reverse(),n.__actions__.push({func:Oi,args:[Al],thisArg:m}),new _a(n,this.__chain__)}return this.thru(Al)}function id(){return au(this.__wrapped__,this.__actions__)}var ld=Si(function(e,n,r){at.call(e,r)?++e[r]:co(e,r,1)});function ud(e,n,r){var l=tt(e)?go:Gs;return r&&Xr(e,n,r)&&(n=m),l(e,Hn(n,3))}function sd(e,n){var r=tt(e)?ta:$l;return r(e,Hn(n,3))}var cd=mu(Pu),dd=mu(Mu);function pd(e,n){return Rr(Ri(e,n),1)}function fd(e,n){return Rr(Ri(e,n),Be)}function hd(e,n,r){return r=r===m?1:ot(r),Rr(Ri(e,n),r)}function Uu(e,n){var r=tt(e)?lr:ko;return r(e,Hn(n,3))}function qu(e,n){var r=tt(e)?ro:Hl;return r(e,Hn(n,3))}var md=Si(function(e,n,r){at.call(e,r)?e[r].push(n):co(e,r,[n])});function yd(e,n,r,l){e=ia(e)?e:ti(e),r=r&&!l?ot(r):0;var f=e.length;return r<0&&(r=Ye(f+r,0)),Hi(e)?r<=f&&e.indexOf(n,r)>-1:!!f&&Wa(e,n,r)>-1}var bd=dt(function(e,n,r){var l=-1,f=typeof n=="function",E=ia(e)?M(e.length):[];return ko(e,function(F){E[++l]=f?zt(n,F,r):di(F,n,r)}),E}),Ad=Si(function(e,n,r){co(e,r,n)});function Ri(e,n){var r=tt(e)?Rt:Yl;return r(e,Hn(n,3))}function gd(e,n,r,l){return e==null?[]:(tt(n)||(n=n==null?[]:[n]),r=l?m:r,tt(r)||(r=r==null?[]:[r]),Ql(e,n,r))}var vd=Si(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function xd(e,n,r){var l=tt(e)?vo:wa,f=arguments.length<3;return l(e,Hn(n,4),r,f,ko)}function Ed(e,n,r){var l=tt(e)?Oo:wa,f=arguments.length<3;return l(e,Hn(n,4),r,f,Hl)}function Cd(e,n){var r=tt(e)?ta:$l;return r(e,zi(Hn(n,3)))}function wd(e){var n=tt(e)?Pl:yc;return n(e)}function kd(e,n,r){(r?Xr(e,n,r):n===m)?n=1:n=ot(n);var l=tt(e)?Ys:bc;return l(e,n)}function Sd(e){var n=tt(e)?Vs:gc;return n(e)}function _d(e){if(e==null)return 0;if(ia(e))return Hi(e)?hn(e):e.length;var n=Hr(e);return n==vn||n==Gn?e.size:Xi(e).length}function Bd(e,n,r){var l=tt(e)?xo:vc;return r&&Xr(e,n,r)&&(n=m),l(e,Hn(n,3))}var Td=dt(function(e,n){if(e==null)return[];var r=n.length;return r>1&&Xr(e,n[0],n[1])?n=[]:r>2&&Xr(n[0],n[1],n[2])&&(n=[n[0]]),Ql(e,Rr(n,1),[])}),Pi=s||function(){return un.Date.now()};function Dd(e,n){if(typeof n!="function")throw new $t(G);return e=ot(e),function(){if(--e<1)return n.apply(this,arguments)}}function Zu(e,n,r){return n=r?m:n,n=e&&n==null?e.length:n,po(e,D,m,m,m,m,n)}function Wu(e,n){var r;if(typeof n!="function")throw new $t(G);return e=ot(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=m),r}}var vl=dt(function(e,n,r){var l=de;if(r.length){var f=pe(r,ei(vl));l|=dn}return po(e,l,n,r,f)}),Yu=dt(function(e,n,r){var l=de|Ce;if(r.length){var f=pe(r,ei(Yu));l|=dn}return po(n,l,e,r,f)});function Vu(e,n,r){n=r?m:n;var l=po(e,We,m,m,m,m,m,n);return l.placeholder=Vu.placeholder,l}function Ku(e,n,r){n=r?m:n;var l=po(e,Ze,m,m,m,m,m,n);return l.placeholder=Ku.placeholder,l}function Xu(e,n,r){var l,f,E,F,j,ee,Se=0,_e=!1,Ne=!1,fn=!0;if(typeof e!="function")throw new $t(G);n=Ia(n)||0,ar(r)&&(_e=!!r.leading,Ne="maxWait"in r,E=Ne?Ye(Ia(r.maxWait)||0,n):E,fn="trailing"in r?!!r.trailing:fn);function _n(hr){var Ha=l,bo=f;return l=f=m,Se=hr,F=e.apply(bo,Ha),F}function $n(hr){return Se=hr,j=yi(bt,n),_e?_n(hr):F}function st(hr){var Ha=hr-ee,bo=hr-Se,ms=n-Ha;return Ne?ze(ms,E-bo):ms}function jn(hr){var Ha=hr-ee,bo=hr-Se;return ee===m||Ha>=n||Ha<0||Ne&&bo>=E}function bt(){var hr=Pi();if(jn(hr))return Et(hr);j=yi(bt,st(hr))}function Et(hr){return j=m,fn&&l?_n(hr):(l=f=m,F)}function ba(){j!==m&&iu(j),Se=0,l=ee=f=j=m}function Qr(){return j===m?F:Et(Pi())}function Aa(){var hr=Pi(),Ha=jn(hr);if(l=arguments,f=this,ee=hr,Ha){if(j===m)return $n(ee);if(Ne)return iu(j),j=yi(bt,n),_n(ee)}return j===m&&(j=yi(bt,n)),F}return Aa.cancel=ba,Aa.flush=Qr,Aa}var Id=dt(function(e,n){return Nl(e,1,n)}),Ld=dt(function(e,n,r){return Nl(e,Ia(n)||0,r)});function Fd(e){return po(e,Oe)}function Mi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new $t(G);var r=function(){var l=arguments,f=n?n.apply(this,l):l[0],E=r.cache;if(E.has(f))return E.get(f);var F=e.apply(this,l);return r.cache=E.set(f,F)||E,F};return r.cache=new(Mi.Cache||so),r}Mi.Cache=so;function zi(e){if(typeof e!="function")throw new $t(G);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Od(e){return Wu(2,e)}var Rd=xc(function(e,n){n=n.length==1&&tt(n[0])?Rt(n[0],wr(Hn())):Rt(Rr(n,1),wr(Hn()));var r=n.length;return dt(function(l){for(var f=-1,E=ze(l.length,r);++f<E;)l[f]=n[f].call(this,l[f]);return zt(e,this,l)})}),xl=dt(function(e,n){var r=pe(n,ei(xl));return po(e,dn,m,n,r)}),Qu=dt(function(e,n){var r=pe(n,ei(Qu));return po(e,U,m,n,r)}),Pd=fo(function(e,n){return po(e,ie,m,m,m,n)});function Md(e,n){if(typeof e!="function")throw new $t(G);return n=n===m?n:ot(n),dt(e,n)}function zd(e,n){if(typeof e!="function")throw new $t(G);return n=n==null?0:Ye(ot(n),0),dt(function(r){var l=r[n],f=Bo(r,0,n);return l&&Yr(f,l),zt(e,this,f)})}function Nd(e,n,r){var l=!0,f=!0;if(typeof e!="function")throw new $t(G);return ar(r)&&(l="leading"in r?!!r.leading:l,f="trailing"in r?!!r.trailing:f),Xu(e,n,{leading:l,maxWait:n,trailing:f})}function Hd(e){return Zu(e,1)}function $d(e,n){return xl(ol(n),e)}function jd(){if(!arguments.length)return[];var e=arguments[0];return tt(e)?e:[e]}function Ud(e){return Ba(e,te)}function qd(e,n){return n=typeof n=="function"?n:m,Ba(e,te,n)}function Zd(e){return Ba(e,O|te)}function Wd(e,n){return n=typeof n=="function"?n:m,Ba(e,O|te,n)}function Yd(e,n){return n==null||zl(e,n,kr(n))}function Na(e,n){return e===n||e!==e&&n!==n}var Vd=Di(Yi),Kd=Di(function(e,n){return e>=n}),Uo=ql(function(){return arguments}())?ql:function(e){return ur(e)&&at.call(e,"callee")&&!Va.call(e,"callee")},tt=M.isArray,Xd=Mn?wr(Mn):ac;function ia(e){return e!=null&&Ni(e.length)&&!mo(e)}function fr(e){return ur(e)&&ia(e)}function Qd(e){return e===!0||e===!1||ur(e)&&Kr(e)==Ke}var To=ye||Ll,Gd=Yn?wr(Yn):oc;function Jd(e){return ur(e)&&e.nodeType===1&&!bi(e)}function ep(e){if(e==null)return!0;if(ia(e)&&(tt(e)||typeof e=="string"||typeof e.splice=="function"||To(e)||ni(e)||Uo(e)))return!e.length;var n=Hr(e);if(n==vn||n==Gn)return!e.size;if(mi(e))return!Xi(e).length;for(var r in e)if(at.call(e,r))return!1;return!0}function np(e,n){return pi(e,n)}function tp(e,n,r){r=typeof r=="function"?r:m;var l=r?r(e,n):m;return l===m?pi(e,n,m,r):!!l}function El(e){if(!ur(e))return!1;var n=Kr(e);return n==On||n==In||typeof e.message=="string"&&typeof e.name=="string"&&!bi(e)}function rp(e){return typeof e=="number"&&Qe(e)}function mo(e){if(!ar(e))return!1;var n=Kr(e);return n==gn||n==Qn||n==Ee||n==Mt}function Gu(e){return typeof e=="number"&&e==ot(e)}function Ni(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ue}function ar(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ur(e){return e!=null&&typeof e=="object"}var Ju=qn?wr(qn):lc;function ap(e,n){return e===n||Ki(e,n,pl(n))}function op(e,n,r){return r=typeof r=="function"?r:m,Ki(e,n,pl(n),r)}function ip(e){return es(e)&&e!=+e}function lp(e){if(qc(e))throw new en(Fe);return Zl(e)}function up(e){return e===null}function sp(e){return e==null}function es(e){return typeof e=="number"||ur(e)&&Kr(e)==ht}function bi(e){if(!ur(e)||Kr(e)!=Un)return!1;var n=pr(e);if(n===null)return!0;var r=at.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Xt.call(r)==Tn}var Cl=Jn?wr(Jn):uc;function cp(e){return Gu(e)&&e>=-Ue&&e<=Ue}var ns=ut?wr(ut):sc;function Hi(e){return typeof e=="string"||!tt(e)&&ur(e)&&Kr(e)==kt}function ya(e){return typeof e=="symbol"||ur(e)&&Kr(e)==Ct}var ni=Qt?wr(Qt):cc;function dp(e){return e===m}function pp(e){return ur(e)&&Hr(e)==Y}function fp(e){return ur(e)&&Kr(e)==Ie}var hp=Di(Qi),mp=Di(function(e,n){return e<=n});function ts(e){if(!e)return[];if(ia(e))return Hi(e)?nn(e):oa(e);if(i&&e[i])return q(e[i]());var n=Hr(e),r=n==vn?Z:n==Gn?ke:ti;return r(e)}function yo(e){if(!e)return e===0?e:0;if(e=Ia(e),e===Be||e===-Be){var n=e<0?-1:1;return n*ge}return e===e?e:0}function ot(e){var n=yo(e),r=n%1;return n===n?r?n-r:n:0}function rs(e){return e?No(ot(e),0,cn):0}function Ia(e){if(typeof e=="number")return e;if(ya(e))return Ge;if(ar(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ar(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Vo(e);var r=$r.test(e);return r||Br.test(e)?ce(e.slice(2),r?2:8):_r.test(e)?Ge:+e}function as(e){return Xa(e,la(e))}function yp(e){return e?No(ot(e),-Ue,Ue):e===0?e:0}function Pt(e){return e==null?"":ma(e)}var bp=Go(function(e,n){if(mi(n)||ia(n)){Xa(n,kr(n),e);return}for(var r in n)at.call(n,r)&&si(e,r,n[r])}),os=Go(function(e,n){Xa(n,la(n),e)}),$i=Go(function(e,n,r,l){Xa(n,la(n),e,l)}),Ap=Go(function(e,n,r,l){Xa(n,kr(n),e,l)}),gp=fo(qi);function vp(e,n){var r=Qo(e);return n==null?r:Ml(r,n)}var xp=dt(function(e,n){e=Rn(e);var r=-1,l=n.length,f=l>2?n[2]:m;for(f&&Xr(n[0],n[1],f)&&(l=1);++r<l;)for(var E=n[r],F=la(E),j=-1,ee=F.length;++j<ee;){var Se=F[j],_e=e[Se];(_e===m||Na(_e,Dt[Se])&&!at.call(e,Se))&&(e[Se]=E[Se])}return e}),Ep=dt(function(e){return e.push(m,Eu),zt(is,m,e)});function Cp(e,n){return Zo(e,Hn(n,3),Ka)}function wp(e,n){return Zo(e,Hn(n,3),Wi)}function kp(e,n){return e==null?e:Zi(e,Hn(n,3),la)}function Sp(e,n){return e==null?e:jl(e,Hn(n,3),la)}function _p(e,n){return e&&Ka(e,Hn(n,3))}function Bp(e,n){return e&&Wi(e,Hn(n,3))}function Tp(e){return e==null?[]:Ei(e,kr(e))}function Dp(e){return e==null?[]:Ei(e,la(e))}function wl(e,n,r){var l=e==null?m:Ho(e,n);return l===m?r:l}function Ip(e,n){return e!=null&&ku(e,n,ec)}function kl(e,n){return e!=null&&ku(e,n,nc)}var Lp=bu(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ar.call(n)),e[n]=r},_l(ua)),Fp=bu(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ar.call(n)),at.call(e,n)?e[n].push(r):e[n]=[r]},Hn),Op=dt(di);function kr(e){return ia(e)?Rl(e):Xi(e)}function la(e){return ia(e)?Rl(e,!0):dc(e)}function Rp(e,n){var r={};return n=Hn(n,3),Ka(e,function(l,f,E){co(r,n(l,f,E),l)}),r}function Pp(e,n){var r={};return n=Hn(n,3),Ka(e,function(l,f,E){co(r,f,n(l,f,E))}),r}var Mp=Go(function(e,n,r){Ci(e,n,r)}),is=Go(function(e,n,r,l){Ci(e,n,r,l)}),zp=fo(function(e,n){var r={};if(e==null)return r;var l=!1;n=Rt(n,function(E){return E=_o(E,e),l||(l=E.length>1),E}),Xa(e,cl(e),r),l&&(r=Ba(r,O|g|te,Lc));for(var f=n.length;f--;)tl(r,n[f]);return r});function Np(e,n){return ls(e,zi(Hn(n)))}var Hp=fo(function(e,n){return e==null?{}:fc(e,n)});function ls(e,n){if(e==null)return{};var r=Rt(cl(e),function(l){return[l]});return n=Hn(n),Gl(e,r,function(l,f){return n(l,f[0])})}function $p(e,n,r){n=_o(n,e);var l=-1,f=n.length;for(f||(f=1,e=m);++l<f;){var E=e==null?m:e[Qa(n[l])];E===m&&(l=f,E=r),e=mo(E)?E.call(e):E}return e}function jp(e,n,r){return e==null?e:fi(e,n,r)}function Up(e,n,r,l){return l=typeof l=="function"?l:m,e==null?e:fi(e,n,r,l)}var us=vu(kr),ss=vu(la);function qp(e,n,r){var l=tt(e),f=l||To(e)||ni(e);if(n=Hn(n,4),r==null){var E=e&&e.constructor;f?r=l?new E:[]:ar(e)?r=mo(E)?Qo(pr(e)):{}:r={}}return(f?lr:Ka)(e,function(F,j,ee){return n(r,F,j,ee)}),r}function Zp(e,n){return e==null?!0:tl(e,n)}function Wp(e,n,r){return e==null?e:ru(e,n,ol(r))}function Yp(e,n,r,l){return l=typeof l=="function"?l:m,e==null?e:ru(e,n,ol(r),l)}function ti(e){return e==null?[]:Co(e,kr(e))}function Vp(e){return e==null?[]:Co(e,la(e))}function Kp(e,n,r){return r===m&&(r=n,n=m),r!==m&&(r=Ia(r),r=r===r?r:0),n!==m&&(n=Ia(n),n=n===n?n:0),No(Ia(e),n,r)}function Xp(e,n,r){return n=yo(n),r===m?(r=n,n=0):r=yo(r),e=Ia(e),tc(e,n,r)}function Qp(e,n,r){if(r&&typeof r!="boolean"&&Xr(e,n,r)&&(n=r=m),r===m&&(typeof n=="boolean"?(r=n,n=m):typeof e=="boolean"&&(r=e,e=m)),e===m&&n===m?(e=0,n=1):(e=yo(e),n===m?(n=e,e=0):n=yo(n)),e>n){var l=e;e=n,n=l}if(r||e%1||n%1){var f=Jt();return ze(e+f*(n-e+K("1e-"+((f+"").length-1))),n)}return Ji(e,n)}var Gp=Jo(function(e,n,r){return n=n.toLowerCase(),e+(r?cs(n):n)});function cs(e){return Sl(Pt(e).toLowerCase())}function ds(e){return e=Pt(e),e&&e.replace(sa,io).replace(Io,"")}function Jp(e,n,r){e=Pt(e),n=ma(n);var l=e.length;r=r===m?l:No(ot(r),0,l);var f=r;return r-=n.length,r>=0&&e.slice(r,f)==n}function ef(e){return e=Pt(e),e&&he.test(e)?e.replace(Ot,ii):e}function nf(e){return e=Pt(e),e&&Ht.test(e)?e.replace(It,"\\$&"):e}var tf=Jo(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),rf=Jo(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),af=hu("toLowerCase");function of(e,n,r){e=Pt(e),n=ot(n);var l=n?hn(e):0;if(!n||l>=n)return e;var f=(n-l)/2;return Ti(S(f),r)+e+Ti(k(f),r)}function lf(e,n,r){e=Pt(e),n=ot(n);var l=n?hn(e):0;return n&&l<n?e+Ti(n-l,r):e}function uf(e,n,r){e=Pt(e),n=ot(n);var l=n?hn(e):0;return n&&l<n?Ti(n-l,r)+e:e}function sf(e,n,r){return r||n==null?n=0:n&&(n=+n),Nn(Pt(e).replace(Bt,""),n||0)}function cf(e,n,r){return(r?Xr(e,n,r):n===m)?n=1:n=ot(n),el(Pt(e),n)}function df(){var e=arguments,n=Pt(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var pf=Jo(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function ff(e,n,r){return r&&typeof r!="number"&&Xr(e,n,r)&&(n=r=m),r=r===m?cn:r>>>0,r?(e=Pt(e),e&&(typeof n=="string"||n!=null&&!Cl(n))&&(n=ma(n),!n&&x(e))?Bo(nn(e),0,r):e.split(n,r)):[]}var hf=Jo(function(e,n,r){return e+(r?" ":"")+Sl(n)});function mf(e,n,r){return e=Pt(e),r=r==null?0:No(ot(r),0,e.length),n=ma(n),e.slice(r,r+n.length)==n}function yf(e,n,r){var l=A.templateSettings;r&&Xr(e,n,r)&&(n=m),e=Pt(e),n=$i({},n,l,xu);var f=$i({},n.imports,l.imports,xu),E=kr(f),F=Co(f,E),j,ee,Se=0,_e=n.interpolate||Ur,Ne="__p += '",fn=Ut((n.escape||Ur).source+"|"+_e.source+"|"+(_e===An?mr:Ur).source+"|"+(n.evaluate||Ur).source+"|$","g"),_n="//# sourceURL="+(at.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++c+"]")+`
`;e.replace(fn,function(jn,bt,Et,ba,Qr,Aa){return Et||(Et=ba),Ne+=e.slice(Se,Aa).replace(Tr,Xo),bt&&(j=!0,Ne+=`' +
__e(`+bt+`) +
'`),Qr&&(ee=!0,Ne+=`';
`+Qr+`;
__p += '`),Et&&(Ne+=`' +
((__t = (`+Et+`)) == null ? '' : __t) +
'`),Se=Aa+jn.length,jn}),Ne+=`';
`;var $n=at.call(n,"variable")&&n.variable;if(!$n)Ne=`with (obj) {
`+Ne+`
}
`;else if(nr.test($n))throw new en(re);Ne=(ee?Ne.replace(it,""):Ne).replace(xt,"$1").replace(Ft,"$1;"),Ne="function("+($n||"obj")+`) {
`+($n?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(j?", __e = _.escape":"")+(ee?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Ne+`return __p
}`;var st=fs(function(){return yn(E,_n+"return "+Ne).apply(m,F)});if(st.source=Ne,El(st))throw st;return st}function bf(e){return Pt(e).toLowerCase()}function Af(e){return Pt(e).toUpperCase()}function gf(e,n,r){if(e=Pt(e),e&&(r||n===m))return Vo(e);if(!e||!(n=ma(n)))return e;var l=nn(e),f=nn(n),E=Ko(l,f),F=wo(l,f)+1;return Bo(l,E,F).join("")}function vf(e,n,r){if(e=Pt(e),e&&(r||n===m))return e.slice(0,kn(e)+1);if(!e||!(n=ma(n)))return e;var l=nn(e),f=wo(l,nn(n))+1;return Bo(l,0,f).join("")}function xf(e,n,r){if(e=Pt(e),e&&(r||n===m))return e.replace(Bt,"");if(!e||!(n=ma(n)))return e;var l=nn(e),f=Ko(l,nn(n));return Bo(l,f).join("")}function Ef(e,n){var r=Re,l=T;if(ar(n)){var f="separator"in n?n.separator:f;r="length"in n?ot(n.length):r,l="omission"in n?ma(n.omission):l}e=Pt(e);var E=e.length;if(x(e)){var F=nn(e);E=F.length}if(r>=E)return e;var j=r-hn(l);if(j<1)return l;var ee=F?Bo(F,0,j).join(""):e.slice(0,j);if(f===m)return ee+l;if(F&&(j+=ee.length-j),Cl(f)){if(e.slice(j).search(f)){var Se,_e=ee;for(f.global||(f=Ut(f.source,Pt(Sr.exec(f))+"g")),f.lastIndex=0;Se=f.exec(_e);)var Ne=Se.index;ee=ee.slice(0,Ne===m?j:Ne)}}else if(e.indexOf(ma(f),j)!=j){var fn=ee.lastIndexOf(f);fn>-1&&(ee=ee.slice(0,fn))}return ee+l}function Cf(e){return e=Pt(e),e&&He.test(e)?e.replace(St,Sn):e}var wf=Jo(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Sl=hu("toUpperCase");function ps(e,n,r){return e=Pt(e),n=r?m:n,n===m?N(e)?zn(e):qo(e):e.match(n)||[]}var fs=dt(function(e,n){try{return zt(e,m,n)}catch(r){return El(r)?r:new en(r)}}),kf=fo(function(e,n){return lr(n,function(r){r=Qa(r),co(e,r,vl(e[r],e))}),e});function Sf(e){var n=e==null?0:e.length,r=Hn();return e=n?Rt(e,function(l){if(typeof l[1]!="function")throw new $t(G);return[r(l[0]),l[1]]}):[],dt(function(l){for(var f=-1;++f<n;){var E=e[f];if(zt(E[0],this,l))return zt(E[1],this,l)}})}function _f(e){return Qs(Ba(e,O))}function _l(e){return function(){return e}}function Bf(e,n){return e==null||e!==e?n:e}var Tf=yu(),Df=yu(!0);function ua(e){return e}function Bl(e){return Wl(typeof e=="function"?e:Ba(e,O))}function If(e){return Vl(Ba(e,O))}function Lf(e,n){return Kl(e,Ba(n,O))}var Ff=dt(function(e,n){return function(r){return di(r,e,n)}}),Of=dt(function(e,n){return function(r){return di(e,r,n)}});function Tl(e,n,r){var l=kr(n),f=Ei(n,l);r==null&&!(ar(n)&&(f.length||!l.length))&&(r=n,n=e,e=this,f=Ei(n,kr(n)));var E=!(ar(r)&&"chain"in r)||!!r.chain,F=mo(e);return lr(f,function(j){var ee=n[j];e[j]=ee,F&&(e.prototype[j]=function(){var Se=this.__chain__;if(E||Se){var _e=e(this.__wrapped__),Ne=_e.__actions__=oa(this.__actions__);return Ne.push({func:ee,args:arguments,thisArg:e}),_e.__chain__=Se,_e}return ee.apply(e,Yr([this.value()],arguments))})}),e}function Rf(){return un._===this&&(un._=ft),this}function Dl(){}function Pf(e){return e=ot(e),dt(function(n){return Xl(n,e)})}var Mf=ll(Rt),zf=ll(go),Nf=ll(xo);function hs(e){return hl(e)?Ro(Qa(e)):hc(e)}function Hf(e){return function(n){return e==null?m:Ho(e,n)}}var $f=Au(),jf=Au(!0);function Il(){return[]}function Ll(){return!1}function Uf(){return{}}function qf(){return""}function Zf(){return!0}function Wf(e,n){if(e=ot(e),e<1||e>Ue)return[];var r=cn,l=ze(e,cn);n=Hn(n),e-=cn;for(var f=Eo(l,n);++r<e;)n(r);return f}function Yf(e){return tt(e)?Rt(e,Qa):ya(e)?[e]:oa(Ou(Pt(e)))}function Vf(e){var n=++aa;return Pt(e)+n}var Kf=Bi(function(e,n){return e+n},0),Xf=ul("ceil"),Qf=Bi(function(e,n){return e/n},1),Gf=ul("floor");function Jf(e){return e&&e.length?xi(e,ua,Yi):m}function e1(e,n){return e&&e.length?xi(e,Hn(n,2),Yi):m}function n1(e){return Wo(e,ua)}function t1(e,n){return Wo(e,Hn(n,2))}function r1(e){return e&&e.length?xi(e,ua,Qi):m}function a1(e,n){return e&&e.length?xi(e,Hn(n,2),Qi):m}var o1=Bi(function(e,n){return e*n},1),i1=ul("round"),l1=Bi(function(e,n){return e-n},0);function u1(e){return e&&e.length?Po(e,ua):0}function s1(e,n){return e&&e.length?Po(e,Hn(n,2)):0}return A.after=Dd,A.ary=Zu,A.assign=bp,A.assignIn=os,A.assignInWith=$i,A.assignWith=Ap,A.at=gp,A.before=Wu,A.bind=vl,A.bindAll=kf,A.bindKey=Yu,A.castArray=jd,A.chain=ju,A.chunk=Qc,A.compact=Gc,A.concat=Jc,A.cond=Sf,A.conforms=_f,A.constant=_l,A.countBy=ld,A.create=vp,A.curry=Vu,A.curryRight=Ku,A.debounce=Xu,A.defaults=xp,A.defaultsDeep=Ep,A.defer=Id,A.delay=Ld,A.difference=e0,A.differenceBy=n0,A.differenceWith=t0,A.drop=r0,A.dropRight=a0,A.dropRightWhile=o0,A.dropWhile=i0,A.fill=l0,A.filter=sd,A.flatMap=pd,A.flatMapDeep=fd,A.flatMapDepth=hd,A.flatten=zu,A.flattenDeep=u0,A.flattenDepth=s0,A.flip=Fd,A.flow=Tf,A.flowRight=Df,A.fromPairs=c0,A.functions=Tp,A.functionsIn=Dp,A.groupBy=md,A.initial=p0,A.intersection=f0,A.intersectionBy=h0,A.intersectionWith=m0,A.invert=Lp,A.invertBy=Fp,A.invokeMap=bd,A.iteratee=Bl,A.keyBy=Ad,A.keys=kr,A.keysIn=la,A.map=Ri,A.mapKeys=Rp,A.mapValues=Pp,A.matches=If,A.matchesProperty=Lf,A.memoize=Mi,A.merge=Mp,A.mergeWith=is,A.method=Ff,A.methodOf=Of,A.mixin=Tl,A.negate=zi,A.nthArg=Pf,A.omit=zp,A.omitBy=Np,A.once=Od,A.orderBy=gd,A.over=Mf,A.overArgs=Rd,A.overEvery=zf,A.overSome=Nf,A.partial=xl,A.partialRight=Qu,A.partition=vd,A.pick=Hp,A.pickBy=ls,A.property=hs,A.propertyOf=Hf,A.pull=g0,A.pullAll=Hu,A.pullAllBy=v0,A.pullAllWith=x0,A.pullAt=E0,A.range=$f,A.rangeRight=jf,A.rearg=Pd,A.reject=Cd,A.remove=C0,A.rest=Md,A.reverse=Al,A.sampleSize=kd,A.set=jp,A.setWith=Up,A.shuffle=Sd,A.slice=w0,A.sortBy=Td,A.sortedUniq=I0,A.sortedUniqBy=L0,A.split=ff,A.spread=zd,A.tail=F0,A.take=O0,A.takeRight=R0,A.takeRightWhile=P0,A.takeWhile=M0,A.tap=G0,A.throttle=Nd,A.thru=Oi,A.toArray=ts,A.toPairs=us,A.toPairsIn=ss,A.toPath=Yf,A.toPlainObject=as,A.transform=qp,A.unary=Hd,A.union=z0,A.unionBy=N0,A.unionWith=H0,A.uniq=$0,A.uniqBy=j0,A.uniqWith=U0,A.unset=Zp,A.unzip=gl,A.unzipWith=$u,A.update=Wp,A.updateWith=Yp,A.values=ti,A.valuesIn=Vp,A.without=q0,A.words=ps,A.wrap=$d,A.xor=Z0,A.xorBy=W0,A.xorWith=Y0,A.zip=V0,A.zipObject=K0,A.zipObjectDeep=X0,A.zipWith=Q0,A.entries=us,A.entriesIn=ss,A.extend=os,A.extendWith=$i,Tl(A,A),A.add=Kf,A.attempt=fs,A.camelCase=Gp,A.capitalize=cs,A.ceil=Xf,A.clamp=Kp,A.clone=Ud,A.cloneDeep=Zd,A.cloneDeepWith=Wd,A.cloneWith=qd,A.conformsTo=Yd,A.deburr=ds,A.defaultTo=Bf,A.divide=Qf,A.endsWith=Jp,A.eq=Na,A.escape=ef,A.escapeRegExp=nf,A.every=ud,A.find=cd,A.findIndex=Pu,A.findKey=Cp,A.findLast=dd,A.findLastIndex=Mu,A.findLastKey=wp,A.floor=Gf,A.forEach=Uu,A.forEachRight=qu,A.forIn=kp,A.forInRight=Sp,A.forOwn=_p,A.forOwnRight=Bp,A.get=wl,A.gt=Vd,A.gte=Kd,A.has=Ip,A.hasIn=kl,A.head=Nu,A.identity=ua,A.includes=yd,A.indexOf=d0,A.inRange=Xp,A.invoke=Op,A.isArguments=Uo,A.isArray=tt,A.isArrayBuffer=Xd,A.isArrayLike=ia,A.isArrayLikeObject=fr,A.isBoolean=Qd,A.isBuffer=To,A.isDate=Gd,A.isElement=Jd,A.isEmpty=ep,A.isEqual=np,A.isEqualWith=tp,A.isError=El,A.isFinite=rp,A.isFunction=mo,A.isInteger=Gu,A.isLength=Ni,A.isMap=Ju,A.isMatch=ap,A.isMatchWith=op,A.isNaN=ip,A.isNative=lp,A.isNil=sp,A.isNull=up,A.isNumber=es,A.isObject=ar,A.isObjectLike=ur,A.isPlainObject=bi,A.isRegExp=Cl,A.isSafeInteger=cp,A.isSet=ns,A.isString=Hi,A.isSymbol=ya,A.isTypedArray=ni,A.isUndefined=dp,A.isWeakMap=pp,A.isWeakSet=fp,A.join=y0,A.kebabCase=tf,A.last=Da,A.lastIndexOf=b0,A.lowerCase=rf,A.lowerFirst=af,A.lt=hp,A.lte=mp,A.max=Jf,A.maxBy=e1,A.mean=n1,A.meanBy=t1,A.min=r1,A.minBy=a1,A.stubArray=Il,A.stubFalse=Ll,A.stubObject=Uf,A.stubString=qf,A.stubTrue=Zf,A.multiply=o1,A.nth=A0,A.noConflict=Rf,A.noop=Dl,A.now=Pi,A.pad=of,A.padEnd=lf,A.padStart=uf,A.parseInt=sf,A.random=Qp,A.reduce=xd,A.reduceRight=Ed,A.repeat=cf,A.replace=df,A.result=$p,A.round=i1,A.runInContext=P,A.sample=wd,A.size=_d,A.snakeCase=pf,A.some=Bd,A.sortedIndex=k0,A.sortedIndexBy=S0,A.sortedIndexOf=_0,A.sortedLastIndex=B0,A.sortedLastIndexBy=T0,A.sortedLastIndexOf=D0,A.startCase=hf,A.startsWith=mf,A.subtract=l1,A.sum=u1,A.sumBy=s1,A.template=yf,A.times=Wf,A.toFinite=yo,A.toInteger=ot,A.toLength=rs,A.toLower=bf,A.toNumber=Ia,A.toSafeInteger=yp,A.toString=Pt,A.toUpper=Af,A.trim=gf,A.trimEnd=vf,A.trimStart=xf,A.truncate=Ef,A.unescape=Cf,A.uniqueId=Vf,A.upperCase=wf,A.upperFirst=Sl,A.each=Uu,A.eachRight=qu,A.first=Nu,Tl(A,function(){var e={};return Ka(A,function(n,r){at.call(A.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),A.VERSION=w,lr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){A[e].placeholder=A}),lr(["drop","take"],function(e,n){gt.prototype[e]=function(r){r=r===m?1:Ye(ot(r),0);var l=this.__filtered__&&!n?new gt(this):this.clone();return l.__filtered__?l.__takeCount__=ze(r,l.__takeCount__):l.__views__.push({size:ze(r,cn),type:e+(l.__dir__<0?"Right":"")}),l},gt.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),lr(["filter","map","takeWhile"],function(e,n){var r=n+1,l=r==W||r==Ae;gt.prototype[e]=function(f){var E=this.clone();return E.__iteratees__.push({iteratee:Hn(f,3),type:r}),E.__filtered__=E.__filtered__||l,E}}),lr(["head","last"],function(e,n){var r="take"+(n?"Right":"");gt.prototype[e]=function(){return this[r](1).value()[0]}}),lr(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");gt.prototype[e]=function(){return this.__filtered__?new gt(this):this[r](1)}}),gt.prototype.compact=function(){return this.filter(ua)},gt.prototype.find=function(e){return this.filter(e).head()},gt.prototype.findLast=function(e){return this.reverse().find(e)},gt.prototype.invokeMap=dt(function(e,n){return typeof e=="function"?new gt(this):this.map(function(r){return di(r,e,n)})}),gt.prototype.reject=function(e){return this.filter(zi(Hn(e)))},gt.prototype.slice=function(e,n){e=ot(e);var r=this;return r.__filtered__&&(e>0||n<0)?new gt(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==m&&(n=ot(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},gt.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},gt.prototype.toArray=function(){return this.take(cn)},Ka(gt.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),f=A[l?"take"+(n=="last"?"Right":""):n],E=l||/^find/.test(n);f&&(A.prototype[n]=function(){var F=this.__wrapped__,j=l?[1]:arguments,ee=F instanceof gt,Se=j[0],_e=ee||tt(F),Ne=function(bt){var Et=f.apply(A,Yr([bt],j));return l&&fn?Et[0]:Et};_e&&r&&typeof Se=="function"&&Se.length!=1&&(ee=_e=!1);var fn=this.__chain__,_n=!!this.__actions__.length,$n=E&&!fn,st=ee&&!_n;if(!E&&_e){F=st?F:new gt(this);var jn=e.apply(F,j);return jn.__actions__.push({func:Oi,args:[Ne],thisArg:m}),new _a(jn,fn)}return $n&&st?e.apply(this,j):(jn=this.thru(Ne),$n?l?jn.value()[0]:jn.value():jn)})}),lr(["pop","push","shift","sort","splice","unshift"],function(e){var n=Vt[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);A.prototype[e]=function(){var f=arguments;if(l&&!this.__chain__){var E=this.value();return n.apply(tt(E)?E:[],f)}return this[r](function(F){return n.apply(tt(F)?F:[],f)})}}),Ka(gt.prototype,function(e,n){var r=A[n];if(r){var l=r.name+"";at.call(ha,l)||(ha[l]=[]),ha[l].push({name:n,func:r})}}),ha[_i(m,Ce).name]=[{name:"wrapper",func:m}],gt.prototype.clone=Es,gt.prototype.reverse=Cs,gt.prototype.value=ws,A.prototype.at=J0,A.prototype.chain=ed,A.prototype.commit=nd,A.prototype.next=td,A.prototype.plant=ad,A.prototype.reverse=od,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=id,A.prototype.first=A.prototype.head,i&&(A.prototype[i]=rd),A},Kn=Fn();un._=Kn,se=function(){return Kn}.call(H,B,H,tn),se!==m&&(tn.exports=se)}).call(this)},95150:function(tn,H,B){"use strict";var se=B(19226),m=B(5814),w=B(45863),R=B(22277),Fe=B(35748);function G(t){var c=Object.create(null);return t&&Object.keys(t).forEach(function(p){if(p!=="default"){var b=Object.getOwnPropertyDescriptor(t,p);Object.defineProperty(c,p,b.get?b:{enumerable:!0,get:function(){return t[p]}})}}),c.default=t,Object.freeze(c)}var re=G(se),_=G(m);function C(t){return Object.prototype.toString.call(t)}function z(t){return C(t)==="[object String]"}const O=Object.prototype.hasOwnProperty;function g(t,c){return O.call(t,c)}function te(t){return Array.prototype.slice.call(arguments,1).forEach(function(p){if(p){if(typeof p!="object")throw new TypeError(p+"must be object");Object.keys(p).forEach(function(b){t[b]=p[b]})}}),t}function me(t,c,p){return[].concat(t.slice(0,c),p,t.slice(c+1))}function J(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function de(t){if(t>65535){t-=65536;const c=55296+(t>>10),p=56320+(t&1023);return String.fromCharCode(c,p)}return String.fromCharCode(t)}const Ce=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,be=/&([a-z#][a-z0-9]{1,31});/gi,We=new RegExp(Ce.source+"|"+be.source,"gi"),Ze=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function dn(t,c){if(c.charCodeAt(0)===35&&Ze.test(c)){const b=c[1].toLowerCase()==="x"?parseInt(c.slice(2),16):parseInt(c.slice(1),10);return J(b)?de(b):t}const p=w.decodeHTML(t);return p!==t?p:t}function U(t){return t.indexOf("\\")<0?t:t.replace(Ce,"$1")}function D(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(We,function(c,p,b){return p||dn(c,b)})}const ie=/[&<>"]/,Oe=/[&<>"]/g,Re={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function T(t){return Re[t]}function ne(t){return ie.test(t)?t.replace(Oe,T):t}const Q=/[.?*+^$[\]\\(){}|-]/g;function W(t){return t.replace(Q,"\\$&")}function X(t){switch(t){case 9:case 32:return!0}return!1}function Ae(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Be(t){return _.P.test(t)||_.S.test(t)}function Ue(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ge(t){return t=t.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(t=t.replace(/ẞ/g,"\xDF")),t.toLowerCase().toUpperCase()}var cn=Object.freeze({__proto__:null,arrayReplaceAt:me,assign:te,escapeHtml:ne,escapeRE:W,fromCodePoint:de,has:g,isMdAsciiPunct:Ue,isPunctChar:Be,isSpace:X,isString:z,isValidEntityCode:J,isWhiteSpace:Ae,lib:{mdurl:re,ucmicro:_},normalizeReference:ge,unescapeAll:D,unescapeMd:U});function Xn(t,c,p){let b,y,v,I;const L=t.posMax,K=t.pos;for(t.pos=c+1,b=1;t.pos<L;){if(v=t.src.charCodeAt(t.pos),v===93&&(b--,b===0)){y=!0;break}if(I=t.pos,t.md.inline.skipToken(t),v===91){if(I===t.pos-1)b++;else if(p)return t.pos=K,-1}}let ce=-1;return y&&(ce=t.pos),t.pos=K,ce}function ue(t,c,p){let b,y=c;const v={ok:!1,pos:0,str:""};if(t.charCodeAt(y)===60){for(y++;y<p;){if(b=t.charCodeAt(y),b===10||b===60)return v;if(b===62)return v.pos=y+1,v.str=D(t.slice(c+1,y)),v.ok=!0,v;if(b===92&&y+1<p){y+=2;continue}y++}return v}let I=0;for(;y<p&&(b=t.charCodeAt(y),!(b===32||b<32||b===127));){if(b===92&&y+1<p){if(t.charCodeAt(y+1)===32)break;y+=2;continue}if(b===40&&(I++,I>32))return v;if(b===41){if(I===0)break;I--}y++}return c===y||I!==0||(v.str=D(t.slice(c,y)),v.pos=y,v.ok=!0),v}function ve(t,c,p,b){let y,v=c;const I={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(b)I.str=b.str,I.marker=b.marker;else{if(v>=p)return I;let L=t.charCodeAt(v);if(L!==34&&L!==39&&L!==40)return I;c++,v++,L===40&&(L=41),I.marker=L}for(;v<p;){if(y=t.charCodeAt(v),y===I.marker)return I.pos=v+1,I.str+=D(t.slice(c,v)),I.ok=!0,I;if(y===40&&I.marker===41)return I;y===92&&v+1<p&&v++,v++}return I.can_continue=!0,I.str+=D(t.slice(c,v)),I}var xe=Object.freeze({__proto__:null,parseLinkDestination:ue,parseLinkLabel:Xn,parseLinkTitle:ve});const V={};V.code_inline=function(t,c,p,b,y){const v=t[c];return"<code"+y.renderAttrs(v)+">"+ne(v.content)+"</code>"},V.code_block=function(t,c,p,b,y){const v=t[c];return"<pre"+y.renderAttrs(v)+"><code>"+ne(t[c].content)+`</code></pre>
`},V.fence=function(t,c,p,b,y){const v=t[c],I=v.info?D(v.info).trim():"";let L="",K="";if(I){const Pe=I.split(/(\s+)/g);L=Pe[0],K=Pe.slice(2).join("")}let ce;if(p.highlight?ce=p.highlight(v.content,L,K)||ne(v.content):ce=ne(v.content),ce.indexOf("<pre")===0)return ce+`
`;if(I){const Pe=v.attrIndex("class"),$e=v.attrs?v.attrs.slice():[];Pe<0?$e.push(["class",p.langPrefix+L]):($e[Pe]=$e[Pe].slice(),$e[Pe][1]+=" "+p.langPrefix+L);const un={attrs:$e};return`<pre><code${y.renderAttrs(un)}>${ce}</code></pre>
`}return`<pre><code${y.renderAttrs(v)}>${ce}</code></pre>
`},V.image=function(t,c,p,b,y){const v=t[c];return v.attrs[v.attrIndex("alt")][1]=y.renderInlineAsText(v.children,p,b),y.renderToken(t,c,p)},V.hardbreak=function(t,c,p){return p.xhtmlOut?`<br />
`:`<br>
`},V.softbreak=function(t,c,p){return p.breaks?p.xhtmlOut?`<br />
`:`<br>
`:`
`},V.text=function(t,c){return ne(t[c].content)},V.html_block=function(t,c){return t[c].content},V.html_inline=function(t,c){return t[c].content};function Ee(){this.rules=te({},V)}Ee.prototype.renderAttrs=function(c){let p,b,y;if(!c.attrs)return"";for(y="",p=0,b=c.attrs.length;p<b;p++)y+=" "+ne(c.attrs[p][0])+'="'+ne(c.attrs[p][1])+'"';return y},Ee.prototype.renderToken=function(c,p,b){const y=c[p];let v="";if(y.hidden)return"";y.block&&y.nesting!==-1&&p&&c[p-1].hidden&&(v+=`
`),v+=(y.nesting===-1?"</":"<")+y.tag,v+=this.renderAttrs(y),y.nesting===0&&b.xhtmlOut&&(v+=" /");let I=!1;if(y.block&&(I=!0,y.nesting===1&&p+1<c.length)){const L=c[p+1];(L.type==="inline"||L.hidden||L.nesting===-1&&L.tag===y.tag)&&(I=!1)}return v+=I?`>
`:">",v},Ee.prototype.renderInline=function(t,c,p){let b="";const y=this.rules;for(let v=0,I=t.length;v<I;v++){const L=t[v].type;typeof y[L]!="undefined"?b+=y[L](t,v,c,p,this):b+=this.renderToken(t,v,c)}return b},Ee.prototype.renderInlineAsText=function(t,c,p){let b="";for(let y=0,v=t.length;y<v;y++)switch(t[y].type){case"text":b+=t[y].content;break;case"image":b+=this.renderInlineAsText(t[y].children,c,p);break;case"html_inline":case"html_block":b+=t[y].content;break;case"softbreak":case"hardbreak":b+=`
`;break}return b},Ee.prototype.render=function(t,c,p){let b="";const y=this.rules;for(let v=0,I=t.length;v<I;v++){const L=t[v].type;L==="inline"?b+=this.renderInline(t[v].children,c,p):typeof y[L]!="undefined"?b+=y[L](t,v,c,p,this):b+=this.renderToken(t,v,c,p)}return b};function Ke(){this.__rules__=[],this.__cache__=null}Ke.prototype.__find__=function(t){for(let c=0;c<this.__rules__.length;c++)if(this.__rules__[c].name===t)return c;return-1},Ke.prototype.__compile__=function(){const t=this,c=[""];t.__rules__.forEach(function(p){p.enabled&&p.alt.forEach(function(b){c.indexOf(b)<0&&c.push(b)})}),t.__cache__={},c.forEach(function(p){t.__cache__[p]=[],t.__rules__.forEach(function(b){b.enabled&&(p&&b.alt.indexOf(p)<0||t.__cache__[p].push(b.fn))})})},Ke.prototype.at=function(t,c,p){const b=this.__find__(t),y=p||{};if(b===-1)throw new Error("Parser rule not found: "+t);this.__rules__[b].fn=c,this.__rules__[b].alt=y.alt||[],this.__cache__=null},Ke.prototype.before=function(t,c,p,b){const y=this.__find__(t),v=b||{};if(y===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(y,0,{name:c,enabled:!0,fn:p,alt:v.alt||[]}),this.__cache__=null},Ke.prototype.after=function(t,c,p,b){const y=this.__find__(t),v=b||{};if(y===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(y+1,0,{name:c,enabled:!0,fn:p,alt:v.alt||[]}),this.__cache__=null},Ke.prototype.push=function(t,c,p){const b=p||{};this.__rules__.push({name:t,enabled:!0,fn:c,alt:b.alt||[]}),this.__cache__=null},Ke.prototype.enable=function(t,c){Array.isArray(t)||(t=[t]);const p=[];return t.forEach(function(b){const y=this.__find__(b);if(y<0){if(c)return;throw new Error("Rules manager: invalid rule name "+b)}this.__rules__[y].enabled=!0,p.push(b)},this),this.__cache__=null,p},Ke.prototype.enableOnly=function(t,c){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(p){p.enabled=!1}),this.enable(t,c)},Ke.prototype.disable=function(t,c){Array.isArray(t)||(t=[t]);const p=[];return t.forEach(function(b){const y=this.__find__(b);if(y<0){if(c)return;throw new Error("Rules manager: invalid rule name "+b)}this.__rules__[y].enabled=!1,p.push(b)},this),this.__cache__=null,p},Ke.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function an(t,c,p){this.type=t,this.tag=c,this.attrs=null,this.map=null,this.nesting=p,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}an.prototype.attrIndex=function(c){if(!this.attrs)return-1;const p=this.attrs;for(let b=0,y=p.length;b<y;b++)if(p[b][0]===c)return b;return-1},an.prototype.attrPush=function(c){this.attrs?this.attrs.push(c):this.attrs=[c]},an.prototype.attrSet=function(c,p){const b=this.attrIndex(c),y=[c,p];b<0?this.attrPush(y):this.attrs[b]=y},an.prototype.attrGet=function(c){const p=this.attrIndex(c);let b=null;return p>=0&&(b=this.attrs[p][1]),b},an.prototype.attrJoin=function(c,p){const b=this.attrIndex(c);b<0?this.attrPush([c,p]):this.attrs[b][1]=this.attrs[b][1]+" "+p};function In(t,c,p){this.src=t,this.env=p,this.tokens=[],this.inlineMode=!1,this.md=c}In.prototype.Token=an;const On=/\r\n?|\n/g,gn=/\0/g;function Qn(t){let c;c=t.src.replace(On,`
`),c=c.replace(gn,"\uFFFD"),t.src=c}function vn(t){let c;t.inlineMode?(c=new t.Token("inline","",0),c.content=t.src,c.map=[0,1],c.children=[],t.tokens.push(c)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function ht(t){const c=t.tokens;for(let p=0,b=c.length;p<b;p++){const y=c[p];y.type==="inline"&&t.md.inline.parse(y.content,t.md,t.env,y.children)}}function ct(t){return/^<a[>\s]/i.test(t)}function Un(t){return/^<\/a\s*>/i.test(t)}function Zt(t){const c=t.tokens;if(t.md.options.linkify)for(let p=0,b=c.length;p<b;p++){if(c[p].type!=="inline"||!t.md.linkify.pretest(c[p].content))continue;let y=c[p].children,v=0;for(let I=y.length-1;I>=0;I--){const L=y[I];if(L.type==="link_close"){for(I--;y[I].level!==L.level&&y[I].type!=="link_open";)I--;continue}if(L.type==="html_inline"&&(ct(L.content)&&v>0&&v--,Un(L.content)&&v++),!(v>0)&&L.type==="text"&&t.md.linkify.test(L.content)){const K=L.content;let ce=t.md.linkify.match(K);const Pe=[];let $e=L.level,un=0;ce.length>0&&ce[0].index===0&&I>0&&y[I-1].type==="text_special"&&(ce=ce.slice(1));for(let rn=0;rn<ce.length;rn++){const De=ce[rn].url,At=t.md.normalizeLink(De);if(!t.md.validateLink(At))continue;let rt=ce[rn].text;ce[rn].schema?ce[rn].schema==="mailto:"&&!/^mailto:/i.test(rt)?rt=t.md.normalizeLinkText("mailto:"+rt).replace(/^mailto:/,""):rt=t.md.normalizeLinkText(rt):rt=t.md.normalizeLinkText("http://"+rt).replace(/^http:\/\//,"");const pt=ce[rn].index;if(pt>un){const Jn=new t.Token("text","",0);Jn.content=K.slice(un,pt),Jn.level=$e,Pe.push(Jn)}const Mn=new t.Token("link_open","a",1);Mn.attrs=[["href",At]],Mn.level=$e++,Mn.markup="linkify",Mn.info="auto",Pe.push(Mn);const Yn=new t.Token("text","",0);Yn.content=rt,Yn.level=$e,Pe.push(Yn);const qn=new t.Token("link_close","a",-1);qn.level=--$e,qn.markup="linkify",qn.info="auto",Pe.push(qn),un=ce[rn].lastIndex}if(un<K.length){const rn=new t.Token("text","",0);rn.content=K.slice(un),rn.level=$e,Pe.push(rn)}c[p].children=y=me(y,I,Pe)}}}}const Mt=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,vt=/\((c|tm|r)\)/i,Gn=/\((c|tm|r)\)/ig,kt={c:"\xA9",r:"\xAE",tm:"\u2122"};function Ct(t,c){return kt[c.toLowerCase()]}function Ve(t){let c=0;for(let p=t.length-1;p>=0;p--){const b=t[p];b.type==="text"&&!c&&(b.content=b.content.replace(Gn,Ct)),b.type==="link_open"&&b.info==="auto"&&c--,b.type==="link_close"&&b.info==="auto"&&c++}}function Y(t){let c=0;for(let p=t.length-1;p>=0;p--){const b=t[p];b.type==="text"&&!c&&Mt.test(b.content)&&(b.content=b.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),b.type==="link_open"&&b.info==="auto"&&c--,b.type==="link_close"&&b.info==="auto"&&c++}}function Ie(t){let c;if(t.md.options.typographer)for(c=t.tokens.length-1;c>=0;c--)t.tokens[c].type==="inline"&&(vt.test(t.tokens[c].content)&&Ve(t.tokens[c].children),Mt.test(t.tokens[c].content)&&Y(t.tokens[c].children))}const Te=/['"]/,we=/['"]/g,Xe="\u2019";function Cn(t,c,p){return t.slice(0,c)+p+t.slice(c+1)}function Je(t,c){let p;const b=[];for(let y=0;y<t.length;y++){const v=t[y],I=t[y].level;for(p=b.length-1;p>=0&&!(b[p].level<=I);p--);if(b.length=p+1,v.type!=="text")continue;let L=v.content,K=0,ce=L.length;e:for(;K<ce;){we.lastIndex=K;const Pe=we.exec(L);if(!Pe)break;let $e=!0,un=!0;K=Pe.index+1;const rn=Pe[0]==="'";let De=32;if(Pe.index-1>=0)De=L.charCodeAt(Pe.index-1);else for(p=y-1;p>=0&&!(t[p].type==="softbreak"||t[p].type==="hardbreak");p--)if(t[p].content){De=t[p].content.charCodeAt(t[p].content.length-1);break}let At=32;if(K<ce)At=L.charCodeAt(K);else for(p=y+1;p<t.length&&!(t[p].type==="softbreak"||t[p].type==="hardbreak");p++)if(t[p].content){At=t[p].content.charCodeAt(0);break}const rt=Ue(De)||Be(String.fromCharCode(De)),pt=Ue(At)||Be(String.fromCharCode(At)),Mn=Ae(De),Yn=Ae(At);if(Yn?$e=!1:pt&&(Mn||rt||($e=!1)),Mn?un=!1:rt&&(Yn||pt||(un=!1)),At===34&&Pe[0]==='"'&&De>=48&&De<=57&&(un=$e=!1),$e&&un&&($e=rt,un=pt),!$e&&!un){rn&&(v.content=Cn(v.content,Pe.index,Xe));continue}if(un)for(p=b.length-1;p>=0;p--){let qn=b[p];if(b[p].level<I)break;if(qn.single===rn&&b[p].level===I){qn=b[p];let Jn,ut;rn?(Jn=c.md.options.quotes[2],ut=c.md.options.quotes[3]):(Jn=c.md.options.quotes[0],ut=c.md.options.quotes[1]),v.content=Cn(v.content,Pe.index,ut),t[qn.token].content=Cn(t[qn.token].content,qn.pos,Jn),K+=ut.length-1,qn.token===y&&(K+=Jn.length-1),L=v.content,ce=L.length,b.length=p;continue e}}$e?b.push({token:y,pos:Pe.index,single:rn,level:I}):un&&rn&&(v.content=Cn(v.content,Pe.index,Xe))}}}function $(t){if(t.md.options.typographer)for(let c=t.tokens.length-1;c>=0;c--)t.tokens[c].type!=="inline"||!Te.test(t.tokens[c].content)||Je(t.tokens[c].children,t)}function on(t){let c,p;const b=t.tokens,y=b.length;for(let v=0;v<y;v++){if(b[v].type!=="inline")continue;const I=b[v].children,L=I.length;for(c=0;c<L;c++)I[c].type==="text_special"&&(I[c].type="text");for(c=p=0;c<L;c++)I[c].type==="text"&&c+1<L&&I[c+1].type==="text"?I[c+1].content=I[c].content+I[c+1].content:(c!==p&&(I[p]=I[c]),p++);c!==p&&(I.length=p)}}const wn=[["normalize",Qn],["block",vn],["inline",ht],["linkify",Zt],["replacements",Ie],["smartquotes",$],["text_join",on]];function xn(){this.ruler=new Ke;for(let t=0;t<wn.length;t++)this.ruler.push(wn[t][0],wn[t][1])}xn.prototype.process=function(t){const c=this.ruler.getRules("");for(let p=0,b=c.length;p<b;p++)c[p](t)},xn.prototype.State=In;function qe(t,c,p,b){this.src=t,this.md=c,this.env=p,this.tokens=b,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const y=this.src;for(let v=0,I=0,L=0,K=0,ce=y.length,Pe=!1;I<ce;I++){const $e=y.charCodeAt(I);if(!Pe)if(X($e)){L++,$e===9?K+=4-K%4:K++;continue}else Pe=!0;($e===10||I===ce-1)&&($e!==10&&I++,this.bMarks.push(v),this.eMarks.push(I),this.tShift.push(L),this.sCount.push(K),this.bsCount.push(0),Pe=!1,L=0,K=0,v=I+1)}this.bMarks.push(y.length),this.eMarks.push(y.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}qe.prototype.push=function(t,c,p){const b=new an(t,c,p);return b.block=!0,p<0&&this.level--,b.level=this.level,p>0&&this.level++,this.tokens.push(b),b},qe.prototype.isEmpty=function(c){return this.bMarks[c]+this.tShift[c]>=this.eMarks[c]},qe.prototype.skipEmptyLines=function(c){for(let p=this.lineMax;c<p&&!(this.bMarks[c]+this.tShift[c]<this.eMarks[c]);c++);return c},qe.prototype.skipSpaces=function(c){for(let p=this.src.length;c<p;c++){const b=this.src.charCodeAt(c);if(!X(b))break}return c},qe.prototype.skipSpacesBack=function(c,p){if(c<=p)return c;for(;c>p;)if(!X(this.src.charCodeAt(--c)))return c+1;return c},qe.prototype.skipChars=function(c,p){for(let b=this.src.length;c<b&&this.src.charCodeAt(c)===p;c++);return c},qe.prototype.skipCharsBack=function(c,p,b){if(c<=b)return c;for(;c>b;)if(p!==this.src.charCodeAt(--c))return c+1;return c},qe.prototype.getLines=function(c,p,b,y){if(c>=p)return"";const v=new Array(p-c);for(let I=0,L=c;L<p;L++,I++){let K=0;const ce=this.bMarks[L];let Pe=ce,$e;for(L+1<p||y?$e=this.eMarks[L]+1:$e=this.eMarks[L];Pe<$e&&K<b;){const un=this.src.charCodeAt(Pe);if(X(un))un===9?K+=4-(K+this.bsCount[L])%4:K++;else if(Pe-ce<this.tShift[L])K++;else break;Pe++}K>b?v[I]=new Array(K-b+1).join(" ")+this.src.slice(Pe,$e):v[I]=this.src.slice(Pe,$e)}return v.join("")},qe.prototype.Token=an;const Bn=65536;function it(t,c){const p=t.bMarks[c]+t.tShift[c],b=t.eMarks[c];return t.src.slice(p,b)}function xt(t){const c=[],p=t.length;let b=0,y=t.charCodeAt(b),v=!1,I=0,L="";for(;b<p;)y===124&&(v?(L+=t.substring(I,b-1),I=b):(c.push(L+t.substring(I,b)),L="",I=b+1)),v=y===92,b++,y=t.charCodeAt(b);return c.push(L+t.substring(I)),c}function Ft(t,c,p,b){if(c+2>p)return!1;let y=c+1;if(t.sCount[y]<t.blkIndent||t.sCount[y]-t.blkIndent>=4)return!1;let v=t.bMarks[y]+t.tShift[y];if(v>=t.eMarks[y])return!1;const I=t.src.charCodeAt(v++);if(I!==124&&I!==45&&I!==58||v>=t.eMarks[y])return!1;const L=t.src.charCodeAt(v++);if(L!==124&&L!==45&&L!==58&&!X(L)||I===45&&X(L))return!1;for(;v<t.eMarks[y];){const qn=t.src.charCodeAt(v);if(qn!==124&&qn!==45&&qn!==58&&!X(qn))return!1;v++}let K=it(t,c+1),ce=K.split("|");const Pe=[];for(let qn=0;qn<ce.length;qn++){const Jn=ce[qn].trim();if(!Jn){if(qn===0||qn===ce.length-1)continue;return!1}if(!/^:?-+:?$/.test(Jn))return!1;Jn.charCodeAt(Jn.length-1)===58?Pe.push(Jn.charCodeAt(0)===58?"center":"right"):Jn.charCodeAt(0)===58?Pe.push("left"):Pe.push("")}if(K=it(t,c).trim(),K.indexOf("|")===-1||t.sCount[c]-t.blkIndent>=4)return!1;ce=xt(K),ce.length&&ce[0]===""&&ce.shift(),ce.length&&ce[ce.length-1]===""&&ce.pop();const $e=ce.length;if($e===0||$e!==Pe.length)return!1;if(b)return!0;const un=t.parentType;t.parentType="table";const rn=t.md.block.ruler.getRules("blockquote"),De=t.push("table_open","table",1),At=[c,0];De.map=At;const rt=t.push("thead_open","thead",1);rt.map=[c,c+1];const pt=t.push("tr_open","tr",1);pt.map=[c,c+1];for(let qn=0;qn<ce.length;qn++){const Jn=t.push("th_open","th",1);Pe[qn]&&(Jn.attrs=[["style","text-align:"+Pe[qn]]]);const ut=t.push("inline","",0);ut.content=ce[qn].trim(),ut.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let Mn,Yn=0;for(y=c+2;y<p&&!(t.sCount[y]<t.blkIndent);y++){let qn=!1;for(let ut=0,Qt=rn.length;ut<Qt;ut++)if(rn[ut](t,y,p,!0)){qn=!0;break}if(qn||(K=it(t,y).trim(),!K)||t.sCount[y]-t.blkIndent>=4||(ce=xt(K),ce.length&&ce[0]===""&&ce.shift(),ce.length&&ce[ce.length-1]===""&&ce.pop(),Yn+=$e-ce.length,Yn>Bn))break;if(y===c+2){const ut=t.push("tbody_open","tbody",1);ut.map=Mn=[c+2,0]}const Jn=t.push("tr_open","tr",1);Jn.map=[y,y+1];for(let ut=0;ut<$e;ut++){const Qt=t.push("td_open","td",1);Pe[ut]&&(Qt.attrs=[["style","text-align:"+Pe[ut]]]);const zt=t.push("inline","",0);zt.content=ce[ut]?ce[ut].trim():"",zt.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return Mn&&(t.push("tbody_close","tbody",-1),Mn[1]=y),t.push("table_close","table",-1),At[1]=y,t.parentType=un,t.line=y,!0}function St(t,c,p){if(t.sCount[c]-t.blkIndent<4)return!1;let b=c+1,y=b;for(;b<p;){if(t.isEmpty(b)){b++;continue}if(t.sCount[b]-t.blkIndent>=4){b++,y=b;continue}break}t.line=y;const v=t.push("code_block","code",0);return v.content=t.getLines(c,y,4+t.blkIndent,!1)+`
`,v.map=[c,t.line],!0}function Ot(t,c,p,b){let y=t.bMarks[c]+t.tShift[c],v=t.eMarks[c];if(t.sCount[c]-t.blkIndent>=4||y+3>v)return!1;const I=t.src.charCodeAt(y);if(I!==126&&I!==96)return!1;let L=y;y=t.skipChars(y,I);let K=y-L;if(K<3)return!1;const ce=t.src.slice(L,y),Pe=t.src.slice(y,v);if(I===96&&Pe.indexOf(String.fromCharCode(I))>=0)return!1;if(b)return!0;let $e=c,un=!1;for(;$e++,!($e>=p||(y=L=t.bMarks[$e]+t.tShift[$e],v=t.eMarks[$e],y<v&&t.sCount[$e]<t.blkIndent));)if(t.src.charCodeAt(y)===I&&!(t.sCount[$e]-t.blkIndent>=4)&&(y=t.skipChars(y,I),!(y-L<K)&&(y=t.skipSpaces(y),!(y<v)))){un=!0;break}K=t.sCount[c],t.line=$e+(un?1:0);const rn=t.push("fence","code",0);return rn.info=Pe,rn.content=t.getLines(c+1,$e,K,!0),rn.markup=ce,rn.map=[c,t.line],!0}function He(t,c,p,b){let y=t.bMarks[c]+t.tShift[c],v=t.eMarks[c];const I=t.lineMax;if(t.sCount[c]-t.blkIndent>=4||t.src.charCodeAt(y)!==62)return!1;if(b)return!0;const L=[],K=[],ce=[],Pe=[],$e=t.md.block.ruler.getRules("blockquote"),un=t.parentType;t.parentType="blockquote";let rn=!1,De;for(De=c;De<p;De++){const Yn=t.sCount[De]<t.blkIndent;if(y=t.bMarks[De]+t.tShift[De],v=t.eMarks[De],y>=v)break;if(t.src.charCodeAt(y++)===62&&!Yn){let Jn=t.sCount[De]+1,ut,Qt;t.src.charCodeAt(y)===32?(y++,Jn++,Qt=!1,ut=!0):t.src.charCodeAt(y)===9?(ut=!0,(t.bsCount[De]+Jn)%4===3?(y++,Jn++,Qt=!1):Qt=!0):ut=!1;let zt=Jn;for(L.push(t.bMarks[De]),t.bMarks[De]=y;y<v;){const na=t.src.charCodeAt(y);if(X(na))na===9?zt+=4-(zt+t.bsCount[De]+(Qt?1:0))%4:zt++;else break;y++}rn=y>=v,K.push(t.bsCount[De]),t.bsCount[De]=t.sCount[De]+1+(ut?1:0),ce.push(t.sCount[De]),t.sCount[De]=zt-Jn,Pe.push(t.tShift[De]),t.tShift[De]=y-t.bMarks[De];continue}if(rn)break;let qn=!1;for(let Jn=0,ut=$e.length;Jn<ut;Jn++)if($e[Jn](t,De,p,!0)){qn=!0;break}if(qn){t.lineMax=De,t.blkIndent!==0&&(L.push(t.bMarks[De]),K.push(t.bsCount[De]),Pe.push(t.tShift[De]),ce.push(t.sCount[De]),t.sCount[De]-=t.blkIndent);break}L.push(t.bMarks[De]),K.push(t.bsCount[De]),Pe.push(t.tShift[De]),ce.push(t.sCount[De]),t.sCount[De]=-1}const At=t.blkIndent;t.blkIndent=0;const rt=t.push("blockquote_open","blockquote",1);rt.markup=">";const pt=[c,0];rt.map=pt,t.md.block.tokenize(t,c,De);const Mn=t.push("blockquote_close","blockquote",-1);Mn.markup=">",t.lineMax=I,t.parentType=un,pt[1]=t.line;for(let Yn=0;Yn<Pe.length;Yn++)t.bMarks[Yn+c]=L[Yn],t.tShift[Yn+c]=Pe[Yn],t.sCount[Yn+c]=ce[Yn],t.bsCount[Yn+c]=K[Yn];return t.blkIndent=At,!0}function he(t,c,p,b){const y=t.eMarks[c];if(t.sCount[c]-t.blkIndent>=4)return!1;let v=t.bMarks[c]+t.tShift[c];const I=t.src.charCodeAt(v++);if(I!==42&&I!==45&&I!==95)return!1;let L=1;for(;v<y;){const ce=t.src.charCodeAt(v++);if(ce!==I&&!X(ce))return!1;ce===I&&L++}if(L<3)return!1;if(b)return!0;t.line=c+1;const K=t.push("hr","hr",0);return K.map=[c,t.line],K.markup=Array(L+1).join(String.fromCharCode(I)),!0}function Le(t,c){const p=t.eMarks[c];let b=t.bMarks[c]+t.tShift[c];const y=t.src.charCodeAt(b++);if(y!==42&&y!==45&&y!==43)return-1;if(b<p){const v=t.src.charCodeAt(b);if(!X(v))return-1}return b}function Me(t,c){const p=t.bMarks[c]+t.tShift[c],b=t.eMarks[c];let y=p;if(y+1>=b)return-1;let v=t.src.charCodeAt(y++);if(v<48||v>57)return-1;for(;;){if(y>=b)return-1;if(v=t.src.charCodeAt(y++),v>=48&&v<=57){if(y-p>=10)return-1;continue}if(v===41||v===46)break;return-1}return y<b&&(v=t.src.charCodeAt(y),!X(v))?-1:y}function An(t,c){const p=t.level+2;for(let b=c+2,y=t.tokens.length-2;b<y;b++)t.tokens[b].level===p&&t.tokens[b].type==="paragraph_open"&&(t.tokens[b+2].hidden=!0,t.tokens[b].hidden=!0,b+=2)}function Dn(t,c,p,b){let y,v,I,L,K=c,ce=!0;if(t.sCount[K]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[K]-t.listIndent>=4&&t.sCount[K]<t.blkIndent)return!1;let Pe=!1;b&&t.parentType==="paragraph"&&t.sCount[K]>=t.blkIndent&&(Pe=!0);let $e,un,rn;if((rn=Me(t,K))>=0){if($e=!0,I=t.bMarks[K]+t.tShift[K],un=Number(t.src.slice(I,rn-1)),Pe&&un!==1)return!1}else if((rn=Le(t,K))>=0)$e=!1;else return!1;if(Pe&&t.skipSpaces(rn)>=t.eMarks[K])return!1;if(b)return!0;const De=t.src.charCodeAt(rn-1),At=t.tokens.length;$e?(L=t.push("ordered_list_open","ol",1),un!==1&&(L.attrs=[["start",un]])):L=t.push("bullet_list_open","ul",1);const rt=[K,0];L.map=rt,L.markup=String.fromCharCode(De);let pt=!1;const Mn=t.md.block.ruler.getRules("list"),Yn=t.parentType;for(t.parentType="list";K<p;){v=rn,y=t.eMarks[K];const qn=t.sCount[K]+rn-(t.bMarks[K]+t.tShift[K]);let Jn=qn;for(;v<y;){const ra=t.src.charCodeAt(v);if(ra===9)Jn+=4-(Jn+t.bsCount[K])%4;else if(ra===32)Jn++;else break;v++}const ut=v;let Qt;ut>=y?Qt=1:Qt=Jn-qn,Qt>4&&(Qt=1);const zt=qn+Qt;L=t.push("list_item_open","li",1),L.markup=String.fromCharCode(De);const na=[K,0];L.map=na,$e&&(L.info=t.src.slice(I,rn-1));const lr=t.tight,ro=t.tShift[K],go=t.sCount[K],ta=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=zt,t.tight=!0,t.tShift[K]=ut-t.bMarks[K],t.sCount[K]=Jn,ut>=y&&t.isEmpty(K+1)?t.line=Math.min(t.line+2,p):t.md.block.tokenize(t,K,p,!0),(!t.tight||pt)&&(ce=!1),pt=t.line-K>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=ta,t.tShift[K]=ro,t.sCount[K]=go,t.tight=lr,L=t.push("list_item_close","li",-1),L.markup=String.fromCharCode(De),K=t.line,na[1]=K,K>=p||t.sCount[K]<t.blkIndent||t.sCount[K]-t.blkIndent>=4)break;let dr=!1;for(let ra=0,Rt=Mn.length;ra<Rt;ra++)if(Mn[ra](t,K,p,!0)){dr=!0;break}if(dr)break;if($e){if(rn=Me(t,K),rn<0)break;I=t.bMarks[K]+t.tShift[K]}else if(rn=Le(t,K),rn<0)break;if(De!==t.src.charCodeAt(rn-1))break}return $e?L=t.push("ordered_list_close","ol",-1):L=t.push("bullet_list_close","ul",-1),L.markup=String.fromCharCode(De),rt[1]=K,t.line=K,t.parentType=Yn,ce&&An(t,At),!0}function Wn(t,c,p,b){let y=t.bMarks[c]+t.tShift[c],v=t.eMarks[c],I=c+1;if(t.sCount[c]-t.blkIndent>=4||t.src.charCodeAt(y)!==91)return!1;function L(Mn){const Yn=t.lineMax;if(Mn>=Yn||t.isEmpty(Mn))return null;let qn=!1;if(t.sCount[Mn]-t.blkIndent>3&&(qn=!0),t.sCount[Mn]<0&&(qn=!0),!qn){const Qt=t.md.block.ruler.getRules("reference"),zt=t.parentType;t.parentType="reference";let na=!1;for(let lr=0,ro=Qt.length;lr<ro;lr++)if(Qt[lr](t,Mn,Yn,!0)){na=!0;break}if(t.parentType=zt,na)return null}const Jn=t.bMarks[Mn]+t.tShift[Mn],ut=t.eMarks[Mn];return t.src.slice(Jn,ut+1)}let K=t.src.slice(y,v+1);v=K.length;let ce=-1;for(y=1;y<v;y++){const Mn=K.charCodeAt(y);if(Mn===91)return!1;if(Mn===93){ce=y;break}else if(Mn===10){const Yn=L(I);Yn!==null&&(K+=Yn,v=K.length,I++)}else if(Mn===92&&(y++,y<v&&K.charCodeAt(y)===10)){const Yn=L(I);Yn!==null&&(K+=Yn,v=K.length,I++)}}if(ce<0||K.charCodeAt(ce+1)!==58)return!1;for(y=ce+2;y<v;y++){const Mn=K.charCodeAt(y);if(Mn===10){const Yn=L(I);Yn!==null&&(K+=Yn,v=K.length,I++)}else if(!X(Mn))break}const Pe=t.md.helpers.parseLinkDestination(K,y,v);if(!Pe.ok)return!1;const $e=t.md.normalizeLink(Pe.str);if(!t.md.validateLink($e))return!1;y=Pe.pos;const un=y,rn=I,De=y;for(;y<v;y++){const Mn=K.charCodeAt(y);if(Mn===10){const Yn=L(I);Yn!==null&&(K+=Yn,v=K.length,I++)}else if(!X(Mn))break}let At=t.md.helpers.parseLinkTitle(K,y,v);for(;At.can_continue;){const Mn=L(I);if(Mn===null)break;K+=Mn,y=v,v=K.length,I++,At=t.md.helpers.parseLinkTitle(K,y,v,At)}let rt;for(y<v&&De!==y&&At.ok?(rt=At.str,y=At.pos):(rt="",y=un,I=rn);y<v;){const Mn=K.charCodeAt(y);if(!X(Mn))break;y++}if(y<v&&K.charCodeAt(y)!==10&&rt)for(rt="",y=un,I=rn;y<v;){const Mn=K.charCodeAt(y);if(!X(Mn))break;y++}if(y<v&&K.charCodeAt(y)!==10)return!1;const pt=ge(K.slice(1,ce));return pt?(b||(typeof t.env.references=="undefined"&&(t.env.references={}),typeof t.env.references[pt]=="undefined"&&(t.env.references[pt]={title:rt,href:$e}),t.line=I),!0):!1}var lt=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"];const It="[a-zA-Z_:][a-zA-Z0-9:._-]*",sr="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",or="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+It+"(?:\\s*=\\s*"+sr+")?)")+"*\\s*\\/?>",cr="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",nr="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",jt="<[?][\\s\\S]*?[?]>",mr="<![A-Za-z][^>]*>",Sr="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",_r=new RegExp("^(?:"+or+"|"+cr+"|"+nr+"|"+jt+"|"+mr+"|"+Sr+")"),$r=new RegExp("^(?:"+or+"|"+cr+")"),Pr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+lt.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp($r.source+"\\s*$"),/^$/,!1]];function Br(t,c,p,b){let y=t.bMarks[c]+t.tShift[c],v=t.eMarks[c];if(t.sCount[c]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(y)!==60)return!1;let I=t.src.slice(y,v),L=0;for(;L<Pr.length&&!Pr[L][0].test(I);L++);if(L===Pr.length)return!1;if(b)return Pr[L][2];let K=c+1;if(!Pr[L][1].test(I)){for(;K<p&&!(t.sCount[K]<t.blkIndent);K++)if(y=t.bMarks[K]+t.tShift[K],v=t.eMarks[K],I=t.src.slice(y,v),Pr[L][1].test(I)){I.length!==0&&K++;break}}t.line=K;const ce=t.push("html_block","",0);return ce.map=[c,K],ce.content=t.getLines(c,K,t.blkIndent,!0),!0}function jr(t,c,p,b){let y=t.bMarks[c]+t.tShift[c],v=t.eMarks[c];if(t.sCount[c]-t.blkIndent>=4)return!1;let I=t.src.charCodeAt(y);if(I!==35||y>=v)return!1;let L=1;for(I=t.src.charCodeAt(++y);I===35&&y<v&&L<=6;)L++,I=t.src.charCodeAt(++y);if(L>6||y<v&&!X(I))return!1;if(b)return!0;v=t.skipSpacesBack(v,y);const K=t.skipCharsBack(v,35,y);K>y&&X(t.src.charCodeAt(K-1))&&(v=K),t.line=c+1;const ce=t.push("heading_open","h"+String(L),1);ce.markup="########".slice(0,L),ce.map=[c,t.line];const Pe=t.push("inline","",0);Pe.content=t.src.slice(y,v).trim(),Pe.map=[c,t.line],Pe.children=[];const $e=t.push("heading_close","h"+String(L),-1);return $e.markup="########".slice(0,L),!0}function sa(t,c,p){const b=t.md.block.ruler.getRules("paragraph");if(t.sCount[c]-t.blkIndent>=4)return!1;const y=t.parentType;t.parentType="paragraph";let v=0,I,L=c+1;for(;L<p&&!t.isEmpty(L);L++){if(t.sCount[L]-t.blkIndent>3)continue;if(t.sCount[L]>=t.blkIndent){let rn=t.bMarks[L]+t.tShift[L];const De=t.eMarks[L];if(rn<De&&(I=t.src.charCodeAt(rn),(I===45||I===61)&&(rn=t.skipChars(rn,I),rn=t.skipSpaces(rn),rn>=De))){v=I===61?1:2;break}}if(t.sCount[L]<0)continue;let un=!1;for(let rn=0,De=b.length;rn<De;rn++)if(b[rn](t,L,p,!0)){un=!0;break}if(un)break}if(!v)return!1;const K=t.getLines(c,L,t.blkIndent,!1).trim();t.line=L+1;const ce=t.push("heading_open","h"+String(v),1);ce.markup=String.fromCharCode(I),ce.map=[c,t.line];const Pe=t.push("inline","",0);Pe.content=K,Pe.map=[c,t.line-1],Pe.children=[];const $e=t.push("heading_close","h"+String(v),-1);return $e.markup=String.fromCharCode(I),t.parentType=y,!0}function Ur(t,c,p){const b=t.md.block.ruler.getRules("paragraph"),y=t.parentType;let v=c+1;for(t.parentType="paragraph";v<p&&!t.isEmpty(v);v++){if(t.sCount[v]-t.blkIndent>3||t.sCount[v]<0)continue;let ce=!1;for(let Pe=0,$e=b.length;Pe<$e;Pe++)if(b[Pe](t,v,p,!0)){ce=!0;break}if(ce)break}const I=t.getLines(c,v,t.blkIndent,!1).trim();t.line=v;const L=t.push("paragraph_open","p",1);L.map=[c,t.line];const K=t.push("inline","",0);return K.content=I,K.map=[c,t.line],K.children=[],t.push("paragraph_close","p",-1),t.parentType=y,!0}const Tr=[["table",Ft,["paragraph","reference"]],["code",St],["fence",Ot,["paragraph","reference","blockquote","list"]],["blockquote",He,["paragraph","reference","blockquote","list"]],["hr",he,["paragraph","reference","blockquote","list"]],["list",Dn,["paragraph","reference","blockquote"]],["reference",Wn],["html_block",Br,["paragraph","reference","blockquote"]],["heading",jr,["paragraph","reference","blockquote"]],["lheading",sa],["paragraph",Ur]];function gr(){this.ruler=new Ke;for(let t=0;t<Tr.length;t++)this.ruler.push(Tr[t][0],Tr[t][1],{alt:(Tr[t][2]||[]).slice()})}gr.prototype.tokenize=function(t,c,p){const b=this.ruler.getRules(""),y=b.length,v=t.md.options.maxNesting;let I=c,L=!1;for(;I<p&&(t.line=I=t.skipEmptyLines(I),!(I>=p||t.sCount[I]<t.blkIndent));){if(t.level>=v){t.line=p;break}const K=t.line;let ce=!1;for(let Pe=0;Pe<y;Pe++)if(ce=b[Pe](t,I,p,!1),ce){if(K>=t.line)throw new Error("block rule didn't increment state.line");break}if(!ce)throw new Error("none of the block rules matched");t.tight=!L,t.isEmpty(t.line-1)&&(L=!0),I=t.line,I<p&&t.isEmpty(I)&&(L=!0,I++,t.line=I)}},gr.prototype.parse=function(t,c,p,b){if(!t)return;const y=new this.State(t,c,p,b);this.tokenize(y,y.line,y.lineMax)},gr.prototype.State=qe;function Gr(t,c,p,b){this.src=t,this.env=p,this.md=c,this.tokens=b,this.tokens_meta=Array(b.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Gr.prototype.pushPending=function(){const t=new an("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t},Gr.prototype.push=function(t,c,p){this.pending&&this.pushPending();const b=new an(t,c,p);let y=null;return p<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),b.level=this.level,p>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],y={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(b),this.tokens_meta.push(y),b},Gr.prototype.scanDelims=function(t,c){const p=this.posMax,b=this.src.charCodeAt(t),y=t>0?this.src.charCodeAt(t-1):32;let v=t;for(;v<p&&this.src.charCodeAt(v)===b;)v++;const I=v-t,L=v<p?this.src.charCodeAt(v):32,K=Ue(y)||Be(String.fromCharCode(y)),ce=Ue(L)||Be(String.fromCharCode(L)),Pe=Ae(y),$e=Ae(L),un=!$e&&(!ce||Pe||K),rn=!Pe&&(!K||$e||ce);return{can_open:un&&(c||!rn||K),can_close:rn&&(c||!un||ce),length:I}},Gr.prototype.Token=an;function vr(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Dr(t,c){let p=t.pos;for(;p<t.posMax&&!vr(t.src.charCodeAt(p));)p++;return p===t.pos?!1:(c||(t.pending+=t.src.slice(t.pos,p)),t.pos=p,!0)}const ir=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function ca(t,c){if(!t.md.options.linkify||t.linkLevel>0)return!1;const p=t.pos,b=t.posMax;if(p+3>b||t.src.charCodeAt(p)!==58||t.src.charCodeAt(p+1)!==47||t.src.charCodeAt(p+2)!==47)return!1;const y=t.pending.match(ir);if(!y)return!1;const v=y[1],I=t.md.linkify.matchAtStart(t.src.slice(p-v.length));if(!I)return!1;let L=I.url;if(L.length<=v.length)return!1;L=L.replace(/\*+$/,"");const K=t.md.normalizeLink(L);if(!t.md.validateLink(K))return!1;if(!c){t.pending=t.pending.slice(0,-v.length);const ce=t.push("link_open","a",1);ce.attrs=[["href",K]],ce.markup="linkify",ce.info="auto";const Pe=t.push("text","",0);Pe.content=t.md.normalizeLinkText(L);const $e=t.push("link_close","a",-1);$e.markup="linkify",$e.info="auto"}return t.pos+=L.length-v.length,!0}function Jr(t,c){let p=t.pos;if(t.src.charCodeAt(p)!==10)return!1;const b=t.pending.length-1,y=t.posMax;if(!c)if(b>=0&&t.pending.charCodeAt(b)===32)if(b>=1&&t.pending.charCodeAt(b-1)===32){let v=b-1;for(;v>=1&&t.pending.charCodeAt(v-1)===32;)v--;t.pending=t.pending.slice(0,v),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(p++;p<y&&X(t.src.charCodeAt(p));)p++;return t.pos=p,!0}const tr=[];for(let t=0;t<256;t++)tr.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){tr[t.charCodeAt(0)]=1});function $a(t,c){let p=t.pos;const b=t.posMax;if(t.src.charCodeAt(p)!==92||(p++,p>=b))return!1;let y=t.src.charCodeAt(p);if(y===10){for(c||t.push("hardbreak","br",0),p++;p<b&&(y=t.src.charCodeAt(p),!!X(y));)p++;return t.pos=p,!0}let v=t.src[p];if(y>=55296&&y<=56319&&p+1<b){const L=t.src.charCodeAt(p+1);L>=56320&&L<=57343&&(v+=t.src[p+1],p++)}const I="\\"+v;if(!c){const L=t.push("text_special","",0);y<256&&tr[y]!==0?L.content=v:L.content=I,L.markup=I,L.info="escape"}return t.pos=p+1,!0}function ja(t,c){let p=t.pos;if(t.src.charCodeAt(p)!==96)return!1;const y=p;p++;const v=t.posMax;for(;p<v&&t.src.charCodeAt(p)===96;)p++;const I=t.src.slice(y,p),L=I.length;if(t.backticksScanned&&(t.backticks[L]||0)<=y)return c||(t.pending+=I),t.pos+=L,!0;let K=p,ce;for(;(ce=t.src.indexOf("`",K))!==-1;){for(K=ce+1;K<v&&t.src.charCodeAt(K)===96;)K++;const Pe=K-ce;if(Pe===L){if(!c){const $e=t.push("code_inline","code",0);$e.markup=I,$e.content=t.src.slice(p,ce).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=K,!0}t.backticks[Pe]=ce}return t.backticksScanned=!0,c||(t.pending+=I),t.pos+=L,!0}function Ja(t,c){const p=t.pos,b=t.src.charCodeAt(p);if(c||b!==126)return!1;const y=t.scanDelims(t.pos,!0);let v=y.length;const I=String.fromCharCode(b);if(v<2)return!1;let L;v%2&&(L=t.push("text","",0),L.content=I,v--);for(let K=0;K<v;K+=2)L=t.push("text","",0),L.content=I+I,t.delimiters.push({marker:b,length:0,token:t.tokens.length-1,end:-1,open:y.can_open,close:y.can_close});return t.pos+=y.length,!0}function ga(t,c){let p;const b=[],y=c.length;for(let v=0;v<y;v++){const I=c[v];if(I.marker!==126||I.end===-1)continue;const L=c[I.end];p=t.tokens[I.token],p.type="s_open",p.tag="s",p.nesting=1,p.markup="~~",p.content="",p=t.tokens[L.token],p.type="s_close",p.tag="s",p.nesting=-1,p.markup="~~",p.content="",t.tokens[L.token-1].type==="text"&&t.tokens[L.token-1].content==="~"&&b.push(L.token-1)}for(;b.length;){const v=b.pop();let I=v+1;for(;I<t.tokens.length&&t.tokens[I].type==="s_close";)I++;I--,v!==I&&(p=t.tokens[I],t.tokens[I]=t.tokens[v],t.tokens[v]=p)}}function eo(t){const c=t.tokens_meta,p=t.tokens_meta.length;ga(t,t.delimiters);for(let b=0;b<p;b++)c[b]&&c[b].delimiters&&ga(t,c[b].delimiters)}var da={tokenize:Ja,postProcess:eo};function qr(t,c){const p=t.pos,b=t.src.charCodeAt(p);if(c||b!==95&&b!==42)return!1;const y=t.scanDelims(t.pos,b===42);for(let v=0;v<y.length;v++){const I=t.push("text","",0);I.content=String.fromCharCode(b),t.delimiters.push({marker:b,length:y.length,token:t.tokens.length-1,end:-1,open:y.can_open,close:y.can_close})}return t.pos+=y.length,!0}function Mr(t,c){const p=c.length;for(let b=p-1;b>=0;b--){const y=c[b];if(y.marker!==95&&y.marker!==42||y.end===-1)continue;const v=c[y.end],I=b>0&&c[b-1].end===y.end+1&&c[b-1].marker===y.marker&&c[b-1].token===y.token-1&&c[y.end+1].token===v.token+1,L=String.fromCharCode(y.marker),K=t.tokens[y.token];K.type=I?"strong_open":"em_open",K.tag=I?"strong":"em",K.nesting=1,K.markup=I?L+L:L,K.content="";const ce=t.tokens[v.token];ce.type=I?"strong_close":"em_close",ce.tag=I?"strong":"em",ce.nesting=-1,ce.markup=I?L+L:L,ce.content="",I&&(t.tokens[c[b-1].token].content="",t.tokens[c[y.end+1].token].content="",b--)}}function Ua(t){const c=t.tokens_meta,p=t.tokens_meta.length;Mr(t,t.delimiters);for(let b=0;b<p;b++)c[b]&&c[b].delimiters&&Mr(t,c[b].delimiters)}var yr={tokenize:qr,postProcess:Ua};function pa(t,c){let p,b,y,v,I="",L="",K=t.pos,ce=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const Pe=t.pos,$e=t.posMax,un=t.pos+1,rn=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(rn<0)return!1;let De=rn+1;if(De<$e&&t.src.charCodeAt(De)===40){for(ce=!1,De++;De<$e&&(p=t.src.charCodeAt(De),!(!X(p)&&p!==10));De++);if(De>=$e)return!1;if(K=De,y=t.md.helpers.parseLinkDestination(t.src,De,t.posMax),y.ok){for(I=t.md.normalizeLink(y.str),t.md.validateLink(I)?De=y.pos:I="",K=De;De<$e&&(p=t.src.charCodeAt(De),!(!X(p)&&p!==10));De++);if(y=t.md.helpers.parseLinkTitle(t.src,De,t.posMax),De<$e&&K!==De&&y.ok)for(L=y.str,De=y.pos;De<$e&&(p=t.src.charCodeAt(De),!(!X(p)&&p!==10));De++);}(De>=$e||t.src.charCodeAt(De)!==41)&&(ce=!0),De++}if(ce){if(typeof t.env.references=="undefined")return!1;if(De<$e&&t.src.charCodeAt(De)===91?(K=De+1,De=t.md.helpers.parseLinkLabel(t,De),De>=0?b=t.src.slice(K,De++):De=rn+1):De=rn+1,b||(b=t.src.slice(un,rn)),v=t.env.references[ge(b)],!v)return t.pos=Pe,!1;I=v.href,L=v.title}if(!c){t.pos=un,t.posMax=rn;const At=t.push("link_open","a",1),rt=[["href",I]];At.attrs=rt,L&&rt.push(["title",L]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=De,t.posMax=$e,!0}function La(t,c){let p,b,y,v,I,L,K,ce,Pe="";const $e=t.pos,un=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const rn=t.pos+2,De=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(De<0)return!1;if(v=De+1,v<un&&t.src.charCodeAt(v)===40){for(v++;v<un&&(p=t.src.charCodeAt(v),!(!X(p)&&p!==10));v++);if(v>=un)return!1;for(ce=v,L=t.md.helpers.parseLinkDestination(t.src,v,t.posMax),L.ok&&(Pe=t.md.normalizeLink(L.str),t.md.validateLink(Pe)?v=L.pos:Pe=""),ce=v;v<un&&(p=t.src.charCodeAt(v),!(!X(p)&&p!==10));v++);if(L=t.md.helpers.parseLinkTitle(t.src,v,t.posMax),v<un&&ce!==v&&L.ok)for(K=L.str,v=L.pos;v<un&&(p=t.src.charCodeAt(v),!(!X(p)&&p!==10));v++);else K="";if(v>=un||t.src.charCodeAt(v)!==41)return t.pos=$e,!1;v++}else{if(typeof t.env.references=="undefined")return!1;if(v<un&&t.src.charCodeAt(v)===91?(ce=v+1,v=t.md.helpers.parseLinkLabel(t,v),v>=0?y=t.src.slice(ce,v++):v=De+1):v=De+1,y||(y=t.src.slice(rn,De)),I=t.env.references[ge(y)],!I)return t.pos=$e,!1;Pe=I.href,K=I.title}if(!c){b=t.src.slice(rn,De);const At=[];t.md.inline.parse(b,t.md,t.env,At);const rt=t.push("image","img",0),pt=[["src",Pe],["alt",""]];rt.attrs=pt,rt.children=At,rt.content=b,K&&pt.push(["title",K])}return t.pos=v,t.posMax=un,!0}const Fa=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,va=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function xr(t,c){let p=t.pos;if(t.src.charCodeAt(p)!==60)return!1;const b=t.pos,y=t.posMax;for(;;){if(++p>=y)return!1;const I=t.src.charCodeAt(p);if(I===60)return!1;if(I===62)break}const v=t.src.slice(b+1,p);if(va.test(v)){const I=t.md.normalizeLink(v);if(!t.md.validateLink(I))return!1;if(!c){const L=t.push("link_open","a",1);L.attrs=[["href",I]],L.markup="autolink",L.info="auto";const K=t.push("text","",0);K.content=t.md.normalizeLinkText(v);const ce=t.push("link_close","a",-1);ce.markup="autolink",ce.info="auto"}return t.pos+=v.length+2,!0}if(Fa.test(v)){const I=t.md.normalizeLink("mailto:"+v);if(!t.md.validateLink(I))return!1;if(!c){const L=t.push("link_open","a",1);L.attrs=[["href",I]],L.markup="autolink",L.info="auto";const K=t.push("text","",0);K.content=t.md.normalizeLinkText(v);const ce=t.push("link_close","a",-1);ce.markup="autolink",ce.info="auto"}return t.pos+=v.length+2,!0}return!1}function no(t){return/^<a[>\s]/i.test(t)}function Er(t){return/^<\/a\s*>/i.test(t)}function Zr(t){const c=t|32;return c>=97&&c<=122}function zr(t,c){if(!t.md.options.html)return!1;const p=t.posMax,b=t.pos;if(t.src.charCodeAt(b)!==60||b+2>=p)return!1;const y=t.src.charCodeAt(b+1);if(y!==33&&y!==63&&y!==47&&!Zr(y))return!1;const v=t.src.slice(b).match(_r);if(!v)return!1;if(!c){const I=t.push("html_inline","",0);I.content=v[0],no(I.content)&&t.linkLevel++,Er(I.content)&&t.linkLevel--}return t.pos+=v[0].length,!0}const Ir=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Oa=/^&([a-z][a-z0-9]{1,31});/i;function xa(t,c){const p=t.pos,b=t.posMax;if(t.src.charCodeAt(p)!==38||p+1>=b)return!1;if(t.src.charCodeAt(p+1)===35){const v=t.src.slice(p).match(Ir);if(v){if(!c){const I=v[1][0].toLowerCase()==="x"?parseInt(v[1].slice(1),16):parseInt(v[1],10),L=t.push("text_special","",0);L.content=J(I)?de(I):de(65533),L.markup=v[0],L.info="entity"}return t.pos+=v[0].length,!0}}else{const v=t.src.slice(p).match(Oa);if(v){const I=w.decodeHTML(v[0]);if(I!==v[0]){if(!c){const L=t.push("text_special","",0);L.content=I,L.markup=v[0],L.info="entity"}return t.pos+=v[0].length,!0}}}return!1}function Ra(t){const c={},p=t.length;if(!p)return;let b=0,y=-2;const v=[];for(let I=0;I<p;I++){const L=t[I];if(v.push(0),(t[b].marker!==L.marker||y!==L.token-1)&&(b=I),y=L.token,L.length=L.length||0,!L.close)continue;c.hasOwnProperty(L.marker)||(c[L.marker]=[-1,-1,-1,-1,-1,-1]);const K=c[L.marker][(L.open?3:0)+L.length%3];let ce=b-v[b]-1,Pe=ce;for(;ce>K;ce-=v[ce]+1){const $e=t[ce];if($e.marker===L.marker&&$e.open&&$e.end<0){let un=!1;if(($e.close||L.open)&&($e.length+L.length)%3===0&&($e.length%3!==0||L.length%3!==0)&&(un=!0),!un){const rn=ce>0&&!t[ce-1].open?v[ce-1]+1:0;v[I]=I-ce+rn,v[ce]=rn,L.open=!1,$e.end=I,$e.close=!1,Pe=-1,y=-2;break}}}Pe!==-1&&(c[L.marker][(L.open?3:0)+(L.length||0)%3]=Pe)}}function Pa(t){const c=t.tokens_meta,p=t.tokens_meta.length;Ra(t.delimiters);for(let b=0;b<p;b++)c[b]&&c[b].delimiters&&Ra(c[b].delimiters)}function Lr(t){let c,p,b=0;const y=t.tokens,v=t.tokens.length;for(c=p=0;c<v;c++)y[c].nesting<0&&b--,y[c].level=b,y[c].nesting>0&&b++,y[c].type==="text"&&c+1<v&&y[c+1].type==="text"?y[c+1].content=y[c].content+y[c+1].content:(c!==p&&(y[p]=y[c]),p++);c!==p&&(y.length=p)}const Ea=[["text",Dr],["linkify",ca],["newline",Jr],["escape",$a],["backticks",ja],["strikethrough",da.tokenize],["emphasis",yr.tokenize],["link",pa],["image",La],["autolink",xr],["html_inline",zr],["entity",xa]],Lt=[["balance_pairs",Pa],["strikethrough",da.postProcess],["emphasis",yr.postProcess],["fragments_join",Lr]];function Wr(){this.ruler=new Ke;for(let t=0;t<Ea.length;t++)this.ruler.push(Ea[t][0],Ea[t][1]);this.ruler2=new Ke;for(let t=0;t<Lt.length;t++)this.ruler2.push(Lt[t][0],Lt[t][1])}Wr.prototype.skipToken=function(t){const c=t.pos,p=this.ruler.getRules(""),b=p.length,y=t.md.options.maxNesting,v=t.cache;if(typeof v[c]!="undefined"){t.pos=v[c];return}let I=!1;if(t.level<y){for(let L=0;L<b;L++)if(t.level++,I=p[L](t,!0),t.level--,I){if(c>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;I||t.pos++,v[c]=t.pos},Wr.prototype.tokenize=function(t){const c=this.ruler.getRules(""),p=c.length,b=t.posMax,y=t.md.options.maxNesting;for(;t.pos<b;){const v=t.pos;let I=!1;if(t.level<y){for(let L=0;L<p;L++)if(I=c[L](t,!1),I){if(v>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(I){if(t.pos>=b)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()},Wr.prototype.parse=function(t,c,p,b){const y=new this.State(t,c,p,b);this.tokenize(y);const v=this.ruler2.getRules(""),I=v.length;for(let L=0;L<I;L++)v[L](y)},Wr.prototype.State=Gr;var Tt={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Yt={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},ea={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}};const to={default:Tt,zero:Yt,commonmark:ea},Ca=/^(vbscript|javascript|file|data):/,Do=/^data:image\/(gif|png|jpeg|webp);/;function Io(t){const c=t.trim().toLowerCase();return Ca.test(c)?Do.test(c):!0}const qa=["http:","https:","mailto:"];function Lo(t){const c=re.parse(t,!0);if(c.hostname&&(!c.protocol||qa.indexOf(c.protocol)>=0))try{c.hostname=Fe.toASCII(c.hostname)}catch(p){}return re.encode(re.format(c))}function Fo(t){const c=re.parse(t,!0);if(c.hostname&&(!c.protocol||qa.indexOf(c.protocol)>=0))try{c.hostname=Fe.toUnicode(c.hostname)}catch(p){}return re.decode(re.format(c),re.decode.defaultChars+"%")}function Cr(t,c){if(!(this instanceof Cr))return new Cr(t,c);c||z(t)||(c=t||{},t="default"),this.inline=new Wr,this.block=new gr,this.core=new xn,this.renderer=new Ee,this.linkify=new R,this.validateLink=Io,this.normalizeLink=Lo,this.normalizeLinkText=Fo,this.utils=cn,this.helpers=te({},xe),this.options={},this.configure(t),c&&this.set(c)}Cr.prototype.set=function(t){return te(this.options,t),this},Cr.prototype.configure=function(t){const c=this;if(z(t)){const p=t;if(t=to[p],!t)throw new Error('Wrong `markdown-it` preset "'+p+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&c.set(t.options),t.components&&Object.keys(t.components).forEach(function(p){t.components[p].rules&&c[p].ruler.enableOnly(t.components[p].rules),t.components[p].rules2&&c[p].ruler2.enableOnly(t.components[p].rules2)}),this},Cr.prototype.enable=function(t,c){let p=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(y){p=p.concat(this[y].ruler.enable(t,!0))},this),p=p.concat(this.inline.ruler2.enable(t,!0));const b=t.filter(function(y){return p.indexOf(y)<0});if(b.length&&!c)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+b);return this},Cr.prototype.disable=function(t,c){let p=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(y){p=p.concat(this[y].ruler.disable(t,!0))},this),p=p.concat(this.inline.ruler2.disable(t,!0));const b=t.filter(function(y){return p.indexOf(y)<0});if(b.length&&!c)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+b);return this},Cr.prototype.use=function(t){const c=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,c),this},Cr.prototype.parse=function(t,c){if(typeof t!="string")throw new Error("Input data should be a String");const p=new this.core.State(t,this,c);return this.core.process(p),p.tokens},Cr.prototype.render=function(t,c){return c=c||{},this.renderer.render(this.parse(t,c),this.options,c)},Cr.prototype.parseInline=function(t,c){const p=new this.core.State(t,this,c);return p.inlineMode=!0,this.core.process(p),p.tokens},Cr.prototype.renderInline=function(t,c){return c=c||{},this.renderer.render(this.parseInline(t,c),this.options,c)},tn.exports=Cr},19226:function(tn,H){"use strict";const B={};function se(U){let D=B[U];if(D)return D;D=B[U]=[];for(let ie=0;ie<128;ie++){const Oe=String.fromCharCode(ie);D.push(Oe)}for(let ie=0;ie<U.length;ie++){const Oe=U.charCodeAt(ie);D[Oe]="%"+("0"+Oe.toString(16).toUpperCase()).slice(-2)}return D}function m(U,D){typeof D!="string"&&(D=m.defaultChars);const ie=se(D);return U.replace(/(%[a-f0-9]{2})+/gi,function(Oe){let Re="";for(let T=0,ne=Oe.length;T<ne;T+=3){const Q=parseInt(Oe.slice(T+1,T+3),16);if(Q<128){Re+=ie[Q];continue}if((Q&224)===192&&T+3<ne){const W=parseInt(Oe.slice(T+4,T+6),16);if((W&192)===128){const X=Q<<6&1984|W&63;X<128?Re+="\uFFFD\uFFFD":Re+=String.fromCharCode(X),T+=3;continue}}if((Q&240)===224&&T+6<ne){const W=parseInt(Oe.slice(T+4,T+6),16),X=parseInt(Oe.slice(T+7,T+9),16);if((W&192)===128&&(X&192)===128){const Ae=Q<<12&61440|W<<6&4032|X&63;Ae<2048||Ae>=55296&&Ae<=57343?Re+="\uFFFD\uFFFD\uFFFD":Re+=String.fromCharCode(Ae),T+=6;continue}}if((Q&248)===240&&T+9<ne){const W=parseInt(Oe.slice(T+4,T+6),16),X=parseInt(Oe.slice(T+7,T+9),16),Ae=parseInt(Oe.slice(T+10,T+12),16);if((W&192)===128&&(X&192)===128&&(Ae&192)===128){let Be=Q<<18&1835008|W<<12&258048|X<<6&4032|Ae&63;Be<65536||Be>1114111?Re+="\uFFFD\uFFFD\uFFFD\uFFFD":(Be-=65536,Re+=String.fromCharCode(55296+(Be>>10),56320+(Be&1023))),T+=9;continue}}Re+="\uFFFD"}return Re})}m.defaultChars=";/?:@&=+$,#",m.componentChars="";const w={};function R(U){let D=w[U];if(D)return D;D=w[U]=[];for(let ie=0;ie<128;ie++){const Oe=String.fromCharCode(ie);/^[0-9a-z]$/i.test(Oe)?D.push(Oe):D.push("%"+("0"+ie.toString(16).toUpperCase()).slice(-2))}for(let ie=0;ie<U.length;ie++)D[U.charCodeAt(ie)]=U[ie];return D}function Fe(U,D,ie){typeof D!="string"&&(ie=D,D=Fe.defaultChars),typeof ie=="undefined"&&(ie=!0);const Oe=R(D);let Re="";for(let T=0,ne=U.length;T<ne;T++){const Q=U.charCodeAt(T);if(ie&&Q===37&&T+2<ne&&/^[0-9a-f]{2}$/i.test(U.slice(T+1,T+3))){Re+=U.slice(T,T+3),T+=2;continue}if(Q<128){Re+=Oe[Q];continue}if(Q>=55296&&Q<=57343){if(Q>=55296&&Q<=56319&&T+1<ne){const W=U.charCodeAt(T+1);if(W>=56320&&W<=57343){Re+=encodeURIComponent(U[T]+U[T+1]),T++;continue}}Re+="%EF%BF%BD";continue}Re+=encodeURIComponent(U[T])}return Re}Fe.defaultChars=";/?:@&=+$,-_.!~*'()#",Fe.componentChars="-_.!~*'()";function G(U){let D="";return D+=U.protocol||"",D+=U.slashes?"//":"",D+=U.auth?U.auth+"@":"",U.hostname&&U.hostname.indexOf(":")!==-1?D+="["+U.hostname+"]":D+=U.hostname||"",D+=U.port?":"+U.port:"",D+=U.pathname||"",D+=U.search||"",D+=U.hash||"",D}function re(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const _=/^([a-z0-9.+-]+:)/i,C=/:[0-9]*$/,z=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,O=["<",">",'"',"`"," ","\r",`
`,"	"],g=["{","}","|","\\","^","`"].concat(O),te=["'"].concat(g),me=["%","/","?",";","#"].concat(te),J=["/","?","#"],de=255,Ce=/^[+a-z0-9A-Z_-]{0,63}$/,be=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,We={javascript:!0,"javascript:":!0},Ze={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function dn(U,D){if(U&&U instanceof re)return U;const ie=new re;return ie.parse(U,D),ie}re.prototype.parse=function(U,D){let ie,Oe,Re,T=U;if(T=T.trim(),!D&&U.split("#").length===1){const X=z.exec(T);if(X)return this.pathname=X[1],X[2]&&(this.search=X[2]),this}let ne=_.exec(T);if(ne&&(ne=ne[0],ie=ne.toLowerCase(),this.protocol=ne,T=T.substr(ne.length)),(D||ne||T.match(/^\/\/[^@\/]+@[^@\/]+/))&&(Re=T.substr(0,2)==="//",Re&&!(ne&&We[ne])&&(T=T.substr(2),this.slashes=!0)),!We[ne]&&(Re||ne&&!Ze[ne])){let X=-1;for(let Ge=0;Ge<J.length;Ge++)Oe=T.indexOf(J[Ge]),Oe!==-1&&(X===-1||Oe<X)&&(X=Oe);let Ae,Be;X===-1?Be=T.lastIndexOf("@"):Be=T.lastIndexOf("@",X),Be!==-1&&(Ae=T.slice(0,Be),T=T.slice(Be+1),this.auth=Ae),X=-1;for(let Ge=0;Ge<me.length;Ge++)Oe=T.indexOf(me[Ge]),Oe!==-1&&(X===-1||Oe<X)&&(X=Oe);X===-1&&(X=T.length),T[X-1]===":"&&X--;const Ue=T.slice(0,X);T=T.slice(X),this.parseHost(Ue),this.hostname=this.hostname||"";const ge=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!ge){const Ge=this.hostname.split(/\./);for(let cn=0,Xn=Ge.length;cn<Xn;cn++){const ue=Ge[cn];if(ue&&!ue.match(Ce)){let ve="";for(let xe=0,V=ue.length;xe<V;xe++)ue.charCodeAt(xe)>127?ve+="x":ve+=ue[xe];if(!ve.match(Ce)){const xe=Ge.slice(0,cn),V=Ge.slice(cn+1),Ee=ue.match(be);Ee&&(xe.push(Ee[1]),V.unshift(Ee[2])),V.length&&(T=V.join(".")+T),this.hostname=xe.join(".");break}}}}this.hostname.length>de&&(this.hostname=""),ge&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const Q=T.indexOf("#");Q!==-1&&(this.hash=T.substr(Q),T=T.slice(0,Q));const W=T.indexOf("?");return W!==-1&&(this.search=T.substr(W),T=T.slice(0,W)),T&&(this.pathname=T),Ze[ie]&&this.hostname&&!this.pathname&&(this.pathname=""),this},re.prototype.parseHost=function(U){let D=C.exec(U);D&&(D=D[0],D!==":"&&(this.port=D.substr(1)),U=U.substr(0,U.length-D.length)),U&&(this.hostname=U)},H.decode=m,H.encode=Fe,H.format=G,H.parse=dn},27418:function(tn){"use strict";var H=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;function m(R){if(R==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(R)}function w(){try{if(!Object.assign)return!1;var R=new String("abc");if(R[5]="de",Object.getOwnPropertyNames(R)[0]==="5")return!1;for(var Fe={},G=0;G<10;G++)Fe["_"+String.fromCharCode(G)]=G;var re=Object.getOwnPropertyNames(Fe).map(function(C){return Fe[C]});if(re.join("")!=="0123456789")return!1;var _={};return"abcdefghijklmnopqrst".split("").forEach(function(C){_[C]=C}),Object.keys(Object.assign({},_)).join("")==="abcdefghijklmnopqrst"}catch(C){return!1}}tn.exports=w()?Object.assign:function(R,Fe){for(var G,re=m(R),_,C=1;C<arguments.length;C++){G=Object(arguments[C]);for(var z in G)B.call(G,z)&&(re[z]=G[z]);if(H){_=H(G);for(var O=0;O<_.length;O++)se.call(G,_[O])&&(re[_[O]]=G[_[O]])}}return re}},35748:function(tn,H,B){"use strict";B.r(H),B.d(H,{decode:function(){return Oe},encode:function(){return Re},toASCII:function(){return ne},toUnicode:function(){return T},ucs2decode:function(){return Ze},ucs2encode:function(){return dn}});const se=2147483647,m=36,w=1,R=26,Fe=38,G=700,re=72,_=128,C="-",z=/^xn--/,O=/[^\0-\x7F]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,te={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},me=m-w,J=Math.floor,de=String.fromCharCode;function Ce(W){throw new RangeError(te[W])}function be(W,X){const Ae=[];let Be=W.length;for(;Be--;)Ae[Be]=X(W[Be]);return Ae}function We(W,X){const Ae=W.split("@");let Be="";Ae.length>1&&(Be=Ae[0]+"@",W=Ae[1]),W=W.replace(g,".");const Ue=W.split("."),ge=be(Ue,X).join(".");return Be+ge}function Ze(W){const X=[];let Ae=0;const Be=W.length;for(;Ae<Be;){const Ue=W.charCodeAt(Ae++);if(Ue>=55296&&Ue<=56319&&Ae<Be){const ge=W.charCodeAt(Ae++);(ge&64512)==56320?X.push(((Ue&1023)<<10)+(ge&1023)+65536):(X.push(Ue),Ae--)}else X.push(Ue)}return X}const dn=W=>String.fromCodePoint(...W),U=function(W){return W>=48&&W<58?26+(W-48):W>=65&&W<91?W-65:W>=97&&W<123?W-97:m},D=function(W,X){return W+22+75*(W<26)-((X!=0)<<5)},ie=function(W,X,Ae){let Be=0;for(W=Ae?J(W/G):W>>1,W+=J(W/X);W>me*R>>1;Be+=m)W=J(W/me);return J(Be+(me+1)*W/(W+Fe))},Oe=function(W){const X=[],Ae=W.length;let Be=0,Ue=_,ge=re,Ge=W.lastIndexOf(C);Ge<0&&(Ge=0);for(let cn=0;cn<Ge;++cn)W.charCodeAt(cn)>=128&&Ce("not-basic"),X.push(W.charCodeAt(cn));for(let cn=Ge>0?Ge+1:0;cn<Ae;){const Xn=Be;for(let ve=1,xe=m;;xe+=m){cn>=Ae&&Ce("invalid-input");const V=U(W.charCodeAt(cn++));V>=m&&Ce("invalid-input"),V>J((se-Be)/ve)&&Ce("overflow"),Be+=V*ve;const Ee=xe<=ge?w:xe>=ge+R?R:xe-ge;if(V<Ee)break;const Ke=m-Ee;ve>J(se/Ke)&&Ce("overflow"),ve*=Ke}const ue=X.length+1;ge=ie(Be-Xn,ue,Xn==0),J(Be/ue)>se-Ue&&Ce("overflow"),Ue+=J(Be/ue),Be%=ue,X.splice(Be++,0,Ue)}return String.fromCodePoint(...X)},Re=function(W){const X=[];W=Ze(W);const Ae=W.length;let Be=_,Ue=0,ge=re;for(const Xn of W)Xn<128&&X.push(de(Xn));const Ge=X.length;let cn=Ge;for(Ge&&X.push(C);cn<Ae;){let Xn=se;for(const ve of W)ve>=Be&&ve<Xn&&(Xn=ve);const ue=cn+1;Xn-Be>J((se-Ue)/ue)&&Ce("overflow"),Ue+=(Xn-Be)*ue,Be=Xn;for(const ve of W)if(ve<Be&&++Ue>se&&Ce("overflow"),ve===Be){let xe=Ue;for(let V=m;;V+=m){const Ee=V<=ge?w:V>=ge+R?R:V-ge;if(xe<Ee)break;const Ke=xe-Ee,an=m-Ee;X.push(de(D(Ee+Ke%an,0))),xe=J(Ke/an)}X.push(de(D(xe,0))),ge=ie(Ue,ue,cn===Ge),Ue=0,++cn}++Ue,++Be}return X.join("")},T=function(W){return We(W,function(X){return z.test(X)?Oe(X.slice(4).toLowerCase()):X})},ne=function(W){return We(W,function(X){return O.test(X)?"xn--"+Re(X):X})},Q={version:"2.3.1",ucs2:{decode:Ze,encode:dn},decode:Oe,encode:Re,toASCII:ne,toUnicode:T};H.default=Q},13313:function(tn,H,B){"use strict";B.d(H,{Z:function(){return Xn}});var se=B(67294);function m(ue){var ve,xe,V="";if(typeof ue=="string"||typeof ue=="number")V+=ue;else if(typeof ue=="object")if(Array.isArray(ue))for(ve=0;ve<ue.length;ve++)ue[ve]&&(xe=m(ue[ve]))&&(V&&(V+=" "),V+=xe);else for(ve in ue)ue[ve]&&(V&&(V+=" "),V+=ve);return V}function w(){for(var ue,ve,xe=0,V="";xe<arguments.length;)(ue=arguments[xe++])&&(ve=m(ue))&&(V&&(V+=" "),V+=ve);return V}var R=w;function Fe(ue,ve){for(var xe=Object.assign({},ue),V=0;V<ve.length;V+=1){var Ee=ve[V];delete xe[Ee]}return xe}var G=Fe,re=B(5953),_=B.n(re);function C(ue){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(xe){return typeof xe}:C=function(xe){return xe&&typeof Symbol=="function"&&xe.constructor===Symbol&&xe!==Symbol.prototype?"symbol":typeof xe},C(ue)}function z(){return z=Object.assign||function(ue){for(var ve=1;ve<arguments.length;ve++){var xe=arguments[ve];for(var V in xe)Object.prototype.hasOwnProperty.call(xe,V)&&(ue[V]=xe[V])}return ue},z.apply(this,arguments)}function O(ue){return J(ue)||me(ue)||te(ue)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(ue,ve){if(ue){if(typeof ue=="string")return de(ue,ve);var xe=Object.prototype.toString.call(ue).slice(8,-1);if(xe==="Object"&&ue.constructor&&(xe=ue.constructor.name),xe==="Map"||xe==="Set")return Array.from(ue);if(xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xe))return de(ue,ve)}}function me(ue){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(ue))return Array.from(ue)}function J(ue){if(Array.isArray(ue))return de(ue)}function de(ue,ve){(ve==null||ve>ue.length)&&(ve=ue.length);for(var xe=0,V=new Array(ve);xe<ve;xe++)V[xe]=ue[xe];return V}function Ce(ue,ve){if(ue==null)return{};var xe=be(ue,ve),V,Ee;if(Object.getOwnPropertySymbols){var Ke=Object.getOwnPropertySymbols(ue);for(Ee=0;Ee<Ke.length;Ee++)V=Ke[Ee],!(ve.indexOf(V)>=0)&&Object.prototype.propertyIsEnumerable.call(ue,V)&&(xe[V]=ue[V])}return xe}function be(ue,ve){if(ue==null)return{};var xe={},V=Object.keys(ue),Ee,Ke;for(Ke=0;Ke<V.length;Ke++)Ee=V[Ke],!(ve.indexOf(Ee)>=0)&&(xe[Ee]=ue[Ee]);return xe}function We(ue,ve){var xe=Object.keys(ue);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(ue);ve&&(V=V.filter(function(Ee){return Object.getOwnPropertyDescriptor(ue,Ee).enumerable})),xe.push.apply(xe,V)}return xe}function Ze(ue){for(var ve=1;ve<arguments.length;ve++){var xe=arguments[ve]!=null?arguments[ve]:{};ve%2?We(Object(xe),!0).forEach(function(V){dn(ue,V,xe[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ue,Object.getOwnPropertyDescriptors(xe)):We(Object(xe)).forEach(function(V){Object.defineProperty(ue,V,Object.getOwnPropertyDescriptor(xe,V))})}return ue}function dn(ue,ve,xe){return ve in ue?Object.defineProperty(ue,ve,{value:xe,enumerable:!0,configurable:!0,writable:!0}):ue[ve]=xe,ue}function U(ue,ve){if(!(ue instanceof ve))throw new TypeError("Cannot call a class as a function")}function D(ue,ve){for(var xe=0;xe<ve.length;xe++){var V=ve[xe];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(ue,V.key,V)}}function ie(ue,ve,xe){return ve&&D(ue.prototype,ve),xe&&D(ue,xe),ue}function Oe(ue,ve){if(typeof ve!="function"&&ve!==null)throw new TypeError("Super expression must either be null or a function");ue.prototype=Object.create(ve&&ve.prototype,{constructor:{value:ue,writable:!0,configurable:!0}}),ve&&Re(ue,ve)}function Re(ue,ve){return Re=Object.setPrototypeOf||function(V,Ee){return V.__proto__=Ee,V},Re(ue,ve)}function T(ue){var ve=W();return function(){var V=X(ue),Ee;if(ve){var Ke=X(this).constructor;Ee=Reflect.construct(V,arguments,Ke)}else Ee=V.apply(this,arguments);return ne(this,Ee)}}function ne(ue,ve){return ve&&(C(ve)==="object"||typeof ve=="function")?ve:Q(ue)}function Q(ue){if(ue===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ue}function W(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(ue){return!1}}function X(ue){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(xe){return xe.__proto__||Object.getPrototypeOf(xe)},X(ue)}var Ae=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"],Be=function(ve){return"".concat(ve.charAt(0).toUpperCase()).concat(ve.substring(1))},Ue=function(ve){return ve.split("_").map(Be).join("")},ge=Ae.map(function(ue){return{eventName:ue,prop:"on".concat(Ue(ue))}}),Ge=function(ue){Oe(xe,ue);var ve=T(xe);function xe(V,Ee){return U(this,xe),ve.call(this,V,Ee)}return ie(xe,[{key:"componentDidMount",value:function(){var Ee=this,Ke=this.props,an=Ke.onLoad,In=Ke.options,On=this.dp=new(_())(Ze(Ze({},Object.assign({},{lang:"zh-cn",contextmenu:[{text:"Author",link:"https://github.com/hnsylitao"},{text:"GitHub",link:"https://github.com/MoePlayer/react-dplayer"}]},In)),{},{container:this.container}));an&&an(On),ge.forEach(function(gn){var Qn=gn.eventName,vn=gn.prop;vn in Ee.props&&On.on(Qn,Ee.props[vn])})}},{key:"render",value:function(){var Ee,Ke=this,an=this.props,In=an.className,On=Ce(an,["className"]),gn=G(On,["options","onLoad"].concat(O(ge.map(function(vn){return vn.prop})))),Qn=R((Ee={},dn(Ee,"dplayer",!0),dn(Ee,"".concat(In),!!In),Ee));return se.createElement("div",z({ref:function(ht){return Ke.container=ht},className:Qn},gn))}}]),xe}(se.Component),cn=Ge,Xn=cn},64593:function(tn,H,B){"use strict";B.d(H,{q:function(){return kt}});var se=B(45697),m=B.n(se),w=B(83524),R=B.n(w),Fe=B(69590),G=B.n(Fe),re=B(67294),_=B(27418),C=B.n(_),z={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=Object.keys(O).map(function(Ve){return O[Ve]}),te={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},me={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},J={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},de=Object.keys(me).reduce(function(Ve,Y){return Ve[me[Y]]=Y,Ve},{}),Ce=[O.NOSCRIPT,O.SCRIPT,O.STYLE],be="data-react-helmet",We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Ve){return typeof Ve}:function(Ve){return Ve&&typeof Symbol=="function"&&Ve.constructor===Symbol&&Ve!==Symbol.prototype?"symbol":typeof Ve},Ze=function(Ve,Y){if(!(Ve instanceof Y))throw new TypeError("Cannot call a class as a function")},dn=function(){function Ve(Y,Ie){for(var Te=0;Te<Ie.length;Te++){var we=Ie[Te];we.enumerable=we.enumerable||!1,we.configurable=!0,"value"in we&&(we.writable=!0),Object.defineProperty(Y,we.key,we)}}return function(Y,Ie,Te){return Ie&&Ve(Y.prototype,Ie),Te&&Ve(Y,Te),Y}}(),U=Object.assign||function(Ve){for(var Y=1;Y<arguments.length;Y++){var Ie=arguments[Y];for(var Te in Ie)Object.prototype.hasOwnProperty.call(Ie,Te)&&(Ve[Te]=Ie[Te])}return Ve},D=function(Ve,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Y);Ve.prototype=Object.create(Y&&Y.prototype,{constructor:{value:Ve,enumerable:!1,writable:!0,configurable:!0}}),Y&&(Object.setPrototypeOf?Object.setPrototypeOf(Ve,Y):Ve.__proto__=Y)},ie=function(Ve,Y){var Ie={};for(var Te in Ve)Y.indexOf(Te)>=0||Object.prototype.hasOwnProperty.call(Ve,Te)&&(Ie[Te]=Ve[Te]);return Ie},Oe=function(Ve,Y){if(!Ve)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Y&&(typeof Y=="object"||typeof Y=="function")?Y:Ve},Re=function(Y){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Ie===!1?String(Y):String(Y).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(Y){var Ie=Ae(Y,O.TITLE),Te=Ae(Y,J.TITLE_TEMPLATE);if(Te&&Ie)return Te.replace(/%s/g,function(){return Array.isArray(Ie)?Ie.join(""):Ie});var we=Ae(Y,J.DEFAULT_TITLE);return Ie||we||void 0},ne=function(Y){return Ae(Y,J.ON_CHANGE_CLIENT_STATE)||function(){}},Q=function(Y,Ie){return Ie.filter(function(Te){return typeof Te[Y]!="undefined"}).map(function(Te){return Te[Y]}).reduce(function(Te,we){return U({},Te,we)},{})},W=function(Y,Ie){return Ie.filter(function(Te){return typeof Te[O.BASE]!="undefined"}).map(function(Te){return Te[O.BASE]}).reverse().reduce(function(Te,we){if(!Te.length)for(var Xe=Object.keys(we),Cn=0;Cn<Xe.length;Cn++){var Je=Xe[Cn],$=Je.toLowerCase();if(Y.indexOf($)!==-1&&we[$])return Te.concat(we)}return Te},[])},X=function(Y,Ie,Te){var we={};return Te.filter(function(Xe){return Array.isArray(Xe[Y])?!0:(typeof Xe[Y]!="undefined"&&Xn("Helmet: "+Y+' should be of type "Array". Instead found type "'+We(Xe[Y])+'"'),!1)}).map(function(Xe){return Xe[Y]}).reverse().reduce(function(Xe,Cn){var Je={};Cn.filter(function(qe){for(var Bn=void 0,it=Object.keys(qe),xt=0;xt<it.length;xt++){var Ft=it[xt],St=Ft.toLowerCase();Ie.indexOf(St)!==-1&&!(Bn===te.REL&&qe[Bn].toLowerCase()==="canonical")&&!(St===te.REL&&qe[St].toLowerCase()==="stylesheet")&&(Bn=St),Ie.indexOf(Ft)!==-1&&(Ft===te.INNER_HTML||Ft===te.CSS_TEXT||Ft===te.ITEM_PROP)&&(Bn=Ft)}if(!Bn||!qe[Bn])return!1;var Ot=qe[Bn].toLowerCase();return we[Bn]||(we[Bn]={}),Je[Bn]||(Je[Bn]={}),we[Bn][Ot]?!1:(Je[Bn][Ot]=!0,!0)}).reverse().forEach(function(qe){return Xe.push(qe)});for(var $=Object.keys(Je),on=0;on<$.length;on++){var wn=$[on],xn=C()({},we[wn],Je[wn]);we[wn]=xn}return Xe},[]).reverse()},Ae=function(Y,Ie){for(var Te=Y.length-1;Te>=0;Te--){var we=Y[Te];if(we.hasOwnProperty(Ie))return we[Ie]}return null},Be=function(Y){return{baseTag:W([te.HREF,te.TARGET],Y),bodyAttributes:Q(z.BODY,Y),defer:Ae(Y,J.DEFER),encode:Ae(Y,J.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Q(z.HTML,Y),linkTags:X(O.LINK,[te.REL,te.HREF],Y),metaTags:X(O.META,[te.NAME,te.CHARSET,te.HTTPEQUIV,te.PROPERTY,te.ITEM_PROP],Y),noscriptTags:X(O.NOSCRIPT,[te.INNER_HTML],Y),onChangeClientState:ne(Y),scriptTags:X(O.SCRIPT,[te.SRC,te.INNER_HTML],Y),styleTags:X(O.STYLE,[te.CSS_TEXT],Y),title:T(Y),titleAttributes:Q(z.TITLE,Y)}},Ue=function(){var Ve=Date.now();return function(Y){var Ie=Date.now();Ie-Ve>16?(Ve=Ie,Y(Ie)):setTimeout(function(){Ue(Y)},0)}}(),ge=function(Y){return clearTimeout(Y)},Ge=typeof window!="undefined"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ue:B.g.requestAnimationFrame||Ue,cn=typeof window!="undefined"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ge:B.g.cancelAnimationFrame||ge,Xn=function(Y){return console&&typeof console.warn=="function"&&console.warn(Y)},ue=null,ve=function(Y){ue&&cn(ue),Y.defer?ue=Ge(function(){xe(Y,function(){ue=null})}):(xe(Y),ue=null)},xe=function(Y,Ie){var Te=Y.baseTag,we=Y.bodyAttributes,Xe=Y.htmlAttributes,Cn=Y.linkTags,Je=Y.metaTags,$=Y.noscriptTags,on=Y.onChangeClientState,wn=Y.scriptTags,xn=Y.styleTags,qe=Y.title,Bn=Y.titleAttributes;Ke(O.BODY,we),Ke(O.HTML,Xe),Ee(qe,Bn);var it={baseTag:an(O.BASE,Te),linkTags:an(O.LINK,Cn),metaTags:an(O.META,Je),noscriptTags:an(O.NOSCRIPT,$),scriptTags:an(O.SCRIPT,wn),styleTags:an(O.STYLE,xn)},xt={},Ft={};Object.keys(it).forEach(function(St){var Ot=it[St],He=Ot.newTags,he=Ot.oldTags;He.length&&(xt[St]=He),he.length&&(Ft[St]=it[St].oldTags)}),Ie&&Ie(),on(Y,xt,Ft)},V=function(Y){return Array.isArray(Y)?Y.join(""):Y},Ee=function(Y,Ie){typeof Y!="undefined"&&document.title!==Y&&(document.title=V(Y)),Ke(O.TITLE,Ie)},Ke=function(Y,Ie){var Te=document.getElementsByTagName(Y)[0];if(Te){for(var we=Te.getAttribute(be),Xe=we?we.split(","):[],Cn=[].concat(Xe),Je=Object.keys(Ie),$=0;$<Je.length;$++){var on=Je[$],wn=Ie[on]||"";Te.getAttribute(on)!==wn&&Te.setAttribute(on,wn),Xe.indexOf(on)===-1&&Xe.push(on);var xn=Cn.indexOf(on);xn!==-1&&Cn.splice(xn,1)}for(var qe=Cn.length-1;qe>=0;qe--)Te.removeAttribute(Cn[qe]);Xe.length===Cn.length?Te.removeAttribute(be):Te.getAttribute(be)!==Je.join(",")&&Te.setAttribute(be,Je.join(","))}},an=function(Y,Ie){var Te=document.head||document.querySelector(O.HEAD),we=Te.querySelectorAll(Y+"["+be+"]"),Xe=Array.prototype.slice.call(we),Cn=[],Je=void 0;return Ie&&Ie.length&&Ie.forEach(function($){var on=document.createElement(Y);for(var wn in $)if($.hasOwnProperty(wn))if(wn===te.INNER_HTML)on.innerHTML=$.innerHTML;else if(wn===te.CSS_TEXT)on.styleSheet?on.styleSheet.cssText=$.cssText:on.appendChild(document.createTextNode($.cssText));else{var xn=typeof $[wn]=="undefined"?"":$[wn];on.setAttribute(wn,xn)}on.setAttribute(be,"true"),Xe.some(function(qe,Bn){return Je=Bn,on.isEqualNode(qe)})?Xe.splice(Je,1):Cn.push(on)}),Xe.forEach(function($){return $.parentNode.removeChild($)}),Cn.forEach(function($){return Te.appendChild($)}),{oldTags:Xe,newTags:Cn}},In=function(Y){return Object.keys(Y).reduce(function(Ie,Te){var we=typeof Y[Te]!="undefined"?Te+'="'+Y[Te]+'"':""+Te;return Ie?Ie+" "+we:we},"")},On=function(Y,Ie,Te,we){var Xe=In(Te),Cn=V(Ie);return Xe?"<"+Y+" "+be+'="true" '+Xe+">"+Re(Cn,we)+"</"+Y+">":"<"+Y+" "+be+'="true">'+Re(Cn,we)+"</"+Y+">"},gn=function(Y,Ie,Te){return Ie.reduce(function(we,Xe){var Cn=Object.keys(Xe).filter(function(on){return!(on===te.INNER_HTML||on===te.CSS_TEXT)}).reduce(function(on,wn){var xn=typeof Xe[wn]=="undefined"?wn:wn+'="'+Re(Xe[wn],Te)+'"';return on?on+" "+xn:xn},""),Je=Xe.innerHTML||Xe.cssText||"",$=Ce.indexOf(Y)===-1;return we+"<"+Y+" "+be+'="true" '+Cn+($?"/>":">"+Je+"</"+Y+">")},"")},Qn=function(Y){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(Y).reduce(function(Te,we){return Te[me[we]||we]=Y[we],Te},Ie)},vn=function(Y){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(Y).reduce(function(Te,we){return Te[de[we]||we]=Y[we],Te},Ie)},ht=function(Y,Ie,Te){var we,Xe=(we={key:Ie},we[be]=!0,we),Cn=Qn(Te,Xe);return[re.createElement(O.TITLE,Cn,Ie)]},ct=function(Y,Ie){return Ie.map(function(Te,we){var Xe,Cn=(Xe={key:we},Xe[be]=!0,Xe);return Object.keys(Te).forEach(function(Je){var $=me[Je]||Je;if($===te.INNER_HTML||$===te.CSS_TEXT){var on=Te.innerHTML||Te.cssText;Cn.dangerouslySetInnerHTML={__html:on}}else Cn[$]=Te[Je]}),re.createElement(Y,Cn)})},Un=function(Y,Ie,Te){switch(Y){case O.TITLE:return{toComponent:function(){return ht(Y,Ie.title,Ie.titleAttributes,Te)},toString:function(){return On(Y,Ie.title,Ie.titleAttributes,Te)}};case z.BODY:case z.HTML:return{toComponent:function(){return Qn(Ie)},toString:function(){return In(Ie)}};default:return{toComponent:function(){return ct(Y,Ie)},toString:function(){return gn(Y,Ie,Te)}}}},Zt=function(Y){var Ie=Y.baseTag,Te=Y.bodyAttributes,we=Y.encode,Xe=Y.htmlAttributes,Cn=Y.linkTags,Je=Y.metaTags,$=Y.noscriptTags,on=Y.scriptTags,wn=Y.styleTags,xn=Y.title,qe=xn===void 0?"":xn,Bn=Y.titleAttributes;return{base:Un(O.BASE,Ie,we),bodyAttributes:Un(z.BODY,Te,we),htmlAttributes:Un(z.HTML,Xe,we),link:Un(O.LINK,Cn,we),meta:Un(O.META,Je,we),noscript:Un(O.NOSCRIPT,$,we),script:Un(O.SCRIPT,on,we),style:Un(O.STYLE,wn,we),title:Un(O.TITLE,{title:qe,titleAttributes:Bn},we)}},Mt=function(Y){var Ie,Te;return Te=Ie=function(we){D(Xe,we);function Xe(){return Ze(this,Xe),Oe(this,we.apply(this,arguments))}return Xe.prototype.shouldComponentUpdate=function(Je){return!G()(this.props,Je)},Xe.prototype.mapNestedChildrenToProps=function(Je,$){if(!$)return null;switch(Je.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:$};case O.STYLE:return{cssText:$}}throw new Error("<"+Je.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},Xe.prototype.flattenArrayTypeChildren=function(Je){var $,on=Je.child,wn=Je.arrayTypeChildren,xn=Je.newChildProps,qe=Je.nestedChildren;return U({},wn,($={},$[on.type]=[].concat(wn[on.type]||[],[U({},xn,this.mapNestedChildrenToProps(on,qe))]),$))},Xe.prototype.mapObjectTypeChildren=function(Je){var $,on,wn=Je.child,xn=Je.newProps,qe=Je.newChildProps,Bn=Je.nestedChildren;switch(wn.type){case O.TITLE:return U({},xn,($={},$[wn.type]=Bn,$.titleAttributes=U({},qe),$));case O.BODY:return U({},xn,{bodyAttributes:U({},qe)});case O.HTML:return U({},xn,{htmlAttributes:U({},qe)})}return U({},xn,(on={},on[wn.type]=U({},qe),on))},Xe.prototype.mapArrayTypeChildrenToProps=function(Je,$){var on=U({},$);return Object.keys(Je).forEach(function(wn){var xn;on=U({},on,(xn={},xn[wn]=Je[wn],xn))}),on},Xe.prototype.warnOnInvalidChildren=function(Je,$){return!0},Xe.prototype.mapChildrenToProps=function(Je,$){var on=this,wn={};return re.Children.forEach(Je,function(xn){if(!(!xn||!xn.props)){var qe=xn.props,Bn=qe.children,it=ie(qe,["children"]),xt=vn(it);switch(on.warnOnInvalidChildren(xn,Bn),xn.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:wn=on.flattenArrayTypeChildren({child:xn,arrayTypeChildren:wn,newChildProps:xt,nestedChildren:Bn});break;default:$=on.mapObjectTypeChildren({child:xn,newProps:$,newChildProps:xt,nestedChildren:Bn});break}}}),$=this.mapArrayTypeChildrenToProps(wn,$),$},Xe.prototype.render=function(){var Je=this.props,$=Je.children,on=ie(Je,["children"]),wn=U({},on);return $&&(wn=this.mapChildrenToProps($,wn)),re.createElement(Y,wn)},dn(Xe,null,[{key:"canUseDOM",set:function(Je){Y.canUseDOM=Je}}]),Xe}(re.Component),Ie.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},Ie.defaultProps={defer:!0,encodeSpecialCharacters:!0},Ie.peek=Y.peek,Ie.rewind=function(){var we=Y.rewind();return we||(we=Zt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),we},Te},vt=function(){return null},Gn=R()(Be,ve,Zt)(vt),kt=Mt(Gn);kt.renderStatic=kt.rewind;var Ct=null},83524:function(tn,H,B){"use strict";function se(_){return _&&typeof _=="object"&&"default"in _?_.default:_}var m=B(67294),w=se(m);function R(_,C,z){return C in _?Object.defineProperty(_,C,{value:z,enumerable:!0,configurable:!0,writable:!0}):_[C]=z,_}function Fe(_,C){_.prototype=Object.create(C.prototype),_.prototype.constructor=_,_.__proto__=C}var G=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function re(_,C,z){if(typeof _!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof C!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof z!="undefined"&&typeof z!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function O(g){return g.displayName||g.name||"Component"}return function(te){if(typeof te!="function")throw new Error("Expected WrappedComponent to be a React component.");var me=[],J;function de(){J=_(me.map(function(be){return be.props})),Ce.canUseDOM?C(J):z&&(J=z(J))}var Ce=function(be){Fe(We,be);function We(){return be.apply(this,arguments)||this}We.peek=function(){return J},We.rewind=function(){if(We.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var U=J;return J=void 0,me=[],U};var Ze=We.prototype;return Ze.UNSAFE_componentWillMount=function(){me.push(this),de()},Ze.componentDidUpdate=function(){de()},Ze.componentWillUnmount=function(){var U=me.indexOf(this);me.splice(U,1),de()},Ze.render=function(){return w.createElement(te,this.props)},We}(m.PureComponent);return R(Ce,"displayName","SideEffect("+O(te)+")"),R(Ce,"canUseDOM",G),Ce}}tn.exports=re},5814:function(tn,H){"use strict";var B=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,se=/[\0-\x1F\x7F-\x9F]/,m=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,w=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,R=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Fe=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;H.Any=B,H.Cc=se,H.Cf=m,H.P=w,H.S=R,H.Z=Fe},96446:function(tn,H,B){var se=B(37923);function m(w){if(Array.isArray(w))return se(w)}tn.exports=m,tn.exports.__esModule=!0,tn.exports.default=tn.exports},96936:function(tn){function H(B){if(typeof Symbol!="undefined"&&B[Symbol.iterator]!=null||B["@@iterator"]!=null)return Array.from(B)}tn.exports=H,tn.exports.__esModule=!0,tn.exports.default=tn.exports},88619:function(tn){function H(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}tn.exports=H,tn.exports.__esModule=!0,tn.exports.default=tn.exports},19632:function(tn,H,B){var se=B(96446),m=B(96936),w=B(96263),R=B(88619);function Fe(G){return se(G)||m(G)||w(G)||R()}tn.exports=Fe,tn.exports.__esModule=!0,tn.exports.default=tn.exports}}]);
}());