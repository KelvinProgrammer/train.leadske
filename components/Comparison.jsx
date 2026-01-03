"use client"

const outputs = [
  {
    title: "TikTok",
    icon: "music_note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVbQ2u9KNxODFqECn4ixppNtnyTpQ4V77Fi7BWqmXf3eyiZrX9JBEFhd-ovly-app9DPAGFG2tFQaUD7rPmBUblY-RAIqhtzCu6ziXLO7NoOls3vS-2ii7AyxH5xKMEJJugnWC6ZqQEzDtFycwbekS55JRn2MOF1h0NbheZ0Oj5Q4hx3XXMESbhukuN8EhSGOpQlfzCxjpjOV6tFCpz7xaXJS37K2m7aCstJasnx-Np52eSE7E9G_ZRoxANJ0h6zy5qeKEBTZYp4UO",
    aspect: "9/16",
  },
  {
    title: "Reels",
    icon: "photo_camera",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBteg7f8evK2lCYBWBzO2laq401r_fBqc1fAek2tAnG7cExMehdIQE3XekU8OMUzwqX8z7mHo_k-ttZZzbZzIsvWsfuQ37Qdxts-CF37GZi25u7t4yI3CqXK83Eh5colBx05ZxCO3F0P5MtX41SD2ZWpbQ_zOao8moklTzi0T4UITsIiWEkZgAJHYc4zUx08JLFRDL69D8uynYdAlk7rsctc1nY2p8dHLibMtMSSMChD-qznMQWMEn0NCR8nhD67hEPbgzxp-0L5I0e",
    aspect: "9/16",
  },
  {
    title: "Blog & LinkedIn",
    icon: "article",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85",
    aspect: "square",
    colSpan: 2,
  },
]

export default function Comparison() {
  return (
    <section className="w-full py-20 bg-[#101c22]">
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <h2 className="text-white tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Generate content for <span className="text-primary">every channel</span>
            </h2>
            <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
              One input. Infinite outputs.
            </p>
          </div>

          {/* Output Grid - Full Width */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4">
            {outputs.map((output, idx) => (
              <div
                key={idx}
                className={`relative group overflow-hidden border border-[#223c49] ${output.colSpan === 2 ? 'col-span-2' : ''}`}
                style={{ aspectRatio: output.aspect === 'square' ? '1/1' : '9/16' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  style={{ backgroundImage: `url("${output.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="material-symbols-outlined text-white mb-2">{output.icon}</span>
                  <p className="text-white text-lg font-bold">{output.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
