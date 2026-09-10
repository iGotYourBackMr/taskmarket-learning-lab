(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GardenModel=api;})(typeof self!=='undefined'?self:this,function(){
  const shapes=['circle','square','triangle'];
  const colours=['red','blue','yellow'];
  function isShapeMatch(target,choice){return shapes.includes(target)&&target===choice;}
  function belongs(item,bin,rule){return rule==='shape'?item.shape===bin:item.colour===bin;}
  function countChoice(target,choice){return Number.isInteger(target)&&target>=1&&target<=3&&target===choice;}
  return {shapes,colours,isShapeMatch,belongs,countChoice};
});
