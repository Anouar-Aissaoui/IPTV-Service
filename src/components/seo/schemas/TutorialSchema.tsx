interface TutorialData {
  title: string;
  description: string;
  steps: Array<{ step: number; text: string }>;
}

export const getTutorialSchema = (tutorial: TutorialData) => ({
  "@type": "HowTo",
  "@id": "https://www.iptvservice.site/tutorial",
  "name": tutorial.title,
  "description": tutorial.description,
  "image": ["https://www.iptvservice.site/iptv-subscription.png"],
  "step": tutorial.steps.map(step => ({
    "@type": "HowToStep",
    "position": step.step,
    "text": step.text
  })),
  "totalTime": "PT10M",
  "tool": {
    "@type": "HowToTool",
    "name": "IPTV Device"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Best IPTV Service Provider",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/iptv-subscription.png",
      "width": 480,
      "height": 320
    }
  }
});