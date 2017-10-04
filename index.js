const fetch = require('isomorphic-fetch');

const urlBase = 'https://api.github.com';
const repositoryName = 'protractor-workshop-2017';

const options = {
  headers: {
    Authorization: `token ${process.env.ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
};

const main = async () => {
  const repositoryResponse = await fetch(`${urlBase}/search/repositories?q=${repositoryName} in:name is:public`, options);
  const repositories = await repositoryResponse.json();

  repositories.items.forEach((repo) => {
    console.log(repo.owner.html_url);
  });
};

main();
