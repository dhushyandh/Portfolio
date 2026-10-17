import { Section } from "./Section";
import { TimelineJourney } from "./TimelineJourney";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Experience"
      title="Experience & Journey"
      intro="From engineering education and internships to real client work and continuous software development."
    >
      <TimelineJourney />
    </Section>
  );
}