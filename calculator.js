function zero(n){"0"!=display.innerHTML&&"NaN"!=display.innerHTML||isNaN(n)&&"("!=n&&"-"!=n&&"√x"!=n&&"log"!=n&&"sin"!=n&&"cos"!=n||(display.innerHTML="")}function one(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+1),res.push(n)}function two(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+2),res.push(n)}function three(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+3),res.push(n)}function four(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+4),res.push(n)}function five(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+5),res.push(n)}function six(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+6),res.push(n)}function seven(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+7),res.push(n)}function eight(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+8),res.push(n)}function nine(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+9),res.push(n)}function nought(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+0),res.push(n)}function result(){try{let n=[],e=[];for(let i of display.innerHTML)"("==i?n.push(i):")"==i&&e.push(i);if(n.length!=e.length)for(i=0;i<n.length-e.length;i++)display.innerHTML+=")";let r=[],l=0,s=[],M=[];for(let n of display.innerHTML){"n"==n||"s"==n&&"o"==display.innerHTML.charAt(display.innerHTML.indexOf(n,l)-1)?r.push(display.innerHTML.indexOf(n,l)):r.push(0),l++,"e"==display.innerHTML.charAt(display.innerHTML.indexOf(n,l)-2)&&(l+=5);let e=l-1,i=Math.max(...r);if("n"==n||"s"==n&&"o"==display.innerHTML.charAt(display.innerHTML.indexOf(n,e)-1)){s=[],M=[];for(let n of display.innerHTML.slice(i,display.innerHTML.length)){if("("==n?s.push(n):")"==n&&M.push(n),")"==n&&s.length==M.length){display.innerHTML=display.innerHTML.slice(0,display.innerHTML.indexOf(")",e))+") deg"+display.innerHTML.slice(display.innerHTML.indexOf(")",e),display.innerHTML.length);break}e++}}}let L=math.evaluate(display.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));if("Infinity"==L||"-Infinity"==L&&"-1"!=display.innerHTML.indexOf("÷0"))display.innerHTML="NaN";else if(!(""+L).includes(".")||(""+L).includes("i")||(""+L).includes("e"))if((""+L).includes(".")&&(""+L).includes("i")&&!(""+L).includes("e"))"."!=(""+L).slice(0,14).charAt(13)?display.innerHTML=(""+L).slice(0,14)+"i":display.innerHTML=(""+L).slice(0,13)+"i";else if("1.2246467991473532e-16"==L||"6.123233995736766e-17"==L||"-1.8369701987210297e-16"==L||"-2.4492935982947064e-16"==L)display.innerHTML=0;else if(14>=(""+L).length||(""+L).includes(".")||(""+L).includes("i")||(""+L).includes("e"))if((""+L).includes(".")&&!(""+L).includes("i")&&(""+L).includes("e")){for(i=(""+L).length;i>14;i--)L=(""+L).slice(0,(""+L).indexOf("e")-1)+(""+L).slice((""+L).indexOf("e"),(""+L).length);display.innerHTML=L}else display.innerHTML=L;else{for(L=(""+L)[0]+"."+(""+L).slice(1,(""+L).length)+"e"+(""+L).slice(1,(""+L).length).length,i=(""+L).length;i>14;i--)L=(""+L).slice(0,(""+L).indexOf("e")-1)+(""+L).slice((""+L).indexOf("e"),(""+L).length);display.innerHTML=L}else"."!=(""+L).slice(0,14).charAt(13)?display.innerHTML=(""+L).slice(0,14):display.innerHTML=(""+L).slice(0,13);"0000000000000"==(""+L).slice(display.innerHTML.indexOf(".")+1,display.innerHTML.indexOf(".")+14)&&(display.innerHTML=(""+L).slice(0,display.innerHTML.indexOf("."))),".5000000000000"!=(""+L).slice((""+L).indexOf("."),(""+L).indexOf(".")+14)&&".4999999999999"!=(""+L).slice((""+L).indexOf("."),(""+L).indexOf(".")+14)||("-"!=display.innerHTML.charAt(0)?display.innerHTML=.5:display.innerHTML=-.5)}catch(n){"-"!=display.innerHTML&&(display.innerHTML="NaN")}res.push("=")}function sqroot(n){zero(n),isNaN(display.innerHTML)||"="!=res[res.length-1]&&"Enter"!=res[res.length-1]?display.innerHTML=display.innerHTML+"√(":display.innerHTML="√("+display.innerHTML+")",res.push(n)}function lg(n){zero(n),isNaN(display.innerHTML)||"="!=res[res.length-1]&&"Enter"!=res[res.length-1]?display.innerHTML=display.innerHTML+"log(":display.innerHTML="log("+display.innerHTML+")",res.push(n)}function dot(n){display.innerHTML.slice(display.innerHTML.length-(""+parseFloat(display.innerHTML.split("").reverse().join(""))).length-1,display.innerHTML.length).includes(".")||(""+parseFloat(display.innerHTML.split("").reverse().join(""))).includes(".")||"0."==display.innerHTML||"NaN"==display.innerHTML||"."==display.innerHTML.charAt(display.innerHTML.length-1)||parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1))||(zero(n),display.innerHTML=display.innerHTML+"."),res.push(n)}function mi(n){!isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1))||"x"==display.innerHTML.charAt(display.innerHTML.length-1)||"^"==display.innerHTML.charAt(display.innerHTML.length-1)||"÷"==display.innerHTML.charAt(display.innerHTML.length-1)?(zero(n),display.innerHTML=display.innerHTML+"-"):"+"==display.innerHTML.charAt(display.innerHTML.length-1)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"-"),res.push(n)}function pl(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"+"):(zero(n),display.innerHTML=display.innerHTML+"+"),res.push(n)}function power(n){let e=[],i=0,r=["(","+","-","x","÷"];display.innerHTML.split("").forEach(function(n){r.includes(n)&&("-"!=n&&"("!=n||"("==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)&&"-"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)||"-"==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1))&&e.push(display.innerHTML.indexOf(n,i-1)),i++});let l=Math.max(...e);if(")"==display.innerHTML.charAt(display.innerHTML.length-1)&&"NaN"!=display.innerHTML){let n=[],e=[],i=0;for(let r of display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.length)){"("==r?n.push(r):")"==r&&e.push(r),i++;let l=["s","g","n"];if(n.length==e.length&&l.includes(display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+1))){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)||"-"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)&&"^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+5))continue;{let n=("^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)+"(").split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4))+n;break}}if(n.length==e.length){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+1))continue;{let n=("^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",i-1))+"(").split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-display.innerHTML.split("").reverse().join("").indexOf("(",i-1))+n;break}}}}else isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||"NaN"==display.innerHTML||")"==display.innerHTML.charAt(display.innerHTML.length-1)||(display.innerHTML=display.innerHTML.slice(0,l+1)+"("+display.innerHTML.slice(l+1,display.innerHTML.length)+")^");zero(n),res.push(n)}function rec(n){let e=[],i=0;["+","-","x","÷","("].forEach(function(n){("-"!=n&&"("!=n||"("==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)||"-"==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,i-1)-1))&&e.push(display.innerHTML.lastIndexOf(n)),i++});let r=Math.max(...e);if(")"==display.innerHTML.charAt(display.innerHTML.length-1)&&"NaN"!=display.innerHTML){let n=[],e=[],i=0;for(let r of display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.length)){"("==r?n.push(r):")"==r&&e.push(r),i++;let l=["s","g","n"];if(n.length==e.length&&l.includes(display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+1))){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)||"-"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)&&"^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+5))continue;{let n=("1-^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4)+"(").split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+4))+n;break}}if(n.length==e.length){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",i-1)+1))continue;{let n=("1-^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",i-1))+"(").split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-display.innerHTML.split("").reverse().join("").indexOf("(",i-1))+n;break}}}}else isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||"NaN"==display.innerHTML||")"==display.innerHTML.charAt(display.innerHTML.length-1)||(zero(n),display.innerHTML=display.innerHTML.slice(0,r+1)+"("+display.innerHTML.slice(r+1,display.innerHTML.length)+")^-1");res.push(n)}function mu(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"x"):(zero(n),display.innerHTML=display.innerHTML+"x"),res.push(n)}function di(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"÷"):(zero(n),display.innerHTML=display.innerHTML+"÷"),res.push(n)}function del(){let n=["log(","sin(","cos(","√("];1==display.innerHTML.length||"NaN"==display.innerHTML||"log("==display.innerHTML||"sin("==display.innerHTML||"cos("==display.innerHTML||"√("==display.innerHTML?display.innerHTML=0:n.includes(display.innerHTML.slice(display.innerHTML.length-4,display.innerHTML.length))?display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-4):n.includes(display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length))?display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-2):display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1),res.push("DEL")}function reset(){display.innerHTML="0",res.push("AC")}function pa2(n){let e=[],i=[];for(let n of display.innerHTML)"("==n&&e.push(n),")"==n&&i.push(n);(!isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1)))&&"("!=display.innerHTML.charAt(display.innerHTML.length-1)&&"NaN"!=display.innerHTML&&"0"!=display.innerHTML&&i.length+1<=e.length&&(zero(n),display.innerHTML=display.innerHTML+")"),res.push(n)}function pa1(n){zero(n),display.innerHTML=display.innerHTML+"(",res.push(n)}function sine(n){zero(n),isNaN(display.innerHTML)||"="!=res[res.length-1]&&"Enter"!=res[res.length-1]?display.innerHTML=display.innerHTML+"sin(":display.innerHTML="sin("+display.innerHTML+")",res.push(n)}function cosine(n){zero(n),isNaN(display.innerHTML)||"="!=res[res.length-1]&&"Enter"!=res[res.length-1]?display.innerHTML=display.innerHTML+"cos(":display.innerHTML="cos("+display.innerHTML+")",res.push(n)}window.onload=function(){var n=document.getElementById("display");const e=e=>{let r=e.key,l=e.keyCode,s=["1","2","3","4","5","6","7","8","9","0"],M=[".","=","+","-","*","÷","x","X",":","/","^"],L=["+","-","x","÷","("],H=["+","-","x","÷",")"],T=["(",")"],a=["X","*","x"],d=["/",":","÷"];if("0"!=n.innerHTML&&"NaN"!=n.innerHTML||isNaN(r)&&"("!=r&&"-"!=r||(n.innerHTML=""),!M.includes(r)||"-"==r||"+"==r||isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML)"-"!=r||!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"^"!=n.innerHTML.charAt(n.innerHTML.length-1)&&!T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&isNaN(n.innerHTML.charAt(n.innerHTML.length-1))?"+"!=r||!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)&&isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||(isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)?H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"+"):n.innerHTML=n.innerHTML+"+"):!isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||T.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"x"==n.innerHTML.charAt(n.innerHTML.length-1)||"^"==n.innerHTML.charAt(n.innerHTML.length-1)||"÷"==n.innerHTML.charAt(n.innerHTML.length-1)?n.innerHTML=n.innerHTML+"-":"+"==n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"-");else if(a.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"x"):n.innerHTML=n.innerHTML+"x";else if(d.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"÷"):n.innerHTML=n.innerHTML+"÷";else if("."!=r||(""+parseFloat(n.innerHTML.split("").reverse().join(""))).includes(".")||n.innerHTML.slice(n.innerHTML.length-(""+parseFloat(n.innerHTML.split("").reverse().join(""))).length-1,n.innerHTML.length).includes(".")||"0."==n.innerHTML||"NaN"==n.innerHTML||"."==n.innerHTML.charAt(n.innerHTML.length-1)||T.includes(n.innerHTML.charAt(n.innerHTML.length-1)))if("."==r||"^"==r||")"==r||L.includes(n.innerHTML.charAt(n.innerHTML.length-1))){if("^"==r&&!L.includes(n.innerHTML.charAt(n.innerHTML.length-1))){let e=[],i=0,r=["(","+","-","x","÷"];n.innerHTML.split("").forEach(function(l){r.includes(l)&&("-"!=l&&"("!=l||"("==l&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(l,i-1)-1)&&"-"!=n.innerHTML.charAt(n.innerHTML.indexOf(l,i-1)-1)&&"("!=n.innerHTML.charAt(n.innerHTML.indexOf(l,i-1)-1)||"-"==l&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(l,i-1)-1)&&"("!=n.innerHTML.charAt(n.innerHTML.indexOf(l,i-1)-1))&&e.push(n.innerHTML.indexOf(l,i-1)),i++});let l=Math.max(...e);if(")"==n.innerHTML.charAt(n.innerHTML.length-1)&&"NaN"!=n.innerHTML){let e=[],i=[],r=0;for(let l of n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.length)){"("==l?e.push(l):")"==l&&i.push(l),r++;let s=["s","g","n"];if(e.length==i.length&&s.includes(n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+1))){if("^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)||"-"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)&&"^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+5))continue;{let e=("^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)+"(").split("").reverse().join("");n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4))+e;break}}if(e.length==i.length){if("^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+1))continue;{let e=("^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",r-1))+"(").split("").reverse().join("");n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-n.innerHTML.split("").reverse().join("").indexOf("(",r-1))+e;break}}}}else isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML||")"==n.innerHTML.charAt(n.innerHTML.length-1)||(n.innerHTML=n.innerHTML.slice(0,l+1)+"("+n.innerHTML.slice(l+1,n.innerHTML.length)+")^")}}else n.innerHTML+=r;else n.innerHTML+=".";if(s.includes(r)&&(0==n.innerHTML.charAt(n.innerHTML.length-1)&&isNaN(n.innerHTML.charAt(n.innerHTML.length-2))&&"."!=n.innerHTML.charAt(n.innerHTML.length-2)?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+r:")"!=n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML+=r)),T.includes(r))if("("==r)n.innerHTML=n.innerHTML+r;else if(")"==r){let e=[],i=[];for(let r of n.innerHTML)"("==r&&e.push(r),")"==r&&i.push(r);!M.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"("!=n.innerHTML.charAt(n.innerHTML.length-1)&&0!=n.innerHTML&&i.length+1<=e.length&&(n.innerHTML=n.innerHTML+r)}if(8==l){let e=["log(","sin(","cos(","√("];1==n.innerHTML.length||"NaN"==n.innerHTML||"log("==n.innerHTML||"sin("==n.innerHTML||"cos("==n.innerHTML||"√("==n.innerHTML?n.innerHTML=0:e.includes(n.innerHTML.slice(n.innerHTML.length-4,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-4):e.includes(n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-2):n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)}try{if(13==l){let e=[],r=[];for(let i of n.innerHTML)"("==i?e.push(i):")"==i&&r.push(i);if(e.length!=r.length)for(i=0;i<e.length-r.length;i++)n.innerHTML+=")";let l=[],s=0,M=[],L=[];for(let e of n.innerHTML){"n"==e||"s"==e&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(e,s)-1)?l.push(n.innerHTML.indexOf(e,s)):l.push(0),s++,"e"==n.innerHTML.charAt(n.innerHTML.indexOf(e,s)-2)&&(s+=5);let i=s-1,r=Math.max(...l);if("n"==e||"s"==e&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(e,i)-1)){M=[],L=[];for(let e of n.innerHTML.slice(r,n.innerHTML.length)){if("("==e?M.push(e):")"==e&&L.push(e),")"==e&&M.length==L.length){n.innerHTML=n.innerHTML.slice(0,n.innerHTML.indexOf(")",i))+") deg"+n.innerHTML.slice(n.innerHTML.indexOf(")",i),n.innerHTML.length);break}i++}}}let H=math.evaluate(n.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));if("Infinity"==H||"-Infinity"==H&&"-1"!=n.innerHTML.indexOf("÷0"))n.innerHTML="NaN";else if(!(""+H).includes(".")||(""+H).includes("i")||(""+H).includes("e"))if((""+H).includes(".")&&(""+H).includes("i")&&!(""+H).includes("e"))"."!=(""+H).slice(0,14).charAt(13)?n.innerHTML=(""+H).slice(0,14)+"i":n.innerHTML=(""+H).slice(0,13)+"i";else if("1.2246467991473532e-16"==H||"6.123233995736766e-17"==H||"-1.8369701987210297e-16"==H||"-2.4492935982947064e-16"==H)n.innerHTML=0;else if(14>=(""+H).length||(""+H).includes(".")||(""+H).includes("i")||(""+H).includes("e"))if((""+H).includes(".")&&!(""+H).includes("i")&&(""+H).includes("e")){for(i=(""+H).length;i>14;i--)H=(""+H).slice(0,(""+H).indexOf("e")-1)+(""+H).slice((""+H).indexOf("e"),(""+H).length);n.innerHTML=H}else n.innerHTML=H;else{for(H=(""+H)[0]+"."+(""+H).slice(1,(""+H).length)+"e"+(""+H).slice(1,(""+H).length).length,i=(""+H).length;i>14;i--)H=(""+H).slice(0,(""+H).indexOf("e")-1)+(""+H).slice((""+H).indexOf("e"),(""+H).length);n.innerHTML=H}else"."!=(""+H).slice(0,14).charAt(13)?n.innerHTML=(""+H).slice(0,14):n.innerHTML=(""+H).slice(0,13);"0000000000000"==(""+H).slice(n.innerHTML.indexOf(".")+1,n.innerHTML.indexOf(".")+14)&&(n.innerHTML=(""+H).slice(0,n.innerHTML.indexOf("."))),".5000000000000"!=(""+H).slice((""+H).indexOf("."),(""+H).indexOf(".")+14)&&".4999999999999"!=(""+H).slice((""+H).indexOf("."),(""+H).indexOf(".")+14)||("-"!=n.innerHTML.charAt(0)?n.innerHTML=.5:n.innerHTML=-.5)}}catch(e){"-"!=n.innerHTML&&(n.innerHTML="NaN")}res.push(r)},r=n=>{n.preventDefault()};document.body.addEventListener("keydown",e,!0),window.addEventListener("keydown",r,!0)};let parentheses=["(",")"],ope=["+","-","÷","x"],res=[];
