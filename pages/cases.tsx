import Container from "../components/Container"
import { ChartBarIcon } from "@heroicons/react/outline"
import { ViewGridAddIcon } from "@heroicons/react/outline"
import { CursorClickIcon } from "@heroicons/react/outline"
import { MicrophoneIcon } from "@heroicons/react/outline"
import { LightningBoltIcon } from "@heroicons/react/outline"
import { CogIcon } from "@heroicons/react/outline"
import { CodeIcon } from "@heroicons/react/outline"

import Case from "components/Case"

export default function Cases({ cases }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Cases
        </h1>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Some of these cases reflect what we have been working on before
            starting Sindri in 2021. We have covered it here, to help understand
            what kind of work we are good at.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          <Case
            title="Smart Grid Optimization"
            slug="smart-grid-optimization"
            description="Developing electricity demand prediction and load balancing
            algorithms for smart grids in the US, Europe and Africa."
            icon={<ViewGridAddIcon />}
          />
          <Case
            title="Keyword clustering"
            slug="keyword-clustering"
            description="Developing a SERP based clustering tool in Python and Neo4j for a
            Canadian customer."
            icon={<CursorClickIcon />}
          />
          <Case
            title="Danish speech recognition system"
            slug="danish-speech-recognition-system"
            description="Developing one of the first deep-learning based Danish speech
            recognition systems."
            icon={<MicrophoneIcon />}
          />
          <Case
            title="EEG analysis"
            slug="eeg-analysis"
            description="Large scale EEG analysis in collaboration with HypoSafe (now UNEEG)"
            icon={<LightningBoltIcon />}
          />
          <Case
            title="AutoML"
            slug="automl"
            description="Developing an AutoML system for unsupervised learning, based on compositional model search for Bayesian networks and black-box variational inference."
            icon={<CogIcon />}
          />
          <Case
            title="Web applications"
            slug="web-applications"
            description="Developing web applications in Django and JavaScript for Danske Spil and Pfizer"
            icon={<CodeIcon />}
          />
          <Case
            title="NGO platform"
            slug="ngo-platform"
            description="Setting up modern data infrastructure for NGO's. Integrating
            payments, accounting and business intelligence."
            icon={<ChartBarIcon />}
          />
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
