
  ## Menteor Database Design

A brief explanation on the Menteor database structure. The design includes various collections representing different entities in the system on 1/24/24.

<a href="https://app.eraser.io/workspace/Mr4y47HaLlB8BbUhuOJa?elements=7lQVx0oWa4V577daVakIkA">View on Eraser<br /><img src="https://app.eraser.io/workspace/Mr4y47HaLlB8BbUhuOJa/preview?elements=7lQVx0oWa4V577daVakIkA&type=embed" /></a>

### 1. Users Collection:

The Users collection stores information about individuals using the Menteor platform. It includes details such as name, location, email, engagement type, and references the Discovery Methods collection for the discovery method used.

**Fields:**
```json
{
  "id": "user_001",
  "name": "Alice Johnson",
  "location": "San Francisco, CA",
  "email": "alice@example.com",
  "engagementTypeId": "signup",
  "discoveryMethodId": "method_001"
}
```

### 2. User Roles Collection:

The User Roles collection defines various roles that users can have in the Menteor platform. It includes information about the type of role and references the Discovery Methods collection for the associated discovery method.

**Fields:**
```json
{
  "id": "role_001",
  "type": "Mentor",
  "discoveryMethodId": "method_001"
}
```

### 3. Discovery Methods Collection:

The Discovery Methods collection lists different methods through which users discover the Menteor platform. It provides a description of each method.

**Fields:**
```json
{
  "id": "method_001",
  "method": "Referral"
}
```

### 4. Mentees Collection:

The Mentees collection contains information about individuals seeking mentorship. It includes details such as topics of interest, preferred features, communication preferences, and reasons for seeking mentorship.

**Fields:**
```json
{
  "id": "mentee_001",
  "userId": "user_001",
  "topicOrSkill": ["Programming", "Data Science"],
  "preferredFeatures": ["Flexible Schedule", "Project Collaboration"],
  "preferredCommunication": "Video Call",
  "weeklyTimeCommitment": "8 hours",
  "budget": "$50",
  "preferredTime": "Evenings",
  "mentorshipReason": ["Skill Enhancement", "Career Growth"],
  "challengesFaced": ["Time Management", "Impostor Syndrome"],
  "idealMentorDescription": "Seeking a mentor with expertise in data science and project collaboration."
}
```

### 5. Mentors Collection:

The Mentors collection stores information about individuals offering mentorship. It includes details such as mentoring goals, communication preferences, expertise areas, and availability for mentorship.

**Fields:**
```json
{
  "id": "mentor_001",
  "userId": "user_001",
  "mentoringGoals": ["Guidance on Leadership", "Technical Skill Development"],
  "preferredCommunication": "Email",
  "preferredFeatures": ["Flexible Schedule"],
  "preferredTime": "Weekends",
  "challengesFaced": ["Balancing Work and Personal Life"],
  "interestInMenteor": ["Giving Back", "Professional Development"],
  "improvementSuggestions": ["Enhance Platform UI", "Increase Mentor Matching Accuracy"],
  "expertiseArea": ["Software Engineering", "Project Management"],
  "experienceYears": "10",
  "weeklyAvailability": "15 hours",
  "chargePerSession": "$100"
}
```

### 6. Contributors Collection:

The Contributors collection contains information about individuals willing to contribute to the Menteor platform. It includes preferences for contribution, openness to mentorship, and details about challenges and improvement suggestions.

**Fields:**
```json
{
  "id": "contributor_001",
  "userId": "user_001",
  "contributionPreferences": ["Content Creation", "Event Organization"],
  "openToMentorship": true,
  "preferredFeatures": ["Collaborative Projects"],
  "challengesFaced": ["Limited Time for Contribution"],
  "compellingAspects": ["Diverse Community", "Impactful Projects"],
  "improvementSuggestions": ["Enhance Collaboration Tools", "Increase Outreach"]
}
```

### Relationships:

- **users.engagementType <> user_roles.id**
- **users.discoveryMethod <> discovery_methods.id**
- **mentees.userId > users.id**
- **mentors.userId > users.id**
- **contributors.userId > users.id**
- **user_roles.discoveryMethodId > discovery_methods.id**