function highest(arr){
let curGroups = [arr];

let remaining = arr.length;
let high =-1;
let max = -1;
for(let i=0;i<arr.length;i++){
if(arr[i].length > max)
max = arr[i].length
}
for(let i=0;i<max;i++){
if(!curGroups.length)
	break;
let groups = [...curGroups];
curGroups =[];
for(let j=0;j<groups.length;j++){
if(groups[j].length>1){
let first = groups[j][0];
if(first.length>=i){
let newgroup = [first];
for(let k=1;k<groups[j].length;k++){
if(first[i] && groups[j][k][i] && groups[j][k][i] === first[i]){
high=i;
newgroup.push(groups[j][k]);
groups[j].splice(k,1);
k--;
}
}
if(newgroup.length>1)
curGroups.push(newgroup);
groups[j].splice(0,1);
j--;
} else{
groups[j].splice(0,1);
j--;
}
} else{
groups.splice(j,1);
j--;
}
}
}
return high+1;
}
