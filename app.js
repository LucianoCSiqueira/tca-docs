const diagrams = [
  {
    file: "FuncionamentoDoJogo.drawio.png",
    title: "Funcionamento do jogo",
    titleEn: "How the game works",
    description: "Fluxo de funcionamento do jogo PinkWall.",
    descriptionEn: "Flowchart showing how the PinkWall game works."
  },
  {
    file: "JavaSnes.drawio.png",
    title: "Arquitetura do JavaSNES",
    titleEn: "JavaSNES architecture",
    description: "Diagrama de arquitetura e componentes do JavaSNES.",
    descriptionEn: "Architecture and component diagram for JavaSNES."
  },
  {
    file: "MetodologiaDeDesenvolvimento.drawio.png",
    title: "Metodologia de desenvolvimento",
    titleEn: "Development methodology",
    description: "Etapas da metodologia de desenvolvimento do projeto.",
    descriptionEn: "Stages of the project's development methodology."
  },
  {
    file: "Porque desenvolver para SNES_.drawio.png",
    title: "Por que desenvolver para SNES",
    titleEn: "Why develop for the SNES?",
    description: "Diagrama sobre os motivos para desenvolver para a plataforma SNES.",
    descriptionEn: "Diagram outlining the reasons for developing for the SNES."
  },
  {
    file: "PvSnesLib.drawio.png",
    title: "PVSNESLIB",
    titleEn: "PVSNESLIB",
    description: "Diagrama de integração da biblioteca PVSNESLIB.",
    descriptionEn: "Diagram showing how the PVSNESLIB library is integrated."
  },
  {
    file: "RoteiroDeJogabilidadeDoPinkWall.drawio.png",
    title: "Roteiro de jogabilidade do PinkWall",
    titleEn: "PinkWall gameplay flow",
    description: "Fluxo e roteiro de jogabilidade do PinkWall.",
    descriptionEn: "PinkWall gameplay flowchart and outline."
  },
  {
    file: "SNES-IDE.drawio.png",
    title: "SNES-IDE",
    titleEn: "SNES-IDE",
    description: "Diagrama da SNES-IDE e de seu fluxo de trabalho.",
    descriptionEn: "SNES-IDE diagram and workflow."
  }
];

const videos = [
  {
    file: "FuncionamentoDoJogo.mp4",
    title: "Funcionamento do jogo",
    titleEn: "How the game works",
    detail: "Demonstração da execução do PinkWall",
    detailEn: "A demonstration of PinkWall running"
  },
  {
    file: "ExplicandoHelloWorld.mp4",
    title: "Hello World",
    titleEn: "Hello World",
    detail: "Apresentação do exemplo inicial",
    detailEn: "Introduction to the starting example"
  },
  {
    file: "Gameplay PinkWall.mp4",
    title: "Gameplay PinkWall",
    titleEn: "PinkWall gameplay",
    detail: "Gravação de uma sessão de jogo",
    detailEn: "A recording of a gameplay session"
  },
  {
    file: "JavaSnes.mp4",
    title: "JavaSNES",
    titleEn: "JavaSNES",
    detail: "Demonstração da biblioteca e do framework",
    detailEn: "A demonstration of the library and framework"
  },
  {
    file: "MetodoligiaDeDesenvolvimento.mp4",
    title: "Metodologia de desenvolvimento",
    titleEn: "Development methodology",
    detail: "Apresentação do processo de desenvolvimento",
    detailEn: "An overview of the development process"
  },
  {
    file: "PorqueDesenvolverParaASnes.mp4",
    title: "Por que desenvolver para SNES",
    titleEn: "Why develop for the SNES?",
    detail: "Contexto e motivação da plataforma",
    detailEn: "Platform context and motivation"
  },
  {
    file: "PvSneslib.mp4",
    title: "PVSNESLIB",
    titleEn: "PVSNESLIB",
    detail: "Demonstração da biblioteca para SNES",
    detailEn: "A demonstration of the library for SNES"
  },
  {
    file: "RoteiroDoJogo.mp4",
    title: "Roteiro do jogo",
    titleEn: "Game outline",
    detail: "Apresentação do roteiro do PinkWall",
    detailEn: "An overview of the PinkWall game outline"
  },
  {
    file: "Snes-Ide(1).mp4",
    title: "SNES-IDE",
    titleEn: "SNES-IDE",
    detail: "Demonstração do ambiente de desenvolvimento",
    detailEn: "A demonstration of the development environment"
  },
  {
    file: "SpritesEBackgroundVideo.mp4",
    title: "Sprites e cenários",
    titleEn: "Sprites and backgrounds",
    detail: "Demonstração de sprites e planos de fundo",
    detailEn: "A demonstration of sprites and backgrounds"
  }
];

const englishText = {
  pageTitle: "TCA — Software Engineering & JavaSNES | IFPR Cascavel",
  skipLink: "Skip to content",
  homeLabel: "TCA IFPR — home page",
  mainNavigation: "Main navigation",
  navProject: "The project",
  navDiagrams: "Flowcharts",
  navPresentation: "Presentation",
  navVideos: "Videos",
  navRelated: "Related projects",
  languageLabel: "Page language",
  heroEyebrow: "Cycle A Capstone Project",
  heroTitleFirst: "Software engineering.",
  heroTitleSecond: "From design to SNES.",
  heroIntro: "Academic documentation, architecture and demonstrations of a complete software development lifecycle — from requirements gathering to running on the Super Nintendo.",
  heroAbout: "Explore the project",
  heroSlides: "View presentation",
  academicInfo: "Academic information",
  institution: "Federal Institute of Paraná",
  campus: "Cascavel Campus",
  programme: "Integrated Secondary Technical Course in Information Technology",
  academicPurpose: "Academic purpose",
  projectHeading: "A project, from start to finish.",
  projectLead: "The TCA connects software engineering specifications to a real-world application. This portal brings together technical artefacts, the defence presentation and recordings that validate the work.",
  specifyTitle: "Specify",
  specifyText: "Requirements gathering, planning and documentation of the development stages.",
  modelTitle: "Model",
  modelText: "Layered architecture, flowcharts, execution logic and game state management.",
  implementTitle: "Implement",
  implementText: "A PinkWall application integrated with JavaSNES, PVSNESLIB and the Super Nintendo platform.",
  validateTitle: "Validate",
  validateText: "Emulator demonstrations, screen captures and software recordings.",
  architectureEyebrow: "Architectural decision",
  architectureTitle: "Layered architecture",
  architectureStart: "The ",
  architectureMiddle: " application logic is separated from the hardware translation and abstraction layers — ",
  architectureAnd: " and ",
  architectureEnd: ". This structure supports development and integration for the SNES platform.",
  systemModelling: "System modelling",
  diagramsHeading: "Flowcharts & architecture.",
  diagramsLead: "Explore the project diagrams. Select any image to enlarge it — the flowcharts adapt to both large and small screens.",
  diagramCount: "07 diagrams",
  academicDefence: "Academic defence",
  presentationHeading: "Final presentation.",
  presentationLead: "Slides from the final seminar, available as a PDF. Navigate between pages or choose a chapter in the viewer.",
  downloadPresentation: "Download presentation",
  pdfTitle: "Cycle A Capstone Project",
  finalSeminar: "Final seminar",
  otherFormats: "Other presentation formats",
  pdfReader: "PDF presentation viewer",
  pdfLoading: "Loading presentation…",
  integratedViewer: "Integrated viewer by",
  openPdfNewTab: "Open the PDF in a new tab",
  demosValidation: "Demonstrations & validation",
  videosHeading: "The project in action.",
  videosLead: "Recordings of development and emulator demonstrations. Select a video to play it in the player.",
  videoCount: "10 recordings",
  videoPlayerLabel: "Project demonstration video",
  videoFallback: "Your browser does not support HTML5 video playback.",
  videoPlaceholder: "Select a recording to watch",
  nowPlaying: "Now playing",
  chooseVideo: "Choose a demonstration",
  enableSound: "Enable sound",
  disableSound: "Mute sound",
  fullscreen: "Full screen",
  videoLibrary: "Video library",
  demonstrations: "Demonstrations",
  filterVideos: "Filter demonstrations",
  searchVideos: "Search…",
  noVideosFound: "No demonstrations found.",
  mediaNote: "Recordings keep their original aspect ratio; volume and full-screen controls are available in the player.",
  ecosystemEyebrow: "Connected ecosystem",
  ecosystemHeading: "Projects that work together.",
  ecosystemLead: "Three complementary repositories document, build and run this academic project.",
  documentation: "DOCUMENTATION",
  thisProject: "This project",
  docsDescription: "The documentation hub for formal engineering artefacts, flowcharts, the academic presentation and validation recordings.",
  repository: "Repository",
  tcaRepository: "Open the TCA Docs repository on GitHub",
  finalApplication: "FINAL APPLICATION",
  pinkwallDescriptionStart: "A reference SNES game inspired by ",
  pinkwallDescriptionEnd: ", by Pink Floyd, demonstrating the framework in practice.",
  pinkwallRepository: "Open the PinkWall repository on GitHub",
  exploreProject: "Explore the project",
  frameworkTools: "FRAMEWORK & TOOLCHAIN",
  javasnesDescription: "An open-source Java library and toolchain developed through ongoing academic collaboration for hardware abstraction and SNES compilation.",
  javasnesRepository: "Open the JavaSNES repository on GitHub",
  artifactStructure: "Artefact structure",
  folderDiagrams: "Execution cycles, game states, collisions, architecture and JavaSNES integration.",
  folderSlides: "Academic presentation in PDF, PPTX and ODP formats.",
  folderVideos: "Screen captures and emulator demonstrations.",
  folderReadme: "The project's main index and navigation portal.",
  folderLicence: "Distribution terms under the GNU GPL v3.0 licence.",
  folderGitignore: "Rules for files ignored by Git.",
  academicCredits: "Academic credits",
  creditsHeading: "A collaborative effort.",
  creditsText: "Developed as part of the Integrated Secondary Technical Course in Information Technology at the Federal Institute of Paraná — Cascavel Campus.",
  licence: "Licensed under GNU GPL v3.0",
  lucianoRole: "Project lead, PinkWall developer and JavaSNES co-maintainer",
  brunoRole: "TCA artefact co-author and JavaSNES lead maintainer",
  footerTitle: "Cycle A Capstone Project",
  viewRepository: "View repository",
  enlargedDiagram: "Enlarged flowchart",
  closeImage: "Close image",
  zoomOut: "Zoom out",
  zoomIn: "Zoom in",
  resetZoom: "Fit to window"
};

const runtimeText = {
  "pt-BR": {
    soundOn: "Ativar som",
    soundOff: "Desativar som",
    fullscreenUnavailable: "A tela cheia não está disponível neste navegador. Use os controles do vídeo para ampliar.",
    fullscreenFailed: "Não foi possível abrir em tela cheia. Verifique as permissões do navegador.",
    videoLoadFailed: "Não foi possível carregar esta gravação. Verifique a conexão ou tente outra.",
    pdfLibraryMissing: "O leitor de PDF não carregou. Use o link para abrir o PDF em outra aba.",
    pdfInitFailed: "Não foi possível iniciar o leitor. Use o link para abrir o PDF em outra aba.",
    pdfLoadFailed: (message) => `Não foi possível carregar o PDF (${message}). Use o link para abrir o arquivo em outra aba.`,
    pdfUnexpectedError: "Ocorreu um erro ao abrir o leitor. Use o link para abrir o PDF em outra aba."
  },
  "en-GB": {
    soundOn: "Enable sound",
    soundOff: "Mute sound",
    fullscreenUnavailable: "Full-screen mode is unavailable in this browser. Use the video controls to enlarge the picture.",
    fullscreenFailed: "Could not enter full-screen mode. Check your browser permissions.",
    videoLoadFailed: "This recording could not be loaded. Check your connection or try another video.",
    pdfLibraryMissing: "The PDF viewer did not load. Use the link to open the PDF in a new tab.",
    pdfInitFailed: "The PDF viewer could not be started. Use the link to open the PDF in a new tab.",
    pdfLoadFailed: (message) => `The PDF could not be loaded (${message}). Use the link to open it in a new tab.`,
    pdfUnexpectedError: "An error occurred while opening the viewer. Use the link to open the PDF in a new tab."
  }
};

const pdfViewerText = {
  "pt-BR": {
    sidebar: "Alternar painel lateral",
    previous: "Anterior",
    previousPage: "Página anterior",
    next: "Próxima",
    nextPage: "Próxima página",
    zoomOut: "Reduzir zoom",
    zoomIn: "Aumentar zoom",
    fullscreen: "Alternar tela cheia",
    fullscreenTitle: "Tela cheia (ESC para sair)",
    chapters: "Capítulos do PDF",
    course: "Trabalho de Conclusão do Ciclo A",
    module: "Seminário final",
    chapter: "Apresentação TCA"
  },
  "en-GB": {
    sidebar: "Toggle sidebar",
    previous: "Previous",
    previousPage: "Previous page",
    next: "Next",
    nextPage: "Next page",
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    fullscreen: "Toggle full screen",
    fullscreenTitle: "Full screen (ESC to exit)",
    chapters: "PDF chapters",
    course: "Cycle A Capstone Project",
    module: "Final seminar",
    chapter: "TCA presentation"
  }
};

const portugueseAndSpanishCountries = new Set([
  "AO", "AR", "BO", "BR", "CL", "CO", "CR", "CU", "CV", "DO", "EC",
  "ES", "GQ", "GT", "GW", "HN", "MO", "MX", "NI", "PA", "PE", "PR", "PY",
  "PT", "SV", "ST", "TL", "UY", "VE"
]);

let currentLanguage = "en-GB";
let selectedVideoIndex = null;
let selectedDiagramIndex = null;
let imageZoom = 1;
let videoMessageKey = null;
let pdfErrorKey = null;
let pdfErrorDetail = "";
let pdfTranslationObserver = null;

const diagramGrid = document.querySelector("#diagram-grid");
const imageDialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#image-dialog-title");
const videoElement = document.querySelector("#project-video");
const videoStage = document.querySelector("#video-stage");
const videoTitle = document.querySelector("#video-title");
const videoMessage = document.querySelector("#video-message");
const videoPlaceholder = document.querySelector("#video-placeholder");
const videoList = document.querySelector("#video-list");
const videoSearch = document.querySelector("#video-search");
const noVideoResults = document.querySelector("#video-no-results");
const soundToggle = document.querySelector("#sound-toggle");
const fullscreenButton = document.querySelector("#fullscreen-button");
const pdfStatus = document.querySelector("#pdf-status");
const pageDescription = document.querySelector("#page-description");
const soundLabel = document.querySelector(".sound-label");
const imageViewport = document.querySelector("#image-dialog-viewport");
const imageCanvas = document.querySelector("#image-dialog-canvas");
const imageZoomLevel = document.querySelector("#image-zoom-level");
const imageZoomOut = document.querySelector("#image-zoom-out");
const imageZoomIn = document.querySelector("#image-zoom-in");
const imageZoomReset = document.querySelector("#image-zoom-reset");

function detectPreferredLanguage(locales = navigator.languages) {
  const preferredLocale = locales?.[0] || navigator.language || "en-GB";
  let locale;

  try {
    locale = new Intl.Locale(preferredLocale);
  } catch (error) {
    console.warn(`Could not read the browser locale "${preferredLocale}".`, error);
    return "en-GB";
  }

  if (/^[A-Z]{2}$/.test(locale.region ?? "") && portugueseAndSpanishCountries.has(locale.region)) {
    return "pt-BR";
  }

  return locale.language === "pt" || locale.language === "es" ? "pt-BR" : "en-GB";
}

function runtimeMessage(key, ...args) {
  const message = runtimeText[currentLanguage][key];
  return typeof message === "function" ? message(...args) : message;
}

function updateSoundLabel() {
  const muted = videoElement.muted;
  soundLabel.textContent = runtimeMessage(muted ? "soundOn" : "soundOff");
  soundToggle.setAttribute("aria-pressed", String(muted));
}

function updateImageZoom() {
  imageZoomLevel.value = `${Math.round(imageZoom * 100)}%`;
  imageZoomLevel.textContent = imageZoomLevel.value;
  imageZoomOut.disabled = imageZoom <= 0.5;
  imageZoomIn.disabled = imageZoom >= 4;
}

function fitDialogImage() {
  if (!dialogImage.naturalWidth || !dialogImage.naturalHeight) return;

  setImageZoom(1, false);
}

function setImageZoom(zoom, centre = true) {
  imageZoom = Math.min(4, Math.max(0.5, zoom));
  const fitWidth = imageViewport.clientWidth - 32;
  const fitHeight = imageViewport.clientHeight - 32;
  const fitScale = Math.min(
    fitWidth / dialogImage.naturalWidth,
    fitHeight / dialogImage.naturalHeight,
    1
  );
  dialogImage.style.width = `${Math.max(1, dialogImage.naturalWidth * fitScale * imageZoom)}px`;
  dialogImage.style.height = `${Math.max(1, dialogImage.naturalHeight * fitScale * imageZoom)}px`;
  updateImageZoom();

  if (centre) {
    imageViewport.scrollLeft = (imageViewport.scrollWidth - imageViewport.clientWidth) / 2;
    imageViewport.scrollTop = (imageViewport.scrollHeight - imageViewport.clientHeight) / 2;
  }
}

function replaceVisibleText(element, text) {
  const textNode = [...element.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()
  );

  if (textNode) {
    textNode.nodeValue = textNode.nodeValue.replace(textNode.nodeValue.trim(), text);
  } else {
    element.append(document.createTextNode(text));
  }
}

function translatePdfViewer() {
  const root = document.querySelector("#pdf-viewer");
  const sidebar = root.querySelector(".pdf-viewer-sidebar");
  if (!sidebar) return;

  const labels = pdfViewerText[currentLanguage];
  const buttons = [
    [".pdf-viewer-toggle-btn", null, "sidebar"],
    [".prev-btn", "previous", "previousPage"],
    [".next-btn", "next", "nextPage"],
    [".zoom-out-btn", null, "zoomOut"],
    [".zoom-in-btn", null, "zoomIn"],
    [".fullscreen-btn", null, "fullscreen"]
  ];

  sidebar.setAttribute("aria-label", labels.chapters);
  buttons.forEach(([selector, textKey, labelKey]) => {
    const button = root.querySelector(selector);
    if (!button) return;

    if (textKey) replaceVisibleText(button, labels[textKey]);
    button.setAttribute("aria-label", labels[labelKey]);
    button.title = selector === ".fullscreen-btn" ? labels.fullscreenTitle : labels[labelKey];
  });

  const course = sidebar.firstElementChild;
  const chapter = sidebar.querySelector(".pdf-viewer-chapter-item");
  const module = chapter?.querySelector("small");
  if (!course || !chapter || !module) return;

  course.textContent = labels.course;
  module.textContent = labels.module;
  const chapterText = [...chapter.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()
  );
  if (!chapterText) return;
  chapterText.nodeValue = chapterText.nodeValue.replace(chapterText.nodeValue.trim(), labels.chapter);
}

function translatePdfViewerWhenReady() {
  const root = document.querySelector("#pdf-viewer");
  const chapterSelector = ".pdf-viewer-sidebar .pdf-viewer-chapter-item small";

  if (root.querySelector(chapterSelector)) {
    translatePdfViewer();
    return;
  }

  if (pdfTranslationObserver) return;
  pdfTranslationObserver = new MutationObserver(() => {
    if (!root.querySelector(chapterSelector)) return;

    pdfTranslationObserver.disconnect();
    pdfTranslationObserver = null;
    translatePdfViewer();
  });
  pdfTranslationObserver.observe(root, { childList: true, subtree: true });
}

function textFor(item, field) {
  return currentLanguage === "en-GB" ? item[`${field}En`] : item[field];
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (language === "en-GB") {
      element.textContent = englishText[key];
    } else if (element.dataset.ptText !== undefined) {
      element.textContent = element.dataset.ptText;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (language === "en-GB") {
      element.setAttribute("aria-label", englishText[key]);
    } else if (element.dataset.ptAriaLabel !== undefined) {
      element.setAttribute("aria-label", element.dataset.ptAriaLabel);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (language === "en-GB") {
      element.setAttribute("placeholder", englishText[key]);
    } else if (element.dataset.ptPlaceholder !== undefined) {
      element.setAttribute("placeholder", element.dataset.ptPlaceholder);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;
    element.title = language === "en-GB" ? englishText[key] : element.dataset.ptTitleAttribute;
  });

  const title = document.querySelector("[data-i18n-title]");
  document.title = language === "en-GB"
    ? englishText[title.dataset.i18nTitle]
    : title.dataset.ptTitle;
  pageDescription.content = language === "en-GB"
    ? "Academic portal for the IFPR Cascavel Cycle A Capstone Project: documentation, flowcharts, seminar presentation and PinkWall and JavaSNES demonstrations."
    : pageDescription.dataset.ptDescription;

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  renderDiagrams();
  renderVideos(videoSearch.value);
  translatePdfViewerWhenReady();

  if (imageDialog.open && selectedDiagramIndex !== null) {
    const diagram = diagrams[selectedDiagramIndex];
    dialogTitle.textContent = textFor(diagram, "title");
    dialogImage.alt = textFor(diagram, "description");
  }

  if (selectedVideoIndex !== null) {
    videoTitle.textContent = textFor(videos[selectedVideoIndex], "title");
    updateSoundLabel();
  }

  if (videoMessageKey) videoMessage.textContent = runtimeMessage(videoMessageKey);
  if (pdfErrorKey) {
    pdfStatus.textContent = pdfErrorKey === "pdfLoadFailed"
      ? runtimeMessage(pdfErrorKey, pdfErrorDetail)
      : runtimeMessage(pdfErrorKey);
  }
}

function fileUrl(directory, file) {
  return `./${directory}/${encodeURIComponent(file).replaceAll("%2F", "/")}`;
}

function rememberPortugueseText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.dataset.ptText = element.textContent;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.dataset.ptAriaLabel = element.getAttribute("aria-label");
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.dataset.ptPlaceholder = element.getAttribute("placeholder");
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.dataset.ptTitleAttribute = element.getAttribute("title") ?? "";
  });

  const title = document.querySelector("[data-i18n-title]");
  title.dataset.ptTitle = document.title;
  pageDescription.dataset.ptDescription = pageDescription.content;
}

function renderDiagrams() {
  diagramGrid.innerHTML = diagrams.map((diagram, index) => {
    const source = fileUrl("fluxograms", diagram.file);
    const title = textFor(diagram, "title");
    const description = textFor(diagram, "description");
    return `
      <article class="diagram-card">
        <button class="diagram-open" type="button" data-diagram-index="${index}" aria-label="${currentLanguage === "en-GB" ? "Enlarge" : "Ampliar"}: ${title}">
          <span class="diagram-image-wrap">
            <img src="${source}" alt="${description}" loading="lazy" decoding="async">
          </span>
          <span class="diagram-caption">
            <strong>${title}</strong>
            <span aria-hidden="true">⤢</span>
          </span>
        </button>
      </article>
    `;
  }).join("");
}

function openDiagram(index) {
  const diagram = diagrams[index];
  if (!diagram) return;

  selectedDiagramIndex = index;
  imageZoom = 1;
  dialogImage.style.width = "";
  dialogImage.style.height = "";
  dialogTitle.textContent = textFor(diagram, "title");
  dialogImage.src = fileUrl("fluxograms", diagram.file);
  dialogImage.alt = textFor(diagram, "description");
  imageDialog.showModal();
  if (dialogImage.complete && dialogImage.naturalWidth) {
    requestAnimationFrame(fitDialogImage);
  }
}

function renderVideos(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase(currentLanguage);
  const filteredVideos = videos
    .map((video, index) => ({ ...video, index }))
    .filter((video) => `${video.title} ${video.titleEn} ${video.detail} ${video.detailEn} ${video.file}`.toLocaleLowerCase(currentLanguage).includes(normalizedQuery));

  videoList.innerHTML = filteredVideos.map((video) => `
    <button
      class="video-option"
      type="button"
      data-video-index="${video.index}"
      aria-pressed="${video.index === selectedVideoIndex}"
    >
      <span class="video-index">${String(video.index + 1).padStart(2, "0")}</span>
      <span class="video-option-copy">
        <strong>${textFor(video, "title")}</strong>
        <small>${textFor(video, "detail")}</small>
      </span>
    </button>
  `).join("");
  noVideoResults.hidden = filteredVideos.length !== 0;
}

function updateVideoStageSize() {
  if (!videoElement.videoWidth || !videoElement.videoHeight) return;

  const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
  const availableWidth = videoStage.parentElement.clientWidth;
  const availableHeight = Math.min(window.innerHeight * 0.74, 850);
  const width = Math.max(1, Math.min(availableWidth, availableHeight * aspectRatio));

  videoStage.style.width = `${width}px`;
  videoStage.style.aspectRatio = `${videoElement.videoWidth} / ${videoElement.videoHeight}`;
}

function selectVideo(index) {
  const video = videos[index];
  if (!video) return;

  videoElement.src = fileUrl("videos", video.file);
  videoElement.load();
  selectedVideoIndex = index;
  videoTitle.textContent = textFor(video, "title");
  videoMessage.textContent = "";
  videoMessageKey = null;
  videoPlaceholder.hidden = true;
  soundToggle.disabled = false;
  fullscreenButton.disabled = false;
  updateSoundLabel();

  videoList.querySelectorAll(".video-option").forEach((option) => {
    option.setAttribute("aria-pressed", String(Number(option.dataset.videoIndex) === index));
  });
}

function requestFullscreen(element, label) {
  if (!element.requestFullscreen) {
    videoMessageKey = "fullscreenUnavailable";
    videoMessage.textContent = runtimeMessage(videoMessageKey);
    return;
  }

  element.requestFullscreen().catch((error) => {
    console.error(`Could not open ${label} in full screen.`, error);
    videoMessageKey = "fullscreenFailed";
    videoMessage.textContent = runtimeMessage(videoMessageKey);
  });
}

function initializePdfViewer() {
  if (!window.PDFViewer || typeof window.PDFViewer.init !== "function") {
    pdfStatus.dataset.state = "error";
    pdfErrorKey = "pdfLibraryMissing";
    pdfStatus.textContent = runtimeMessage(pdfErrorKey);
    console.error("SimplePDFviewer não foi carregado: PDFViewer.init não está disponível.");
    return;
  }

  try {
    const viewer = window.PDFViewer.init(
      document.querySelector("#pdf-viewer"),
      {
        title: textFor(
          { title: "Trabalho de Conclusão do Ciclo A", titleEn: "Cycle A Capstone Project" },
          "title"
        ),
        modules: [{
          title: currentLanguage === "en-GB" ? "Final seminar" : "Seminário final",
          chapters: [{
            title: currentLanguage === "en-GB" ? "TCA presentation" : "Apresentação TCA",
            pdf: fileUrl("slides", "TCA.pdf")
          }]
        }]
      },
      {
        colorTheme: "#08724a",
        onError(error) {
          console.error(`Erro no leitor de PDF (${error.type}): ${error.message}`, error.error);
          pdfErrorKey = "pdfLoadFailed";
          pdfErrorDetail = error.message;
          pdfStatus.dataset.state = "error";
          pdfStatus.textContent = runtimeMessage(pdfErrorKey, pdfErrorDetail);
        }
      }
    );

    if (!viewer) {
      pdfStatus.dataset.state = "error";
      pdfErrorKey = "pdfInitFailed";
      pdfStatus.textContent = runtimeMessage(pdfErrorKey);
      console.error("SimplePDFviewer retornou null durante a inicialização.");
      return;
    }

    translatePdfViewer();
    pdfErrorKey = null;
    pdfStatus.textContent = "";
  } catch (error) {
    console.error("Erro ao inicializar o leitor de PDF.", error);
    pdfStatus.dataset.state = "error";
    pdfErrorKey = "pdfUnexpectedError";
    pdfStatus.textContent = runtimeMessage(pdfErrorKey);
  }
}

rememberPortugueseText();
setLanguage(detectPreferredLanguage());

renderDiagrams();
renderVideos();
initializePdfViewer();

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

diagramGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-diagram-index]");
  if (button) openDiagram(Number(button.dataset.diagramIndex));
});

document.querySelector("#image-dialog-close").addEventListener("click", () => {
  imageDialog.close();
});

document.querySelector("#image-fullscreen").addEventListener("click", () => {
  requestFullscreen(imageDialog, "o fluxograma");
});

dialogImage.addEventListener("load", fitDialogImage);

imageZoomIn.addEventListener("click", () => {
  setImageZoom(imageZoom * 1.25);
});

imageZoomOut.addEventListener("click", () => {
  setImageZoom(imageZoom / 1.25);
});

imageZoomReset.addEventListener("click", fitDialogImage);

imageViewport.addEventListener("wheel", (event) => {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  setImageZoom(imageZoom * (event.deltaY < 0 ? 1.1 : 1 / 1.1));
}, { passive: false });

imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

videoList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-video-index]");
  if (button) selectVideo(Number(button.dataset.videoIndex));
});

videoSearch.addEventListener("input", () => {
  renderVideos(videoSearch.value);
});

videoElement.addEventListener("loadedmetadata", updateVideoStageSize);
videoElement.addEventListener("error", () => {
  const video = videos.find((item) => fileUrl("videos", item.file) === videoElement.getAttribute("src"));
  if (!video) return;

  videoMessageKey = "videoLoadFailed";
  videoMessage.textContent = runtimeMessage(videoMessageKey);
  console.error(`Falha ao carregar o vídeo: ${video.file}`);
});

window.addEventListener("resize", updateVideoStageSize);
window.addEventListener("resize", () => {
  if (imageDialog.open) fitDialogImage();
});

soundToggle.addEventListener("click", () => {
  videoElement.muted = !videoElement.muted;
  updateSoundLabel();
});

fullscreenButton.addEventListener("click", () => {
  requestFullscreen(videoStage, "o vídeo");
});
