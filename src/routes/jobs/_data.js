import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

export let jobs = [
  { id: '44005f71-4521-47e0-839a-67c0863d410a', title: "Svelte & Sapper", salary: 2000, details: lorem.generateParagraphs(3)},
  { id: '44005f71-4521-47e0-839a-67c0863d412b', title: "Blitz & Next", salary: 20, details: lorem.generateParagraphs(1)},
  { id: '44005f71-4521-47e0-839a-67c0863d414c', title: "Alpine & Node", salary: 1000, details: lorem.generateParagraphs(2)}
]
