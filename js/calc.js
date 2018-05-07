function getTotal() {
		a=document.getElementById('a').value;
		b=document.getElementById('b').value;
		document.getElementById('t').value=a*b;
		  
		}
function getTotal1() {
		a1=document.getElementById('a1').value;
		b1=document.getElementById('b1').value;
		document.getElementById('t1').value=a1*b1;
		  
		}
function getTotal2() {
		a2=document.getElementById('a2').value;
		b2=document.getElementById('b2').value;
		document.getElementById('t2').value=a2*b2;
		  
		}
function TotalHT(){
		t=document.getElementById('t').value;
		t1=document.getElementById('t1').value;
		t2=document.getElementById('t2').value;
		document.getElementById('HT').value=t/1+t1/1+t2/1;
}
