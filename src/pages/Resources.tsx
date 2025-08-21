import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  BookOpen,
  Download,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  FileText,
  Video,
  Headphones,
  Calendar,
  CheckCircle,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'templates', name: 'Templates', count: 8 },
    { id: 'guides', name: 'Guides', count: 6 },
    { id: 'tools', name: 'Tools', count: 5 },
    { id: 'checklists', name: 'Checklists', count: 3 },
    { id: 'videos', name: 'Videos', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      title: 'Sprint Planning Template',
      description: 'Comprehensive template for effective sprint planning sessions with pre-built agenda and estimation guides.',
      category: 'templates',
      type: 'Document',
      icon: FileText,
      gradient: 'gradient-ocean',
      downloadCount: 1243,
      rating: 4.8,
      duration: '2-4 hours',
      tags: ['Sprint Planning', 'Estimation', 'Backlog'],
      featured: true
    },
    {
      id: 2,
      title: 'Daily Standup Facilitator Guide',
      description: 'Step-by-step guide to run engaging and productive daily standup meetings.',
      category: 'guides',
      type: 'Guide',
      icon: BookOpen,
      gradient: 'gradient-forest',
      downloadCount: 892,
      rating: 4.9,
      duration: '15 min read',
      tags: ['Daily Standup', 'Facilitation', 'Best Practices']
    },
    {
      id: 3,
      title: 'Retrospective Toolkit',
      description: 'Collection of 15+ retrospective formats and activities to keep your retros fresh and engaging.',
      category: 'tools',
      type: 'Toolkit',
      icon: Zap,
      gradient: 'gradient-sunset',
      downloadCount: 2156,
      rating: 4.7,
      duration: 'Variable',
      tags: ['Retrospective', 'Team Building', 'Continuous Improvement'],
      featured: true
    },
    {
      id: 4,
      title: 'Sprint Review Checklist',
      description: 'Ensure nothing is missed in your sprint reviews with this comprehensive checklist.',
      category: 'checklists',
      type: 'Checklist',
      icon: CheckCircle,
      gradient: 'gradient-ocean',
      downloadCount: 567,
      rating: 4.6,
      duration: '5 min',
      tags: ['Sprint Review', 'Demo', 'Stakeholder Management']
    },
    {
      id: 5,
      title: 'Velocity Tracking Calculator',
      description: 'Interactive calculator to track team velocity and predict sprint capacity.',
      category: 'tools',
      type: 'Calculator',
      icon: TrendingUp,
      gradient: 'gradient-forest',
      downloadCount: 834,
      rating: 4.5,
      duration: 'Interactive',
      tags: ['Velocity', 'Metrics', 'Planning']
    },
    {
      id: 6,
      title: 'Scrum Master Masterclass',
      description: 'Complete video series on advanced Scrum Master techniques and facilitation skills.',
      category: 'videos',
      type: 'Video Series',
      icon: Video,
      gradient: 'gradient-sunset',
      downloadCount: 445,
      rating: 4.9,
      duration: '3.5 hours',
      tags: ['Scrum Master', 'Leadership', 'Advanced'],
      featured: true
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-forest bg-clip-text text-transparent">
              Resources & Tools
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Everything you need to master Scrum meetings. Templates, guides, tools, and best practices
            curated by Product Management experts.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources, templates, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-xs"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="p-6 bg-card/50 border-border/50 hover:bg-card/80 transition-smooth group hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${resource.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <resource.icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-700">
                      Featured
                    </Badge>
                  </div>

                  <h3 className="font-bold text-sm mb-2">{resource.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-500" />
                      {resource.rating}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloadCount}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {resource.duration}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-3 h-3 mr-2" />
                    Download {resource.type}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="text-sm text-muted-foreground">
              {filteredResources.length} resources found
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="p-6 bg-card/50 border-border/50 hover:bg-card/80 transition-smooth group hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 ${resource.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <resource.icon className="w-4 h-4 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>

                <h3 className="font-semibold text-sm mb-2">{resource.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{resource.description}</p>

                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    {resource.rating}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    {resource.downloadCount}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {resource.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Preview
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Card className="p-8 bg-card/50 border-border/50 text-center gradient-ocean">
            <h2 className="text-xl font-bold mb-4 text-white">
              Need Something Specific?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-2xl mx-auto">
              Can't find the resource you're looking for? Our team is constantly creating new templates
              and tools based on community feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <BookOpen className="w-4 h-4 mr-2" />
                Request Resource
              </Button>
              <Button className="bg-white text-ocean-deep hover:bg-white/90">
                <Users className="w-4 h-4 mr-2" />
                Join Community
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;