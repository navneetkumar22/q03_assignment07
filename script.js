
const getUser = () => {
    let dataDiv = document.querySelector('.data');
    let userInput = document.getElementById('user-input').value;

    fetch(`https://api.github.com/users/${userInput}`)
        .then(res => { return res.json() })
        .then(result => {
            dataDiv.innerHTML = `
            <div class="image">
            <img src="${result.avatar_url}"" alt="avatar">
        </div>
        <div class="details">
            <div><span class="bold">Name:</span>&nbsp;${result.name}</div>
            <div><span class="bold">Portfolio:</span>&nbsp;${result.blog}</div>
            <div><span class="bold">Location:</span>&nbsp;${result.location}</div>
            <div><span class="bold">Public Repos:</span>&nbsp;${result.public_repos}</div>
            <div><span class="bold">Followers:</span>&nbsp;${result.followers}</div>
            <div><span class="bold">Bio:</span>&nbsp;${result.bio}</div>
        </div>
        `
        })
        .catch(err => { console.log(err); })
}
