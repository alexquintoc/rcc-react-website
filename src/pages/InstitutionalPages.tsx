import { ArrowUpRight } from '@phosphor-icons/react';
import './InstitutionalPages.css';

const team = [
  { name: 'Ameneé Siahpush', title: 'Director, Impact & Program Design', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1580764458770-9XVXCR8G4S3F8I2PQY30/Siahpush-Amenee-1+%282%29+%281%29.png?format=750w' },
  { name: 'Andrew Salkin', title: 'Founding Principal', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1578595210819-CN5V0CTRD8RSMUR36ODG/SJP_3642.jpg?format=750w' },
  { name: 'Anna Friedman', title: 'Director, Policy & Programs', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1579130276714-O3AH02RMS77SJLG8MJDU/team-friedman?format=750w' },
  { name: 'Candelaria Mas Pohmajevic', title: 'Associate Director', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/2802d06c-9869-4e93-8f69-06d7c46e5696/CMP_Headshot-cropped.jpg?format=750w' },
  { name: 'Corinne LeTourneau', title: 'Founding Principal', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1579903474899-PRHBGYHIFZDW2A25G9B8/PHOTO-2019-11-19-19-49-17.jpg?format=750w' },
  { name: 'Ella Sahertian', title: 'Program Manager', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/27de3324-9dd9-4f9d-9e3f-2d93f58f0ccb/EllaSahertianoriginal.jpg?format=750w' },
  { name: 'Jeb Brugmann', title: 'Founding Principal', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1578667124024-GNUZXBXWG9HMBITLZXDA/team-brugmann.jpg?format=750w' },
  { name: 'Johanna Sutton', title: 'Associate Director', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/b987a294-7dd3-4305-83ef-33ca1c7182f3/Linkedin+Photo.jpg?format=750w' },
  { name: 'Konstantina Karydi', title: 'Senior Advisor to RCC Europe', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/bf1e5c9a-2619-4e7d-be01-b05b2f9d6cbe/Konstantina20Kayari_2.jpg?format=750w' },
  { name: 'Laura Barron', title: 'Associate Director', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/8f860e49-fe2f-4fa7-95ce-bb5ad17b9631/Untitled+%28Facebook+Shops+Cover+%28Square%29%29.png?format=750w' },
  { name: 'Marie Banzon', title: 'Associate Director, Operations', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/8d38ff00-2e65-44e7-95f5-c49d88e5e7af/marie-banzon.jpg?format=750w' },
  { name: 'Mbacke Faye', title: 'Associate Director', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/667dbb74-61d8-45e6-9a6a-76a41374c384/mbacke-faye-square.jpg?format=750w' },
  { name: 'Mohamed Oday', title: 'Program Associate', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/e85f7f53-3d06-4885-a798-1fb7fa2ce4dd/IMG_1125-c2.JPG?format=750w' },
  { name: 'Morgan Florsheim', title: 'Program Associate', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/3f1a30a6-5eec-4179-837e-68064d19a9ad/Morgan+Florsheim+square.jpg?format=750w' },
  { name: 'Paul Nelson', title: 'Founding Principal', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1578667147632-IAUOI9H8HTCU3238FKKI/team-nelson.jpg?format=750w' },
  { name: 'Sam Carter', title: 'Founding Principal', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/767191f0-475f-41d7-8128-2b4f46e39223/carter-headshot.jpg?format=750w' },
  { name: 'Sam Topacio', title: 'Development and Operations Associate', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/53ecfd09-5e55-4fb9-b804-05ed561f7c26/sam-topacio.jpeg?format=750w' },
];

const advisors = [
  { name: 'Michael Berkowitz', title: 'Senior Advisor', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1579644101821-YLLGHYZKP6U0UUJ4S20R/team-berkowitz.jpg?format=750w' },
  { name: 'Nuin-Tara Key', title: 'Senior Advisor', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/4a0d3608-66bb-438c-83ec-e932e7b68df9/adv-nuin-tara.jpg?format=750w' },
  { name: 'Alex Quinto', title: 'Graphic Design Advisor', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1604960075733-AZE4Q9I9H38NFULBDGVA/alexquinto-square.jpg?format=750w' },
  { name: 'Andrew Brenner', title: 'Lead Communications Advisor', image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1604958602006-5PP1KFL8DJGNXOLUMNHJ/andrew20crop-300x274.jpg?format=750w' },
];

const board = [
  {
    name: 'Judith Rodin',
    title: 'President, The Rockefeller Foundation, 2005–2017 · President Emerita, University of Pennsylvania',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1578526852562-775KAV3FMHX6V9HGGB6O/team-rodin.jpg?format=750w',
    href: 'https://www.drjudithrodin.com/about/',
    quote: 'When we pioneered 100 Resilient Cities, we hoped that it would spark a global movement with many actors. We knew that helping cities better face the threats of the 21st Century would be a decades-long challenge, and I am proud that many of the 100RC leadership team are carrying on this work through the Resilient Cities Catalyst.',
  },
  {
    name: 'Henk Ovink',
    title: 'Executive Director for the Global Commission on the Economics of Water, Senior Fellow at the World Resources Institute, and previous Special Envoy for International Water Affairs for the Kingdom of the Netherlands',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1579651616802-K474MITEI2LM659X8T1D/board-ovink?format=750w',
    href: 'https://www.government.nl/topics/water-management/waterenvoy/henk-ovink',
    quote: 'Water can be the cities’ leverage for catalytic change: sustaining health, supporting quality fisheries and urban agriculture, providing amenity and recreation for the most vulnerable and the better off. But leveraging water assets requires an empowered enabling environment. In this way, the Resilient Cities Catalyst approach gets right to the heart of the matter. It directs capital and builds capacity where it is needed most: with the city institutions, urbanist professionals, and political and community leaders whose partnerships are the necessary foundation for transformational change in the trajectory of our resilient urban future.',
  },
  {
    name: 'Lt. General (Ret.) Thomas P. Bostick',
    title: '53rd Chief of Engineers of the United States Army and Commanding General of the U.S. Army Corps of Engineers',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1611758327763-UXXFEC03M2GS7VQ9549V/20037-01.jpg?format=750w',
    href: 'https://thomaspbostick.com/meet/',
    quote: 'In the U.S., the unmet infrastructure need is in the billions. 2020 has underscored the importance of building resilience into our infrastructure, to prepare for the known and unknown challenges ahead. I’m proud to join the Resilient Cities Catalyst Board of Directors to help communities around the country build back better, with resilience as the focus.',
  },
  {
    name: 'Carlos Martín',
    title: 'Director of the Remodeling Futures Program at Harvard University’s Joint Center for Housing Studies',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/f4ec3c61-9142-42cb-8420-829af0b8affe/Carlos_Martin_0.jpg?format=750w',
    href: 'https://www.jchs.harvard.edu/carlos-martin',
    quote: 'Having witnessed firsthand the transformative work and pioneering legacy of RCC’s precursor, 100 Resilient Cities, I am thrilled to connect RCC’s work to the pressing issues of climate and economic justice. It is my pleasure to join the RCC board because of their dedication to creating a more equitable and resilient future for all.',
  },
  {
    name: 'Andrew Salkin',
    title: 'Founding Principal, Resilient Cities Catalyst · Former Senior Vice President of Global Resilience Practice, 100 Resilient Cities',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1579212692678-64QX2GOBE6BHK6MROKCF/SJP_3619.jpg?format=750w',
    quote: 'Over the past six years, I have been inspired by the power of urban places to innovate and find creative solutions. Core to this work has been building partnerships between sectors while developing new tools and transformative solutions to tackle the most stubborn urban challenges. I am excited for RCC to continue this important work with cities and their partners.',
  },
];

function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <header className="institutional-hero">
      <div className="container institutional-hero__inner">
        <p className="institutional-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="institutional-hero__lede">{lede}</p>}
      </div>
    </header>
  );
}

function PeopleGrid({ people }: { people: typeof team }) {
  return (
    <div className="people-grid">
      {people.map((person) => (
        <article className="person-card" key={person.name}>
          <div className="person-card__photo photo"><img src={person.image} alt={person.name} loading="lazy" /></div>
          <h2>{person.name}</h2>
          <p>{person.title}</p>
        </article>
      ))}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="institutional-page">
      <PageHero eyebrow="About RCC" title="Our History" lede="Building on a legacy." />
      <section className="institutional-section institutional-history-intro">
        <div className="container split-editorial">
          <h2>Empowering change in the way cities plan and act.</h2>
          <p>Resilient Cities Catalyst is an independent nonprofit organization formed by members of the 100 Resilient Cities (100RC) leadership team, created to empower change in the way cities plan and act.</p>
        </div>
      </section>
      <section className="history-photo photo">
        <img src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1611638536872-3WJDTQUBFTUTIANPVAPW/100RC_summit-session-all-bw.jpg?format=1500w" alt="100 Resilient Cities summit participants" />
      </section>
      <section className="institutional-section">
        <div className="container history-pillars">
          <article><span>01</span><h2>Urban Practitioners</h2><p>We are urban practitioners with deep experience in municipal government service design and delivery; public and private funding and financing; and philanthropic partnership development. Our professional experiences range from economic development to affordable housing to climate change adaptation to urban mobility and beyond. We know the way cities budget, the way cities plan and procure, and how cities operate.</p></article>
          <article><span>02</span><h2>Resilience Experts</h2><p>We are resilience experts who are pioneers in the urban resilience movement. We have collectively partnered with more than 100 cities around the world to catalyze and support their resilience-building journeys to deliver impact for their communities. We have delivered 20,000+ hours of resilience capacity-building to cities using bespoke tools and curricula.</p></article>
          <article><span>03</span><h2>Strategic Conveners</h2><p>We are strategic conveners who understand the importance of bringing together uncommon partners and practitioners. We have built action-oriented communities of practice and networks of diverse actors centered on complex resilience challenges such as urban migration, natural infrastructure, and seismic resilience.</p></article>
        </div>
      </section>
      <section className="institutional-section history-legacy">
        <div className="container">
          <p className="institutional-kicker">The 100RC legacy</p>
          <h2>Between 2013 and 2019, the 100RC community achieved groundbreaking impact which we hope to build upon and amplify.</h2>
          <dl>
            <div><dt>77</dt><dd>resilience strategies completed globally, with commitments from cities to implement 3,000+ concrete actions</dd></div>
            <div><dt>$25B</dt><dd>leveraged from national, local, private, and philanthropic sources to implement resilience projects</dd></div>
            <div><dt>282</dt><dd>collaborations facilitated between technical partners and cities to address city-specific policy, planning, and project challenges</dd></div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="institutional-page">
      <PageHero eyebrow="Our people" title="Meet the Team" lede="Urban practitioners, resilience experts and strategic conveners working across regions and disciplines." />
      <section className="institutional-section"><div className="container"><PeopleGrid people={team} /></div></section>
      <section className="institutional-section advisors-section"><div className="container"><div className="section-title"><p className="institutional-kicker">Extended team</p><h2>Other Advisors</h2></div><PeopleGrid people={advisors} /></div></section>
    </div>
  );
}

export function BoardPage() {
  return (
    <div className="institutional-page">
      <PageHero eyebrow="Leadership" title="Board of Directors" lede="Leaders helping RCC connect resilient action with the most pressing issues facing cities and communities." />
      <section className="institutional-section board-list"><div className="container">
        {board.map((person, index) => (
          <article className="board-card" key={person.name}>
            <div className="board-card__photo photo"><img src={person.image} alt={person.name} loading={index === 0 ? 'eager' : 'lazy'} /></div>
            <div className="board-card__content">
              <span>0{index + 1}</span>
              <blockquote>“{person.quote}”</blockquote>
              <h2>{person.name}</h2>
              <p>{person.title}</p>
              {person.href && <a href={person.href} target="_blank" rel="noreferrer">Learn more <ArrowUpRight weight="bold" aria-hidden="true" /></a>}
            </div>
          </article>
        ))}
      </div></section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="institutional-page contact-page">
      <PageHero eyebrow="Connect" title="Contact Us" lede="Let’s start a conversation about resilient action." />
      <section className="institutional-section"><div className="container contact-layout">
        <div className="contact-copy">
          <h2>Work with RCC</h2>
          <p>Resilient Cities Catalyst works with cities to ensure that their investments, innovations and partnerships are leveraged to bring the greatest value now and into the future.</p>
          <p>If you are interested in partnering with RCC, as a city, funder, or partner, please contact us using the email address or form.</p>
          <a href="mailto:contact@rcc.city">contact@rcc.city</a>
        </div>
        <form className="contact-form" action="https://formsubmit.co/joel@alexquinto.com" method="POST">
          <input type="hidden" name="_subject" value="New RCC website contact" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="contact-form__row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Organization<input name="organization" autoComplete="organization" /></label>
          <label>I am interested in<select name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>Partnering with RCC</option><option>Funding RCC’s work</option><option>City or regional support</option><option>Press inquiry</option><option>Other</option></select></label>
          <label>Message<textarea name="message" rows={7} required /></label>
          <button type="submit">Send message <ArrowUpRight weight="bold" aria-hidden="true" /></button>
          <p className="contact-form__note">Your message will be delivered to RCC’s designated website inbox.</p>
        </form>
      </div></section>
    </div>
  );
}
