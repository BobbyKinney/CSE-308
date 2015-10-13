var studentURL = "./Student.html";
var instructorURL = "./Instructor.html";
var adminURL = "./Admin.html";

function auth(ID, pass){
    var netID = ID.value;
    var password = pass.value;
    //alert("Login: " + netID + "\nPassword: " + password);
    testLoadPage(netID);
};

function testLoadPage(netID) {
    switch(netID){
        case 'Student':
            displayStudentPage();
            break;
        case 'Instructor':
            displayInstructorPage();
            break;
        case 'Admin':
            displayAdminPage();
            break;
    }
};

function displayStudentPage(){
    window.location = studentURL;
};

function displayInstructorPage(){
    window.location = instructorURL;
};

function displayAdminPage(){
    window.locatoin = adminURL;
};

