'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { ProjectStatus } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';

interface DeliveryTimelineProps {
  currentStatus: ProjectStatus;
}

const DeliveryTimeline: React.FC<DeliveryTimelineProps> = () => {
  const { t } = useLanguage();
  const steps = t.timeline;

  
};

export default DeliveryTimeline;
