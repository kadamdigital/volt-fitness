export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export const benefitsData: BenefitItem[] = [
  {
    id: 'coaches',
    title: 'EXPERT COACHES',
    description: 'Certified master trainers dedicated to proper biomechanics and personal progress.'
  },
  {
    id: 'equipment',
    title: 'PREMIUM EQUIPMENT',
    description: 'Top-tier strength racks, free weights, turf tracks, and cardio equipment.'
  },
  {
    id: 'programs',
    title: 'STRUCTURED TRAINING',
    description: 'Purpose-built workout programs designed to deliver real performance gains.'
  },
  {
    id: 'results',
    title: 'RESULTS FOCUSED',
    description: 'A focused gym culture built around consistency, goal-setting, and hard work.'
  }
];
