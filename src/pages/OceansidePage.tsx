import { ArrowDown } from '@phosphor-icons/react';
import { Button } from '../components/ui/Button';
import { MetadataTiles } from '../components/ui/MetadataTiles';
import './CaliforniaAltPage.css';
import './OceansidePage.css';

const snapshot = [
  ['Location', 'Oceanside, California — pilot site between Tyson Street Park and Wisconsin Avenue'],
  ['Program period', '2021–present; RE:BEACH design competition launched in 2023'],
  ['Focus areas', 'Coastal resilience; beach erosion; sand retention and nourishment; sea-level rise adaptation; community engagement; resilience finance; regional replication'],
  ['Core partners', 'City of Oceanside; Resilient Cities Catalyst (RCC); GHD; International Coastal Management (ICM); community, scientific, and coastal advisory partners'],
  ['Funding / regional partners', 'California Coastal Commission; San Diego Association of Governments (SANDAG); additional public and philanthropic support to be confirmed'],
  ['Project type', 'Coastal resilience pilot; international design competition; engineering and environmental review; monitoring and adaptive management'],
  ['Geographic reach', 'Oceanside pilot with regional relevance for San Diego County and potential application across California and other eroding coastlines'],
  ['RCC role', 'Strategic partner, convener, process designer, community engagement lead, and implementation advisor'],
];

const approach = [
  {
    title: '1. Source and Select Innovative Solutions',
    body: 'RCC and the City structured an international design competition to identify feasible, multi-benefit approaches beyond traditional groins and short-lived nourishment. Three global design teams developed concepts through iterative rounds, with input from technical experts, a jury and advisory panel, City staff, and community members. The process culminated in the selection of ICM’s “Living Speed Bumps” concept and its advancement by the Oceanside City Council.',
  },
  {
    title: '2. Co-Design with the Community',
    body: 'Public engagement is integrated into every phase rather than treated as a final approval step. Workshops, webinars, surveys, stakeholder briefings, and community-input summaries have informed design concepts, siting criteria, headland amenities, public access, and project tradeoffs. This continuous feedback loop helps align technical performance with how residents and visitors use and value the beach.',
  },
  {
    title: '3. Test, Refine, and Monitor Performance',
    body: 'The project team is using numerical modeling, physical wave-basin testing, coastal surveys, sediment analysis, wave and current measurements, surf-quality evaluation, and beach-use monitoring to refine the design and establish a baseline. More than 45 reef configurations have been assessed through over 900 simulations, and a 1:35 physical model has been tested at Oregon State University. Monitoring will continue after implementation and feed an adaptive management plan.',
  },
  {
    title: '4. Build an Implementation and Replication Pathway',
    body: 'RE:BEACH combines pilot design with environmental review, sand-sourcing analysis, construction planning, funding development, and future phasing. SANDAG’s selection of RE:BEACH as the region’s sand-retention pilot strengthens coordination and positions the project to inform future regional shoreline planning. If successful, the approach can be expanded within Oceanside and offer practical lessons for other coastal communities.',
  },
];

const impact = [
  ['3', 'International design teams engaged in the competition'],
  ['15', 'Members of the jury, supported by additional advisory experts'],
  ['3', 'Major public design workshops held in 2023, plus ongoing webinars, surveys, and stakeholder outreach'],
  ['45+', 'Artificial reef configurations evaluated'],
  ['900+', 'Numerical simulations completed'],
  ['$1.835M', 'California Coastal Commission grant awarded for baseline monitoring and coastal management implementation'],
  ['900,000 cubic yards', 'Approximate initial sand nourishment need identified in the sand distribution study'],
  ['500,000 cubic yards', 'Potential maintenance nourishment need every 3–5 years'],
  ['1', 'Regional sand-retention pilot designation through SANDAG'],
];

const accomplishments = [
  'Completed an international design competition that connected global coastal expertise with Oceanside’s local priorities.',
  'Secured unanimous City Council approval to advance the “Living Speed Bumps” concept and later approve the pilot location.',
  'Established Tyson Street Park and Wisconsin Avenue as the headland locations, with an offshore reef between them.',
  'Advanced the project into engineering design, environmental review, numerical modeling, and physical wave testing.',
  'Secured a $1.835 million California Coastal Commission grant to strengthen baseline monitoring and implementation readiness.',
  'Earned designation as SANDAG’s regional sand-retention pilot, connecting local experimentation with regional shoreline planning.',
  'Created an ongoing public-engagement and transparent monitoring model that can inform adaptive management and future phases.',
];

const spotlights = [
  {
    title: 'International Design Competition',
    description: 'A three-team global competition invited coastal engineers, designers, landscape architects, and scientists to develop innovative approaches for retaining sand in Oceanside. Concepts were refined through technical review and community feedback before a jury recommended a preferred design.',
    why: 'It created a credible alternative to business-as-usual coastal infrastructure and demonstrated how transparent design competition can expand the solution set available to local governments.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1766439142742-5VC63K6DMSAN77DR49GB/Copy+of+ReBeach-JuryDeliberation002.JPG',
  },
  {
    title: 'Living Speed Bumps Pilot',
    description: 'The selected concept pairs two artificial headlands with an offshore artificial reef and beach nourishment. The structures are intended to stabilize back-beach sand, reduce erosive wave energy, and encourage sand deposition while maintaining public access and responding to surf and ecological considerations.',
    why: 'The pilot tests a hybrid approach that could make nourishment more durable, reduce recurring losses, and provide evidence for future coastal restoration investments.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1766439153777-4C740JTIBC8DQ8MHS545/ICM+Oceanside+RE+BEACH+Project+Narrative+%281%29-2+%28dragged%29.png',
  },
  {
    title: 'Monitoring and Adaptive Management',
    description: 'The project is establishing detailed baseline conditions and testing performance through numerical modeling, a physical wave-basin model, shoreline and bathymetric surveys, sediment analysis, wave and current monitoring, surf assessments, and beach-use surveys. Results will remain publicly accessible.',
    why: 'A transparent, long-term evidence base allows the City to adjust the project if actual conditions differ from modeled expectations and makes lessons transferable to other communities.',
    image: 'https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1766439414947-HWP7DULZDVP038IBANCH/ICM+Oceanside+RE+BEACH+Project+Narrative+%281%29-4+%28dragged%29.png',
  },
];

const partners = [
  ['City of Oceanside', 'Project owner and local government lead; sets policy direction, coordinates municipal decision-making, leads permitting and implementation, and ensures alignment with community priorities.'],
  ['Resilient Cities Catalyst (RCC)', 'Strategic partner and process designer; structured and facilitated the design competition, convened experts and community stakeholders, supported evaluation and engagement, and helps connect the pilot to resilience strategy, funding, communications, and regional learning.'],
  ['GHD', 'Engineering and programmatic design lead for the current phase, including technical studies, design refinement, siting support, environmental analysis, and future phasing.'],
  ['International Coastal Management (ICM)', 'Originator of the selected “Living Speed Bumps” concept and coastal design partner supporting engineering refinement.'],
  ['SANDAG', 'Regional partner linking RE:BEACH to regional beach sand and shoreline-preservation planning, environmental coordination, funding advocacy, and potential alignment with a future regional beach sand project.'],
  ['California Coastal Commission and other agencies', 'Funding, regulatory, scientific, and coastal-management partners supporting monitoring, environmental review, and implementation readiness.'],
  ['Residents, businesses, surfers, environmental organizations, and technical advisors', 'Provide local knowledge, evaluate tradeoffs, help shape siting and design, and strengthen accountability and community legitimacy.'],
];

function DataTable({ columns, rows, className = '' }: { columns: [string, string]; rows: string[][]; className?: string }) {
  return (
    <div className={`oceanside-table-wrap ${className}`}>
      <table className="oceanside-table">
        <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <div className="cali-section-heading">{eyebrow && <p className="cali-kicker">{eyebrow}</p>}<h2>{title}</h2></div>;
}

export function OceansidePage() {
  return (
    <div className="california-alt oceanside-page">
      <section className="cali-hero oceanside-hero" aria-labelledby="oceanside-title">
        <img src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/0b8cadb3-71d4-4b06-8a10-cbb068a8324e/Oceanside.webp" alt="Oceanside coastline and beach" />
        <div className="cali-hero__veil" aria-hidden="true" />
        <div className="container cali-hero__content">
          <p className="cali-kicker">Project description</p>
          <h1 id="oceanside-title">RE:BEACH Oceanside</h1>
          <p>Restoring and retaining sand through global design innovation, community leadership, and science-based coastal resilience.</p>
          <Button to="#snapshot" showIcon={false}>Explore the project <ArrowDown weight="bold" aria-hidden="true" /></Button>
        </div>
      </section>

      <section id="snapshot" className="cali-section cali-snapshot oceanside-snapshot">
        <div className="container">
          <h2>Program snapshot</h2>
          <MetadataTiles items={snapshot.map(([label, value]) => ({ label, value }))} />
        </div>
      </section>

      <section className="cali-section oceanside-prose oceanside-overview">
        <div className="container oceanside-prose__grid">
          <SectionTitle title="Program Overview" />
          <div className="oceanside-prose__copy">
            <p>RE:BEACH is the City of Oceanside’s primary coastal resilience initiative, created to address decades of chronic beach erosion and protect the shoreline as a defining environmental, cultural, recreational, and economic asset. Rather than relying only on repeated sand nourishment or conventional hard structures, the initiative combines sand replenishment with an innovative retention pilot designed to keep sand on the beach longer and improve the durability of future investments.</p>
            <p>The initiative began with a global search for solutions that could respond to Oceanside’s local coastal conditions and community priorities. In 2023, the City and RCC organized an international design competition that brought three multidisciplinary teams into a transparent, community-centered process. A jury and advisory panel of scientists, coastal specialists, local leaders, and community representatives evaluated the proposals for effectiveness, feasibility, environmental performance, public benefit, and regional compatibility.</p>
            <p>The selected “Living Speed Bumps” concept, developed by International Coastal Management, includes two rounded artificial headlands and an offshore artificial reef, supported by beach nourishment. The pilot is now advancing through engineering refinement, environmental review, physical and numerical modeling, baseline monitoring, public engagement, and implementation planning. What makes RE:BEACH distinctive is the way it links global innovation with local knowledge, rigorous science, ongoing public participation, and a pathway for regional learning and replication.</p>
          </div>
        </div>
        <div className="container oceanside-overview__images">
          <div className="photo"><img src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1766439144938-J9XF6W7ZFVMKQN0Y7I23/Copy+of+DSC02260.JPG" alt="Community members participating in RE:BEACH" loading="lazy" /></div>
          <div className="photo"><img src="https://images.squarespace-cdn.com/content/v1/5dba154a6b94a433b56a2b1d/1766439351621-6Y5A4DE3GLXDQPCTOA0H/Block.jpg" alt="Oceanside shoreline conditions" loading="lazy" /></div>
        </div>
      </section>

      <section className="cali-challenge oceanside-document-challenge">
        <div className="container oceanside-prose__grid">
          <SectionTitle title="The Challenge" />
          <div className="oceanside-prose__copy">
            <p>Oceanside’s beaches have narrowed over decades as harbor construction, altered sediment movement, storms, sea-level rise, and other coastal processes have disrupted the natural supply and retention of sand. Past nourishment efforts temporarily widened the beach, but much of the placed sand moved away quickly. Without a more durable approach, erosion threatens public access, recreation, habitat, shoreline infrastructure, and the city’s tourism-dependent economy.</p>
            <p>The challenge is not purely technical. Oceanside’s coast supports surfers, residents, visitors, businesses, public agencies, and environmental interests that may value the shoreline differently. Any intervention must respond to concerns about surf quality, beach ecology, visual character, navigation, public access, construction impacts, and potential effects on neighboring stretches of coast. This requires a decision-making process that is scientifically credible and trusted by the community.</p>
            <p>The project must also overcome governance and financing barriers common to coastal adaptation: fragmented jurisdictions, complex permitting, high construction and maintenance costs, uncertainty about long-term performance, and the difficulty of testing unfamiliar approaches. RE:BEACH addresses these barriers by treating the project as a monitored pilot, building regional partnerships, and creating evidence that can guide future coastal investments.</p>
          </div>
        </div>
      </section>

      <section className="cali-section oceanside-approach-doc">
        <div className="container"><SectionTitle title="Our Approach" /><div className="oceanside-approach-doc__grid">{approach.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div>
      </section>

      <section className="cali-section oceanside-impact-doc">
        <div className="container">
          <SectionTitle title="Impact at a Glance" />
          <DataTable columns={['Metric', 'Publicly reported indicator']} rows={impact} className="oceanside-impact-table" />
          <p className="oceanside-note">Note: These are public project indicators, not a substitute for RCC’s internal MEL reporting. Stakeholder totals, partner totals, funding leveraged, and beneficiary estimates should be added from RCC records.</p>
        </div>
      </section>

      <section className="cali-section oceanside-accomplishments">
        <div className="container oceanside-prose__grid"><SectionTitle title="Key Accomplishments" /><ul>{accomplishments.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="cali-section oceanside-spotlights">
        <div className="container">
          <SectionTitle title="Key Initiatives / Community Spotlights" />
          <div className="oceanside-spotlights__list">{spotlights.map((item, index) => <article key={item.title}><div className="oceanside-spotlights__image"><img src={item.image} alt={item.title} loading="lazy" /></div><div><span>0{index + 1}</span><h3>{item.title}</h3><p><strong>Description:</strong> {item.description}</p><p><strong>Why it matters:</strong> {item.why}</p></div></article>)}</div>
        </div>
      </section>

      <section className="cali-section oceanside-partnership">
        <div className="container"><SectionTitle title="Partnership Model" /><DataTable columns={['Partner', 'Role']} rows={partners} /></div>
      </section>

      <section className="cali-section oceanside-prose">
        <div className="container oceanside-prose__grid">
          <SectionTitle title="Partnership Narrative" />
          <div className="oceanside-prose__copy"><p>RE:BEACH is organized around shared responsibility. The City provides public leadership and accountability; RCC designs and facilitates the collaborative process; engineering and coastal specialists test and refine the intervention; regional and state partners connect the pilot to funding, permitting, and broader shoreline strategy; and residents and shoreline users help define what success should look like.</p><p>RCC’s role is especially important at the intersection of technical innovation and public decision-making. By structuring the competition, convening a multidisciplinary jury and advisory network, translating technical choices into accessible engagement, and helping maintain momentum across phases, RCC supports the City in moving from a difficult coastal problem toward a feasible and community-supported pilot.</p></div>
        </div>
      </section>

      <section className="cali-section oceanside-why-doc">
        <div className="container oceanside-prose__grid">
          <SectionTitle title="Why It Matters" />
          <div className="oceanside-prose__copy"><p>Beaches are protective infrastructure as well as public spaces. They buffer waves, support habitats, provide recreation and access, reinforce community identity, and sustain businesses and tourism. As erosion and sea-level rise accelerate, the loss of sandy shoreline can create cascading environmental, social, and fiscal impacts. Oceanside therefore needs an approach that protects the beach itself, not only the property behind it.</p><p>RE:BEACH is noteworthy because it treats coastal adaptation as a design, governance, and learning challenge. The initiative does not assume that a single technical structure will solve every problem. Instead, it combines nourishment, retention, monitoring, community input, environmental review, and adaptive management in a pilot that can be evaluated openly over time.</p><p>The project’s broader value lies in replication. Coastal communities across California face similar erosion, sediment, permitting, and financing constraints. By testing a new model in real conditions and documenting its performance, Oceanside can help reduce uncertainty for future investments and provide a practical pathway for communities seeking more durable, publicly supported coastal resilience solutions.</p></div>
        </div>
      </section>

      <section className="cali-section oceanside-looking-doc">
        <div className="container oceanside-prose__grid"><SectionTitle title="Looking Ahead" /><div className="oceanside-prose__copy"><p>The project team will continue refining the reef and headland designs through modeling, engineering, community engagement, environmental review, and permitting. Near-term work includes completing baseline monitoring, evaluating materials and amenities, advancing the environmental process, confirming sand sourcing and delivery strategies, and developing construction and financing pathways. Over the longer term, the pilot’s measured performance will determine adaptive actions and whether the approach should be expanded along Oceanside’s coastline or applied in other communities.</p></div></div>
      </section>
    </div>
  );
}
