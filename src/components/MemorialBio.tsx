import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MemorialBio = () => {
  const books = [
    {
      title: "Negotiation Behavior",
      year: "1981",
      authors: "Dean G. Pruitt",
      publisher: "Academic Press",
      isbn: "978-0125683500",
      amazonUrl: "https://www.amazon.com/dp/0125683502",
      googleBooksUrl: "https://books.google.com/books?q=%22Negotiation+Behavior%22+%22Dean+G.+Pruitt%22+isbn:0125683502",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3ANegotiation+Behavior+au%3APruitt"
    },
    {
      title: "Strategic Choice in Negotiation",
      year: "1986", 
      authors: "Dean G. Pruitt",
      publisher: "Academic Press",
      isbn: "978-0125683517",
      amazonUrl: "https://www.amazon.com/dp/0125683510",
      googleBooksUrl: "https://books.google.com/books?q=%22Strategic+Choice+in+Negotiation%22+%22Dean+G.+Pruitt%22",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3AStrategic+Choice+in+Negotiation+au%3APruitt"
    },
    {
      title: "Mediation Research: The Process and Effectiveness of Third-Party Intervention",
      year: "1989",
      authors: "Kenneth Kressel, Dean G. Pruitt, and Associates",
      publisher: "Jossey-Bass",
      isbn: "978-1555420741",
      amazonUrl: "https://www.amazon.com/dp/1555420745",
      googleBooksUrl: "https://books.google.com/books?q=%22Mediation+Research%22+Kressel+Pruitt+isbn:1555420745",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3AMediation+Research+au%3AKressel+au%3APruitt"
    },
    {
      title: "Social Conflict: Escalation, Stalemate, and Settlement",
      year: "2004 (3rd ed.)",
      authors: "Dean G. Pruitt, Sung Hee Kim",
      publisher: "McGraw-Hill",
      isbn: "978-0072855395",
      amazonUrl: "https://www.amazon.com/dp/0072855398",
      googleBooksUrl: "https://books.google.com/books?q=%22Social+Conflict+Escalation+Stalemate+Settlement%22+Pruitt+Kim",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3ASocial+Conflict+Escalation+au%3APruitt+au%3AKim"
    },
    {
      title: "Whither Conflict Research?",
      year: "2006",
      authors: "Dean G. Pruitt",
      publisher: "Conflict Resolution Education Connection", 
      isbn: "N/A",
      amazonUrl: "https://www.amazon.com/s?k=%22Whither+Conflict+Research%22+%22Dean+Pruitt%22",
      googleBooksUrl: "https://books.google.com/books?q=%22Whither+Conflict+Research%22+%22Dean+G.+Pruitt%22",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3AWhither+Conflict+Research+au%3APruitt"
    },
    {
      title: "The Psychology of Social Conflict: Human Nature and the Quest for Peace",
      year: "2019",
      authors: "Dean G. Pruitt",
      publisher: "Springer",
      isbn: "978-3030207021",
      amazonUrl: "https://www.amazon.com/dp/3030207021",
      googleBooksUrl: "https://books.google.com/books?id=TZmhDwAAQBAJ",
      worldcatUrl: "https://www.worldcat.org/search?q=ti%3APsychology+of+Social+Conflict+au%3APruitt"
    }
  ];

  const majorArticles = [
    {
      title: "Achievement of Integrative Agreements in Negotiation",
      authors: "Dean G. Pruitt",
      year: "1983",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Achievement+of+Integrative+Agreements+in+Negotiation%22+Pruitt",
      alternateUrl: "https://psycnet.apa.org/search/results?query=Achievement+Integrative+Agreements+Negotiation+Pruitt"
    },
    {
      title: "The Development of Integrative Solutions in Bilateral Negotiation",
      authors: "Dean G. Pruitt, Steven A. Lewis",
      year: "1975",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22The+Development+of+Integrative+Solutions+in+Bilateral+Negotiation%22+Pruitt+Lewis",
      alternateUrl: "https://www.jstor.org/action/doBasicSearch?Query=Development+Integrative+Solutions+Bilateral+Negotiation+Pruitt"
    },
    {
      title: "Matching and Mismatching: The Effect of Own Limit, Other's Toughness, and Time Pressure on Concession Rate in Negotiation",
      authors: "Dean G. Pruitt, Douglas F. Johnson",
      year: "1970",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Matching+and+Mismatching+Effect+Own+Limit+Other+Toughness+Time+Pressure+Concession+Rate+Negotiation%22+Pruitt",
      alternateUrl: "https://psycnet.apa.org/search/results?query=Matching+Mismatching+Effect+Limit+Toughness+Pruitt"
    },
    {
      title: "Strategy in Negotiation: Theory and Research",
      authors: "Dean G. Pruitt",
      year: "1981",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Strategy+in+Negotiation+Theory+and+Research%22+Pruitt",
      alternateUrl: "https://www.semanticscholar.org/search?q=Strategy+Negotiation+Theory+Research+Pruitt"
    },
    {
      title: "Problem Solving and Concession Making in Bilateral Negotiation",
      authors: "Dean G. Pruitt, Peter J. Carnevale",
      year: "1982",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Problem+Solving+and+Concession+Making+in+Bilateral+Negotiation%22+Pruitt+Carnevale",
      alternateUrl: "https://www.researchgate.net/search.Search.html?query=Problem+Solving+Concession+Making+Bilateral+Negotiation+Pruitt"
    },
    {
      title: "Strategic Choice in Conflicts: The Importance of Relationships",
      authors: "Dean G. Pruitt, Peter J. Carnevale",
      year: "1993",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Strategic+Choice+in+Conflicts+Importance+of+Relationships%22+Pruitt+Carnevale",
      alternateUrl: "https://www.tandfonline.com/action/doSearch?AllField=Strategic+Choice+Conflicts+Importance+Relationships+Pruitt"
    },
    {
      title: "Readiness Theory and the Northern Ireland Conflict",
      authors: "Dean G. Pruitt",
      year: "2007",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Readiness+Theory+and+the+Northern+Ireland+Conflict%22+Pruitt",
      alternateUrl: "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Dean%20Pruitt&eventCode=SE-AU"
    },
    {
      title: "Social Identity and Intergroup Conflict",
      authors: "Dean G. Pruitt, Sung Hee Kim",
      year: "2004",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22Social+Identity+and+Intergroup+Conflict%22+Pruitt+Kim",
      alternateUrl: "https://www.sciencedirect.com/search?qs=Social+Identity+Intergroup+Conflict+Pruitt+Kim"
    },
    {
      title: "The Spiral of Conflict: Escalation and De-escalation",
      authors: "Dean G. Pruitt",
      year: "1969",
      googleScholarUrl: "https://scholar.google.com/scholar?q=%22The+Spiral+of+Conflict+Escalation+and+De-escalation%22+Pruitt",
      alternateUrl: "https://psycnet.apa.org/search/results?query=Spiral+Conflict+Escalation+De-escalation+Pruitt"
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
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">
                      {book.title} ({book.year})
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Authors: {book.authors}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Publisher: {book.publisher} • ISBN: {book.isbn}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <a 
                        href={book.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline bg-muted px-2 py-1 rounded"
                      >
                        Amazon
                      </a>
                      <a 
                        href={book.googleBooksUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline bg-muted px-2 py-1 rounded"
                      >
                        Google Books
                      </a>
                      <a 
                        href={book.worldcatUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline bg-muted px-2 py-1 rounded"
                      >
                        WorldCat Libraries
                      </a>
                    </div>
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
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Authors: {article.authors} • Year: {article.year}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <a 
                        href={article.googleScholarUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline bg-muted px-2 py-1 rounded"
                      >
                        Google Scholar
                      </a>
                      <a 
                        href={article.alternateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline bg-muted px-2 py-1 rounded"
                      >
                        Alternative Search
                      </a>
                    </div>
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