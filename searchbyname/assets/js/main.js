const form = document.getElementById("searchform")
const inp = document.getElementById("searchinp")
const div = document.querySelector(".myDiv")
const API = "https://api.github.com/users/";

form.addEventListener('submit', (e) => {
    e.preventDefault(), searchUser();

});
searchUser = () => {
    fetch(API + inp.value)
        .then((res) => res.json())
        .then((data) => {
            renderUser(data);
        });

}
renderUser = (data) => {
    div.innerHTML = "";

    const name = document.createElement("h2")
    name.textContent = data.login;

    const img = document.createElement("img")
    img.src = data.avatar_url;

    const followers = document.createElement("p")
    followers.textContent = `followers:${data.followers}`

    const following = document.createElement("p")
    following.textContent = `following:${data.following}`
    
    div.append(name,img,followers,following)
};