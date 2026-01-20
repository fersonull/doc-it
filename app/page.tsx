export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Blur Background Gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
      </div>

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-orange-100/50">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-gray-900">doc-it</span>
            </div>
            <div className="flex items-center gap-10">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                Pricing
              </a>
              <button className="px-5 py-2.5 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors">
                Log In
              </button>
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-orange-600 rounded-sm hover:bg-orange-700 transition-all hover:shadow-lg hover:shadow-orange-500/20">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-7xl font-semibold text-gray-900 leading-tight mb-8 tracking-tight">
              Beautiful Technical Documentation, Simplified.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Create, manage, and share documentation with the clean, professional aesthetic developers love.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-8 py-4 text-base font-medium text-white bg-orange-600 rounded-sm hover:bg-orange-700 transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105">
                Start Writing for Free
              </button>
              <a href="#demo" className="px-8 py-4 text-base font-medium text-gray-900 hover:text-orange-600 transition-colors flex items-center gap-2">
                View Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-300/20 to-orange-500/20 rounded-sm blur-2xl"></div>
            <div className="relative rounded-sm shadow-2xl overflow-hidden border border-orange-100/50 bg-white/80 backdrop-blur-sm">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-b from-gray-50 to-white border-b border-orange-100/50 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="ml-4 flex-1 bg-white rounded-sm px-4 py-2 text-xs text-gray-500 border border-orange-100">
                  docs.example.com/getting-started
                </div>
              </div>

              {/* Documentation Interface */}
              <div className="flex bg-white/90 backdrop-blur-sm">
                {/* Sidebar */}
                <div className="w-60 bg-white/50 backdrop-blur-sm border-r border-orange-100/50 p-6 space-y-1">
                  <div className="text-xs font-semibold text-gray-900 mb-4">Getting Started</div>
                  <div className="text-sm text-gray-600 py-2 px-3 hover:bg-orange-50 rounded-sm cursor-pointer transition-colors">Installation</div>
                  <div className="text-sm text-gray-600 py-2 px-3 hover:bg-orange-50 rounded-sm cursor-pointer transition-colors">Configuration</div>
                  <div className="text-xs font-semibold text-gray-900 mt-6 mb-4">API Reference</div>
                  <div className="text-sm text-white bg-orange-600 py-2 px-3 rounded-sm shadow-sm">Authentication</div>
                  <div className="text-sm text-gray-600 py-2 px-3 hover:bg-orange-50 rounded-sm cursor-pointer transition-colors">Endpoints</div>
                  <div className="text-sm text-gray-600 py-2 px-3 hover:bg-orange-50 rounded-sm cursor-pointer transition-colors">Webhooks</div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-12 max-h-96 overflow-hidden">
                  <h2 className="text-4xl font-semibold text-gray-900 mb-6">Authentication</h2>
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    All API requests require authentication using Bearer tokens. Include your token in the Authorization header.
                  </p>
                  
                  {/* Code Block */}
                  <div className="rounded-sm bg-gray-900 p-5 mb-8 shadow-lg">
                    <div className="font-mono text-sm">
                      <div className="text-gray-500 mb-2">// Example request</div>
                      <div className="text-orange-400">fetch<span className="text-gray-300">(</span><span className="text-green-400">'https://api.example.com'</span><span className="text-gray-300">, {`{`}</span></div>
                      <div className="pl-4 text-gray-300">headers: {`{`}</div>
                      <div className="pl-8"><span className="text-orange-300">'Authorization'</span><span className="text-gray-300">:</span> <span className="text-green-400">'Bearer YOUR_TOKEN'</span></div>
                      <div className="pl-4 text-gray-300">{`}`}</div>
                      <div className="text-gray-300">{`})`}</div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    Generate API tokens from your dashboard settings...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-20">Why choose doc-it?</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {/* Feature 1 */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Instant Aesthetics</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Beautiful design out of the box. Every page looks professional without any styling work.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Effortless Sharing</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Share with a simple link. No login required for readers, just instant access.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Developer Friendly</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Write in Markdown with full syntax highlighting. Focus on content, we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-orange-100/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2026 doc-it</p>
            <div className="flex gap-8">
              <a href="#privacy" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-sm text-gray-500 hover:text-orange-600 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
