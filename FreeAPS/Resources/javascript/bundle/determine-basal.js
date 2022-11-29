var freeaps_determineBasal;(()=>{var e={5546:(e,r,a)=>{var t=a(6880);function o(e,r){r||(r=0);var a=Math.pow(10,r);return Math.round(e*a)/a}function n(e,r){return"mmol/L"===r.out_units?o(e/18,1):Math.round(e)}var i="",s="",l="",u="",d="",m="",c="",b="",p="",h="";function g(e,r){var a=[2,7,12,16,20,50,60,80,90,100,110,150,180,200],t=[0,0,.4,.7,.7,-.5,-.5,-.3,-.2,0,0,.5,.7,.7],o=a.length-1,n=a[0],i=t[0],s=a[o],l=t[o],u=1,d=1,m=1,c=n;if(n>e)u=(d=i)+((l=t[1])-d)/((s=a[1])-(m=n))*(e-m);else if(s<e)u=(d=i=t[o-1])+(l-d)/(s-(m=n=a[o-1]))*(e-m);else for(var b=0;b<=o;b++){if(i=t[b],(n=a[b])==e){u=i;break}if(n>e){u=d+(i-d)/(n-(m=c))*(e-m);break}d=i,c=n}return u*=e>100?r.higher_ISFrange_weight:e>40?r.lower_ISFrange_weight:r.delta_ISFrange_weight}function f(e,r,a,t){console.error("check ratio "+o(e,2)+" against autoISF min: "+r+" and autoISF max: "+a),e<r?(h=" (lmtd.)",b="weakest ISF factor "+o(e,2)+" limited by autoisf_min "+r,console.error(b),e=r):e>a&&(h=" (lmtd.)",b="strongest ISF factor "+o(e,2)+" limited by autoisf_max "+a,console.error(b),e=a);var n=1;return e>=1&&(n=Math.max(e,t)),e<1&&(n=Math.min(e,t)),b="final ISF factor "+o(n,2),console.error(b),n}function v(e,r,a){if(void 0===e.smb_delivery_ratio_bg_range||0===e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio set to fixed value "+e.smb_delivery_ratio),e.smb_delivery_ratio;var t=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(r<=a)return console.error("SMB delivery ratio limited by minimum value "+t),t;var n=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(r>=a+e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio limited by maximum value "+n),n;var i=t+(n-t)*(r-a)/e.smb_delivery_ratio_bg_range;return console.error("SMB delivery ratio set to interpolated value "+o(i,2)),i}e.exports=function(e,r,a,B,_,M,S,y,x,w,I,C,F,G,T,D){var O=0,R="",A="",U="",P="",k=0,j=(G=0,0),W=0,q=0,E=0,z=0;T.length>0&&(z=T[0].TDD);let L=D.avgTDD7d;function N(e,r){var a=e.getTime();return new Date(a+36e5*r)}function H(e){var r=B.bolus_increment;.05!=r&&(r=.1);var a=e/r;return a>=1?o(Math.floor(a)*r,5):0}function Z(e){function r(e){return e<10&&(e="0"+e),e}return r(e.getHours())+":"+r(e.getMinutes())+":00"}function $(e,r){var a=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+r);return(a.getTime()-t.getTime())/36e5}function J(e,r){var a=0,t=r,o=(e-r)/36e5,n=0,i=o,s=0;do{if(o>0){var l=Z(t);F[0].rate;for(let e=0;e<F.length;e++){var u=F[e].start;if(l==u){if(e+1<F.length){o>=(s=$(F[e+1].start,F[e].start))?n=s:o<s&&(n=o)}else if(e+1==F.length){let r=F[0].start;o>=(s=24-$(F[e].start,r))?n=s:o<s&&(n=o)}a+=H(F[e].rate*n),o-=n,t=N(t,n)}else if(l>u)if(e+1<F.length){var d=F[e+1].start;l<d&&(o>=(s=$(d,l))?n=s:o<s&&(n=o),a+=H(F[e].rate*n),o-=n,t=N(t,n))}else if(e==F.length-1){o>=(s=$("23:59:59",l))?n=s:o<s&&(n=o),a+=H(F[e].rate*n),o-=n,t=N(t,n)}}}}while(o>0&&o<i);return a}if(I.length){let e=I.length-1;var K=new Date(I[e].timestamp),Q=new Date(I[0].timestamp);if("TempBasalDuration"==I[0]._type&&(Q=new Date),(O=(Q-K)/36e5)<23.9&&O>21)q=J(K,(V=24-O,X=K.getTime(),new Date(X-36e5*V))),P="24 hours of data is required for an accurate tdd calculation. Currently only "+O.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+q.toPrecision(5)+" U. ";else P=""}else console.log("Pumphistory is empty!");var V,X;for(let e=0;e<I.length;e++)"Bolus"==I[e]._type&&(W+=I[e].amount);for(let e=1;e<I.length;e++)if("TempBasal"==I[e]._type&&I[e].rate>0){k=e,E=I[e].rate;var Y=I[e-1]["duration (min)"]/60,ee=Y,re=new Date(I[e-1].timestamp),ae=re;do{if(e--,0==e){ae=new Date;break}if("TempBasal"==I[e]._type||"PumpSuspend"==I[e]._type){ae=new Date(I[e].timestamp);break}}while(e>0);var te=(ae-re)/36e5;te<ee&&(Y=te),j+=H(E*Y),e=k}for(let e=0;e<I.length;e++)if(0,0==I[e]["duration (min)"]||"PumpResume"==I[e]._type){let r=new Date(I[e].timestamp),a=r,t=e;do{if(t>0&&(--t,"TempBasal"==I[t]._type)){a=new Date(I[t].timestamp);break}}while(t>0);(a-r)/36e5>0&&(q+=J(a,r))}for(let e=I.length-1;e>0;e--)if("TempBasalDuration"==I[e]._type){let r=I[e]["duration (min)"]/60,a=new Date(I[e].timestamp);var oe=a;let t=e;do{if(--t,t>=0&&("TempBasal"==I[t]._type||"PumpSuspend"==I[t]._type)){oe=new Date(I[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==I[0]._type&&(oe=new Date,r=I[e]["duration (min)"]/60),(oe-a)/36e5-r>0){q+=J(oe,N(a,r))}}var ne=G=W+j+q;O>21?(A=". Bolus insulin: "+W.toPrecision(5)+" U",U=". Temporary basal insulin: "+j.toPrecision(5)+" U",R=". Insulin with scheduled basal rate: "+q.toPrecision(5)+" U",P+("TDD past 24h is: "+G.toPrecision(5)+" U")+A+U+R,tddReason=", TDD, 24h: "+o(G,1)+", ytd: "+o(z,1)+", 7dØ: "+o(L,1)):tddReason=", TDD: Not enough pumpData (< 21h)";var ie={},se=new Date;if(w&&(se=w),void 0===B||void 0===B.current_basal)return ie.error="Error: could not get current basal rate",ie;var le=t(B.current_basal,B),ue=le,de=new Date;w&&(de=w);var me,ce=new Date(e.date),be=o((de-ce)/60/1e3,1),pe=e.glucose,he=e.noise;me=e.delta>-.5?"+"+o(e.delta,0):o(e.delta,0);var ge=Math.min(e.delta,e.short_avgdelta),fe=Math.min(e.short_avgdelta,e.long_avgdelta),ve=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(pe<=10||38===pe||he>=3)&&(ie.reason="CGM is calibrating, in ??? state, or noise is high");if(be>12||be<-5?ie.reason="If current system time "+de+" is correct, then BG data is too old. The last BG data was read "+be+"m ago at "+ce:0===e.short_avgdelta&&0===e.long_avgdelta&&(e.last_cal&&e.last_cal<3?ie.reason="CGM was just calibrated":ie.reason="CGM data is unchanged ("+n(pe,B)+"+"+n(e.delta,B)+") for 5m w/ "+n(e.short_avgdelta,B)+" mg/dL ~15m change & "+n(e.long_avgdelta,B)+" mg/dL ~45m change"),pe<=10||38===pe||he>=3||be>12||be<-5||0===e.short_avgdelta&&0===e.long_avgdelta)return r.rate>=ue?(ie.reason+=". Canceling high temp basal of "+r.rate,ie.deliverAt=se,ie.temp="absolute",ie.duration=0,ie.rate=0,ie):0===r.rate&&r.duration>30?(ie.reason+=". Shortening "+r.duration+"m long zero temp to 30m. ",ie.deliverAt=se,ie.temp="absolute",ie.duration=30,ie.rate=0,ie):(ie.reason+=". Temp "+r.rate+" <= current basal "+ue+"U/hr; doing nothing. ",ie);var Be,_e,Me,Se,ye=B.max_iob;if(void 0!==B.min_bg&&(_e=B.min_bg),void 0!==B.max_bg&&(Me=B.max_bg),void 0!==B.enableSMB_high_bg_target&&(Se=B.enableSMB_high_bg_target),void 0===B.min_bg||void 0===B.max_bg)return ie.error="Error: could not determine target_bg. ",ie;Be=(B.min_bg+B.max_bg)/2;var xe=B.exercise_mode||B.high_temptarget_raises_sensitivity,we=100,Ie=160;if(B.half_basal_exercise_target&&(Ie=B.half_basal_exercise_target),xe&&B.temptargetSet&&Be>we||B.low_temptarget_lowers_sensitivity&&B.temptargetSet&&Be<we){var Ce=Ie-we;sensitivityRatio=Ce*(Ce+Be-we)<=0?B.autosens_max:Ce/(Ce+Be-we),sensitivityRatio=Math.min(sensitivityRatio,B.autosens_max),sensitivityRatio=o(sensitivityRatio,2),process.stderr.write("Sensitivity ratio set to "+sensitivityRatio+" based on temp target of "+Be+"; ")}else void 0!==_&&_&&(sensitivityRatio=_.ratio,process.stderr.write("Autosens ratio: "+sensitivityRatio+"; "));if(sensitivityRatio&&(ue=B.current_basal*sensitivityRatio,(ue=t(ue,B))!==le?process.stderr.write("Adjusting basal from "+le+" to "+ue+"; "):process.stderr.write("Basal unchanged: "+ue+"; ")),B.temptargetSet);else if(void 0!==_&&_&&(B.sensitivity_raises_target&&_.ratio<1||B.resistance_lowers_target&&_.ratio>1)){_e=o((_e-60)/_.ratio)+60,Me=o((Me-60)/_.ratio)+60;var Fe=o((Be-60)/_.ratio)+60;Be===(Fe=Math.max(80,Fe))?process.stderr.write("target_bg unchanged: "+Fe+"; "):process.stderr.write("target_bg from "+Be+" to "+Fe+"; "),Be=Fe}var Ge=200,Te=200,De=200;if(e.noise>=2){var Oe=Math.max(1.1,B.noisyCGMTargetMultiplier);Math.min(250,B.maxRaw);Ge=o(Math.min(200,_e*Oe)),Te=o(Math.min(200,Be*Oe)),De=o(Math.min(200,Me*Oe)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+Be+" to "+Te+"; "),_e=Ge,Be=Te,Me=De}var Re=_e-.5*(_e-40),Ae=o(B.sens,1),Ue=B.sens;void 0!==_&&_&&((Ue=o(Ue=B.sens/sensitivityRatio,1))!==Ae?process.stderr.write("ISF from "+n(Ae,B)+" to "+n(Ue,B)):process.stderr.write("ISF unchanged: "+n(Ue,B)),i+="Autosens, Ratio: "+sensitivityRatio+", ISF: "+n(Ae,B)+"→"+n(Ue,B)),console.error("CR:"+B.carb_ratio);var Pe=function(e,r){return console.error("Threshold: "+e.iob_threshold+" IOB: "+o(r[0].iob,2)),e.use_autoisf&&e.iob_threshold>0&&e.iob_threshold<r[0].iob?(s=", autoISF-SMB disabled:, IOB: "+o(r[0].iob,2)+", > threshold: "+e.iob_threshold+", maxIOB: "+e.max_iob,console.error(s),"iobTH"):e.temptargetSet&&e.enableSMB_EvenOn_OddOff&&e.use_autoisf?e.min_bg%2==1?(s=", autoISF-SMB disabled:, odd TT",console.error(s),"blocked"):(s=", autoISF-SMB enforced:, even TT",console.error(s),"enforced"):"oref"}(B,a);if(Ue=function(e,r,a,t,B,_,M,S){if(!a.use_autoisf)return console.error("autoISF disabled in Preferences"),i+=", autoISF, disabled",e;const y=t.dura_p,x=t.delta_pl,w=t.delta_pn,I=t.r_squ,C=t.bg_acceleration,F=t.a_0,G=t.a_1,T=t.a_2,D=t.dura_ISF_minutes,O=t.dura_ISF_average;var R=!1,A=1,U=1,P=1,k=r+10-O;if(B.mealCOB>0&&!a.enableautoisf_with_COB)return console.error("BG dependant autoISF by-passed; preferences disabled mealCOB of "+o(B.mealCOB,1)),i+=", autoISF, disabled with COB",e;var j=t.pp_debug;if(m+="BG-accel: "+o(C,3)+", PF-minutes: "+y+", PF-corr: "+o(I,4)+", PF-nextDelta: "+n(w,a)+", PF-lastDelta: "+n(x,a)+", regular Delta: "+n(t.delta,a),console.error(j+m+" , Weights Accel/Brake: "+a.bgAccel_ISF_weight+" / "+a.bgBrake_ISF_weight),a.enable_BG_acceleration){var W=I,q=C;if(0!=t.parabola_fit_a2&&W>=.9){var E=-G/2/T*5,z=o(F-E*E/25*T,1);(E=o(E,1))>0&&q<0?(p="predicts a Max of "+n(z,a)+", in about "+Math.abs(E)+"min",console.error("Parabolic fit "+p)):E>0&&q>0?(p="predicts a Min of "+n(z,a)+", in about "+Math.abs(E)+"min",console.error("Parabolic fit "+p)):E<0&&q<0?(p="saw Max of "+n(z,a)+", about "+Math.abs(E)+"min ago",console.error("Parabolic fit "+p)):E<0&&q>0&&(p="saw Min of "+n(z,a)+", about "+Math.abs(E)+"min ago",console.error("Parabolic fit "+p))}if(W<.9)p="acce_ISF by-passed, as correlation, "+o(W,2)+", is too low",console.error("Parabolic fit "+p),c+=", Parabolic Fit, "+p;else{var L=10*(W-.9),N=1,H=1;t.glucose<a.target_bg?q>0?(q>1&&(N=.5),H=a.bgBrake_ISF_weight):q<0&&(H=a.bgAccel_ISF_weight):q<0?H=a.bgBrake_ISF_weight:q>0&&(H=a.bgAccel_ISF_weight),(P=1+q*N*H*L)<0&&(P=.1),console.error(c+" acce_ISF adaptation is "+o(P,2)),1!=P&&(R=!0,c+=", Parabolic Fit, "+p+", acce-ISF Ratio: "+o(P,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");var Z=v(a,t.glucose,r);i+=s+", SMB Delivery Ratio:, "+o(Z,2)+c+", autoISF";var $=1+g(100-k,a);console.error("bg_ISF adaptation is "+o($,2));var J=1,K=1;if($<1)return J=Math.min($,P),P>1?(b="bg-ISF adaptation lifted to "+o(J=$*P,2)+", as BG accelerates already",console.error(b),i+=", bg-ISF Ratio: "+o(J,2)+"(accel.)"):i+=", bg-ISF Ratio: "+o(J,2),K=f(J,a.autoISF_min,a.autoISF_max,S),e=Math.min(720,o(a.sens/K,1)),i+=u+d+l+", final Ratio: "+o(K,2)+h+", final ISF: "+n(e,a),e;$>1&&(R=!0,i+=", bg-ISF Ratio: "+o($,2));var Q=t.delta;a.enablepp_ISF_always||a.pp_ISF_hours>=(_-B.lastCarbTime)/1e3/3600?deltaType="pp":deltaType="delta",k>0?console.error(deltaType+"_ISF adaptation by-passed as average glucose < "+r+"+10"):t.short_avgdelta<0?console.error(deltaType+"_ISF adaptation by-passed as no rise or too short lived"):"pp"==deltaType?(A=1+Math.max(0,Q*a.pp_ISF_weight),console.error("pp_ISF adaptation is "+o(A,2)),u=", pp-ISF Ratio: "+o(A,2),1!=A&&(R=!0)):(U=g(Q,a),k>-20&&(U*=.5),U=1+U,console.error("delta_ISF adaptation is "+o(U,2)),d=", Δ-ISF Ratio: "+o(U,2),1!=U&&(R=!0));var V=1,X=a.dura_ISF_weight;B.mealCOB>0&&!a.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(B.mealCOB,1)):D<10?console.error("dura_ISF by-passed; BG is only "+D+"m at level "+O):O<=r?console.error("dura_ISF by-passed; avg. glucose "+O+" below target "+n(r,a)):(V+=D/60*(X/r)*(O-r),R=!0,l=", Duration: "+D+", Avg: "+n(O,a)+", dura-ISF Ratio: "+o(V,2),console.error("dura_ISF adaptation is "+o(V,2)+" because ISF "+e+" did not do it for "+o(D,1)+"m"));return R?(J=Math.max(V,$,U,P,A),console.error("autoISF adaption ratios:"),console.error("  dura "+o(V,2)),console.error("  bg "+o($,2)),console.error("  delta "+o(U,2)),console.error("  pp "+o(A,2)),console.error("  accel "+o(P,2)),P<1&&(b="strongest ISF factor "+o(J,2)+" weakened to "+o(J*P,2)+" as bg decelerates already",console.error(b),J*=P),K=f(J,a.autoISF_min,a.autoISF_max,S),e=o(a.sens/K,1),i+=u+d+l+", final Ratio: "+o(K,2)+h+", final ISF: "+n(e,a),e):e}(Ue,Be,B,e,M,w,0,sensitivityRatio),void 0===a)return ie.error="Error: iob_data undefined. ",ie;var ke,je=a;if(a.length,a.length>1&&(a=je[0]),void 0===a.activity||void 0===a.iob)return ie.error="Error: iob_data missing some property. ",ie;var We=((ke=void 0!==a.lastTemp?o((new Date(de).getTime()-a.lastTemp.date)/6e4):0)+r.duration)%30;if(console.error("currenttemp:"+r.rate+" lastTempAge:"+ke+"m, tempModulus:"+We+"m"),ie.temp="absolute",ie.deliverAt=se,y&&r&&a.lastTemp&&r.rate!==a.lastTemp.rate&&ke>10&&r.duration)return ie.reason="Warning: currenttemp rate "+r.rate+" != lastTemp rate "+a.lastTemp.rate+" from pumphistory; canceling temp",S.setTempBasal(0,0,B,ie,r);if(r&&a.lastTemp&&r.duration>0){var qe=ke-a.lastTemp.duration;if(qe>5&&ke>10)return ie.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+qe+"m ago; canceling temp",S.setTempBasal(0,0,B,ie,r)}var Ee=o(-a.activity*Ue*5,2),ze=o(6*(ge-Ee));ze<0&&(ze=o(6*(fe-Ee)))<0&&(ze=o(6*(e.long_avgdelta-Ee)));var Le=pe,Ne=(Le=a.iob>0?o(pe-a.iob*Ue):o(pe-a.iob*Math.min(Ue,B.sens)))+ze;if(void 0===Ne||isNaN(Ne))return ie.error="Error: could not calculate eventualBG. Sensitivity: "+Ue+" Deviation: "+ze,ie;var He=function(e,r,a){return o(a+(e-r)/24,1)}(Be,Ne,Ee);ie={temp:"absolute",bg:pe,tick:me,eventualBG:Ne,insulinReq:0,reservoir:x,deliverAt:se,sensitivityRatio};var Ze=[],$e=[],Je=[],Ke=[];Ze.push(pe),$e.push(pe),Ke.push(pe),Je.push(pe);var Qe=!1;y&&"oref"!=Pe?"enforced"==Pe&&(Qe=!0):Qe=function(e,r,a,t,o,i){return r?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of",o),!1):!0===a.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&a.mealCOB?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of",a.mealCOB),!0):!0===e.enableSMB_after_carbs&&a.carbs?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of",n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&t>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",t," | High BG ",i),a.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(B,y,M,pe,Be,Se);var Ve=B.enableUAM,Xe=0,Ye=0;Xe=o(ge-Ee,1);var er=o(ge-Ee,1);csf=Ue/B.carb_ratio,console.error("profile.sens:"+n(B.sens,B)+", sens:"+n(Ue,B)+", CSF:"+o(csf,1));var rr=o(30*csf*5/60,1);Xe>rr&&(console.error("Limiting carb impact from "+Xe+" to "+rr+"mg/dL/5m (30g/h)"),Xe=rr);var ar=3;sensitivityRatio&&(ar/=sensitivityRatio);var tr=ar;if(M.carbs){ar=Math.max(ar,M.mealCOB/20);var or=o((new Date(de).getTime()-M.lastCarbTime)/6e4),nr=(M.carbs-M.mealCOB)/M.carbs;tr=o(tr=ar+1.5*or/60,1),console.error("Last carbs "+or+" minutes ago; remainingCATime:"+tr+"hours; "+o(100*nr)+"% carbs absorbed")}var ir=Math.max(0,Xe/5*60*tr/2)/csf,sr=90,lr=1;B.remainingCarbsCap&&(sr=Math.min(90,B.remainingCarbsCap)),B.remainingCarbsFraction&&(lr=Math.min(1,B.remainingCarbsFraction));var ur=1-lr,dr=Math.max(0,M.mealCOB-ir-M.carbs*ur),mr=(dr=Math.min(sr,dr))*csf*5/60/(tr/2),cr=o(M.slopeFromMaxDeviation,2),br=o(M.slopeFromMinDeviation,2),pr=Math.min(cr,-br/3),hr=0;0===Xe?Ye=0:!0===B.floating_carbs?(Ye=Math.min(60*tr/5/2,Math.max(0,M.carbs*csf/Xe)),hr=Math.min(60*tr/5/2,Math.max(0,M.mealCOB*csf/Xe)),M.carbs>0&&(i+=", Floating Carbs:, CID: "+o(Ye,1)+", MealCarbs: "+o(M.carbs,1)+", Not Floating:, CID: "+o(hr,1)+", MealCOB: "+o(M.mealCOB,1),console.error("Floating Carbs CID: "+o(Ye,1)+" / MealCarbs: "+o(M.carbs,1)+" vs. Not Floating:"+o(hr,1)+" / MealCOB:"+o(M.mealCOB,1)))):Ye=Math.min(60*tr/5/2,Math.max(0,M.mealCOB*csf/Xe)),console.error("Carb Impact:"+Xe+"mg/dL per 5m; CI Duration:"+o(5*Ye/60*2,1)+"hours; remaining CI ("+tr/2+"h peak):",o(mr,1)+"mg/dL per 5m");var gr,fr,vr,Br,_r,Mr=999,Sr=999,yr=999,xr=pe,wr=999,Ir=999,Cr=999,Fr=999,Gr=Ne,Tr=pe,Dr=pe,Or=0,Rr=[],Ar=[];try{je.forEach((function(e){var r=o(-e.activity*Ue*5,2),a=o(-e.iobWithZeroTemp.activity*Ue*5,2),t=Xe*(1-Math.min(1,$e.length/12));Gr=$e[$e.length-1]+r+t;var n=Ke[Ke.length-1]+a,i=Math.max(0,Math.max(0,Xe)*(1-Ze.length/Math.max(2*Ye,1))),s=Math.min(Ze.length,12*tr-Ze.length),l=Math.max(0,s/(tr/2*12)*mr);i+l,Rr.push(o(l,0)),Ar.push(o(i,0)),COBpredBG=Ze[Ze.length-1]+r+Math.min(0,t)+i+l;var u=Math.max(0,er+Je.length*pr),d=Math.max(0,er*(1-Je.length/Math.max(36,1))),m=Math.min(u,d);m>0&&(Or=o(5*(Je.length+1)/60,1)),UAMpredBG=Je[Je.length-1]+r+Math.min(0,t)+m,$e.length<48&&$e.push(Gr),Ze.length<48&&Ze.push(COBpredBG),Je.length<48&&Je.push(UAMpredBG),Ke.length<48&&Ke.push(n),COBpredBG<wr&&(wr=o(COBpredBG)),UAMpredBG<Ir&&(Ir=o(UAMpredBG)),Gr<Cr&&(Cr=o(Gr)),n<Fr&&(Fr=o(n));$e.length>18&&Gr<Mr&&(Mr=o(Gr)),Gr>Tr&&(Tr=Gr),(Ye||mr>0)&&Ze.length>18&&COBpredBG<Sr&&(Sr=o(COBpredBG)),(Ye||mr>0)&&COBpredBG>Tr&&(Dr=COBpredBG),Ve&&Je.length>12&&UAMpredBG<yr&&(yr=o(UAMpredBG)),Ve&&UAMpredBG>Tr&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}M.mealCOB&&(console.error("predCIs (mg/dL/5m):"+Ar.join(" ")),console.error("remainingCIs:      "+Rr.join(" "))),ie.predBGs={},$e.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))}));for(var Ur=$e.length-1;Ur>12&&$e[Ur-1]===$e[Ur];Ur--)$e.pop();for(ie.predBGs.IOB=$e,vr=o($e[$e.length-1]),Ke.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ur=Ke.length-1;Ur>6&&!(Ke[Ur-1]>=Ke[Ur]||Ke[Ur]<=Be);Ur--)Ke.pop();if(ie.predBGs.ZT=Ke,o(Ke[Ke.length-1]),M.mealCOB>0&&(Xe>0||mr>0)){for(Ze.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ur=Ze.length-1;Ur>12&&Ze[Ur-1]===Ze[Ur];Ur--)Ze.pop();ie.predBGs.COB=Ze,Br=o(Ze[Ze.length-1]),Ne=Math.max(Ne,o(Ze[Ze.length-1]))}if(Xe>0||mr>0){if(Ve){for(Je.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ur=Je.length-1;Ur>12&&Je[Ur-1]===Je[Ur];Ur--)Je.pop();ie.predBGs.UAM=Je,_r=o(Je[Je.length-1]),Je[Je.length-1]&&(Ne=Math.max(Ne,o(Je[Je.length-1])))}ie.eventualBG=Ne}console.error("UAM Impact:"+er+"mg/dL per 5m; UAM Duration:"+Or+"hours"),Mr=Math.max(39,Mr),Sr=Math.max(39,Sr),yr=Math.max(39,yr),gr=o(Mr);var Pr=M.mealCOB/M.carbs;fr=o(yr<999&&Sr<999?(1-Pr)*UAMpredBG+Pr*COBpredBG:Sr<999?(Gr+COBpredBG)/2:yr<999?(Gr+UAMpredBG)/2:Gr),Fr>fr&&(fr=Fr),xr=o(xr=Ye||mr>0?Ve?Pr*wr+(1-Pr)*Ir:wr:Ve?Ir:Cr);var kr=yr;if(Fr<Re)kr=(yr+Fr)/2;else if(Fr<Be){var jr=(Fr-Re)/(Be-Re);kr=(yr+(yr*jr+Fr*(1-jr)))/2}else Fr>yr&&(kr=(yr+Fr)/2);if(kr=o(kr),M.carbs)if(!Ve&&Sr<999)gr=o(Math.max(Mr,Sr));else if(Sr<999){var Wr=Pr*Sr+(1-Pr)*kr;gr=o(Math.max(Mr,Sr,Wr))}else gr=Ve?kr:xr;else Ve&&(gr=o(Math.max(Mr,kr)));gr=Math.min(gr,fr),process.stderr.write("minPredBG: "+gr+" minIOBPredBG: "+Mr+" minZTGuardBG: "+Fr),Sr<999&&process.stderr.write(" minCOBPredBG: "+Sr),yr<999&&process.stderr.write(" minUAMPredBG: "+yr),console.error(" avgPredBG:"+fr+" COB/Carbs:"+M.mealCOB+"/"+M.carbs),Dr>pe&&(gr=Math.min(gr,Dr)),ie.COB=M.mealCOB,ie.IOB=a.iob,ie.BGI=n(Ee,B),ie.deviation=n(ze,B),ie.ISF=n(Ue,B),ie.CR=o(B.carb_ratio,2),ie.TDD=o(ne,1),ie.TDDytd=o(z,1),ie.TDD7d=o(L,1),ie.target_bg=n(Be,B),ie.reason=i+", Standard, COB: "+ie.COB+", Dev: "+ie.deviation+", BGI: "+ie.BGI+", ISF: "+ie.ISF+", CR: "+ie.CR+", minPredBG "+n(gr,B)+", minGuardBG "+n(xr,B)+", IOBpredBG "+n(vr,B),Br>0&&(ie.reason+=", COBpredBG "+n(Br,B)),_r>0&&(ie.reason+=", UAMpredBG "+n(_r,B)),ie.reason+=tddReason,ie.reason+="; ";var qr=Le;qr<40&&(qr=Math.min(xr,qr));var Er,zr=Re-qr,Lr=240,Nr=240;if(M.mealCOB>0&&(Xe>0||mr>0)){for(Ur=0;Ur<Ze.length;Ur++)if(Ze[Ur]<_e){Lr=5*Ur;break}for(Ur=0;Ur<Ze.length;Ur++)if(Ze[Ur]<Re){Nr=5*Ur;break}}else{for(Ur=0;Ur<$e.length;Ur++)if($e[Ur]<_e){Lr=5*Ur;break}for(Ur=0;Ur<$e.length;Ur++)if($e[Ur]<Re){Nr=5*Ur;break}}Qe&&xr<Re&&(console.error("minGuardBG "+n(xr,B)+" projected below "+n(Re,B)+" - disabling SMB"),Qe=!1),void 0===B.maxDelta_bg_threshold&&(Er=.2),void 0!==B.maxDelta_bg_threshold&&(Er=Math.min(B.maxDelta_bg_threshold,.4)),ve>Er*pe&&(console.error("maxDelta "+n(ve,B)+" > "+100*Er+"% of BG "+n(pe,B)+" - disabling SMB"),ie.reason+="maxDelta "+n(ve,B)+" > "+100*Er+"% of BG "+n(pe,B)+" - SMB disabled!, ",Qe=!1),console.error("BG projected to remain above "+n(_e,B)+" for "+Lr+"minutes"),(Nr<240||Lr<60)&&console.error("BG projected to remain above "+n(Re,B)+" for "+Nr+"minutes");var Hr=Nr,Zr=B.current_basal*Ue*Hr/60,$r=Math.max(0,M.mealCOB-.25*M.carbs),Jr=(zr-Zr)/csf-$r;Zr=o(Zr),Jr=o(Jr),console.error("naive_eventualBG:",Le,"bgUndershoot:",zr,"zeroTempDuration:",Hr,"zeroTempEffect:",Zr,"carbsReq:",Jr),"Could not parse clock data"==M.reason?console.error("carbsReq unknown: Could not parse clock data"):Jr>=B.carbsReqThreshold&&Nr<=45&&(ie.carbsReq=Jr,ie.reason+=Jr+" add'l carbs req w/in "+Nr+"m; ");var Kr=0;if(pe<Re&&a.iob<20*-B.current_basal/60&&ge>0&&ge>He)ie.reason+="IOB "+a.iob+" < "+o(20*-B.current_basal/60,2),ie.reason+=" and minDelta "+n(ge,B)+" > expectedDelta "+n(He,B)+"; ";else if(pe<Re||xr<Re)return ie.reason+="minGuardBG "+n(xr,B)+"<"+n(Re,B),Kr=o(60*((zr=Be-xr)/Ue)/B.current_basal),Kr=30*o(Kr/30),Kr=Math.min(120,Math.max(30,Kr)),S.setTempBasal(0,Kr,B,ie,r);if(B.skip_neutral_temps&&ie.deliverAt.getMinutes()>=55)return ie.reason+="; Canceling temp at "+ie.deliverAt.getMinutes()+"m past the hour. ",S.setTempBasal(0,0,B,ie,r);var Qr=0,Vr=ue;if(Ne<_e){if(ie.reason+="Eventual BG "+n(Ne,B)+" < "+n(_e,B),ge>He&&ge>0&&!Jr)return Le<40?(ie.reason+=", naive_eventualBG < 40. ",S.setTempBasal(0,30,B,ie,r)):(e.delta>ge?ie.reason+=", but Delta "+n(me,B)+" > expectedDelta "+n(He,B):ie.reason+=", but Min. Delta "+ge.toFixed(2)+" > Exp. Delta "+n(He,B),r.duration>15&&t(ue,B)===t(r.rate,B)?(ie.reason+=", temp "+r.rate+" ~ req "+ue+"U/hr. ",ie):(ie.reason+="; setting current basal of "+ue+" as temp. ",S.setTempBasal(ue,30,B,ie,r)));Qr=o(Qr=2*Math.min(0,(Ne-Be)/Ue),2);var Xr=Math.min(0,(Le-Be)/Ue);if(Xr=o(Xr,2),ge<0&&ge>He)Qr=o(Qr*(ge/He),2);if(Vr=t(Vr=ue+2*Qr,B),r.duration*(r.rate-ue)/60<Math.min(Qr,Xr)-.3*ue)return ie.reason+=", "+r.duration+"m@"+r.rate.toFixed(2)+" is a lot less than needed. ",S.setTempBasal(Vr,30,B,ie,r);if(void 0!==r.rate&&r.duration>5&&Vr>=.8*r.rate)return ie.reason+=", temp "+r.rate+" ~< req "+Vr+"U/hr. ",ie;if(Vr<=0){if((Kr=o(60*((zr=Be-Le)/Ue)/B.current_basal))<0?Kr=0:(Kr=30*o(Kr/30),Kr=Math.min(120,Math.max(0,Kr))),Kr>0)return ie.reason+=", setting "+Kr+"m zero temp. ",S.setTempBasal(Vr,Kr,B,ie,r)}else ie.reason+=", setting "+Vr+"U/hr. ";return S.setTempBasal(Vr,30,B,ie,r)}if(ge<He&&(!y||!Qe))return e.delta<ge?ie.reason+="Eventual BG "+n(Ne,B)+" > "+n(_e,B)+" but Delta "+n(me,B)+" < Exp. Delta "+n(He,B):ie.reason+="Eventual BG "+n(Ne,B)+" > "+n(_e,B)+" but Min. Delta "+ge.toFixed(2)+" < Exp. Delta "+n(He,B),r.duration>15&&t(ue,B)===t(r.rate,B)?(ie.reason+=", temp "+r.rate+" ~ req "+ue+"U/hr. ",ie):(ie.reason+="; setting current basal of "+ue+" as temp. ",S.setTempBasal(ue,30,B,ie,r));if(Math.min(Ne,gr)<Me&&(!y||!Qe))return ie.reason+=n(Ne,B)+"-"+n(gr,B)+" in range: no temp required",r.duration>15&&t(ue,B)===t(r.rate,B)?(ie.reason+=", temp "+r.rate+" ~ req "+ue+"U/hr. ",ie):(ie.reason+="; setting current basal of "+ue+" as temp. ",S.setTempBasal(ue,30,B,ie,r));if(Ne>=Me&&(ie.reason+="Eventual BG "+n(Ne,B)+" >= "+n(Me,B)+", "),a.iob>ye)return ie.reason+="IOB "+o(a.iob,2)+" > max_iob "+ye,r.duration>15&&t(ue,B)===t(r.rate,B)?(ie.reason+=", temp "+r.rate+" ~ req "+ue+"U/hr. ",ie):(ie.reason+="; setting current basal of "+ue+" as temp. ",S.setTempBasal(ue,30,B,ie,r));(Qr=o((Math.min(gr,Ne)-Be)/Ue,2))>ye-a.iob&&(ie.reason+="max_iob "+ye+", ",Qr=ye-a.iob),Vr=t(Vr=ue+2*Qr,B),Qr=o(Qr,3),ie.insulinReq=Qr;var Yr=o((new Date(de).getTime()-a.lastBolusTime)/6e4,1);if(y&&Qe&&pe>Re){var ea=o(M.mealCOB/B.carb_ratio,3);if(B.use_autoisf)ra=B.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var ra=1}ra>1&&console.error("SMB max range extended from default by factor "+ra);var aa=0;void 0===B.maxSMBBasalMinutes?(aa=o(ra*B.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):a.iob>ea&&a.iob>0?(console.error("IOB",a.iob,"> COB",M.mealCOB+"; mealInsulinReq =",ea),B.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",B.maxUAMSMBBasalMinutes,"profile.current_basal:",B.current_basal),aa=o(ra*B.current_basal*B.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),aa=o(30*B.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",B.maxSMBBasalMinutes,"profile.current_basal:",B.current_basal),aa=o(ra*B.current_basal*B.maxSMBBasalMinutes/60,1));var ta=B.bolus_increment,oa=1/ta;if(B.use_autoisf)var na=v(B,pe,Be);else console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),na=.5;na>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(na,2));var ia=Math.min(Qr*na,aa);ia=Math.floor(ia*oa)/oa,Kr=o(60*((Be-(Le+Mr)/2)/Ue)/B.current_basal),Qr>0&&ia<ta&&(Kr=0);var sa=0;Kr<=0?Kr=0:Kr>=30?(Kr=30*o(Kr/30),Kr=Math.min(60,Math.max(0,Kr))):(sa=o(ue*Kr/30,2),Kr=30),ie.reason+=" insulinReq "+Qr,ia>=aa&&(ie.reason+="; maxBolus "+aa),Kr>0&&(ie.reason+="; setting "+Kr+"m low temp of "+sa+"U/h"),ie.reason+=". ";var la=3;B.SMBInterval&&(la=Math.min(10,Math.max(1,B.SMBInterval)));var ua=o(la-Yr,0),da=o(60*(la-Yr),0)%60;if(console.error("naive_eventualBG",Le+",",Kr+"m "+sa+"U/h temp needed; last bolus",Yr+"m ago; maxBolus: "+aa),Yr>la?ia>0&&(ie.units=ia,ie.reason+="Microbolusing "+ia+"U. "):ie.reason+="Waiting "+ua+"m "+da+"s to microbolus again. ",Kr>0)return ie.rate=sa,ie.duration=Kr,ie}var ma=S.getMaxSafeBasal(B);return Vr>ma&&(ie.reason+="adj. req. rate: "+Vr+" to maxSafeBasal: "+ma+", ",Vr=t(ma,B)),r.duration*(r.rate-ue)/60>=2*Qr?(ie.reason+=r.duration+"m@"+r.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+Vr+"U/hr. ",S.setTempBasal(Vr,30,B,ie,r)):void 0===r.duration||0===r.duration?(ie.reason+="no temp, setting "+Vr+"U/hr. ",S.setTempBasal(Vr,30,B,ie,r)):r.duration>5&&t(Vr,B)<=t(r.rate,B)?(ie.reason+="temp "+r.rate+" >~ req "+Vr+"U/hr. ",ie):(ie.reason+="temp "+r.rate+"<"+Vr+"U/hr. ",S.setTempBasal(Vr,30,B,ie,r))}},6880:(e,r,a)=>{var t=a(6654);e.exports=function(e,r){var a=20;void 0!==r&&"string"==typeof r.model&&(t(r.model,"54")||t(r.model,"23"))&&(a=40);return e<1?Math.round(e*a)/a:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,r,a)=>{var t=a(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,r){for(var a=-1,t=null==e?0:e.length,o=Array(t);++a<t;)o[a]=r(e[a],a,e);return o}},9750:e=>{e.exports=function(e,r,a){return e==e&&(void 0!==a&&(e=e<=a?e:a),void 0!==r&&(e=e>=r?e:r)),e}},4239:(e,r,a)=>{var t=a(2705),o=a(9607),n=a(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,r,a)=>{var t=a(2705),o=a(9932),n=a(1469),i=a(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(i(r))return l?l.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}},7561:(e,r,a)=>{var t=a(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,r,a)=>{var t="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=t},9607:(e,r,a)=>{var t=a(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var r=n.call(e,s),a=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(r?e[s]=a:delete e[s]),o}},2333:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},5639:(e,r,a)=>{var t=a(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var r=/\s/;e.exports=function(e){for(var a=e.length;a--&&r.test(e.charAt(a)););return a}},6654:(e,r,a)=>{var t=a(9750),o=a(531),n=a(554),i=a(9833);e.exports=function(e,r,a){e=i(e),r=o(r);var s=e.length,l=a=void 0===a?s:t(n(a),0,s);return(a-=r.length)>=0&&e.slice(a,l)==r}},1469:e=>{var r=Array.isArray;e.exports=r},3218:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,r,a)=>{var t=a(4239),o=a(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,r,a)=>{var t=a(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,r,a)=>{var t=a(8601);e.exports=function(e){var r=t(e),a=r%1;return r==r?a?r-a:r:0}},4841:(e,r,a)=>{var t=a(7561),o=a(3218),n=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=s.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9833:(e,r,a)=>{var t=a(531);e.exports=function(e){return null==e?"":t(e)}}},r={};function a(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=a(5546);freeaps_determineBasal=t})();