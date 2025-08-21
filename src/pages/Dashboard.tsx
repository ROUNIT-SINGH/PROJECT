import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Users, 
  Clock, 
  TrendingUp, 
  Target, 
  AlertCircle,
  CheckCircle,
  BarChart3,
  Plus,
  Filter,
  Download,
  Play,
  Pause
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  // Mock dashboard data
  const dashboardData = {
    stats: {
      totalMeetings: 24,
      avgDuration: '48m',
      teamVelocity: 85,
      sprintProgress: 72
    },
    recentMeetings: [
      { id: 1, title: 'Sprint Planning - Week 12', type: 'Sprint Planning', date: '2024-01-15', duration: '1h 23m', status: 'completed', participants: 4 },
      { id: 2, title: 'Daily Standup', type: 'Daily Standup', date: '2024-01-15', duration: '15m', status: 'completed', participants: 5 },
      { id: 3, title: 'Sprint Review', type: 'Sprint Review', date: '2024-01-14', duration: '2h 10m', status: 'completed', participants: 8 },
      { id: 4, title: 'Retrospective', type: 'Retrospective', date: '2024-01-12', duration: '1h 5m', status: 'completed', participants: 6 }
    ],
    velocityData: [
      { week: 'W8', velocity: 78, planned: 80 },
      { week: 'W9', velocity: 82, planned: 85 },
      { week: 'W10', velocity: 75, planned: 80 },
      { week: 'W11', velocity: 88, planned: 85 },
      { week: 'W12', velocity: 85, planned: 90 }
    ],
    meetingTypes: [
      { name: 'Daily Standup', value: 45, color: 'hsl(var(--primary))' },
      { name: 'Sprint Planning', value: 25, color: 'hsl(var(--secondary))' },
      { name: 'Sprint Review', value: 20, color: 'hsl(var(--accent))' },
      { name: 'Retrospective', value: 10, color: 'hsl(var(--muted))' }
    ],
    upcomingMeetings: [
      { title: 'Daily Standup', time: '09:00 AM', participants: 5, type: 'standup' },
      { title: 'Sprint Review Demo', time: '02:00 PM', participants: 12, type: 'review' },
      { title: 'Planning Poker', time: '04:30 PM', participants: 6, type: 'planning' }
    ],
    actionItems: [
      { task: 'Update API documentation', assignee: 'Alice', dueDate: '2024-01-18', priority: 'high' },
      { task: 'Mobile testing checklist', assignee: 'Carol', dueDate: '2024-01-19', priority: 'medium' },
      { task: 'Security review setup', assignee: 'Bob', dueDate: '2024-01-20', priority: 'high' },
      { task: 'Design system updates', assignee: 'David', dueDate: '2024-01-22', priority: 'low' }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">Product Manager Dashboard</h1>
              <p className="text-muted-foreground text-sm">
                Track your team's Scrum performance and meeting insights
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="default" size="sm" className="gradient-sunset shadow-sunset">
                <Plus className="w-4 h-4 mr-2" />
                New Meeting
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 bg-card/50 border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Meetings</p>
                  <p className="text-xl font-bold">{dashboardData.stats.totalMeetings}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary opacity-60" />
              </div>
            </Card>
            <Card className="p-4 bg-card/50 border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Avg Duration</p>
                  <p className="text-xl font-bold">{dashboardData.stats.avgDuration}</p>
                </div>
                <Clock className="w-8 h-8 text-secondary opacity-60" />
              </div>
            </Card>
            <Card className="p-4 bg-card/50 border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Team Velocity</p>
                  <p className="text-xl font-bold">{dashboardData.stats.teamVelocity}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent opacity-60" />
              </div>
            </Card>
            <Card className="p-4 bg-card/50 border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sprint Progress</p>
                  <p className="text-xl font-bold">{dashboardData.stats.sprintProgress}%</p>
                </div>
                <Target className="w-8 h-8 text-primary opacity-60" />
              </div>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Velocity Chart */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Team Velocity Trend
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dashboardData.velocityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="velocity" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      name="Actual Velocity"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="planned" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 3 }}
                      name="Planned Velocity"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Recent Meetings */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Recent Meetings
              </h3>
              <div className="space-y-3">
                {dashboardData.recentMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-ocean rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{meeting.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{meeting.date}</span>
                          <span>•</span>
                          <span>{meeting.duration}</span>
                          <span>•</span>
                          <span>{meeting.participants} participants</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {meeting.type}
                      </Badge>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Meeting Types Distribution */}
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-4 flex items-center text-sm">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Meeting Types Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dashboardData.meetingTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {dashboardData.meetingTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {dashboardData.meetingTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="text-xs text-muted-foreground">{type.name}</span>
                    <span className="text-xs font-medium">{type.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Meetings */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {dashboardData.upcomingMeetings.map((meeting, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-xs mb-1">{meeting.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{meeting.time}</span>
                        <span>•</span>
                        <span>{meeting.participants} people</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Play className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Items */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Pending Action Items
              </h3>
              <div className="space-y-3">
                {dashboardData.actionItems.map((item, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-xs">{item.task}</h4>
                      <AlertCircle className={`w-3 h-3 ${getPriorityColor(item.priority)} flex-shrink-0`} />
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{item.assignee}</span>
                      <span>Due: {item.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sprint Progress */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Current Sprint Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Sprint 12 Progress</span>
                    <span className="text-xs font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold gradient-ocean bg-clip-text text-transparent">18</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold gradient-sunset bg-clip-text text-transparent">5</div>
                    <div className="text-xs text-muted-foreground">In Progress</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold gradient-forest bg-clip-text text-transparent">2</div>
                    <div className="text-xs text-muted-foreground">Remaining</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold mb-3 text-sm">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Plus className="w-3 h-3 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Users className="w-3 h-3 mr-2" />
                  Create Team Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Target className="w-3 h-3 mr-2" />
                  Review Sprint Goals
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;