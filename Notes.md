### General approach and reasons why I did the things I did
- upgrade dependencies (you better do it, or you will die a slow and painful tech debt death soon)
- move all to TypeScript to be more production and new developers joining "ready"
- double down on Styled Components as there was already a basic structure created and usage
- since going with the above, creation of some sort of BEM structure in SCSS seems pointless, therefore will keep the general code in SCSS and component specific code will live in Styled Components structure
- also since deploying Styled Components, all theme colours & general constants will live in `theme.ts` file
- not going to do TDD to save some time as I already invested in TypeScript overhead to stay "safer"
- the menu is hiding on smaller screen (arbitrary lg point value as specs do not cover it), there was no close menu button (bad UX arguably?) so I added something, probably more padding needed for mobile use and also would definitely need to consult with the designer but where was she/he?
- I believe that there are many approaches to mobile readiness, however for this particular task, I will deploy a custom solution. If this was a bigger production project, I'd most likely use a well-thought-out system, be it Tailwind (hot recently), Material UI Grid or the old school but still swinging Bootstrap.

Onwards and upwards!