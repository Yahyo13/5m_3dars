let a = Math.round(Math.random()*100)
alert(`Random raqam: ${a}`)
let c = confirm(`raqamni 2ga kopaytirib va 2ga bo'lish?`)



if(c === true){
    alert(`Random orqali chiqqan raqam:  ${a} \nSizning raqamingiz 2ga ko'paydi:  ${a*2} \nSizning raqamingiz 2ga bo'lindi:  ${a/2}`);
    
    
}else{
    alert(`siz otmena bostiz`);
    
}

