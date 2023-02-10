var freeaps_determineBasal;(()=>{var e={5546:(e,r,a)=>{var t=a(6880);function o(e,r){r||(r=0);var a=Math.pow(10,r);return Math.round(e*a)/a}function n(e,r){return"mmol/L"===r.out_units?o(.0555*e,1):Math.round(e)}var i="",s="",l="",d="",u="",m="",c="",p="",g="",b="",f=1,h=1,v=1,_=1,B=1,M=1;function S(e,r,a){polyX_bg=[50,60,80,90,100,110,150,180,200],polyY_bg=[-.5,-.5,-.3,-.2,0,0,.5,.7,.7],polyX_delta=[2,7,12,16,20],polyY_delta=[0,0,.4,.7,.7],"bg"==a?(polyX=polyX_bg,polyY=polyY_bg):"delta"==a&&(polyX=polyX_delta,polyY=polyY_delta);var t=polyX.length-1,o=polyX[0],n=polyY[0],i=polyX[t],s=polyY[t],l=1,d=1,u=1,m=o;if(o>e)i=polyX[1],l=(d=n)+((s=polyY[1])-d)/(i-(u=o))*(e-u);else if(i<e)o=polyX[t-1],l=(d=n=polyY[t-1])+(s-d)/(i-(u=o))*(e-u);else for(var c=0;c<=t;c++){if(o=polyX[c],n=polyY[c],o==e){l=n;break}if(o>e){l=d+(n-d)/(o-(u=m))*(e-u);break}d=n,m=o}return l*="delta"==a?r.delta_ISFrange_weight:e>100?r.higher_ISFrange_weight:r.lower_ISFrange_weight}function y(e,r,a,t){return console.error("check ratio "+o(e,2)+" against autoISF min: "+r+" and autoISF max: "+a),e<r?(b=" (lmtd.)",p="weakest ISF factor "+o(e,2)+" limited by autoisf_min "+r,console.error(p),e=r):e>a&&(b=" (lmtd.)",p="strongest ISF factor "+o(e,2)+" limited by autoisf_max "+a,console.error(p),e=a),e>=1&&(M=Math.max(e,t)),e<1&&(M=Math.min(e,t)),p="final ISF factor "+o(M,2),console.error(p),M}e.exports=function(e,r,a,x,F,I,w,T,C,D,G,O,R,U,A,P){var k=0,j="",E="",W="",q="",z="",L=0,X=(U=0,0),Y=0,N=0,H=0,Z=0;A.length>0&&(Z=A[0].TDD);let $=P.avgTDD7d;function J(e,r){var a=e.getTime();return new Date(a+36e5*r)}function K(e){var r=x.bolus_increment;.05!=r&&(r=.1);var a=e/r;return a>=1?o(Math.floor(a)*r,5):0}function Q(e){function r(e){return e<10&&(e="0"+e),e}return r(e.getHours())+":"+r(e.getMinutes())+":00"}function V(e,r){var a=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+r);return(a.getTime()-t.getTime())/36e5}function ee(e,r){var a=0,t=r,o=(e-r)/36e5,n=0,i=o,s=0;do{if(o>0){var l=Q(t);R[0].rate;for(let e=0;e<R.length;e++){var d=R[e].start;if(l==d){if(e+1<R.length){o>=(s=V(R[e+1].start,R[e].start))?n=s:o<s&&(n=o)}else if(e+1==R.length){let r=R[0].start;o>=(s=24-V(R[e].start,r))?n=s:o<s&&(n=o)}a+=K(R[e].rate*n),o-=n,t=J(t,n)}else if(l>d)if(e+1<R.length){var u=R[e+1].start;l<u&&(o>=(s=V(u,l))?n=s:o<s&&(n=o),a+=K(R[e].rate*n),o-=n,t=J(t,n))}else if(e==R.length-1){o>=(s=V("23:59:59",l))?n=s:o<s&&(n=o),a+=K(R[e].rate*n),o-=n,t=J(t,n)}}}}while(o>0&&o<i);return a}if(G.length){let e=G.length-1;var re=new Date(G[e].timestamp),ae=new Date(G[0].timestamp);if("TempBasalDuration"==G[0]._type&&(ae=new Date),(k=(ae-re)/36e5)<23.9&&k>21)N=ee(re,(te=24-k,oe=re.getTime(),new Date(oe-36e5*te))),q="24 hours of data is required for an accurate tdd calculation. Currently only "+k.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+N.toPrecision(5)+" U. ";else k<21?(dynISFenabled=!1,enableDynamicCR=!1):q=""}else console.log("Pumphistory is empty!"),dynISFenabled=!1,enableDynamicCR=!1;var te,oe;for(let e=0;e<G.length;e++)"Bolus"==G[e]._type&&(Y+=G[e].amount);for(let e=1;e<G.length;e++)if("TempBasal"==G[e]._type&&G[e].rate>0){L=e,H=G[e].rate;var ne=G[e-1]["duration (min)"]/60,ie=ne,se=new Date(G[e-1].timestamp),le=se;do{if(e--,0==e){le=new Date;break}if("TempBasal"==G[e]._type||"PumpSuspend"==G[e]._type){le=new Date(G[e].timestamp);break}}while(e>0);var de=(le-se)/36e5;de<ie&&(ne=de),X+=K(H*ne),e=L}for(let e=0;e<G.length;e++)if(0,0==G[e]["duration (min)"]||"PumpResume"==G[e]._type){let r=new Date(G[e].timestamp),a=r,t=e;do{if(t>0&&(--t,"TempBasal"==G[t]._type)){a=new Date(G[t].timestamp);break}}while(t>0);(a-r)/36e5>0&&(N+=ee(a,r))}for(let e=G.length-1;e>0;e--)if("TempBasalDuration"==G[e]._type){let r=G[e]["duration (min)"]/60,a=new Date(G[e].timestamp);var ue=a;let t=e;do{if(--t,t>=0&&("TempBasal"==G[t]._type||"PumpSuspend"==G[t]._type)){ue=new Date(G[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==G[0]._type&&(ue=new Date,r=G[e]["duration (min)"]/60),(ue-a)/36e5-r>0){N+=ee(ue,J(a,r))}}var me={TDD:o(U=Y+X+N,5),bolus:o(Y,5),temp_basal:o(X,5),scheduled_basal:o(N,5)},ce=U;k>21?(E=". Bolus insulin: "+Y.toPrecision(5)+" U",W=". Temporary basal insulin: "+X.toPrecision(5)+" U",j=". Insulin with scheduled basal rate: "+N.toPrecision(5)+" U",z=q+(" TDD past 24h is: "+U.toPrecision(5)+" U")+E+W+j,tddReason=", TDD, 24h: "+o(U,1)+", ytd: "+o(Z,1)+", 7dØ: "+o($,1),console.error(z)):tddReason=", TDD: Not enough pumpData (< 21h)";var pe={},ge=new Date;if(D&&(ge=D),void 0===x||void 0===x.current_basal)return pe.error="Error: could not get current basal rate",pe;var be=t(x.current_basal,x),fe=be,he=new Date;D&&(he=D);var ve,_e=new Date(e.date),Be=o((he-_e)/60/1e3,1),Me=e.glucose,Se=e.noise;ve=n(e.delta,x);var ye=Math.min(e.delta,e.short_avgdelta),xe=Math.min(e.short_avgdelta,e.long_avgdelta),Fe=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(Me<=10||38===Me||Se>=3)&&(pe.reason="CGM is calibrating, in ??? state, or noise is high");if(Be>12||Be<-5?pe.reason="If current system time "+he+" is correct, then BG data is too old. The last BG data was read "+Be+"m ago at "+_e:0===e.short_avgdelta&&0===e.long_avgdelta&&(e.last_cal&&e.last_cal<3?pe.reason="CGM was just calibrated":pe.reason="CGM data is unchanged ("+n(Me,x)+"+"+n(e.delta,x)+") for 5m w/ "+n(e.short_avgdelta,x)+" mg/dL ~15m change & "+n(e.long_avgdelta,x)+" mg/dL ~45m change"),Me<=10||38===Me||Se>=3||Be>12||Be<-5||0===e.short_avgdelta&&0===e.long_avgdelta)return r.rate>=fe?(pe.reason+=". Canceling high temp basal of "+r.rate,pe.deliverAt=ge,pe.temp="absolute",pe.duration=0,pe.rate=0,pe):0===r.rate&&r.duration>30?(pe.reason+=". Shortening "+r.duration+"m long zero temp to 30m. ",pe.deliverAt=ge,pe.temp="absolute",pe.duration=30,pe.rate=0,pe):(pe.reason+=". Temp "+r.rate+" <= current basal "+fe+"U/hr; doing nothing. ",pe);var Ie,we,Te,Ce,De=x.max_iob;if(void 0!==x.min_bg&&(we=x.min_bg),void 0!==x.max_bg&&(Te=x.max_bg),void 0!==x.enableSMB_high_bg_target&&(Ce=x.enableSMB_high_bg_target),void 0===x.min_bg||void 0===x.max_bg)return pe.error="Error: could not determine target_bg. ",pe;Ie=(x.min_bg+x.max_bg)/2;var Ge=x.exercise_mode||x.high_temptarget_raises_sensitivity,Oe=100,Re=160;if(x.half_basal_exercise_target&&(Re=x.half_basal_exercise_target),Ge&&x.temptargetSet&&Ie>Oe||x.low_temptarget_lowers_sensitivity&&x.temptargetSet&&Ie<Oe){var Ue=Re-Oe;sensitivityRatio=Ue*(Ue+Ie-Oe)<=0?x.autosens_max:Ue/(Ue+Ie-Oe),sensitivityRatio=Math.min(sensitivityRatio,x.autosens_max),sensitivityRatio=o(sensitivityRatio,2),process.stderr.write("Sensitivity ratio set to "+sensitivityRatio+" based on temp target of "+Ie+"; ")}else void 0!==F&&F&&(sensitivityRatio=F.ratio,process.stderr.write("Autosens ratio: "+sensitivityRatio+"; "));if(sensitivityRatio&&(fe=x.current_basal*sensitivityRatio,(fe=t(fe,x))!==be?process.stderr.write("Adjusting basal from "+be+" to "+fe+"; "):process.stderr.write("Basal unchanged: "+fe+"; ")),x.temptargetSet);else if(void 0!==F&&F&&(x.sensitivity_raises_target&&F.ratio<1||x.resistance_lowers_target&&F.ratio>1)){we=o((we-60)/F.ratio)+60,Te=o((Te-60)/F.ratio)+60;var Ae=o((Ie-60)/F.ratio)+60;Ie===(Ae=Math.max(80,Ae))?process.stderr.write("target_bg unchanged: "+Ae+"; "):process.stderr.write("target_bg from "+Ie+" to "+Ae+"; "),Ie=Ae}var Pe=200,ke=200,je=200;if(e.noise>=2){var Ee=Math.max(1.1,x.noisyCGMTargetMultiplier);Math.min(250,x.maxRaw);Pe=o(Math.min(200,we*Ee)),ke=o(Math.min(200,Ie*Ee)),je=o(Math.min(200,Te*Ee)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+Ie+" to "+ke+"; "),we=Pe,Ie=ke,Te=je}var We=we-.5*(we-40),qe=o(x.sens,1),ze=x.sens;void 0!==F&&F&&((ze=o(ze=x.sens/sensitivityRatio,1))!==qe?process.stderr.write("ISF from "+n(qe,x)+" to "+n(ze,x)):process.stderr.write("ISF unchanged: "+n(ze,x))),console.error("CR:"+x.carb_ratio),console.error("----------------------------------"),console.error(" start autoISF"),console.error("----------------------------------"),console.error("autoISFtimer start");var Le=function(e,r){if(e.use_autoisf&&e.iob_threshold>0&&e.iob_threshold<r[0].iob)return s=", autoISF-SMB disabled:, IOB: "+o(r[0].iob,2)+", > threshold: "+e.iob_threshold+", maxIOB: "+e.max_iob,console.error(s),"iobTH";var a=n(e.min_bg,e);return e.use_autoisf&&e.temptargetSet&&e.enableSMB_EvenOn_OddOff||e.use_autoisf&&e.min_bg==e.max_bg&&e.enableSMB_EvenOn_OddOff_always?(e.temptargetSet?msgType="TempTarget ":msgType="profile target ","mmol/L"==e.out_units?(evenTarget=o(10*a,0)%2==0,msgUnits=" has ",msgTail=" decimal"):(evenTarget=a%2==0,msgUnits=" is ",msgTail=" number"),evenTarget?msgEven="even":msgEven="odd",evenTarget?(console.error("SMB enabled - "+msgType+a+msgUnits+msgEven+msgTail),e.temptargetSet&&a<100?(console.error("Full Loop enabled, SMB enforced"),s=", autoISF-SMB enabled:, even TT","enforced"):(s=", autoISF-SMB enabled:, even Target","enabled")):(console.error("SMB disabled - "+msgType+a+msgUnits+msgEven+msgTail),s=", autoISF-SMB disabled:, odd Target","blocked")):"oref"}(x,a),Xe=!0;if(T&&"oref"!=Le?("blocked"==Le&&(Xe=!1),console.error("loopSMB function overriden with autoISF target toggle, enableSMB = "+Xe)):(Xe=function(e,r,a,t,o,i){return r?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of "+o),!1):!0===a.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&a.mealCOB?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of",a.mealCOB),!0):!0===e.enableSMB_after_carbs&&a.carbs?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of",n(o,e)),console.error("SMB enabled for temptargets with "+n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&t>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",t," | High BG ",i),a.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(x,T,I,Me,Ie,Ce),console.error("loopSMB function returns enableSMB = "+Xe)),ze=function(e,r,a,t,M,x,F,I){if(!a.use_autoisf)return console.error("autoISF disabled in Preferences"),i+=", autoISF, disabled",e;if(a.autoISF_off_Sport&&(a.high_temptarget_raises_sensitivity||a.exercise_mode)&&a.temptargetSet&&r>I)return console.error("autoISF disabled due to exercise"),i+=", autoISF, disabled (exercise)",e;const w=t.dura_p,T=t.delta_pl,C=t.delta_pn,D=t.r_squ,G=t.bg_acceleration,O=t.a_0,R=t.a_1,U=t.a_2,A=t.dura_ISF_minutes,P=t.dura_ISF_average;var k=!1,j=e,E=r+10-P;if(M.mealCOB>0&&!a.enableautoisf_with_COB)return console.error("BG dependant autoISF by-passed; preferences disabled mealCOB of "+o(M.mealCOB,1)),i+=", autoISF, disabled with COB",e;var W=t.pp_debug;if(m+="BG-accel: "+o(G,3)+", PF-minutes: "+w+", PF-corr: "+o(D,4)+", PF-nextDelta: "+n(C,a)+", PF-lastDelta: "+n(T,a)+", regular Delta: "+n(t.delta,a),console.error(W+m+" , Weights Accel/Brake: "+a.bgAccel_ISF_weight+" / "+a.bgBrake_ISF_weight),a.enable_BG_acceleration){var q=D,z=G;if(0!=t.parabola_fit_a2&&q>=.9){var L=-R/2/U*5,X=o(O-L*L/25*U,1);(L=o(L,1))>0&&z<0?(g="predicts a Max of "+n(X,a)+", in about "+Math.abs(L)+"min",console.error("Parabolic fit "+g)):L>0&&z>0?(g="predicts a Min of "+n(X,a)+", in about "+Math.abs(L)+"min",console.error("Parabolic fit "+g)):L<0&&z<0?(g="saw Max of "+n(X,a)+", about "+Math.abs(L)+"min ago",console.error("Parabolic fit "+g)):L<0&&z>0&&(g="saw Min of "+n(X,a)+", about "+Math.abs(L)+"min ago",console.error("Parabolic fit "+g))}if(q<.9)g="acce_ISF by-passed, as correlation, "+o(q,2)+", is too low",console.error("Parabolic fit "+g),c+=", Parabolic Fit, "+g;else{var Y=10*(q-.9),N=1,H=1;t.glucose<a.target_bg?z>0?(z>1&&(N=.5),H=a.bgBrake_ISF_weight):z<0&&(H=a.bgAccel_ISF_weight):z<0?H=a.bgBrake_ISF_weight:z>0&&(H=a.bgAccel_ISF_weight),(f=1+z*N*H*Y)<0&&(f=.1),console.error(c+" acce_ISF adaptation is "+o(f,2)),1!=f&&(k=!0,c+=", Parabolic Fit, "+g+", acce-ISF Ratio: "+o(f,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");i+=s+c+", autoISF",h=1+S(100-E,a,"bg"),console.error("bg_ISF adaptation is "+o(h,2));var Z=1,$=1;if(h<1)return Z=Math.min(h,f),f>1?(p="bg-ISF adaptation lifted to "+o(Z=h*f,2)+", as BG accelerates already",console.error(p),i+=", bg-ISF Ratio: "+o(Z,2)+"(accel.)"):i+=", bg-ISF Ratio: "+o(Z,2),$=y(Z,a.autoISF_min,a.autoISF_max,F),j=(a.high_temptarget_raises_sensitivity||a.exercise_mode)&&a.temptargetSet&&r>I?Math.min(720,o(e/$,1)):Math.min(720,o(a.sens/$,1)),i+=d+u+l+", final Ratio: "+o($,2)+b+", final ISF: "+n(a.sens,a)+"→"+n(j,a),j;h>1&&(k=!0,i+=", bg-ISF Ratio: "+o(h,2));var J=t.delta;a.enablepp_ISF_always||a.pp_ISF_hours>=(x-M.lastCarbTime)/1e3/3600?deltaType="pp":deltaType="delta",E>0?console.error(deltaType+"_ISF adaptation by-passed as average glucose < "+r+"+10"):t.short_avgdelta<0?console.error(deltaType+"_ISF adaptation by-passed as no rise or too short lived"):"pp"==deltaType?(_=1+Math.max(0,J*a.pp_ISF_weight),console.error("pp_ISF adaptation is "+o(_,2)),d=", pp-ISF Ratio: "+o(_,2),1!=_&&(k=!0)):(v=S(J,a,"delta"),E>-20&&(v*=.5),v=1+v,console.error("delta_ISF adaptation is "+o(v,2)),u=", Δ-ISF Ratio: "+o(v,2),1!=v&&(k=!0));var K=a.dura_ISF_weight;M.mealCOB>0&&!a.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(M.mealCOB,1)):A<10?console.error("dura_ISF by-passed; BG is only "+A+"m at level "+P):P<=r?console.error("dura_ISF by-passed; avg. glucose "+P+" below target "+n(r,a)):(B+=A/60*(K/r)*(P-r),k=!0,l=", Duration: "+A+", Avg: "+n(P,a)+", dura-ISF Ratio: "+o(B,2),console.error("dura_ISF adaptation is "+o(B,2)+" because ISF "+e+" did not do it for "+o(A,1)+"m"));return k?(Z=Math.max(B,h,v,f,_),console.error("autoISF adaption ratios:"),console.error("  dura "+o(B,2)),console.error("  bg "+o(h,2)),console.error("  delta "+o(v,2)),console.error("  pp "+o(_,2)),console.error("  accel "+o(f,2)),f<1&&(p="strongest ISF factor "+o(Z,2)+" weakened to "+o(Z*f,2)+" as bg decelerates already",console.error(p),Z*=f),$=y(Z,a.autoISF_min,a.autoISF_max,F),(a.high_temptarget_raises_sensitivity||a.exercise_mode)&&a.temptargetSet&&r>I?(j=o(e/$,1),console.error("autoISF adjusts sens "+j+", instead of profile.sens "+a.sens)):j=o(a.sens/$,1),i+=d+u+l+", final Ratio: "+o($,2)+b+", final ISF: "+n(a.sens,a)+"→"+n(j,a),j):(i+=", not modified",console.error("autoISF does not modify"),j)}(ze,Ie,x,e,I,D,sensitivityRatio,Oe),console.error("autoISFtimer end"),console.error("----------------------------------"),console.error(" end autoISF"),console.error("----------------------------------"),void 0===a)return pe.error="Error: iob_data undefined. ",pe;var Ye,Ne=a;if(a.length,a.length>1&&(a=Ne[0]),void 0===a.activity||void 0===a.iob)return pe.error="Error: iob_data missing some property. ",pe;var He=((Ye=void 0!==a.lastTemp?o((new Date(he).getTime()-a.lastTemp.date)/6e4):0)+r.duration)%30;if(console.error("currenttemp:"+r.rate+" lastTempAge:"+Ye+"m, tempModulus:"+He+"m"),pe.temp="absolute",pe.deliverAt=ge,T&&r&&a.lastTemp&&r.rate!==a.lastTemp.rate&&Ye>10&&r.duration)return pe.reason="Warning: currenttemp rate "+r.rate+" != lastTemp rate "+a.lastTemp.rate+" from pumphistory; canceling temp",w.setTempBasal(0,0,x,pe,r);if(r&&a.lastTemp&&r.duration>0){var Ze=Ye-a.lastTemp.duration;if(Ze>5&&Ye>10)return pe.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+Ze+"m ago; canceling temp",w.setTempBasal(0,0,x,pe,r)}var $e=o(-a.activity*ze*5,2),Je=o(6*(ye-$e));Je<0&&(Je=o(6*(xe-$e)))<0&&(Je=o(6*(e.long_avgdelta-$e)));var Ke=Me,Qe=(Ke=a.iob>0?o(Me-a.iob*ze):o(Me-a.iob*Math.min(ze,x.sens)))+Je;if(void 0===Qe||isNaN(Qe))return pe.error="Error: could not calculate eventualBG. Sensitivity: "+ze+" Deviation: "+Je,pe;var Ve=function(e,r,a){return o(a+(e-r)/24,1)}(Ie,Qe,$e);pe={temp:"absolute",bg:n(Me,x),tick:ve,eventualBG:Qe,insulinReq:0,reservoir:C,deliverAt:ge,sensitivityRatio,TDD:ce,insulin:me};var er=[],rr=[],ar=[],tr=[];er.push(Me),rr.push(Me),tr.push(Me),ar.push(Me);var or=x.enableUAM,nr=0,ir=0;nr=o(ye-$e,1);var sr=o(ye-$e,1);csf=ze/x.carb_ratio,console.error("profile.sens:"+n(x.sens,x)+", sens:"+n(ze,x)+", CSF:"+o(csf,1));var lr=o(30*csf*5/60,1);nr>lr&&(console.error("Limiting carb impact from "+nr+" to "+lr+"mg/dL/5m (30g/h)"),nr=lr);var dr=3;sensitivityRatio&&(dr/=sensitivityRatio);var ur=dr;if(I.carbs){dr=Math.max(dr,I.mealCOB/20);var mr=o((new Date(he).getTime()-I.lastCarbTime)/6e4),cr=(I.carbs-I.mealCOB)/I.carbs;ur=o(ur=dr+1.5*mr/60,1),console.error("Last carbs "+mr+" minutes ago; remainingCATime:"+ur+"hours; "+o(100*cr)+"% carbs absorbed")}var pr=Math.max(0,nr/5*60*ur/2)/csf,gr=90,br=1;x.remainingCarbsCap&&(gr=Math.min(90,x.remainingCarbsCap)),x.remainingCarbsFraction&&(br=Math.min(1,x.remainingCarbsFraction));var fr=1-br,hr=Math.max(0,I.mealCOB-pr-I.carbs*fr),vr=(hr=Math.min(gr,hr))*csf*5/60/(ur/2),_r=o(I.slopeFromMaxDeviation,2),Br=o(I.slopeFromMinDeviation,2),Mr=Math.min(_r,-Br/3),Sr=0;0===nr?ir=0:!0===x.floating_carbs?(ir=Math.min(60*ur/5/2,Math.max(0,I.carbs*csf/nr)),Sr=Math.min(60*ur/5/2,Math.max(0,I.mealCOB*csf/nr)),I.carbs>0&&(i+=", Floating Carbs:, CID: "+o(ir,1)+", MealCarbs: "+o(I.carbs,1)+", Not Floating:, CID: "+o(Sr,1)+", MealCOB: "+o(I.mealCOB,1),console.error("Floating Carbs CID: "+o(ir,1)+" / MealCarbs: "+o(I.carbs,1)+" vs. Not Floating:"+o(Sr,1)+" / MealCOB:"+o(I.mealCOB,1)))):ir=Math.min(60*ur/5/2,Math.max(0,I.mealCOB*csf/nr)),console.error("Carb Impact:"+nr+"mg/dL per 5m; CI Duration:"+o(5*ir/60*2,1)+"hours; remaining CI ("+o(ur/2,2)+"h peak):",o(vr,1)+"mg/dL per 5m");var yr,xr,Fr,Ir,wr,Tr=999,Cr=999,Dr=999,Gr=Me,Or=999,Rr=999,Ur=999,Ar=999,Pr=Qe,kr=Me,jr=Me,Er=0,Wr=[],qr=[];try{Ne.forEach((function(e){var r=o(-e.activity*ze*5,2),a=o(-e.iobWithZeroTemp.activity*ze*5,2),t=nr*(1-Math.min(1,rr.length/12));Pr=rr[rr.length-1]+r+t;var n=tr[tr.length-1]+a,i=Math.max(0,Math.max(0,nr)*(1-er.length/Math.max(2*ir,1))),s=Math.min(er.length,12*ur-er.length),l=Math.max(0,s/(ur/2*12)*vr);i+l,Wr.push(o(l,0)),qr.push(o(i,0)),COBpredBG=er[er.length-1]+r+Math.min(0,t)+i+l;var d=Math.max(0,sr+ar.length*Mr),u=Math.max(0,sr*(1-ar.length/Math.max(36,1))),m=Math.min(d,u);m>0&&(Er=o(5*(ar.length+1)/60,1)),UAMpredBG=ar[ar.length-1]+r+Math.min(0,t)+m,rr.length<48&&rr.push(Pr),er.length<48&&er.push(COBpredBG),ar.length<48&&ar.push(UAMpredBG),tr.length<48&&tr.push(n),COBpredBG<Or&&(Or=o(COBpredBG)),UAMpredBG<Rr&&(Rr=o(UAMpredBG)),Pr<Ur&&(Ur=o(Pr)),n<Ar&&(Ar=o(n));rr.length>18&&Pr<Tr&&(Tr=o(Pr)),Pr>kr&&(kr=Pr),(ir||vr>0)&&er.length>18&&COBpredBG<Cr&&(Cr=o(COBpredBG)),(ir||vr>0)&&COBpredBG>kr&&(jr=COBpredBG),or&&ar.length>12&&UAMpredBG<Dr&&(Dr=o(UAMpredBG)),or&&UAMpredBG>kr&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}pe.predBGs={},rr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))}));for(var zr=rr.length-1;zr>12&&rr[zr-1]===rr[zr];zr--)rr.pop();for(pe.predBGs.IOB=rr,Fr=o(rr[rr.length-1]),tr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),zr=tr.length-1;zr>6&&!(tr[zr-1]>=tr[zr]||tr[zr]<=Ie);zr--)tr.pop();if(pe.predBGs.ZT=tr,o(tr[tr.length-1]),I.mealCOB>0&&(nr>0||vr>0)){for(er.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),zr=er.length-1;zr>12&&er[zr-1]===er[zr];zr--)er.pop();pe.predBGs.COB=er,Ir=o(er[er.length-1]),Qe=Math.max(Qe,o(er[er.length-1]))}if(nr>0||vr>0){if(or){for(ar.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),zr=ar.length-1;zr>12&&ar[zr-1]===ar[zr];zr--)ar.pop();pe.predBGs.UAM=ar,wr=o(ar[ar.length-1]),ar[ar.length-1]&&(Qe=Math.max(Qe,o(ar[ar.length-1])))}pe.eventualBG=Qe}console.error("UAM Impact:"+sr+"mg/dL per 5m; UAM Duration:"+Er+"hours"),Tr=Math.max(39,Tr),Cr=Math.max(39,Cr),Dr=Math.max(39,Dr),yr=o(Tr);var Lr=I.mealCOB/I.carbs;xr=o(Dr<999&&Cr<999?(1-Lr)*UAMpredBG+Lr*COBpredBG:Cr<999?(Pr+COBpredBG)/2:Dr<999?(Pr+UAMpredBG)/2:Pr),Ar>xr&&(xr=Ar),Gr=o(Gr=ir||vr>0?or?Lr*Or+(1-Lr)*Rr:Or:or?Rr:Ur);var Xr=Dr;if(Ar<We)Xr=(Dr+Ar)/2;else if(Ar<Ie){var Yr=(Ar-We)/(Ie-We);Xr=(Dr+(Dr*Yr+Ar*(1-Yr)))/2}else Ar>Dr&&(Xr=(Dr+Ar)/2);if(Xr=o(Xr),I.carbs)if(!or&&Cr<999)yr=o(Math.max(Tr,Cr));else if(Cr<999){var Nr=Lr*Cr+(1-Lr)*Xr;yr=o(Math.max(Tr,Cr,Nr))}else yr=or?Xr:Gr;else or&&(yr=o(Math.max(Tr,Xr)));yr=Math.min(yr,xr),process.stderr.write("minPredBG: "+n(yr,x)+" minIOBPredBG: "+n(Tr,x)+" minZTGuardBG: "+n(Ar,x)),Cr<999&&process.stderr.write(" minCOBPredBG: "+n(Cr,x)),Dr<999&&process.stderr.write(" minUAMPredBG: "+n(Dr,x)),console.error(" avgPredBG:"+n(xr,x)+" COB/Carbs:"+I.mealCOB+"/"+I.carbs),jr>Me&&(yr=Math.min(yr,jr)),pe.COB=I.mealCOB,pe.IOB=a.iob,pe.BGI=n($e,x),pe.deviation=n(Je,x),pe.dura_ISFratio=o(B,2),pe.bg_ISFratio=o(h,2),pe.delta_ISFratio=o(v,2),pe.pp_ISFratio=o(_,2),pe.acce_ISFratio=o(f,2),pe.auto_ISFratio=o(1==M?sensitivityRatio:M,2),pe.ISF=n(ze,x),pe.CR=o(x.carb_ratio,2),pe.TDD=o(ce,1),pe.TDDytd=o(Z,1),pe.TDD7d=o($,1),pe.target_bg=n(Ie,x);var Hr=function(e,r,a,t){if(!e.use_autoisf)return console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),.5;if(0===e.smb_delivery_ratio_bg_range||"fullLoop"===t)return console.error("SMB delivery ratio set to fixed value "+e.smb_delivery_ratio),e.smb_delivery_ratio;var n=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(r<=a)return console.error("SMB delivery ratio limited by minimum value "+n),n;var i=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max);if(r>=a+e.smb_delivery_ratio_bg_range)return console.error("SMB delivery ratio limited by maximum value "+i),i;var s=n+(i-n)*(r-a)/e.smb_delivery_ratio_bg_range;return console.error("SMB delivery ratio set to interpolated value "+o(s,2)),s}(x,Me,Ie,Le);pe.SMBratio=o(Hr,2);var Zr="SMB Ratio:, "+o(Hr,2);pe.reason=Zr+i+", Standard, COB: "+pe.COB+", Dev: "+pe.deviation+", BGI: "+pe.BGI+", ISF: "+pe.ISF+", CR: "+pe.CR+", Target: "+pe.target_bg+", minPredBG "+n(yr,x)+", minGuardBG "+n(Gr,x)+", IOBpredBG "+n(Fr,x),Ir>0&&(pe.reason+=", COBpredBG "+n(Ir,x)),wr>0&&(pe.reason+=", UAMpredBG "+n(wr,x)),pe.reason+=tddReason,pe.reason+="; ";var $r=Ke;$r<40&&($r=Math.min(Gr,$r));var Jr=We-$r,Kr=240,Qr=240;if(I.mealCOB>0&&(nr>0||vr>0)){for(zr=0;zr<er.length;zr++)if(er[zr]<we){Kr=5*zr;break}for(zr=0;zr<er.length;zr++)if(er[zr]<We){Qr=5*zr;break}}else{for(zr=0;zr<rr.length;zr++)if(rr[zr]<we){Kr=5*zr;break}for(zr=0;zr<rr.length;zr++)if(rr[zr]<We){Qr=5*zr;break}}Xe&&Gr<We&&(console.error("minGuardBG "+n(Gr,x)+" projected below "+n(We,x)+" - disabling SMB"),Xe=!1);var Vr=.2;void 0!==x.maxDelta_bg_threshold&&"fullLoop"==Le&&(Vr=Math.min(x.maxDelta_bg_threshold,.4)),Fe>Vr*Me&&(console.error("maxDelta "+n(Fe,x)+" > "+100*Vr+"% of BG "+n(Me,x)+" - disabling SMB"),pe.reason+="maxDelta "+n(Fe,x)+" > "+100*Vr+"% of BG "+n(Me,x)+" - SMB disabled!, ",Xe=!1),console.error("BG projected to remain above "+n(we,x)+" for "+Kr+"minutes"),(Qr<240||Kr<60)&&console.error("BG projected to remain above "+n(We,x)+" for "+Qr+"minutes");var ea=Qr,ra=x.current_basal*ze*ea/60,aa=Math.max(0,I.mealCOB-.25*I.carbs),ta=(Jr-ra)/csf-aa;ra=o(ra),ta=o(ta),console.error("naive_eventualBG: "+n(Ke,x)+", bgUndershoot: "+n(Jr,x)+", zeroTempDuration: "+ea+", zeroTempEffect: "+ra+", carbsReq: "+ta),"Could not parse clock data"==I.reason?console.error("carbsReq unknown: Could not parse clock data"):ta>=x.carbsReqThreshold&&Qr<=45&&(pe.carbsReq=ta,pe.reason+=ta+" add'l carbs req w/in "+Qr+"m; ");var oa=0;if(Me<We&&a.iob<20*-x.current_basal/60&&ye>0&&ye>Ve)pe.reason+="IOB "+a.iob+" < "+o(20*-x.current_basal/60,2),pe.reason+=" and minDelta "+n(ye,x)+" > expectedDelta "+n(Ve,x)+"; ";else if(Me<We||Gr<We)return pe.reason+="minGuardBG "+n(Gr,x)+"<"+n(We,x),oa=o(60*((Jr=Ie-Gr)/ze)/x.current_basal),oa=30*o(oa/30),oa=Math.min(120,Math.max(30,oa)),w.setTempBasal(0,oa,x,pe,r);if(x.skip_neutral_temps&&pe.deliverAt.getMinutes()>=55)return pe.reason+="; Canceling temp at "+pe.deliverAt.getMinutes()+"m past the hour. ",w.setTempBasal(0,0,x,pe,r);var na=0,ia=fe;if(Qe<we){if(pe.reason+="Eventual BG "+n(Qe,x)+" < "+n(we,x),ye>Ve&&ye>0&&!ta)return Ke<40?(pe.reason+=", naive_eventualBG < 40. ",w.setTempBasal(0,30,x,pe,r)):(e.delta>ye?pe.reason+=", but Delta "+n(ve,x)+" > expectedDelta "+n(Ve,x):pe.reason+=", but Min. Delta "+ye.toFixed(2)+" > Exp. Delta "+n(Ve,x),r.duration>15&&t(fe,x)===t(r.rate,x)?(pe.reason+=", temp "+r.rate+" ~ req "+fe+"U/hr. ",pe):(pe.reason+="; setting current basal of "+fe+" as temp. ",w.setTempBasal(fe,30,x,pe,r)));na=o(na=2*Math.min(0,(Qe-Ie)/ze),2);var sa=Math.min(0,(Ke-Ie)/ze);if(sa=o(sa,2),ye<0&&ye>Ve)na=o(na*(ye/Ve),2);if(ia=t(ia=fe+2*na,x),r.duration*(r.rate-fe)/60<Math.min(na,sa)-.3*fe)return pe.reason+=", "+r.duration+"m@"+r.rate.toFixed(2)+" is a lot less than needed. ",w.setTempBasal(ia,30,x,pe,r);if(void 0!==r.rate&&r.duration>5&&ia>=.8*r.rate)return pe.reason+=", temp "+r.rate+" ~< req "+ia+"U/hr. ",pe;if(ia<=0){if((oa=o(60*((Jr=Ie-Ke)/ze)/x.current_basal))<0?oa=0:(oa=30*o(oa/30),oa=Math.min(120,Math.max(0,oa))),oa>0)return pe.reason+=", setting "+oa+"m zero temp. ",w.setTempBasal(ia,oa,x,pe,r)}else pe.reason+=", setting "+ia+"U/hr. ";return w.setTempBasal(ia,30,x,pe,r)}if(ye<Ve&&(!T||!Xe))return e.delta<ye?pe.reason+="Eventual BG "+n(Qe,x)+" > "+n(we,x)+" but Delta "+n(ve,x)+" < Exp. Delta "+n(Ve,x):pe.reason+="Eventual BG "+n(Qe,x)+" > "+n(we,x)+" but Min. Delta "+ye.toFixed(2)+" < Exp. Delta "+n(Ve,x),r.duration>15&&t(fe,x)===t(r.rate,x)?(pe.reason+=", temp "+r.rate+" ~ req "+fe+"U/hr. ",pe):(pe.reason+="; setting current basal of "+fe+" as temp. ",w.setTempBasal(fe,30,x,pe,r));if(Math.min(Qe,yr)<Te&&(!T||!Xe))return pe.reason+=n(Qe,x)+"-"+n(yr,x)+" in range: no temp required",r.duration>15&&t(fe,x)===t(r.rate,x)?(pe.reason+=", temp "+r.rate+" ~ req "+fe+"U/hr. ",pe):(pe.reason+="; setting current basal of "+fe+" as temp. ",w.setTempBasal(fe,30,x,pe,r));if(Qe>=Te&&(pe.reason+="Eventual BG "+n(Qe,x)+" >= "+n(Te,x)+", "),a.iob>De)return pe.reason+="IOB "+o(a.iob,2)+" > max_iob "+De,r.duration>15&&t(fe,x)===t(r.rate,x)?(pe.reason+=", temp "+r.rate+" ~ req "+fe+"U/hr. ",pe):(pe.reason+="; setting current basal of "+fe+" as temp. ",w.setTempBasal(fe,30,x,pe,r));(na=o((Math.min(yr,Qe)-Ie)/ze,2))>De-a.iob&&(pe.reason+="max_iob "+De+", ",na=De-a.iob),ia=t(ia=fe+2*na,x),na=o(na,3),pe.insulinReq=na;var la=o((new Date(he).getTime()-a.lastBolusTime)/6e4,1);if(T&&Xe&&Me>We){var da=o(I.mealCOB/x.carb_ratio,3);if(x.use_autoisf)ua=x.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var ua=1}ua>1&&console.error("SMB max range extended from default by factor "+ua);var ma=0;void 0===x.maxSMBBasalMinutes?(ma=o(ua*x.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):a.iob>da&&a.iob>0?(console.error("IOB",a.iob,"> COB",I.mealCOB+"; mealInsulinReq =",da),x.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",x.maxUAMSMBBasalMinutes,"profile.current_basal:",x.current_basal),ma=o(ua*x.current_basal*x.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),ma=o(30*x.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",x.maxSMBBasalMinutes,"profile.current_basal:",x.current_basal),ma=o(ua*x.current_basal*x.maxSMBBasalMinutes/60,1));var ca=x.bolus_increment,pa=1/ca;x.use_autoisf||(console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),Hr=.5),Hr>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(Hr,2));var ga=Math.min(na*Hr,ma);ga=Math.floor(ga*pa)/pa,oa=o(60*((Ie-(Ke+Tr)/2)/ze)/x.current_basal),na>0&&ga<ca&&(oa=0);var ba=0;oa<=0?oa=0:oa>=30?(oa=30*o(oa/30),oa=Math.min(60,Math.max(0,oa))):(ba=o(fe*oa/30,2),oa=30),pe.reason+=" insulinReq "+na,ga>=ma&&(pe.reason+="; maxBolus "+ma),oa>0&&(pe.reason+="; setting "+oa+"m low temp of "+ba+"U/h"),pe.reason+=". ";var fa=3;x.SMBInterval&&(fa=Math.min(10,Math.max(1,x.SMBInterval)));var ha=o(fa-la,0),va=o(60*(fa-la),0)%60;if(console.error("naive_eventualBG "+n(Ke,x)+", "+oa+"m "+ba+"U/h temp needed; last bolus "+la+"m ago; maxBolus: "+ma),la>fa?ga>0&&(pe.units=ga,pe.reason+="Microbolusing "+ga+"U. "):pe.reason+="Waiting "+ha+"m "+va+"s to microbolus again. ",oa>0)return pe.rate=ba,pe.duration=oa,pe}var _a=w.getMaxSafeBasal(x);return ia>_a&&(pe.reason+="adj. req. rate: "+o(ia,2)+" to maxSafeBasal: "+o(_a,2)+", ",ia=t(_a,x)),r.duration*(r.rate-fe)/60>=2*na?(pe.reason+=r.duration+"m@"+r.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+ia+"U/hr. ",w.setTempBasal(ia,30,x,pe,r)):void 0===r.duration||0===r.duration?(pe.reason+="no temp, setting "+ia+"U/hr. ",w.setTempBasal(ia,30,x,pe,r)):r.duration>5&&t(ia,x)<=t(r.rate,x)?(pe.reason+="temp "+r.rate+" >~ req "+ia+"U/hr. ",pe):(pe.reason+="temp "+r.rate+"<"+ia+"U/hr. ",w.setTempBasal(ia,30,x,pe,r))}},6880:(e,r,a)=>{var t=a(6654);e.exports=function(e,r){var a=20;void 0!==r&&"string"==typeof r.model&&(t(r.model,"54")||t(r.model,"23"))&&(a=40);return e<1?Math.round(e*a)/a:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,r,a)=>{var t=a(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,r){for(var a=-1,t=null==e?0:e.length,o=Array(t);++a<t;)o[a]=r(e[a],a,e);return o}},9750:e=>{e.exports=function(e,r,a){return e==e&&(void 0!==a&&(e=e<=a?e:a),void 0!==r&&(e=e>=r?e:r)),e}},4239:(e,r,a)=>{var t=a(2705),o=a(9607),n=a(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,r,a)=>{var t=a(2705),o=a(9932),n=a(1469),i=a(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(i(r))return l?l.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}},7561:(e,r,a)=>{var t=a(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,r,a)=>{var t="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=t},9607:(e,r,a)=>{var t=a(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var r=n.call(e,s),a=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(r?e[s]=a:delete e[s]),o}},2333:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},5639:(e,r,a)=>{var t=a(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var r=/\s/;e.exports=function(e){for(var a=e.length;a--&&r.test(e.charAt(a)););return a}},6654:(e,r,a)=>{var t=a(9750),o=a(531),n=a(554),i=a(9833);e.exports=function(e,r,a){e=i(e),r=o(r);var s=e.length,l=a=void 0===a?s:t(n(a),0,s);return(a-=r.length)>=0&&e.slice(a,l)==r}},1469:e=>{var r=Array.isArray;e.exports=r},3218:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,r,a)=>{var t=a(4239),o=a(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,r,a)=>{var t=a(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,r,a)=>{var t=a(8601);e.exports=function(e){var r=t(e),a=r%1;return r==r?a?r-a:r:0}},4841:(e,r,a)=>{var t=a(7561),o=a(3218),n=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=s.test(e);return a||l.test(e)?d(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9833:(e,r,a)=>{var t=a(531);e.exports=function(e){return null==e?"":t(e)}}},r={};function a(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=a(5546);freeaps_determineBasal=t})();