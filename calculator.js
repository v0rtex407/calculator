function zero(n){"0"!=display.innerHTML&&"NaN"!=display.innerHTML||isNaN(n)&&"("!=n&&"-"!=n&&"√x"!=n&&"log"!=n&&"sin"!=n&&"cos"!=n||(display.innerHTML=""),res.push(n)}function one(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+1)}function two(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+2)}function three(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+3)}function four(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+4)}function five(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+5)}function six(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+6)}function seven(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+7)}function eight(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+8)}function nine(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+9)}function nought(n){")"!=display.innerHTML.charAt(display.innerHTML.length-1)&&(zero(n),display.innerHTML=display.innerHTML+0)}function result(){try{let n=[],e=[];for(let i of display.innerHTML)"("==i?n.push(i):")"==i&&e.push(i);if(n.length!=e.length)for(i=0;i<n.length-e.length;i++)display.innerHTML+=")";let r=[],l=0,s=[],M=[];for(let n of display.innerHTML){"n"==n||"s"==n&&"o"==display.innerHTML.charAt(display.innerHTML.indexOf(n,l)-1)?r.push(display.innerHTML.indexOf(n,l)):r.push(0),l++,"e"==display.innerHTML.charAt(display.innerHTML.indexOf(n,l)-2)&&(l+=5);let i=l-1,e=Math.max(...r);if("n"==n||"s"==n&&"o"==display.innerHTML.charAt(display.innerHTML.indexOf(n,i)-1)){s=[],M=[];for(let n of display.innerHTML.slice(e,display.innerHTML.length)){if("("==n?s.push(n):")"==n&&M.push(n),")"==n&&s.length==M.length){display.innerHTML=display.innerHTML.slice(0,display.innerHTML.indexOf(")",i))+") deg"+display.innerHTML.slice(display.innerHTML.indexOf(")",i),display.innerHTML.length);break}i++}}}let L=math.evaluate(display.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));"Infinity"==L||"-Infinity"==L&&"-1"!=display.innerHTML.indexOf("÷0")?display.innerHTML="NaN":!(""+L).includes(".")||(""+L).includes("i")||(""+L).includes("e")?(""+L).includes(".")&&(""+L).includes("i")&&!(""+L).includes("e")?display.innerHTML=(""+L).slice(0,14)+"i":display.innerHTML="1.2246467991473532e-16"==L||"6.123233995736766e-17"==L||"-1.8369701987210297e-16"==L||"-2.4492935982947064e-16"==L?0:L:display.innerHTML=(""+L).slice(0,14),"0000000000000"==(""+L).slice(display.innerHTML.indexOf(".")+1,display.innerHTML.indexOf(".")+14)&&(display.innerHTML=(""+L).slice(0,display.innerHTML.indexOf("."))),".5000000000000"!=(""+L).slice((""+L).indexOf("."),(""+L).indexOf(".")+14)&&".4999999999999"!=(""+L).slice((""+L).indexOf("."),(""+L).indexOf(".")+14)||("-"!=display.innerHTML.charAt(0)?display.innerHTML=.5:display.innerHTML=-.5)}catch(n){"-"!=display.innerHTML&&(display.innerHTML="NaN")}res.push("=")}function sqroot(n){zero(n),isNaN(display.innerHTML)?display.innerHTML=display.innerHTML+"√(":display.innerHTML="√("+display.innerHTML}function lg(n){zero(n),isNaN(display.innerHTML)?display.innerHTML=display.innerHTML+"log(":display.innerHTML="log("+display.innerHTML}function dot(n){(""+parseFloat(display.innerHTML.split("").reverse().join(""))).includes(".")||"0."==display.innerHTML||"NaN"==display.innerHTML||parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1))||(zero(n),display.innerHTML=display.innerHTML+".")}function mi(n){!isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1))||"x"==display.innerHTML.charAt(display.innerHTML.length-1)||"^"==display.innerHTML.charAt(display.innerHTML.length-1)||"÷"==display.innerHTML.charAt(display.innerHTML.length-1)?(zero(n),display.innerHTML=display.innerHTML+"-"):"+"==display.innerHTML.charAt(display.innerHTML.length-1)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"-")}function pl(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"+"):(zero(n),display.innerHTML=display.innerHTML+"+")}function power(n){let i=[],e=[];["+","-","x","÷","("].forEach(function(n){("-"!=n&&"("!=n||"("==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1)&&"-"==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1))&&i.push(display.innerHTML.lastIndexOf(n)),e++});let r=Math.max(...i);if(")"==display.innerHTML.charAt(display.innerHTML.length-1)&&"NaN"!=display.innerHTML){let n=[],i=[],e=0;for(let r of display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.length)){"("==r?n.push(r):")"==r&&i.push(r),e++;let l=["s","g","n"];if(n.length==i.length&&l.includes(display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1))){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)||"-"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)&&"^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+5))continue;{let n="^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)+"(",i=n.split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4))+i;break}}if(n.length==i.length){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1))continue;{let n="^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",e-1))+"(",i=n.split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-display.innerHTML.split("").reverse().join("").indexOf("(",e-1))+i;break}}}}else isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||"NaN"==display.innerHTML||")"==display.innerHTML.charAt(display.innerHTML.length-1)||(zero(n),display.innerHTML=display.innerHTML.slice(0,r+1)+"("+display.innerHTML.slice(r+1,display.innerHTML.length)+")^")}function rec(n){let i=[],e=[];["+","-","x","÷","("].forEach(function(n){("-"!=n&&"("!=n||"("==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1)&&"-"==n&&"^"!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1)&&"("!=display.innerHTML.charAt(display.innerHTML.indexOf(n,e-1)-1))&&i.push(display.innerHTML.lastIndexOf(n)),e++});let r=Math.max(...i);if(")"==display.innerHTML.charAt(display.innerHTML.length-1)&&"NaN"!=display.innerHTML){let n=[],i=[],e=0;for(let r of display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.length)){"("==r?n.push(r):")"==r&&i.push(r),e++;let l=["s","g","n"];if(n.length==i.length&&l.includes(display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1))){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)||"-"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)&&"^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+5))continue;{let n="1-^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4)+"(",i=n.split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+4))+i;break}}if(n.length==i.length){if("^"==display.innerHTML.split("").reverse().join("").charAt(display.innerHTML.split("").reverse().join("").indexOf("(",e-1)+1))continue;{let n="1-^)"+display.innerHTML.split("").reverse().join("").slice(display.innerHTML.split("").reverse().join("").indexOf(")"),display.innerHTML.split("").reverse().join("").indexOf("(",e-1))+"(",i=n.split("").reverse().join("");display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-display.innerHTML.split("").reverse().join("").indexOf("(",e-1))+i;break}}}}else isNaN(display.innerHTML.charAt(display.innerHTML.length-1))||"NaN"==display.innerHTML||")"==display.innerHTML.charAt(display.innerHTML.length-1)||(zero(n),display.innerHTML=display.innerHTML.slice(0,r+1)+"("+display.innerHTML.slice(r+1,display.innerHTML.length)+")^-1")}function mu(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"x"):(zero(n),display.innerHTML=display.innerHTML+"x")}function di(n){isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&")"!=display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML?ope.includes(display.innerHTML.charAt(display.innerHTML.length-1))&&"x-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"÷-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&"(-"!=display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length)&&(display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)+"÷"):(zero(n),display.innerHTML=display.innerHTML+"÷")}function del(){let n=["log(","sin(","cos(","√("];1==display.innerHTML.length||"NaN"==display.innerHTML||"log("==display.innerHTML||"sin("==display.innerHTML||"cos("==display.innerHTML||"√("==display.innerHTML?display.innerHTML=0:n.includes(display.innerHTML.slice(display.innerHTML.length-4,display.innerHTML.length))?display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-4):n.includes(display.innerHTML.slice(display.innerHTML.length-2,display.innerHTML.length))?display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-2):display.innerHTML=display.innerHTML.slice(0,display.innerHTML.length-1)}function reset(){display.innerHTML="0"}function pa2(n){let i=[],e=[];for(let n of display.innerHTML)"("==n&&i.push(n),")"==n&&e.push(n);isNaN(display.innerHTML.charAt(display.innerHTML.length-1))&&!parentheses.includes(display.innerHTML.charAt(display.innerHTML.length-1))||"("==display.innerHTML.charAt(display.innerHTML.length-1)||"NaN"==display.innerHTML||"0"==display.innerHTML||e.length+1>i.length||(zero(n),display.innerHTML=display.innerHTML+")")}function pa1(n){zero(n),display.innerHTML=display.innerHTML+"("}function sine(n){zero(n),isNaN(display.innerHTML)?display.innerHTML=display.innerHTML+"sin(":display.innerHTML="sin("+display.innerHTML}function cosine(n){zero(n),isNaN(display.innerHTML)?display.innerHTML=display.innerHTML+"cos(":display.innerHTML="cos("+display.innerHTML}window.onload=function(){var n=document.getElementById("display");const e=e=>{let r=e.key;let l=e.keyCode;let s=["1","2","3","4","5","6","7","8","9","0"];let M=[".","=","+","-","*","÷","x","X",":","/","^"];let L=["+","-","x","÷","("];let H=["+","-","x","÷"];let T=["(",")"];let a=["X","*","x"];let d=["/",":","÷"];"0"!=n.innerHTML&&"NaN"!=n.innerHTML||isNaN(r)&&"("!=r&&"-"!=r||(n.innerHTML="");if(!M.includes(r)||"-"==r||isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML)"-"!=r||!H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"^"!=n.innerHTML.charAt(n.innerHTML.length-1)&&!T.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||(!isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||T.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"x"==n.innerHTML.charAt(n.innerHTML.length-1)||"^"==n.innerHTML.charAt(n.innerHTML.length-1)||"÷"==n.innerHTML.charAt(n.innerHTML.length-1)?n.innerHTML=n.innerHTML+"-":"+"==n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"-"));else if(a.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"x"):n.innerHTML=n.innerHTML+"x";else if(d.includes(r))e.preventDefault(),isNaN(n.innerHTML.charAt(n.innerHTML.length-1))&&")"!=n.innerHTML.charAt(n.innerHTML.length-1)||"NaN"==n.innerHTML?H.includes(n.innerHTML.charAt(n.innerHTML.length-1))&&"x-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"÷-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&"(-"!=n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length)&&(n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+"÷"):n.innerHTML=n.innerHTML+"÷";else if("."!=r||(""+parseFloat(n.innerHTML.split("").reverse().join(""))).includes(".")||")"==n.innerHTML.charAt(n.innerHTML.length-1)||L.includes(n.innerHTML.charAt(n.innerHTML.length-1)))if("."==r||"^"==r||")"==r||L.includes(n.innerHTML.charAt(n.innerHTML.length-1))){if("^"==r&&!L.includes(n.innerHTML.charAt(n.innerHTML.length-1))){let i=[],e=[],r=["+","-","x","÷","("];r.forEach(function(r){("-"!=r&&"("!=r||"("==r&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(r,e-1)-1)&&"-"==r&&"^"!=n.innerHTML.charAt(n.innerHTML.indexOf(r,e-1)-1)&&"("!=n.innerHTML.charAt(n.innerHTML.indexOf(r,e-1)-1))&&i.push(n.innerHTML.lastIndexOf(r)),e++});let l=Math.max(...i);if(")"==n.innerHTML.charAt(n.innerHTML.length-1)&&"NaN"!=n.innerHTML){let i=[],e=[],r=0;for(let l of n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.length)){"("==l?i.push(l):")"==l&&e.push(l),r++;let s=["s","g","n"];if(i.length==e.length&&s.includes(n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+1))){if("^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)||"-"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)&&"^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+5))continue;{let i="^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4)+"(",e=i.split("").reverse().join("");n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+4))+e;break}}if(i.length==e.length){if("^"==n.innerHTML.split("").reverse().join("").charAt(n.innerHTML.split("").reverse().join("").indexOf("(",r-1)+1))continue;{let i="^)"+n.innerHTML.split("").reverse().join("").slice(n.innerHTML.split("").reverse().join("").indexOf(")"),n.innerHTML.split("").reverse().join("").indexOf("(",r-1))+"(",e=i.split("").reverse().join("");n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-n.innerHTML.split("").reverse().join("").indexOf("(",r-1))+e;break}}}}else isNaN(n.innerHTML.charAt(n.innerHTML.length-1))||"NaN"==n.innerHTML||")"==n.innerHTML.charAt(n.innerHTML.length-1)||(n.innerHTML=n.innerHTML.slice(0,l+1)+"("+n.innerHTML.slice(l+1,n.innerHTML.length)+")^")}}else n.innerHTML+=r;else n.innerHTML+=".";s.includes(r)&&(0==n.innerHTML.charAt(n.innerHTML.length-1)&&isNaN(n.innerHTML.charAt(n.innerHTML.length-2))&&"."!=n.innerHTML.charAt(n.innerHTML.length-2)?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)+r:")"!=n.innerHTML.charAt(n.innerHTML.length-1)&&(n.innerHTML+=r));if(T.includes(r))if("("==r)n.innerHTML=n.innerHTML+r;else if(")"==r){let i=[],e=[];for(let r of n.innerHTML)"("==r&&i.push(r),")"==r&&e.push(r);M.includes(n.innerHTML.charAt(n.innerHTML.length-1))||"("==n.innerHTML.charAt(n.innerHTML.length-1)||0==n.innerHTML||e.length+1>i.length||(n.innerHTML=n.innerHTML+r)}if(8==l){let i=["log(","sin(","cos(","√("];1==n.innerHTML.length||"NaN"==n.innerHTML||"log("==n.innerHTML||"sin("==n.innerHTML||"cos("==n.innerHTML||"√("==n.innerHTML?n.innerHTML=0:i.includes(n.innerHTML.slice(n.innerHTML.length-4,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-4):i.includes(n.innerHTML.slice(n.innerHTML.length-2,n.innerHTML.length))?n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-2):n.innerHTML=n.innerHTML.slice(0,n.innerHTML.length-1)}try{if(13==l){let e=[],r=[];for(let i of n.innerHTML)"("==i?e.push(i):")"==i&&r.push(i);if(e.length!=r.length)for(i=0;i<e.length-r.length;i++)n.innerHTML+=")";let l=[],s=0,M=[],L=[];for(let i of n.innerHTML){"n"==i||"s"==i&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(i,s)-1)?l.push(n.innerHTML.indexOf(i,s)):l.push(0),s++,"e"==n.innerHTML.charAt(n.innerHTML.indexOf(i,s)-2)&&(s+=5);let e=s-1,r=Math.max(...l);if("n"==i||"s"==i&&"o"==n.innerHTML.charAt(n.innerHTML.indexOf(i,e)-1)){M=[],L=[];for(let i of n.innerHTML.slice(r,n.innerHTML.length)){if("("==i?M.push(i):")"==i&&L.push(i),")"==i&&M.length==L.length){n.innerHTML=n.innerHTML.slice(0,n.innerHTML.indexOf(")",e))+") deg"+n.innerHTML.slice(n.innerHTML.indexOf(")",e),n.innerHTML.length);break}e++}}}let H=math.evaluate(n.innerHTML.replace(/\[|{/g,"(").replace(/}|]/g,")").replace(/x/g,"*").replace(/÷/g,"/").replace(/√/g,"sqrt").replace(/log/g,"log10").replace(/sin\(/g,"sin((").replace(/cos\(/g,"cos(("));"Infinity"==H||"-Infinity"==H&&"-1"!=n.innerHTML.indexOf("÷0")?n.innerHTML="NaN":!(""+H).includes(".")||(""+H).includes("i")||(""+H).includes("e")?(""+H).includes(".")&&(""+H).includes("i")&&!(""+H).includes("e")?n.innerHTML=(""+H).slice(0,14)+"i":n.innerHTML="1.2246467991473532e-16"==H||"6.123233995736766e-17"==H||"-1.8369701987210297e-16"==H||"-2.4492935982947064e-16"==H?0:H:n.innerHTML=(""+H).slice(0,14),"000000000000"==(""+H).slice(n.innerHTML.indexOf(".")+2,n.innerHTML.indexOf(".")+14)&&(n.innerHTML=(""+H).slice(0,n.innerHTML.indexOf("."))),".5000000000000"!=(""+H).slice((""+H).indexOf("."),(""+H).indexOf(".")+14)&&".4999999999999"!=(""+H).slice((""+H).indexOf("."),(""+H).indexOf(".")+14)||("-"!=n.innerHTML.charAt(0)?n.innerHTML=.5:n.innerHTML=-.5)}}catch(e){"-"!=n.innerHTML&&(n.innerHTML="NaN")}res.push(r)},r=n=>{n.preventDefault()};document.body.addEventListener("keydown",e,!0),window.addEventListener("keydown",r,!0)};let parentheses=["(",")"],ope=["+","-","÷","x"],res=[];
