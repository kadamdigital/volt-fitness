import type { MembershipPlan } from '../types';

export const membershipData: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹1,999',
    period: 'month',
    features: [
      'Gym Access',
      'Basic Equipment',
      'Locker Access',
      'VOLT Mobile App'
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    price: '₹2,999',
    period: 'month',
    isFeatured: true,
    features: [
      'Full Gym Access',
      'Group Training',
      'Training Assessment',
      'Sauna & Recovery Lounge',
      'Guest Pass (1 per month)'
    ]
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: '₹4,999',
    period: 'month',
    features: [
      'Full Gym Access',
      'Personal Training Sessions',
      'Priority Support',
      'Customized Nutrition Plan',
      '24/7 VIP Access'
    ]
  }
];
