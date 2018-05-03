const url = new URL(window.location.href)
const companyName = url.searchParams.get('company')

// put it into google because that tends to be more accurate than direct search
const companyNameEnc = companyName.split(' ').join('+')
const baseGoogleURL = 'https://www.google.com/search?q=' + companyNameEnc + '+'

const sites = ['glassdoor', 'angellist', 'linkedin', 'crunchbase']
sites.forEach((site) => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', baseGoogleURL + site)
  anchor.textContent = site
  document.body.appendChild(anchor)
  document.body.appendChild(document.createElement('br'))
})
