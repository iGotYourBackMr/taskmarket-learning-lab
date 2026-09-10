(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.DataModel=api})(typeof globalThis!=='undefined'?globalThis:this,function(){
const graph=[{month:'Jan',value:62},{month:'Feb',value:64},{month:'Mar',value:63},{month:'Apr',value:66},{month:'May',value:67},{month:'Jun',value:68}];
const correlation=[...[[5,55],[6,57],[7,59],[8,61]].map(([sessions,score])=>({course:'Intro',sessions,score})),...[[2,80],[3,82],[4,84],[5,86]].map(([sessions,score])=>({course:'Advanced',sessions,score}))];
const population=[...Array(100)].map((_,i)=>({group:'North',yes:i<70,id:'N'+i})).concat([...Array(100)].map((_,i)=>({group:'South',yes:i<30,id:'S'+i})));
function seeded(seed=123456){let s=seed>>>0;return()=>((s=(s*1664525+1013904223)>>>0)/4294967296)}
function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function sample(n,method='random',rng=Math.random){if(method==='random')return shuffle(population,rng).slice(0,n);const north=shuffle(population.filter(x=>x.group==='North'),rng).slice(0,Math.round(n*.8));const south=shuffle(population.filter(x=>x.group==='South'),rng).slice(0,n-north.length);return shuffle(north.concat(south),rng)}
function summarize(items){const out={North:{cards:0,yes:0},South:{cards:0,yes:0},total:{cards:items.length,yes:0}};for(const x of items){out[x.group].cards++;if(x.yes){out[x.group].yes++;out.total.yes++}}out.rate=items.length?out.total.yes/items.length:0;return out}
function mean(values){return values.reduce((a,b)=>a+b,0)/values.length}
function corr(rows){const xs=rows.map(x=>x.sessions),ys=rows.map(x=>x.score),mx=mean(xs),my=mean(ys);const num=rows.reduce((s,r)=>s+(r.sessions-mx)*(r.score-my),0),dx=Math.sqrt(rows.reduce((s,r)=>s+(r.sessions-mx)**2,0)),dy=Math.sqrt(rows.reduce((s,r)=>s+(r.score-my)**2,0));return num/(dx*dy)}
return{graph,correlation,population,seeded,sample,summarize,mean,corr};
});
