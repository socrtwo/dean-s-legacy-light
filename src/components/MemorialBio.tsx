import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MemorialBio = () => {
  const books = [
    "Negotiation Behavior (1981)",
    "Strategic Choice: Social Dilemmas and the Psychology of Decision Making (1986)", 
    "Mediation Research: The Process and Effectiveness of Third-Party Intervention (1989)",
    "Social Conflict: Escalation, Stalemate, and Settlement (1998, 2012)",
    "Whither Conflict Research? (2006)",
    "The Psychology of Social Conflict: Human Nature and the Quest for Peace (2019)"
  ];

  const majorArticles = [
    "Achievement of Integrative Agreements in Negotiation",
    "The Development of Integrative Solutions in Bilateral Negotiation", 
    "Matching and Mismatching: The Effect of Own Limit, Other's Toughness, and Time Pressure on Concession Rate in Negotiation",
    "Strategy in Negotiation: Theory and Research",
    "Problem Solving and Concession Making in Bilateral Negotiation",
    "Strategic Choice in Conflicts: The Importance of Relationships",
    "Readiness Theory and the Northern Ireland Conflict",
    "Social Identity and Intergroup Conflict",
    "The Spiral of Conflict: Escalation and De-escalation"
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Dr. Dean G. Pruitt (1937-2024)
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <div className="space-y-6 text-foreground">
            <p className="lead text-xl text-muted-foreground text-center mb-8">
              Distinguished Professor Emeritus of Social Psychology and Expert in Peace and Negotiation
            </p>
            
            <div className="space-y-4">
              <p>
                Dr. Dean G. Pruitt was a towering figure in the field of social psychology, renowned worldwide for his groundbreaking research in conflict resolution, negotiation, and peace studies. Throughout his distinguished career, he dedicated his life to understanding the psychological mechanisms that drive both conflict and cooperation among individuals and groups.
              </p>
              
              <p>
                Born in 1937, Dr. Pruitt's academic journey led him to become one of the most influential scholars in social psychology. His work bridged the gap between theoretical research and practical application, making significant contributions to our understanding of how conflicts escalate and how they can be resolved through negotiation and mediation.
              </p>
              
              <p>
                As a professor, Dr. Pruitt mentored countless students who went on to become leaders in psychology, conflict resolution, and peace studies. His teaching philosophy emphasized the importance of rigorous research combined with a deep commitment to applying psychological insights to real-world problems.
              </p>
              
              <p>
                Dr. Pruitt's research examined the complex dynamics of interpersonal and intergroup conflict, with particular attention to the psychological factors that influence negotiation outcomes. His work on integrative bargaining, strategic choice in conflicts, and the role of third-party intervention has shaped how we understand and approach conflict resolution today.
              </p>
              
              <p>
                Beyond his academic achievements, Dr. Pruitt was known for his warmth, intellectual curiosity, and unwavering commitment to using knowledge in service of peace. He believed deeply in the power of research to make the world a better place, and his legacy continues through the many lives he touched and the scholarship he inspired.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Notable Books</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {books.map((book, index) => (
                <li key={index} className="text-foreground border-l-4 border-accent pl-4 py-2">
                  {book}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Major Research Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {majorArticles.map((article, index) => (
                <li key={index} className="text-foreground border-l-4 border-accent pl-4 py-2">
                  {article}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemorialBio;