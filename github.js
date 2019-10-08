class GitHub{
    constructor(){
        this.client_id="d4ad8806d1614c73e07a";
        this.client_secret="c4a17225e7ba0b318fa1a36d327ef5b3791b9cf2";
        this.repos_count=5;
        this.repos_sort ='created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();
        const repos=await reposResponse.json();

        return{
            profile, repos
        }
    }
}
