var freeaps_glucoseGetLast;(()=>{var e={6237:e=>{function a(e){return e.date||Date.parse(e.display_time)||Date.parse(e.dateString)}function r(e,a){a||(a=0);var r=Math.pow(10,a);return Math.round(e*r)/r}e.exports=function(e){var o=(e=e.filter((function(e){return e.glucose||e.sgv})).map((function(e){if(e.glucose=e.glucose||e.sgv,null!==e.glucose)return e}))).length;const t=e[0],u=a(t),n=a(t);var l,s=[],c=[],d=[];if(1==o)return{glucose:t.value,noise:0,delta:0,shortAvgDelta:0,longAvgDelta:0,date:n,dura_ISF_minutes:0,dura_ISF_average:t.value,slope05:0,slope15:0,slope40:0,dura_p:0,delta_pl:0,delta_pn:0,bg_acceleration:0,a_0:0,a_1:0,a_2:0,r_squ:0};for(var g=0,i=1;i<o;i++){if(void 0!==e[i]&&"cal"===e[i].type){g=i;break}if(void 0!==e[i]&&e[i].glucose>38&&e[i].device===t.device){const o=e[i],n=a(o);var v,h=0;if(void 0!==n&&void 0!==u?(v=Math.round((u-n)/6e4),l=t.glucose-o.glucose,h=l/v*5,console.error("then minutesAgo = "+v+" avgDelta = "+r(h,2))):console.error("Error: date field not found: cannot calculate avgDel"),0<v&&v<2.5)t.glucose=(t.glucose+o.glucose)/2,u=(u+n)/2;else if(2.5<v&&v<17.5)c.push(h),2.5<v&&v<7.5&&s.push(h);else{if(!(17.5<v&&v<42.5))break;d.push(h)}}}var p=0,f=0,M=0;c.length>0&&(f=c.reduce((function(e,a){return e+a}))/c.length),p=s.length>0?s.reduce((function(e,a){return e+a}))/s.length:f,d.length>0&&(M=d.reduce((function(e,a){return e+a}))/d.length);t.glucose;var _=0,b=0,w=0,k=0,D=0,S=0,F="autoISF Mod14-Debug: ";var m=t.glucose,x=t.glucose,I=0;for(i=1;i<o;i++){const r=e[i],o=a(r);if(Math.round((u-o)/6e4)-I>13)break;if(!(r.glucose>.95*x&&r.glucose<1.05*x))break;m+=r.glucose,x=m/(i+1),I=Math.round((u-o)/6e4)}_=1.05,b=1.15,w=1.4,m=0;var A,G,q=0,y=0,L=0,B=7.5;for(i=0;i<o;i++){if(A=i*y==q*q?0:(i*L-q*m)/(i*y-q*q),(G=(u-a($=e[i]))/6e4)>B&&7.5==B&&(_=5*-A,B=17.5),G>B&&17.5==B&&(b=5*-A,B=42.5),G>B&&42.5==B){w=5*-A;break}q+=G,y+=G*G,m+=$.glucose,$.glucose*$.glucose,L+=$.glucose*G}F="";var E=0,P=0,j=0,z=(k=0,D=0,S=0,0),C=0,H=0,J=0,K=0;if(o>3){var N=0,O=0,Q=0,R=0,T=0,U=0,V=0,W=a(e[0]),X=0,Y=300,Z=50;for(i=0;i<o;i++){var $,ee=(a($=e[i])-W)/1e3/Y;if(-ee*Y>2820)break;if(ee<X-1.5){i<3&&(k=-X/60,D=0,S=0,z=0,C=0,H=0,J=0,K=0);break}X=ee;var ae=$.glucose/Z;O+=ee,Q+=Math.pow(ee,2),R+=Math.pow(ee,3),T+=Math.pow(ee,4),N+=ae,U+=ee*ae,V+=Math.pow(ee,2)*ae;var re=i+1,oe=0,te=0,ue=0,ne=0;if(re>3&&(oe=T*(Q*re-O*O)-R*(R*re-O*Q)+Q*(R*O-Q*Q),te=V*(Q*re-O*O)-U*(R*re-O*Q)+N*(R*O-Q*Q),ue=T*(U*re-N*O)-R*(V*re-N*Q)+Q*(V*O-U*Q),ne=T*(Q*N-O*U)-R*(R*N-O*V)+Q*(R*U-Q*V)),0!=oe){var le=te/oe;A=ue/oe;for(var se=ne/oe,ce=N/re,de=0,ge=0,ie=0;ie<=i;ie++){var ve=e[ie],he=a(ve);de+=Math.pow(ve.glucose/Z-ce,2);var pe=(he-W)/1e3/Y,fe=le*Math.pow(pe,2)+A*pe+se;ge+=Math.pow(ve.glucose/Z-fe,2)}var Me=.64;if(0!=de&&(Me=1-ge/de),re>3&&Me>=C){C=Me,k=-ee*Y/60;D=-50*(le*Math.pow(-1,2)-1*A),S=Z*(le*Math.pow(1,2)+1*A),z=2*le*Z,H=se*Z,J=A*Z,K=le*Z,E=le*Z,P=A*Z,j=se*Z}}}F+="coeffs a/b/c=("+r(E,2)+" / "+r(P,2)+" / "+r(j,2)+"); bg date="+W+"; ",F+="Parabola Fits a0/a1/a2=("+r(H,2)+" / "+r(J,2)+" / "+r(K,2)+"); BGaccel="+z}return F+="Slopes 05/15/40=("+r(_,2)+" / "+r(b,2)+" / "+r(w,2)+"); ",{glucose:Math.round(1e4*t.glucose)/1e4,noise:0,delta:Math.round(1e4*p)/1e4,short_avgdelta:Math.round(1e4*f)/1e4,long_avgdelta:Math.round(1e4*M)/1e4,dura_ISF_minutes:Math.round(1e4*I)/1e4,dura_ISF_average:Math.round(1e4*x)/1e4,slope05:Math.round(1e4*_)/1e4,slope15:Math.round(1e4*b)/1e4,slope40:Math.round(1e4*w)/1e4,dura_p:Math.round(1e4*k)/1e4,delta_pl:Math.round(1e4*D)/1e4,delta_pn:Math.round(1e4*S)/1e4,bg_acceleration:z,r_squ:Math.round(1e4*C)/1e4,a_0:Math.round(1e4*H)/1e4,a_1:Math.round(1e4*J)/1e4,a_2:Math.round(1e4*K)/1e4,pp_debug:F,date:u,last_cal:g,device:t.device}}}},a={};var r=function r(o){var t=a[o];if(void 0!==t)return t.exports;var u=a[o]={exports:{}};return e[o](u,u.exports,r),u.exports}(6237);freeaps_glucoseGetLast=r})();