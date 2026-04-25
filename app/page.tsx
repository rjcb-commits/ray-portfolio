const publicApps = [
  {
    title: 'Stupid Small',
    description:
      'An Android app that defeats procrastination by using AI to break overwhelming tasks into stupidly small micro-steps, with a built-in focus timer, streak tracking, and celebration animations to keep users moving forward.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Groq', 'Cloudflare Workers'],
    image: '/stupid-small-icon.png',
  },
  {
    title: 'Niner',
    description:
      'A polished native Android Sudoku app with five difficulties, five game modes, a daily streak puzzle, and a teaching hint engine, all built end-to-end in Kotlin and Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'StateFlow', 'Coroutines', 'Custom Canvas', 'On-device'],
    image: '/niner-icon.png',
  },
]

const experience = [
  {
    title: 'Data Scientist, AVP',
    org: 'PNC Financial Services',
    meta: '2025 — Present',
    bullets: [
      'Build predictive models for operational decision-making in a regulated banking environment, owning the work end-to-end from problem framing to delivery.',
      'Design sampling and review workflows that expand QA coverage while keeping process documentation audit-ready.',
      'Build Tableau dashboards used by leadership to track operational trends, risk patterns, and team performance.',
    ],
  },
  {
    title: 'Sr. Business Analytics Consultant, AVP',
    org: 'PNC Financial Services',
    meta: '2022 — 2025',
    bullets: [
      'Owned analytics for relationship-operations strategy, supporting decisions for line-of-business leaders.',
      'Built SQL, Spark, and Hive pipelines in Cloudera that powered downstream reporting and modeling work.',
      'Finished top 3 in enterprise-wide data science competitions two years in a row.',
    ],
  },
  {
    title: 'Business Analytics Consultant and earlier roles',
    org: 'PNC Financial Services',
    meta: '2017 — 2022 and prior',
    bullets: [
      'Built the first analytics function on multiple teams that previously had none.',
      'Replaced manual Excel/VBA reporting with automated, maintainable data workflows.',
      'Grew from reporting and collections roles into full analytics ownership.',
    ],
  },
]

const stacks = {
  platforms: ['Python', 'SQL', 'PySpark', 'Hive', 'Teradata', 'Oracle', 'Jupyter', 'Git'],
  modeling: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Classification', 'Regression', 'Feature Engineering', 'A/B Testing', 'LLMs'],
  storytelling: ['Tableau', 'Executive Dashboards', 'Data Storytelling', 'Operations Metrics'],
}

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>
}

function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string
  description: string
  tags: string[]
  image?: string
}) {
  return (
    <article className="card tile">
      {image ? (
        <div className="projectIconFrame">
          <img className="projectIcon" src={image} alt={`${title} icon`} />
        </div>
      ) : null}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="pillRow">
        {tags.map((tag) => (
          <Pill key={tag} text={tag} />
        ))}
      </div>
    </article>
  )
}

export default function HomePage() {
  return (
    <main>
      <div className="nav">
        <div className="wrap navInner">
          <a href="#top" className="brand">Raymond Jack</a>
          <div className="navLinks">
            <a href="#apps">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <header id="top" className="hero wrap">
        <div className="eyebrow">Data Scientist · Banking Analytics</div>
        <h1>I turn data into practical decisions — and I build products too.</h1>
        <p className="lede">
          Data scientist with deep experience in banking analytics, risk-focused decision support, and executive dashboards. This portfolio brings together public app work and the methods I use day-to-day.
        </p>
        <div className="ctaRow">
          <a className="btn primary" href="#apps">
            View work
          </a>
          <a className="btn secondary" href="mailto:rayjackcb@gmail.com">
            Get in touch
          </a>
          <a className="btn secondary" href="https://github.com/rjcb-commits/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="heroStats">
          <div className="heroStat">
            <strong>19</strong>
            <span>years in banking and analytics</span>
          </div>
          <div className="heroStat">
            <strong>Top 3</strong>
            <span>enterprise modeling competition, two years running</span>
          </div>
          <div className="heroStat">
            <strong>2</strong>
            <span>shipped Android apps in the public store</span>
          </div>
        </div>
      </header>

      <section id="apps" className="wrap sectionBlock">
        <div className="sectionHead">
          <div className="sectionLabel">Work</div>
          <h2>Public apps</h2>
          <p>Shipped projects that demonstrate product thinking, native development, and execution.</p>
        </div>
        <div className="grid2">
          {publicApps.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="experience" className="wrap sectionBlock">
        <div className="sectionHead">
          <div className="sectionLabel">Experience</div>
          <h2>Selected roles</h2>
          <p>The short version of the story behind the resume.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="card timelineItem" key={item.title + item.meta}>
              <div className="timelineHead">
                <div>
                  <h3>{item.title}</h3>
                  <div className="org">{item.org}</div>
                </div>
                <div className="meta">{item.meta}</div>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="wrap sectionBlock">
        <div className="sectionHead">
          <div className="sectionLabel">Toolkit</div>
          <h2>Core stack</h2>
          <p>Tools and methods I use to move from raw data to business decisions.</p>
        </div>
        <div className="grid3">
          <div className="card tile">
            <h3>Languages and platforms</h3>
            <div className="pillRow">{stacks.platforms.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
          <div className="card tile">
            <h3>Modeling and analytics</h3>
            <div className="pillRow">{stacks.modeling.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
          <div className="card tile">
            <h3>Visualization and storytelling</h3>
            <div className="pillRow">{stacks.storytelling.map((item) => <Pill key={item} text={item} />)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap sectionBlock contactBlock">
        <div className="contactCard">
          <div className="sectionLabel">Contact</div>
          <h2>Let&apos;s connect.</h2>
          <p>
            Open to interesting conversations — data science, banking analytics, product work, or anything in the same neighborhood. Reach out anytime.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href="mailto:rayjackcb@gmail.com">
              rayjackcb@gmail.com
            </a>
            <a className="btn secondary" href="https://github.com/rjcb-commits/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <div>© {new Date().getFullYear()} Raymond Jack</div>
        <div className="footerMeta">Built with Next.js</div>
      </footer>
    </main>
  )
}
