/**@type {HTMLIFrameElement} */
let frame=document.getElementById('frame');
let oldVal="";

frame.onload=function(){
	let frameDoc=frame.contentDocument;
	setInterval(()=>{
		if (!editor || !frameDoc) return;
		let val=editor.getValue()
		if (val!==oldVal) {
			oldVal=val;
			frameDoc.querySelector('style').innerHTML=val;
		}
	},1000/10)
}