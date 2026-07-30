const scenarioLibrary = {
  taylor: {
    organization: "Taylor Fresh Foods",
    crisisType: "Food safety / public health",
    severity: "critical",
    regulatorPosture: "active",
    cadence: "Daily",
    facts: [
      "FDA and CDC investigated a multistate Cyclospora outbreak linked to shredded iceberg lettuce served at Taco Bell locations.",
      "FDA traceback identified convergence on Taylor Farms de Mexico as the supplier of the iceberg lettuce used by affected Taco Bell locations.",
      "Taylor Farms initiated a July 17, 2026 recall of iceberg lettuce sourced from central Mexico and removed implicated products from the market.",
      "The outbreak expanded to 9 states, with 1,947 people reporting Taco Bell exposure, 98 hospitalizations, and no deaths as of the FDA July 24 update.",
      "FDA said a July 19 false-positive lab result did not change the epidemiological basis for the recall or the ongoing investigation."
    ].join("\n"),
    unknowns: [
      "No confirmed positive product test for Cyclospora had been reported by FDA as of July 24.",
      "The exact contamination source, root cause, and full distribution picture were still under investigation.",
      "Additional implicated brands, restaurants, retailers, or distribution channels could still emerge."
    ].join("\n"),
    currentResponse: [
      "The July 19 company statement opened with a regulator-focused vindication frame.",
      "Consumer information, customer/operator information, and investigative status updates need to be easier to separate.",
      "The response should move from defending attribution to demonstrating protection, cooperation, independent review, and public updates."
    ].join("\n")
  },
  blank: {
    organization: "",
    crisisType: "AI product failure",
    severity: "high",
    regulatorPosture: "unclear",
    cadence: "Every 48 hours",
    facts: "",
    unknowns: "",
    currentResponse: ""
  }
};

const advisoryRules = [
  "Lead every active health or safety crisis with people affected, not the company's reputational position.",
  "Do not get ahead of regulators. If a regulator corrects a fact, use their language and clarify what did not change.",
  "Separate facts, unknowns, actions, and next updates so audiences can understand the situation without decoding spin.",
  "Use one spokesperson, one message map, and one source of truth.",
  "Go quiet on blame while getting louder on specific actions, product removal, cooperation, and prevention.",
  "Create separate resources for consumers, business customers, employees, regulators, and media.",
  "Bring in independent experts when internal credibility is depleted, then publish the process and findings.",
  "Plan the rebuild as a sustained trust campaign, not a single statement."
];

/*
 * Crisis-type profiles. Everything type-specific lives here so the advisory
 * genuinely changes when the crisis type changes.
 */
const crisisProfiles = {
  "Food safety / public health": {
    careNoun: "the people affected",
    commandTitle: "People first. Attribution later.",
    firstMoves: [
      "Create separate consumer and customer recall resources so each audience can find the right action fast.",
      "Publish a plain language product checker with lot codes, dates, and disposal steps, placed above any brand defense."
    ],
    redFlags: [
      "Claims that a corrected test result means the broader investigation or recall is resolved.",
      "Defensive scale minimizers before audience safety instructions.",
      "A recall page that mixes consumer, operator, media, and investor needs into one dense list."
    ],
    actionLine: "We have removed implicated products, we are cooperating fully with public health authorities, and we have asked independent experts to review our processes.",
    internalLine: "Please use the approved fact sheet, do not speculate on cause or attribution, and route every media, customer, or regulator inquiry to the crisis team.",
    qa: [
      {
        q: "Is your product safe?",
        a: "We are directing everyone to the current recall list and public health guidance. If a product is on that list, discard it. We will not ask anyone to take a risk while the investigation is open."
      },
      {
        q: "Did new information clear the company?",
        a: "A corrected fact should be described precisely. It does not automatically resolve the broader investigation, the recall, or the concern people rightly feel."
      },
      {
        q: "What are you changing?",
        a: "Product removal, sourcing decisions, independent review, dedicated customer resources, and a public update rhythm people can rely on."
      }
    ],
    earlyFocus: "confirm the recall scope, publish the product checker, and align every public word with regulator language",
    rebuildFocus: "safety systems, third-party validation, and visible sourcing changes"
  },
  "Cybersecurity incident": {
    careNoun: "the people whose data or access is at risk",
    commandTitle: "Confirm the scope before you characterize it.",
    firstMoves: [
      "Notify affected users with concrete protective steps. Password resets, session revocation, or credit monitoring, whichever applies.",
      "Align every disclosure with the legal and regulatory clocks in play before publishing timelines you cannot walk back."
    ],
    redFlags: [
      "Boilerplate that opens with how seriously you take security.",
      "Scope estimates published before forensics support them.",
      "Treating no evidence of misuse as if it means no misuse occurred."
    ],
    actionLine: "We have contained the incident, engaged independent forensic investigators, notified the appropriate authorities, and are contacting affected users directly with protective steps.",
    internalLine: "Do not discuss the incident on any external channel, do not confirm or deny scope, and route every inquiry to the response team. Forensics will change details, so only the approved fact sheet is safe to use.",
    qa: [
      {
        q: "How many people were affected?",
        a: "We will share confirmed numbers, not estimates. Forensic review is under way and we will update the count as it is verified, on the cadence we have committed to."
      },
      {
        q: "Was data stolen?",
        a: "We will say what we can confirm today and what is still under forensic review. We will not characterize the attacker's actions ahead of the evidence."
      },
      {
        q: "Why should users trust you now?",
        a: "Trust will come from what we do. Independent investigation, direct notification, concrete protective steps for users, and published findings when the review completes."
      }
    ],
    earlyFocus: "contain access, preserve evidence, start the notification clock, and pre-draft user protection guidance",
    rebuildFocus: "independent security audit findings, control changes, and transparent disclosure practice"
  },
  "AI product failure": {
    careNoun: "the people the system affected",
    commandTitle: "Own the system. Explain it in plain language.",
    firstMoves: [
      "Publish a plain language account of what the system did, what it was designed to do, and the gap between the two.",
      "Pause or visibly gate the affected feature, and give affected users a human review path rather than an automated appeal."
    ],
    redFlags: [
      "Blaming the model as if no person or process owns its behavior.",
      "Calling real harm an edge case.",
      "Promising a fix date before the root cause is understood."
    ],
    actionLine: "We have paused the affected system, we are reviewing every impacted case with human oversight, and we will publish what we find along with the changes we make.",
    internalLine: "Do not debate cause or blame externally, and do not minimize what happened. Point affected users to the review path, and flag any case the current process is not catching.",
    qa: [
      {
        q: "How did this happen?",
        a: "We will explain it in plain language once the review confirms the mechanism. What we can say now is what the system did, who was affected, and what we have paused while we fix it."
      },
      {
        q: "Why should anyone trust your AI now?",
        a: "Because of how we handle this. Human review for affected people, a published account of the failure, and visible changes before the system returns."
      },
      {
        q: "When will the feature come back?",
        a: "When the root cause is fixed and verified, not before. We would rather be slow and right than fast and back here again."
      }
    ],
    earlyFocus: "freeze the failing behavior, quantify who was affected, and open a human review path",
    rebuildFocus: "published root cause, human oversight changes, and staged reintroduction with clear criteria"
  },
  "Executive conduct": {
    careNoun: "the people directly affected",
    commandTitle: "The company voice and the person are not the same thing now.",
    firstMoves: [
      "Separate the company's voice from the executive's voice immediately. One does not defend the other.",
      "Commission an independent investigation with outside counsel, and let a board-level spokesperson carry the message."
    ],
    redFlags: [
      "Character references offered before facts are established.",
      "Full confidence statements in the middle of an open investigation.",
      "Legal language where a human acknowledgment is needed."
    ],
    actionLine: "The board has engaged independent outside counsel to investigate, appropriate interim steps have been taken, and we will act on the findings and say so publicly.",
    internalLine: "Do not speculate about the investigation or the people involved, on any channel. Support is available for anyone affected, and every inquiry goes to the designated spokesperson.",
    qa: [
      {
        q: "Do you stand by the executive?",
        a: "An independent investigation is under way and we will act on its findings. Expressing confidence either way would prejudge work that needs to be credible."
      },
      {
        q: "Why is the executive still in place?",
        a: "We will describe the interim steps that have been taken. What we will not do is announce conclusions before the investigation reaches them."
      },
      {
        q: "What does this say about your culture?",
        a: "The honest answer is that the investigation will tell us, and we have committed to publishing what changes as a result."
      }
    ],
    earlyFocus: "establish the independent investigation, set interim governance, and separate spokespeople",
    rebuildFocus: "published findings, governance changes, and consistent follow-through over quarters, not weeks"
  },
  "Regulatory investigation": {
    careNoun: "the customers and stakeholders who rely on us",
    commandTitle: "Cooperate loudly. Litigate nowhere public.",
    firstMoves: [
      "Appoint a single regulatory liaison and pre-clear all factual public language with counsel before it ships.",
      "Document cooperation concretely. Deadlines met, materials produced, meetings held, so the record speaks for itself."
    ],
    redFlags: [
      "Arguing the regulator's case in the press instead of the process.",
      "Predicting the investigation's outcome in any direction.",
      "Absolute statements of no wrongdoing that the record may later contradict."
    ],
    actionLine: "We are cooperating fully with the investigation, producing what has been requested on time, and continuing to serve our customers without disruption while the process runs.",
    internalLine: "Do not discuss the investigation with anyone outside the company, including in writing. Business continues as normal, and every inquiry about the matter goes to the designated liaison.",
    qa: [
      {
        q: "Did the company break the law?",
        a: "That is what the process exists to determine, and we are cooperating with it fully. We are not going to argue the matter in public while it is open."
      },
      {
        q: "What happens to customers during the investigation?",
        a: "Service continues as normal. If anything changes for customers we will tell them directly and first."
      },
      {
        q: "Will you release the findings?",
        a: "We will be as transparent as the process allows, and we will describe any changes we make as a result."
      }
    ],
    earlyFocus: "align counsel and comms on one fact base, and brief leadership on what silence protects",
    rebuildFocus: "the cooperation record, any resulting changes, and steady customer communication throughout"
  }
};

const severityProfiles = {
  critical: {
    label: "Critical",
    firstWindow: "0 to 12 hours",
    urgencyMove: "Treat the next 12 hours as the whole game. Stand up the war room, clear executive calendars, and get the first update out.",
    minCadence: ["Daily", "Twice daily"]
  },
  high: {
    label: "High",
    firstWindow: "0 to 24 hours",
    urgencyMove: "Stand up the war room today and get the first update out within 24 hours, even if it only commits to a cadence.",
    minCadence: ["Daily", "Twice daily", "Every 48 hours"]
  },
  medium: {
    label: "Medium",
    firstWindow: "0 to 48 hours",
    urgencyMove: "Assign owners now so the response does not drift. A medium crisis handled slowly becomes a high one.",
    minCadence: ["Daily", "Twice daily", "Every 48 hours"]
  },
  watch: {
    label: "Watch",
    firstWindow: "Now, before it goes public",
    urgencyMove: "Prepare like it goes public tomorrow. Draft the holding statement, brief the spokesperson, and decide the escalation triggers.",
    minCadence: ["Daily", "Twice daily", "Every 48 hours", "Only on material changes"]
  }
};

const stakeholderDefaults = {
  "Affected people": {
    priority: "Care",
    need: "Health or harm guidance, acknowledgement, a support path, and a clear update cadence.",
    action: "Lead with empathy, cite authoritative guidance, and make support actions easy to find."
  },
  Consumers: {
    priority: "Clarity",
    need: "What is affected, what to do about it, and what remains unknown.",
    action: "Publish a plain language checker or FAQ and keep it above brand defense."
  },
  Regulators: {
    priority: "Cooperation",
    need: "Fact alignment, fast document flow, and no public contradiction without written confirmation.",
    action: "Pre-clear factual language where possible and avoid litigating attribution in public."
  },
  "Customers / operators": {
    priority: "Continuity",
    need: "Specifics they can act on. Affected items, replacement paths, scripts for their own customers, and contact routing.",
    action: "Create a dedicated customer hub with lists, guidance, and a named contact."
  },
  Employees: {
    priority: "Alignment",
    need: "The honest internal story, approved language, manager talking points, and escalation paths.",
    action: "Brief employees before external updates when timing allows and equip frontline teams."
  },
  Media: {
    priority: "Proof",
    need: "Facts, timeline, what changed, what did not change, spokesperson access, and source links.",
    action: "Issue a concise fact sheet and keep it updated on the committed cadence."
  }
};

const form = document.querySelector("#incidentForm");
const preset = document.querySelector("#scenarioPreset");
const copyButtons = document.querySelectorAll(".copy-button");

function getField(id) {
  return document.querySelector(`#${id}`);
}

function setScenario(name) {
  const scenario = scenarioLibrary[name];
  getField("organization").value = scenario.organization;
  getField("crisisType").value = scenario.crisisType;
  getField("severity").value = scenario.severity;
  getField("regulatorPosture").value = scenario.regulatorPosture;
  getField("cadence").value = scenario.cadence;
  getField("facts").value = scenario.facts;
  getField("unknowns").value = scenario.unknowns;
  getField("currentResponse").value = scenario.currentResponse;
  generateAdvisory();
}

function getInputs() {
  const stakeholders = Array.from(document.querySelectorAll('input[name="stakeholder"]:checked')).map((node) => node.value);
  return {
    organization: getField("organization").value.trim() || "the organization",
    crisisType: getField("crisisType").value,
    severity: getField("severity").value,
    regulatorPosture: getField("regulatorPosture").value,
    cadence: getField("cadence").value,
    facts: getField("facts").value.trim(),
    unknowns: getField("unknowns").value.trim(),
    currentResponse: getField("currentResponse").value.trim(),
    stakeholders
  };
}

/*
 * Transparent posture checks. Every score is the share of named checks
 * passed, and the checks are shown below the scores so the numbers are
 * earned, not decorative.
 */
function runChecks(inputs) {
  const text = `${inputs.facts} ${inputs.currentResponse}`.toLowerCase();
  const sev = severityProfiles[inputs.severity];

  const factChecks = [
    { label: "Confirmed facts are filled in, not empty", met: inputs.facts.length > 40 },
    { label: "Unknowns are captured separately from facts", met: inputs.unknowns.length > 20 },
    { label: "Facts include dates or numbers, not just adjectives", met: /\d/.test(inputs.facts) },
    { label: "Update cadence matches the severity", met: sev.minCadence.includes(inputs.cadence) }
  ];

  const empathyChecks = [
    { label: "Affected people are a named stakeholder", met: inputs.stakeholders.includes("Affected people") },
    { label: "Inputs mention people, health, or harm, not just the brand", met: /(affected|harm|health|safety|people|patient|famil|user)/.test(text) },
    { label: "No vindication or blame framing detected", met: !/(vindicat|exonerat|cleared us|not our fault|false accus|witch hunt)/.test(text) }
  ];

  const trustChecks = [
    { label: "Independent review or outside experts are in play", met: /(independent|third.party|outside (counsel|expert)|external review|audit|forensic)/.test(text) },
    { label: "Concrete actions are described, not just positioning", met: /(recall|remov|paus|suspend|notif|reset|refund|investigat|review|contain|cooperat|produc)/.test(text) },
    { label: "Regulator relationship is not in public conflict", met: inputs.regulatorPosture !== "adversarial" }
  ];

  const score = (checks) => Math.round((checks.filter((c) => c.met).length / checks.length) * 100);

  return {
    facts: { score: score(factChecks), checks: factChecks },
    empathy: { score: score(empathyChecks), checks: empathyChecks },
    trust: { score: score(trustChecks), checks: trustChecks }
  };
}

function buildAdvice(inputs) {
  const profile = crisisProfiles[inputs.crisisType];
  const sev = severityProfiles[inputs.severity];
  const hasRegulator = inputs.regulatorPosture !== "none";
  const isAdversarial = inputs.regulatorPosture === "adversarial";

  let commandTitle = profile.commandTitle;
  if (isAdversarial) {
    commandTitle = "Stop litigating the regulator. Rebuild on facts and action.";
  } else if (inputs.severity === "watch") {
    commandTitle = "Prepare like it goes public tomorrow.";
  }

  const firstMoves = [
    sev.urgencyMove,
    `Open the next update with concern for ${profile.careNoun} and the practical step they should take.`,
    "Publish a single fact sheet that separates confirmed facts, unknowns, actions taken, and the next update time.",
    "Assign one accountable spokesperson and freeze side-channel interpretations until the message map is aligned.",
    ...profile.firstMoves
  ];
  if (hasRegulator) {
    firstMoves.push(
      isAdversarial
        ? "Take the disagreement with the regulator private. Publicly, use their language precisely and clarify only what did not change."
        : "Use regulator language precisely and clarify what changed without implying the process is over."
    );
  }

  const redFlags = [
    "Anything that sounds like vindication while people are still affected.",
    "Multiple spokespeople interpreting the same facts differently.",
    "Future-looking trust language without concrete actions behind it.",
    ...profile.redFlags
  ];

  const messageMap = [
    {
      label: "Care",
      text: `${capitalize(profile.careNoun)} come first. The response should acknowledge harm, direct people to help, and never make the company the victim.`
    },
    {
      label: "Facts",
      text: "The public needs a clean timeline. What is confirmed, what remains unknown, and what did not change when new information arrived."
    },
    {
      label: "Action",
      text: `${inputs.organization} should show its work. ${profile.actionLine}`
    }
  ];

  return { commandTitle, firstMoves, redFlags, messageMap };
}

function buildStakeholders(inputs) {
  return inputs.stakeholders.map((name) => ({
    name,
    ...stakeholderDefaults[name]
  }));
}

function buildAssets(inputs) {
  const profile = crisisProfiles[inputs.crisisType];
  const org = inputs.organization;
  const cadencePhrase = inputs.cadence === "Only on material changes"
    ? "whenever material facts change"
    : inputs.cadence.toLowerCase();

  const holdingStatement = [
    `${org} is focused first on ${profile.careNoun} and on the actions that protect them.`,
    `Here is what we know now. ${summarizeLine(inputs.facts)}`,
    `Here is what remains under review. ${summarizeLine(inputs.unknowns)}`,
    profile.actionLine,
    `We will update this page ${cadencePhrase}, or sooner if the situation changes.`
  ].join("\n\n");

  const internalNote = [
    `Team, we are in an active ${inputs.crisisType.toLowerCase()} response. The standard is simple. Care, facts, and action.`,
    profile.internalLine,
    "We will share the same fact base internally before each public update when timing allows. If you see a gap in what customers or colleagues need, escalate it today."
  ].join("\n\n");

  const mediaQa = [
    ...profile.qa,
    {
      q: "When will you know more?",
      a: `Our committed update cadence is ${inputs.cadence.toLowerCase()}. If something material changes sooner, we will not wait for the scheduled update.`
    }
  ];

  return { holdingStatement, internalNote, mediaQa };
}

function buildTimeline(inputs) {
  const profile = crisisProfiles[inputs.crisisType];
  const sev = severityProfiles[inputs.severity];

  return [
    {
      period: sev.firstWindow,
      text: `Stabilize the fact base, align executives, and issue a concise care-first update. For this crisis type, ${profile.earlyFocus}.`
    },
    {
      period: "24 to 72 hours",
      text: "Segment stakeholder resources, brief employees and customers, publish the decision log, and name the independent review scope."
    },
    {
      period: "Week 1",
      text: "Move from statement posture to proof posture. Show progress on removal or containment, review status, and stakeholder support."
    },
    {
      period: "30 to 90 days",
      text: "Publish review findings, explain what changed operationally, train spokespeople and frontline teams, and measure trust recovery."
    },
    {
      period: "6 to 12 months",
      text: `Run a sustained rebuild program anchored in ${profile.rebuildFocus}, with transparent progress reporting throughout.`
    }
  ];
}

function summarizeLine(value) {
  if (!value) return "We are consolidating confirmed facts and will update the public record.";
  const firstLine = value.split("\n").find((line) => line.trim().length > 0) || value;
  return firstLine.replace(/^\s*[-*]\s*/, "").trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderMessageMap(items) {
  const target = document.querySelector("#messageMap");
  target.innerHTML = items.map((item) => `
    <div class="message-pillar">
      <b>${escapeHtml(item.label)}</b>
      <span>${escapeHtml(item.text)}</span>
    </div>
  `).join("");
}

function renderChecks(results) {
  const target = document.querySelector("#postureChecks");
  const groups = [
    { name: "Facts", data: results.facts },
    { name: "Empathy", data: results.empathy },
    { name: "Trust", data: results.trust }
  ];
  target.innerHTML = groups.map((group) => `
    <div class="check-group">
      <h4>${escapeHtml(group.name)} <span>${group.data.score}</span></h4>
      <ul>
        ${group.data.checks.map((check) => `
          <li class="${check.met ? "check-met" : "check-missing"}">${escapeHtml(check.label)}</li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

function renderStakeholders(items) {
  const target = document.querySelector("#stakeholderGrid");
  target.innerHTML = items.map((item) => `
    <article class="stakeholder-card">
      <h3>${escapeHtml(item.name)} <span class="tag">${escapeHtml(item.priority)}</span></h3>
      <p><strong>What they need</strong> ${escapeHtml(item.need)}</p>
      <p><strong>Your move</strong> ${escapeHtml(item.action)}</p>
    </article>
  `).join("");
}

function renderAssets(assets) {
  document.querySelector("#holdingStatement").textContent = assets.holdingStatement;
  document.querySelector("#internalNote").textContent = assets.internalNote;
  document.querySelector("#mediaQa").innerHTML = assets.mediaQa.map((item) => `
    <div>
      <dt>${escapeHtml(item.q)}</dt>
      <dd>${escapeHtml(item.a)}</dd>
    </div>
  `).join("");
}

function renderTimeline(items) {
  document.querySelector("#trustTimeline").innerHTML = items.map((item) => `
    <article class="timeline-step">
      <strong>${escapeHtml(item.period)}</strong>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function generateAdvisory() {
  const inputs = getInputs();
  const results = runChecks(inputs);
  const advice = buildAdvice(inputs);
  const stakeholders = buildStakeholders(inputs);
  const assets = buildAssets(inputs);
  const timeline = buildTimeline(inputs);

  document.querySelector("#statusScenario").textContent = inputs.organization;
  document.querySelector("#statusSeverity").textContent = severityProfiles[inputs.severity].label;
  document.querySelector("#statusCadence").textContent = inputs.cadence;
  document.querySelector("#commandTitle").textContent = advice.commandTitle;
  document.querySelector("#scoreFacts").textContent = results.facts.score;
  document.querySelector("#scoreEmpathy").textContent = results.empathy.score;
  document.querySelector("#scoreTrust").textContent = results.trust.score;

  renderChecks(results);
  renderList(document.querySelector("#firstMoves"), advice.firstMoves);
  renderList(document.querySelector("#redFlags"), advice.redFlags);
  renderList(document.querySelector("#advisoryRules"), advisoryRules);
  renderMessageMap(advice.messageMap);
  renderStakeholders(stakeholders);
  renderAssets(assets);
  renderTimeline(timeline);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((node) => node.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

preset.addEventListener("change", () => setScenario(preset.value));

document.querySelector("#resetScenario").addEventListener("click", () => setScenario(preset.value));

document.querySelector("#printAdvisory").addEventListener("click", () => window.print());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateAdvisory();
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`);
    await navigator.clipboard.writeText(target.textContent);
    const original = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
});

setScenario("taylor");
