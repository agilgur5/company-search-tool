const url = new URL(window.location.href)
const companyName = url.searchParams.get('company')

const iframe = document.createElement('iframe')
iframe.style.overflow = 'auto'
iframe.style.height = window.height // each iframe should fill the window

// put it into google because that tends to be more accurate than direct search
const companyNameEnc = companyName.split(' ').join('+')
const baseGoogleURL = 'https://www.google.com/search?q=' + companyNameEnc + '+'

const sites = ['glassdoor', 'angellist', 'linkedin', 'crunchbase']
sites.forEach((site) => {
  const newFrame = iframe.cloneNode()
  newFrame.setAttribute('src', baseGoogleURL + site)
  document.body.appendChild(newFrame)
})
