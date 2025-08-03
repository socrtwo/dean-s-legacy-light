import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MemorialBio = () => {
  const books = [
    {
      title: "Negotiation Behavior (1981)",
      authors: "Dean G. Pruitt",
      amazonUrl: "https://www.amazon.com/s?k=Negotiation+Behavior+Dean+Pruitt"
    },
    {
      title: "Strategic Choice: Social Dilemmas and the Psychology of Decision Making (1986)",
      authors: "Dean G. Pruitt",
      amazonUrl: "https://www.amazon.com/s?k=Strategic+Choice+Social+Dilemmas+Psychology+Decision+Making+Pruitt"
    },
    {
      title: "Mediation Research: The Process and Effectiveness of Third-Party Intervention (1989)",
      authors: "Kenneth Kressel, Dean G. Pruitt, and Associates",
      amazonUrl: "https://www.amazon.com/s?k=Mediation+Research+Process+Effectiveness+Third-Party+Intervention+Kressel+Pruitt"
    },
    {
      title: "Social Conflict: Escalation, Stalemate, and Settlement (1998, 2012)",
      authors: "Dean G. Pruitt, Sung Hee Kim",
      amazonUrl: "https://www.amazon.com/s?k=Social+Conflict+Escalation+Stalemate+Settlement+Pruitt+Kim"
    },
    {
      title: "Whither Conflict Research? (2006)",
      authors: "Dean G. Pruitt",
      amazonUrl: "https://www.amazon.com/s?k=Whither+Conflict+Research+Pruitt"
    },
    {
      title: "The Psychology of Social Conflict: Human Nature and the Quest for Peace (2019)",
      authors: "Dean G. Pruitt",
      amazonUrl: "https://www.amazon.com/s?k=Psychology+Social+Conflict+Human+Nature+Quest+Peace+Pruitt"
    }
  ];

  const majorArticles = [
    {
      title: "Achievement of Integrative Agreements in Negotiation",
      authors: "Dean G. Pruitt",
      url: "https://scholar.google.com/scholar?q=%22Achievement+of+Integrative+Agreements+in+Negotiation%22+Pruitt"
    },
    {
      title: "The Development of Integrative Solutions in Bilateral Negotiation",
      authors: "Dean G. Pruitt, Steven A. Lewis",
      url: "https://scholar.google.com/scholar?q=%22The+Development+of+Integrative+Solutions+in+Bilateral+Negotiation%22+Pruitt+Lewis"
    },
    {
      title: "Matching and Mismatching: The Effect of Own Limit, Other's Toughness, and Time Pressure on Concession Rate in Negotiation",
      authors: "Dean G. Pruitt, Douglas F. Johnson",
      url: "https://scholar.google.com/scholar?q=%22Matching+and+Mismatching+Effect+Own+Limit+Other+Toughness+Time+Pressure+Concession+Rate+Negotiation%22+Pruitt"
    },
    {
      title: "Strategy in Negotiation: Theory and Research",
      authors: "Dean G. Pruitt",
      url: "https://scholar.google.com/scholar?q=%22Strategy+in+Negotiation+Theory+and+Research%22+Pruitt"
    },
    {
      title: "Problem Solving and Concession Making in Bilateral Negotiation",
      authors: "Dean G. Pruitt, Peter J. Carnevale",
      url: "https://scholar.google.com/scholar?q=%22Problem+Solving+and+Concession+Making+in+Bilateral+Negotiation%22+Pruitt+Carnevale"
    },
    {
      title: "Strategic Choice in Conflicts: The Importance of Relationships",
      authors: "Dean G. Pruitt, Peter J. Carnevale",
      url: "https://scholar.google.com/scholar?q=%22Strategic+Choice+in+Conflicts+Importance+of+Relationships%22+Pruitt+Carnevale"
    },
    {
      title: "Readiness Theory and the Northern Ireland Conflict",
      authors: "Dean G. Pruitt",
      url: "https://scholar.google.com/scholar?q=%22Readiness+Theory+and+the+Northern+Ireland+Conflict%22+Pruitt"
    },
    {
      title: "Social Identity and Intergroup Conflict",
      authors: "Dean G. Pruitt, Sung Hee Kim",
      url: "https://scholar.google.com/scholar?q=%22Social+Identity+and+Intergroup+Conflict%22+Pruitt+Kim"
    },
    {
      title: "The Spiral of Conflict: Escalation and De-escalation",
      authors: "Dean G. Pruitt",
      url: "https://scholar.google.com/scholar?q=%22The+Spiral+of+Conflict+Escalation+and+De-escalation%22+Pruitt"
    }
  ];

  return (
    <div className="space-y-8">
      <Card id="bio">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Dr. Dean G. Pruitt (1930-2024)
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <div className="space-y-6 text-foreground">
            <p className="lead text-xl text-muted-foreground text-center mb-8">
              Distinguished Professor Emeritus of Social Psychology and Expert in Peace and Negotiation
            </p>
            
            <div className="space-y-4 clear-left">
              <img 
                src="/lovable-uploads/92d6a831-3cce-41af-897b-456590a9cf13.png" 
                alt="Dr. Dean G. Pruitt"
                className="float-left w-64 h-80 object-cover object-top rounded-lg shadow-lg mr-6 mb-4"
              />
              <p>
                Dr. Dean G. Pruitt was a towering figure in the field of social psychology, renowned worldwide for his groundbreaking research in conflict resolution, negotiation, and peace studies. Throughout his distinguished career, he dedicated his life to understanding the psychological mechanisms that drive both conflict and cooperation among individuals and groups.
              </p>
              
              <p>
                Born in 1930, Dr. Pruitt's academic journey led him to become one of the most influential scholars in social psychology. His work bridged the gap between theoretical research and practical application, making significant contributions to our understanding of how conflicts escalate and how they can be resolved through negotiation and mediation.
              </p>
              
              <p>
                As a professor, Dr. Pruitt mentored countless students who went on to become leaders in psychology, conflict resolution, and peace studies. His teaching philosophy emphasized the importance of rigorous research combined with a deep commitment to applying psychological insights to real-world problems.
              </p>
              
              <p className="clear-left">
                Dr. Pruitt's research examined the complex dynamics of interpersonal and intergroup conflict, with particular attention to the psychological factors that influence negotiation outcomes. His work on integrative bargaining, strategic choice in conflicts, and the role of third-party intervention has shaped how we understand and approach conflict resolution today.
              </p>
              
              <p>
                Beyond his academic achievements, Dr. Pruitt was known for his warmth, intellectual curiosity, and unwavering commitment to using knowledge in service of peace. He believed deeply in the power of research to make the world a better place, and his legacy continues through the many lives he touched and the scholarship he inspired.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8" id="bibliography">
        <Card>
          <CardHeader>
            <CardTitle>Notable Books</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {books.map((book, index) => (
                <li key={index} className="text-foreground border-l-4 border-accent pl-4 py-3">
                  <div className="space-y-1">
                    <a 
                      href={book.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {book.title}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Authors: {book.authors}
                    </p>
                  </div>
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
            <ul className="space-y-4">
              {majorArticles.map((article, index) => (
                <li key={index} className="text-foreground border-l-4 border-accent pl-4 py-3">
                  <div className="space-y-1">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {article.title}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Authors: {article.authors}
                    </p>
                  </div>
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