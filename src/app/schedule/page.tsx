import Link from 'next/link';

const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '7:00 AM', name: 'Morning Flow', instructor: 'Elena', duration: '75 min' },
      { time: '9:30 AM', name: 'Gentle Hatha', instructor: 'Michael', duration: '60 min' },
      { time: '5:30 PM', name: 'Power Yoga', instructor: 'Emma', duration: '75 min' },
      { time: '7:00 PM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '8:00 AM', name: 'Vinyasa Flow', instructor: 'Emma', duration: '75 min' },
      { time: '10:00 AM', name: 'Gentle Flow', instructor: 'Elena', duration: '60 min' },
      { time: '6:00 PM', name: 'Power Yoga', instructor: 'Michael', duration: '75 min' },
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '7:00 AM', name: 'Morning Flow', instructor: 'Elena', duration: '75 min' },
      { time: '9:30 AM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
      { time: '5:30 PM', name: 'Vinyasa Flow', instructor: 'Emma', duration: '75 min' },
      { time: '7:00 PM', name: 'Gentle Hatha', instructor: 'Michael', duration: '60 min' },
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { time: '8:00 AM', name: 'Power Yoga', instructor: 'Emma', duration: '75 min' },
      { time: '10:00 AM', name: 'Gentle Flow', instructor: 'Elena', duration: '60 min' },
      { time: '6:00 PM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
    ]
  },
  {
    day: 'Friday',
    classes: [
      { time: '7:00 AM', name: 'Morning Flow', instructor: 'Elena', duration: '75 min' },
      { time: '9:30 AM', name: 'Power Yoga', instructor: 'Michael', duration: '75 min' },
      { time: '5:30 PM', name: 'Vinyasa Flow', instructor: 'Emma', duration: '75 min' },
      { time: '7:00 PM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 AM', name: 'Vinyasa Flow', instructor: 'Emma', duration: '75 min' },
      { time: '10:30 AM', name: 'Gentle Hatha', instructor: 'Michael', duration: '60 min' },
      { time: '4:00 PM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
    ]
  },
  {
    day: 'Sunday',
    classes: [
      { time: '9:00 AM', name: 'Gentle Flow', instructor: 'Elena', duration: '60 min' },
      { time: '10:30 AM', name: 'Power Yoga', instructor: 'Emma', duration: '75 min' },
      { time: '4:00 PM', name: 'Yin Yoga', instructor: 'David', duration: '90 min' },
    ]
  }
];

export default function Schedule() {
  return (
    <div className="min-h-screen py-16 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-sage-dark mb-4">Class Schedule</h1>
          <p className="text-xl text-sage-dark/80 max-w-2xl mx-auto">
            Join us for daily yoga classes. Pre-registration required.
            New students: First class free!
          </p>
        </div>

        <div className="space-y-8">
          {schedule.map((day) => (
            <div key={day.day} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-sage px-6 py-4">
                <h2 className="text-xl font-semibold text-white">{day.day}</h2>
              </div>
              <div className="divide-y divide-sand/20">
                {day.classes.map((yogaClass, index) => (
                  <div key={index} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-sage-dark">
                          {yogaClass.time} - {yogaClass.name}
                        </h3>
                        <p className="text-sage-dark/70">
                          {yogaClass.instructor} • {yogaClass.duration}
                        </p>
                      </div>
                      <button className="bg-sage/10 text-sage-dark px-4 py-2 rounded-md text-sm font-medium hover:bg-sage/20 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-sage-dark/80">
            Questions about our schedule or need help booking a class?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-sage-dark transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 