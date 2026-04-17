'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    label: 'Iskustva',
    title: 'Šta kažu naši klijenti',
    subtitle: 'Hiljade porodica pronašlo je pouzdanog prevozioca putem naše platforme.',
    reviews: [
      {
        text: 'Odličan servis! Preselili smo se iz Beograda u Novi Sad za jedan dan, sve bez stresa. Dobio sam 4 ponude i izabrao najboljeg. Definitivno preporučujem!',
        name: 'Marija Kovačević',
        location: 'Beograd → Novi Sad',
        initials: 'MK',
        color: 'bg-[#E05A2B]',
      },
      {
        text: 'Neverovatno jednostavan proces. Popunio sam formu ujutru, a do popodneva me zvonilo 5 firmi. Uštedeo sam 30% u poređenju sa prvom ponudom.',
        name: 'Stefan Petrović',
        location: 'Niš → Beograd',
        initials: 'SP',
        color: 'bg-[#0C1827]',
      },
      {
        text: 'Selimo se svake 2-3 godine zbog posla i ovo je daleko najlakši način za pronalaženje prevozioca. Više nikad drugačije!',
        name: 'Ana i Dejan Bogdanović',
        location: 'Kragujevac → Beograd',
        initials: 'AB',
        color: 'bg-[#F2C44D]',
      },
    ],
  },
  en: {
    label: 'Testimonials',
    title: 'What our clients say',
    subtitle: 'Thousands of families have found a reliable mover through our platform.',
    reviews: [
      {
        text: 'Excellent service! We moved from Belgrade to Novi Sad in one day, all stress-free. I got 4 quotes and chose the best. Highly recommend!',
        name: 'Marija Kovačević',
        location: 'Belgrade → Novi Sad',
        initials: 'MK',
        color: 'bg-[#E05A2B]',
      },
      {
        text: 'Incredibly simple process. I filled the form in the morning and by afternoon 5 companies were already calling. Saved 30% compared to the first offer.',
        name: 'Stefan Petrović',
        location: 'Niš → Belgrade',
        initials: 'SP',
        color: 'bg-[#0C1827]',
      },
      {
        text: 'We move every 2-3 years for work and this is by far the easiest way to find movers. Never doing it any other way again!',
        name: 'Ana & Dejan Bogdanović',
        location: 'Kragujevac → Belgrade',
        initials: 'AB',
        color: 'bg-[#F2C44D]',
      },
    ],
  },
};

export default function Testimonials() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];

  return (
    <section className="bg-[#FAF9F5] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C1827] mb-4">{t.title}</h2>
          <p className="text-[#6B7490] text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#E8E3D9] flex flex-col card-hover">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-[#F2C44D]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#3A3A4A] leading-relaxed text-[0.95rem] flex-1 mb-6">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F0EDE5]">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#0C1827] text-sm">{r.name}</div>
                  <div className="text-[#6B7490] text-xs">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
