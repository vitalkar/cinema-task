
function closeEditPane(id){
    // document.getElementById(id).style.display = 'none';
    console.log(id);
    
    if(id.charAt(0) !== '#'){
        id = '#'.concat(id);
    }else{
        $(id + '.close').click();
    }
    console.log(id);
}