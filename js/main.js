let user = {
  "login": "SeanMcP",
  "id": 6360367,
  "avatar_url": "https://avatars1.githubusercontent.com/u/6360367?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SeanMcP",
  "html_url": "https://github.com/SeanMcP",
  "followers_url": "https://api.github.com/users/SeanMcP/followers",
  "following_url": "https://api.github.com/users/SeanMcP/following{/other_user}",
  "gists_url": "https://api.github.com/users/SeanMcP/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SeanMcP/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SeanMcP/subscriptions",
  "organizations_url": "https://api.github.com/users/SeanMcP/orgs",
  "repos_url": "https://api.github.com/users/SeanMcP/repos",
  "events_url": "https://api.github.com/users/SeanMcP/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SeanMcP/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sean McPherson",
  "company": "Hire Me",
  "blog": "http://seanmcp.com",
  "location": "Greater Atlanta Area",
  "email": null,
  "hireable": null,
  "bio": "Aspiring web developer | Former educator",
  "public_repos": 29,
  "public_gists": 0,
  "followers": 3,
  "following": 11,
  "created_at": "2014-01-09T15:08:11Z",
  "updated_at": "2017-08-07T18:21:10Z"
}

function pushContent () {

  let headName = document.getElementById('headerName');
  let secInfo = document.getElementById('info');
  let secPhoto = document.getElementById('photo');
  let tagLine = document.getElementById('tagLine');
  let siteTitle = document.querySelector('title');

  siteTitle.textContent = `${user.login} | ${user.bio}`;

  let infoTemplate = "";
  infoTemplate += `<p><span class='category'>Name:</span> ${user.name}</p>`;
  infoTemplate += `<p><span class='category'>GitHub URL:</span> <a href='${user.html_url}'>${user.login}</a></p>`;
  infoTemplate += `<p><span class='category'>Email:</span> ${user.email}</p>`;
  infoTemplate += `<p><span class='category'>Company:</span> ${user.company}</p>`;
  infoTemplate += `<p><span class='category'>Website:</span> <a href='${user.blog}'>${user.login}.com</a></p>`;
  secInfo.innerHTML += infoTemplate;

  tagLine.textContent = user.bio;

  let img = document.createElement('img');
  img.setAttribute("src", user.avatar_url);
  secPhoto.appendChild(img);
  headName.textContent = user.name;
}

pushContent();

function logIt () {
  let data = JSON.parse(this.responseText);
  console.log(data);
}

let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/seanmcp');
req.addEventListener('load', logIt);
req.send();
