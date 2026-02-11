export default function Home() {
  const inMaintenance = process.env.IN_MAINTENANCE === "true";

  return (
    <div className="bg-white text-gray-800">
      {inMaintenance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="mx-4 max-w-md rounded-lg bg-white p-8 text-center shadow-2xl">
            <div className="text-5xl">🚧</div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Under Construction
            </h2>
            <p className="mt-3 text-gray-600">
              We&apos;re working on some improvements and will be back shortly.
            </p>
            <p className="mt-2 text-gray-600">
              Thank you for your patience!
            </p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <header className="bg-brand-blue">
        <div className="container mx-auto px-6 py-16 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to finally stick to a movement routine?
          </h1>
          <p className="mt-6 max-w-2xl mx-auto">
            Transform your daily routine with 30 minutes of joyful movement,
            every day, for 30 days. Discover the power of consistency and fun in
            building a lasting habit.
          </p>
          <p className="mt-4 font-bold">Join the Do 30 For 30 Challenge</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="btn bg-white text-brand-blue border-none hover:bg-gray-200 w-full sm:w-auto">
              Get Started
            </button>
            <button className="btn bg-white text-brand-blue border-none hover:bg-gray-200 w-full sm:w-auto">
              Login to Track My Progress
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="container mx-auto px-6 -mb-16 md:-mb-24">
          <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
            <img
              src="/images/happy-walking.webp"
              alt="Group of people walking outdoors"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </header>

      <main>
        {/* Discover Section */}
        <section className="pt-32 md:pt-40 pb-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Discover the Do 30 for 30 Challenge
            </h2>
            <div className="max-w-2xl mx-auto mt-6 text-gray-600 space-y-4">
              <p>
                Let&apos;s be honest—you&apos;ve probably tried this before.
                Workout programs. Fitness apps. Maybe even bought a cute yoga
                mat.
              </p>
              <p>And still... nothing sticks.</p>
              <p>
                You&apos;re juggling a million things, and workouts usually land
                somewhere between &ldquo;maybe tomorrow&rdquo; and
                &ldquo;oops, forgot again.&rdquo;
              </p>
              <p className="font-bold text-gray-700">
                That&apos;s why we made Do 30 for 30.
              </p>
              <p>It&apos;s simple. It&apos;s doable. And most of all—it&apos;s fun.</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/images/treadmill_sideview.webp"
                alt="Treadmill side view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Here&apos;s How It Works
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-700">
                  Move your body for 30 minutes a day, any way you want
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-700">
                  Break it up however you like (10 + 10 + 10? Perfect.)
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-700">
                  Do what you enjoy—walk, dance, lift, stretch, play
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Why it actually works:
                </h2>
                <button className="btn bg-brand-blue text-white hover:bg-blue-900 mt-8">
                  Start Your Journey
                </button>
              </div>
              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-brand-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Build Lasting Habits</h3>
                    <p className="mt-1 text-gray-600">
                      Transform your routine with daily 30-minute sessions
                      designed to fit your lifestyle. Create a sustainable habit
                      that sticks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-brand-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Flexibility and Fun</h3>
                    <p className="mt-1 text-gray-600">
                      You learn what you enjoy and makes you feel good. It&apos;s
                      all encouragement and no guilt trips.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-brand-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Community Support</h3>
                    <p className="mt-1 text-gray-600">
                      Join a vibrant Facebook community that cheers you on every
                      step of the way. Share your journey and gain motivation
                      from others.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-brand-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5 10m7 0a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2h5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Consistency Without Pressure
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Say goodbye to the all-or-nothing mindset. Embrace a
                      flexible approach that encourages progress without stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
              What Participants Are Saying
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="p-4">
                <div className="flex justify-center md:justify-start text-brand-blue">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-lg font-semibold text-gray-800">
                  &ldquo;The Do 30 for 30 Challenge helped me find joy in
                  movement again. I love the supportive community and the
                  flexibility to do what I enjoy!&rdquo;
                </blockquote>
                <p className="mt-4 text-gray-500">- Emily R.</p>
              </div>
              <div className="p-4">
                <div className="flex justify-center md:justify-start text-brand-blue">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-lg font-semibold text-gray-800">
                  &ldquo;I never thought I could stick to a routine, but this
                  challenge made it easy and fun. I&apos;ve never felt
                  better!&rdquo;
                </blockquote>
                <p className="mt-4 text-gray-500">- Michael T.</p>
              </div>
              <div className="p-4">
                <div className="flex justify-center md:justify-start text-brand-blue">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-lg font-semibold text-gray-800">
                  &ldquo;The encouragement from the community kept me going.
                  It&apos;s more than just a challenge; it&apos;s a lifestyle
                  change.&rdquo;
                </blockquote>
                <p className="mt-4 text-gray-500">- Sarah L.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA Section */}
      <footer className="relative bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/workout_equipment.webp"
            alt="Workout gear background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-24 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform Your Routine?
          </h2>
          <div className="mt-8">
            <button className="btn bg-white text-brand-blue border-none hover:bg-gray-200">
              Join the Challenge Today
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
