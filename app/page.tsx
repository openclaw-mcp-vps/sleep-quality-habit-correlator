export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-sm font-medium border border-[#30363d]">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Correlate Daily Habits with{" "}
          <span className="text-[#58a6ff]">Sleep Quality</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Log your habits, track your sleep, and discover exactly what helps — or hurts — your rest. Built for health-conscious individuals and sleep disorder patients.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Sleeping Better — $10/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📋", title: "Daily Habit Logging", desc: "Track exercise, caffeine, screen time, and more in seconds." },
          { icon: "😴", title: "Sleep Quality Scoring", desc: "Rate your sleep and log duration each morning effortlessly." },
          { icon: "📊", title: "Correlation Analytics", desc: "Visual dashboards reveal which habits drive better sleep." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need for better sleep</p>
          <div className="text-5xl font-bold text-[#58a6ff] mb-1">$10</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited habit & sleep logs",
              "Correlation analytics dashboard",
              "Recharts-powered trend graphs",
              "PostgreSQL-backed data storage",
              "Export your data anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the habit-sleep correlation work?",
              a: "Each day you log habits (exercise, caffeine, alcohol, screen time, etc.) and rate your sleep. Our analytics engine computes Pearson correlations over your history and surfaces the strongest positive and negative drivers."
            },
            {
              q: "Is my health data private and secure?",
              a: "Yes. Your data is stored in a private PostgreSQL database, encrypted at rest, and never shared or sold. You can export or delete your data at any time."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your account settings. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Sleep Quality Habit Correlator. All rights reserved.
      </footer>
    </main>
  )
}
