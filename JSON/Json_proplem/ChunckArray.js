
var chunck = function(arr, size){
    const chuncked = []; // مصفوفة فاضية عشان هخزن فيها المصفوفات اللي هتتكون

    for (const elem of arr){ // بعمل لوب علي كل عنصر في المصفوفة
//المصفوفة فاضية or اخر عنصر في المصفوفة مش كامل
        if (chuncked.length ===0 || chuncked[chuncked.length-1]){
            chuncked.push([elem]); // بضيف عنصر جديد في المصفوفة
        }
        else {
            chuncked[chuncked.length-1].push(elem); // بضيف العنصر في اخر مصفوفة في المصفوفة
    }   } 
    return chuncked; // بترجع المصفوفة اللي فيها المصفوفات

};

console.log(chunck[1,2,3,4,5],2); // [[1,2],[3,4],[5]]