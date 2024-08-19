function pattern1(n){
    for(let i =0;i<=n;i++){
        var str = "";
        for(let j =0;j<=i;j++){
            str+= "*";
        }
        console.log(str);
    }
}

pattern1(5);