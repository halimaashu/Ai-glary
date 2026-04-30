// app/pricing/page.tsx

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">Simple pricing</p>
          <h1 className="text-5xl font-serif mb-3">Pay for what you <em>actually</em> use</h1>
          <p className="text-gray-500 text-base">No hidden fees. Cancel anytime. Upgrade as you grow.</p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Starter */}
          <div className="border border-gray-100 rounded-2xl p-8 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Starter</p>
            <div className="text-5xl font-serif mb-1">$0</div>
            <p className="text-sm text-gray-400 mb-4">Free forever</p>
            <p className="text-sm text-gray-500 mb-6">Everything you need to get started. No credit card required.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {["3 projects", "5 GB storage", "Community support"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
              {["Custom domain", "Analytics", "Team members"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-xs">—</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
              Get started free
            </button>
          </div>

          {/* Pro */}
          <div className="border-2 border-emerald-600 rounded-2xl p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-emerald-50 text-xs font-medium px-4 py-1 rounded-full">
              Most popular
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Pro</p>
            <div className="text-5xl font-serif mb-1">$19</div>
            <p className="text-sm text-gray-400 mb-4">per month</p>
            <p className="text-sm text-gray-500 mb-6">For growing teams that need more power and collaboration.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {["Unlimited projects", "50 GB storage", "Priority email support", "Custom domain", "Analytics dashboard"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-xs">—</span>
                Team members
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-xl bg-emerald-700 text-emerald-50 text-sm font-medium hover:bg-emerald-800 transition">
              Start 14-day trial
            </button>
          </div>

          {/* Business */}
          <div className="border border-gray-100 rounded-2xl p-8 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">Business</p>
            <div className="text-5xl font-serif mb-1">$49</div>
            <p className="text-sm text-gray-400 mb-4">per month</p>
            <p className="text-sm text-gray-500 mb-6">Advanced features for larger organizations with serious needs.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {["Unlimited projects", "500 GB storage", "24/7 dedicated support", "Custom domain", "Analytics dashboard", "Up to 20 team members"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
              Get started
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-6">Common questions</p>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { q: "Can I change plans later?", a: "Yes — upgrade, downgrade, or cancel anytime. Changes take effect at the next billing cycle." },
              { q: "Is there a free trial?", a: "Pro and Business plans include a 14-day free trial. No credit card required." },
              { q: "What payment methods do you accept?", a: "All major credit cards, PayPal, and bank transfers for annual plans." },
              { q: "Do you offer student or nonprofit discounts?", a: "Yes — 50% off for verified students and registered nonprofits. Contact us to apply." },
            ].map(({ q, a }) => (
              <details key={q} className="group px-6 py-4">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-800 list-none">
                  {q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform duration-200 text-lg">+</span>
                </summary>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}