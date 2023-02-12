document.getElementById('btn-submit').addEventListener('click', function(){
    // 1st step 
    const emailField = document.getElementById('user-email');
    const email= emailField.value;
    const passwordField = document.getElementById('user-password');
    const password= passwordField.value;
    // danger :don't use it any more . it's enough for today. 
    if(email === 'sheikhtoukirahmedturaj013@gmail.com' && password === 'bolbona'){
        window.location.href='index2.html'
    }
    else{
        alert('Incorrect information. Please, try again.')
    }
});