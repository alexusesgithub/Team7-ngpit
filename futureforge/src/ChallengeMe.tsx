import { useState } from 'react';
import {
  ChevronLeft, Briefcase, Users, MessageCircle, Award, Zap,
  Star, ArrowRight, MapPin, Clock, DollarSign, TrendingUp,
  CheckCircle, User, Mail, Calendar, Code
} from 'lucide-react';

export default function ChallengeMe({ onBackToHome }: { onBackToHome: () => void }) {
  const [activeTab, setActiveTab] = useState('projects'); // projects, teams, learning, mentors, internships

  // Industry Projects Data
  const projects = [
    {
      id: 1,
      title: 'AI Startup Idea Validator',
      category: 'AI/ML',
      difficulty: 'Advanced',
      duration: '6 weeks',
      team: 'Solo or Team',
      description: 'Build an AI system that evaluates startup viability using real market data, competitive analysis, and growth predictions.',
      skills: ['Python', 'ML', 'API Integration', 'Data Analysis'],
      mentors: 2,
      progress: 35,
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Platform',
      category: 'Full Stack',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      team: 'Team (3-5)',
      description: 'Develop a web platform for real-time team collaboration with live editing, comments, and notifications.',
      skills: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
      mentors: 1,
      progress: 0,
      featured: false
    },
    {
      id: 3,
      title: 'Sustainable Supply Chain Optimizer',
      category: 'Systems Design',
      difficulty: 'Advanced',
      duration: '8 weeks',
      team: 'Team (4-6)',
      description: 'Design an optimization engine for sustainable supply chains reducing carbon emissions while maintaining profitability.',
      skills: ['System Design', 'Optimization', 'Cloud', 'Analytics'],
      mentors: 3,
      progress: 0,
      featured: false
    }
  ];

  // Team Formation Data
  const teams = [
    {
      id: 1,
      name: 'Team Alpha',
      project: 'AI Startup Idea Validator',
      members: 3,
      maxMembers: 5,
      skills: ['Python', 'ML', 'Data Analysis'],
      openSpots: 2,
      status: 'Recruiting'
    },
    {
      id: 2,
      name: 'Collab Coders',
      project: 'Real-Time Collaboration Platform',
      members: 4,
      maxMembers: 5,
      skills: ['React', 'Node.js', 'WebSockets'],
      openSpots: 1,
      status: 'Recruiting'
    }
  ];

  // Peer Learning Data
  const discussions = [
    {
      id: 1,
      title: 'How to structure ML pipelines for production?',
      author: 'Sarah Chen',
      replies: 12,
      views: 340,
      upvotes: 45,
      category: 'ML/AI',
      recent: true
    },
    {
      id: 2,
      title: 'WebSockets vs GraphQL subscriptions for real-time updates?',
      author: 'Alex Kumar',
      replies: 8,
      views: 210,
      upvotes: 32,
      category: 'Full Stack',
      recent: false
    }
  ];

  // Mentor Data
  const mentors = [
    {
      id: 1,
      name: 'Industry Professional',
      role: 'Senior ML Engineer @ Google',
      expertise: ['Machine Learning', 'System Design', 'Career Growth'],
      availability: 'Available',
      image: '👨💼',
      rating: 4.9,
      reviews: 127,
      assigned: true
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      role: 'Full Stack Lead @ Stripe',
      expertise: ['Full Stack', 'Web Development', 'Architecture'],
      availability: 'Available',
      image: '👩💼',
      rating: 4.8,
      reviews: 95,
      assigned: false
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Product Manager @ Meta',
      expertise: ['Product Strategy', 'User Research', 'Scaling'],
      availability: 'Booked',
      image: '👨💻',
      rating: 4.7,
      reviews: 110,
      assigned: false
    }
  ];

  // Mini Internships Data
  const internships = [
    {
      id: 1,
      company: 'TechStartup Labs',
      title: 'AI/ML Intern (Micro-Internship)',
      duration: '2-4 weeks',
      commitment: '15 hrs/week',
      stipend: '$500-800',
      skills: ['Python', 'TensorFlow', 'Data'],
      status: 'Open',
      deadline: '2 weeks'
    },
    {
      id: 2,
      company: 'CloudScale Inc.',
      title: 'Full Stack Developer (Paid Project)',
      duration: '3-5 weeks',
      commitment: '20 hrs/week',
      stipend: '$1200-1800',
      skills: ['React', 'Node.js', 'AWS'],
      status: 'Open',
      deadline: '5 days'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-200 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={onBackToHome}
              className="p-2.5 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-500 hover:text-slate-700" />
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span> Module 3
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-slate-900">
            Challenge Me
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Ditch the tutorials. Build real-world industry projects alongside AI co-pilots and expert mentors.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-2 mb-12 animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
          {[
            { key: 'projects', label: 'Projects', icon: Briefcase },
            { key: 'teams', label: 'Teams', icon: Users },
            { key: 'learning', label: 'Learning', icon: MessageCircle },
            { key: 'mentors', label: 'Mentors', icon: Award },
            { key: 'internships', label: 'Internships', icon: Zap }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs md:text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Sections */}

        {/* Industry Projects */}
        {activeTab === 'projects' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative rounded-3xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                    project.featured
                      ? 'border-purple-300 bg-gradient-to-br from-purple-50/60 to-white shadow-lg shadow-purple-300/20'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white text-xs font-bold uppercase rounded-full">
                      <Star className="w-4 h-4 fill-current" /> Featured
                    </div>
                  )}

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            project.category === 'AI/ML'
                              ? 'bg-purple-100 text-purple-700'
                              : project.category === 'Full Stack'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-indigo-100 text-indigo-700'
                          }`}>
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-full">
                            {project.difficulty}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 py-6 border-t border-b border-slate-100">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Duration</p>
                        <p className="text-lg font-bold text-slate-900">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Team Size</p>
                        <p className="text-lg font-bold text-slate-900">{project.team}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Mentors</p>
                        <p className="text-lg font-bold text-slate-900">{project.mentors}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Progress</p>
                        <p className="text-lg font-bold text-purple-600">{project.progress}%</p>
                      </div>
                    </div>

                    {project.progress > 0 && (
                      <div className="mb-6">
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <button className="w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 hover:shadow-xl group">
                      {project.progress > 0 ? 'Continue Building' : 'Start Project'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Formation */}
        {activeTab === 'teams' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid gap-6 mb-10">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-300 p-8 md:p-10 shadow-lg shadow-purple-300/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Form or Join a Team</h3>
                    <p className="text-sm text-slate-600">Collaborate with peers, split responsibilities, and learn together.</p>
                  </div>
                </div>
              </div>

              {teams.map((team) => (
                <div key={team.id} className="bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 p-8 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-2xl font-bold text-slate-900">{team.name}</h4>
                        <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full">
                          {team.status}
                        </span>
                      </div>
                      <p className="text-slate-600 font-semibold mb-4">{team.project}</p>
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="font-bold text-slate-700">{team.members}/{team.maxMembers} members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-bold text-slate-700">{team.openSpots} open spot{team.openSpots !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {team.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-md group-hover:shadow-lg whitespace-nowrap">
                      Join Team <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <button className="w-full px-6 py-4 border-2 border-dashed border-purple-300 bg-purple-50 hover:bg-purple-100 text-purple-600 font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                <span className="text-2xl">+</span> Create a New Team
              </button>
            </div>
          </div>
        )}

        {/* Peer Learning */}
        {activeTab === 'learning' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-300 p-8 md:p-10 shadow-lg shadow-purple-300/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Discussion Board</h3>
                    <p className="text-sm text-slate-600">Learn from peers, share insights, and solve problems together.</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all hidden md:flex items-center gap-2">
                  Start Discussion <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 p-8 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {discussion.recent && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded">New</span>
                        )}
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded">
                          {discussion.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {discussion.title}
                      </h4>
                      <p className="text-sm text-slate-600">By <span className="font-semibold">{discussion.author}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> {discussion.replies} replies
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" /> {discussion.views} views
                    </div>
                    <div className="flex items-center gap-2 text-purple-600">
                      <TrendingUp className="w-4 h-4" /> {discussion.upvotes} upvotes
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mentor Guidance */}
        {activeTab === 'mentors' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-300 p-8 md:p-10 shadow-lg shadow-purple-300/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Expert Mentorship</h3>
                    <p className="text-sm text-slate-600">Get personalized guidance from industry professionals.</p>
                  </div>
                </div>
              </div>

              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className={`rounded-2xl border-2 transition-all duration-300 hover:shadow-xl overflow-hidden group ${
                    mentor.assigned
                      ? 'border-purple-300 bg-gradient-to-br from-purple-50/60 to-white shadow-lg shadow-purple-300/20'
                      : 'border-slate-200 bg-white shadow-sm hover:border-purple-300'
                  }`}
                >
                  <div className="p-8 md:p-10">
                    {mentor.assigned && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white text-xs font-bold uppercase rounded-full mb-4">
                        <CheckCircle className="w-4 h-4" /> Your Assigned Mentor
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="text-6xl flex-shrink-0">{mentor.image}</div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-900 mb-1">{mentor.name}</h4>
                        <p className="text-lg text-purple-600 font-semibold mb-4">{mentor.role}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(mentor.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-slate-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-bold text-slate-700">{mentor.rating}</span>
                          <span className="text-slate-500">({mentor.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {mentor.expertise.map((exp) => (
                            <span
                              key={exp}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                            mentor.availability === 'Available'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {mentor.availability}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 md:items-end w-full md:w-auto">
                        <button className={`px-6 py-3 font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                          mentor.assigned
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg'
                        }`}>
                          {mentor.assigned ? 'View Sessions' : 'Request Mentorship'} <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-6 py-3 border-2 border-purple-300 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all flex items-center gap-2 whitespace-nowrap">
                          <Mail className="w-4 h-4" /> Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mini Internships */}
        {activeTab === 'internships' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-300 p-8 md:p-10 shadow-lg shadow-purple-300/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Micro-Internships & Paid Projects</h3>
                    <p className="text-sm text-slate-600">Gain real work experience and earn competitive stipends.</p>
                  </div>
                </div>
              </div>

              {internships.map((internship) => (
                <div key={internship.id} className="bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 p-8 md:p-10 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-lg">
                          {internship.company.charAt(0)}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{internship.company}</p>
                          <h4 className="text-xl font-bold text-slate-900">{internship.title}</h4>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg whitespace-nowrap self-start md:self-auto">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 py-6 border-t border-b border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Duration</p>
                      <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" /> {internship.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Commitment</p>
                      <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" /> {internship.commitment}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Stipend</p>
                      <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" /> {internship.stipend}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Status</p>
                      <p className="text-lg font-bold text-slate-900">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          {internship.status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Deadline</p>
                      <p className="text-lg font-bold text-red-600">{internship.deadline}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
                        <Code className="w-3 h-3" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Helper component for Eye icon (not in lucide-react in older versions)
function Eye({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}
