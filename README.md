![floassessment](https://user-images.githubusercontent.com/40673456/105126893-8c462900-5a94-11eb-8ef9-d0a7796e0804.png)
# View the Live Project Here
[Live Project](https://ericas-flo-assessment.herokuapp.com/)
# Description of Components In Order of Visual Appearence on Site
## PopUpModal
Creates a pop-up offer on the site. Refresh page to make the pop-up reappear. Scales for mobile site! Component is called in App.js
## AnnouncementsBar
Creates announcements bar with announcements link and refferal link. On scroll down, AnnouncementsBar will dissappear, but will reappear on scroll up. Component is called in ./components/NavBar
![Announcements bar gif](https://user-images.githubusercontent.com/40673456/105129479-01682d00-5a9a-11eb-8e69-19cde11950e4.gif)
## NavBar
Creates Navbar that follows the page. Navbar links produce submenu's on hover. Navbar will scale depending on the width of the browser. Navbar hamburger menu is non-functional. Component is called in App.js
## NavLink
Creates the navigation links (Size, Colors, Style, More, How It Works) on the NavBar. NavSubMenu's will appear onMouseEnter and dissapear onMouseLeave. Component is called in ./components/NavBar
## NavSubMenu
Creates the submenu that appears on NavBar's hover. Component is called in ./components/NavLink
![NavSubMenu gif](https://user-images.githubusercontent.com/40673456/105129600-44c29b80-5a9a-11eb-81e3-b9bde74374db.gif)
## ImageLink
Creates the image + link text combination that appears in the Size and Colors submenu's. On link or image hover, an underline animation effect will slide up. Component is called in ./components/NavBar
<br />
![ImageLink gif](https://user-images.githubusercontent.com/40673456/105129730-8bb09100-5a9a-11eb-9467-cdfe9a4d6c65.gif)
## LinkUnderline
This component simply creates the link underline slide up animation that appears throughout the NavSubMenu's when links are hovered. Component is called in ./components/NavBar
<br />
![LinkUnderline gif](https://user-images.githubusercontent.com/40673456/105130005-172a2200-5a9b-11eb-8695-c50ad840a759.gif)
## LinkWithArrow
Creates a link animation where the arrow transitions to the right when hovered. This component is called in ./components/NavSubMenu and ./components/ArticleCard
<br />
![LinkWithArrow gif](https://user-images.githubusercontent.com/40673456/105130128-4b9dde00-5a9b-11eb-9b88-c2ac7b7fd55b.gif)
## Button
Creates the yellow, rounded button that appears throughout the site
## CardSectionWithButton
I found that there were a lot of similar looking sections that had one difference - the content or the cards inside of them. To optimize my coding, I created this CardSectionWithButton component that has a title, description, and a link button, and takes a children prop that is the cards inside. This component is featured on the sections "Functional and Dog-Approved", "Cleanup Made Easy", and "Pup-Approved Rugs". Component is called in App.js
## IconCard
Creates the card(s) found in the Functional and Dog-Approved section.
## VideoCard
Creates that card that feature's the videos found in Cleanup Made Easy section
## ShopCard
Creates the card that has star ratings and price ranges that is featured in Pup-Approved Rugs section.
## StarRating
I had fun with this component. My vision was to create a reusable star rating component that lets you input a number as a rating, and produces 5 font awesome icons in either full star, half star, or empty star depending on the number rating given!
## CardSection
This component is just like CardSectionWithButton, but doesn't have the button. Used on the Learn From The Pros section.
## ArticleCard
Creates the card that has article images and links found in Learn From The Pros section.
## Footer and MobileFooter
Footer component is displayed when the browser is large, and when it shrinks at a certain width, the MobileFooter is displayed instead




