const url = new URL(window.location.href)
const companyName = url.searchParams.get('company')

// put it into google because that tends to be more accurate than direct search
const companyNameEnc = companyName.split(' ').join('+')
const baseGoogleURL = 'https://www.google.com/search?q=' + companyNameEnc + '+'

// add title + header
document.title = companyName
const header = document.createElement('h4')
header.textContent = companyName
header.style.textTransform = 'capitalize'
header.style.margin = '0'
document.body.appendChild(header)

// add hyperlinks
const sites = ['glassdoor', 'angellist', 'linkedin', 'crunchbase', 'alexa']
sites.forEach((site) => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', baseGoogleURL + site)
  anchor.setAttribute('target', '_blank')  // new tab
  anchor.textContent = site
  document.body.appendChild(anchor)
  document.body.appendChild(document.createElement('br'))
})
