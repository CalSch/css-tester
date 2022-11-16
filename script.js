let frameDoc=document.querySelector('iframe#frame').contentDocument;
let oldVal="";

setInterval(()=>{
	if (!editor) return;
	let val=editor.getValue()
	if (val!==oldVal) {
		oldVal=val;
		frameDoc.querySelector('style').innerHTML=val;
	}
},1000/10)