import { Paper, Researcher, AnalysisWorkerWrapper, ContentAssessor, SEOAssessor } from "yoastseo";
import type { AssessmentResult } from "yoastseo";

export interface SEOAnalysis {
  readability: {
    score: number;
    results: AssessmentResult[];
  };
  seo: {
    score: number;
    results: AssessmentResult[];
  };
}

export const analyzeSEO = async (content: {
  text: string;
  title: string;
  description: string;
  keyword: string;
  url: string;
}): Promise<SEOAnalysis> => {
  const paper = new Paper(content.text, {
    keyword: content.keyword,
    title: content.title,
    titleWidth: content.title.length,
    description: content.description,
    url: content.url,
    locale: "en_US"
  });

  const researcher = new Researcher(paper);
  const contentAssessor = new ContentAssessor(researcher);
  const seoAssessor = new SEOAssessor(researcher);

  await contentAssessor.assess(paper);
  await seoAssessor.assess(paper);

  const readabilityResults = contentAssessor.getResults();
  const seoResults = seoAssessor.getResults();

  return {
    readability: {
      score: contentAssessor.calculateOverallScore(),
      results: readabilityResults
    },
    seo: {
      score: seoAssessor.calculateOverallScore(),
      results: seoResults
    }
  };
};

export const getSEOScore = (analysis: SEOAnalysis) => {
  const readabilityScore = analysis.readability.score;
  const seoScore = analysis.seo.score;
  return Math.round((readabilityScore + seoScore) / 2);
};