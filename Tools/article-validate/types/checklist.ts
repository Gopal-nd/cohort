export type ImportanceLevel = 'Essential' | 'Recommended' | 'Optional';

export interface ChecklistItem {
  id: string;
  text: string;
  importance: ImportanceLevel;
  example?: string;
  points: number;
  checked: boolean;
  showExample: boolean;
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
  removed: boolean;
}

