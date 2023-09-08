function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text = '';
    // alert('Test');
    

    if(name.length <2){
        text = 'Please enter a valid name';
        // alert('Please enter a valid name');
        error_message.innerHTML = text;
        error_message.style.padding = "10px";
        return false;
        
    }
    return true;
}
