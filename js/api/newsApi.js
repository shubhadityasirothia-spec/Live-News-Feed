// BASE_URL is the endpoint for GNews API
const BASE_URL = "https://gnews.io/api/v4";

// High-quality local fallback mock news data to use when GNews API fails (e.g. Rate Limit / Quota Exceeded)
const MOCK_NEWS = {
    general: [
        {
            title: "Global Summit Addresses Green Energy Transition",
            description: "World leaders have gathered in Paris to discuss concrete steps and funding mechanisms to transition to renewable energy sources over the next decade.",
            url: "https://example.com/green-energy-summit",
            image: "https://picsum.photos/id/10/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Global Chronicles", url: "https://example.com" }
        },
        {
            title: "Exploring the Deepest Ocean Trench",
            description: "A team of international scientists has embarked on a record-breaking dive into the Mariana Trench to catalog previously undiscovered marine life.",
            url: "https://example.com/mariana-trench-ocean",
            image: "https://picsum.photos/id/11/500/300",
            publishedAt: new Date(Date.now() - 3600000).toISOString(),
            source: { name: "Nature Science", url: "https://example.com" }
        },
        {
            title: "Urban Architecture shifts towards Smart Spaces",
            description: "Metropolitan cities around the world are adopting vertical forests and solar-harnessing concrete to build more sustainable residential towers.",
            url: "https://example.com/smart-urban-architecture",
            image: "https://picsum.photos/id/12/500/300",
            publishedAt: new Date(Date.now() - 7200000).toISOString(),
            source: { name: "City Design", url: "https://example.com" }
        }
    ],
    technology: [
        {
            title: "Breakthrough in Room-Temperature Superconductors",
            description: "Researchers announce a major milestone in material science, discovering a compound that displays zero electrical resistance at ambient temperatures.",
            url: "https://example.com/superconductors-milestone",
            image: "https://picsum.photos/id/13/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Tech Pulse", url: "https://example.com" }
        },
        {
            title: "Next-Gen Quantum Computing Chips Enter Production",
            description: "Leading semiconductor firms are starting pilot runs of 200-qubit processor chips, aiming to solve complex optimization problems by next year.",
            url: "https://example.com/quantum-chips-manufacturing",
            image: "https://picsum.photos/id/14/500/300",
            publishedAt: new Date(Date.now() - 4500000).toISOString(),
            source: { name: "Quantum Journal", url: "https://example.com" }
        },
        {
            title: "Autonomous Delivery Drones Get Regulatory Approval",
            description: "Civil aviation authorities have greenlit drone delivery services for residential suburbs, promising delivery times under 15 minutes.",
            url: "https://example.com/drone-delivery-license",
            image: "https://picsum.photos/id/15/500/300",
            publishedAt: new Date(Date.now() - 9000000).toISOString(),
            source: { name: "Gizmo Feed", url: "https://example.com" }
        }
    ],
    business: [
        {
            title: "Interest Rates Stabilize as Global Inflation Cools",
            description: "Central banks signal a pause in rate hikes as consumer price indices show a steady decline, boosting investor confidence worldwide.",
            url: "https://example.com/interest-rates-stabilization",
            image: "https://picsum.photos/id/16/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Market Ledger", url: "https://example.com" }
        },
        {
            title: "Merger of E-commerce Giants Reshapes Retail Space",
            description: "A multi-billion dollar merger creates the largest online delivery marketplace, targeting emerging economies in Southeast Asia and South America.",
            url: "https://example.com/ecommerce-merger-retail",
            image: "https://picsum.photos/id/17/500/300",
            publishedAt: new Date(Date.now() - 5000000).toISOString(),
            source: { name: "Retail Insight", url: "https://example.com" }
        },
        {
            title: "The Rise of Decentralized Workspace Models",
            description: "Corporate entities are shifting investments from central headquarters to neighborhood micro-offices, reducing employee commute stress.",
            url: "https://example.com/flexible-decentralized-work",
            image: "https://picsum.photos/id/18/500/300",
            publishedAt: new Date(Date.now() - 10000000).toISOString(),
            source: { name: "Business Today", url: "https://example.com" }
        }
    ],
    sports: [
        {
            title: "Underdog Team Clinches Historic Championship Victory",
            description: "Against all mathematical odds, the league newcomers secured the gold medal in a thrilling double-overtime penalty shootout.",
            url: "https://example.com/underdog-champions",
            image: "https://picsum.photos/id/19/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Sports Arena", url: "https://example.com" }
        },
        {
            title: "World Athletic Games Set to Introduce Mixed-Gender Relays",
            description: "The Olympic committee confirms the addition of mixed-gender track events, aiming to promote gender parity and dynamic team setups.",
            url: "https://example.com/mixed-gender-relays",
            image: "https://picsum.photos/id/20/500/300",
            publishedAt: new Date(Date.now() - 3000000).toISOString(),
            source: { name: "Athletics Daily", url: "https://example.com" }
        },
        {
            title: "Tennis Sensation Retires After Grand Slam Triumph",
            description: "The 24-year-old superstar announces retirement at the peak of their career to focus on youth coaching and charity foundations.",
            url: "https://example.com/tennis-superstar-retirement",
            image: "https://picsum.photos/id/21/500/300",
            publishedAt: new Date(Date.now() - 8000000).toISOString(),
            source: { name: "Court Report", url: "https://example.com" }
        }
    ],
    entertainment: [
        {
            title: "Indie Sci-Fi Film Sweeps International Film Awards",
            description: "A low-budget, high-concept film about parallel universes wins Best Picture, Best Director, and Best Screenplay, defeating studio blockbusters.",
            url: "https://example.com/indie-scifi-awards",
            image: "https://picsum.photos/id/22/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Cinephile Hub", url: "https://example.com" }
        },
        {
            title: "Global Music Star Announces Unplugged Acoustic Tour",
            description: "Moving away from heavy stadium pyrotechnics, the artist plans intimate performances in historical theater venues across three continents.",
            url: "https://example.com/acoustic-music-tour",
            image: "https://picsum.photos/id/23/500/300",
            publishedAt: new Date(Date.now() - 6000000).toISOString(),
            source: { name: "Melody Insider", url: "https://example.com" }
        },
        {
            title: "Pop Culture Icon Re-releases Classic Album in Vinyl",
            description: "A collector's edition reissue features long-lost studio outtakes and acoustic demos, sparking high demand among vintage audio fans.",
            url: "https://example.com/vinyl-collectors-release",
            image: "https://picsum.photos/id/24/500/300",
            publishedAt: new Date(Date.now() - 12000000).toISOString(),
            source: { name: "Vinyl Corner", url: "https://example.com" }
        }
    ],
    health: [
        {
            title: "New Vaccine Candidate Shows High Efficacy in Trials",
            description: "An mRNA vaccine targeting respiratory pathogens demonstrates an 88% reduction in severe symptoms during Phase III trials.",
            url: "https://example.com/vaccine-efficacy-trials",
            image: "https://picsum.photos/id/25/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Medical Horizon", url: "https://example.com" }
        },
        {
            title: "Mindfulness and Physical Health Connection Explored",
            description: "Neurological study shows that daily mindfulness meditation leads to a statistically significant decrease in inflammatory biomarkers.",
            url: "https://example.com/mindfulness-health-markers",
            image: "https://picsum.photos/id/26/500/300",
            publishedAt: new Date(Date.now() - 3200000).toISOString(),
            source: { name: "Mind Body Lab", url: "https://example.com" }
        },
        {
            title: "Major Supermarket Chain to Ban Artificial Sweeteners",
            description: "In alignment with clean-label guidelines, the retailer commits to removing synthetic sugar substitutes from all store-brand baked goods.",
            url: "https://example.com/artificial-sweeteners-ban",
            image: "https://picsum.photos/id/27/500/300",
            publishedAt: new Date(Date.now() - 7500000).toISOString(),
            source: { name: "NutriNews", url: "https://example.com" }
        }
    ],
    science: [
        {
            title: "James Webb Space Telescope Captures Star Birth in Unseen detail",
            description: "Newly released infrared imagery shows the early stages of star systems in a nearby nebula, revealing intricate gas dust flows.",
            url: "https://example.com/jwst-star-birth",
            image: "https://picsum.photos/id/28/500/300",
            publishedAt: new Date().toISOString(),
            source: { name: "Cosmo Science", url: "https://example.com" }
        },
        {
            title: "Ancient City Discovered Deep inside the Amazon Rainforest",
            description: "LIDAR mapping techniques reveal a vast, pre-Columbian urban network under the dense jungle canopy, hosting complex structures and canals.",
            url: "https://example.com/lidar-amazon-discovery",
            image: "https://picsum.photos/id/29/500/300",
            publishedAt: new Date(Date.now() - 4000000).toISOString(),
            source: { name: "Archy Daily", url: "https://example.com" }
        },
        {
            title: "Experimental Carbon-Capture Plant Starts Operations",
            description: "The new facility utilizes volcanic rock to mineralize dissolved CO2, trapping emissions underground permanently within 2 years.",
            url: "https://example.com/geothermal-carbon-capture",
            image: "https://picsum.photos/id/30/500/300",
            publishedAt: new Date(Date.now() - 9500000).toISOString(),
            source: { name: "Eco Science", url: "https://example.com" }
        }
    ]
};

// Main function to fetch top headlines
async function getTopNews(category = "general") {
    try {
        // We use window.API_KEY or just API_KEY if available globally
        const apiKeyVal = typeof API_KEY !== 'undefined' ? API_KEY : "b51aa4f97491b451105820d90c15a394";
        const response = await fetch(
            `${BASE_URL}/top-headlines?category=${category}&lang=en&max=50&apikey=${apiKeyVal}`
        );

        if (!response.ok) {
            switch (response.status) {
                case 401:
                    throw new Error("Invalid API Key");
                case 403:
                    throw new Error("Access Forbidden (Daily Quota Exceeded)");
                case 429:
                    throw new Error("API Rate Limit Exceeded (Too Many Requests)");
                case 500:
                    throw new Error("Server Error");
                default:
                    throw new Error("Unable to fetch news from server");
            }
        }

        return await response.json();
    } catch (error) {
        console.warn(`GNews API fetch failed: ${error.message}. Loading high-quality mock articles as fallback...`);
        // Return a simulated API response using mock data
        const articles = MOCK_NEWS[category] || MOCK_NEWS.general;
        return {
            totalArticles: articles.length,
            articles: articles,
            fallbackUsed: true
        };
    }
}

// Function to search news articles
async function searchNewsAPI(query) {
    try {
        const apiKeyVal = typeof API_KEY !== 'undefined' ? API_KEY : "b51aa4f97491b451105820d90c15a394";
        const response = await fetch(
            `${BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&max=50&apikey=${apiKeyVal}`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        return await response.json();
    } catch (error) {
        console.warn(`GNews Search API failed: ${error.message}. Searching local mock articles...`);
        // Return matching local articles across all categories
        const matched = [];
        const lowerQuery = query.toLowerCase();
        
        // Loop through all mock articles to find matches in title or description
        for (const cat in MOCK_NEWS) {
            MOCK_NEWS[cat].forEach(art => {
                const titleMatch = art.title.toLowerCase().includes(lowerQuery);
                const descMatch = art.description.toLowerCase().includes(lowerQuery);
                const isDup = matched.some(existing => existing.title === art.title);
                if ((titleMatch || descMatch) && !isDup) {
                    matched.push(art);
                }
            });
        }

        // If no matches found, return general articles
        const finalResults = matched.length > 0 ? matched : MOCK_NEWS.general;
        return {
            totalArticles: finalResults.length,
            articles: finalResults,
            fallbackUsed: true
        };
    }
}
