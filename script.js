document.getElementById('ageForm').addEventListener('submit',function(event){
event.preventDefault();
let age=document.getElementById('age').value;
if(age===''){
    document.getElementById('result').textContent='Please enter your age!';
    document.getElementById('result').style='red';
}else if(age>=18){
    document.getElementById('result').textContent='You are eligible for vote!';
    document.getElementById('result').style='red';
}else{
    document.getElementById('result').textContent = 'Sorry, you are not eligible to vote.';
    document.getElementById('result').style.color = 'red';
}
});