import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowCounterClockwise, DownloadSimple, MagnifyingGlass, Minus, Plus } from '@phosphor-icons/react';
import geistRegularUrl from '../assets/fonts/Geist-Regular.woff2?url';
import geistBoldUrl from '../assets/fonts/Geist-Bold.woff2?url';
import './AustinFluvialDiagramPage.css';

const GOALS = [
  "Adopt state and federal legislative priorities to guide the City's legislative work, strategically position the city in advancing the interests of Austin, and communicate to stakeholders the City's policy priorities for the next biennium.",
  "Develop an Economic Development Roadmap that sets clear short- and long-term strategies and goals, and defines what success looks like for Austin's economy.",
  'Prioritize and scope shared services projects and launch implementation of three high-impact service improvements to advance citywide efficiency.',
  'Implement the Austin FIRST Mental Health Pilot (Austin Field Integrated Response Team) in the designated geographic zone during targeted hours. Collect data on response times, patient outcomes, and team coordination.',
  'Finalize and implement the Human Rights Framework, incorporating community and departmental feedback, baseline audit results, strategic recommendations and implementation priorities.',
  'Pilot an expedited site plan review process, reduce building plan review timelines, and leverage third-party services to streamline and scale development review processes.',
  'Streamline and amend development code and criteria to reduce administrative burdens, shorten review timelines, and improve clarity and consistency, supporting responsible growth and community goals.',
  'Establish a citywide facility condition assessment (FCA) contract to standardize evaluations, generate reliable Facility Condition Index (FCI) data, and guide long-term capital planning across all City facilities.',
  'Launch update to the 10-Year Austin Strategic Housing Blueprint in order to align citywide housing goals, policies, and implementation strategies with current market conditions, equity priorities, and community needs.',
  "Continue the multi-year update of the city's comprehensive plan, initiating community-driven engagement to inform the development of a Place Types Map framework that supports citywide land use planning. Concurrently, establish an interdepartmental collaboration to begin streamlining and modernizing policies and citywide goals to guide equitable, holistic decision-making across Austin.",
  "Complete and publish Austin Arts, Culture, Music, and Entertainment's first strategic plan to guide the growth and evolution of Austin's creative sectors.",
  'Develop a bond decision framework, including a list of prospective bond projects that is aligned with City Council priorities, responsive to community needs, and developed through an inclusive process that incorporates robust community engagement and recommendations from the 2026 Bond Election Advisory Task Force.',
  'Develop and implement a Rapid Rehousing Program model that quickly connects participants to housing and supports their long-term stability.',
  "Develop a Five-Year Strategic Plan for the Austin Housing Finance Corporation in order to establish a vision, priorities, and investment strategy that maximize AHFC's impact in addressing Austin's most critical housing needs.",
  'Enter into a Design & Construction Interlocal Agreement — to include design, permitting and betterments commitments for Austin Light Rail — with Austin Transit Partnership.',
  'Establish a new labor agreement with the Austin Firefighters Association.',
  'Execute an Airline Use and Lease Agreement to support continued operations and revenue generation at the airport.',
  "Advance phase two of the City's compensation recalibration to identify updated methods for establishing and modifying pay, update the classification and pay structure, and conduct a comprehensive citywide market review.",
  'Develop the Electric System Resiliency Plan to create a stronger, smarter and more reliable electric system for the Austin Energy service territory.',
  'Establish a Climate Revolving Fund with partner departments (Building Services, Austin Energy, and Financial Services) to finance, capture, and reinvest in energy savings projects.',
  'Develop a comprehensive crime reduction plan that incorporates evidence-based crime science principles including Place Network Investigations (PNI), focused deterrence, and hot-spot policing.',
] as const;

type Lever = readonly [theme: string, lever: string, goals: readonly number[]];

const LEVERS: readonly Lever[] = [
  ['Health Access and Resources', 'Uninsured Rate', [0]],
  ['Health Access and Resources', 'Enrollment in Early Education', [1, 2]],
  ['Health Access and Resources', 'Life Expectancy', [3]],
  ['Wellbeing and Activity', 'People with Disabilities', [4]],
  ['Wellbeing and Activity', 'Seniors with Ambulatory Disabilities', [4]],
  ['Wellbeing and Activity', 'Low Physical Activity', [5, 6, 7, 8, 9]],
  ['Income and Employment', 'Median Household Income', [10, 11, 1, 0, 12, 8, 13, 14, 15]],
  ['Income and Employment', 'Underemployment Rate', [10, 16, 11, 1, 0, 12, 8, 13, 17, 14]],
  ['Income and Employment', 'People Living in Poverty', [1, 0, 12, 8, 13, 3]],
  ['Household Stability and Cost Burdens', 'Eviction Filing Rate', [12, 8, 13]],
  ['Household Stability and Cost Burdens', 'Household Support Risk Score', [3, 12, 8, 13, 1]],
  ['Household Stability and Cost Burdens', 'Energy Burden', [18, 1, 19]],
  ['Education, Language, and Digital Access', 'Limited English-Speaking Households', [4]],
  ['Education, Language, and Digital Access', 'Households with No Internet', [1, 11]],
  ['Education, Language, and Digital Access', 'Less Than High School Education', [1]],
  ['Environment and Neighborhood', 'Institutional Group Quarters', [3, 20]],
  ['Environment and Neighborhood', 'Persistent Poverty', [1, 0, 12, 8, 13, 3]],
  ['Environment and Neighborhood', 'Heat Disparity', [11, 5, 6, 1, 7, 8]],
] as const;

const COLORS = ['#44499C', '#008743', '#F83125', '#009CDE', '#9F3CC9', '#8F5201'];
const THEME_TEXT_COLORS = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#22254E', '#FFFFFF', '#FFFFFF'];
const W = 1900;
const THEME_X = 48;
const LEVER_X = 600;
const GOAL_X = 1450;

type NodeType = 'theme' | 'lever' | 'goal';
type Selection = { type: NodeType; index: number } | null;

function lines(text: string, max = 34, maxLines = Number.POSITIVE_INFINITY) {
  const words = text.split(' ');
  const result: string[] = [];
  let line = '';
  for (const word of words) {
    if (`${line} ${word}`.trim().length > max && line) {
      result.push(line);
      line = word;
      if (result.length === maxLines - 1) break;
    } else line = `${line} ${word}`.trim();
  }
  if (result.length < maxLines && line) result.push(line);
  const consumed = result.join(' ').length;
  if (Number.isFinite(maxLines) && consumed < text.length - 2) result[result.length - 1] = `${result[result.length - 1].replace(/[.,;:]$/, '')}…`;
  return result;
}

const GOAL_LINE_HEIGHT = 17;
const GOAL_GAP = 14;
const GOAL_TOP = 86;
const GOAL_LAYOUTS = GOALS.reduce<Array<{ y: number; height: number; lines: string[] }>>((layouts, goal) => {
  const wrapped = lines(goal, 47);
  const height = Math.max(58, wrapped.length * GOAL_LINE_HEIGHT + 28);
  const y = layouts.length ? layouts[layouts.length - 1].y + layouts[layouts.length - 1].height + GOAL_GAP : GOAL_TOP;
  layouts.push({ y, height, lines: wrapped });
  return layouts;
}, []);
const H = Math.max(1640, GOAL_LAYOUTS[GOAL_LAYOUTS.length - 1].y + GOAL_LAYOUTS[GOAL_LAYOUTS.length - 1].height + 86);

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function fontDataUrl(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function AustinFluvialDiagramPage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const [view, setView] = useState({ scale: 1, x: 22, y: 18 });
  const [selection, setSelection] = useState<Selection>(null);
  const [themeFilter, setThemeFilter] = useState<number | null>(null);
  const [query, setQuery] = useState('');

  const themes = useMemo(() => Array.from(new Set(LEVERS.map((lever) => lever[0]))), []);
  const themeIndex = (name: string) => themes.indexOf(name);
  const leverY = (index: number) => 92 + index * ((H - 210) / (LEVERS.length - 1));
  const goalY = (index: number) => GOAL_LAYOUTS[index].y;
  const goalHeight = (index: number) => GOAL_LAYOUTS[index].height;
  const themeBounds = (index: number) => {
    const members = LEVERS.map((lever, i) => ({ lever, i })).filter(({ lever }) => themeIndex(lever[0]) === index);
    const first = leverY(members[0].i) - 22;
    const last = leverY(members[members.length - 1].i) + 48;
    return { y: first, height: last - first };
  };

  const related = (type: NodeType, index: number) => {
    if (!selection) return true;
    if (selection.type === type && selection.index === index) return true;
    if (selection.type === 'theme') {
      if (type === 'lever') return themeIndex(LEVERS[index][0]) === selection.index;
      if (type === 'goal') return LEVERS.some((lever) => themeIndex(lever[0]) === selection.index && lever[2].includes(index));
    }
    if (selection.type === 'lever') {
      if (type === 'theme') return themeIndex(LEVERS[selection.index][0]) === index;
      if (type === 'goal') return LEVERS[selection.index][2].includes(index);
    }
    if (selection.type === 'goal') {
      if (type === 'lever') return LEVERS[index][2].includes(selection.index);
      if (type === 'theme') return LEVERS.some((lever) => themeIndex(lever[0]) === index && lever[2].includes(selection.index));
    }
    return false;
  };

  const queryMatch = (text: string) => !query || text.toLowerCase().includes(query.toLowerCase());
  const nodeOpacity = (type: NodeType, index: number, text: string) => (related(type, index) && queryMatch(text) ? 1 : 0.16);
  const visibleForThemeFilter = (type: NodeType, index: number) => {
    if (themeFilter === null) return true;
    if (type === 'theme') return index === themeFilter;
    if (type === 'lever') return themeIndex(LEVERS[index][0]) === themeFilter;
    return LEVERS.some((lever) => themeIndex(lever[0]) === themeFilter && lever[2].includes(index));
  };

  const selectedText = selection?.type === 'theme'
    ? themes[selection.index]
    : selection?.type === 'lever'
      ? LEVERS[selection.index][1]
      : selection?.type === 'goal'
        ? GOALS[selection.index]
        : '';

  const zoom = (factor: number) => setView((current) => ({ ...current, scale: Math.min(6, Math.max(0.42, current.scale * factor)) }));

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleWheel = (event: globalThis.WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const bounds = svg.getBoundingClientRect();
      const cursorX = (event.clientX - bounds.left) * (W / bounds.width);
      const cursorY = (event.clientY - bounds.top) * (H / bounds.height);
      const factor = event.deltaY > 0 ? 0.78 : 1.28;

      setView((current) => {
        const nextScale = Math.min(6, Math.max(0.42, current.scale * factor));
        const worldX = (cursorX - current.x) / current.scale;
        const worldY = (cursorY - current.y) / current.scale;
        return {
          scale: nextScale,
          x: cursorX - worldX * nextScale,
          y: cursorY - worldY * nextScale,
        };
      });
    };

    svg.addEventListener('wheel', handleWheel, { passive: false });
    return () => svg.removeEventListener('wheel', handleWheel);
  }, []);
  const onPointerDown = (event: ReactPointerEvent<SVGSVGElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { x: event.clientX, y: event.clientY, panX: view.x, panY: view.y };
  };
  const onPointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (!dragRef.current) return;
    setView((current) => ({ ...current, x: dragRef.current!.panX + event.clientX - dragRef.current!.x, y: dragRef.current!.panY + event.clientY - dragRef.current!.y }));
  };
  const onPointerUp = () => { dragRef.current = null; };

  const svgBlob = async () => {
    if (!svgRef.current) return null;
    const [regularFont, boldFont] = await Promise.all([fontDataUrl(geistRegularUrl), fontDataUrl(geistBoldUrl)]);
    const clone = svgRef.current.cloneNode(true) as SVGSVGElement;

    const exportThemeWidth = 330;
    const exportThemeLines = themes.map((theme) => lines(theme, 21, 4));
    const exportLeverWidth = 380;
    const exportGoalWidth = 1700;
    const exportGoalLines = GOALS.map((goal) => lines(goal, 130));
    const compactLineHeight = 26;
    const compactGoalGap = 5;
    const compactGoals = exportGoalLines.reduce<Array<{ y: number; height: number }>>((layouts, goalLines) => {
      const height = Math.max(52, goalLines.length * compactLineHeight + 20);
      const y = layouts.length ? layouts[layouts.length - 1].y + layouts[layouts.length - 1].height + compactGoalGap : 18;
      layouts.push({ y, height });
      return layouts;
    }, []);
    const compactHeight = compactGoals[compactGoals.length - 1].y + compactGoals[compactGoals.length - 1].height + 18;
    const compactLeverY = (index: number) => 8 + index * ((compactHeight - 62) / (LEVERS.length - 1));
    const compactThemeBounds = (index: number) => {
      const members = LEVERS.map((lever, i) => ({ lever, i })).filter(({ lever }) => themeIndex(lever[0]) === index);
      const first = compactLeverY(members[0].i) + 2;
      const last = compactLeverY(members[members.length - 1].i) + 38;
      return { y: first, height: last - first };
    };

    const exportWidth = 2400;
    const exportHeight = 1350;
    const headerHeight = 106;
    const margin = 12;
    const exportContentStartX = THEME_X;
    const exportContentWidth = GOAL_X + exportGoalWidth - exportContentStartX;
    const fitScale = Math.min((exportWidth - margin * 2) / exportContentWidth, (exportHeight - headerHeight - margin) / compactHeight);
    const offsetX = margin - exportContentStartX * fitScale;
    const offsetY = headerHeight + (exportHeight - headerHeight - compactHeight * fitScale) / 2;

    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(exportWidth));
    clone.setAttribute('height', String(exportHeight));
    clone.setAttribute('viewBox', `0 0 ${exportWidth} ${exportHeight}`);
    clone.setAttribute('style', "font-family:'Geist',Arial,sans-serif");
    clone.querySelector('.austin-diagram__viewport')?.setAttribute('transform', `translate(${offsetX} ${offsetY}) scale(${fitScale})`);
    clone.querySelectorAll('.austin-diagram__node').forEach((node) => {
      node.setAttribute('opacity', '1');
      node.removeAttribute('display');
    });
    clone.querySelectorAll('path').forEach((path) => {
      path.removeAttribute('display');
      path.setAttribute('stroke-opacity', '0.42');
    });

    clone.querySelectorAll<SVGGElement>('[data-node-kind="theme"]').forEach((node) => {
      const index = Number(node.dataset.nodeIndex);
      const bounds = compactThemeBounds(index);
      const rect = node.querySelector('rect');
      const texts = node.querySelectorAll('text');
      rect?.setAttribute('y', String(bounds.y));
      rect?.setAttribute('height', String(bounds.height));
      rect?.setAttribute('width', String(exportThemeWidth));
      if (texts[0]) {
        texts[0].replaceChildren();
        texts[0].setAttribute('y', String(bounds.y + 25));
        texts[0].setAttribute('font-size', '23');
        exportThemeLines[index].forEach((line, lineIndex) => {
          const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          tspan.textContent = line;
          tspan.setAttribute('x', String(THEME_X + 18));
          tspan.setAttribute('dy', lineIndex ? '24' : '0');
          texts[0].appendChild(tspan);
        });
      }
      texts[1]?.setAttribute('y', String(bounds.y + bounds.height - 8));
      texts[1]?.setAttribute('font-size', '15.5');
    });

    clone.querySelectorAll<SVGGElement>('[data-node-kind="lever"]').forEach((node) => {
      const index = Number(node.dataset.nodeIndex);
      const y = compactLeverY(index);
      const rects = node.querySelectorAll('rect');
      rects.forEach((rect) => rect.setAttribute('y', String(y)));
      rects[0]?.setAttribute('width', String(exportLeverWidth));
      node.querySelector('text')?.setAttribute('y', String(y + 20));
      node.querySelector('text')?.setAttribute('font-size', '18.5');
    });

    clone.querySelectorAll<SVGGElement>('[data-node-kind="goal"]').forEach((node) => {
      const index = Number(node.dataset.nodeIndex);
      const layout = compactGoals[index];
      const rect = node.querySelector('rect');
      const texts = node.querySelectorAll('text');
      const circle = node.querySelector('circle');
      rect?.setAttribute('y', String(layout.y));
      rect?.setAttribute('height', String(layout.height));
      rect?.setAttribute('width', String(exportGoalWidth));
      if (texts[0]) {
        texts[0].replaceChildren();
        texts[0].setAttribute('y', String(layout.y + 25));
        texts[0].setAttribute('font-size', '21.6');
        exportGoalLines[index].forEach((line, lineIndex) => {
          const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          tspan.textContent = line;
          tspan.setAttribute('x', String(GOAL_X + 18));
          tspan.setAttribute('dy', lineIndex ? String(compactLineHeight) : '0');
          texts[0].appendChild(tspan);
        });
      }
      circle?.setAttribute('cx', String(GOAL_X + exportGoalWidth - 18));
      circle?.setAttribute('cy', String(layout.y + 18));
      texts[1]?.setAttribute('x', String(GOAL_X + exportGoalWidth - 18));
      texts[1]?.setAttribute('y', String(layout.y + 23));
      texts[1]?.setAttribute('font-size', '14.4');
    });

    clone.querySelectorAll<SVGPathElement>('[data-link-kind="theme"]').forEach((path) => {
      const leverIndex = Number(path.dataset.leverIndex);
      const theme = themeIndex(LEVERS[leverIndex][0]);
      const bounds = compactThemeBounds(theme);
      const targetY = compactLeverY(leverIndex) + 20;
      path.setAttribute('d', `M ${THEME_X + exportThemeWidth} ${bounds.y + bounds.height / 2} C 440 ${bounds.y + bounds.height / 2}, 475 ${targetY}, ${LEVER_X} ${targetY}`);
    });

    clone.querySelectorAll<SVGPathElement>('[data-link-kind="goal"]').forEach((path) => {
      const leverIndex = Number(path.dataset.leverIndex);
      const goalIndex = Number(path.dataset.goalIndex);
      const sourceY = compactLeverY(leverIndex) + 20;
      const targetY = compactGoals[goalIndex].y + compactGoals[goalIndex].height / 2;
      path.setAttribute('d', `M ${LEVER_X + exportLeverWidth} ${sourceY} C 1110 ${sourceY}, 1240 ${targetY}, ${GOAL_X} ${targetY}`);
    });

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `@font-face{font-family:Geist;src:url('${regularFont}') format('woff2');font-weight:400}@font-face{font-family:Geist;src:url('${boldFont}') format('woff2');font-weight:700}text{font-family:Geist,Arial,sans-serif}`;
    defs.appendChild(style);
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', '100%'); bg.setAttribute('height', '100%'); bg.setAttribute('fill', '#F7F6F5');
    clone.insertBefore(bg, clone.firstChild);
    clone.insertBefore(defs, bg.nextSibling);

    const addExportText = (value: string, x: number, y: number, size: number, weight: number, fill = '#22254E') => {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.textContent = value;
      text.setAttribute('x', String(x)); text.setAttribute('y', String(y));
      text.setAttribute('font-size', String(size)); text.setAttribute('font-weight', String(weight)); text.setAttribute('fill', fill);
      clone.appendChild(text);
    };
    addExportText("Austin's economic mobility levers", margin, 42, 32.4, 700);
    addExportText('6 subthemes · 18 mobility levers · 21 annual goals · 65 connections', margin, 73, 16.8, 400, '#636262');
    addExportText('SUBTHEMES', offsetX + THEME_X * fitScale, 98, 14.4, 700, '#44499C');
    addExportText('MOBILITY LEVERS', offsetX + LEVER_X * fitScale, 98, 14.4, 700, '#44499C');
    addExportText("CITY MANAGER'S TOP 25 GOALS FOR FISCAL YEAR 2026", offsetX + GOAL_X * fitScale, 98, 14.4, 700, '#44499C');
    return new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml;charset=utf-8' });
  };
  const exportSvg = async () => { const blob = await svgBlob(); if (blob) downloadBlob(blob, 'austin-economic-mobility-fluvial-16x9.svg'); };
  const exportPng = async () => {
    const blob = await svgBlob();
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas'); canvas.width = 4800; canvas.height = 2700;
      const context = canvas.getContext('2d');
      if (!context) return;
      context.drawImage(image, 0, 0, 4800, 2700);
      canvas.toBlob((png) => png && downloadBlob(png, 'austin-economic-mobility-fluvial-16x9.png'), 'image/png');
      URL.revokeObjectURL(url);
    };
    image.src = url;
  };

  return (
    <article className="austin-diagram-page">
      <header className="austin-diagram__intro">
        <div>
          <p className="austin-diagram__eyebrow">City Manager’s Top 25 Goals for Fiscal Year 2026 - Economic Mobility</p>
          <h1>How Austin’s mobility levers connect to citywide action</h1>
          <p className="austin-diagram__lede">Explore the relationships between six subthemes, 18 indicators, and 21 annual goals. Select any element to isolate its connections.</p>
        </div>
        <div className="austin-diagram__summary" aria-label="Resumen de datos">
          <strong>65</strong><span>connections</span><strong>21</strong><span>annual goals</span>
        </div>
      </header>

      <section className="austin-diagram__workspace" aria-label="Interactive flow diagram">
        <div className="austin-diagram__toolbar">
          <label className="austin-diagram__search"><MagnifyingGlass size={18} aria-hidden="true" /><span className="visually-hidden">Search diagram</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search themes, levers, or goals" /></label>
          <div className="austin-diagram__actions">
            <button type="button" onClick={() => zoom(1.4)} title="Acercar"><Plus size={18} /></button>
            <button type="button" onClick={() => zoom(0.72)} title="Alejar"><Minus size={18} /></button>
            <button type="button" onClick={() => { setView({ scale: 1, x: 22, y: 18 }); setSelection(null); setThemeFilter(null); setQuery(''); }} title="Restablecer"><ArrowCounterClockwise size={18} /></button>
            <span className="austin-diagram__zoom-level" aria-live="polite">{Math.round(view.scale * 100)}%</span>
            <span className="austin-diagram__separator" />
            <button type="button" className="austin-diagram__export" onClick={exportPng}><DownloadSimple size={18} /> PNG</button>
            <button type="button" className="austin-diagram__export" onClick={exportSvg}><DownloadSimple size={18} /> SVG</button>
          </div>
        </div>
        <div className="austin-diagram__column-headings" aria-hidden="true"><span>Subthemes</span><span>Mobility levers</span><span>City Manager’s Top 25 Goals for Fiscal Year 2026</span></div>
        <div className="austin-diagram__canvas">
          <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="austin-flow-title austin-flow-desc" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
            <title id="austin-flow-title">Austin economic mobility flow diagram</title>
            <desc id="austin-flow-desc">Connections from six subthemes to 18 mobility levers and 21 City Manager annual goals.</desc>
            <g className="austin-diagram__viewport" transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
              <g fill="none">
                {LEVERS.map((lever, leverIndex) => {
                  const tIndex = themeIndex(lever[0]); const bounds = themeBounds(tIndex); const color = COLORS[tIndex];
                  const active = related('lever', leverIndex);
                  return <path key={`tl-${leverIndex}`} data-link-kind="theme" data-lever-index={leverIndex} display={visibleForThemeFilter('lever', leverIndex) ? undefined : 'none'} d={`M ${THEME_X + 270} ${bounds.y + bounds.height / 2} C 430 ${bounds.y + bounds.height / 2}, 455 ${leverY(leverIndex) + 20}, ${LEVER_X} ${leverY(leverIndex) + 20}`} stroke={color} strokeWidth="5" strokeOpacity={active ? 0.5 : 0.075} />;
                })}
                {LEVERS.flatMap((lever, leverIndex) => lever[2].map((goalIndex) => {
                  const color = COLORS[themeIndex(lever[0])]; const active = related('lever', leverIndex) && related('goal', goalIndex);
                  return <path key={`lg-${leverIndex}-${goalIndex}`} data-link-kind="goal" data-lever-index={leverIndex} data-goal-index={goalIndex} display={visibleForThemeFilter('lever', leverIndex) && visibleForThemeFilter('goal', goalIndex) ? undefined : 'none'} d={`M ${LEVER_X + 280} ${leverY(leverIndex) + 20} C 1090 ${leverY(leverIndex) + 20}, 1220 ${goalY(goalIndex) + goalHeight(goalIndex) / 2}, ${GOAL_X} ${goalY(goalIndex) + goalHeight(goalIndex) / 2}`} stroke={color} strokeWidth={active ? 3.2 : 2.2} strokeOpacity={active ? 0.5 : 0.06} />;
                }))}
              </g>

              {themes.map((theme, index) => { const box = themeBounds(index); const opacity = nodeOpacity('theme', index, theme); return (
                <g key={theme} className="austin-diagram__node austin-diagram__theme-node" data-node-kind="theme" data-node-index={index} display={visibleForThemeFilter('theme', index) ? undefined : 'none'} opacity={opacity} onPointerDown={(event) => event.stopPropagation()} onClick={(event) => { event.stopPropagation(); const isActive = themeFilter === index; setThemeFilter(isActive ? null : index); setSelection(isActive ? null : { type: 'theme', index }); }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); const isActive = themeFilter === index; setThemeFilter(isActive ? null : index); setSelection(isActive ? null : { type: 'theme', index }); } }} role="button" tabIndex={0} aria-pressed={themeFilter === index} aria-label={`${theme}. ${themeFilter === index ? 'Mostrar todos' : 'Mostrar solo conexiones relacionadas'}`}>
                  <rect x={THEME_X} y={box.y} width="270" height={box.height} rx="8" fill={COLORS[index]} />
                  <text x={THEME_X + 24} y={box.y + 34} fill={THEME_TEXT_COLORS[index]} fontSize="19" fontWeight="700">{lines(theme, 25, 4).map((line, i) => <tspan key={line} x={THEME_X + 24} dy={i ? 25 : 0}>{line}</tspan>)}</text>
                  <text x={THEME_X + 24} y={box.y + box.height - 20} fill={THEME_TEXT_COLORS[index]} opacity="0.78" fontSize="13">{LEVERS.filter((lever) => lever[0] === theme).length} levers</text>
                </g>
              ); })}

              {LEVERS.map((lever, index) => { const color = COLORS[themeIndex(lever[0])]; const opacity = nodeOpacity('lever', index, lever[1]); return (
                <g key={lever[1]} className="austin-diagram__node" data-node-kind="lever" data-node-index={index} display={visibleForThemeFilter('lever', index) ? undefined : 'none'} opacity={opacity} onClick={(event) => { event.stopPropagation(); setSelection({ type: 'lever', index }); }} role="button" tabIndex={0} aria-label={lever[1]}>
                  <rect x={LEVER_X} y={leverY(index)} width="280" height="46" rx="6" fill="#F7F6F5" stroke={color} strokeWidth="2" />
                  <rect x={LEVER_X} y={leverY(index)} width="8" height="46" rx="4" fill={color} />
                  <text x={LEVER_X + 22} y={leverY(index) + 20} fill="#22254E" fontSize="15.5" fontWeight="700">{lines(lever[1], 31, 2).map((line, i) => <tspan key={line} x={LEVER_X + 22} dy={i ? 17 : 0}>{line}</tspan>)}</text>
                </g>
              ); })}

              {GOALS.map((goal, index) => { const connected = LEVERS.filter((lever) => lever[2].includes(index)).length; const opacity = nodeOpacity('goal', index, goal); return (
                <g key={goal} className="austin-diagram__node" data-node-kind="goal" data-node-index={index} display={visibleForThemeFilter('goal', index) ? undefined : 'none'} opacity={opacity} onClick={(event) => { event.stopPropagation(); setSelection({ type: 'goal', index }); }} role="button" tabIndex={0} aria-label={goal}>
                  <rect x={GOAL_X} y={goalY(index)} width="400" height={goalHeight(index)} rx="6" fill={index % 2 ? '#DFF0E3' : '#DCF2FD'} stroke="#44499C" strokeWidth="1.2" />
                  <text x={GOAL_X + 18} y={goalY(index) + 22} fill="#22254E" fontSize="13.2" fontWeight="400">{GOAL_LAYOUTS[index].lines.map((line, i) => <tspan key={`${line}-${i}`} x={GOAL_X + 18} dy={i ? GOAL_LINE_HEIGHT : 0}>{line}</tspan>)}</text>
                  <circle cx={GOAL_X + 382} cy={goalY(index) + 14} r="10" fill="#F7F6F5" />
                  <text x={GOAL_X + 382} y={goalY(index) + 18} textAnchor="middle" fill="#22254E" fontSize="10" fontWeight="700">{connected}</text>
                </g>
              ); })}
            </g>
          </svg>
          <div className="austin-diagram__hint">Drag to pan · Scroll to zoom up to 600% · Select to focus</div>
        </div>
        <aside className={`austin-diagram__detail ${selection ? 'is-open' : ''}`} aria-live="polite">
          {selection ? <><div><span>{selection.type === 'theme' ? 'Subtheme' : selection.type === 'lever' ? 'Mobility lever' : 'Annual goal'}</span><button type="button" onClick={() => setSelection(null)} aria-label="Close detail">×</button></div><p>{selectedText}</p></> : <p>Select a theme, lever, or goal to trace only its related paths.</p>}
        </aside>
      </section>
      <footer className="austin-diagram__source">Source: <strong>Levers of Economic Mobility Framework.xlsx</strong> · Columns B, C, and G · 65 mapped relationships</footer>
    </article>
  );
}
