const imageProcessor = {
  async processImage(imageUrl: string): Promise<string> {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error processing image:', error);
      return imageUrl;
    }
  }
};

self.onmessage = async (e) => {
  if (e.data.type === 'PROCESS_IMAGE') {
    const processedUrl = await imageProcessor.processImage(e.data.imageUrl);
    self.postMessage({ type: 'IMAGE_PROCESSED', url: processedUrl });
  }
};