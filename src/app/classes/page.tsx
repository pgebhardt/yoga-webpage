import Image from 'next/image';
import Link from 'next/link';

const classes = [
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic flowing sequences that synchronize breath with movement. Build strength, flexibility, and mindfulness.',
    level: 'All Levels',
    duration: '75 min',
    image: '/vinyasa.jpg'
  },
  {
    title: 'Gentle Hatha',
    description: 'A slower-paced class focusing on basic postures and breathing techniques. Perfect for beginners.',
    level: 'Beginner',
    duration: '60 min',
    image: '/hatha.jpg'
  },
  {
    title: 'Power Yoga',
    description: 'Vigorous, fitness-based approach to vinyasa-style yoga. Build strength, stamina, and flexibility.',
    level: 'Intermediate/Advanced',
    duration: '75 min',
    image: '/power.jpg'
  },
  {
    title: 'Yin Yoga',
    description: 'Deep, passive stretching targeting connective tissues. Improve flexibility and find deep relaxation.',
    level: 'All Levels',
    duration: '90 min',
    image: '/yin.jpg'
  }
];

export default function Classes() {
  return (
    <div className="min-h-screen py-16 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sage-dark mb-4">Our Classes</h1>
          <p className="text-xl text-sage-dark/80 max-w-2xl mx-auto">
            Discover our range of yoga classes designed to meet you wherever you are in your practice.
            From gentle beginnings to advanced flows, find your perfect class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((yogaClass) => (
            <div
              key={yogaClass.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-sage-dark mb-2">
                  {yogaClass.title}
                </h3>
                <p className="text-sage-dark/80 mb-4">{yogaClass.description}</p>
                <div className="flex justify-between items-center text-sm text-sage-dark/70">
                  <span>Level: {yogaClass.level}</span>
                  <span>Duration: {yogaClass.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/schedule"
            className="inline-block bg-sage text-sand px-8 py-3 rounded-md text-lg font-medium hover:bg-sage-dark transition-colors"
          >
            View Schedule & Book a Class
          </Link>
        </div>
      </div>
    </div>
  );
} 