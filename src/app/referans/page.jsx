export default function Page() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center mb-12 max-w-2xl -mt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
          references
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Some of the business partners we serve. Our successful collaborations reflect our quality and reliability.
          </p>
        </div>
        <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:scale-[1.02] transition-all duration-300 ease-out p-8 w-[360px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
          <div className="flex flex-col items-center text-white">
            <div className="relative mb-6">
              <img
                src="/boya-fırça.png"
                alt="Avatar"
                className="w-28 h-28 rounded-full border-4 border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 leading-tight">Evimi Boyamak İstiyorum</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4"></div>
            <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
            Refresh your home with professional painting services
            </p>
          </div>
          <div className="absolute bottom-4 left-6">
            <a
              href="https://www.evimiboyatmakistiyorum.net"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
              rel="noreferrer"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Website
            </a>
          </div>
        </div>
      </div>
    )
  }
  