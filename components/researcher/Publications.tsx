"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Publication = {
  title: string;
  status: "In progress" | "Submitted";
  venue?: string;
  abstract?: string;
};

const publications: Publication[] = [
  {
    title:
      "A Component-Wise Ablation Study of Real-Time Audio-Visual Emotion Recognition",
    status: "Submitted",
    venue: "GLOBCER",
    abstract:
      "Real-time audio-visual emotion recognition must predict from past observations. However, published recognizers mostly rely on pre-recorded clips, and they share a common design of pretrained encoders fused by a learned head. Each publication ablates only the module it introduces, so the accuracy of any shared component remains unexplored, as is the cost of the causality constraint that a live system requires. This study presents a component-wise ablation of a causal, real-time audio-visual emotion recognition system constructed from pretrained components, over 303 training runs across CREMA-D and RAVDESS datasets. The protocol uses eleven speaker-disjoint folds with three seeds per fold. Each ablation compares two configurations that differ in a single component. One configuration has the component present, and one excludes the component while keeping the remaining components of the system same. System accuracy depends primarily on the pretrained encoders. On one CREMA-D fold, frozen pretrained features achieve 69.3 percent test accuracy, and the full system achieves 78.5 percent, whereas a smaller model trained from scratch achieves only 42.1 percent on the same CREMA-D fold. Removing the causality restriction, so that the model may also use later frames of a clip, changes accuracy by less than one point on CREMA-D and RAVDESS datasets. Weight averaging contributes 2.6 points to the system accuracy on RAVDESS dataset, and a stronger causal temporal layer increases the system accuracy by 1.8 points on CREMA-D dataset. The selected system runs at 6.0 milliseconds per streaming step on Graphics Processing Unit (GPU) and 21.0 milliseconds on Central Processing Unit (CPU) and reaches 75.9 percent on CREMA-D and 70.0 percent on RAVDESS. The larger offline teacher model used to train the selected system, which takes each clip in full as input, reaches 79.8 percent on CREMA-D.",
  },
  {
    title:
      "A Data-Driven Group-Level Recommender for Object and Difficulty Selection in Cerebral Palsy Rehabilitation Games",
    status: "Submitted",
    venue: "JMIR Rehabilitation and Assistive Technologies",
    abstract:
      "Cerebral palsy is one of the most common childhood-onset motor neurodevelopmental disorders, affecting approximately 18 million people worldwide. Upper-limb function and manual dexterity impairments are common and can significantly affect independence and participation in daily activities. Computer game-aided rehabilitation has emerged as a promising strategy for improving manual dexterity through repetitive, task-specific practice while sustaining engagement in children with motor impairments. Therapists select therapeutic objects and game difficulty based on clinical assessment and experience. However, long-term home-based programs require repeated reassessment as motor ability changes. Few telerehabilitation platforms support a wide range of object-based interactions or provide continuous, objective performance assessment, limiting long-term monitoring and timely feedback. Moreover, limited research has explored using prior performance data for outcome prediction, motion classification, adaptive difficulty tuning, and therapeutic object selection. We propose a data-driven recommender system that generates object-difficulty recommendations for clinically defined subgroups based on Age band and Manual Ability Classification System level. The system is trained on 1,888 direction-specific observations from 117 participants and employs Extreme Gradient Boosting to model interactions among demographic, clinical, and task-related variables. Results indicate that rehabilitation success rates are predictable between clinical subgroups but not within them. Thus, the system serves as a subgroup-level default generator rather than a per-child predictor. In an observational evaluation, sessions using the recommended pair attained higher success rates than other sessions within the same subgroup across all six CP subgroups, with a mean improvement of 10.98 percentage points. Because the data are observational, the system is a prototype requiring prospective clinical validation before clinical use.",
  },
  {
    title:
      "Subject-Coupled Markerless End-Effector Teleoperation for Therapist-Guided Arm Rehabilitation with a Constrained Optimization Retargeter",
    status: "In progress",
    abstract:
      "Recovering arm function after stroke needs many repetitions of guided motion, and the number a patient completes is limited by clinician supervision. Markerless teleoperation would let one operator guide a rehabilitation robot from wrist motion alone, with nothing worn and nothing held. Existing markerless retargeters map the operator's full arm pose onto a robot that manipulates objects. That arrangement is wrong when the subject holds the end effector, because then the robot's path is the subject's path. Only the operator's wrist position matters, and the retargeter must deliver a feasible joint command every control tick. We present a constrained retargeter for subject-coupled teleoperation. Session-start calibration maps the operator's workspace onto a 7-DoF Kinova Gen3 arm. A per-frame quadratic program maps each wrist target to smooth joint commands within joint, velocity, and self-collision limits, biased toward a neutral posture. A safety layer bounds joint velocity and prevents discontinuous commands. The pipeline runs at 100 Hz on a RealSense camera and MediaPipe in ROS, without motion capture or worn devices. We evaluated four therapy-relevant tasks against TRAC-IK, RelaxedIK, a DexPilot-style retargeter, and a Cartesian impedance controller over 1,080 simulation-derived trials. The constrained tracker improved end-effector RMSE by 43% over RelaxedIK, 59% over TRAC-IK, and 71% over Cartesian impedance (p < 10⁻²⁰). It matched the DexPilot-style baseline within 1.5% and led on the two sustained tasks. The live control tick cost 2.59 ms at the 99th percentile against a 10 ms limit. Ablation showed that the neutral-posture term halves integrated jerk at a small accuracy cost, and that a learned residual was not worth retaining. Markerless operator-to-robot retargeting is therefore feasible in a real-time loop for remote upper-limb rehabilitation. This study is simulation-based with live robot timing; clinical evaluation with therapists and patients remains future work.",
  },
  {
    title:
      "A Confidence-Weighted Multi-Modal Gesture Arbitration Framework for Markerless Rehabilitation Teleoperation",
    status: "In progress",
    abstract:
      "Teleoperated rehabilitation needs two channels: continuous motion and discrete intent such as grip, release, mode switch, and pause. A haptic master usually supplies the second channel with buttons. Markerless teleoperation removes that master, so discrete intent must travel over the same camera that carries pose. Prior systems bind one hand posture to one gate, which gives a single bit and little vocabulary for a session. We present a confidence-weighted multi-gesture arbitration framework. Per-gesture landmark detectors feed one active intent through a threshold-and-hysteresis arbiter with dwell-time gates. Three wraps bound the arbiter: a motion-context filter that suppresses activations during fast reaches, a sync gate that prevents grip on a stale simulator seed, and an occlusion guard that prevents release on brief detection dropout. The framework runs over MediaPipe Hands at 100 Hz in ROS beside the teleoperation loop. We evaluated offline on recorded landmark streams and online against a proximity-only baseline in a single-operator session of fifteen reach-and-place motions per condition. The detector alone produced 7.8 false activations per minute of no-gesture time, eight times a working limit of one. After arbitration, the rate reaching the arm was 0.16 per minute over 195 minutes of deployed operation. Under the proposed arbiter the operator completed all fifteen motions with zero false-activation candidates. Under the proximity gate the operator could not disengage: one engagement trapped the operator for 44 seconds, and only one of fifteen motions completed. Median arbitration latency was 4.3 μs per tick (95th percentile 4.6 μs), well inside the 10 ms control budget. Reliable disengagement is the safety-critical direction in clinical use, and it is where a single-posture gate fails. A full clinician study is retained as follow-on work.",
  },
  {
    title:
      "Predictive Simulation-in-the-Loop Shared Autonomy for Markerless Rehabilitation Teleoperation",
    status: "In progress",
    abstract:
      "A rehabilitation robot moves a subject's arm in a cluttered workcell, so a free-space command can drive the gripper into a surface the operator cannot see coming. Markerless teleoperation removes the haptic master and related feedback about impending contact. Reactive safety layers answer after contact. Predictive filters that answer before it often use a simplified body model, such as a capsule, that cannot represent a gripper and therefore misses the geometry that touches first. We propose a predictive shared-autonomy architecture built on a persistent Genesis digital twin of the Kinova arm. The twin runs at 100 Hz and advances the commanded trajectory over a short horizon. It emits predicted contact and joint-limit events to ROS. A three-mode arbiter (warning, velocity blending, and command override) escalates only as far as the predicted hazard requires. On a simulation bench the twin predicted make-contact events at a true-positive rate of 1.00 and a false-positive rate at or below 0.08 for horizons of 50–300 ms. Sustained rollouts met the 10 ms real-time limit for horizons up to 100 ms on a sparse scene, and only 50 ms on a cluttered one. In a closed-loop evaluation against a barrier-filter baseline without a simulator, the contact channel alone halved peak penetration from 3.82 to 1.87 mm with no cost in completion time, though it did not eliminate contact or beat the baseline's 1.79 mm. On a measured hazard the baseline capsule stayed 52.9 mm clear while the twin predicted contact, showing the baseline was blind by construction. Acting on that prediction did not yet convert into better avoidance: velocity blending slows the arm without changing the path. Converting predictive advantage into avoidance therefore needs an arbiter that can re-route, which is the concrete next step this evaluation identifies.",
  },
  {
    title:
      "Online Sim-to-Real Parameter Adaptation for Predictive Teleoperation: Bounded-Divergence Tracking of the Kinova Gen3 in Genesis",
    status: "In progress",
    abstract:
      "Predictive teleoperation often runs a physics twin that advances the commanded trajectory ahead of the real robot to flag imminent contact or joint-limit violations. The twin is only useful if it stays aligned with the arm, and that alignment is not static: payloads change when a subject takes hold, wrist loads change with posture, and friction changes as the machine warms. Offline one-shot calibration fits parameters once and cannot track a session after conditions change. We propose an online sim-to-real adaptation loop for a Kinova arm in Genesis. A recursive estimator observes the residual between simulated and real joints on a structured excitation trajectory, updates physics parameters covering delay, damping, friction, and backlash, and pushes them back into the twin. We implement an extended Kalman filter (EKF) and a moving-horizon estimator (MHE) over a two-second window. On a 66-second simulator run with a +500 g payload added mid-session, the online EKF held per-joint residual at or below 0.65 mrad before and after the change. A frozen offline baseline reached above 1100 mrad within seconds of the payload add and never recovered. The MHE matched the EKF at this perturbation size. On the physical arm, a 485 g payload step produced large relative parameter drifts on load-bearing joints, while a 185 g step did not. End-effector pose matched the model to under 1 mm. Live timing met the control budget under a 1 kHz driver (EKF p95 2.8 ms; MHE p95 at its 0.5 s solve cap). An arm excitation session tightened admissible lookahead to roughly 180–290 ms, below the sim-derived range. Keeping a twin aligned during a session is therefore a tractable online problem rather than a one-time calibration step.",
  },
  {
    title:
      "Subject-Specific Range-of-Motion Adaptation for Therapist-Guided Rehabilitation Teleoperation: Method and Evaluation Protocol",
    status: "In progress",
    abstract:
      "A rehabilitation robot that moves a subject's arm must stay inside what that arm can comfortably reach. Comfortable range differs between subjects and changes within a session as the subject warms or tires. Existing systems either enforce a fixed motion envelope, which ignores that variability, or leave a per-session envelope to be set by hand, which adds clinician workload and is prone to unsafe error. Neither adapts while the session runs. We propose an online subject-specific range-of-motion adaptation method. It observes the first few operator-driven teleoperation trials and estimates per-joint bounds together with a task-space region on end-effector pose. A running min/max estimator with a configurable margin provides the online update. The envelope is enforced as a constraint in a shared-autonomy arbiter and as a stop condition in the safety supervisor, and is also used to rescale pre-authored trajectory-library motions to each subject in real time. The estimator, arbitration mode, stop condition, and trajectory rescaler are implemented and unit-tested. The analysis pipeline is verified end to end on scripted simulation. We describe an evaluation protocol in which a trained non-clinician operator drives the arm for a confederate with scripted range-of-motion constraints, using re-entry count as the primary endpoint. Across three scripted scenarios the online envelope produced 0.0 to 4.2 re-entries per 1000 control steps, against 435 to 452 for a fixed envelope. The envelope stop condition halted the arm within 260 ms of the trip. Coverage is reported descriptively and carries no claim of benefit. A clinician study with practising therapists is deferred pending ethics clearance. Deployment with stroke or spinal-cord-injury patients is out of scope and remains future work.",
  },
];

export function Publications() {
  const [openAbstract, setOpenAbstract] = useState<string | null>(null);

  return (
    <ol className="list-decimal space-y-4 pl-5 marker:font-heading marker:font-semibold marker:text-muted-foreground">
      {publications.map((pub) => {
        const isOpen = openAbstract === pub.title;

        return (
          <li
            key={pub.title}
            className="pl-1 text-[0.95rem] leading-snug text-foreground/90"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <span className="font-heading text-[1.05rem] font-semibold">
                  {pub.title}
                </span>
                {pub.venue && (
                  <p className="mt-1 font-serif text-sm text-muted-foreground">
                    Submitted to <em>{pub.venue}</em>
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {pub.abstract && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-border bg-background font-serif text-primary shadow-none hover:bg-accent hover:text-accent-foreground"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenAbstract(isOpen ? null : pub.title)
                    }
                  >
                    {isOpen ? "Hide" : "Abstract"}
                  </Button>
                )}
                <Badge
                  variant={pub.status === "Submitted" ? "default" : "secondary"}
                  className="w-fit"
                >
                  {pub.status}
                </Badge>
              </div>
            </div>
            {isOpen && pub.abstract && (
              <p className="mt-3 text-[0.92rem] font-normal leading-relaxed text-muted-foreground">
                {pub.abstract}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
