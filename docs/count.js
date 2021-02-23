function count(){
var text=document.getElementById("text").value;
word=0;
char=0;
for(i=0;i<text.length;i++){
    if(text[i]==" "){
        
        word=word+1;
    }
    
}
    for(i=0;i<text.length;i++){
    
            char+=1;
        }
        document.getElementById("out1").value=char;
if(text[text.length-1]==" "){
    return 0;
}
else{
    if(text.length!=0)
    document.getElementById("out").value=word+1;
}


}