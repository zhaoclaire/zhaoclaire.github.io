// Append new posts at the top

import { url } from "inspector";

// {
//   title: '',
//   url: '',
// },

const blogPosts = [
  {
    title: 'Survey on Theory (Nov edition)',
    url: '/theory-survey-nov-2024',
    notStarted: true,
  },
  {
    title: 'MIP=RE in Short and Some Musings on Complexity Theory',
    url: '/mip-re',
    notStarted: true,
  },
  {
    title: 'Compressed Sensing',
    url: '/compressed-sensing',
    notStarted: true,
  },
  {
    title: 'Markov Chain Mixing',
    url: '/mixing',
    notStarted: true,
  },
  {
    title: 'Mean Field Games and Optimal Control',
    url: '/mean-field',
    notStarted: true,
  },
  {
    title: "Llama 3 Take Aways",
    url: "/llama3",
    notStarted: true,
  },
  {
    title: "AnimateDiff",
    url: "/animate-diff",
    notStarted: true,
  },
  {
    title: "Guided video synthesis",
    url: "/guided-video-synthesis",
    notStarted: true,
  },
  {
    title: "Control Net",
    url: "/control-net",
    notStarted: true,
  },
  {
    title:
      "Lumiere: video generation by space-time diffusion",
    url: "/lumiere",
    notStarted: true,
  },
  {
    title: "Diffusion on Riemannian Manifold",
    url: "/manifold-diffusion",
    notStarted: true,
  },
  {
    title: 'Survey of ML from the Applied Mathematics Point of View (Nov edition)',
    url: '/Nov-24-survey',
    notStarted: true,
  },
  {
    title: 'Preference Optimization',
    url: '/preference-optimization',
    notStarted: true,
  },
  {
    title: "Neural Operator with Memory (MemNO)",
    url: "/mem-no",
    notStarted: true,
  },
  {
    title: "WALT video diffusion model",
    url: "/walt",
    notStarted: true,
  },
  {
    title: "World Model via Joint Embedding Predictive Architectures",
    url: "/jepa",
    notStarted: true,
  },
  {
    title: "VideoPoet: LLM video generation",
    url: "/video-poet",
  },
  {
    title: "Stable video diffusion",
    url: "/stable-video-diffusion",
  },
  {
    title: "Movie Gen",
    url: "/movie-gen",
    inProgress: true,
  },
  {
    title: "Score entropy discrete diffusion models",
    url: "/score-entropy-discrete-diffusion",
    inProgress: true,
  },
  {
    title: "Wasserstein Gradient Flow and Otto Calculus",
    url: "/gradient-flow",
    inProgress: true,
  },
  {
    title: "Optimal Transport and Diffusion",
    url: "/optimal-transport",
    isNew: true,
  },
  {
    title: "Fokker-Planck Equation and Diffusion Models",
    url: "/fokker-planck",
    isNew: true,
  },
];

export default blogPosts;
