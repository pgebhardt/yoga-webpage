import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-sage-dark mb-4">About Us</h1>
            <p className="text-xl text-sage-dark/80 max-w-2xl mx-auto">
              Dedicated to bringing peace, health, and wellness to the Bay Area community through the practice of yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/studio.jpg"
                  alt="Our yoga studio"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sage-dark mb-6">Our Studio</h2>
              <p className="text-sage-dark/80 mb-6">
                Located in the heart of the Bay Area, our studio provides a peaceful sanctuary away from the bustle of city life. With natural light, bamboo floors, and state-of-the-art props, we&apos;ve created the perfect environment for your practice.
              </p>
              <p className="text-sage-dark/80">
                Our space is designed to be welcoming and inclusive, whether you&apos;re new to yoga or have been practicing for years. We believe that everyone deserves access to the transformative benefits of yoga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-sage text-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Your Instructor</h2>
              <h3 className="text-2xl font-semibold mb-4">Elena Gebhardt</h3>
              <p className="text-sand/80 mb-6">
                Elena brings over a decade of experience in various yoga traditions to her classes. Her teaching style combines traditional yoga philosophy with modern alignment principles, creating a practice that is both grounding and uplifting.
              </p>
              <p className="text-sand/80">
                Certified in multiple yoga disciplines, Elena continues to deepen her practice through ongoing education and personal exploration. Her classes focus on building strength, flexibility, and mindfulness while maintaining a welcoming and supportive environment for all students.
              </p>
            </div>
            <div className="max-w-md mx-auto w-full">
              <div className="relative aspect-square w-full">
                <Image
                  src="/instructor.jpg"
                  alt="Elena Gebhardt - Yoga Instructor"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-dark mb-6">Our Philosophy</h2>
            <p className="text-sage-dark/80 max-w-3xl mx-auto">
              We believe that yoga is more than just physical exercise—it&apos;s a path to overall wellness and self-discovery. Our approach combines traditional yoga principles with modern teaching methods to create an experience that nurtures body, mind, and spirit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-sand rounded-lg">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Mind-Body Connection</h3>
              <p className="text-sage-dark/80">
                We emphasize the integration of breath, movement, and awareness to create a holistic practice that benefits both physical and mental well-being.
              </p>
            </div>
            <div className="p-6 bg-sand rounded-lg">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Inclusive Community</h3>
              <p className="text-sage-dark/80">
                Our studio welcomes practitioners of all levels, ages, and backgrounds. We believe yoga should be accessible to everyone.
              </p>
            </div>
            <div className="p-6 bg-sand rounded-lg">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Continuous Growth</h3>
              <p className="text-sage-dark/80">
                We support your journey with expert guidance, encouraging you to explore and deepen your practice at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-white/90 mb-8">
            Join us for a class and experience the transformative power of yoga.
          </p>
          <div className="space-x-4">
            <Link
              href="/schedule"
              className="inline-block bg-sand text-sage-dark px-8 py-3 rounded-md text-lg font-medium hover:bg-sand-dark transition-colors shadow-md"
            >
              View Schedule
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-sage-dark border border-white px-8 py-3 rounded-md text-lg font-medium hover:bg-sand transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 