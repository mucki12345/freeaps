var freeaps_determineBasal;(()=>{var e={5546:(e,a,r)=>{var t=r(6880);function o(e,a){a||(a=0);var r=Math.pow(10,a);return Math.round(e*r)/r}function n(e,a){return"mmol/L"===a.out_units?o(e/18,1):Math.round(e)}var i="",s="",l="",m="",u="",d="",c="",f="",g="";function p(e,a){var r=[2,7,12,16,20,50,60,80,90,100,110,150,180,200],t=[0,0,.4,.7,.7,-.5,-.5,-.3,-.2,0,0,.5,.7,.7],o=r.length-1,n=r[0],i=t[0],s=r[o],l=t[o],m=1,u=1,d=1,c=n;if(n>e)m=(u=i)+((l=t[1])-u)/((s=r[1])-(d=n))*(e-d);else if(s<e)m=(u=i=t[o-1])+(l-u)/(s-(d=n=r[o-1]))*(e-d);else for(var f=0;f<=o;f++){if(i=t[f],(n=r[f])==e){m=i;break}if(n>e){m=u+(i-u)/(n-(d=c))*(e-d);break}u=i,c=n}return m*=e>100?a.higher_ISFrange_weight:e>40?a.lower_ISFrange_weight:a.delta_ISFrange_weight}function b(e,a,r){if(void 0===e.smb_delivery_ratio_bg_range||0===e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio set to fixed value "+e.smb_delivery_ratio),e.smb_delivery_ratio;var t=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(a<=r)return console.error("SMB delivery ratio limited by minimum value "+t),t;var n=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(a>=r+e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio limited by maximum value "+n),n;var i=t+(n-t)*(a-r)/e.smb_delivery_ratio_bg_range;return console.error("SMB delivery ratio set to interpolated value "+o(i,2)),i}e.exports=function(e,a,r,h,v,_,B,M,y,x,S,w,C,I,G){var F,O,D,T,R=0,A="",U=0,P=(I=0,0),j=0,k=0,q=0;const E=G.average_7days;function W(e,a){var r=e.getTime();return new Date(r+36e5*a)}function z(e){var a=h.bolus_increment;.05!=a&&(a=.1);var r=e/a;return r>=1?o(Math.floor(r)*a,5):0}function L(e){function a(e){return e<10&&(e="0"+e),e}return a(e.getHours())+":"+a(e.getMinutes())+":00"}function N(e,a){var r=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+a);return(r.getTime()-t.getTime())/36e5}function Z(e,a){var r=0,t=a,o=(e-a)/36e5,n=0,i=o,s=0;do{if(o>0){var l=L(t);C[0].start;for(let e=0;e<C.length;e++){var m=C[e].start;if(l==m){if(e+1<C.length){o>=(s=N(C[e+1].start,C[e].start))?n=s:o<s&&(n=o)}else if(e+1==C.length){let a=C[0].start;o>=(s=24-N(C[e].start,a))?n=s:o<s&&(n=o)}r+=z(C[e].rate*n),o-=n,t=W(t,n)}else if(l>m)if(e+1<C.length){var u=C[e+1].start;l<u&&(o>=(s=N(u,l))?n=s:o<s&&(n=o),r+=z(C[e].rate*n),o-=n,t=W(t,n))}else if(e==C.length-1){o>=(s=N("23:59:59",l))?n=s:o<s&&(n=o),r+=z(C[e].rate*n),o-=n,t=W(t,n)}}}}while(o>0&&o<i);return r}let $=S.length-1;if($>=0)var H=new Date(S[$].timestamp);else H=new Date;var J,K,Q=new Date(S[0].timestamp);("TempBasalDuration"==S[0]._type&&(Q=new Date),(R=(Q-H)/36e5)<23.5)?(k=Z(H,(J=24-R,K=H.getTime(),new Date(K-36e5*J))),A="24 hours of data is required for an accurate tdd calculation. Currently only "+R.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+k.toPrecision(5)+" U. "):A="";for(let e=0;e<S.length;e++)"Bolus"==S[e]._type&&(j+=S[e].amount);for(let e=1;e<S.length;e++)if("TempBasal"==S[e]._type&&S[e].rate>0){U=e,q=S[e].rate;var V=S[e-1]["duration (min)"]/60,X=V,Y=new Date(S[e-1].timestamp),ee=Y;do{if(e--,0==e){ee=new Date;break}if("TempBasal"==S[e]._type||"PumpSuspend"==S[e]._type){ee=new Date(S[e].timestamp);break}}while(e>0);var ae=(ee-Y)/36e5;ae<X&&(V=ae),P+=z(q*V),e=U}for(let e=0;e<S.length;e++)if(0,0==S[e]["duration (min)"]||"PumpResume"==S[e]._type){let a=new Date(S[e].timestamp),r=a,t=e;do{if(t>0&&(--t,"TempBasal"==S[t]._type)){r=new Date(S[t].timestamp);break}}while(t>0);(r-a)/36e5>0&&(k+=Z(r,a))}for(let e=S.length-1;e>0;e--)if("TempBasalDuration"==S[e]._type){let a=S[e]["duration (min)"]/60,r=new Date(S[e].timestamp);var re=r;let t=e;do{if(--t,t>=0&&("TempBasal"==S[t]._type||"PumpSuspend"==S[t]._type)){re=new Date(S[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==S[0]._type&&(re=new Date,a=S[e]["duration (min)"]/60),(re-r)/36e5-a>0){k+=Z(re,W(r,a))}}var te=I=j+P+k;D=". Bolus insulin: "+j.toPrecision(5)+" U",T=". Temporary basal insulin: "+P.toPrecision(5)+" U",O=". Insulin with scheduled basal rate: "+k.toPrecision(5)+" U",F="TDD past 24h is: "+I.toPrecision(5)+" U",logOutPut=A+F+D+T+O,tddReason=", TDD, 24h: "+o(I,1)+", 7dØ: "+o(E,1);var oe={},ne=new Date;if(x&&(ne=x),void 0===h||void 0===h.current_basal)return oe.error="Error: could not get current basal rate",oe;var ie=t(h.current_basal,h),se=ie,le=new Date;x&&(le=x);var me,ue=new Date(e.date),de=o((le-ue)/60/1e3,1),ce=e.glucose,fe=e.noise;me=e.delta>-.5?"+"+o(e.delta,0):o(e.delta,0);var ge=Math.min(e.delta,e.short_avgdelta),pe=Math.min(e.short_avgdelta,e.long_avgdelta),be=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(ce<=10||38===ce||fe>=3)&&(oe.reason="CGM is calibrating, in ??? state, or noise is high");if(ce>60&&0==e.delta&&e.short_avgdelta>-1&&e.short_avgdelta<1&&e.long_avgdelta>-1&&e.long_avgdelta<1&&("fakecgm"==e.device?(console.error("CGM data is unchanged ("+n(ce,h)+"+"+n(e.delta,h)+") for 5m w/ "+n(e.short_avgdelta,h)+" mg/dL ~15m change & "+n(e.long_avgdelta,2)+" mg/dL ~45m change"),console.error("Simulator mode detected ("+e.device+"): continuing anyway")):!0),de>12||de<-5?oe.reason="If current system time "+le+" is correct, then BG data is too old. The last BG data was read "+de+"m ago at "+ue:0===e.short_avgdelta&&0===e.long_avgdelta&&(e.last_cal&&e.last_cal<3?oe.reason="CGM was just calibrated":oe.reason="CGM data is unchanged ("+n(ce,h)+"+"+n(e.delta,h)+") for 5m w/ "+n(e.short_avgdelta,h)+" mg/dL ~15m change & "+n(e.long_avgdelta,h)+" mg/dL ~45m change"),ce<=10||38===ce||fe>=3||de>12||de<-5||0===e.short_avgdelta&&0===e.long_avgdelta)return a.rate>=se?(oe.reason+=". Canceling high temp basal of "+a.rate,oe.deliverAt=ne,oe.temp="absolute",oe.duration=0,oe.rate=0,oe):0===a.rate&&a.duration>30?(oe.reason+=". Shortening "+a.duration+"m long zero temp to 30m. ",oe.deliverAt=ne,oe.temp="absolute",oe.duration=30,oe.rate=0,oe):(oe.reason+=". Temp "+a.rate+" <= current basal "+se+"U/hr; doing nothing. ",oe);var he,ve,_e,Be=h.max_iob;if(void 0!==h.min_bg&&(ve=h.min_bg),void 0!==h.max_bg&&(_e=h.max_bg),void 0===h.min_bg||void 0===h.max_bg)return oe.error="Error: could not determine target_bg. ",oe;he=(h.min_bg+h.max_bg)/2;var Me=h.exercise_mode||h.high_temptarget_raises_sensitivity,ye=100,xe=160;if(h.half_basal_exercise_target&&(xe=h.half_basal_exercise_target),Me&&h.temptargetSet&&he>ye||h.low_temptarget_lowers_sensitivity&&h.temptargetSet&&he<ye){var Se=xe-ye;Se+he-ye>0?(sensitivityRatio=Se/(Se+he-ye),sensitivityRatio=Math.min(sensitivityRatio,h.autosens_max),sensitivityRatio=o(sensitivityRatio,2)):sensitivityRatio=h.autosens_max,process.stderr.write("Sensitivity ratio set to "+sensitivityRatio+" based on temp target of "+he+"; ")}else void 0!==v&&v&&(sensitivityRatio=v.ratio,process.stderr.write("Autosens ratio: "+sensitivityRatio+"; "));if(sensitivityRatio&&(se=h.current_basal*sensitivityRatio,(se=t(se,h))!==ie?process.stderr.write("Adjusting basal from "+ie+" to "+se+"; "):process.stderr.write("Basal unchanged: "+se+"; ")),h.temptargetSet);else if(void 0!==v&&v&&(h.sensitivity_raises_target&&v.ratio<1||h.resistance_lowers_target&&v.ratio>1)){ve=o((ve-60)/v.ratio)+60,_e=o((_e-60)/v.ratio)+60;var we=o((he-60)/v.ratio)+60;he===(we=Math.max(80,we))?process.stderr.write("target_bg unchanged: "+we+"; "):process.stderr.write("target_bg from "+he+" to "+we+"; "),he=we}var Ce=200,Ie=200,Ge=200;if(e.noise>=2){var Fe=Math.max(1.1,h.noisyCGMTargetMultiplier);Math.min(250,h.maxRaw);Ce=o(Math.min(200,ve*Fe)),Ie=o(Math.min(200,he*Fe)),Ge=o(Math.min(200,_e*Fe)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+he+" to "+Ie+"; "),ve=Ce,he=Ie,_e=Ge}var Oe=ve-.5*(ve-40),De=o(h.sens,1),Te=h.sens;if(void 0!==v&&v&&((Te=o(Te=h.sens/sensitivityRatio,1))!==De?process.stderr.write("ISF from "+n(De,h)+" to "+n(Te,h)):process.stderr.write("ISF unchanged: "+n(Te,h)),i+="Autosens, Ratio: "+sensitivityRatio+", ISF: "+n(De,h)+"→"+n(Te,h)),console.error("CR:"+h.carb_ratio),Te=function(e,a,r,t,h,v,_,B){if(!r.use_autoisf)return console.error("autoISF disabled in Preferences"),e;var M=t.dura_p,y=t.delta_pl,x=t.delta_pn,S=t.r_squ,w=t.bg_acceleration,C=t.parabola_fit_a0,I=t.parabola_fit_a1,G=t.parabola_fit_a2,F=t.autoISF_duration,O=t.autoISF_average,D=r.autoisf_max,T=!1,R=1,A=1,U=1,P=a+10-O;if(!(h.mealCOB>0)||r.enableautoisf_with_COB){var j=t.pp_debug;if(d+="BG-accel: "+o(w,3)+", PF-minutes: "+M+", PF-corr: "+o(S,4)+", PF-nextDelta: "+n(x,r)+", PF-lastDelta: "+n(y,r)+", regular Delta: "+n(t.delta,r),console.error(j+d+" , Weights Accel/Brake: "+r.bgAccel_ISF_weight+" / "+r.bgBrake_ISF_weight),r.enable_BG_acceleration){var k=w;if(0!=t.parabola_fit_a2){var q=-I/2/G*5,E=o(C-q*q/25*G,1);(q=o(q,1))<0&&k<0?(g="saw max of "+n(E,r)+", about "+-q+" min ago",console.error("Parabolic fit "+g)):q<0&&k>0?(g="saw min of "+n(E,r)+", about "+-q+" min ago",console.error("Parabolic fit "+g)):q>0&&k<0?(g="predicts max of "+n(E,r)+", in about "+q+"min",console.error("Parabolic fit "+g)):q>0&&k>0&&(g="predicts min of "+n(E,r)+", in about "+q+" min",console.error("Parabolic fit "+g))}var W=S;if(W<=.9)g="acce_ISF by-passed, as correlation, "+o(W,3)+", is too low",console.error("Parabolic fit "+g),c+=", Parabolic Fit, "+g;else{c+=", Parabolic Fit, "+g+", lastΔ: "+n(y,r)+", nextΔ: "+n(x,r)+", Corr "+o(S,3)+", BG-Accel: "+o(k,2);var z=10*(W-.9),L=1;t.glucose<r.target_bg&&k>1&&(L=.5),U=1+k*L*(k<0?r.bgBrake_ISF_weight:r.bgAccel_ISF_weight)*z,console.error("Original result for acce_ISF: "+o(U,2)),1!=U&&(T=!0,c+=", acce-ISF Ratio: "+o(U,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");var N=b(r,t.glucose,a);i+=", SMB Delivery Ratio:, "+o(N,2)+c+", autoISF";var Z=1+p(100-P,r);console.error("bg_ISF adaptation is "+o(Z,2)),Z<1&&U>1&&(f="bg-ISF adaptation lifted to "+o(Z*=U,2)+", as BG accelerates already",s="(lifted by "+o(U,2)+")",console.error(f));var $=1;if(Z<1)return($=Math.min(Z,U))<r.autoisf_min&&(f="final ISF factor "+o($,2)+" limited by autoisf_min "+r.autoisf_min,console.error(f),$=r.autoisf_min),s=" (lmtd.)",earlysens=Math.min(720,o(r.sens/Math.min(B,$),1)),console.error("early Return autoISF:  "+n(earlysens,r)),i+=", bg-ISF Ratio: "+o(Z,2)+s+", ISF: "+n(earlysens,r),earlysens;Z>1&&(T=!0,i+=", bg-ISF Ratio: "+o(Z,2));var H=t.delta;P>0?console.error("delta_ISF adaptation by-passed as average glucose < "+n(a+10,r)):t.short_avgdelta<0?console.error("delta_ISF adaptation by-passed as no rise or too short lived"):r.enableppisf_always||r.postmeal_ISF_duration>=(v-h.lastCarbTime)/1e3/3600?(R=1+Math.max(0,H*r.postmeal_ISF_weight),console.error("pp_ISF adaptation is "+o(R,2)),m=", pp-ISF Ratio: "+o(R,2),1!=R&&(T=!0)):(A=p(H,r),P>-20&&(A*=.5),A=1+A,console.error("delta_ISF adaptation is "+o(A,2)),u=", Δ-ISF Ratio: "+o(A,2),1!=A&&(T=!0));var J=1,K=r.autoisf_hourlychange;return h.mealCOB>0&&!r.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(h.mealCOB,1)):F<10?console.error("dura_ISF by-passed; BG is only "+F+"m at level "+O):O<=a?console.error("dura_ISF by-passed; avg. glucose "+O+" below target "+n(a,r)):(J+=F/60*(K/a)*(O-a),T=!0,l=", Duration: "+F+", Avg: "+n(O,r)+", dura-ISF Ratio: "+o(J,2),console.error("dura_ISF  adaptation is "+o(J,2)+" because ISF "+e+" did not do it for "+o(F,1)+"m")),$=1,T?($=Math.max(J,Z,A,U,R),console.error("autoISF adaption ratios:"),console.error("  dura "+o(J,2)),console.error("  bg "+o(Z,2)),console.error("  delta "+o(A,2)),console.error("  pp "+o(R,2)),console.error("  accel "+o(U,2)),U<1&&(console.error("strongest ISF factor "+o($,2)+" weakened to "+o($*U,2)+" as bg decelerates already"),$*=U),$<r.autoisf_min?(console.error("final ISF factor "+o($,2)+" limited by autoisf_min "+r.autoisf_min),$=r.autoisf_min):$>D&&(console.error("final ISF factor "+o($,2)+" limited by autoisf_max "+D),$=D),$>=1&&(e=o(r.sens/Math.max($,B),1)),$<1&&(e=o(r.sens/Math.min($,B),1))):$=B,i+=m+u+l+", final Ratio: "+o($,2)+", final ISF: "+n(e,r),console.error("Inside autoISF: Ratio "+o($,2)+" resulting in "+n(e,r)),e}console.error("BG dependant autoISF by-passed; preferences disabled mealCOB of "+o(h.mealCOB,1))}(Te,he,h,e,_,x,0,sensitivityRatio),void 0===r)return oe.error="Error: iob_data undefined. ",oe;var Re,Ae=r;if(r.length,r.length>1&&(r=Ae[0]),void 0===r.activity||void 0===r.iob)return oe.error="Error: iob_data missing some property. ",oe;var Ue=((Re=void 0!==r.lastTemp?o((new Date(le).getTime()-r.lastTemp.date)/6e4):0)+a.duration)%30;if(console.error("currenttemp:"+a.rate+" lastTempAge:"+Re+"m, tempModulus:"+Ue+"m"),oe.temp="absolute",oe.deliverAt=ne,M&&a&&r.lastTemp&&a.rate!==r.lastTemp.rate&&Re>10&&a.duration)return oe.reason="Warning: currenttemp rate "+a.rate+" != lastTemp rate "+r.lastTemp.rate+" from pumphistory; canceling temp",B.setTempBasal(0,0,h,oe,a);if(a&&r.lastTemp&&a.duration>0){var Pe=Re-r.lastTemp.duration;if(Pe>5&&Re>10)return oe.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+Pe+"m ago; canceling temp",B.setTempBasal(0,0,h,oe,a)}var je=o(-r.activity*Te*5,2),ke=o(6*(ge-je));ke<0&&(ke=o(6*(pe-je)))<0&&(ke=o(6*(e.long_avgdelta-je)));var qe=ce,Ee=(qe=r.iob>0?o(ce-r.iob*Te):o(ce-r.iob*Math.min(Te,h.sens)))+ke;if(void 0===Ee||isNaN(Ee))return oe.error="Error: could not calculate eventualBG. Sensitivity: "+Te+" Deviation: "+ke,oe;var We=function(e,a,r){return o(r+(e-a)/24,1)}(he,Ee,je);oe={temp:"absolute",bg:ce,tick:me,eventualBG:Ee,insulinReq:0,reservoir:y,deliverAt:ne,sensitivityRatio};var ze=[],Le=[],Ne=[],Ze=[];ze.push(ce),Le.push(ce),Ze.push(ce),Ne.push(ce);var $e=function(e,a,r,t){return a?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&t>100?(console.error("SMB disabled due to high temptarget of",t),!1):!0===r.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(r.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&r.mealCOB?(r.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of",r.mealCOB),!0):!0===e.enableSMB_after_carbs&&r.carbs?(r.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&t<100?(r.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of",n(t,e)),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(h,M,_,he),He=h.enableUAM,Je=0,Ke=0;Je=o(ge-je,1);var Qe=o(ge-je,1);csf=Te/h.carb_ratio,console.error("profile.sens:"+n(h.sens,h)+", sens:"+n(Te,h)+", CSF:"+o(csf,1));var Ve=o(30*csf*5/60,1);Je>Ve&&(console.error("Limiting carb impact from "+Je+" to "+Ve+"mg/dL/5m (30g/h)"),Je=Ve);var Xe=3;sensitivityRatio&&(Xe/=sensitivityRatio);var Ye=Xe;if(_.carbs){Xe=Math.max(Xe,_.mealCOB/20);var ea=o((new Date(le).getTime()-_.lastCarbTime)/6e4),aa=(_.carbs-_.mealCOB)/_.carbs;Ye=o(Ye=Xe+1.5*ea/60,1),console.error("Last carbs "+ea+" minutes ago; remainingCATime:"+Ye+"hours; "+o(100*aa)+"% carbs absorbed")}var ra=Math.max(0,Je/5*60*Ye/2)/csf,ta=90,oa=1;h.remainingCarbsCap&&(ta=Math.min(90,h.remainingCarbsCap)),h.remainingCarbsFraction&&(oa=Math.min(1,h.remainingCarbsFraction));var na=1-oa,ia=Math.max(0,_.mealCOB-ra-_.carbs*na),sa=(ia=Math.min(ta,ia))*csf*5/60/(Ye/2),la=o(_.slopeFromMaxDeviation,2),ma=o(_.slopeFromMinDeviation,2),ua=Math.min(la,-ma/3),da=0;0===Je?Ke=0:!0===h.floating_carbs?(Ke=Math.min(60*Ye/5/2,Math.max(0,_.carbs*csf/Je)),da=Math.min(60*Ye/5/2,Math.max(0,_.mealCOB*csf/Je)),_.carbs>0&&(i+=", Floating Carbs:, CID: "+o(Ke,1)+", MealCarbs: "+o(_.carbs,1)+", Not Floating:, CID: "+o(da,1)+", MealCOB: "+o(_.mealCOB,1),console.error("Floating Carbs CID: "+o(Ke,1)+" / MealCarbs: "+o(_.carbs,1)+" vs. Not Floating:"+o(da,1)+" / MealCOB:"+o(_.mealCOB,1)))):Ke=Math.min(60*Ye/5/2,Math.max(0,_.mealCOB*csf/Je)),console.error("Carb Impact:"+Je+"mg/dL per 5m; CI Duration:"+o(5*Ke/60*2,1)+"hours; remaining CI ("+Ye/2+"h peak):",o(sa,1)+"mg/dL per 5m");var ca,fa,ga,pa,ba,ha=999,va=999,_a=999,Ba=ce,Ma=999,ya=999,xa=999,Sa=999,wa=Ee,Ca=ce,Ia=ce,Ga=0,Fa=[],Oa=[];try{Ae.forEach((function(e){var a=o(-e.activity*Te*5,2),r=o(-e.iobWithZeroTemp.activity*Te*5,2),t=Je*(1-Math.min(1,Le.length/12));wa=Le[Le.length-1]+a+t;var n=Ze[Ze.length-1]+r,i=Math.max(0,Math.max(0,Je)*(1-ze.length/Math.max(2*Ke,1))),s=Math.min(ze.length,12*Ye-ze.length),l=Math.max(0,s/(Ye/2*12)*sa);i+l,Fa.push(o(l,0)),Oa.push(o(i,0)),COBpredBG=ze[ze.length-1]+a+Math.min(0,t)+i+l;var m=Math.max(0,Qe+Ne.length*ua),u=Math.max(0,Qe*(1-Ne.length/Math.max(36,1))),d=Math.min(m,u);d>0&&(Ga=o(5*(Ne.length+1)/60,1)),UAMpredBG=Ne[Ne.length-1]+a+Math.min(0,t)+d,Le.length<48&&Le.push(wa),ze.length<48&&ze.push(COBpredBG),Ne.length<48&&Ne.push(UAMpredBG),Ze.length<48&&Ze.push(n),COBpredBG<Ma&&(Ma=o(COBpredBG)),UAMpredBG<ya&&(ya=o(UAMpredBG)),wa<xa&&(xa=o(wa)),n<Sa&&(Sa=o(n));Le.length>18&&wa<ha&&(ha=o(wa)),wa>Ca&&(Ca=wa),(Ke||sa>0)&&ze.length>18&&COBpredBG<va&&(va=o(COBpredBG)),(Ke||sa>0)&&COBpredBG>Ca&&(Ia=COBpredBG),He&&Ne.length>12&&UAMpredBG<_a&&(_a=o(UAMpredBG)),He&&UAMpredBG>Ca&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}_.mealCOB&&(console.error("predCIs (mg/dL/5m):"+Oa.join(" ")),console.error("remainingCIs:      "+Fa.join(" "))),oe.predBGs={},Le.forEach((function(e,a,r){r[a]=o(Math.min(401,Math.max(39,e)))}));for(var Da=Le.length-1;Da>12&&Le[Da-1]===Le[Da];Da--)Le.pop();for(oe.predBGs.IOB=Le,ga=o(Le[Le.length-1]),Ze.forEach((function(e,a,r){r[a]=o(Math.min(401,Math.max(39,e)))})),Da=Ze.length-1;Da>6&&!(Ze[Da-1]>=Ze[Da]||Ze[Da]<=he);Da--)Ze.pop();if(oe.predBGs.ZT=Ze,o(Ze[Ze.length-1]),_.mealCOB>0&&(Je>0||sa>0)){for(ze.forEach((function(e,a,r){r[a]=o(Math.min(401,Math.max(39,e)))})),Da=ze.length-1;Da>12&&ze[Da-1]===ze[Da];Da--)ze.pop();oe.predBGs.COB=ze,pa=o(ze[ze.length-1]),Ee=Math.max(Ee,o(ze[ze.length-1]))}if(Je>0||sa>0){if(He){for(Ne.forEach((function(e,a,r){r[a]=o(Math.min(401,Math.max(39,e)))})),Da=Ne.length-1;Da>12&&Ne[Da-1]===Ne[Da];Da--)Ne.pop();oe.predBGs.UAM=Ne,ba=o(Ne[Ne.length-1]),Ne[Ne.length-1]&&(Ee=Math.max(Ee,o(Ne[Ne.length-1])))}oe.eventualBG=Ee}console.error("UAM Impact:"+Qe+"mg/dL per 5m; UAM Duration:"+Ga+"hours"),ha=Math.max(39,ha),va=Math.max(39,va),_a=Math.max(39,_a),ca=o(ha);var Ta=_.mealCOB/_.carbs;fa=o(_a<999&&va<999?(1-Ta)*UAMpredBG+Ta*COBpredBG:va<999?(wa+COBpredBG)/2:_a<999?(wa+UAMpredBG)/2:wa),Sa>fa&&(fa=Sa),Ba=o(Ba=Ke||sa>0?He?Ta*Ma+(1-Ta)*ya:Ma:He?ya:xa);var Ra=_a;if(Sa<Oe)Ra=(_a+Sa)/2;else if(Sa<he){var Aa=(Sa-Oe)/(he-Oe);Ra=(_a+(_a*Aa+Sa*(1-Aa)))/2}else Sa>_a&&(Ra=(_a+Sa)/2);if(Ra=o(Ra),_.carbs)if(!He&&va<999)ca=o(Math.max(ha,va));else if(va<999){var Ua=Ta*va+(1-Ta)*Ra;ca=o(Math.max(ha,va,Ua))}else ca=He?Ra:Ba;else He&&(ca=o(Math.max(ha,Ra)));ca=Math.min(ca,fa),process.stderr.write("minPredBG: "+ca+" minIOBPredBG: "+ha+" minZTGuardBG: "+Sa),va<999&&process.stderr.write(" minCOBPredBG: "+va),_a<999&&process.stderr.write(" minUAMPredBG: "+_a),console.error(" avgPredBG:"+fa+" COB/Carbs:"+_.mealCOB+"/"+_.carbs),Ia>ce&&(ca=Math.min(ca,Ia)),oe.COB=_.mealCOB,oe.IOB=r.iob,oe.BGI=n(je,h),oe.deviation=n(ke,h),oe.ISF=n(Te,h),oe.CR=o(h.carb_ratio,2),oe.TDD=o(te,2),oe.target_bg=n(he,h),oe.reason=i+", Standard, COB: "+oe.COB+", Dev: "+oe.deviation+", BGI: "+oe.BGI+", CR: "+oe.CR+", Target: "+oe.target_bg+", minPredBG "+n(ca,h)+", minGuardBG "+n(Ba,h)+", IOBpredBG "+n(ga,h),pa>0&&(oe.reason+=", COBpredBG "+n(pa,h)),ba>0&&(oe.reason+=", UAMpredBG "+n(ba,h)),oe.reason+=tddReason,oe.reason+="; ";var Pa=qe;Pa<40&&(Pa=Math.min(Ba,Pa));var ja,ka=Oe-Pa,qa=240,Ea=240;if(_.mealCOB>0&&(Je>0||sa>0)){for(Da=0;Da<ze.length;Da++)if(ze[Da]<ve){qa=5*Da;break}for(Da=0;Da<ze.length;Da++)if(ze[Da]<Oe){Ea=5*Da;break}}else{for(Da=0;Da<Le.length;Da++)if(Le[Da]<ve){qa=5*Da;break}for(Da=0;Da<Le.length;Da++)if(Le[Da]<Oe){Ea=5*Da;break}}$e&&Ba<Oe&&(console.error("minGuardBG "+n(Ba,h)+" projected below "+n(Oe,h)+" - disabling SMB"),$e=!1),void 0===h.maxDelta_bg_threshold&&(ja=.2),void 0!==h.maxDelta_bg_threshold&&(ja=Math.min(h.maxDelta_bg_threshold,.4)),be>ja*ce&&(console.error("maxDelta "+n(be,h)+" > "+100*ja+"% of BG "+n(ce,h)+" - disabling SMB"),oe.reason+="maxDelta "+n(be,h)+" > "+100*ja+"% of BG "+n(ce,h)+" - SMB disabled!, ",$e=!1),console.error("BG projected to remain above "+n(ve,h)+" for "+qa+"minutes"),(Ea<240||qa<60)&&console.error("BG projected to remain above "+n(Oe,h)+" for "+Ea+"minutes");var Wa=Ea,za=h.current_basal*Te*Wa/60,La=Math.max(0,_.mealCOB-.25*_.carbs),Na=(ka-za)/csf-La;za=o(za),Na=o(Na),console.error("naive_eventualBG:"+qe+" bgUndershoot:"+ka+" zeroTempDuration:"+Wa+" zeroTempEffect:"+za+" carbsReq:"+Na),Na>=h.carbsReqThreshold&&Ea<=45&&(oe.carbsReq=Na,oe.reason+=Na+" add'l carbs req w/in "+Ea+"m; ");var Za=0;if(ce<Oe&&r.iob<20*-h.current_basal/60&&ge>0&&ge>We)oe.reason+="IOB "+r.iob+" < "+o(20*-h.current_basal/60,2),oe.reason+=" and minDelta "+n(ge,h)+" > expectedDelta "+n(We,h)+"; ";else if(ce<Oe||Ba<Oe)return oe.reason+="minGuardBG "+n(Ba,h)+"<"+n(Oe,h),Za=o(60*((ka=he-Ba)/Te)/h.current_basal),Za=30*o(Za/30),Za=Math.min(120,Math.max(30,Za)),B.setTempBasal(0,Za,h,oe,a);if(h.skip_neutral_temps&&oe.deliverAt.getMinutes()>=55)return oe.reason+="; Canceling temp at "+oe.deliverAt.getMinutes()+"m past the hour. ",B.setTempBasal(0,0,h,oe,a);var $a=0,Ha=se;if(Ee<ve){if(oe.reason+="Eventual BG "+n(Ee,h)+" < "+n(ve,h),ge>We&&ge>0&&!Na)return qe<40?(oe.reason+=", naive_eventualBG < 40. ",B.setTempBasal(0,30,h,oe,a)):(e.delta>ge?oe.reason+=", but Delta "+n(me,h)+" > expectedDelta "+n(We,h):oe.reason+=", but Min. Delta "+ge.toFixed(2)+" > Exp. Delta "+n(We,h),a.duration>15&&t(se,h)===t(a.rate,h)?(oe.reason+=", temp "+a.rate+" ~ req "+se+"U/hr. ",oe):(oe.reason+="; setting current basal of "+se+" as temp. ",B.setTempBasal(se,30,h,oe,a)));$a=o($a=2*Math.min(0,(Ee-he)/Te),2);var Ja=Math.min(0,(qe-he)/Te);if(Ja=o(Ja,2),ge<0&&ge>We)$a=o($a*(ge/We),2);if(Ha=t(Ha=se+2*$a,h),a.duration*(a.rate-se)/60<Math.min($a,Ja)-.3*se)return oe.reason+=", "+a.duration+"m@"+a.rate.toFixed(2)+" is a lot less than needed. ",B.setTempBasal(Ha,30,h,oe,a);if(void 0!==a.rate&&a.duration>5&&Ha>=.8*a.rate)return oe.reason+=", temp "+a.rate+" ~< req "+Ha+"U/hr. ",oe;if(Ha<=0){if((Za=o(60*((ka=he-qe)/Te)/h.current_basal))<0?Za=0:(Za=30*o(Za/30),Za=Math.min(120,Math.max(0,Za))),Za>0)return oe.reason+=", setting "+Za+"m zero temp. ",B.setTempBasal(Ha,Za,h,oe,a)}else oe.reason+=", setting "+Ha+"U/hr. ";return B.setTempBasal(Ha,30,h,oe,a)}if(ge<We&&(!M||!$e))return e.delta<ge?oe.reason+="Eventual BG "+n(Ee,h)+" > "+n(ve,h)+" but Delta "+n(me,h)+" < Exp. Delta "+n(We,h):oe.reason+="Eventual BG "+n(Ee,h)+" > "+n(ve,h)+" but Min. Delta "+ge.toFixed(2)+" < Exp. Delta "+n(We,h),a.duration>15&&t(se,h)===t(a.rate,h)?(oe.reason+=", temp "+a.rate+" ~ req "+se+"U/hr. ",oe):(oe.reason+="; setting current basal of "+se+" as temp. ",B.setTempBasal(se,30,h,oe,a));if(Math.min(Ee,ca)<_e&&(!M||!$e))return oe.reason+=n(Ee,h)+"-"+n(ca,h)+" in range: no temp required",a.duration>15&&t(se,h)===t(a.rate,h)?(oe.reason+=", temp "+a.rate+" ~ req "+se+"U/hr. ",oe):(oe.reason+="; setting current basal of "+se+" as temp. ",B.setTempBasal(se,30,h,oe,a));if(Ee>=_e&&(oe.reason+="Eventual BG "+n(Ee,h)+" >= "+n(_e,h)+", "),r.iob>Be)return oe.reason+="IOB "+o(r.iob,2)+" > max_iob "+Be,a.duration>15&&t(se,h)===t(a.rate,h)?(oe.reason+=", temp "+a.rate+" ~ req "+se+"U/hr. ",oe):(oe.reason+="; setting current basal of "+se+" as temp. ",B.setTempBasal(se,30,h,oe,a));($a=o((Math.min(ca,Ee)-he)/Te,2))>Be-r.iob&&(oe.reason+="max_iob "+Be+", ",$a=Be-r.iob),Ha=t(Ha=se+2*$a,h),$a=o($a,3),oe.insulinReq=$a;var Ka=o((new Date(le).getTime()-r.lastBolusTime)/6e4,1);if(M&&$e&&ce>Oe){var Qa=o(_.mealCOB/h.carb_ratio,3);if(h.use_autoisf)Va=h.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var Va=1}Va>1&&console.error("SMB max range extended from default by factor "+Va);var Xa=0;void 0===h.maxSMBBasalMinutes?(Xa=o(Va*h.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):r.iob>Qa&&r.iob>0?(console.error("IOB",r.iob,"> COB",_.mealCOB+"; mealInsulinReq =",Qa),h.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",h.maxUAMSMBBasalMinutes,"profile.current_basal:",h.current_basal),Xa=o(Va*h.current_basal*h.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),Xa=o(30*h.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",h.maxSMBBasalMinutes,"profile.current_basal:",h.current_basal),Xa=o(Va*h.current_basal*h.maxSMBBasalMinutes/60,1));var Ya=h.bolus_increment,er=1/Ya;if(h.use_autoisf)var ar=b(h,ce,he);else console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),ar=.5;ar>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(ar,2));var rr=Math.min($a*ar,Xa);rr=Math.floor(rr*er)/er,Za=o(60*((he-(qe+ha)/2)/Te)/h.current_basal),$a>0&&rr<Ya&&(Za=0);var tr=0;Za<=0?Za=0:Za>=30?(Za=30*o(Za/30),Za=Math.min(60,Math.max(0,Za))):(tr=o(se*Za/30,2),Za=30),oe.reason+=" insulinReq "+$a,rr>=Xa&&(oe.reason+="; maxBolus "+Xa),Za>0&&(oe.reason+="; setting "+Za+"m low temp of "+tr+"U/h"),oe.reason+=". ";var or=3;h.SMBInterval&&(or=Math.min(10,Math.max(1,h.SMBInterval)));var nr=o(or-Ka,0),ir=o(60*(or-Ka),0)%60;if(console.error("naive_eventualBG",qe+",",Za+"m "+tr+"U/h temp needed; last bolus",Ka+"m ago; maxBolus: "+Xa),Ka>or?rr>0&&(oe.units=rr,oe.reason+="Microbolusing "+rr+"U. "):oe.reason+="Waiting "+nr+"m "+ir+"s to microbolus again. ",Za>0)return oe.rate=tr,oe.duration=Za,oe}var sr=B.getMaxSafeBasal(h);return Ha>sr&&(oe.reason+="adj. req. rate: "+Ha+" to maxSafeBasal: "+sr+", ",Ha=t(sr,h)),a.duration*(a.rate-se)/60>=2*$a?(oe.reason+=a.duration+"m@"+a.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+Ha+"U/hr. ",B.setTempBasal(Ha,30,h,oe,a)):void 0===a.duration||0===a.duration?(oe.reason+="no temp, setting "+Ha+"U/hr. ",B.setTempBasal(Ha,30,h,oe,a)):a.duration>5&&t(Ha,h)<=t(a.rate,h)?(oe.reason+="temp "+a.rate+" >~ req "+Ha+"U/hr. ",oe):(oe.reason+="temp "+a.rate+"<"+Ha+"U/hr. ",B.setTempBasal(Ha,30,h,oe,a))}},6880:(e,a,r)=>{var t=r(6654);e.exports=function(e,a){var r=20;void 0!==a&&"string"==typeof a.model&&(t(a.model,"54")||t(a.model,"23"))&&(r=40);return e<1?Math.round(e*r)/r:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,a,r)=>{var t=r(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,a){for(var r=-1,t=null==e?0:e.length,o=Array(t);++r<t;)o[r]=a(e[r],r,e);return o}},9750:e=>{e.exports=function(e,a,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==a&&(e=e>=a?e:a)),e}},4239:(e,a,r)=>{var t=r(2705),o=r(9607),n=r(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,a,r)=>{var t=r(2705),o=r(9932),n=r(1469),i=r(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(a){if("string"==typeof a)return a;if(n(a))return o(a,e)+"";if(i(a))return l?l.call(a):"";var r=a+"";return"0"==r&&1/a==-Infinity?"-0":r}},7561:(e,a,r)=>{var t=r(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,a,r)=>{var t="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=t},9607:(e,a,r)=>{var t=r(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var a=n.call(e,s),r=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(a?e[s]=r:delete e[s]),o}},2333:e=>{var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},5639:(e,a,r)=>{var t=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var a=/\s/;e.exports=function(e){for(var r=e.length;r--&&a.test(e.charAt(r)););return r}},6654:(e,a,r)=>{var t=r(9750),o=r(531),n=r(554),i=r(9833);e.exports=function(e,a,r){e=i(e),a=o(a);var s=e.length,l=r=void 0===r?s:t(n(r),0,s);return(r-=a.length)>=0&&e.slice(r,l)==a}},1469:e=>{var a=Array.isArray;e.exports=a},3218:e=>{e.exports=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,a,r)=>{var t=r(4239),o=r(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,a,r)=>{var t=r(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,a,r)=>{var t=r(8601);e.exports=function(e){var a=t(e),r=a%1;return a==a?r?a-r:a:0}},4841:(e,a,r)=>{var t=r(7561),o=r(3218),n=r(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var r=s.test(e);return r||l.test(e)?m(e.slice(2),r?2:8):i.test(e)?NaN:+e}},9833:(e,a,r)=>{var t=r(531);e.exports=function(e){return null==e?"":t(e)}}},a={};function r(t){var o=a[t];if(void 0!==o)return o.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,r),n.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=r(5546);freeaps_determineBasal=t})();