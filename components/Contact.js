import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "aashishvinayvasala@gmail.com",
      displayValue: "aashishvinayvasala@gmail.com",
      link: "mailto:aashishvinayvasala@gmail.com",
      color: "cyan"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      value: "Aashish Vinay Vasala",
      displayValue: "in/AashishVinayVasala",
      link: "https://www.linkedin.com/in/layamyadam/",
      color: "blue"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      value: "Aashish-Vinay-Vasala",
      displayValue: "Aashish-Vinay-Vasala",
      link: "https://github.com/Laya-Myadam",
      color: "purple"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Texas, United States",
      displayValue: "Texas, USA",
      link: null,
      color: "green"
    }
  ]

  const colorClasses = {
    cyan: {
      iconBg: "bg-cyan-500/20",
      iconBorder: "border-cyan-400/40",
      iconText: "text-cyan-400",
      iconShadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
      border: "border-cyan-500/40 hover:border-cyan-400/70",
      shadow: "shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]",
      text: "text-cyan-300",
      link: "hover:text-cyan-400"
    },
    blue: {
      iconBg: "bg-blue-500/20",
      iconBorder: "border-blue-400/40",
      iconText: "text-blue-400",
      iconShadow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      border: "border-blue-500/40 hover:border-blue-400/70",
      shadow: "shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
      text: "text-blue-300",
      link: "hover:text-blue-400"
    },
    purple: {
      iconBg: "bg-purple-500/20",
      iconBorder: "border-purple-400/40",
      iconText: "text-purple-400",
      iconShadow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]",
      border: "border-purple-500/40 hover:border-purple-400/70",
      shadow: "shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]",
      text: "text-purple-300",
      link: "hover:text-purple-400"
    },
    green: {
      iconBg: "bg-green-500/20",
      iconBorder: "border-green-400/40",
      iconText: "text-green-400",
      iconShadow: "shadow-[0_0_20px_rgba(34,197,94,0.4)]",
      border: "border-green-500/40 hover:border-green-400/70",
      shadow: "shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]",
      text: "text-green-300",
      link: "hover:text-green-400"
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Let's Connect
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and innovative AI projects.
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const colors = colorClasses[item.color]
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gray-900/70 backdrop-blur-xl border-2 ${colors.border} ${colors.shadow} transition-all duration-500 text-center overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 ${colors.iconBorder} rounded-tr-2xl opacity-40`}></div>

                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-xl ${colors.iconBg} border ${colors.iconBorder} ${colors.iconShadow} flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                <h3 className={`font-bold text-lg mb-2 ${colors.text}`}>
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 ${colors.link} transition-colors duration-300 break-all text-sm`}
                  >
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm">{item.displayValue}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            Ready to Build Something Extraordinary?
          </h3>
          <p className="text-gray-300 mb-6">
            Whether it's a challenging AI problem, a collaborative project, or an exciting opportunity – I'd love to hear from you.
          </p>

          <a
            href="mailto:myadamlaya@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <Send className="w-5 h-5" />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  )
}
