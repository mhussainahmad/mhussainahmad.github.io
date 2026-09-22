import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiteNav } from "@/components/researcher/SiteNav";
import { Footer } from "@/components/researcher/Footer";
import { Section } from "@/components/researcher/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { Emph, Highlight } from "@/components/ui/highlight";

export const metadata: Metadata = {
  title: "Gauntlet — Muhammad Hussain Ahmad",
  description:
    "Gauntlet is an evaluation harness for learned robot policies: axis-wise failure breakdowns, checkpoint regression, and multi-sim backends (MuJoCo, PyBullet, Genesis, Isaac Sim).",
};

const backends = [
  { name: "MuJoCo", note: "Core tabletop env" },
  { name: "PyBullet", note: "Optional extra" },
  { name: "Genesis", note: "Optional extra" },
  { name: "Isaac Sim", note: "GPU / RTX required" },
];

const phases = [
  {
    title: "Phase 1 — MVP",
    items: [
      "Tabletop MuJoCo environment with seven perturbation axes",
      "Parallel Runner with full seed control",
      "Breakdown-first HTML + JSON reports",
      "CLI: gauntlet run / report / compare",
    ],
  },
  {
    title: "Phase 2 — Real policies & observability",
    items: [
      "PyBullet, Genesis, and Isaac Sim backends",
      "OpenVLA and SmolVLA adapters",
      "Runtime drift detection (monitor)",
      "ROS 2 publishing + recording",
      "Multi-camera observations and structured report diffs",
      "Plugin system for third-party policies and envs",
    ],
  },
  {
    title: "Phase 3 — Fleet tooling (partial)",
    items: [
      "Fleet-wide failure-mode aggregator (gauntlet aggregate)",
      "Self-contained web dashboard",
      "Real-to-sim scene-ingestion pipeline",
      "RealSimRenderer Protocol for gaussian-splatting plugins",
    ],
  },
];

const details = [
  "Wraps any policy behind a uniform adapter and runs it across parameterized simulator perturbations — lighting, camera pose, textures, clutter, initial conditions — producing reports that break failures down by axis instead of hiding them in an aggregate mean.",
  "Four backends share action/observation spaces byte-for-byte and the canonical seven perturbation axes. Cross-backend compare requires --allow-cross-backend so simulator drift is never mistaken for policy regression.",
  "Sampling beyond full Cartesian grids: latin_hypercube and sobol for high-dimensional axes (e.g. 5⁵ = 3,125 cells → ~32 LHS/Sobol samples for ~98× fewer rollouts).",
  "Runtime drift detection fits an observation autoencoder on a known-good sweep and scores candidate trajectories for OOD rollouts.",
  "Image observations (render_in_obs / multi-camera CameraSpec) keep obs[\"image\"] and obs[\"images\"][name] contracts so single-view (OpenVLA) and multi-view (SmolVLA, ACT, Diffusion Policy) adapters work by swapping only the env factory.",
  "ROS 2 integration publishes episode results onto the graph and records live sessions back into Gauntlet’s artefact format for offline analysis.",
];

export default function GauntletPage() {
  return (
    <div className="min-h-svh w-full bg-background">
      <SiteNav />
      <main className="mx-auto w-full max-w-[48rem] px-5 pt-20 pb-12 sm:px-8 sm:pt-16 sm:pb-16">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2 gap-1.5 font-serif text-muted-foreground"
          render={<Link href="/" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to home
        </Button>

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="font-serif">
              Project
            </Badge>
            <Badge variant="outline" className="font-serif">
              Robotics eval harness
            </Badge>
          </div>
          <h1 className="font-heading text-[2.1rem] font-bold leading-tight tracking-tight sm:text-[2.5rem]">
            Gauntlet
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-foreground/90">
            An evaluation harness for learned robot policies. It answers one
            question for VLA / diffusion / scripted policies:{" "}
            <Highlight>
              how does this policy fail, and has the latest checkpoint
              regressed against the last one?
            </Highlight>
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full font-serif shadow-none"
              render={
                <a
                  href="https://github.com/mhussainahmad/gauntlet"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <GitHubIcon className="size-3.5 text-primary" />
              View on GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full font-serif shadow-none"
              render={
                <a
                  href="https://github.com/mhussainahmad/gauntlet#quickstart"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <ExternalLink className="size-3.5 text-primary" />
              Quickstart
            </Button>
          </div>
        </header>

        <figure className="mt-10 overflow-hidden rounded-lg border border-border bg-muted/30">
          <img
            src="/gauntlet/architecture.jpg"
            alt="Gauntlet architecture: Policy Adapter to Suite to Runner to Report, with MuJoCo, PyBullet, Genesis, and Isaac Sim backends"
            className="h-auto w-full"
            width={1280}
            height={720}
          />
          <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
            Architecture — policy adapters, perturbation suites, parallel
            runner, and breakdown-first reports across four simulators.
          </figcaption>
        </figure>

        <Section title="Why it exists" spacing="lg">
          <div className="space-y-4 text-[0.98rem] leading-[1.75]">
            <p>
              Mean success rate hides the structure of failures. A policy that
              scores 78% overall may fail{" "}
              <Highlight>100% of the time</Highlight> when cube
              texture is wood and lighting drops below 0.6. Gauntlet refuses
              that compression — every report leads with the failure axis
              combination, not the aggregate.
            </p>
            <p>
              It is the robotics analogue of{" "}
              <Emph>pytest + Sentry</Emph>:
              pre-deployment regression testing plus structured failure-mode
              analytics for policies that can’t be debugged by reading code —
              because there is no code, only weights.
            </p>
          </div>
        </Section>

        <figure className="mt-10 overflow-hidden rounded-lg border border-border bg-muted/30">
          <img
            src="/gauntlet/report.jpg"
            alt="Concept illustration of Gauntlet failure-cluster reporting next to a tabletop robot scene"
            className="h-auto w-full"
            width={1280}
            height={720}
          />
          <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
            Reports lead with failure clusters and per-axis breakdowns — not a
            single success-rate hero metric.
          </figcaption>
        </figure>

        <Section title="What it does" spacing="lg">
          <ul className="list-disc space-y-2.5 pl-5 marker:text-primary">
            {details.map((item) => (
              <li key={item} className="text-[0.95rem] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Simulator backends" spacing="lg">
          <div className="grid gap-3 sm:grid-cols-2">
            {backends.map((backend) => (
              <div
                key={backend.name}
                className="rounded-lg border border-border px-4 py-3"
              >
                <p className="font-heading font-bold">{backend.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {backend.note}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Roadmap shipped" spacing="lg">
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div key={phase.title}>
                <h3 className="font-heading text-[1.05rem] font-bold">
                  {phase.title}
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] marker:text-primary">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {i < phases.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Try it" spacing="lg">
          <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-[0.85rem] leading-relaxed">
            {`uv sync
uv run gauntlet run examples/suites/tabletop-smoke.yaml --policy random --out out/
# open out/report.html`}
          </pre>
          <p className="mt-4 text-sm text-muted-foreground">
            Full design and CLI docs live in the{" "}
            <a
              href="https://github.com/mhussainahmad/gauntlet"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              repository
            </a>
            .
          </p>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
