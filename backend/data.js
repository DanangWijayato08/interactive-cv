// backend/data.js
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika', image: '/LogoAmikom.png' },
  { id: 2, period: '2020 - 2023', institution: 'SMK N 1 Seyegan', major: 'Teknik Komputer dan Jaringan', image: '/LogoSMA.png' }
];

const skills = [
  { name: 'HTML5', level: 'Mahir', image: '/Html5.png', percent: 90 },
  { name: 'CSS3', level: 'Mahir', image: '/css3.png', percent: 85 },
  { name: 'Tailwind CSS', level: 'Mahir', image: '/Tailwind.png', percent: 80 },
  { name: 'Bootstrap 5', level: 'Mahir', image: '/Bootstrap.png', percent: 80 },
  { name: 'JavaScript', level: 'Mahir', image: '/Javascript.png', percent: 86 },
  { name: 'Vue.js', level: 'Mahir', image: '/Vue.png', percent: 85 },
  { name: 'Git & GitHub', level: 'Mahir', image: '/Github.png', percent: 85 },
  { name: 'MySQL', level: 'Mahir', image: '/Mysql.png', percent: 80 },
  { name: 'Figma', level: 'Mahir', image: '/Figma.png', percent: 87 }
];

const projects = [
  { title: 'Mas Gondrong Rent', image: '/Sewa.png', description: 'Platform website untuk sewa kendaraan area Jogja.', tech: ['Vue.js', 'Laravel', 'Mysql', 'Bootstrap'], link: 'https://github.com/Izzaramadhan/FP-MasGondrong' },
  { title: 'Portofolio', image: '/Portofolio.png', description: 'Platform website untuk portofolio pribadi.', tech: ['Vue.js', 'Tailwind', 'Express.js', 'Vercel Postgres'], link: '#' },
  { title: 'KostNow', image: '/KostNow.png', description: 'Desain aplikasi mobile untuk membantu mencari kost atau apartemen.', tech: ['Figma'], link: 'https://www.figma.com/design/58WKSPOYyYIQSYwXP5DCj6/IMK-PROJECT?node-id=0-1&t=iZEAmvIgm9a0Denw-1' }
];

module.exports = { educationHistory, skills, projects };
