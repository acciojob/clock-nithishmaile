//your JS code here. If required.

const p=document.getElementById("timer")

let timer=setInterval(()=>{
	let date=new Date()
	p.textContent=date;
},1000)