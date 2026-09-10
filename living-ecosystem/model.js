(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.EcoModel=api;})(typeof self!=='undefined'?self:this,function(){
 const clamp=n=>Math.max(0,Math.min(10,Math.round((Number.isFinite(n)?n:0)*10)/10));
 function step(s){const resource=(clamp(s.water)+clamp(s.light))/20;const foodR=s.grass/10;const foodG=s.flowers/10;return{water:clamp(s.water),light:clamp(s.light),grass:clamp(s.grass+2*resource-.18*s.rabbits),flowers:clamp(s.flowers+1.7*resource-.16*s.grasshoppers),rabbits:clamp(s.rabbits+foodR-.4-.08*s.foxes),grasshoppers:clamp(s.grasshoppers+foodG-.45-.06*s.foxes),foxes:clamp(s.foxes+(s.rabbits+s.grasshoppers)/20-.45)}}
 function viable(sel){return['grass','clover','rabbit','grasshopper','fox'].every(x=>sel.includes(x))}
 function plantTrend(before,after){const a=before.grass+before.flowers,b=after.grass+after.flowers;return b>a+.2?'up':b<a-.2?'down':'same'}
 return{clamp,step,viable,plantTrend};
});
