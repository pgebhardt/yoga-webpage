import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-yoga.jpg"
            alt="Yoga pose at sunset"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 35%' }}
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Find Your Balance
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
              Join our community and discover the transformative power of yoga
            </p>
            <Link
              href="/classes"
              className="inline-block bg-sage text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-sage-dark transition-colors shadow-md"
            >
              Explore Our Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sage-dark mb-4">Why Choose Bay Area Yoga?</h2>
            <p className="text-xl text-sage-dark/80 max-w-2xl mx-auto">
              Experience the perfect blend of traditional yoga practices and modern wellness approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Expert Instructors</h3>
              <p className="text-sage-dark/80">
                Learn from our experienced and certified yoga teachers who are dedicated to your growth
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Diverse Classes</h3>
              <p className="text-sage-dark/80">
                From gentle flows to power yoga, find the perfect class for your level and goals
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-dark mb-4">Welcoming Community</h3>
              <p className="text-sage-dark/80">
                Join a supportive community of like-minded individuals on their yoga journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage text-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-sand/80">
            Start your transformation today with a class at Bay Area Yoga
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-sand text-sage px-8 py-3 rounded-md text-lg font-medium hover:bg-sand-dark transition-colors"
          >
            View Schedule
          </Link>
        </div>
      </section>
    </main>
  );
}
