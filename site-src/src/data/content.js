// All copy lives here. Edit this file, not the components.

export const profile = {
  name: 'Safdher Sahai',
  role: 'Lead Engineer',
  base: 'Kochi, Kerala, IN',
  status: 'open for freelance',
  email: 'safdhersahai@gmail.com',
  whatsapp: 'https://wa.me/919526883699',
  github: 'https://github.com/safdher',
  linkedin: 'https://www.linkedin.com/in/safdher-sahai/',
  instagram: 'https://www.instagram.com/safdher_sahai/',
  cv: '/downloads/Safdher.pdf',
  photo: '/images/Safdher2.png',
  playStore: 'https://play.google.com/store/apps/developer?id=HoverMinds',
  multimedia: 'https://www.sahaimultimedia.com/',
}

export const services = [
  {
    title: 'Build your MVP',
    text: 'I design and build your first version end to end: Flutter or native Android app, backend, and release to the Play Store and App Store.',
  },
  {
    title: 'Fractional tech lead',
    text: 'A few days a month to set architecture, review code, guide your developers and unblock releases, without hiring a full-time CTO.',
  },
  {
    title: 'Rescue or audit an app',
    text: 'Slow, crashing or messy app? I review the code, fix the worst problems first and give you a clear plan for what to do next.',
  },
]

export const process = [
  ['Discovery call', 'We talk goals, scope and budget. Free.'],
  ['Plan and quote', 'Clear milestones and a fixed price or monthly retainer.'],
  ['Build in sprints', 'Regular demos so you always see progress.'],
  ['Launch and support', 'Store release, handover and follow-up support.'],
]

export const stack = [
  { tool: 'Google Cloud Platform', category: 'Cloud', use: 'Hosting and infrastructure' },
  { tool: 'Docker', category: 'Containers', use: 'Reproducible builds and deploys' },
  { tool: 'GitHub CI/CD', category: 'Delivery', use: 'Test, build and release pipelines' },
  { tool: 'Gemini API', category: 'AI', use: 'Generative AI in products' },
  { tool: 'Postman', category: 'APIs', use: 'API design, testing and docs' },
]

export const skills = [
  ['Mobile', 'Flutter, Android, Jetpack Compose, Play Store releases'],
  ['Backend and web', 'Python, PHP, HTML/CSS, JavaScript'],
  ['Also used', 'C++, C#, C'],
  ['Leadership', 'Architecture, code review, mentoring, release planning'],
]

// group -> rows. `img` is optional; `link` opens in a new tab.
export const projectGroups = [
  {
    label: 'featured',
    rows: [
      {
        name: 'Trensight',
        tags: ['Cloud-hosted software'],
        text: 'Cloud-hosted software product, built and shipped end to end. Stack: GCP, Docker, GitHub CI/CD, Gemini API.',
      },
    ],
  },
  {
    label: 'client work',
    rows: [
      { name: 'Timilo', tags: ['Mobile', 'Face recognition'], img: '/images/portfolio/Timilo.png', text: 'Employee attendance app that uses face recognition, built for both office and field staff, including contactless check-in.' },
      { name: 'Timilo Meet', tags: ['Mobile', 'Video'], img: '/images/portfolio/timilomeet.jpg', text: 'Secure video-conferencing app for business meetings.' },
      { name: 'Dr Meet', tags: ['Mobile', 'Healthcare'], img: '/images/portfolio/Drmeet.png', text: 'Online doctor video-consultation app offering telemedicine for families across India.' },
      { name: 'Grasshopper365', tags: ['Mobile', 'Travel'], img: '/images/portfolio/g365.png', text: 'Business management app from TripMemo for tour operators, guides, stays and transport providers to run their business from one phone.' },
      { name: 'Azooya', tags: ['Mobile', 'Marketplace'], img: '/images/portfolio/Azooya.png', text: 'Local marketplace where buyers and sellers trade within their own locality, available in India and abroad.' },
      { name: 'Shawarmer', tags: ['Mobile', 'Food delivery'], img: '/images/portfolio/shawarmer.png', text: 'Ordering app where outlets register and customers order with online payment or cash on delivery.' },
    ],
  },
  {
    label: 'own apps / google play',
    rows: [
      ['HoverBill', 'hoverbill', 'Tools', 'Simple offline billing app for small Indian businesses: create and share invoices from your phone.'],
      ['HoverQR', 'hoverqr', 'Tools', 'Generate, scan and share any QR code instantly.'],
      ['HoverMagic', 'hovermagic', 'AI art', 'Turn normal photos into stunning AI art with ready-to-copy prompts.'],
      ['HoverAI Prompts 4 Creatives', 'hoveraiprompts.creative', 'AI prompts', 'A library of AI prompts for creative makers.'],
      ['HoverAI Prompts 4 Students', 'hoveraiprompts.student', 'AI prompts', 'Hundreds of AI prompts to supercharge studying.'],
      ['HoverAI Prompts 4 Developers', 'hoveraiprompts.developer', 'AI prompts', 'A library of AI prompts made for developers.'],
      ['HoverAI Prompt 4 Professionals', 'hoveraiprompts.professional', 'AI prompts', 'A library of AI prompts for working professionals.'],
      ['Hovertots', 'hovertots', 'Kids learning', 'A joyful ABC learning adventure for toddlers with sounds, images and animation.'],
      ['Hoverboard', 'hoverboard', 'Education', 'Free video lessons organised by category so anyone can start learning practically and quickly.'],
      ['Hoverminds', 'hovermindsapp', 'Shopping', 'Shopping app from HoverMinds.'],
      ['Sahai Multimedia', 'sahaimultimedia', 'Print on demand', 'App for Sahai Multimedia, my print-on-anything business.'],
    ].map(([name, pkg, tag, text]) => ({
      name,
      tags: ['Android', tag],
      img: `/images/apps/${pkg.replace('.', '-')}-shot.webp`,
      text,
      link: `https://play.google.com/store/apps/details?id=com.hoverminds.${pkg}`,
    })),
  },
]

export const experience = [
  ['May 2025 - now', 'Lead Engineer', 'Trenser Technology Solutions', 'Lead a small team of 1 to 3 engineers on mobile products: architecture decisions, code reviews, mentoring and delivery.'],
  ['Sep 2023 - May 2025', 'Senior Software Engineer', 'Trenser Technology Solutions', "Built and shipped mobile applications for Trenser's global software clients."],
  ['Aug 2022 - Sep 2023', 'Mobile Application Developer', 'StratAgile', 'Mobile apps for a digital marketing and platforms company.'],
  ['Nov 2021 - Jul 2022', 'Mobile Application Developer', 'Tripmemo Technologies', 'Built travel-industry apps, including Grasshopper365.'],
  ['Jan 2019 - Oct 2021', 'Mobile Application Developer', 'Alphanumerics Labs LLP', 'Started as an intern and grew into a Flutter developer working across many domains.'],
  ['Jun 2019 - Oct 2019', 'Intern', 'Glitz IT Solutions', 'Built the transport management module of a hospital management product.'],
]

export const education = [
  ['2016 - 2019', 'MCA', 'University of Calicut'],
  ['2013 - 2016', 'B.Sc. Computer Science', 'Mahatma Gandhi University'],
]
