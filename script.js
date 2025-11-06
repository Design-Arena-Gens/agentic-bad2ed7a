const lessons = [
  {
    id: "angular-purpose",
    title: "Why does Angular even exist?",
    topic: "Foundations",
    stage: "completed",
    summary:
      "Angular gives big teams a shared set of rules for building apps that stay fast and organized even as features pile up.",
    grownUp:
      "Angular ships opinionated building blocks—components, dependency injection, routing, reactive forms—so frontends grow in predictable slices. Teams follow the same project structure, rely on the compiler to catch mistakes, and lean on RxJS to model async state. The framework optimizes templates, handles change detection, and bundles the app without hand-written wiring.",
    kidStory:
      "Think of Angular as the rulebook for a giant LEGO city. Everyone gets the same blueprint so the hospital, the school, and the fire station connect without falling over.",
    practice:
      "When kicking off a new feature, sketch the component tree and services first. Let the CLI generate pieces so they follow the same folder recipe as the rest of the project."
  },
  {
    id: "typescript-benefits",
    title: "How does TypeScript supercharge Angular?",
    topic: "TypeScript",
    stage: "completed",
    summary:
      "TypeScript turns JavaScript into a safety net by catching mismatched data before the browser ever runs your code.",
    grownUp:
      "Angular templates are statically analyzed thanks to TypeScript metadata. Strong typing makes dependency injection safer, enforces smart defaults in reactive forms, and improves IntelliSense across IDEs. Generics in services, discriminated unions for component inputs, and mapped types for API contracts avoid entire classes of runtime bugs.",
    kidStory:
      "TypeScript is like labeling every toy bin. When you reach for the dinosaurs, you never grab race cars by mistake, so playtime runs smoothly.",
    practice:
      "Define interfaces for API responses and share them between services and components. When the backend changes, TypeScript highlights every broken assumption instantly."
  },
  {
    id: "component-anatomy",
    title: "What makes up an Angular component?",
    topic: "Components",
    stage: "in-progress",
    summary:
      "Components pair a template, a class, and optional styling so UI pieces stay self-contained and reusable.",
    grownUp:
      "Each component class exposes inputs, outputs, and encapsulated state. The template consumes those bindings, while Angular’s change detector decides when to re-render. Standalone components trim the need for NgModule declarations, allowing feature islands to bootstrap themselves with their own imports.",
    kidStory:
      "Picture a puppet: the class is the puppeteer, the template is the puppet’s costume, and the styles are the paint that give it personality. Together they perform a mini show.",
    practice:
      "Keep templates declarative; shift logic into the class or dedicated pipes/services so the HTML stays expressive and easy to scan."
  },
  {
    id: "change-detection",
    title: "How does change detection stay efficient?",
    topic: "Performance",
    stage: "planned",
    summary:
      "Angular checks component trees for updates, but you can tune when and how often that happens.",
    grownUp:
      "The default strategy walks the component tree on async tasks or events. OnPush restricts checks to input reference changes or manual triggers via ChangeDetectorRef. Zone.js patches browser APIs to notify Angular, but zone-less setups hand control to developers for leaner, more predictable render cycles.",
    kidStory:
      "Imagine a librarian who asks every classroom if anything changed. With OnPush, she only revisits rooms that raised their hands, saving tons of steps.",
    practice:
      "Combine immutable data patterns with OnPush. Use `async` pipe and `RxState`-style stores so components react to new references instead of mutating existing ones."
  },
  {
    id: "dependency-injection",
    title: "Why is dependency injection such a big deal?",
    topic: "Architecture",
    stage: "planned",
    summary:
      "Dependency injection hands each class the exact helpers it needs without manual wiring, promoting tiny, testable services.",
    grownUp:
      "Angular’s hierarchical injector resolves tokens from the closest provider. This makes scope explicit—feature modules can override shared services, while `providedIn: 'root'` ensures singletons. Tokens, factories, and value providers keep abstractions flexible and easy to mock.",
    kidStory:
      "Think of the injector as a snack cart. Every classroom tells the cart what snacks they like, and the cart delivers the right treats without the teacher running to the store.",
    practice:
      "Abstract data access behind dedicated services and inject them into components. Swap real implementations with test doubles in unit tests by providing alternate tokens."
  },
  {
    id: "lifecycle-hooks",
    title: "What are lifecycle hooks actually for?",
    topic: "Components",
    stage: "in-progress",
    summary:
      "Lifecycle hooks let you run precise code when Angular creates, updates, or destroys a component.",
    grownUp:
      "Hooks like `ngOnInit`, `ngOnChanges`, and `ngOnDestroy` give fine-grained control. `ngOnInit` handles startup logic, `ngAfterViewInit` waits for template children, and `ngOnDestroy` tears down subscriptions. Overusing hooks can couple logic to Angular internals, so keep them thin entry points.",
    kidStory:
      "It’s the routine for a school play: warm-up before the curtain, quick costume fixes between scenes, and cleanup after the final bow.",
    practice:
      "Place subscription setup inside `ngOnInit` and use `takeUntil` or `DestroyRef` in `ngOnDestroy` to prevent memory leaks."
  },
  {
    id: "rxjs-vs-promise",
    title: "Why choose Observables over Promises?",
    topic: "Reactive Patterns",
    stage: "planned",
    summary:
      "Observables model ongoing streams of data, while Promises settle once. Angular leans on streams for templates and complex flows.",
    grownUp:
      "Observables emit many values, can be canceled, and compose with operators like `switchMap`. Angular’s `HttpClient` returns Observables for this reason. The `async` pipe subscribes and unsubscribes automatically, keeping templates declarative and leak-free.",
    kidStory:
      "A Promise is a single ice-cream scoop. An Observable is a sundae machine that keeps handing out scoops until you tell it to stop.",
    practice:
      "Wrap user interactions (like search boxes) in Observable streams and pipe through debounce and switchMap to avoid race conditions."
  },
  {
    id: "routing-guards",
    title: "What do Angular routing guards protect?",
    topic: "Routing",
    stage: "planned",
    summary:
      "Guards decide if a route can activate, load, or leave, letting you gate content or prefetch safely.",
    grownUp:
      "Guards return booleans, UrlTree redirects, or Observables. `CanActivate` secures entry, `CanDeactivate` warns about unsaved work, and `Resolve` hydrates components with data. Typed route configs and standalone APIs in Angular 17+ simplify guard registration.",
    kidStory:
      "A guard is the friend who checks if you packed your lunch before letting you board the field-trip bus.",
    practice:
      "Use guards to preload core data and redirect unauthorized users. Pair them with dedicated auth services rather than mixing concerns in components."
  },
  {
    id: "standalone-vs-modules",
    title: "Standalone components vs. NgModules?",
    topic: "Modern Angular",
    stage: "planned",
    summary:
      "Standalone components declare their own dependencies, slimming boilerplate compared to classic NgModules.",
    grownUp:
      "Standalone APIs allow direct imports of components, directives, and pipes. You still group features logically using routing or simplified feature modules when needed. This shift reduces indirection and aligns Angular more closely with other component-driven frameworks.",
    kidStory:
      "Standalone components are like lunchboxes that pack their own utensils. NgModules are the cafeteria trays that share forks with everyone.",
    practice:
      "Adopt standalone components for new features, but gradually refactor legacy modules to avoid interrupting existing routing setups."
  },
  {
    id: "state-management",
    title: "How should you wrangle state?",
    topic: "State",
    stage: "in-progress",
    summary:
      "Keep local state inside components, share read-heavy state through services, and reserve heavier tools for true complexity.",
    grownUp:
      "Angular signals (in v17+) offer fine-grained reactivity for local state. Services with BehaviorSubjects work for medium complexity, while NgRx or Akita help when you need immutable, event-driven flows with debugging tools.",
    kidStory:
      "Organize homework into folders: simple worksheets stay in your desk (component), class rules live on the wall (service), and the principal keeps official records (NgRx store).",
    practice:
      "Audit state sources. If three or more unrelated components need the same data, lift it into a service store and expose selectors instead of juggling EventEmitters."
  },
  {
    id: "testing-strategy",
    title: "What does a healthy testing strategy look like?",
    topic: "Quality",
    stage: "planned",
    summary:
      "Mix unit tests, harness-driven component tests, and happy-path E2E checks to safeguard Angular apps.",
    grownUp:
      "Use Jest or Karma for units, TestBed or harnesses for components, and Playwright or Cypress for user journeys. Test harnesses separate DOM details from component behavior, while Spectator and Angular Testing Library keep tests intention-focused.",
    kidStory:
      "It’s like checking your backpack: you test your pencil, then see if it fits in the case, then walk to school to ensure nothing falls out.",
    practice:
      "Automate fast unit tests in every pull request. Schedule slower end-to-end suites nightly with production-like data."
  },
  {
    id: "accessibility",
    title: "How do you keep Angular apps accessible?",
    topic: "UX & Accessibility",
    stage: "planned",
    summary:
      "Accessibility is about semantic HTML, ARIA only when needed, and tooling that spots regressions early.",
    grownUp:
      "Prefer native elements, wire up the CDK’s accessibility utilities, and audit with tools like Axe or Lighthouse. Manage focus on route transitions and ensure color contrast meets WCAG AA. Angular Material harnesses accessibility best practices by default, but custom components need the same care.",
    kidStory:
      "Accessibility is building a playground where every friend can join—ramps, clear signs, and bright colors so no one feels left out.",
    practice:
      "Add automated Axe checks to CI. Build keyboard-only testing into your definition of done so interactive components never trap focus."
  }
];

const state = {
  filter: "all"
};

const grid = document.getElementById("questionGrid");
const topicFilter = document.getElementById("topicFilter");
const shuffleBtn = document.getElementById("shuffleBtn");
const downloadBtn = document.getElementById("downloadBtn");
const progressCount = document.getElementById("progressCount");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

const uniqueTopics = [...new Set(lessons.map(({ topic }) => topic))];
uniqueTopics.forEach(topic => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  topicFilter.append(option);
});

function renderLessons() {
  grid.innerHTML = "";
  const filtered =
    state.filter === "all" ? lessons : lessons.filter(lesson => lesson.topic === state.filter);

  filtered.forEach((lesson, index) => {
    const card = buildCard(lesson, index);
    grid.append(card);
    requestAnimationFrame(() => observer.observe(card));
  });

  updateProgress();
}

function buildCard(lesson, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.topic = lesson.topic;
  card.dataset.stage = lesson.stage;

  const label = document.createElement("span");
  label.className = "card-topic";
  label.innerHTML = `<span aria-hidden="true">#${String(index + 1).padStart(2, "0")}</span> ${lesson.topic}`;

  const title = document.createElement("h3");
  title.textContent = lesson.title;

  const summary = document.createElement("p");
  summary.className = "card-summary";
  summary.textContent = lesson.summary;

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const actionButton = document.createElement("button");
  actionButton.type = "button";
  actionButton.textContent = "Read the deep dive";
  actions.append(actionButton);

  const hidden = document.createElement("div");
  hidden.className = "hidden-copy";
  hidden.innerHTML = `
      <div class="card-lesson">
        <strong>In developer terms</strong>
        <p>${lesson.grownUp}</p>
      </div>
      <div class="card-lesson">
        <strong>Kid-size story</strong>
        <p>${lesson.kidStory}</p>
      </div>
      <div class="card-lesson">
        <strong>Try this</strong>
        <p>${lesson.practice}</p>
      </div>
    `;

  actionButton.addEventListener("click", () => toggleCard(card, lesson));

  card.append(label, title, summary, hidden, actions);
  return card;
}

function toggleCard(card, lesson) {
  const isExpanding = !card.classList.contains("expanded");
  card.classList.toggle("expanded");

  if (isExpanding && lesson.stage !== "completed") {
    lesson.stage = "completed";
    card.dataset.stage = "completed";
  }

  updateProgress();
}

function updateProgress() {
  const total = lessons.length;
  const completed = lessons.filter(lesson => lesson.stage === "completed").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  progressCount.textContent = `${completed} of ${total} chapters unlocked`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

topicFilter.addEventListener("change", event => {
  state.filter = event.target.value;
  renderLessons();
});

shuffleBtn.addEventListener("click", () => {
  for (let i = lessons.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [lessons[i], lessons[j]] = [lessons[j], lessons[i]];
  }
  renderLessons();
});

downloadBtn.addEventListener("click", async () => {
  if (!window.JSZip) {
    console.warn("JSZip failed to load.");
    alert("Download helper is still waking up. Please try again in a moment.");
    return;
  }

  downloadBtn.disabled = true;
  downloadBtn.textContent = "Preparing...";

  try {
    const zip = new window.JSZip();
    const files = ["index.html", "styles.css", "script.js"];
    const contents = await Promise.all(
      files.map(async file => {
        const response = await fetch(file, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error(`Unable to fetch ${file}`);
        }
        return response.text();
      })
    );

    contents.forEach((content, idx) => {
      zip.file(files[idx], content);
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "angular-typescript-playbook.zip";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  } catch (error) {
    console.error(error);
    alert("We hit a snag while bundling the files. Please refresh and try again.");
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = "Download Lesson";
  }
});

renderLessons();

window.addEventListener("pageshow", event => {
  if (event.persisted) {
    renderLessons();
  }
});
