import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Clock, 
  Target, 
  CheckCircle,
  TrendingUp,
  Play,
  ArrowRight,
  BookOpen,
  Timer,
  MessageSquare
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Ceremonies = () => {
  const [selectedCeremony, setSelectedCeremony] = useState<string | null>(null);

  const ceremonies = [
    {
      id: 'standup',
      name: 'Daily Standup',
      icon: Users,
      description: 'Quick sync to align team on daily goals and blockers',
      duration: '15 minutes',
      frequency: 'Daily',
      participants: '3-9 people',
      gradient: 'gradient-ocean',
      color: 'ocean',
      agenda: [
        'What did you accomplish yesterday?',
        'What will you work on today?',
        'Are there any blockers or impediments?'
      ],
      tips: [
        'Keep it time-boxed to 15 minutes',
        'Focus on coordination, not detailed discussions',
        'Use visual boards to track progress',
        'Address blockers immediately after'
      ],
      tools: ['Standup Timer', 'Blocker Tracker', 'Team Availability']
    },
    {
      id: 'planning',
      name: 'Sprint Planning',
      icon: Calendar,
      description: 'Plan and estimate work for the upcoming sprint',
      duration: '2-4 hours',
      frequency: 'Every 2 weeks',
      participants: '5-8 people',
      gradient: 'gradient-forest',
      color: 'forest',
      agenda: [
        'Review sprint goal and capacity',
        'Select backlog items for sprint',
        'Break down stories into tasks',
        'Estimate effort and assign work'
      ],
      tips: [
        'Prepare refined backlog beforehand',
        'Include the whole development team',
        'Define clear sprint goals',
        'Ensure stories meet Definition of Ready'
      ],
      tools: ['Story Point Poker', 'Velocity Calculator', 'Capacity Planner']
    },
    {
      id: 'review',
      name: 'Sprint Review',
      icon: CheckCircle,
      description: 'Demo completed work and gather stakeholder feedback',
      duration: '1-2 hours',
      frequency: 'End of sprint',
      participants: '8-15 people',
      gradient: 'gradient-sunset',
      color: 'sunset',
      agenda: [
        'Demo completed user stories',
        'Review sprint goals achievement',
        'Gather stakeholder feedback',
        'Discuss upcoming priorities'
      ],
      tips: [
        'Focus on working software demos',
        'Invite key stakeholders and users',
        'Prepare demo scenarios in advance',
        'Document feedback for backlog refinement'
      ],
      tools: ['Demo Planner', 'Feedback Collector', 'Stakeholder Tracker']
    },
    {
      id: 'retrospective',
      name: 'Sprint Retrospective',
      icon: TrendingUp,
      description: 'Reflect on the sprint and identify improvements',
      duration: '1-1.5 hours',
      frequency: 'End of sprint',
      participants: '3-8 people',
      gradient: 'gradient-ocean',
      color: 'ocean',
      agenda: [
        'What went well this sprint?',
        'What could be improved?',
        'What will we commit to improve?',
        'Define action items and owners'
      ],
      tips: [
        'Create a safe environment for honest feedback',
        'Focus on actionable improvements',
        'Use different retrospective formats',
        'Track action items from previous retros'
      ],
      tools: ['Retro Board', 'Action Tracker', 'Sentiment Analysis']
    }
  ];

  const selectedCeremonyData = ceremonies.find(c => c.id === selectedCeremony);

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-ocean bg-clip-text text-transparent">
              Scrum Ceremonies
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Master every Scrum ceremony with our guided templates, tools, and best practices.
            Transform your meetings from routine check-ins to powerful collaboration sessions.
          </p>
        </div>

        {!selectedCeremony ? (
          /* Ceremony Grid */
          <div className="grid md:grid-cols-2 gap-6">
            {ceremonies.map((ceremony) => (
              <Card 
                key={ceremony.id}
                className="p-6 bg-card/50 border-border/50 hover:bg-card/80 transition-smooth group cursor-pointer hover:scale-105"
                onClick={() => setSelectedCeremony(ceremony.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${ceremony.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <ceremony.icon className="w-5 h-5 text-white" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-smooth" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{ceremony.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ceremony.description}</p>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">{ceremony.duration}</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">{ceremony.frequency}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">{ceremony.participants}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="text-xs">
                    View Details
                  </Badge>
                  <NavLink to="/meeting">
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Play className="w-3 h-3 mr-1" />
                      Start Now
                    </Button>
                  </NavLink>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Detailed Ceremony View */
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedCeremony(null)}
                className="mb-4"
              >
                ← Back to Ceremonies
              </Button>
              
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 ${selectedCeremonyData?.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  {selectedCeremonyData?.icon && (
                    <selectedCeremonyData.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">{selectedCeremonyData?.name}</h1>
                  <p className="text-muted-foreground text-sm">{selectedCeremonyData?.description}</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-8">
                <NavLink to="/meeting">
                  <Button variant="default" className={`${selectedCeremonyData?.gradient} shadow-${selectedCeremonyData?.color}`}>
                    <Play className="w-4 h-4 mr-2" />
                    Start {selectedCeremonyData?.name}
                  </Button>
                </NavLink>
                <Button variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Template
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Meeting Agenda */}
                <Card className="p-6 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center text-sm">
                    <Target className="w-4 h-4 mr-2 text-primary" />
                    Meeting Agenda
                  </h3>
                  <div className="space-y-3">
                    {selectedCeremonyData?.agenda.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 gradient-ocean rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Best Practices */}
                <Card className="p-6 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Best Practices & Tips
                  </h3>
                  <div className="space-y-3">
                    {selectedCeremonyData?.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{tip}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Interactive Tools */}
                <Card className="p-6 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center text-sm">
                    <Timer className="w-4 h-4 mr-2 text-primary" />
                    Interactive Tools
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {selectedCeremonyData?.tools.map((tool, index) => (
                      <Button 
                        key={index}
                        variant="outline" 
                        size="sm" 
                        className="h-auto p-3 flex-col text-center"
                      >
                        <Timer className="w-5 h-5 mb-2 text-primary" />
                        <span className="text-xs">{tool}</span>
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card className="p-4 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-3 text-sm">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Duration</span>
                      <span className="text-xs font-medium">{selectedCeremonyData?.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Frequency</span>
                      <span className="text-xs font-medium">{selectedCeremonyData?.frequency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Participants</span>
                      <span className="text-xs font-medium">{selectedCeremonyData?.participants}</span>
                    </div>
                  </div>
                </Card>

                {/* Resources */}
                <Card className="p-4 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-3 text-sm">Resources</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <BookOpen className="w-3 h-3 mr-2" />
                      Meeting Template
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Checklist
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                      <MessageSquare className="w-3 h-3 mr-2" />
                      Example Scripts
                    </Button>
                  </div>
                </Card>

                {/* Related Ceremonies */}
                <Card className="p-4 bg-card/50 border-border/50">
                  <h3 className="font-semibold mb-3 text-sm">Related Ceremonies</h3>
                  <div className="space-y-2">
                    {ceremonies
                      .filter(c => c.id !== selectedCeremony)
                      .slice(0, 2)
                      .map((ceremony) => (
                        <Button 
                          key={ceremony.id}
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-start text-xs p-2"
                          onClick={() => setSelectedCeremony(ceremony.id)}
                        >
                          <ceremony.icon className="w-3 h-3 mr-2" />
                          {ceremony.name}
                        </Button>
                      ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ceremonies;