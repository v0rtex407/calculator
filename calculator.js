function t(n){var e=0;return function(){return e<n.length?{done:!1,value:n[e++]}:{done:!0}}}function z(n){var e="undefined"!=typeof Symbol&&Symbol.iterator&&n[Symbol.iterator];return e?e.call(n):{next:t(n)}}function C(n){for(var e,i=[];!(e=n.next()).done;)i.push(e.value);return i}window.onload=function(){var n=document.getElementById("display");document.body.addEventListener("keydown",function(e){var r=e.key,M=e.keyCode,L=".=+-*÷xX:/^".split(""),H=["+","-","x","÷","("],T=["+","-","x","÷",")"],t=["(",")"],l=["X","*","x"],s=["/",":","÷"];if("0"!=n.innerHTML&&"NaN"!=n.innerHTML||isNaN(r)&&"("!=r&&"-"!=r||(n.innerHTML=""),!L.includes(r)||"-"==r||"+"==r||isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&!T.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML)"-"!=r||!T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"^"!=n.innerHTML.charAt(n.innerHTML.length-1)&&!t.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&isNaN(n.innerHTML.charAt(n.innerHTML.length-1))?"+"!=r||!T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)&&isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||(isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)?T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"+"):n.innerHTML+="+"):!isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||t.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"x"==n.innerHTML.charAt(n.innerHTML.length-1)||"^"==n.innerHTML.charAt(n.innerHTML.length-1)||"÷"==n.innerHTML.charAt(n.innerHTML.length-1)?n.innerHTML+="-":"+"==n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"-");else if(l.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"x"):n.innerHTML+="x";else if(s.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"÷"):n.innerHTML+="÷";else if("."!=r||n.innerHTML.slice(n.innerHTML.length-(""+parseFloat(n.innerHTML.split("").reverse().join(""))).length-1,n.innerHTML.length).includes(".")||"0."==n.innerHTML||"NaN"==n.innerHTML||"."==n.innerHTML.charAt(n.innerHTML.length-1)||t.includes(n.innerHTML.charAt(n.innerHTML.length-1)))if("."==r||"^"==r||")"==r||H.includes(n.innerHTML.charAt(n.innerHTML.length-1))){if("^"==r&&!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))){var h=[],c=0,a=["(","+","-","x","÷"];if(n.innerHTML.split("").forEach(function(e){a.includes(e)&&("-"!=e&&"("!=e||"("==e&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(e,c-1)-1)&&"-"!=n.innerHTML.charAt(n.innerHTML.indexOf(e,c-1)-1)&&"("!=n.innerHTML.charAt(n.innerHTML.indexOf(e,c-1)-1)||"-"==e&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(e,c-1)-1)&&"("!=n.innerHTML.charAt(n.innerHTML.indexOf(e,c-1)-1))&&h.push(n.innerHTML.indexOf(e,c-1)),c++}),e=Math.max.apply(Math,h instanceof Array?h:C(z(h))),")"==n.innerHTML.charAt(n.innerHTML.length-1)&&"NaN"!=n.innerHTML){H=[],T=[],e=0;for(var g=(l=z(n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.length))).next();!g.done;g=l.next())if(s=g.value,"("==s?H.push(s):")"==s&&T.push(s),e++,s=["s","g","n"],H.length==T.length&&s.includes(n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1))){if("^"!=n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)&&("-"!=n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)||"^"!=n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+5))){H=("^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)+"(").split("").reverse().join(""),n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4))+H;break}}else if(H.length==T.length&&"^"!=n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1)){H=("^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",e-1))+"(").split("").reverse().join(""),n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-n.innerHTML.split("").reverse().join("").indexOf("(",e-1))+H;break}}else isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML||")"==n.innerHTML.charAt(n.innerHTML.length-1)||(n.innerHTML=n.innerHTML.slice(0,e+1)+"("+n.innerHTML.slice(e+1,n.innerHTML.length)+")^")}}else n.innerHTML+=r;else n.innerHTML+=".";if("1234567890".split("").includes(r)&&(0==n.innerHTML.charAt(n.innerHTML.length-1)&&isNaN(n.innerHTML.charAt(n.innerHTML.length-2))&&"."!=n.innerHTML.charAt(n.innerHTML.length-2)?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+r:")"!=n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML+=r)),t.includes(r))if("("==r)n.innerHTML+=r;else if(")"==r){for(t=[],e=[],g=(H=z(n.innerHTML)).next();!g.done;g=H.next())"("==(g=g.value)&&t.push(g),")"==g&&e.push(g);!L.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"("!=n.innerHTML.charAt(n.innerHTML.length-1)&&0!=n.innerHTML&&e.length+1<=t.length&&(n.innerHTML+=r)}8==M&&(L=["log(","sin(","cos(","√("],1==n.innerHTML.length||"NaN"==n.innerHTML||"log("==n.innerHTML||"sin("==n.innerHTML||"cos("==n.innerHTML||"√("==n.innerHTML?n.innerHTML=0:L.includes(n.innerHTML.slice(n.innerHTML.length-4,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-4):L.includes(n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-2):n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1));try{if(13==M){M=[],L=[];var d=z(n.innerHTML);for(g=d.next();!g.done;g=d.next()){var o=g.value;"("==o?M.push(o):")"==o&&L.push(o)}if(M.length!=L.length)for(i=0;i<M.length-L.length;i++)n.innerHTML+=")";d=[],o=0,M=[],L=[];var f=z(n.innerHTML);for(g=f.next();!g.done;g=f.next()){var u=g.value;"n"==u||"s"==u&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(u,o)-1)?d.push(n.innerHTML.indexOf(u,o)):d.push(0),o++,"e"==n.innerHTML.charAt(n.innerHTML.indexOf(u,o)-2)&&(o+=5),t=o-1;var p=Math.max.apply(Math,d instanceof Array?d:C(z(d)));if("n"==u||"s"==u&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(u,t)-1)){M=[],L=[];for(var x=z(n.innerHTML.slice(p,n.innerHTML.length)),A=x.next();!A.done;A=x.next()){var v=A.value;if("("==v?M.push(v):")"==v&&L.push(v),")"==v&&M.length==L.length){n.innerHTML=n.innerHTML.slice(0,n.innerHTML.indexOf(")",t))+") deg"+n.innerHTML.slice(n.innerHTML.indexOf(")",t),n.innerHTML.length);break}t++}}}var N=math.evaluate(n.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/\u00f7/g,"/").replace(/\u221a/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));"Infinity"==N||"-Infinity"==N&&"-1"!=n.innerHTML.indexOf("÷0")?n.innerHTML="NaN":!(""+N).includes(".")||(""+N).includes("i")||(""+N).includes("e")?(""+N).includes(".")&&(""+N).includes("i")&&!(""+N).includes("e")?n.innerHTML=(""+N).slice(0,14)+"i":n.innerHTML="1.2246467991473532e-16"==N||"6.123233995736766e-17"==N||"-1.8369701987210297e-16"==N||"-2.4492935982947064e-16"==N?0:N:n.innerHTML=(""+N).slice(0,14),"000000000000"==(""+N).slice(n.innerHTML.indexOf(".")+2,n.innerHTML.indexOf(".")+14)&&(n.innerHTML=(""+N).slice(0,n.innerHTML.indexOf("."))),".5000000000000"!=(""+N).slice((""+N).indexOf("."),(""+N).indexOf(".")+14)&&".4999999999999"!=(""+N).slice((""+N).indexOf("."),(""+N).indexOf(".")+14)||(n.innerHTML="-"!=n.innerHTML.charAt(0)?.5:-.5)}}catch(e){"-"!=n.innerHTML&&(n.innerHTML="NaN")}F.push(r)},!0),window.addEventListener("keydown",function(n){n.preventDefault()},!0)};var F=[];
