import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

export let jobs = [
  { id: '1', title: "Svelte & Sapper", salary: 2000, details: lorem.generateParagraphs(3)},
  { id: '2', title: "Blitz & Next", salary: 20, details: lorem.generateParagraphs(1)},
  { id: '3', title: "Alpine & Node", salary: 1000, details: lorem.generateParagraphs(2)}
]
