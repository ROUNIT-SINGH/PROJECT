import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  Share2, 
  Mail, 
  MessageSquare, 
  Clock, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Calendar,
  Send
} from 'lucide-react';
import { toast } from 'sonner';

const MeetingSummary = () => {
  const [selectedShareMethod, setSelectedShareMethod] = useState<string>('');

  // Mock meeting summary data
  const meetingData = {
    title: 'Sprint Planning - Week 12',
    date: new Date(),
    duration: '1h 23m',
    participants: ['Alice Johnson (PM)', 'Bob Smith (Dev)', 'Carol Davis (QA)', 'David Wilson (Design)'],
    type: 'Sprint Planning',
    status: 'Completed',
    objectives: {
      completed: 4,
      total: 5,
      items: [
        { text: 'Review previous sprint outcomes', completed: true },
        { text: 'Plan upcoming sprint stories', completed: true },
        { text: 'Assign story points', completed: true },
        { text: 'Identify potential blockers', completed: false },
        { text: 'Set sprint goals', completed: true }
      ]
    },
    keyDiscussions: [
      'User authentication feature requires additional security review',
      'Mobile responsiveness testing needs QA priority',
      'API integration dependencies identified for payment module',
      'Design system updates approved for next sprint'
    ],
    actionItems: [
      { task: 'Security review for auth feature', assignee: 'Bob Smith', dueDate: '2024-01-20' },
      { task: 'Update payment API documentation', assignee: 'Alice Johnson', dueDate: '2024-01-18' },
      { task: 'Create mobile testing checklist', assignee: 'Carol Davis', dueDate: '2024-01-19' }
    ],
    metrics: {
      talkTime: [
        { name: 'Alice', percentage: 35, time: '29m' },
        { name: 'Bob', percentage: 28, time: '23m' },
        { name: 'Carol', percentage: 22, time: '18m' },
        { name: 'David', percentage: 15, time: '13m' }
      ],
      engagement: 85,
      productivityScore: 92,
      sentiment: 'Positive'
    }
  };

  const shareToWhatsApp = () => {
    const message = `Sprint Planning Summary:\n\n${meetingData.title}\nDuration: ${meetingData.duration}\nCompleted ${meetingData.objectives.completed}/${meetingData.objectives.total} objectives\n\nKey outcomes and action items included in full summary.`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    toast.success('WhatsApp share prepared!');
  };

  const shareToEmail = () => {
    const subject = `Meeting Summary: ${meetingData.title}`;
    const body = `Meeting Summary for ${meetingData.title}\n\nDate: ${meetingData.date.toLocaleDateString()}\nDuration: ${meetingData.duration}\nParticipants: ${meetingData.participants.join(', ')}\n\nObjectives Completed: ${meetingData.objectives.completed}/${meetingData.objectives.total}\n\nAction Items:\n${meetingData.actionItems.map(item => `- ${item.task} (${item.assignee} - Due: ${item.dueDate})`).join('\n')}`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
    toast.success('Email draft prepared!');
  };

  const downloadPDF = () => {
    toast.success('PDF download started!');
    // In real implementation, generate and download PDF
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{meetingData.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Badge variant="secondary" className="gradient-ocean text-white">
                  {meetingData.type}
                </Badge>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {meetingData.date.toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {meetingData.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {meetingData.participants.length} participants
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={downloadPDF}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="default" size="sm" className="gradient-sunset shadow-sunset">
                <Share2 className="w-4 h-4 mr-2" />
                Share Summary
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Meeting Overview */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Meeting Overview
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent mb-1">
                    {meetingData.metrics.engagement}%
                  </div>
                  <div className="text-xs text-muted-foreground">Team Engagement</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold gradient-forest bg-clip-text text-transparent mb-1">
                    {meetingData.metrics.productivityScore}%
                  </div>
                  <div className="text-xs text-muted-foreground">Productivity Score</div>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-bold gradient-sunset bg-clip-text text-transparent mb-1">
                    {meetingData.metrics.sentiment}
                  </div>
                  <div className="text-xs text-muted-foreground">Overall Sentiment</div>
                </div>
              </div>
            </Card>

            {/* Objectives Completion */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Objectives Completion
              </h3>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">
                    {meetingData.objectives.completed}/{meetingData.objectives.total}
                  </span>
                </div>
                <Progress 
                  value={(meetingData.objectives.completed / meetingData.objectives.total) * 100} 
                  className="h-2"
                />
              </div>
              <div className="space-y-2">
                {meetingData.objectives.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    )}
                    <span className={`text-xs ${item.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Key Discussions */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                Key Discussions
              </h3>
              <div className="space-y-3">
                {meetingData.keyDiscussions.map((discussion, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg">
                    <p className="text-xs text-foreground">{discussion}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Talk Time Analysis */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Talk Time Analysis
              </h3>
              <div className="space-y-3">
                {meetingData.metrics.talkTime.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 gradient-ocean rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {participant.name[0]}
                        </span>
                      </div>
                      <span className="text-sm">{participant.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-muted/20 rounded-full h-2">
                        <div 
                          className="h-2 gradient-ocean rounded-full" 
                          style={{ width: `${participant.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-12 text-right">
                        {participant.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Items */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Action Items
              </h3>
              <div className="space-y-3">
                {meetingData.actionItems.map((item, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg">
                    <p className="text-xs font-medium mb-1">{item.task}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{item.assignee}</span>
                      <span>Due: {item.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Share Options */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <Share2 className="w-4 h-4 mr-2 text-primary" />
                Share Summary
              </h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-xs"
                  onClick={shareToWhatsApp}
                >
                  <MessageSquare className="w-3 h-3 mr-2 text-green-500" />
                  Share via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-xs"
                  onClick={shareToEmail}
                >
                  <Mail className="w-3 h-3 mr-2 text-blue-500" />
                  Share via Email
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start text-xs"
                >
                  <Send className="w-3 h-3 mr-2 text-purple-500" />
                  Share to Slack
                </Button>
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Next Steps
              </h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Calendar className="w-3 h-3 mr-2" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Target className="w-3 h-3 mr-2" />
                  Create Sprint Backlog
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Users className="w-3 h-3 mr-2" />
                  Notify Team
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSummary;