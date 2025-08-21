import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  Clock, 
  Target, 
  TrendingUp, 
  Star,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Meeting Scheduler',
      description: 'Schedule and manage your Scrum ceremonies with AI-powered assistance',
      gradient: 'gradient-ocean'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools for distributed and in-person teams',
      gradient: 'gradient-forest'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track team velocity, sprint success, and identify improvement areas',
      gradient: 'gradient-sunset'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set, monitor, and achieve sprint goals with precision',
      gradient: 'gradient-ocean'
    }
  ];

  const stats = [
    { value: '10k+', label: 'Active Teams', delay: '0.1s' },
    { value: '95%', label: 'Sprint Success', delay: '0.2s' },
    { value: '2.5x', label: 'Faster Delivery', delay: '0.3s' },
    { value: '50+', label: 'Integrations', delay: '0.4s' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-xs gradient-forest float-animation"
            >
              <Star className="w-3 h-3 mr-2" />
              Next-Gen Product Management
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-in-up">
              <span className="gradient-ocean bg-clip-text text-transparent">
                Scrum Meetings
              </span>
              <br />
              <span className="text-foreground">Reimagined</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto slide-in-up stagger-1">
              The ultimate hub for Product Managers to run, track, and optimize 
              Scrum ceremonies with AI-powered insights and beautiful analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up stagger-2">
              <NavLink to="/meeting">
                <Button size="lg" className="gradient-sunset shadow-sunset px-8">
                  <Play className="w-4 h-4 mr-2" />
                  Start Meeting Now
                </Button>
              </NavLink>
              <NavLink to="/dashboard">
                <Button variant="outline" size="lg" className="px-8">
                  View Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 gradient-ocean rounded-full opacity-10 float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 gradient-sunset rounded-full opacity-10 float-animation" style={{ animationDelay: '2s' }} />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center ${animateStats ? 'slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-ocean bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-forest bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Everything you need to transform your Scrum meetings into 
              productive, insightful, and engaging experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 border-border/50 hover:bg-card/80 transition-smooth group hover:scale-105 hover:shadow-elegant"
              >
                <div className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scrum Ceremonies Preview */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master Every <span className="gradient-sunset bg-clip-text text-transparent">Ceremony</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              From Daily Standups to Sprint Retrospectives - elevate every Scrum ceremony 
              with our specialized tools and templates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Daily Standup', icon: Users, color: 'ocean' },
              { name: 'Sprint Planning', icon: Calendar, color: 'forest' },
              { name: 'Sprint Review', icon: CheckCircle, color: 'sunset' },
              { name: 'Retrospective', icon: TrendingUp, color: 'ocean' }
            ].map((ceremony, index) => (
              <NavLink key={index} to="/ceremonies">
                <Card className="p-6 bg-card/50 border-border/50 hover:bg-card/80 transition-smooth group hover:scale-105 cursor-pointer">
                  <ceremony.icon className={`w-8 h-8 text-${ceremony.color}-light mb-4 group-hover:scale-110 transition-smooth`} />
                  <h3 className="font-semibold text-sm mb-2">{ceremony.name}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-smooth" />
                </Card>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-card/50 border-border/50 text-center gradient-ocean">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Scrum Meetings?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm">
              Join thousands of Product Managers who have revolutionized their 
              team's productivity with ScrumHub's intelligent meeting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/meeting">
                <Button size="lg" className="bg-white text-ocean-deep hover:bg-white/90 px-8">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Your First Meeting
                </Button>
              </NavLink>
              <NavLink to="/dashboard">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8">
                  Explore Dashboard
                </Button>
              </NavLink>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Homepage;