export const projects = [
  {
    title: 'WGAN-GP',
    description: "Implemented Wasserstein GAN, or WGAN with GP, or Gradient Penalty. My aim for this project was to recreate the results of WGAN-GP with the MNIST dataset.",
      image: '/images/wgan.gif',
      tags: ['Python', 'PyTorch', 'NumPy', 'ImageIO'],
    source: 'https://github.com/NNDEV1/MyWGAN',
    visit: "https://colab.research.google.com/drive/1QGHEWHHUFJk72buthpKY9XIHHSYRt3hc?usp=sharing",
    id: 0,
  },
  {
    title: 'Trie CLI',
    description:"Used the trie data structure to create a usable command line interface with various commands such as add, help, remove, and search. I hosted the project on PythonAnywhere and it can currently be installed through pip.",
    image: '/images/triecli.png',
    tags: ['Python', 'Flask', 'Requests', "PyFiglet"],
    source: 'https://github.com/NNDEV1/TrieCLI',
    visit:"https://pypi.org/project/TrieCLI/",
    id: 1,
  },
  {
    title: 'Picture to Anime',
    description: "Using a standard GAN architecture, with a few tweaks such as a LeakyReLU and InstanceNorm, I created a GAN that takes a photograph as an input and outputs the photo but turned into an anime style image.",
      image: '/images/pic2animeconcat.png',
      tags: ['PyTorch', 'Python', 'NumPy', 'OpenCV', 'WAndB'],
    source: 'https://github.com/NNDEV1/PicToAnime',
    visit:"https://colab.research.google.com/drive/19ihB03vBVALGkE3Izc4xXN6ONKa97krT?usp=sharing",
    id: 2,
  },
  {
    title: 'Text Summarization',
    description: "My project implements a UI. The user can input a link (preferrably and article or informative website), the question they want to ask about the text, and how many bullet points they want to be generated. Then from those parameters model generates a summary based on the raw text, bullet points, and the answered question.",
    image: '/images/textsummarization.png',
    tags: ['Transformers', 'NLTK', 'AllenNLP', 'Gradio'],
    source: 'https://github.com/NNDEV1/Level3-TextSummarization',
    visit:"https://colab.research.google.com/drive/1Y6cKzZGzug_pn4Vf0hm_Q36GwlERnUKP?usp=sharing",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey towards becoming a web developer by learning JavaScript, and technologies like react and node.', },
  { year: 2018, text: 'Started to take courses and build projects in the form of websites.', },
  { year: 2019, text: 'My interest shifted towards Machine Learning and Artificial Intelligence, took multiple courses trying to learn about deep learning.', },
  { year: 2020, text: 'Started to make projects and share them on Github and formed my own resume.', },
  { year: 2021, text: 'Big Deep Learning based projects came together and I started applying for various internship oppurtunities looking to expand my knowledge.', },
];