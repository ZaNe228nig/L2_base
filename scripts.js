1. function hasTwoCubeSums(n) {
	let count = 0;
  for(let a = 1; a* a *a<n;a++){
    for(let b = a+ 1;a*a*a+b*b*b<=n;b++){
      if(a*a*a+b*b*b==n){
        count++;
        if(count===2){
          return true;
        }
      }
    }
  }
  return false;
}
2. function ipv4Parser(ip, mask){
  let ipp = ip.split('.');
  let maskp = mask.split('.');
  let network = [];
  let host = [];
  for(let i = 0; i<4;i++){
    let ipn=Number(ipp[i]);
    let maskn = Number(maskp[i]);
    network.push(ipn&maskn);
    host.push(ipn&~maskn);
  }
  return[network.join('.'),host.join('.')];
}
3. function whatCentury(year)
{
  let y = Number(year);
  let century = Math.ceil(y/100);
  let ending;
  if(century%100>=11 && century%100<=13){
    ending ='th';
  } else if (century %10===1){
    ending ='st';
  }
  else if (century %10===2){
    ending ='nd';
  }
  else if (century %10===3){
    ending ='rd';
  } else{
    ending ='th';
  }
  return century + ending;
}
4. function findMissing(list) {  
  let d = (list[list.length-1]-list[0])/list.length;
  for(let i = 0;i<list.length-1;i++){
    if(list[i+1]-list[i]!==d){
      return list[i]+d;
    }
  }
}
5. function primeFactors(n){
    let result = '';
    let num = n;
    for (let i = 2; i <= num; i++) {
        let count = 0;
        while (num % i === 0) {
            num = num / i;
            count++;
        }
        if (count > 0) {
            if (count === 1) {
                result += '(' + i + ')';
            } else {
                result += '(' + i + '**' + count + ')';
            }
        }
    }
    return result;
}
6. function toWeirdCase(string){
  let words = string.split(' ');
  for(let w = 0; w<words.length;w++){
    let word = words[w];
    let nword='';
    for(let i = 0; i<word.length;i++){
      if(i%2===0){
        nword+=word[i].toUpperCase();
      } else{
        nword+=word[i].toLowerCase();
      }
    }
    words[w]=nword;
  }
  return words.join(' ');
}
7. function wave(str){
  let result=[];
  for(let i = 0; i<str.length;i++){
    if(str[i]===' '){
      continue;
    }
    let word = str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1);
    result.push(word);
  }
  return result;
}
8. function expandedForm(num) {
  let s = String(num);
  let parts=[];
  for(let i = 0; i<s.length;i++){
    if(s[i]==='0'){
      continue;
    }
    let zer=s.length-i-1;
    let part =s[i];
    for(let j = 0; j<zer;j++){
      part+='0';
    }
    parts.push(part);
  }
  return parts.join(' + ');
}
9. function solution(str){
   let result =[];
  for(let i = 0;i<str.length;i+=2){
    let pair = str.slice(i,i+2);
    if(pair.length===1){
      pair+='_';
    }
    result.push(pair);
  }
  return result;
}
10. function bingo(ticket, win){
let minwin=0;
  for(let i = 0; i<ticket.length;i++){
    let str = ticket[i][0];
    let num = ticket[i][1];
    let found = false;
    for(let j = 0; j<str.length;j++){
      if(str.charCodeAt(j)===num){
        found = true;
        break;
      }
    }
    if(found){
      minwin++;
    }
  }
  if(minwin>=win){
    return 'Winner!';
  } else{
    return 'Loser!';
  }
}
11. function domainName(url){
  url = url.replace('https://','');
  url = url.replace('http://','');
  url = url.replace('www.','');
  let parts = url.split('.');
  return parts[0];
}
12. function longest(arr, n) {
  let withIndex = [];
  for (let i = 0; i < arr.length; i++) {
    withIndex.push([arr[i], i]);
  }
  withIndex.sort(function(a, b) {
    if (b[0].length !== a[0].length) {
      return b[0].length - a[0].length;
    }
    return a[1] - b[1];
  });
  return withIndex[n - 1][0];
}
13. function hexStringToRGB(hexString) {
  let hex = hexString.replace('#','');
  let r = hex.slice(0,2);
  let g = hex.slice(2,4);
  let b = hex.slice(4,6);
  let red = parseInt(r,16);
  let green = parseInt(g,16);
  let blue = parseInt(b,16);
  return {r: red, g: green, b: blue};
}
14. function isCircleSorted( arr ){
  let drops = 0;
  let n = arr.length;
  for(let i = 0;i<n;i++){
    let current = arr[i];
    let next = arr[(i+1)%n];
    if(next<current){
      drops++;
    }
  }
  if(drops<=1){
    return true;
  } else {
    return false;
  }
}
15. function howManyTimes(time1, time2) {
  let st = Date.parse(time1.replace(' ', 'T') + 'Z');
  let en = Date.parse(time2.replace(' ', 'T') + 'Z');
  let res = 0;
  let cur = new Date(st);
  cur.setUTCMinutes(0, 0, 0);
  let t = cur.getTime();
  if (t > st) {
    t -= 3600000;
  }
  while (t <= en) {
    let d = new Date(t);
    let m = d.getUTCMinutes();
    let h = d.getUTCHours();
    let str = 0;
    if (m === 0) {
      let h12 = h % 12;
      str = (h12 === 0 ? 12 : h12);
    } else if (m === 30) {
      str = 1;
    }
    for (let i = 0; i < str; i++) {
      let sTime = t + (i * 1000);
      if (sTime >= st && sTime < en) {
        res++;
      }
    }
    t += 1800000; 
  }
  return res;
}
16. Array.prototype.square = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * this[i]);
  }
  return result;
};
Array.prototype.cube = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * this[i] * this[i]);
  }
  return result;
};
Array.prototype.sum = function() {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    total = total + this[i];
  }
  return total;
};
Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  let total = this.sum(); 
  return total / this.length;
};
Array.prototype.even = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  return result;
};
Array.prototype.odd = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      result.push(this[i]);
    }
  }
  return result;
};
17. 
18. 
