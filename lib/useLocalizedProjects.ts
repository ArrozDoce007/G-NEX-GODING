'use client';

import { projectsData } from './projects';
import { Project } from './types';
import { projectTranslations, useLanguage } from './i18n';

export function useLocalizedProjects(): Project[] {
  const { lang } = useLanguage();

  return projectsData.map((project) => {
    const tr = projectTranslations[project.id]?.[lang];
    if (!tr) return project;
    return {
      ...project,
      title: tr.title,
      description: tr.description,
      longDescription: tr.longDescription,
      architecture_summary: tr.architecture_summary,
      metrics: project.metrics.map((m, i) => ({
        ...m,
        label: tr.metricLabels[i] ?? m.label,
      })),
    };
  });
}

export function useLocalizedProject(id: string | null): Project | undefined {
  const projects = useLocalizedProjects();
  if (!id) return undefined;
  return projects.find((p) => p.id === id);
}
