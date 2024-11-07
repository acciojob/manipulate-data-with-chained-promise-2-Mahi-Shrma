//your JS code here. If required.
const output= document.getElementById('output');

function f1(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	});
}
f1().then((numbers)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const result= numbers.filter((num)=>num%2==0);
		output.innerText=result.join(', ');
		resolve(result);
	},1000);
	});
})
.then((numbers)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const resu= numbers.map((num)=>num*2);
		output.innerText=resu.join(', ');
			resolve(resu);
	},2000);
	});
})
.catch((error)=>console.error(error));

