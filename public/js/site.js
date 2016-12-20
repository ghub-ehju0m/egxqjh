(function(){var d=document,p=d.picLdr=d.picLdr||[];for(var i=0,a=arguments;i<a.length;i++){var x=new Image();x.src=a[i];p.push(x);}})('img/pg_top.jpg', 'img/pg_bottom.jpg');

window.onload = function () {
	document.body.classList.remove('loading');
};
