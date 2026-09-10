(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ChanceModel=api;})(typeof self!=='undefined'?self:this,function(){
 function seeded(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 function coin(n,p,rng=Math.random){p=Math.max(0,Math.min(1,p));let heads=0;for(let i=0;i<n;i++)if(rng()<p)heads++;return{heads,tails:n-heads,n,p}}
 function dice(n,two=false,rng=Math.random){const min=two?2:1,max=two?12:6,counts={};for(let k=min;k<=max;k++)counts[k]=0;for(let i=0;i<n;i++){const a=1+Math.floor(rng()*6),v=two?a+1+Math.floor(rng()*6):a;counts[v]++}return{n,two,counts}}
 function diceTheory(v,two){return two?(6-Math.abs(7-v))/36:1/6}
 function game(a,b){return{a:a*.5,b:b*.5,advantage:a===b?'equal':a>b?'a':'b'}}
 return{seeded,coin,dice,diceTheory,game};
});
