function t(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function z(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:t(a)}}function C(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
window.onload=function(){var a=document.getElementById("display");document.body.addEventListener("keydown",function(b){var c=b.key,m=b.keyCode,f=".=+-*\u00f7xX:/^".split(""),g=["+","-","x","\u00f7","("],n=["+","-","x","\u00f7",")"],h=["(",")"],w=["X","*","x"],p=["/",":","\u00f7"];"0"!=a.innerHTML&&"NaN"!=a.innerHTML||isNaN(c)&&"("!=c&&"-"!=c||(a.innerHTML="");if(!f.includes(c)||"-"==c||"+"==c||isNaN(a.innerHTML.charAt(a.innerHTML.length-1))&&!n.includes(a.innerHTML.charAt(a.innerHTML.length-1))||
"NaN"==a.innerHTML)"-"!=c||!n.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&"^"!=a.innerHTML.charAt(a.innerHTML.length-1)&&!h.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&isNaN(a.innerHTML.charAt(a.innerHTML.length-1))?"+"!=c||!n.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&")"!=a.innerHTML.charAt(a.innerHTML.length-1)&&isNaN(a.innerHTML.charAt(a.innerHTML.length-1))||(isNaN(a.innerHTML.charAt(a.innerHTML.length-1))&&")"!=a.innerHTML.charAt(a.innerHTML.length-1)?n.includes(a.innerHTML.charAt(a.innerHTML.length-
1))&&(a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1)+"+"):a.innerHTML+="+"):!isNaN(a.innerHTML.charAt(a.innerHTML.length-1))||h.includes(a.innerHTML.charAt(a.innerHTML.length-1))||"x"==a.innerHTML.charAt(a.innerHTML.length-1)||"^"==a.innerHTML.charAt(a.innerHTML.length-1)||"\u00f7"==a.innerHTML.charAt(a.innerHTML.length-1)?a.innerHTML+="-":"+"==a.innerHTML.charAt(a.innerHTML.length-1)&&(a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1)+"-");else if(w.includes(c))(b.preventDefault(),isNaN(a.innerHTML.charAt(a.innerHTML.length-
1))&&")"!=a.innerHTML.charAt(a.innerHTML.length-1)||"NaN"==a.innerHTML)?n.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&"x-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&"\u00f7-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&"(-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&(a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1)+"x"):a.innerHTML+="x";else if(p.includes(c))(b.preventDefault(),isNaN(a.innerHTML.charAt(a.innerHTML.length-1))&&")"!=
a.innerHTML.charAt(a.innerHTML.length-1)||"NaN"==a.innerHTML)?n.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&"x-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&"\u00f7-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&"(-"!=a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length)&&(a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1)+"\u00f7"):a.innerHTML+="\u00f7";else if("."==c&&!parseFloat(a.innerHTML.split("").reverse().join("")).toString().includes(".")&&
!a.innerHTML.slice(a.innerHTML.length-parseFloat(a.innerHTML.split("").reverse().join("")).toString().length-1,a.innerHTML.length).includes(".")&&"0."!=a.innerHTML&&"NaN"!=a.innerHTML&&"."!=a.innerHTML.charAt(a.innerHTML.length-1)&&!h.includes(a.innerHTML.charAt(a.innerHTML.length-1)))a.innerHTML+=".";else if("."!=c&&"^"!=c&&")"!=c&&!g.includes(a.innerHTML.charAt(a.innerHTML.length-1)))a.innerHTML+=c;else if("^"==c&&!g.includes(a.innerHTML.charAt(a.innerHTML.length-1))){var x=[],u=0,D=["(","+","-",
"x","\u00f7"];a.innerHTML.split("").forEach(function(k){D.includes(k)&&("-"!=k&&"("!=k||"("==k&&"^"!=a.innerHTML.charAt(a.innerHTML.indexOf(k,u-1)-1)&&"-"!=a.innerHTML.charAt(a.innerHTML.indexOf(k,u-1)-1)&&"("!=a.innerHTML.charAt(a.innerHTML.indexOf(k,u-1)-1)||"-"==k&&"^"!=a.innerHTML.charAt(a.innerHTML.indexOf(k,u-1)-1)&&"("!=a.innerHTML.charAt(a.innerHTML.indexOf(k,u-1)-1))&&x.push(a.innerHTML.indexOf(k,u-1));u++});b=Math.max.apply(Math,x instanceof Array?x:C(z(x)));if(")"==a.innerHTML.charAt(a.innerHTML.length-
1)&&"NaN"!=a.innerHTML){g=[];n=[];b=0;w=z(a.innerHTML.split("").reverse().join("").slice(a.innerHTML.split("").reverse().join("").indexOf(")"),a.innerHTML.length));for(var e=w.next();!e.done;e=w.next())if(p=e.value,"("==p?g.push(p):")"==p&&n.push(p),b++,p=["s","g","n"],g.length==n.length&&p.includes(a.innerHTML.split("").reverse().join("").charAt(a.innerHTML.split("").reverse().join("").indexOf("(",b-1)+1))){if("^"!=a.innerHTML.split("").reverse().join("").charAt(a.innerHTML.split("").reverse().join("").indexOf("(",
b-1)+4)&&("-"!=a.innerHTML.split("").reverse().join("").charAt(a.innerHTML.split("").reverse().join("").indexOf("(",b-1)+4)||"^"!=a.innerHTML.split("").reverse().join("").charAt(a.innerHTML.split("").reverse().join("").indexOf("(",b-1)+5))){g=("^)"+a.innerHTML.split("").reverse().join("").slice(a.innerHTML.split("").reverse().join("").indexOf(")"),a.innerHTML.split("").reverse().join("").indexOf("(",b-1)+4)+"(").split("").reverse().join("");a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-(a.innerHTML.split("").reverse().join("").indexOf("(",
b-1)+4))+g;break}}else if(g.length==n.length&&"^"!=a.innerHTML.split("").reverse().join("").charAt(a.innerHTML.split("").reverse().join("").indexOf("(",b-1)+1)){g=("^)"+a.innerHTML.split("").reverse().join("").slice(a.innerHTML.split("").reverse().join("").indexOf(")"),a.innerHTML.split("").reverse().join("").indexOf("(",b-1))+"(").split("").reverse().join("");a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-a.innerHTML.split("").reverse().join("").indexOf("(",b-1))+g;break}}else isNaN(a.innerHTML.charAt(a.innerHTML.length-
1))||"NaN"==a.innerHTML||")"==a.innerHTML.charAt(a.innerHTML.length-1)||(a.innerHTML=a.innerHTML.slice(0,b+1)+"("+a.innerHTML.slice(b+1,a.innerHTML.length)+")^")}"1234567890".split("").includes(c)&&(0==a.innerHTML.charAt(a.innerHTML.length-1)&&isNaN(a.innerHTML.charAt(a.innerHTML.length-2))&&"."!=a.innerHTML.charAt(a.innerHTML.length-2)?a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1)+c:")"!=a.innerHTML.charAt(a.innerHTML.length-1)&&(a.innerHTML+=c));if(h.includes(c))if("("==c)a.innerHTML+=c;
else if(")"==c){h=[];b=[];g=z(a.innerHTML);for(e=g.next();!e.done;e=g.next())e=e.value,"("==e&&h.push(e),")"==e&&b.push(e);!f.includes(a.innerHTML.charAt(a.innerHTML.length-1))&&"("!=a.innerHTML.charAt(a.innerHTML.length-1)&&0!=a.innerHTML&&b.length+1<=h.length&&(a.innerHTML+=c)}8==m&&(f=["log(","sin(","cos(","\u221a("],1==a.innerHTML.length||"NaN"==a.innerHTML||"log("==a.innerHTML||"sin("==a.innerHTML||"cos("==a.innerHTML||"\u221a("==a.innerHTML?a.innerHTML=0:f.includes(a.innerHTML.slice(a.innerHTML.length-
4,a.innerHTML.length))?a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-4):f.includes(a.innerHTML.slice(a.innerHTML.length-2,a.innerHTML.length))?a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-2):a.innerHTML=a.innerHTML.slice(0,a.innerHTML.length-1));try{if(13==m){m=[];f=[];var q=z(a.innerHTML);for(e=q.next();!e.done;e=q.next()){var l=e.value;"("==l?m.push(l):")"==l&&f.push(l)}if(m.length!=f.length)for(i=0;i<m.length-f.length;i++)a.innerHTML+=")";q=[];l=0;m=[];f=[];var A=z(a.innerHTML);for(e=
A.next();!e.done;e=A.next()){var r=e.value;"n"==r||"s"==r&&"o"==a.innerHTML.charAt(a.innerHTML.indexOf(r,l)-1)?q.push(a.innerHTML.indexOf(r,l)):q.push(0);l++;"e"==a.innerHTML.charAt(a.innerHTML.indexOf(r,l)-2)&&(l+=5);h=l-1;var E=Math.max.apply(Math,q instanceof Array?q:C(z(q)));if("n"==r||"s"==r&&"o"==a.innerHTML.charAt(a.innerHTML.indexOf(r,h)-1)){m=[];f=[];for(var B=z(a.innerHTML.slice(E,a.innerHTML.length)),y=B.next();!y.done;y=B.next()){var v=y.value;"("==v?m.push(v):")"==v&&f.push(v);if(")"==
v&&m.length==f.length){a.innerHTML=a.innerHTML.slice(0,a.innerHTML.indexOf(")",h))+") deg"+a.innerHTML.slice(a.innerHTML.indexOf(")",h),a.innerHTML.length);break}h++}}}var d=math.evaluate(a.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/\u00f7/g,"/").replace(/\u221a/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));"Infinity"==d||"-Infinity"==d&&"-1"!=a.innerHTML.indexOf("\u00f70")?a.innerHTML="NaN":!d.toString().includes(".")||d.toString().includes("i")||
d.toString().includes("e")?d.toString().includes(".")&&d.toString().includes("i")&&!d.toString().includes("e")?a.innerHTML=d.toString().slice(0,14)+"i":a.innerHTML="1.2246467991473532e-16"==d||"6.123233995736766e-17"==d||"-1.8369701987210297e-16"==d||"-2.4492935982947064e-16"==d?0:d:a.innerHTML=d.toString().slice(0,14);"000000000000"==d.toString().slice(a.innerHTML.indexOf(".")+2,a.innerHTML.indexOf(".")+14)&&(a.innerHTML=d.toString().slice(0,a.innerHTML.indexOf(".")));if(".5000000000000"==d.toString().slice(d.toString().indexOf("."),
d.toString().indexOf(".")+14)||".4999999999999"==d.toString().slice(d.toString().indexOf("."),d.toString().indexOf(".")+14))a.innerHTML="-"!=a.innerHTML.charAt(0)?.5:-.5}}catch(k){"-"!=a.innerHTML&&(a.innerHTML="NaN")}F.push(c)},!0);window.addEventListener("keydown",function(b){b.preventDefault()},!0)};var F=[];
