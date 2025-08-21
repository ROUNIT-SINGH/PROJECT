import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Users, 
  Clock, 
  Share2,
  Download,
  MessageSquare,
  Settings,
  Phone,
  PhoneOff,
  Calendar,
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

const MeetingRoom = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [meetingDuration, setMeetingDuration] = useState(0);
  const [participants, setParticipants] = useState(3);
  const [agenda, setAgenda] = useState('');
  const [notes, setNotes] = useState('');
  
  // Mock meeting data
  const [meetingData, setMeetingData] = useState({
    title: 'Sprint Planning - Week 12',
    type: 'Sprint Planning',
    participants: ['Alice Johnson (PM)', 'Bob Smith (Dev)', 'Carol Davis (QA)'],
    startTime: new Date(),
    objectives: [
      'Review previous sprint outcomes',
      'Plan upcoming sprint stories',
      'Assign story points',
      'Identify potential blockers'
    ]
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInMeeting) {
      interval = setInterval(() => {
        setMeetingDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isInMeeting]);

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startMeeting = () => {
    setIsInMeeting(true);
    setMeetingData(prev => ({ ...prev, startTime: new Date() }));
    toast.success('Meeting started! AI is now recording and analyzing.');
  };

  const endMeeting = () => {
    setIsInMeeting(false);
    toast.success('Meeting ended. Generating summary...');
    // Redirect to summary page in real implementation
  };

  const shareScreen = () => {
    toast.info('Screen sharing initiated');
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    toast.info(isVideoOn ? 'Camera turned off' : 'Camera turned on');
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
    toast.info(isMicOn ? 'Microphone muted' : 'Microphone unmuted');
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card/50 border-border/50">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-bold mb-1">{meetingData.title}</h1>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="gradient-ocean text-white">
                      {meetingData.type}
                    </Badge>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {participants} participants
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {isInMeeting ? formatDuration(meetingDuration) : '00:00:00'}
                    </div>
                  </div>
                </div>
                {isInMeeting && (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-500 font-medium">REC</span>
                  </div>
                )}
              </div>

              {/* Video Grid */}
              <div className="aspect-video bg-muted/20 rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 gradient-ocean opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {isInMeeting ? (
                    <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                      {meetingData.participants.map((participant, index) => (
                        <div key={index} className="bg-card/30 rounded-lg flex items-center justify-center relative">
                          <div className="text-center">
                            <div className="w-16 h-16 gradient-ocean rounded-full flex items-center justify-center mb-2 mx-auto">
                              <span className="text-white font-bold text-sm">
                                {participant.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <p className="text-xs text-foreground">{participant}</p>
                          </div>
                          {index === 0 && !isVideoOn && (
                            <div className="absolute top-2 right-2">
                              <VideoOff className="w-4 h-4 text-red-400" />
                            </div>
                          )}
                          {index === 0 && !isMicOn && (
                            <div className="absolute top-2 left-2">
                              <MicOff className="w-4 h-4 text-red-400" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center">
                      <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">Ready to start your meeting</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Meeting Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant={isMicOn ? "default" : "destructive"}
                  size="sm"
                  onClick={toggleMic}
                  className="rounded-full w-12 h-12 p-0"
                >
                  {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </Button>
                
                <Button
                  variant={isVideoOn ? "default" : "destructive"}
                  size="sm"
                  onClick={toggleVideo}
                  className="rounded-full w-12 h-12 p-0"
                >
                  {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={shareScreen}
                  className="rounded-full w-12 h-12 p-0"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full w-12 h-12 p-0"
                >
                  <MessageSquare className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full w-12 h-12 p-0"
                >
                  <Settings className="w-4 h-4" />
                </Button>
                
                {isInMeeting ? (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={endMeeting}
                    className="rounded-full w-12 h-12 p-0"
                  >
                    <PhoneOff className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={startMeeting}
                    className="gradient-sunset shadow-sunset rounded-full px-6"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Start Meeting
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Meeting Objectives */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold text-sm mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Meeting Objectives
              </h3>
              <div className="space-y-2">
                {meetingData.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{objective}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Live Agenda */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold text-sm mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Live Agenda
              </h3>
              <Textarea
                placeholder="Add agenda items or update during the meeting..."
                value={agenda}
                onChange={(e) => setAgenda(e.target.value)}
                className="min-h-[100px] text-xs"
              />
            </Card>

            {/* Meeting Notes */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold text-sm mb-3 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                Meeting Notes
              </h3>
              <Textarea
                placeholder="AI is automatically capturing notes. Add your insights here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px] text-xs"
              />
              {isInMeeting && (
                <div className="mt-2 flex items-center text-xs text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  AI is actively transcribing
                </div>
              )}
            </Card>

            {/* Quick Actions */}
            <Card className="p-4 bg-card/50 border-border/50">
              <h3 className="font-semibold text-sm mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Download className="w-3 h-3 mr-2" />
                  Export Transcript
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Share2 className="w-3 h-3 mr-2" />
                  Share Meeting Link
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <AlertCircle className="w-3 h-3 mr-2" />
                  Report Issue
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;