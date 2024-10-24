import React, { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';

export default function WebsiteCritiqueHub() {
  const [isEvaluatorView, setIsEvaluatorView] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  const StudentView = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-right mb-4">
        <button 
          onClick={() => setIsEvaluatorView(true)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          ISTE Evaluators Click Here
        </button>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Website Critique Challenge 🎨</h1>
        <p className="text-lg">Team up to analyze websites and make the web better for everyone!</p>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {['intro', 'process', 'examples', 'submit'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-100'
            }`}
          >
            <Star className="h-4 w-4" />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {activeTab === 'intro' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Mission</h2>
            <p className="text-gray-600 mb-4">
              Partner up and become website detectives! You'll analyze design, accessibility,
              and usability while learning to give helpful feedback.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">What You'll Do:</h3>
              <ul className="space-y-2">
                <li>Choose and analyze a website</li>
                <li>Score usability, accessibility, and design</li>
                <li>Share your findings with memes!</li>
                <li>Give feedback to classmates</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Analysis Process</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold">Usability (1-10)</h3>
                <p>How easy is it to use?</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold">Accessibility (1-10)</h3>
                <p>Can everyone use it?</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold">Design (1-10)</h3>
                <p>How does it look?</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'submit' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Submit Your Critique</h2>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-purple-800 mb-2">Instructions:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create a new post in the discussion board</li>
                <li>Use the template below</li>
                <li>Include specific examples</li>
                <li>Add your meme/image reaction</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Critique Template</h3>
              <div className="bg-white p-4 rounded border border-gray-200">
                <pre className="text-sm whitespace-pre-wrap">
                  Website: [Include the URL here]

                  Usability (Score: 1-10):
                  [Write about navigation, ease of use, and specific features]

                  Accessibility (Score: 1-10):
                  [Discuss WAVE tool results and accessibility features]

                  Aesthetics (Score: 1-10):
                  [Describe design elements and user experience]

                  Fun Enhancement:
                  [Suggest a creative improvement]

                  Meme/Image:
                  [Add your reaction image]
                </pre>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Engage with Classmates:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Read at least two other critiques</li>
                <li>Share your thoughts on their evaluations</li>
                <li>Note anything they spotted that you missed</li>
                <li>Learn from different perspectives</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Student Examples</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Example Critique</h3>
                <img 
                  src="spotify.png" 
                  alt="Example critique" 
                  className="rounded mb-4"
                />
                <p>Notice the detailed analysis and constructive suggestions!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const EvaluatorView = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">ISTE Certification Evidence - Criteria 8</h1>
        <p className="text-blue-600 mb-4">Website Critique: Fostering Empathetic Online Discussion</p>
        <button 
          onClick={() => setIsEvaluatorView(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Return to Student View
        </button>
      </div>

      <div className="border-l-4 border-yellow-500 pl-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Contextualization</h2>
        <div className="bg-yellow-50 p-4 rounded">
          <div className="mb-4">
            <h3 className="font-bold text-yellow-800 mb-2">Learner Context</h3>
            <p className="mb-2">This activity was implemented in my Honors Creative Design for the Web course, which:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Serves 15 students in grades 10-12 from across the state</li>
              <li>Operates as a virtual synchronous class via Zoom</li>
              <li>Meets for 70-minute sessions</li>
              <li>Brings together students from diverse locations and schools</li>
              <li>Focuses on web design and digital creativity</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-yellow-800 mb-2">Activity Summary & Alignment</h3>
            <p className="mb-2">This virtual collaborative website critique activity leverages our unique class structure by:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Using virtual collaboration tools for peer feedback</li>
              <li>Creating opportunities for cross-school perspectives</li>
              <li>Building online community through structured discussions</li>
              <li>Developing digital communication skills essential for remote collaboration</li>
            </ul>
            <p className="mt-4 text-yellow-900">
              <strong>Alignment with Criteria 8:</strong> This activity naturally promotes empathetic and 
              socially responsible behavior as students learn to provide constructive feedback in a virtual 
              environment, consider diverse user perspectives, and build positive online community practices - 
              skills particularly relevant for our distributed learning environment.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-xl font-bold mb-4">Evidence: Structured Digital Citizenship</h2>
          <div className="bg-gray-50 p-4 rounded">
            <div className="bg-white p-4 rounded mb-4">
              <h3 className="font-bold mb-2">Student Critique Example: Spotify Analysis</h3>
              <img 
                src="spotify.png"
                alt="Student critique showing detailed analysis of Spotify website's usability, accessibility, and aesthetics" 
                className="rounded mb-4 border border-gray-200"
              />
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold text-purple-800 mb-2">Digital Citizenship Elements:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Detailed analysis with specific scoring (6/10, 8/10, 7/10)</li>
                  <li>Consideration of both free and premium user experiences</li>
                  <li>Thoughtful accessibility evaluation</li>
                  <li>Creative enhancement suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-xl font-bold mb-4">Evidence: Empathetic Peer Interaction</h2>
          <div className="bg-gray-50 p-4 rounded">
            <div className="bg-white p-4 rounded mb-4">
              <h3 className="font-bold mb-2">Student Discussion Example</h3>
              <img 
                src="reply.png" 
                alt="Student discussion showing constructive feedback and respectful disagreement" 
                className="rounded mb-4 border border-gray-200"
              />
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-blue-800 mb-2">Key Behaviors Demonstrated:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Positive acknowledgment of peer ideas</li>
                  <li>Respectful expression of disagreement</li>
                  <li>Specific examples to support viewpoints</li>
                  <li>Constructive expansion of original analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-bold mb-4">ISTE Standards Alignment</h2>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold mb-2">Criteria 8: Empathetic and Socially Responsible Behavior</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Students demonstrate empathy through considerate peer feedback</li>
              <li>Virtual discussions promote responsible digital citizenship</li>
              <li>Focus on accessibility encourages inclusive thinking</li>
              <li>Cross-school collaboration builds broader perspectives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return isEvaluatorView ? <EvaluatorView /> : <StudentView />;
}
