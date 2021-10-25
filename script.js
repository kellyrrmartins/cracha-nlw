const socialMidiaLinks = {
  github: 'kellyRMartins',
  youtube: 'ZKv2VS_jQdj6pqlbyCfBPg',
  instagram: 'kellymartins9923',
  facebook: 'kellymartins',
  twitter: '@KellyMa32890805'
}
function showMeSomething() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMidiaLinks[social]}`

    // alert(li.children[0].href)
  }
}
showMeSomething()

function getGitHubPfofileInfo() {
  const url = `https://api.github.com/users/${socialMidiaLinks.github}`
  fetch(url).then(response =>
    response.json().then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLoginGitHub.textContent = data.login
    })
  )
}
getGitHubPfofileInfo()
