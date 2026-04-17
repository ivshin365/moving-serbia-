export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  icon: string;
  content: string; // HTML string
}

const POSTS: Record<'sr' | 'en', BlogPost[]> = {
  sr: [
    {
      slug: '10-saveta-za-selidbu',
      category: 'Saveti',
      title: '10 saveta za stres-free selidbu',
      excerpt: 'Pravo pakovanje, dobar raspored i prava ekipa — evo kako da vaša selidba prođe bez problema.',
      date: '12. mart 2025',
      readTime: '5 min',
      gradient: 'from-[#E05A2B] via-[#D44B1E] to-[#B83A10]',
      icon: '📋',
      content: `
<p>Selidba je jedna od najstresnijih životnih situacija — ali ne mora biti. Sa pravom pripremom i jasnim planom, ceo proces može proći glatko i bez iznenađenja. Evo 10 konkretnih saveta koje koriste iskusni prevozioci i klijenti koji su se selili više puta.</p>

<h2>1. Počnite da planirate najmanje 4–6 nedelja unapred</h2>
<p>Što pre počnete, to bolje. Rezervišite prevozioca barem mesec dana pre planiranog datuma, posebno ako se selite u periodu maj–septembar kada je sezona najgužva. Napravite listu svega što treba da se uradi i odredite rokove za svaku stavku.</p>

<h2>2. Rasporedite pakovanje po sobama</h2>
<p>Ne pokušavajte da zapakujete ceo stan za jedan vikend. Krenite od prostorija koje najmanje koristite — ostava, soba za goste, polica s knjigama. Ostavite svakodnevne stvari za poslednje. Svaku kutiju odmah označite: prostorija + kratak opis sadržaja.</p>

<h2>3. Koristite pravi materijal za pakovanje</h2>
<p>Kartonske kutije nisu sve iste. Za teške predmete (knjige, keramika) koristite male kutije da ne budu preteške. Za odelo, jakne i haljine postoje posebne kutije sa šipkom — vredi ih nabaviti. Novine su odlična zaštita za staklo i porcelan, ali unapred operite ruke jer mastilo prlja.</p>

<h2>4. Fotografišite kako je elektronika bila priključena</h2>
<p>Pre nego što raspakujete TV, stereo sistem ili kućno pozorište, napravite fotografiju svih kablova pozadi. Uštedeće vam sat vremena i mnogo živaca pri useljenju.</p>

<h2>5. Napravite kutiju "prvog dana"</h2>
<p>Izdvojte kutiju ili torbu sa svim što će vam trebati prvog dana u novom stanu: toaletne potrepštine, garnitura za spavanje, punjač za telefon, kafu, peškire i promenu odela. Ovu kutiju nosite sami — ne ide u kamion.</p>

<h2>6. Obavite prijenu i odjavu na vreme</h2>
<p>Prijavite prevozioca da razmontira nameštaj dan pre selidbe ako je moguće. Veći komadi poput kreveta i ormara oduzimaju mnogo vremena. Dogovorite se unapred šta se pakuje i šta se rastavlja.</p>

<h2>7. Zaštitite podove i hodnik</h2>
<p>Zamolite prevozioca da stavi zaštitne papire ili kartonske ploče na podove u hodniku i kod izlaza. Grebanice na parketu nastaju pri iznošenju nameštaja i teško se popravljaju.</p>

<h2>8. Budite prisutni pri utovaru i istovaru</h2>
<p>Nemojte napustiti stan dok prevozioci utovare. Vi jedini znate gde šta ide i šta je posebno lomljivo ili vredno. Ista pravilo važi za istovar — dočekajte kamion lično i označite gde svaka kutija ide.</p>

<h2>9. Proverite stan pre konačnog odlaska</h2>
<p>Kada prevozioci odnesu poslednje kutije, prošetajte kroz svaku prostoriju, otvorite sve ormariće, proverite terasu, podrum i garažu. Neverovatno je koliko stvari ostane — ključevi rezervnih lokota, punjači, dečje igračke iza kauča.</p>

<h2>10. Ne zaboravite na komšije</h2>
<p>Obavestite komšije unapred o datumu selidbe, posebno ako živite u zgradi i kamion blokira parkiralište ili ulaz. Mala napomena na tabli u hodniku ili lično obaveštavanje dobar je gest koji sprečava nepotrebne konflikte.</p>

<p><strong>Bonus savet:</strong> Koristite platforme poput Selidbe Srbija da u jednom koraku pošaljete zahtev svim proverenim prevoziocima u vašem gradu. Umesto da zovete jedan po jedan, oni vas zovu sa ponudama i sami se takmiče za vaš posao.</p>
      `,
    },
    {
      slug: 'koliko-kosta-selidba-2025',
      category: 'Cene',
      title: 'Koliko košta selidba u Srbiji 2025?',
      excerpt: 'Cene variraju od 150€ do 800€ zavisno od gradova i količine stvari. Saznajte šta utiče na cenu.',
      date: '8. mart 2025',
      readTime: '7 min',
      gradient: 'from-[#0C1827] via-[#152236] to-[#1C3A5A]',
      icon: '💰',
      content: `
<p>Cena selidbe je jedna od prvih stvari koje ljude zanima, a odgovor nije jednostavan — zavisi od mnogo faktora. U ovom tekstu ćemo razložiti od čega se cena formira, dati realne brojeve za različite scenarije i objasniti kako da dobijete najnižu cenu bez kompromisa u kvalitetu.</p>

<h2>Prosečne cene selidbe u Srbiji 2025.</h2>
<p>Na osnovu podataka sa tržišta, okvirne cene izgledaju ovako:</p>
<ul>
<li><strong>Garsonjera ili jednosoban stan (isti grad):</strong> 80€ – 180€</li>
<li><strong>Dvosoban stan (isti grad):</strong> 150€ – 300€</li>
<li><strong>Trosoban stan ili veći (isti grad):</strong> 250€ – 500€</li>
<li><strong>Kuća (isti grad):</strong> 400€ – 800€ i više</li>
<li><strong>Preseljenje između gradova (npr. Beograd–Novi Sad):</strong> + 100€ – 200€ na cenu lokalnog prevoza</li>
<li><strong>Preseljenje između gradova (npr. Beograd–Niš):</strong> + 200€ – 400€</li>
</ul>

<h2>Šta utiče na cenu?</h2>

<h3>1. Količina nameštaja i stvari</h3>
<p>Ovo je najvažniji faktor. Prevozioci procenjuju posao na osnovu broja kutija i komada nameštaja. Manji stan = manji kamion = manja cena. Zato je važno pre dobijanja ponude napraviti tačan inventar — iskreno navedite sve što treba da se prenese.</p>

<h3>2. Sprat i lift</h3>
<p>Prizemlje bez lifta je najjeftinije. Svaki sprat bez lifta dodaje 10–20€ na ukupnu cenu, jer prevozioci troše više vremena i fizičke energije. Na spratovima iznad 4. etaže bez lifta, neki prevozioci naplaćuju i više.</p>

<h3>3. Udaljenost</h3>
<p>Za selidbe unutar istog grada, udaljenost nije presudna. Za međugradske selidbe, cena se formira i na osnovu kilometraže — obično 0.5€ – 1€ po kilometru za kamion.</p>

<h3>4. Sezona</h3>
<p>Jun, jul i avgust su najskuplji meseci — potražnja je najveća, a prevozioci su zauzeti. Novembar, januar i februar su najjeftiniji. Ako možete da birate termin, selite se van sezone i uštedite 20–30%.</p>

<h3>5. Dan u nedelji</h3>
<p>Subota je uvek skuplja od radnog dana. Selidba u utorak ili sredu može biti 15–25% jeftinija od subote.</p>

<h3>6. Demontaža i montaža nameštaja</h3>
<p>Ako prevozioci treba i da rastave i ponovo sklopu krevete, ormane i police, to se posebno naplaćuje — obično 30€ – 80€ zavisno od obima posla.</p>

<h3>7. Pakovanje</h3>
<p>Ako angažujete prevozioca i za pakovanje, dodajte 50€ – 150€ zavisno od veličine stana. Ako vi sami padirate, uštedite na ovome.</p>

<h2>Kako dobiti najpovoljniju cenu?</h2>
<p>Osnovno pravilo je: tražite ponude od više prevozioca. Razlika između najjeftinije i najskuplje ponude za isti posao često iznosi 50–100€. Koristite platforme poput Selidbe Srbija — opišete selidbu jednom, a prevozioci vas sami kontaktiraju sa ponudama. Imate pregled tržišta i pregovarate s prednosti.</p>

<h2>Na čemu ne treba štedeti</h2>
<p>Najjeftinija ponuda nije uvek i najisplativija. Provaljeni nameštaj, izgrebane podovi ili nerealizovana selidba na dogovoreni dan košta više od razlike u ceni. Uvek proverite da li je firma registrovana, tražite pisanu potvrdu dogovora i proverite recenzije pre nego što date akontaciju.</p>
      `,
    },
    {
      slug: 'kako-zastititi-namestaj',
      category: 'Priprema',
      title: 'Kako zaštititi nameštaj tokom selidbe',
      excerpt: 'Stretch folija, deke za zaštitu, pravilno pakovanje kutija — vodič za bezbedan prevoz nameštaja.',
      date: '1. mart 2025',
      readTime: '4 min',
      gradient: 'from-[#D4AA2A] via-[#F2C44D] to-[#E8A42A]',
      icon: '📦',
      content: `
<p>Ogrebani orman, polomljen ugao stola, izlomljene noge od stolica — to su najčešće žalbe posle selidbe. Dobra vest je da se gotovo svaka šteta može sprečiti pravim materijalom i tehnikom zaštite. Evo konkretnog vodiča.</p>

<h2>Stretch folija — vaš najpouzdaniji saveznik</h2>
<p>Stretch folija (providna plastična folija koja se rastegne oko predmeta) je standardna oprema svakog ozbiljnog prevozioca. Koristi se za:</p>
<ul>
<li>Omotavanje vrata od ormana i vitrina da se ne otvaraju tokom transporta</li>
<li>Spajanje delova nameštaja koji se nije rastavljao</li>
<li>Zaštitu fotelja i sofe od prljavštine i vlage</li>
<li>Fiksiranje ladica da se ne izvlače</li>
</ul>
<p>Folija ne oštećuje lakove i boje ako se ne ostavlja previše dugo (više od 24 časa na suncu). Možete je kupiti u svim boljim prodavnicama alata ili hipermarketima.</p>

<h2>Zaštitne deke i čebad</h2>
<p>Profesionalni prevozioci uvek imaju zaštitne deke koje omotavaju oko nameštaja pre utovara u kamion. Ako se selite sami ili s prijateljem, improvizujte sa starim ćebadima, džepovima od duveta i slično. Posebno zaštitite:</p>
<ul>
<li>Uglove stolova i polica (najranjiviji deo)</li>
<li>Staklene površine i ogledala</li>
<li>Kožnu garnituru (grebanice od šrafova i rubova kutija)</li>
</ul>

<h2>Pravilno pakovanje kutija</h2>
<p>Kutija koja "svira" tokom transporta znači da stvari unutra mogu biti oštećene. Evo pravila:</p>
<ul>
<li><strong>Teški predmeti idu odozdo</strong> — keramika, knjige, tegovi. Laki (jastučnice, posteljina) idu na vrh.</li>
<li><strong>Popunite prazne prostore</strong> — zgužvanim novinama, balonima za pakovanje ili peškira koji ionako moraju da se presele.</li>
<li><strong>Ne punite kutije previše</strong> — ako je kutija teža od 15–18 kg, preteška je za bezbedan transport i može se pocepati.</li>
<li><strong>Lomljive stvari uvijte posebno</strong> — svaka čaša i tanjir posebno u novine ili mehurićastoj foliji. Ne slažite ih jedne na druge bez zaštite.</li>
</ul>

<h2>Slike i ogledala</h2>
<p>Slike i ogledala su posebna kategorija. Idealno rešenje su posebne kutije za slike (prodaju ih prodavnice za pakovanje). Ako nemate, napravite "sendvič" od dva kartonska dela i povežite selotejpom, a uglove zaštitite sunđerom ili zgužvanom folijom.</p>
<p>Ogledala uvek transportujte stojeći, nikad ležeći — mnogo su otpornija na udar kada stoje uspravno.</p>

<h2>Rastavite što možete</h2>
<p>Noga stola skuvana šrafovima mnogo je ranjivija od stola koji leži rasklopljen. Rastavite sve što se da rastaviti: krevete, stolove, police, kompjuterske stolice. Šrafove i vijke stavite u zip-lock kese i zalepite za nameštaj kome pripadaju — nema ništa gore nego tražiti šrafove dan posle selidbe.</p>

<h2>Elektronika i bele tehnike</h2>
<p>Televizori i monitori su posebno osetljivi. Ako ste sačuvali originalnu ambalažu — odlično, koristite je. Ako niste, zamotajte ekran u deku ili styropor i stavite "Staklo — pažljivo" na kutiju. Frižideri i veš mašine se transportuju stojeći — nikad naginjani na stranu, jer to oštećuje kompresor.</p>

<h2>Rezime: šta nabaviti pre selidbe</h2>
<ul>
<li>2–3 rolne stretch folije</li>
<li>Mehurićasta folija (balončići za pakovanje)</li>
<li>Kartonske kutije različitih veličina</li>
<li>Crni marker za označavanje</li>
<li>Jake selotejp trake za karton</li>
<li>Stare novine ili packing paper</li>
</ul>
      `,
    },
    {
      slug: 'kompletna-checklist-za-selidbu',
      category: 'Checklist',
      title: 'Kompletna checklist za selidbu stana ili kuće',
      excerpt: 'Od odjave struje i interneta do prijave novog prebivališta — sve što morate srediti pre, tokom i posle selidbe.',
      date: '22. februar 2025',
      readTime: '6 min',
      gradient: 'from-[#145A32] via-[#1E8449] to-[#239B56]',
      icon: '✅',
      content: `
<p>Selidba nije samo fizičko premeštanje stvari — to je čitav niz administrativnih i logističkih koraka koji se lako zaborave u gužvi. Ova checklist pokriva sve što treba srediti pre, tokom i posle selidbe u Srbiji.</p>

<h2>6–8 nedelja pre selidbe</h2>
<ul>
<li>☐ Odredite tačan datum selidbe</li>
<li>☐ Tražite ponude od prevozioca (koristite Selidbe Srbija za višestruke ponude odjednom)</li>
<li>☐ Rezervišite prevozioca i potvrdite termin pisanim dogovorom</li>
<li>☐ Obvestite stanodavca/upravu o odlasku (ako ste u najmu)</li>
<li>☐ Proverite stanje novog stana — da li su potrebni popravci pre useljenja</li>
<li>☐ Proverite parking ispred stare i nove adrese za kamion</li>
</ul>

<h2>3–4 nedelje pre selidbe</h2>
<ul>
<li>☐ Nabavite materijal za pakovanje (kutije, folije, selotejp, marker)</li>
<li>☐ Počnite da pakujete prostorije koje najmanje koristite</li>
<li>☐ Napravite inventar svih stvari koje se sele</li>
<li>☐ Odvojite stvari za bacanje, prodaju ili donaciju</li>
<li>☐ Prijavite promenu adrese na radnom mestu (za evidenciju)</li>
<li>☐ Kontaktirajte distributera struje i gasa radi odjave/prijave</li>
<li>☐ Kontaktirajte internet i TV providera — zakazajte raskid na staroj i aktivaciju na novoj adresi</li>
</ul>

<h2>1–2 nedelje pre selidbe</h2>
<ul>
<li>☐ Pakujte postepeno sve sobe osim kuhinje i spavaće sobe</li>
<li>☐ Obezbedite potvrdu termina od prevozioca</li>
<li>☐ Proverite da li vam treba dozvola za kamion (neke ulice u centru Beograda imaju ograničenja)</li>
<li>☐ Obavestite komšije o datumu selidbe</li>
<li>☐ Rezervišite parking ispred ulaza (stavite štake, sanduče ili kartonsku kutiju)</li>
<li>☐ Pripremite gotovinu za plaćanje prevozioca ako ne prihvataju kartice</li>
</ul>

<h2>Dan pre selidbe</h2>
<ul>
<li>☐ Odledite frižider i defrost zamrzivač (večeras isključite, do jutra je spreman za transport)</li>
<li>☐ Rastavljajte krevete, stolove i složen nameštaj</li>
<li>☐ Fotografišite sve električne/elektronske uređaje sa kablovima</li>
<li>☐ Napunite telefon, obezbedite powerbank</li>
<li>☐ Pripremite "kutiju prvog dana" (v. tekst o savetima za selidbu)</li>
<li>☐ Proverite prognoza vremena — ako kiša, nabavite plastičnu foliju za zaštitu</li>
</ul>

<h2>Dan selidbe</h2>
<ul>
<li>☐ Budite na staroj adresi pre dolaska prevozioca</li>
<li>☐ Označite kutije koje idu u određene sobe novog stana</li>
<li>☐ Zaštitite podove u hodniku (kartoni ili zaštitne folije)</li>
<li>☐ Odvajte "ključne" predmete koje nosite sami (dokumenti, vrednosti, lekovi)</li>
<li>☐ Prošetajte kroz star stan pre odlaska — proverite sve ormariće, terasu, podrum</li>
<li>☐ Predajte ključeve staroj adresi i fotografišite stanje pri predaji</li>
<li>☐ Napravite fotografije stanja novog stana pri preuzimanju</li>
</ul>

<h2>Posle selidbe — u roku od 2 nedelje</h2>
<ul>
<li>☐ <strong>Prijavite novo prebivalište u MUP-u</strong> — zakonska obaveza u roku od 8 dana</li>
<li>☐ Promenite adresu na ličnoj karti (ako je drugačija opština)</li>
<li>☐ Ažurirajte adresu kod banke (mobilna aplikacija ili šalter)</li>
<li>☐ Ažurirajte adresu kod Poštanske štedionice / Pošte Srbije ako primate poštu</li>
<li>☐ Ažurirajte adresu kod zdravstvene knjižice / odabranog lekara</li>
<li>☐ Ažurirajte adresu kod saobraćajne dozvole (ako se promenila opština)</li>
<li>☐ Prijavite auto na novoj adresi ako je aplikativno</li>
<li>☐ Obavestite firme za dostavu i pretplate o novoj adresi (Amazon, knjige, magazini)</li>
<li>☐ Proverite da li je internet/TV aktivan</li>
<li>☐ Proverite brojila struje i gasa — dojavite stanja novom dobavljaču</li>
</ul>

<p>Odštampajte ovu listu i kvačicom označavajte svaki korak. Selidbe koje idu po planu uvek idu glatko — haos nastaje kada se misli da će sve "samo od sebe" da se sredi.</p>
      `,
    },
    {
      slug: 'kako-prepoznati-pouzdanog-prevozioca',
      category: 'Izbor prevozioca',
      title: 'Kako prepoznati pouzdanog prevozioca: 7 znakova',
      excerpt: 'Registrovana firma, jasna cena bez skrivenih troškova, recenzije i pisani ugovor — evo na šta obratiti pažnju.',
      date: '14. februar 2025',
      readTime: '5 min',
      gradient: 'from-[#6E2C00] via-[#922B21] to-[#C0392B]',
      icon: '🔍',
      content: `
<p>Iznajmiti prevozioca nije isto što i naći najpovoljniju cenu na internetu. Loš prevozilac može oštetiti nameštaj, ne doći na dogovoreni termin ili zahtevati dodatnu uplatu na licu mesta. Evo 7 konkretnih znakova koji razlikuju proverene profesionalce od sumnjivim oglasima.</p>

<h2>1. Registrovana firma sa PIB-om</h2>
<p>Svaki ozbiljan prevozilac mora biti registrovan kao preduzetnik ili privredno društvo u APR-u (Agencija za privredne registre). Tražite naziv firme i PIB — možete ih lako proveriti na sajtu APR-a. Fizičko lice koje nudi prevoz "na crno" ne može vam izdati račun, i nema odgovornost u slučaju štete.</p>

<h2>2. Jasna i pismena ponuda</h2>
<p>Pouzdani prevozioci daju pisanu ponudu koja uključuje: tačan opis posla, adrese, termin, usluge (pakovanje, montaža, transport), cenu i uslove plaćanja. Ako vam neko daje cenu samo usmeno ili "otprilike", to je žuti signal. Ozbiljna firma ne strepi od pisanog dogovora — ona ga traži.</p>

<h2>3. Prethodni uviđaj ili detaljna lista inventara</h2>
<p>Pre nego što daju finalnu ponudu, pravi profesionalci traže da dođu na uviđaj ili da im dostavite detaljan opis svega što se seli. Ponuda "na slepo" za neviđeni stan skoro uvek znači da će cena biti korigovana naviše na dan selidbe — kad ste već u situaciji da ne možete lako da otkažete.</p>

<h2>4. Sopstveni kamion i oprema</h2>
<p>Proverite da li firma ima sopstveni kamion. Kompanije koje "organizuju" transport putem podizvođača teže kontrolišu kvalitet usluge. Prava firma ima kamion s logom kompanije, zaštitne deke, stretch folije i odgovarajuću opremu. Zapitajte: "Da li je kamion vaš?" — to je legitimno pitanje.</p>

<h2>5. Recenzije na nezavisnim platformama</h2>
<p>Google recenzije, Facebook ocene i preporuke na forumima su pouzdanije od testimonijala na sopstvenom sajtu firme. Tražite najmanje 10–15 recenzija. Firme s nulom recenzija nisu nužno loše — možda su nove — ali nemaju track record koji možete proveriti. Posebno obratite pažnju na to kako firma odgovara na negativne kritike.</p>

<h2>6. Jasna politika o šteti i oštećenjima</h2>
<p>Pitajte direktno: "Šta se dešava ako se nešto ošteti tokom selidbe?" Odgovor treba da bude jasan — firma snosi odgovornost i nadoknađuje štetu. Ako vam kažu "pa, mi smo pažljivi, to se ne dešava" bez konkretne procedure, imate razlog za zabrinutost. Neke firme imaju i osnovno osiguranje tereta — vredi pitati.</p>

<h2>7. Ne traže ceo iznos unapred</h2>
<p>Standardna praksa je akontacija od 20–30% pri rezervaciji, ostatak pri završetku posla. Firma koja traži punu uplatu unapred (ili gotovinu odmah "da bi rezervisali termin") je rizična. U slučaju nepojavljivanja ili loše usluge, teško ćete naplatiti povraćaj.</p>

<h2>Kako brzo proveriti prevozioca</h2>
<ol>
<li>Guglajte naziv firme + "iskustvo" ili "recenzija"</li>
<li>Proverite APR registraciju</li>
<li>Pozovite ih i proverite da li postavljaju pitanja o selidbi (profesionalac želi detalje)</li>
<li>Tražite pisanu ponudu — odbijanje je loš znak</li>
</ol>

<p>Platforme poput Selidbe Srbija rade deo ovog posla umesto vas — prevozioci u bazi su provereni i ocenjeni od strane prethodnih korisnika. Dobijate višestruke ponude i možete ih lako uporediti.</p>
      `,
    },
    {
      slug: 'idealno-vreme-za-selidbu',
      category: 'Planiranje',
      title: 'Kada je idealno vreme za selidbu u Srbiji?',
      excerpt: 'Proleće i jesen su najpopularnije sezone, ali selidba leti ili zimi ima svojih prednosti. Saznajte kada se isplati seliti.',
      date: '5. februar 2025',
      readTime: '4 min',
      gradient: 'from-[#154360] via-[#1A5276] to-[#2E86C1]',
      icon: '📅',
      content: `
<p>Nije svejedno kada se selite. Termin selidbe utiče na dostupnost prevozioca, cenu, ali i na fizičke uslove u kojima se transport odvija. Evo realnog pregleda svih godišnjih doba za selidbu u Srbiji — sa svim prednostima i manama.</p>

<h2>Proleće (mart–maj) — idealan period</h2>
<p>Proleće je najpopularnije godišnje doba za selidbu, i s razlogom. Temperature su blage (10–22°C), nema ekstremnih vremenskih uslova, dani su sve duži (više svetlosti za rad), a prevozioci su još uvek dostupni jer se sezona nije raspalila.</p>
<p><strong>Prednosti:</strong> ugodna temperatura, dostupni prevozioci, razumne cene.</p>
<p><strong>Mane:</strong> kišoviti periodi u aprilu mogu odložiti transport; mart i april su još uvek hladni za večernji rad napolju.</p>
<p><strong>Preporuka:</strong> Maj je zlatni mesec — lepo vreme, još prihvatljive cene, prevozioci još nisu maksimalno zauzeti.</p>

<h2>Leto (jun–avgust) — gužva i vrućina</h2>
<p>Jun, jul i avgust su sezonski vrhunac. Ljudi se sele zbog završetka školske godine, isteka ugovora o najmu, praznika... Posledica: prevozioci su potpuno zauzeti, cene su 20–30% više, a dostupnost termina je ograničena.</p>
<p><strong>Prednosti:</strong> suvo vreme (nema kiše koja kvari stvari), dugi dani sa dosta svetlosti.</p>
<p><strong>Mane:</strong> vrućina iznad 30°C je naporna za fizički rad, skuplja cena, teško naći termin u piku (vikend u julu).</p>
<p><strong>Preporuka:</strong> Ako morate leti, rezervišite prevozioca najmanje 6–8 nedelja unapred. Selidba u ranim jutarnjim satima (7–9h) znatno je podnošljivija od podnevnog vrela.</p>

<h2>Jesen (septembar–novembar) — podjednako dobar kao proleće</h2>
<p>Septembar je skoro kao maj — lepo vreme, prevozioci su odmorniji nego tokom leta, a cene se vraćaju na normalu. Oktobar je odličan — suvo, sunčano, temperatura između 12–20°C. Novembar donosi hladnoću i kraće dane, ali i niske cene i potpunu dostupnost prevozioca.</p>
<p><strong>Prednosti:</strong> niske cene (posebno novembar), laka dostupnost termina, ugodna temperatura.</p>
<p><strong>Mane:</strong> novembarska kiša i rano mrkanje mogu otežati rad.</p>
<p><strong>Preporuka:</strong> Septembar i oktobar su odlični za selidbu. Novembar je best value mesec — najniže cene u godini.</p>

<h2>Zima (decembar–februar) — najjeftinije, ali s rizicima</h2>
<p>Zima je najsporija sezona za prevozioca. Cene su na minimumu, prevozioci su raspoloživi za pregovore i fleksibilniji su po pitanju termina. Međutim, postoje realni izazovi.</p>
<p><strong>Prednosti:</strong> najniže cene u godini, potpuna dostupnost, prevozioci imaju više vremena za vas.</p>
<p><strong>Mane:</strong> sneg i led mogu blokirati pristup zgradi, oštećivati mokre kutije, klizav teren je rizičan za iznošenje teških predmeta. Kratki zimski dani znače manje svetlosti za rad.</p>
<p><strong>Preporuka:</strong> januar i februar su odlični ako prognoza pokazuje suvo vreme. Uvek imajte plan B ako je najavljen sneg.</p>

<h2>Koji dan u nedelji izabrati?</h2>
<p>Subota je uvek skuplja i zaposlenija. Selidba utorak–četvrtak je idealna — prevozioci imaju više vremena, manje su pod stresom od vikend gužve, i cena je niža. Petak je dobar kompromis: polodnevna selidba, vikend za raspakivanje.</p>

<h2>Zaključak: idealan termin selidbe u Srbiji</h2>
<p>Ako možete da birate, <strong>maj, oktobar ili novembar, u utorak ili sredu</strong> = najniže cene, najdostupniji prevozioci i najpovoljniji vremenski uslovi. Ako morate leti, krenite rano ujutru i rezervišite najmanje 6 nedelja unapred.</p>
      `,
    },
  ],
  en: [
    {
      slug: '10-tips-for-stress-free-move',
      category: 'Tips',
      title: '10 Tips for a Stress-Free Move',
      excerpt: 'Proper packing, good planning and the right team — here is how to make your move go smoothly.',
      date: 'March 12, 2025',
      readTime: '5 min',
      gradient: 'from-[#E05A2B] via-[#D44B1E] to-[#B83A10]',
      icon: '📋',
      content: `
<p>Moving is one of life's most stressful experiences — but it doesn't have to be. With the right preparation and a clear plan, the entire process can go smoothly and without surprises. Here are 10 concrete tips used by experienced movers and clients who have moved multiple times.</p>

<h2>1. Start planning at least 4–6 weeks in advance</h2>
<p>The sooner you start, the better. Book your movers at least a month before your planned date, especially if you're moving between May and September when demand peaks. Create a task list with deadlines for each item.</p>

<h2>2. Pack room by room</h2>
<p>Don't try to pack your entire apartment in one weekend. Start with rooms you use least — storage, guest rooms, bookshelves. Leave everyday items for last. Label every box immediately: room name + brief content description.</p>

<h2>3. Use the right packing materials</h2>
<p>Not all cardboard boxes are equal. For heavy items (books, ceramics) use small boxes so they don't become too heavy. For suits, jackets and dresses there are special wardrobe boxes with a hanging rail — they're worth getting. Newspapers are great protection for glass and porcelain, but wash your hands afterward as the ink stains.</p>

<h2>4. Photograph how your electronics were connected</h2>
<p>Before you unplug your TV, stereo system or home cinema, photograph all the cables at the back. It will save you an hour of frustration when setting everything up in your new place.</p>

<h2>5. Pack a "first day" box</h2>
<p>Set aside a box or bag with everything you'll need on day one: toiletries, bed linen, phone charger, coffee, towels and a change of clothes. This box travels with you — it does not go in the truck.</p>

<h2>6. Arrange furniture disassembly the day before</h2>
<p>Ask your movers to disassemble large furniture the day before the move if possible. Big pieces like beds and wardrobes take a lot of time. Agree in advance what gets packed and what gets dismantled.</p>

<h2>7. Protect your floors and hallway</h2>
<p>Ask your movers to lay protective paper or cardboard sheets on floors in the hallway and at the exit. Scratches on hardwood floors happen during furniture removal and are difficult to repair.</p>

<h2>8. Be present during loading and unloading</h2>
<p>Don't leave the apartment while movers are loading. Only you know where everything goes and what is particularly fragile or valuable. The same rule applies for unloading — meet the truck in person and direct where each box goes.</p>

<h2>9. Check the apartment before final departure</h2>
<p>When the movers take the last boxes, walk through every room, open all cupboards, check the balcony, basement and garage. It's remarkable what gets left behind — spare lock keys, chargers, children's toys behind the sofa.</p>

<h2>10. Don't forget about your neighbours</h2>
<p>Inform your neighbours in advance about the moving date, especially if you live in a building and the truck will block the parking lot or entrance. A small note on the notice board or a personal heads-up is a kind gesture that prevents unnecessary conflict.</p>

<p><strong>Bonus tip:</strong> Use platforms like Moving Serbia to send your request to all verified movers in your city in one step. Instead of calling them one by one, they call you with offers and compete for your business.</p>
      `,
    },
    {
      slug: 'how-much-does-moving-cost-in-serbia-2025',
      category: 'Pricing',
      title: 'How Much Does Moving Cost in Serbia 2025?',
      excerpt: 'Prices range from €150 to €800 depending on cities and quantity of items. Find out what affects the price.',
      date: 'March 8, 2025',
      readTime: '7 min',
      gradient: 'from-[#0C1827] via-[#152236] to-[#1C3A5A]',
      icon: '💰',
      content: `
<p>The cost of moving is one of the first things people want to know, and the answer isn't simple — it depends on many factors. In this article we'll break down what makes up the price, give realistic figures for different scenarios, and explain how to get the best price without sacrificing quality.</p>

<h2>Average moving costs in Serbia 2025</h2>
<p>Based on market data, typical prices look like this:</p>
<ul>
<li><strong>Studio or one-bedroom apartment (same city):</strong> €80 – €180</li>
<li><strong>Two-bedroom apartment (same city):</strong> €150 – €300</li>
<li><strong>Three-bedroom apartment or larger (same city):</strong> €250 – €500</li>
<li><strong>House (same city):</strong> €400 – €800+</li>
<li><strong>Moving between cities (e.g. Belgrade–Novi Sad):</strong> + €100 – €200 on top of local rates</li>
<li><strong>Moving between cities (e.g. Belgrade–Niš):</strong> + €200 – €400</li>
</ul>

<h2>What affects the price?</h2>

<h3>1. Volume of furniture and belongings</h3>
<p>This is the most important factor. Movers estimate the job based on the number of boxes and pieces of furniture. A smaller apartment means a smaller truck and a lower price. That's why it's important to create an accurate inventory before getting quotes — be honest about everything that needs to be transported.</p>

<h3>2. Floor and elevator</h3>
<p>Ground floor with no stairs is the cheapest option. Each floor without an elevator adds €10–20 to the total, as movers spend more time and physical energy. On floors above the 4th without an elevator, some movers charge even more.</p>

<h3>3. Distance</h3>
<p>For moves within the same city, distance isn't crucial. For intercity moves, the price also depends on mileage — typically €0.50–€1 per kilometre for the truck.</p>

<h3>4. Season</h3>
<p>June, July and August are the most expensive months — demand is highest and movers are busy. November, January and February are the cheapest. If you can choose your timing, move off-season and save 20–30%.</p>

<h3>5. Day of the week</h3>
<p>Saturday is always more expensive than a weekday. Moving on a Tuesday or Wednesday can be 15–25% cheaper than on a Saturday.</p>

<h3>6. Furniture assembly and disassembly</h3>
<p>If movers also need to disassemble and reassemble beds, wardrobes and shelves, this is charged separately — typically €30–€80 depending on the volume of work.</p>

<h3>7. Packing service</h3>
<p>If you hire movers to pack as well, add €50–€150 depending on apartment size. If you pack yourself, you save on this.</p>

<h2>How to get the best price</h2>
<p>The basic rule is: get quotes from multiple movers. The difference between the cheapest and most expensive quote for the same job often amounts to €50–€100. Use platforms like Moving Serbia — you describe your move once, and movers contact you with offers. You have a market overview and negotiate from a position of strength.</p>

<h2>Where not to cut corners</h2>
<p>The cheapest quote isn't always the best value. Damaged furniture, scratched floors or a no-show on the agreed day costs more than the price difference. Always verify the company is registered, request written confirmation of the agreement, and check reviews before paying a deposit.</p>
      `,
    },
    {
      slug: 'how-to-protect-furniture-during-move',
      category: 'Preparation',
      title: 'How to Protect Furniture During a Move',
      excerpt: 'Stretch wrap, protective blankets, proper box packing — a guide to safe furniture transport.',
      date: 'March 1, 2025',
      readTime: '4 min',
      gradient: 'from-[#D4AA2A] via-[#F2C44D] to-[#E8A42A]',
      icon: '📦',
      content: `
<p>A scratched wardrobe, a broken table corner, snapped chair legs — these are the most common complaints after a move. The good news is that almost every kind of damage can be prevented with the right materials and protection technique. Here is a practical guide.</p>

<h2>Stretch wrap — your most reliable ally</h2>
<p>Stretch wrap (the clear plastic film that stretches around objects) is standard equipment for every serious mover. It is used to:</p>
<ul>
<li>Wrap wardrobe and display cabinet doors so they don't swing open during transport</li>
<li>Join parts of furniture that wasn't disassembled</li>
<li>Protect armchairs and sofas from dirt and moisture</li>
<li>Secure drawers so they don't pull out</li>
</ul>
<p>The film doesn't damage lacquers or finishes if it isn't left on for too long (more than 24 hours in the sun). You can buy it in any good hardware store or hypermarket.</p>

<h2>Protective blankets and moving pads</h2>
<p>Professional movers always carry protective blankets to wrap around furniture before loading it into the truck. If you're moving yourself or with a friend, improvise with old blankets, duvet covers and similar. Pay special attention to:</p>
<ul>
<li>Table and shelf corners (the most vulnerable part)</li>
<li>Glass surfaces and mirrors</li>
<li>Leather upholstery (scratches from screws and box edges)</li>
</ul>

<h2>Proper box packing</h2>
<p>A box that "rattles" during transport means the items inside can be damaged. Here are the rules:</p>
<ul>
<li><strong>Heavy items go at the bottom</strong> — ceramics, books, weights. Light items (pillowcases, bedding) go on top.</li>
<li><strong>Fill empty spaces</strong> — with crumpled newspaper, bubble wrap, or towels that need to move anyway.</li>
<li><strong>Don't overfill boxes</strong> — if a box weighs more than 15–18 kg, it's too heavy for safe transport and may tear.</li>
<li><strong>Wrap fragile items individually</strong> — each glass and plate separately in newspaper or bubble wrap. Never stack them without protection.</li>
</ul>

<h2>Pictures and mirrors</h2>
<p>Pictures and mirrors are a special category. The ideal solution is dedicated picture boxes (available at packing supply shops). If you don't have them, make a "sandwich" from two pieces of cardboard and secure with tape, protecting the corners with foam or crumpled wrap.</p>
<p>Always transport mirrors standing upright, never lying flat — they are much more resistant to impact when vertical.</p>

<h2>Disassemble what you can</h2>
<p>A table leg attached with screws is far more vulnerable than a disassembled table laid flat. Disassemble everything you can: beds, tables, shelves, office chairs. Put screws and bolts in zip-lock bags and tape them to the piece of furniture they belong to — there's nothing worse than searching for screws the day after the move.</p>

<h2>Electronics and white goods</h2>
<p>TVs and monitors are particularly sensitive. If you kept the original packaging — great, use it. If not, wrap the screen in a blanket or styrofoam and label the box "Glass — Handle with Care". Fridges and washing machines should be transported upright — never tilted on their side, as this damages the compressor.</p>

<h2>Summary: what to buy before the move</h2>
<ul>
<li>2–3 rolls of stretch wrap</li>
<li>Bubble wrap</li>
<li>Cardboard boxes in various sizes</li>
<li>Black marker for labelling</li>
<li>Strong packing tape</li>
<li>Old newspapers or packing paper</li>
</ul>
      `,
    },
    {
      slug: 'complete-moving-checklist',
      category: 'Checklist',
      title: 'Complete Moving Checklist for Apartment or House',
      excerpt: 'From cancelling utilities and internet to registering your new address — everything you need to handle before, during and after your move.',
      date: 'February 22, 2025',
      readTime: '6 min',
      gradient: 'from-[#145A32] via-[#1E8449] to-[#239B56]',
      icon: '✅',
      content: `
<p>Moving is not just physically transporting belongings — it involves a whole series of administrative and logistical steps that are easy to forget in the rush. This checklist covers everything you need to handle before, during and after your move in Serbia.</p>

<h2>6–8 weeks before the move</h2>
<ul>
<li>☐ Set the exact moving date</li>
<li>☐ Get quotes from movers (use Moving Serbia to get multiple quotes at once)</li>
<li>☐ Book your movers and confirm the appointment in writing</li>
<li>☐ Notify your landlord/building management of your departure (if renting)</li>
<li>☐ Inspect your new home — are any repairs needed before moving in?</li>
<li>☐ Check parking access at both old and new addresses for the moving truck</li>
</ul>

<h2>3–4 weeks before the move</h2>
<ul>
<li>☐ Buy packing materials (boxes, wrap, tape, marker)</li>
<li>☐ Start packing rooms you use least</li>
<li>☐ Create an inventory of everything being moved</li>
<li>☐ Sort items for disposal, sale or donation</li>
<li>☐ Notify your employer of the address change (for records)</li>
<li>☐ Contact your electricity and gas provider to transfer or cancel services</li>
<li>☐ Contact your internet and TV provider — schedule disconnection and reconnection</li>
</ul>

<h2>1–2 weeks before the move</h2>
<ul>
<li>☐ Continue packing all rooms except kitchen and bedroom</li>
<li>☐ Reconfirm the date and time with your movers</li>
<li>☐ Prepare cash for the movers if they don't accept card payments</li>
<li>☐ Notify neighbours about the moving date</li>
<li>☐ Reserve parking in front of the building entrance</li>
</ul>

<h2>The day before the move</h2>
<ul>
<li>☐ Defrost the fridge and freezer (turn off tonight, ready by morning)</li>
<li>☐ Disassemble beds, tables and flat-pack furniture</li>
<li>☐ Photograph all electronic devices with their cables</li>
<li>☐ Charge your phone, get a powerbank</li>
<li>☐ Prepare your "first day" box (see the moving tips article)</li>
<li>☐ Check the weather forecast — if rain, get plastic sheeting to protect items</li>
</ul>

<h2>Moving day</h2>
<ul>
<li>☐ Be at the old address before the movers arrive</li>
<li>☐ Label boxes with the room they're going to in the new home</li>
<li>☐ Protect floors in the hallway (cardboard or protective sheets)</li>
<li>☐ Keep "critical" items with you (documents, valuables, medication)</li>
<li>☐ Walk through the old home before leaving — check all cupboards, balcony, basement</li>
<li>☐ Hand over keys and photograph the condition at handover</li>
<li>☐ Photograph the condition of the new home when you take possession</li>
</ul>

<h2>After the move — within 2 weeks</h2>
<ul>
<li>☐ <strong>Register your new address at the police station (MUP)</strong> — legally required within 8 days in Serbia</li>
<li>☐ Update address on your ID card (if different municipality)</li>
<li>☐ Update address with your bank (mobile app or branch)</li>
<li>☐ Update address with your health insurance and GP</li>
<li>☐ Update address on vehicle registration (if municipality changed)</li>
<li>☐ Notify delivery services and subscriptions of your new address</li>
<li>☐ Confirm internet/TV is active</li>
<li>☐ Check electricity and gas meters — report readings to the new supplier</li>
</ul>

<p>Print this list and tick off each step. Moves that go according to plan always go smoothly — chaos happens when people assume everything will "sort itself out".</p>
      `,
    },
    {
      slug: '7-signs-of-reliable-moving-company',
      category: 'Choosing Movers',
      title: '7 Signs of a Reliable Moving Company',
      excerpt: 'Registered company, transparent pricing with no hidden fees, reviews and a written contract — here is what to look for.',
      date: 'February 14, 2025',
      readTime: '5 min',
      gradient: 'from-[#6E2C00] via-[#922B21] to-[#C0392B]',
      icon: '🔍',
      content: `
<p>Hiring movers isn't the same as finding the cheapest price online. A bad mover can damage your furniture, fail to show up on the agreed date, or demand extra payment on the spot. Here are 7 concrete signs that separate reliable professionals from suspicious listings.</p>

<h2>1. Registered company with a tax number</h2>
<p>Every serious mover must be registered as a sole trader or company with the relevant business registry. Ask for the company name and tax number — you can easily verify these online. An individual offering moving services "off the books" cannot issue a receipt, and has no liability in the event of damage.</p>

<h2>2. A clear written quote</h2>
<p>Reliable movers provide a written quote that includes: a precise job description, both addresses, the appointment time, services included (packing, assembly, transport), price and payment terms. If someone gives you a price verbally or "approximately", that's a yellow flag. A serious company isn't afraid of a written agreement — they expect it.</p>

<h2>3. An in-person visit or detailed inventory request</h2>
<p>Before giving a final quote, real professionals either visit in person or ask you for a detailed inventory of everything being moved. A quote given "sight unseen" almost always means the price will be revised upward on moving day — when you're already in a position where you can't easily cancel.</p>

<h2>4. Their own truck and equipment</h2>
<p>Check whether the company has its own truck. Companies that "arrange" transport through sub-contractors have less control over service quality. A proper company has a truck with the company logo, protective blankets, stretch wrap, and appropriate equipment. Ask directly: "Is the truck yours?" — it's a perfectly legitimate question.</p>

<h2>5. Reviews on independent platforms</h2>
<p>Google reviews, Facebook ratings and forum recommendations are more reliable than testimonials on a company's own website. Look for at least 10–15 reviews. Companies with zero reviews aren't necessarily bad — they may be new — but they have no track record you can verify. Pay particular attention to how the company responds to negative criticism.</p>

<h2>6. A clear damage policy</h2>
<p>Ask directly: "What happens if something is damaged during the move?" The answer should be clear — the company takes responsibility and compensates for damage. If they say "well, we're careful, it doesn't happen" without a concrete procedure, you have reason to worry. Some companies also carry basic cargo insurance — worth asking about.</p>

<h2>7. They don't ask for the full amount upfront</h2>
<p>Standard practice is a 20–30% deposit on booking, with the balance due on completion. A company demanding full payment upfront (or immediate cash "to secure the booking") is a risk. In the event of a no-show or poor service, getting a refund will be very difficult.</p>

<h2>How to quickly check a mover</h2>
<ol>
<li>Google the company name + "review" or "experience"</li>
<li>Verify company registration</li>
<li>Call them and see whether they ask questions about your move (a professional wants details)</li>
<li>Request a written quote — refusal is a bad sign</li>
</ol>

<p>Platforms like Moving Serbia do part of this work for you — movers in the database are verified and rated by previous users. You receive multiple quotes and can compare them easily.</p>
      `,
    },
    {
      slug: 'best-time-to-move-in-serbia',
      category: 'Planning',
      title: 'When Is the Best Time to Move in Serbia?',
      excerpt: 'Spring and autumn are the most popular seasons, but moving in summer or winter has its advantages. Find out when moving is most worthwhile.',
      date: 'February 5, 2025',
      readTime: '4 min',
      gradient: 'from-[#154360] via-[#1A5276] to-[#2E86C1]',
      icon: '📅',
      content: `
<p>Timing your move matters more than most people think. The time of year affects mover availability, price, and the physical conditions in which the transport takes place. Here is a realistic review of all four seasons for moving in Serbia — with all the pros and cons.</p>

<h2>Spring (March–May) — the ideal period</h2>
<p>Spring is the most popular season for moving, and for good reason. Temperatures are mild (10–22°C), there are no extreme weather conditions, days are getting longer (more light to work by), and movers are still available because the peak season hasn't kicked in.</p>
<p><strong>Pros:</strong> Comfortable temperature, available movers, reasonable prices.</p>
<p><strong>Cons:</strong> Rainy periods in April can delay transport; March and April are still cold for evening outdoor work.</p>
<p><strong>Recommendation:</strong> May is the golden month — beautiful weather, still reasonable prices, movers not yet at maximum capacity.</p>

<h2>Summer (June–August) — busy and hot</h2>
<p>June, July and August are the seasonal peak. People move because the school year ends, rental contracts expire, and holiday plans intersect. The result: movers are fully booked, prices are 20–30% higher, and appointment availability is limited.</p>
<p><strong>Pros:</strong> Dry weather (no rain damaging belongings), long days with plenty of light.</p>
<p><strong>Cons:</strong> Heat above 30°C is exhausting for physical work, higher prices, hard to find a slot during peak periods (weekend in July).</p>
<p><strong>Recommendation:</strong> If you must move in summer, book movers at least 6–8 weeks in advance. Moving in the early morning hours (7–9am) is considerably more manageable than in the midday heat.</p>

<h2>Autumn (September–November) — as good as spring</h2>
<p>September is almost like May — lovely weather, movers more rested after the summer rush, prices back to normal. October is excellent — dry, sunny, temperatures between 12–20°C. November brings cold and shorter days, but also the lowest prices and full mover availability.</p>
<p><strong>Pros:</strong> Low prices (especially November), easy appointment availability, comfortable temperature.</p>
<p><strong>Cons:</strong> November rain and early darkness can make work more difficult.</p>
<p><strong>Recommendation:</strong> September and October are great for moving. November is the best-value month — the lowest prices of the year.</p>

<h2>Winter (December–February) — cheapest, but with risks</h2>
<p>Winter is the slowest season for movers. Prices are at their minimum, movers are open to negotiation and more flexible on scheduling. However, there are real challenges.</p>
<p><strong>Pros:</strong> Lowest prices of the year, full availability, movers have more time for you.</p>
<p><strong>Cons:</strong> Snow and ice can block building access, wet boxes get damaged, slippery surfaces are risky when carrying heavy items. Short winter days mean limited working light.</p>
<p><strong>Recommendation:</strong> January and February are excellent if the forecast shows dry weather. Always have a contingency plan if snow is forecast.</p>

<h2>Which day of the week to choose?</h2>
<p>Saturday is always more expensive and busier. Moving Tuesday–Thursday is ideal — movers have more time, are less stressed by the weekend rush, and the price is lower. Friday is a good compromise: move in the morning, spend the weekend unpacking.</p>

<h2>Conclusion: the ideal moving window in Serbia</h2>
<p>If you can choose, <strong>May, October or November, on a Tuesday or Wednesday</strong> = lowest prices, most available movers, and the most favourable weather conditions. If you must move in summer, start early in the morning and book at least 6 weeks in advance.</p>
      `,
    },
  ],
};

export function getAllPosts(locale: 'sr' | 'en'): BlogPost[] {
  return POSTS[locale];
}

export function getPostBySlug(locale: 'sr' | 'en', slug: string): BlogPost | undefined {
  return POSTS[locale].find((p) => p.slug === slug);
}
