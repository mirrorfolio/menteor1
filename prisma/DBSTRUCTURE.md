
  ## Menteor Database Design

A brief explanation on the Menteor database structure. The design includes various collections representing different entities in the system on 1/24/24.


<img src="https://app.eraser.io/workspace/lnVcci2pHvn8LGCvo8s7/preview?elements=kp0XDuaR9hqI-_UKNFYZ-Q&type=embed" />

### Collections:

#### 1. users
The "users" collection serves as the central entity, capturing general information about users and their roles. It includes foreign key references to specific roles such as mentors, mentees, and enthusiasts.
```json

[

{ "_id": "objectId"},

{ "mentorId": "mentor._id" },

{ "menteeId": "mentee._id" },

{ "enthusiastId": "enthusiast._id" },

{ "name": "string" },

{ "location": "string" },

{ "email": "string" }

]`

```

#### 2. mentors
The "mentors" collection stores details about individuals offering mentorship, including their expertise, years of experience, and preferences. It establishes relationships with expertise areas, platform features, and discovery methods.

```json

[

{ "_id": "objectId"},

{ "expertiseId": "expertiseArea._id" },

{ "yearsOfExperience": "string" },

{ "availability": "string" },

{ "mentoringGoals": "string" },

{ "platformFeatures": "array"},

{ "challengesFaced": "string" },

{ "interestingAspects": "string" },

{ "improvementSuggestions": "string" },

{ "discoveryMethodId": "discoveryMethod._id" }

]`

```

#### 3. mentees
The "mentees" collection contains information about individuals seeking mentorship. It includes details on their interests, skill levels, preferred time commitments, and reasons for seeking mentorship. Similar to mentors, it references various entities like interest areas, mentorship budgets, platform features, and discovery methods.



```json

[

{ "_id": "objectId" },

{ "interestId": "interestArea._id" },

{ "skillLevel": "string" },

{ "topicOfInterest": "string" },

{ "weeklyTimeCommitment": "string" },

{ "mentorshipBudgetId": "mentorshipBudget._id" },

{ "preferredTime": "string" },

{ "mentorshipReason": "string" },

{ "platformFeatures": "array" },

{ "challengesFaced": "string" },

{ "preferredMentorPersona": "string" },

{ "discoveryMethodId": "discoveryMethod._id" }

]

```


#### 4. enthusiasts
The "enthusiasts" collection focuses on individuals who are enthusiasts but may not be directly involved in mentorship. It captures their interests, platform features preferences, and discovery methods.


```json

[

{ "_id": "objectId" },

{ "platformFeatures": "array" },

{ "interestingAspects": "string" },

{ "discoveryMethodId": "discoveryMethod._id" }

]

```

  
#### 5. expertiseAreas and 6. interestAreas
These collections define the expertise and interest areas respectively, providing a structured way to categorize and match mentors and mentees.



```json

[{ "_id": "objectId" }, { "name": "string" }]

```


#### 7. mentorshipBudgets
The "mentorshipBudgets" collection represents different budget levels mentees may allocate for mentorship.

```json

[

{ "_id": "objectId"},

{ "amount": "string" }

]`

```


#### 8. discoveryMethods
The "discoveryMethods" collection holds various methods through which users discovered the platform or were discovered by others.


```json

[

{ "_id": "objectId"},

{ "method": "string" }

]
```

### Relationships:

  

1.  `users.mentorId <> mentors._id`

2.  `users.menteeId <> mentees._id`

3.  `users.enthusiastId <> enthusiasts._id`

4.  `mentors.expertiseId > expertiseAreas._id`

5.  `mentees.interestId > interestAreas._id`

6.  `mentees.mentorshipBudgetId > mentorshipBudgets._id`

7.  `enthusiasts.discoveryMethodId > discoveryMethods._id`

8.  `mentees.discoveryMethodId > discoveryMethods._id`

9.  `mentors.discoveryMethodId > discoveryMethods._id`