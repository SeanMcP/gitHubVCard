function pushContent () {

  let headName = document.getElementById('headerName');
  let secInfo = document.getElementById('info');
  let secPhoto = document.getElementById('photo');
  let tagLine = document.getElementById('tagLine');
  let siteTitle = document.querySelector('title');

  let data = JSON.parse(this.responseText);

  siteTitle.textContent = `${data.login} | ${data.bio}`;

  let infoTemplate = "";
  infoTemplate += `<p><span class='category'>Name:</span> ${data.name}</p>`;
  infoTemplate += `<p><span class='category'>GitHub URL:</span> <a href='${data.html_url}'>${data.login}</a></p>`;
  infoTemplate += `<p><span class='category'>Email:</span> ${data.email}</p>`;
  infoTemplate += `<p><span class='category'>Company:</span> ${data.company}</p>`;
  infoTemplate += `<p><span class='category'>Website:</span> <a href='${data.blog}'>${data.login}.com</a></p>`;
  secInfo.innerHTML += infoTemplate;

  tagLine.textContent = data.bio;

  let img = document.createElement('img');
  img.setAttribute("src", data.avatar_url);
  secPhoto.appendChild(img);
  headName.textContent = data.name;
}

let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/seanmcp');
req.addEventListener('load', pushContent);
req.send();
