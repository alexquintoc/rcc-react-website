import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import { Link } from '../lib/router';
import './InstitutionalPages.css';

const newsSlug = '/news/announcing-the-first-resilience-district-incubator-pilot-communities/';
const newsImage = 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1784673574406-0V7OQVVLQ5I1SSIYZ2J7/Captura+de+pantalla+2026-07-21+163918.png?format=1500w';
const publicationImage = 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/f7bf63bb-fa76-4190-8a1f-39205af0f924/Screenshot+2026-02-05+at+10.10.22%E2%80%AFAM.png?format=1500w';
const publicationUrl = 'https://www.rcc.city/s/Goleta-Slough-Resilience-Report.pdf';

function EditorialHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return <header className="institutional-hero editorial-hero"><div className="container institutional-hero__inner"><p className="institutional-kicker">{eyebrow}</p><h1>{title}</h1><p className="institutional-hero__lede">{lede}</p></div></header>;
}

export function NewsPage() {
  return (
    <div className="institutional-page">
      <EditorialHero eyebrow="Press" title="In the News" lede="The latest press coverage, announcements and field updates from Resilient Cities Catalyst." />
      <section className="institutional-section"><div className="container editorial-grid editorial-grid--single">
        <article className="editorial-card">
          <Link to={newsSlug} className="editorial-card__link">
            <div className="editorial-card__image photo"><img src={newsImage} alt="Resilience District Incubator pilot communities" /></div>
            <div className="editorial-card__body"><p className="editorial-card__meta">News · July 15, 2026</p><h2>Announcing the First Resilience District Incubator Pilot Communities</h2><p>California Forward and Resilient Cities Catalyst are turning Resilience Districts from statute into practice through the Resilience District Incubator project.</p><span>Read the announcement <ArrowUpRight weight="bold" aria-hidden="true" /></span></div>
          </Link>
        </article>
      </div></section>
    </div>
  );
}

export function NewsArticlePage() {
  return (
    <article className="institutional-page news-article">
      <header className="article-hero"><div className="container article-hero__inner">
        <Link to="/news/" className="article-back"><ArrowLeft weight="bold" aria-hidden="true" /> Back to News</Link>
        <p className="institutional-kicker">News release · July 15, 2026</p>
        <h1>Announcing the First Resilience District Incubator Pilot Communities</h1>
        <p>In a world of constrained resources, communities need new ways to plan for and invest in the future. Resilience Districts are one path forward.</p>
      </div></header>
      <div className="article-feature photo"><img src={newsImage} alt="Resilience District Incubator pilot communities" /></div>
      <div className="container article-layout">
        <aside><p>Source</p><strong>California Forward (CA FWD)</strong><a href="https://www.globenewswire.com/news-release/2026/07/15/3328037/0/en/announcing-the-first-resilience-district-incubator-pilot-communities.html" target="_blank" rel="noreferrer">View original release <ArrowUpRight weight="bold" aria-hidden="true" /></a></aside>
        <div className="article-body">
          <p className="article-deck">California Forward and Resilient Cities Catalyst are turning Resilience Districts from statute into practice through the Resilience District Incubator project. The Incubator is made possible by the generous support of iAlumbra Philanthropy and is part of the Federal Reserve Bank of New York’s Making Missing Markets Initiative.</p>
          <p><strong>Sacramento, California, July 15, 2026</strong> — Communities are being asked to do more with less. What if they had a way to proactively invest in a safe, climate-resilient future?</p>
          <p>Across the country, local governments face a difficult reality: tighter budgets, competing priorities, and growing pressure on public resources. At the same time, climate impacts like wildfire, drought, flooding, sea level rise, and extreme heat are becoming more frequent and more costly.</p>
          <p>Resilience Districts offer one promising way to support communities in sustained funding, long-term planning, and decision-making that reflects local priorities. In both California and Connecticut, the legislatures have taken action to support communities with district-based models that better align governance, financing, and implementation around long-term resilience goals. In practice, these models remain relatively nascent, shaped by barriers such as limited local capacity, complex governance questions, and the challenge of building a clear investment pathway for resilient development.</p>
          <p>That’s why California Forward (CA FWD) and Resilient Cities Catalyst (RCC) launched the Resilience District Incubator to work directly with communities exploring whether a resilience district could help them better invest in and deliver long-term resilience investments.</p>
          <h2>The first cohort of pilot communities</h2>
          <p>These communities represent a range of geographies, regional economies, climate risks, and governance contexts, but share a goal — to test whether a resilience district can help them proactively invest in becoming safer and more resilient.</p>
          <div className="pilot-columns"><div><h3>California</h3><ul><li>City of San Rafael and County of Marin</li><li>North Coast Resource Partnership</li><li>County of Los Angeles</li></ul></div><div><h3>Connecticut</h3><ul><li>Town of Groton</li><li>City of Bridgeport</li></ul></div></div>
          <p>In Connecticut, the Incubator is being carried out in collaboration with the Connecticut Green Bank (CGB) to explore how resilience district financing could connect with Connecticut’s investment tools. CGB brings deep expertise in structuring innovative financing for public benefit — and a shared interest in understanding what it will take to move climate resilience projects from concept to implementation in Connecticut communities.</p>
          <blockquote>“We can’t one-time grant our way to resilience — and that’s exactly the problem California communities are up against right now. With the state managing structural deficits and federal funding cuts, the Resilience District model offers communities a vehicle for stable, recurring local revenue that can leverage private capital and attract additional public funding. This isn’t about local communities going it alone; it’s about building the right governance structures, financing tools, and technical capacity to generate sustained investment in resilience.”<cite>Nuin-Tara Key, Chief Operating Officer at CA FWD</cite></blockquote>
          <blockquote>“Resilience districts represent a powerful tool for local governments, helping to overcome some of the built-in constraints that have held back progress for decades. Too often, cities and counties are forced to think in one-year budget cycles, even when the challenges they face, like climate risk and infrastructure investment, play out over decades. The Resilience District model unlocks a longer-term horizon. It allows local governments to align their financing with the true scale of their ambitions, turning what are currently fragmented, year-by-year funding decisions into sustained, multi-decade investment strategies.”<cite>Andrew Salkin, Founding Principal at RCC</cite></blockquote>
          <p>Local governments already have many of the ingredients they need: strong project pipelines, clear plans, and a deep understanding of what their communities require. The challenge has been connecting those plans to reliable, long-term funding. By bringing those pieces together, resilience districts create the conditions for local governments to deliver projects that not only reduce risk, but make places more livable, more equitable, and more prosperous over time. RCC is working with a cohort of leading cities and counties ready to think at that scale and help define what this model can achieve.</p>
          <h2>What it means to be a pilot community</h2>
          <p>In 2026, pilot communities will:</p>
          <ul><li>Commit to working collaboratively on solutions to address their most pressing climate risks and priorities.</li><li>Identify key projects and investments needed to protect communities that are feasible to fund and move forward.</li><li>Explore funding and financing options that support resiliency goals over the next 50 years.</li><li>Determine what partnerships would be needed to advance resiliency projects.</li></ul>
          <p>The Resilience District Incubator is a structured learning pathway to help pilot communities understand the resilience district model and assess whether it may be viable or useful in their local context. Through the Incubator, pilot communities will receive direct technical support, input from cross-sector experts, opportunities to learn alongside peer communities, and practical tools to support decision-making, while committing staff time and engagement throughout the program. The Incubator does not provide direct grant funding to participating communities, nor does it require a local funding contribution.</p>
          <p>The goal is for pilot communities to complete the program with a concrete understanding of the steps, considerations, and partnerships needed to evaluate and advance public and private financing tools that support long-term resilience investments.</p>
          <blockquote>“At iAlumbra Philanthropy, we are committed to advancing solutions that align economic and environmental incentives in ways that create lasting, community-centered impact. The Resilience District model reflects this vision by demonstrating how strategic investment can reduce costs, strengthen environmental outcomes, and enable more coordinated, long-term planning across infrastructure systems.”<cite>Chrissy Sollenberger, Director of Special Projects at iAlumbra Philanthropy</cite></blockquote>
          <blockquote>“Every one of Connecticut’s 169 municipalities was built before we understood what climate change would demand of our infrastructure. As we invest in our future, we need to ensure what we build is made to last. Resiliency Improvement Districts provide a practical path to turn years of planning into action by connecting municipalities with capital markets and economic development tools.”<cite>Bryan Garcia, President and CEO of the Connecticut Green Bank</cite></blockquote>
          <h2>Why these pilots matter and what comes next</h2>
          <p>These pilot communities are helping answer a bigger question: how do communities move from recognizing the need for resilience to building the systems required to deliver it?</p>
          <p>The insights generated through this work will help clarify what makes resilience districts hard to launch, what it takes to move them forward, and how similar efforts could take shape in California, Connecticut, and beyond.</p>
          <p>As the pilots move forward, the partners will share what they are learning: what’s working, what’s challenging, and what it means for others exploring similar models.</p>
          <hr />
          <h2>About California Forward</h2>
          <p>California Forward (CA FWD) is a multi-partisan, nonprofit organization building a New California Economy that is sustainable, resilient, and inclusive. It supports economic growth using a regions-up approach, stewarding state resources, and building resilience in the face of a changing economy and climate. This work is done in collaboration with diverse partners—including the California Stewardship Network and leaders from business, community, government, labor, and more.</p>
          <div className="article-contact"><h2>Media contact</h2><p>Sarah Walsh<br />California Forward (CA FWD)<br /><a href="tel:+19164910022">916-491-0022</a><br /><a href="mailto:sarah@cafwd.org">sarah@cafwd.org</a></p></div>
        </div>
      </div>
    </article>
  );
}

export function PublicationsPage() {
  return (
    <div className="institutional-page">
      <EditorialHero eyebrow="Knowledge" title="Publications" lede="Research, tools and practical guidance developed with communities and partners." />
      <section className="institutional-section"><div className="container editorial-grid editorial-grid--single">
        <article className="editorial-card publication-card">
          <a href={publicationUrl} target="_blank" rel="noreferrer" className="editorial-card__link">
            <div className="editorial-card__image editorial-card__image--publication"><img src={publicationImage} alt="Cover of the Goleta Slough Coastal Area report" /></div>
            <div className="editorial-card__body"><p className="editorial-card__meta">Report</p><h2>Resilience in the Goleta Slough Coastal Area: Synthesizing Climate Hazards &amp; Regional Priorities</h2><p>By Resilient Cities Catalyst, Integral Consulting LLC, Heal the Ocean, Tidal Influence, and UCSB Ocean &amp; Coastal Policy Center.</p><span>Open the report <ArrowUpRight weight="bold" aria-hidden="true" /></span></div>
          </a>
        </article>
      </div></section>
    </div>
  );
}
