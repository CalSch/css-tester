/**@type {monaco.editor.IStandaloneCodeEditor} */
var editor;
require.config({ paths: { vs: 'monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {
	editor = monaco.editor.create(document.getElementById('editor'), {
		theme: "vs-dark",
		language: 'css',
	});

	if (localStorage.getItem('code')) {
		editor.setValue(localStorage.getItem('code'))
	}

	/**@type {HTMLIFrameElement} */
	let frame=document.getElementById('frame');
	let oldVal="";

	let frameDoc=frame.contentDocument;
	setInterval(()=>{
		if (!editor || !frameDoc) return;
		let val=editor.getValue()
		if (val!==oldVal) {
			oldVal=val;
			frameDoc.querySelector('style').innerHTML=val;
			localStorage.setItem('code',val)
		}
	},1000/10)
});