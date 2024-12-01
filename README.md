# Senior Next: A Dating Platform for Seniors

**Senior Next** is a responsive and accessible dating website specifically designed for elderly individuals who aren't as tech-savvy, typically aged 50 and above, but still welcoming users aged 40 and above.

The website offers seniors an intuitive, minimalist, simple, user-friendly experience to forge meaningful connections, whether for friendship, romance, or both.

The website addresses the challenges seniors face with modern digital tools, loneliness, boredom, focusing on accessibility, minimalism, connectivity, and inclusivity.
 
## Design Process
### Audience and Intent
The primary audience consists of seniors aged 50 and older who may find traditional dating apps overly complex or unwelcoming. Many seniors are seeking:
- Companionship
- Friendship
- Romantic relationships

The design and functionality of the website address their needs by:
- Simplifying navigation.
- Ensuring accessibility with larger fonts, preferred warm,inviting, cozy, pastel colours, and intuitive layouts.
- Including features that help users connect meaningfully while keeping the platform safe and welcoming.
- Simple activity feed that shows meaningful updates or community events. This keeps them engaged without overwhelming them.
- Filter button for personalised matches (ethnicity), this allows them to narrow down their search results based on criteria that matter most to them.
- Promoting safety and security with robust profile and security verification, and a friendly community moderation system catered to just seniors, so they can enjoy a safe and welcoming space where they can engage with others confidently.
- Search button with advanced filters, give them control over their search experience by allowing them to filter potential matches based on specific criteria, including age, gender, personality traits, name, etc.

### User Stories:
The website was designed based on user stories for instance:
1. **As a senior user**, I want to browse profiles with filters so that I can find matches aligned with my preferences.
2. **As a senior user**, I want a multi-step form with indicators so that I can easily sign up without feeling overwhelmed with too much requirements at once.
3. **As a bilingual user**, I want to view the website in my preferred language (English or one of two other languages) so that I can understand all features.
4. **As a user**, I want to check a status feed and real news links, so that I can stay engaged with meaningful content.
5. **As a privacy-conscious user**, I want better security and identity verication, so I know that the person that I've matched with is the same person in the picture.
larger profiles with more details, so I can make informed decisions about my connections.
6. **As a senior user**, I want a **profile verification feature**, so I can trust the authenticity of the people I connect with.
7. **As a busy user**, I want a **favourite feature**, so I can save profiles or pages and revisit them later.
8. **As a user with a tight budget**, I want **some free features** without needing to pay for a premium account.
9. **As a traveller**, I want a location-based search filter, so I can find people near me when I’m visiting different places.
10. **As a user, I want a status feed** to view updates from my connections or news links.

The objective of the website is to cater to seniors who might find navigating traditional dating websites difficult or intimidating and to provide them a safe space where everyon can be open-minded and welcoming. It ensures ease of use through an aesthetically pleasing and functional design.

### Design Assets:
Wireframes and mockups were created in Figma and on paper:
https://www.figma.com/design/WeZYpXjKUZARxdVPKEoCIM/FED_S10270328D_EstherFamYuLing_Assg1_wireframes?node-id=2099-923&t=pafYi4n7LdTR2xsW-1

https://www.figma.com/design/WeZYpXjKUZARxdVPKEoCIM/FED_S10270328D_EstherFamYuLing_Assg1_wireframes?node-id=2-80&t=pafYi4n7LdTR2xsW-1

## Features

#### Existing Features
1. **Landing Page**:
   - Introduces the app, its purpose, and value to seniors.
   - Clear call-to-action buttons for signup and login.

2. **User Registration Page**:
   - Simple registration form with field validation. With validation, profile picture adding, skip button, required field.

3. **Browse Matches**:
   - List of potential matches with profile pictures and basic information.

4. **Responsive Design**:
   - Website adjusts across desktop, tablet, and mobile devices.

5. **Accessibility Features**:
   - Large, readable fonts and soft pastel but contrasting colour schemes to aid visibility.

6. **Microinteractions**:
   - Subtle animations for buttons, hover effects, and scroll-based interactions.

7. **Status Feed**
   - Displays real-time news links and updates from user connections, fostering interaction.

8. **Profile Filters and Expanded Profiles**
   - Large profiles feature detailed information, photos, and , along with filter-based browsing. 


10. **Real News Links and Community Notes**
    - Integration of external news feeds to keep users informed and engaged. Community notes to notify users.

11. **Landing page Translation Support**
   - Available in two additional languages. Español and Français.

12. **Simple Matching, Favourite, Reject**
   - Displayed on other users' profiles, fast matching process.

13. **Multi-Step Forms**:
   - Verified that the progress indicators update correctly with each step.

#### Planned Features
1. **Video Chat Functionality**
   - Add live video chat for a more personal way of interacting with matches.

2. **Virtual Events**
   - Host online social events to encourage connections between users.

3. **AI Matchmaking**
   - Integrate AI algorithms to recommend highly compatible profiles based on interests and preferences.

4. **Voice Navigation**
   - Add voice-controlled navigation to make the site even more accessible.

## Technologies Used

- **HTML5** https://code.visualstudio.com/ 
   - Structured the website layout and ensured semantic elements for accessibility.

- **CSS3** https://code.visualstudio.com/ 
   - Styled the website using responsive, pastel, and senior-friendly design principles.

- **JavaScript** https://code.visualstudio.com/ 
   - Enabled interactivity, such as filtering, dynamic content updates, and multi-step forms.

- **Figma** https://www.figma.com
   - Designed the wireframes and mockups to visualise the user interface before implementation.

- **OpenAI** https://chat.openai.com
   - Translations, code validations, code corrections, questions.

- **Git/GitHub** https://github.com/
   - For version control and deployment.

-   **Canva** https://www.canva.com
   - For creating graphics and visuals used on the site.

## Testing
#### **1. Signup Page**
**Scenario:** Ensure that all Signup functionalities for multistep work correctly.
   1. Go to the signup page.
   2. Select an intention (e.g., "Find Your Love").
   3. Enter a valid email, password, and name. Test validation for incorrect inputs.
   4. Confirm age is above 40 and check validation for lower ages.
   5. Upload a profile picture and ID proof, ensuring the preview updates correctly.
   6. Skip steps 7–9 to test skip functionality.
   7. Complete all steps and submit. Validation should work and bring you to login page.

**Testing Steps:**
1. Leave all required fields blank and try to proceed—ensure proper error messages are displayed.
2. Enter an invalid email format and confirm the error handling.
3. Try uploading a non-image file for profile pictures and ID proof—verify error handling.
4. Skip optional steps and ensure the flow proceeds correctly to the last step.
5. Submit the form and verify redirection to the login page.


#### **2. Login Page**
**Scenario:** Should direct you to the index.page.

**Testing Steps:**
1. Enter details. Click login.

#### **3. Index Page**
**Scenario:** Test interactive features and news/updates loading.
- Verify the status carousel auto-scrolls and stops on hover.
- Test buttons for "Real News" and "Updates."
- Ensure news articles load correctly from the RSS feed.
- View Profile should direct you to profile page.
- Sidebar should slide out when menu bar is clicked.
- Search for others work for age, gender, personality.
- Filter by Ethnicity should filter by ethnicity.

**Testing Steps:**
1. **Status Carousel Auto-Scroll and Hover Interaction:**
   - **Step 1:** Observe the status carousel as it auto-scrolls.
   - **Step 2:** Hover the mouse pointer over the carousel to verify it stops scrolling.
   - **Step 3:** Move the pointer away from the carousel and ensure it resumes auto-scrolling after a brief delay.
   - **Step 4:** Verify smooth transitions between carousel items.

2. **"Real News" and "Community Notes" Buttons:**
   - **Step 1:** Click the "Real News" button.
   - **Step 2:** Ensure that articles from the "Real News" section load correctly.
   - **Step 3:** Click the "Community Notes" button.
   - **Step 4:** Verify that "Community Notes" displays content correctly, simulating a community update or post.
   - **Step 5:** Check that content in both sections (Real News and Community Notes) is formatted properly and loads without errors.
   - **Step 6:** Test switching between "Real News" and "Community Notes" buttons, ensuring smooth transitions between content.

3. **News Articles Load from RSS Feed:**
   - **Step 1:** Validate that news articles are being fetched correctly from the RSS feed.
   - **Step 2:** Verify that the feed works.
   - **Step 3:** Ensure that RSS feed items link back to their original sources.

4. **"View Profile" Button:**
   - **Step 1:** Click the "View Profile" button on any profile card.
   - **Step 2:** Ensure the page redirects to the correct profile page of the selected user.
   - **Step 3:** Verify that the profile page contains all relevant information (photo, bio, etc.).
   - **Step 4:** Check for smooth transitions.

6. **Sidebar Slide-Out Menu:**
   - **Step 1:** Click on the menu bar (three linesn) to open the sidebar.
   - **Step 2:** Ensure that the sidebar slides out smoothly without stuttering or delay.
   - **Step 3:** Test the sliding out action multiple times to ensure consistent behavior.
   - **Step 4:** Click on sidebar links and verify correct navigation to pages (e.g., home, messages, settings).
   - **Step 5:** Close the sidebar using the designated button or action and ensure it hides smoothly.

7. **Search Functionality for Age, Gender, and Personality:**
   - **Step 1:** Enter an age in the search field.
   - **Step 2:** Confirm that the search results display appropriate user profiles.
   - **Step 3:** Test the gender search and ensuring results are filtered accordingly "Male" "Female" "Non-Binary".
   - **Step 4:** Test personality search and confirm that only profiles with matching personality appear.

8. **Ethnicity Filter:**
   - **Step 1:** Click on the "Ethnicity" filter option from the filter.
   - **Step 2:** Select a specific ethnicity (e.g., Asian, Caucasian, etc.).
   - **Step 3:** Verify that the search results are filtered based on the selected ethnicity.
   - **Step 4:** Test the filter with multiple ethnicities to ensure that the search results are updated correctly.
   - **Step 5:** Ensure that no profiles are missed or inaccurately displayed when filtering by ethnicity.

9. **Responsiveness Test on Different Devices:**
   - **Step 1:** Test the website on various devices (desktop, tablet, smartphone).
   - **Step 2:** Ensure that the layout adjusts properly for screen sizes, ensuring readability and ease of use.
   - **Step 3:** Check for consistency in font sizes, image scaling, and content alignment across devices.
   - **Step 4:** Test all interactive features (buttons, sliders, filters, etc.) to ensure they work smoothly on mobile, tablet, and desktop.

   10. **Logout**
   - **Step 1:** Open slidebar, there is a logout button.
   - **Step 2:** Click the logout button. Ensure it redirects you to the landing page.
   
   ---

1. **Responsive Design**:
   - Tested across devices (desktop, tablet, and mobile).
   - Verified functionality on popular browsers: Firefox and Edge.

2. **Form Validation**:
   - Ensured proper error messages appear for invalid inputs. Required inputs are a must.

3. **Navigation Testing**:
   - Tested navigation links and buttons to ensure no broken links.
   
5. **Profile DIsplay**:
   - Check if dummy profile is loaded properly.

4. **Translations**:
   - Test translation filter on landing page.

5. **Mobile Responsiveness**:
   - Test the website on various mobile devices, tablets, on dev tools.

**Bugs Identified and Resolved**:
1. Buttons overlapping on smaller screens: Fixed by adjusting padding in CSS.
2. Profile cards not loading correctly: Resolved by adjusting flexbox properties.
2. **Form Validation**: Resolved by validation to include specific error messages for incomplete or incorrect inputs.

## Credits
- Canva. (n.d.). *Canva graphic design tool*. Retrieved from https://www.canva.com
- OpenAI. (2024). *ChatGPT*. Retrieved from https://chat.openai.com  

### Content  
- Articles and blog ideas were inspired by senior-focused communities and life experience blogs.  

### Media  
- Images for profiles and wireframes were sourced from free platforms like Canva.

### Acknowledgements
- Special thanks to the **Ngee Ann Polytechnic** faculty and Mr. Henry for guidance and resources during development.
- Inspired by last semester's course, "Innovation Made Possible". Tech for Elderly.


