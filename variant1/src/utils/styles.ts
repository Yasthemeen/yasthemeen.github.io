import { Eye, Hand, BookOpen, Mic, Headphones } from 'lucide-react';

// Keep legacy COLORS for backward compatibility during migration,
// but components should switch to useTheme()
export const COLORS = {
  warm: {
    bg: '#FFF8F3',
    text: '#1F2937',
    card: '#FFFFFF',
    border: '#F3F4F6'
  },
  dark: {
    bg: '#0f0f1a',
    text: '#FFFFFF',
    card: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)'
  },
  primary: '#E8722A',
  styles: {
    visual: '#E8722A',
    auditory: '#E8722A',
    kinesthetic: '#E8722A',
    reading: '#E8722A',
    verbal: '#E8722A'
  }
};

export const LEARNING_STYLES = [
{ id: 'visual', label: 'Visual', icon: Eye },
{ id: 'auditory', label: 'Auditory', icon: Headphones },
{ id: 'kinesthetic', label: 'Kinesthetic', icon: Hand },
{ id: 'reading', label: 'Reading/Writing', icon: BookOpen },
{ id: 'verbal', label: 'Verbal', icon: Mic }] as
const;

export type LearningStyleId = (typeof LEARNING_STYLES)[number]['id'];

export const MOCK_LESSONS = [
{
  id: 1,
  title: 'Biology',
  subtitle: 'Plant Cell Structure',
  teacher: 'Dr. Sarah Chen',
  avatar: 'https://i.pravatar.cc/150?u=sarah',
  progress: 75,
  style: 'visual' as LearningStyleId,
  icon: 'flask'
},
{
  id: 2,
  title: 'Chemistry',
  subtitle: 'Periodic Table & Bonding',
  teacher: 'Dr. Amara Osei',
  avatar: 'https://i.pravatar.cc/150?u=amara',
  progress: 30,
  style: 'auditory' as LearningStyleId,
  icon: 'flask'
},
{
  id: 3,
  title: 'Physics',
  subtitle: 'Forces & Motion',
  teacher: 'Prof. Newton',
  avatar: 'https://i.pravatar.cc/150?u=newton',
  progress: 10,
  style: 'kinesthetic' as LearningStyleId,
  icon: 'calculator'
},
{
  id: 4,
  title: 'Astronomy',
  subtitle: 'The Solar System',
  teacher: 'Dr. Sagan',
  avatar: 'https://i.pravatar.cc/150?u=sagan',
  progress: 55,
  style: 'reading' as LearningStyleId,
  icon: 'globe'
},
{
  id: 5,
  title: 'Geology',
  subtitle: 'Plate Tectonics',
  teacher: 'Prof. Wegener',
  avatar: 'https://i.pravatar.cc/150?u=wegener',
  progress: 20,
  style: 'visual' as LearningStyleId,
  icon: 'globe'
},
{
  id: 6,
  title: 'Ecology',
  subtitle: 'Food Webs & Ecosystems',
  teacher: 'Dr. Attenborough',
  avatar: 'https://i.pravatar.cc/150?u=attenborough',
  progress: 0,
  style: 'kinesthetic' as LearningStyleId,
  icon: 'flask'
}];