//Init GutHub Class
const github = new GitHub;
//Init UI Class
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
    //get the input text from the searchUser input field
    const userText = event.target.value;
    if(userText !== '') {
        //make a http call to GitHub API
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                //Show user profile and repos
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
            console.log(data);
        })
    } else {
        ui.clearProfile();
    } 
})

document.onload(ui.ShowCreator());

