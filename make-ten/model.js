(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.TenModel=api;})(typeof self!=='undefined'?self:this,function(){
  const clamp=n=>Math.max(0,Math.min(10,Number.isFinite(n)?Math.trunc(n):0));
  const complement=n=>10-clamp(n);
  const solve=s=>s.op==='+'?clamp(s.a+s.b):clamp(s.a-s.b);
  const equation=s=>String(s.a)+' '+s.op+' '+String(s.b)+' = '+String(solve(s));
  return{clamp,complement,solve,equation};
});
