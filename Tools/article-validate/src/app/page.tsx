'use client'
import { useState, useEffect } from 'react';
import { ChecklistSection, ChecklistItem, ImportanceLevel } from '../../types/checklist';
import { X } from 'lucide-react';

const checklist: ChecklistSection[] = [
  {
    title: "1. Title",
    items: [
      {
        id: "1-1",
        text: "Is it specific and clear?",
        importance: "Essential",
        example: "A Beginner's Guide to Setting Up Kubernetes Clusters",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "1-2",
        text: "Does it use technical terms that the target audience is familiar with?",
        importance: "Essential",
        example: "Understanding Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "1-3",
        text: "Does it offer a benefit or highlight the outcome?",
        importance: "Recommended",
        example: "Optimize Your Python Code: 10 Tricks for Faster Execution",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "1-4",
        text: "Is it intriguing or unique to stand out?",
        importance: "Optional",
        example: "Why Your JavaScript Code Might Be Slower Than You Think",
        points: 1,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "2. Intro",
    items: [
      {
        id: "2-1",
        text: "Does it identify the problem or question being answered?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "2-2",
        text: "Does it establish why the topic is important or relevant?",
        importance: "Essential",
        example: "As microservices grow in popularity, managing state across services is a growing challenge.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "2-3",
        text: "Does it provide quick context or background for readers unfamiliar with the topic?",
        importance: "Recommended",
        example: "Docker is a platform for building, running, and sharing containerized applications.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "2-4",
        text: "Does it appeal emotionally to the audience?",
        importance: "Optional",
        example: "Tired of debugging untraceable errors in your React app?",
        points: 1,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "3. Hook",
    items: [
      {
        id: "3-1",
        text: "Does it use a surprising fact, statistic, or question?",
        importance: "Essential",
        example: "Did you know 90% of server downtime is caused by misconfigured environments?",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "3-2",
        text: "Does it share a relatable pain point or anecdote?",
        importance: "Recommended",
        example: "I spent hours debugging a memory leak before discovering this simple trick.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "3-3",
        text: "Does it promise a solution or insight?",
        importance: "Essential",
        example: "Here's how you can avoid common pitfalls in Git workflows.",
        points: 3,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "4. Body",
    items: [
      {
        id: "4-1",
        text: "Does it address one main topic or problem clearly?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "4-2",
        text: "Is the information logically structured (e.g., steps, concepts, or comparisons)?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "4-3",
        text: "Does it include detailed explanations with examples?",
        importance: "Essential",
        example: "Code snippets, diagrams, or case studies",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "4-4",
        text: "Does it discuss real-world applications or scenarios?",
        importance: "Recommended",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "4-5",
        text: "Are potential challenges or pitfalls addressed?",
        importance: "Recommended",
        example: "Be cautious with this approach as it can lead to circular dependencies.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "4-6",
        text: "Does it include advanced or bonus tips for more experienced readers?",
        importance: "Optional",
        points: 1,
        checked: false,
        showExample: false,
      },
      {
        id: "4-7",
        text: "Does it link to additional technical resources, documentation, or tutorials?",
        importance: "Recommended",
        points: 2,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "5. Visuals and Examples",
    items: [
      {
        id: "5-1",
        text: "Does it use code snippets with syntax highlighting?",
        importance: "Essential",
        example: "Ensure snippets are clear, relevant, and error-free.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "5-2",
        text: "Are screenshots or diagrams included to explain concepts visually?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "5-3",
        text: "Are the visuals annotated or captioned for clarity?",
        importance: "Recommended",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "5-4",
        text: "Does it include videos or GIFs for dynamic processes?",
        importance: "Optional",
        points: 1,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "6. Depth and Accuracy",
    items: [
      {
        id: "6-1",
        text: "Does the post provide enough depth to address technical readers' needs?",
        importance: "Essential",
        example: "Avoid overly simplistic content unless targeting beginners.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "6-2",
        text: "Are all claims and statements accurate and verifiable?",
        importance: "Essential",
        example: "Cite sources if applicable.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "6-3",
        text: "Does it balance theoretical concepts with practical insights?",
        importance: "Recommended",
        example: "Here's the theory of recursion, and here's how it's used in sorting algorithms.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "6-4",
        text: "Are alternative methods or tools mentioned where applicable?",
        importance: "Recommended",
        example: "Instead of Redis, you can also use Memcached for caching.",
        points: 2,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "7. Conclusion",
    items: [
      {
        id: "7-1",
        text: "Does it summarize the key takeaways or steps?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "7-2",
        text: "Does it reiterate the practical value or outcome?",
        importance: "Essential",
        example: "By following this guide, you've set up a secure Kubernetes cluster in just 10 minutes.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "7-3",
        text: "Does it end with a strong CTA?",
        importance: "Recommended",
        example: "Try this out in your next project! or Share your experiences in the comments.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "7-4",
        text: "Does it provide links for further reading or next steps?",
        importance: "Recommended",
        example: "Check out the official Kubernetes documentation for more.",
        points: 2,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "8. Style and Readability",
    items: [
      {
        id: "8-1",
        text: "Is the writing concise and jargon-free?",
        importance: "Essential",
        example: "Explain technical terms for beginners if needed.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "8-2",
        text: "Is the content formatted with headings, subheadings, and lists?",
        importance: "Essential",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "8-3",
        text: "Are examples written in the same style (e.g., consistent coding languages or standards)?",
        importance: "Recommended",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "8-4",
        text: "Does the post follow a friendly, conversational tone where appropriate?",
        importance: "Optional",
        points: 1,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "9. Engagement",
    items: [
      {
        id: "9-1",
        text: "Does the post encourage readers to share their opinions or ask questions?",
        importance: "Recommended",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "9-2",
        text: "Is there a quiz, checklist, or tool embedded to make the post interactive?",
        importance: "Optional",
        points: 1,
        checked: false,
        showExample: false,
      },
      {
        id: "9-3",
        text: "Does it include community-focused suggestions?",
        importance: "Optional",
        example: "Submit your project to Hacktoberfest for feedback.",
        points: 1,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
  {
    title: "10. Technical Specificity",
    items: [
      {
        id: "10-1",
        text: "Are industry standards and best practices highlighted?",
        importance: "Essential",
        example: "Always use HTTPS for secure API requests.",
        points: 3,
        checked: false,
        showExample: false,
      },
      {
        id: "10-2",
        text: "Are edge cases or lesser-known details mentioned?",
        importance: "Recommended",
        example: "Be aware that this approach doesn't work for Python 3.6 or older.",
        points: 2,
        checked: false,
        showExample: false,
      },
      {
        id: "10-3",
        text: "Does the post compare competing tools or techniques?",
        importance: "Recommended",
        example: "Here's how Docker compares to Podman.",
        points: 2,
        checked: false,
        showExample: false,
      },
    ],
    removed: false,
  },
];

export default function TechnicalWritingChecklist() {
  const [sections, setSections] = useState<ChecklistSection[]>(checklist);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].items[itemIndex].checked = !newSections[sectionIndex].items[itemIndex].checked;
    setSections(newSections);
  };

  const toggleExample = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].items[itemIndex].showExample = !newSections[sectionIndex].items[itemIndex].showExample;
    setSections(newSections);
  };

  const removeSection = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].removed = true;
    setSections(newSections);
  };

  const calculateSectionProgress = (section: ChecklistSection): number => {
    const totalPoints = section.items.reduce((sum, item) => sum + item.points, 0);
    const earnedPoints = section.items.reduce((sum, item) => sum + (item.checked ? item.points : 0), 0);
    return Math.round((earnedPoints / totalPoints) * 100);
  };

  const calculateOverallProgress = (): number => {
    const activeSections = sections.filter(section => !section.removed);
    const totalPoints = activeSections.reduce((sum, section) => 
      sum + section.items.reduce((sectionSum, item) => sectionSum + item.points, 0), 0);
    const earnedPoints = activeSections.reduce((sum, section) => 
      sum + section.items.reduce((sectionSum, item) => sectionSum + (item.checked ? item.points : 0), 0), 0);
    return Math.round((earnedPoints / totalPoints) * 100);
  };

  const getProgressColor = (progress: number): string => {
    if (progress < 33) return 'text-red-500 dark:text-red-400';
    if (progress < 66) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-green-500 dark:text-green-400';
  };

  const renderImportance = (importance: ImportanceLevel) => {
    const colors: Record<ImportanceLevel, string> = {
      Essential: 'bg-red-500 dark:bg-red-700',
      Recommended: 'bg-yellow-500 dark:bg-yellow-700',
      Optional: 'bg-green-500 dark:bg-green-700',
    };

    return (
      <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${colors[importance]}`}>
        {importance}
      </span>
    );
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen p-8 transition-colors duration-200">
        <h1 className="text-3xl font-bold mb-6">Technical Writing Checklist</h1>
        <div className="mb-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400"
            />
            <span>Dark Mode</span>
          </label>
        </div>
        {sections.map((section, sectionIndex) => (
          !section.removed && (
            <div key={section.title} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                <span>{section.title}</span>
                <div className="flex items-center space-x-4">
                  <span className={`text-lg ${getProgressColor(calculateSectionProgress(section))}`}>
                    {calculateSectionProgress(section)}%
                  </span>
                  <button
                    onClick={() => removeSection(sectionIndex)}
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 focus:outline-none"
                    aria-label="Remove section"
                  >
                    <X size={20} />
                  </button>
                </div>
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={item.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleItem(sectionIndex, itemIndex)}
                        className="form-checkbox h-5 w-5 mt-1 text-blue-600 dark:text-blue-400"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{item.text}</span>
                          {renderImportance(item.importance)}
                          <span className="text-sm text-gray-500 dark:text-gray-400">({item.points} points)</span>
                        </div>
                        {item.example && (
                          <button
                            onClick={() => toggleExample(sectionIndex, itemIndex)}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                          >
                            {item.showExample ? 'Hide Example' : 'Show Example'}
                          </button>
                        )}
                        {item.showExample && item.example && (
                          <div className="text-sm text-gray-600 dark:text-gray-300 italic mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded">
                            Example: {item.example}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-2">Overall Progress</h2>
          <div className="flex items-center space-x-4">
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-4 rounded-full dark:bg-blue-500"
                style={{ width: `${calculateOverallProgress()}%` }}
              ></div>
            </div>
            <span className={`text-lg font-semibold ${getProgressColor(calculateOverallProgress())}`}>
              {calculateOverallProgress()}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


