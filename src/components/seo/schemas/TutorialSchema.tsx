export const getTutorialSchema = (tutorial: {
  title: string;
  description: string;
  steps: Array<{ step: number; text: string }>;
}) => ({
  "@type": "HowTo",
  "@context": "https://schema.org",
  "name": tutorial.title,
  "description": tutorial.description,
  "step": tutorial.steps.map(step => ({
    "@type": "HowToStep",
    "position": step.step,
    "text": step.text
  })),
  "totalTime": "PT10M",
  "tool": {
    "@type": "HowToTool",
    "name": "IPTV Device"
  }
});