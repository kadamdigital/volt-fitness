export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageTag: string;
  imageUrl?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  imageTag: string;
  imageUrl?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  isFeatured?: boolean;
  features: string[];
}
